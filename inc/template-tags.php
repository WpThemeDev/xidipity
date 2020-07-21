<?php
/**
 * WordPress Xidipity Theme
 * Theme Extended Functionality
 *
 * ###:  inc/template-tags.php
 * bld:  28200801
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
/*  # xty_dsp_meta
    # 28200801
    # return html row of meta items
**/
if (!function_exists('xty_dsp_meta'))
{
	function xty_dsp_meta($items = array())
	{
		$html_retval = '';
		if (count($items) > 0)
		{
			$html_retval .= '<div class="fx:rw fxa:1 fxb:1 fxc:3">';
			foreach ($items as $key => $item)
			{
				$key_type = substr($key, 0, 3);
				switch ($key_type)
				{
					case 'raw':
						$html_retval .= $item;
					break;
					case 'txt':
						$html_retval .= '<div class="fnt:size-2x-small">' . $item . '</div>';
					break;
					case 'div':
						$html_retval .= '<div class="txt:bas dsp:none sm)dsp:block pad:hrz+0.5">' . $item . '</div>';
					break;
					default:
						$html_retval .= '<div class="fx:r fxa:1 fxb:1 fxc:3 ht:2"><div class="fnt:size-x-medium pad:right+0.5">' . $item . '</div></div>';
				}
			}
			$html_retval .= '</div>';
		}
		return $html_retval;
	}
}
/*  # xty_metalinks
    # 28200801
    # return html of links
**/
if (!function_exists('xty_metalinks'))
{
	function xty_metalinks($items = array())
	{
		$html_retval = '<div class="fx:rw fxa:1 fxb:1 fxc:3">';
		foreach ($items as $item)
		{
			if (has_match('div', $item))
			{
				$html_retval .= $item;
			}
			else
			{
				$html_retval .= '<div>' . $item . '</div>';
			}
		}
		$html_retval .= '</div>';
		return $html_retval;
	}
}
/*  # xty_date
    # 28200801
    # return current date string
**/
if (!function_exists('xty_date'))
{
	function xty_date()
	{
		return current_time(get_option('date_format'));
	}
}
/*  # xty_comment_cnt
    # 28200801
    # return number of comments
**/
if (!function_exists('xty_comment_cnt'))
{
	function xty_comment_cnt()
	{
		$html_retval = 0;
		if (comments_open())
		{
			$html_retval = get_comments_number();
		}
		return $html_retval;
	}
}
/*  # xty_dsp_content
    # 28200801
    # display content
**/
if (!function_exists('xty_dsp_content'))
{
	function xty_dsp_content()
	{
		remove_filter('the_content', 'wpautop');
		the_content();
		return;
	}
}
/*  # xty_published
    # 28200801
    # return date array
**/
if (!function_exists('xty_published'))
{
	function xty_published()
	{
		return array(
			"date" => get_the_date(get_option('date_format')) ,
			"revision" => get_the_modified_time(get_option('date_format'))
		);
	}
}
/*  # xty_support_agent
    # 28200801
    # return support agent message
**/
if (!function_exists('xty_support_agent'))
{
	function xty_support_agent($msg = '')
	{
		return '<div class="mar:vrt+1"><div class="fx:r fxa:1 fxc:3 bdr:left-solid-thick bdr:pri-2 bkg:tint-bas-1 cnr:arch-small"><div class="fnt:size-7x-large pad:hrz+0.5"><i class="icon:support_agent_solid"></i></div><div class="pad:right+0.5 pad:vrt+0.5 txt:bas-3"><p class="fnt:family-serif fnt:size-2x-large sm)fnt:size-3x-large fnt:weight-medium wd:100%">' . get_bloginfo('name') . ' Support</p><p>' . $msg . '</p><div class="mar:vrt+0.5 pad:vrt+0.5"><!--  28200801:BUTTON --><button class="aln:text-center fnt:size-x-small sm)fnt-size-medium" onclick="javascript:history.back()">Previous page</button><!-- /28200801:BUTTON --></div></div></div></div>' . "\n";
	}
}
/*  # xty_author
    # 28200801
    # return post author
**/
if (!function_exists('xty_author'))
{
	function xty_author()
	{
		// Global Post
		global $post;
		$author = esc_html(get_the_author_meta('display_name', $post_author_id));
		if (empty($author))
		{
			$author = esc_html(get_the_author_meta('nickname', $post_author_id));
		}
		$post_author_id = get_post_field('post_author', $post->ID);
		return '<a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID', $post_author_id))) . '">' . $author . '</a>';
	}
}
/*  # xty_user
    # 28200801
    # return post author
**/
if (!function_exists('xty_user'))
{
	function xty_user()
	{
		if (is_user_logged_in())
		{
			$user_name = get_user_meta(get_current_user_id() , 'display_name', true);
			if (empty($user_name))
			{
				$user_name = get_user_meta(get_current_user_id() , 'nickname', true);
			}
		}
		else
		{
			$user_name = '';
		}
		return $user_name;
	}
}
/*  # xty_tags
    # 28200801
    # return post author
**/
if (!function_exists('xty_tags'))
{
	function xty_tags($arg = 0)
	{
		$html_val = '';
		$wp_tags = get_the_tags($arg);
		if (is_array($wp_tags))
		{
			$cnt = 1;
			$last_tag = count($wp_tags);
			foreach ($wp_tags as $wp_tag)
			{
				$html_val .= '<a href="' . get_tag_link($wp_tag->term_id) . '">' . $wp_tag->name . '</a>';
				if ($cnt++ < $last_tag)
				{
					$html_val .= ', ';
				}
			}
		}
		return $html_val;
	}
}
/*  # xty_readmore
    # 28200801
    # return html read more link
**/
if (!function_exists('xty_readmore'))
{
	function xty_readmore($arg = '')
	{
		if (empty($arg))
		{
			$html_retval = '<div class="fnt:size-medium mar:vrt+0.5"><span class="fnt:size-large pad:right+0.25"><i class="icon:comment_outline"></i></span>Additional information not available.</div>';
		}
		else
		{
			$html_retval = '<div class="fnt:size-medium mar:vrt+0.5"><span class="fnt:size-large pad:right+0.5"><i class="icon:book_open_solid"></i></span><a href="' . $arg . '" >Read more &hellip;</a></div>';
		}
		return $html_retval;
	}
}
/*  # deprecate xidipity_posted_by
    # 90904.1a
    # core wp function
    # return posted author
**/
if (!function_exists('xidipity_posted_by'))
{
	/**
	 * Prints author.
	 */
	function xidipity_posted_by()
	{
		// Global Post
		global $post;
		// We need to get author meta data from both inside/outside the loop.
		$post_author_id = get_post_field('post_author', $post->ID);
		// Byline
		$byline = sprintf(esc_html_x('Author -  %s', 'post author', 'xidipity') , '<span class="author vcard"><a class="url fn n" style="max-height:68px;max-width:68px;" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID', $post_author_id))) . '">' . esc_html(get_the_author_meta('nickname', $post_author_id)) . '</a></span>');
		// Posted By HTML
		$html = '<span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.
		
		/**
		 * Filters the Posted By HTML.
		 *
		 * @param string $html Posted By HTML.
		 */
		$html = apply_filters('xidipity_posted_by_html', $html);
		// echo $html; // WPCS: XSS OK.
		return $html; // WPCS: XSS OK.
		
	}
}
/*  # xty_category_icon
    # 28200801
    # return category icon
**/
if (!function_exists('xty_category_icon'))
{
	function xty_category_icon($arg = '')
	{
		// system
		$category = trim(get_cat_name(get_option('default_category')));
		$html_retval = '<i class="icon:category_solid"></i>';
		if (is_sticky())
		{
			$html_retval = '<i class="icon:category_sticky_solid"></i>';
		}
		elseif (has_match($arg, $category))
		{
			$html_retval = '<i class="icon:category_solid"></i>';
		}
		elseif (has_match(strtolower($arg) , 'archive'))
		{
			$html_retval = '<i class="icon:category_archive_solid"></i>';
		}
		else
		{
			$html_retval = '<i class="icon:category_outline"></i>';
		}
		// return html
		return $html_retval;
	}
}
/*  # xty_category
    # 28200801
    # return category
**/
if (!function_exists('xty_category'))
{
	function xty_category($arg = '')
	{
		/*
		          show yoast primary category, or first category
		*/
		$category = get_the_category();
		$useCatLink = true;
		$html_retval = '';
		/*
		          if post has a category assigned
		*/
		if ($category)
		{
			$category_display = '';
			$category_link = '';
			if (class_exists('WPSEO_Primary_Term'))
			{
				/*
				                show the post's 'primary' category, if this yoast feature
				                is available, & one is set
				*/
				$wpseo_primary_term = new WPSEO_Primary_Term('category', get_the_id());
				$wpseo_primary_term = $wpseo_primary_term->get_primary_term();
				$term = get_term($wpseo_primary_term);
				if (is_wp_error($term))
				{
					/*
					                   default to first category (not yoast) if an error is returned
					*/
					$category_display = $category[0]->name;
					$category_link = get_category_link($category[0]->term_id);
				}
				else
				{
					/*
					                   yoast primary category
					*/
					$category_display = $term->name;
					$category_link = get_category_link($term->term_id);
				}
			}
			else
			{
				/*
				                default, display the first category in wp's list of assigned categories
				*/
				$category_display = $category[0]->name;
				$category_link = get_category_link($category[0]->term_id);
			}
			/*
			             return category
			*/
			if (!empty($category_display))
			{
				if ($useCatLink == true && !empty($category_link) && empty($arg))
				{
					$html_retval .= '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
				}
				else
				{
					$html_retval = htmlspecialchars($category_display);
				}
			}
			/*: return html :*/
			return $html_retval;
		}
	}
}
/*  # deprecate
    # 90728.1
    # return html
**/
if (!function_exists('xidipity_first_category'))
{
	function xidipity_first_category($arg = '')
	{
		/*
		          show yoast primary category, or first category
		*/
		$category = get_the_category();
		$useCatLink = true;
		$html_retval = '';
		/*
		          if post has a category assigned
		*/
		if ($category)
		{
			$category_display = '';
			$category_link = '';
			if (class_exists('WPSEO_Primary_Term'))
			{
				/*
				                show the post's 'primary' category, if this yoast feature
				                is available, & one is set
				*/
				$wpseo_primary_term = new WPSEO_Primary_Term('category', get_the_id());
				$wpseo_primary_term = $wpseo_primary_term->get_primary_term();
				$term = get_term($wpseo_primary_term);
				if (is_wp_error($term))
				{
					/*
					                   default to first category (not yoast) if an error is returned
					*/
					$category_display = $category[0]->name;
					$category_link = get_category_link($category[0]->term_id);
				}
				else
				{
					/*
					                   yoast primary category
					*/
					$category_display = $term->name;
					$category_link = get_category_link($term->term_id);
				}
			}
			else
			{
				/*
				                default, display the first category in wp's list of assigned categories
				*/
				$category_display = $category[0]->name;
				$category_link = get_category_link($category[0]->term_id);
			}
			/*
			             return category
			*/
			if (!empty($category_display))
			{
				if ($useCatLink == true && !empty($category_link) && empty($arg))
				{
					$html_retval .= '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
				}
				else
				{
					$html_retval = htmlspecialchars($category_display);
				}
			}
			/*: return html :*/
			return $html_retval;
		}
	}
}
/*  # custom logo
    # 90904.1a
    # core wordpress process
**/
if (!function_exists('xidipity_the_custom_logo'))
{
	/**
	 * Displays the optional custom logo.
	 *
	 * Does nothing if the custom logo is not available.
	 */
	function xidipity_the_custom_logo()
	{
		if (function_exists('the_custom_logo'))
		{
			the_custom_logo();
		}
	}
}
/*  # does excerpt exist
    # 90904.1a
    # core wordpress process
    # returns bool
**/
function xidipity_has_excerpt()
{
	// Post Excerpt
	$post_excerpt = get_the_excerpt();
	/**
	 * Filters the Post has excerpt.
	 *
	 * @param bool
	 */
	return apply_filters('xidipity_has_excerpt', !empty($post_excerpt));
}
/*
 * EOF:     inc/template-tags.php
 * Build:   28200801
 *
*/
?>
