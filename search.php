<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying searchs results
 *
 * ###:  search.php
 * bld:  28200715
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
/*
 *** query data
*/
$search_item = get_search_query();
/*
 *** base query
*/
$qry_prms = array(
	'ignore_sticky_posts' => 1,
	'perm' => 'readable',
	'paged' => $wp_paged,
	'post_type' => 'post',
	'posts_per_page' => $wp_ppp,
);
/*
 *** modify query if id
*/
if (has_match($search_item, '#'))
{
	$id = str_replace(array(
		'#'
	) , '', $search_item);
	$qry_prms['post_type'] = 'any';
	$qry_prms['p'] = $id;
}
else
{
	/*
	 *** modify query if date
	*/
	if (($timestamp = strtotime($search_item)) !== false)
	{
		$year = date('Y', $timestamp);
		$month = date('m', $timestamp);
		$day = date('d', $timestamp);
		$qry_prms['date_query'] = array(
			array(
				'year' => $year,
				'month' => $month,
				'day' => $day,
				'column' => 'post_date',
			) ,
		);
	}
	else
	{
		/*
		 *** modify query if tag
		*/
		$tag_list = tag_to_id($search_item);
		if (!empty($tag_list))
		{
			$tag_array = explode(',', $tag_list);
			$qry_prms['tag__in'] = $tag_array;
		}
		else
		{
			/*
			 *** modify query if category
			*/
			$cat_list = category_to_id($search_item);
			if (!empty($cat_list))
			{
				$qry_prms['cat'] = $cat_list;
			}
			else
			{
				/*
				 *** modify query if word search
				*/
				if (empty($tag_list) && empty($cat_list))
				{
					$qry_prms['post_type'] = 'any';
					$qry_prms['s'] = $search_item;
				}
			}
		}
	}
}
$wp_data = new WP_Query($qry_prms);
/*
 *** redirect if only one
*/
if ($wp_data->have_posts())
{
	if ($wp_data->post_count == 1)
	{
		wp_safe_redirect(get_permalink($wp_data
			->post
			->ID));
		exit;
	}
}
/*
 *** set page options
*/
dsp_menu('yes');
sup_msg('I was unable to find the requested informaton.');
/*
 *** set pagination variables
*/
/*: current pagination number :*/
$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
/*: posts per page :*/
$wp_ppp = get_option('posts_per_page');
/*: total pages :*/
$wp_total = $wp_data->max_num_pages;
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
echo '<cmt name="begin">SEARCH/PHP</cmt>' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
/*
 *** align sidebar
*/
if (XTY_SIDEBAR_ALIGN == 'left')
{
	echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:left+0.5">' . "\n";
}
else
{
	echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:right+0.5">' . "\n";
}
/*
 *** template-parts/content-precis/php ***
*/
include (locate_template('template-parts/content-precis.php', false, false));
/*
 *** developer.wordpress.org/reference/functions/get_sidebar/
*/
get_sidebar();
echo '</main>' . "\n";
echo '</div>' . "\n";
echo '<cmt name="end">SEARCH/PHP</cmt>' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: search.php / 28200715
*/
?>
