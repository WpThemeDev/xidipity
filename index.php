<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying blog excerpts
 *
 * ###:  index.php
 * bld:  28200801
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
global $wp_query;
/*
 *** set page options
*/
xty('mnu-dsp', 'yes');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
echo '<cmt name="begin">INDEX/PHP</cmt>' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
/*
 *** align sidebar
*/
if (xty('sb-aln') == 'left')
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
 *** check for new blog
*/
if (wp_count_posts()->publish < 1)
{
	$current_user = xty_user();
	if (!empty($current_user))
	{
		$first_post = esc_url(admin_url('post-new.php'));
		xty('msg', '<h5>Welcome</h5><p>Ready to publish your first post? <a href="$first_post">Get started here</a>.</p>');
	}
	elseif (empty($current_user) && empty($wp_posts))
	{
		xty('msg', '<h5>Welcome</h5><p>Ready to publish your first post? Login to get started.</p>');
	}
	else
	{
		echo xty_support_agent('Unable to load Blog Posts.');
	}
}
else
{
	/*
	 *** set pagination variables
	*/
	/*: current pagination number :*/
	$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
	/*: posts per page :*/
	$wp_ppp = get_option('posts_per_page');
	/*
	 *** setup database query
	*/
	$xclude_1 = get_cat_ID('archive');
	$xclude_2 = get_cat_ID('Special group 1');
	$xclude_3 = get_cat_ID('Special group 2');
	$xclude_4 = get_cat_ID('Special group 3');
	$qry_prms = array(
		'category__not_in' => array(
			$xclude_1,
			$xclude_2,
			$xclude_3,
			$xclude_4
		) ,
		'orderby' => 'date',
		'order' => 'DESC',
		'perm' => 'readable',
		'paged' => $wp_paged,
		'post_type' => 'post',
		'post_status' => 'any',
		'posts_per_page' => $wp_ppp
	);
	$wp_data = new WP_Query($qry_prms);
	/*: total pages :*/
	$wp_total = $wp_data->max_num_pages;
	/*
	 *** template-parts/content-precis/php ***
	*/
	include (locate_template('template-parts/content-precis.php', false, false));
}
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
 * EOF: index.php / 28200801
*/
?>
