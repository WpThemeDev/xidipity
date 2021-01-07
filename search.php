<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying searchs results
 *
 * ###:  search.php
 * bld:  31201215
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
/*
 *** setup database query
*/
global $wp_query;
$wp_data = $wp_query;
/*
*** redirect if category
*/
if (preg_match('/cat:/is', get_query_var('s'))) {
	$src_item = preg_replace('/cat:/', '', get_query_var('s'));
	$cat_id = get_cat_ID($src_item);
	if ($cat_id > 0)
	{
		wp_safe_redirect( get_category_link($cat_id) );
		exit;
	}
}
/*
*** redirect if tag
*/
if (preg_match('/tag:/is', get_query_var('s'))) {
	$src_item = preg_replace('/tag:/', '', get_query_var('s'));
	$tag_id = get_tag_ID($src_item);
	if ($tag_id > 0)
	{
		wp_safe_redirect( get_tag_link($tag_id) );
		exit;
	}
}
/*
*** redirect if only 1
*/
$cnt = $wp_data->post_count;
if ($cnt == 1)
{
	wp_safe_redirect( get_permalink() );
	exit;
}
/*
 *** set pagination variables
*/
$wp_ppp = get_option('posts_per_page');
$cur_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$tot_paged = $wp_data->max_num_pages;
/*
 *** set page options
*/
xty('mnu-dsp','yes');
xty('msg','Unable to find the requested informaton.');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
echo '<!-- xty:search/php -->' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
/*
 *** align sidebar
*/
if (xty('sb-aln') == 'left')
{
	echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5 md)mar:lt+0.5">' . "\n";
}
else
{
	echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5 md)mar:rt+0.5">' . "\n";
}
/*
 *** template-parts/content-precis/php
*/
include (locate_template('template-parts/content-precis.php', false, false));
/*
 *** developer.wordpress.org/reference/functions/get_sidebar/
*/
get_sidebar();
echo '</main>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xty:search/php -->' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: search.php / 31201215
*/
?>
