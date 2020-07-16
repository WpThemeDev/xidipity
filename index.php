<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying blog excerpts
 *
 * ###:  index.php
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
/*
 *** filter out exclusions from active categories
*/
$category_ids = filter_categories('archive,featured category 1,featured category 2,featured category 3');
if (empty($category_ids))
{
	$cat_array = array(
		0
	);
}
else
{
	$cat_array = explode(',', $category_ids);
}
/*
 *** setup database query
*/
$qry_prms = array(
	'category__in' => $cat_array,
	'order' => 'DESC',
	'orderby' => 'date',
	'perm' => 'readable',
	'paged' => $wp_paged,
	'post_type' => 'post',
	'post_status' => 'publish',
	'posts_per_page' => $wp_ppp
);
$wp_data = new WP_Query($qry_prms);
/*
 *** set page options
*/
dsp_menu('yes');
/*
 *** check for new blog
*/
$current_user = xty_user();
$wp_posts = get_posts(array(
	'numberposts' => 1,
	'post_status' => 'any'
));
if (!empty($current_user) && empty($wp_posts))
{
	$first_post = esc_url(admin_url('post-new.php'));
	sup_msg('<h5>Welcome</h5><p>Ready to publish your first post? <a href="$first_post">Get started here</a>.</p>');
}
elseif (empty($current_user) && empty($wp_posts))
{
	sup_msg('<h5>Welcome</h5><p>Ready to publish your first post? Login to get started.</p>');
}
else
{
	sup_msg('Unable to load blog posts.');
}
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
echo '<cmt name="begin">INDEX/PHP</cmt>' . "\n";
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
echo '<cmt name="end">INDEX/PHP</cmt>' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: index.php / 27200615
*/
?>
