<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying comments
 *
 * ###:  template-parts/content-comments.php
 * bld:  29200815
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
global $wp_query, $comment_alt, $comment_depth, $comment_thread_alt, $overridden_cpage, $in_comment_loop;
echo '<cmt name="begin">TEMPLATE-PARTS/CONTENT-COMMENTS/PHP</cmt>' . "\n";
echo '<div class="bkg:content txt:content dsp:block pad:hrz+1 mar:bt+1 ht:min10 wd:100% prt[dsp:none]">' . "\n";
$comments_args = array(
	'status'  => 'approved',
	'number' => '10',
	'post_id' => get_the_ID()
);
$comments = get_comments($comments_args);
$comment_count = get_comments_number();
$have_comments = ($comment_count > 0);
if ($have_comments)
{
	$in_comment_loop = true;
	$comment_alt = 0;
	$comment_thread_alt = 0;
	$comment_depth = 1;
	$args = array(
		'walker' => null,
		'max_depth' => '',
		'style' => 'ol',
		'callback' => null,
		'end-callback' => null,
		'type' => 'all',
		'page' => '',
		'per_page' => '',
		'avatar_size' => 32,
		'reverse_top_level' => null,
		'reverse_children' => '',
		'format' => current_theme_supports('html5', 'comment-list') ? 'html5' : 'xhtml',
		'short_ping' => false,
		'echo' => true,
	);
	$parsed_args = wp_parse_args($args, $defaults);
	/**
	 * Filters the arguments used in retrieving the comment list.
	 *
	 * @since 4.0.0
	 *
	 * @see wp_list_comments()
	 *
	 * @param array $parsed_args An array of arguments for displaying comments.
	 */
	$parsed_args = apply_filters('wp_list_comments_args', $parsed_args);
	// Figure out what comments we'll be looping through ($_comments).
	if (null !== $comments)
	{
		$comments = (array)$comments;
		if (empty($comments))
		{
			return;
		}
		if ('all' != $parsed_args['type'])
		{
			$comments_by_type = separate_comments($comments);
			if (empty($comments_by_type[$parsed_args['type']]))
			{
				return;
			}
			$_comments = $comments_by_type[$parsed_args['type']];
		}
		else
		{
			$_comments = $comments;
		}
	}
	else
	{
		/*
		 * If 'page' or 'per_page' has been passed, and does not match what's in $wp_query,
		 * perform a separate comment query and allow Walker_Comment to paginate.
		*/
		if ($parsed_args['page'] || $parsed_args['per_page'])
		{
			$current_cpage = get_query_var('cpage');
			if (!$current_cpage)
			{
				$current_cpage = 'newest' === get_option('default_comments_page') ? 1 : $wp_query->max_num_comment_pages;
			}
			$current_per_page = get_query_var('comments_per_page');
			if ($parsed_args['page'] != $current_cpage || $parsed_args['per_page'] != $current_per_page)
			{
				$comment_args = array(
					'post_id' => get_the_ID() ,
					'orderby' => 'comment_date_gmt',
					'order' => 'ASC',
					'status' => 'approve',
				);
				if (is_user_logged_in())
				{
					$comment_args['include_unapproved'] = get_current_user_id();
				}
				else
				{
					$unapproved_email = wp_get_unapproved_comment_author_email();
					if ($unapproved_email)
					{
						$comment_args['include_unapproved'] = array(
							$unapproved_email
						);
					}
				}
				$comments = get_comments($comment_args);
				if ('all' != $parsed_args['type'])
				{
					$comments_by_type = separate_comments($comments);
					if (empty($comments_by_type[$parsed_args['type']]))
					{
						return;
					}
					$_comments = $comments_by_type[$parsed_args['type']];
				}
				else
				{
					$_comments = $comments;
				}
			}
			// Otherwise, fall back on the comments from `$wp_query->comments`.
			
		}
		else
		{
			if (empty($wp_query->comments))
			{
				return;
			}
			if ('all' != $parsed_args['type'])
			{
				if (empty($wp_query->comments_by_type))
				{
					$wp_query->comments_by_type = separate_comments($wp_query->comments);
				}
				if (empty($wp_query->comments_by_type[$parsed_args['type']]))
				{
					return;
				}
				$_comments = $wp_query->comments_by_type[$parsed_args['type']];
			}
			else
			{
				$_comments = $wp_query->comments;
			}
			if ($wp_query->max_num_comment_pages)
			{
				$default_comments_page = get_option('default_comments_page');
				$cpage = get_query_var('cpage');
				if ('newest' === $default_comments_page)
				{
					$parsed_args['cpage'] = $cpage;
					/*
					 * When first page shows oldest comments, post permalink is the same as
					 * the comment permalink.
					*/
				}
				elseif (1 == $cpage)
				{
					$parsed_args['cpage'] = '';
				}
				else
				{
					$parsed_args['cpage'] = $cpage;
				}
				$parsed_args['page'] = 0;
				$parsed_args['per_page'] = 0;
			}
		}
	}
	if ('' === $parsed_args['per_page'] && get_option('page_comments'))
	{
		$parsed_args['per_page'] = get_query_var('comments_per_page');
	}
	if (empty($parsed_args['per_page']))
	{
		$parsed_args['per_page'] = 0;
		$parsed_args['page'] = 0;
	}
	if ('' === $parsed_args['max_depth'])
	{
		if (get_option('thread_comments'))
		{
			$parsed_args['max_depth'] = get_option('thread_comments_depth');
		}
		else
		{
			$parsed_args['max_depth'] = - 1;
		}
	}
	if ('' === $parsed_args['page'])
	{
		if (empty($overridden_cpage))
		{
			$parsed_args['page'] = get_query_var('cpage');
		}
		else
		{
			$threaded = (-1 != $parsed_args['max_depth']);
			$parsed_args['page'] = ('newest' == get_option('default_comments_page')) ? get_comment_pages_count($_comments, $parsed_args['per_page'], $threaded) : 1;
			set_query_var('cpage', $parsed_args['page']);
		}
	}
	// Validation check.
	$parsed_args['page'] = intval($parsed_args['page']);
	if (0 == $parsed_args['page'] && 0 != $parsed_args['per_page'])
	{
		$parsed_args['page'] = 1;
	}
	if (null === $parsed_args['reverse_top_level'])
	{
		$parsed_args['reverse_top_level'] = ('desc' == get_option('comment_order'));
	}
	wp_queue_comments_for_comment_meta_lazyload($_comments);
	if (empty($parsed_args['walker']))
	{
		$walker = new Walker_Comment;
	}
	else
	{
		$walker = $parsed_args['walker'];
	}
	$output = $walker->paged_walk($_comments, $parsed_args['max_depth'], $parsed_args['page'], $parsed_args['per_page'], $parsed_args);
	$in_comment_loop = false;
	echo '<ol>' . "\n";
	echo $output;
	echo '</ol>' . "\n";
}
/*
 ***
 * open comments
 ***
*/
if ($have_comments)
{
	if (get_comment_pages_count() > 1 && get_option('page_comments'))
	{
		echo '<nav id="comment-nav-above" class="navigation comment-navigation comment-navigation-above" role="navigation">' . "\n";
		echo '<h2 class="screen-reader-text">' . esc_html_e('Comment navigation', 'xidipity') . '</h2>' . "\n";
		echo '<div class="nav-links">' . "\n";
		echo '<div class="nav-previous">' . previous_comments_link(esc_html__('Older Comments', 'xidipity')) . '</div>' . "\n";
		echo '<div class="nav-next">' . next_comments_link(esc_html__('Newer Comments', 'xidipity')) . '</div>' . "\n";
		echo '</div>' . "\n";
		echo '</nav>' . "\n";
	}
	/*
	       comments
	*/
	if (get_comment_pages_count() > 1 && get_option('page_comments'))
	{
		echo '<nav id="comment-nav-below" class="navigation comment-navigation comment-navigation-below" role="navigation">' . "\n";
		echo '<h2 class="screen-reader-text">' . esc_html_e('Comment navigation', 'xidipity') . '</h2>' . "\n";
		echo '<div class="nav-links">' . "\n";
		echo '<div class="nav-previous">' . previous_comments_link(esc_html_e('Older Comments', 'xidipity')) . '</div>' . "\n";
		echo '<div class="nav-next">' . next_comments_link(esc_html_e('Newer Comments', 'xidipity')) . '</div>' . "\n";
		echo '</div>' . "\n";
		echo '</nav>' . "\n";
	}	
}
/*
 ***
 * closed comments
 ***
*/
if (!comments_open() && '0' != get_comments_number() && post_type_supports(get_post_type() , 'comments'))
{
	echo '<div class="fnt:siz-1 mar:vrt+0.75">' . "\n";
	echo '<p><span class="pad:rt+0.5"><i class="icon:comment_closed_outline"></i></span>Comments are closed.</p>' . "\n";
	echo '</div>' . "\n";
}
/*
 ***
 * comment form
 ***
*/
comment_form(array(
	'title_reply' => '<span class="pad:rt+0.5"><i class="icon:comments_outline"></i></span>Your Comment',
	'logged_in_as' => ''
));
echo '</div>' . "\n";
echo '<cmt name="end">TEMPLATE-PARTS/CONTENT-COMMENTS/PHP</cmt>' . "\n";
/*
 * EOF: template-parts/content-comments.php / 29200815
*/
?>
