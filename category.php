<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying pages assigned to category
 *
 * ###:  category.php
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
 *** set pagination variables
*/
$per_paged = get_option('posts_per_page');
$cur_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$tot_paged = $wp_data->max_num_pages;
/*
 *** set page options
*/
xty('mnu-dsp','yes');
xty('msg','Catgory/php was unable to load the requested template.');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
echo '<!-- xty:category/php -->' . "\n";
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
echo '<!-- /xty:category/php -->' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: category.php / 31201215
*/
?>
