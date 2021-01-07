<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying blog excerpts
 *
 * ###:  index.php
 * bld:  31201215
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
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
echo '<!-- xty:index/php -->' . "\n";
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
		/*
		 *** inc/templage-tags/xty_support_agent
		*/
		echo xty_support_agent('Index/php was unable to load Blog Posts.');
	}
}
else
{
	/*
	 *** set pagination variables
	*/
	$per_paged = get_option('posts_per_page');
	$cur_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
	/*
	 *** setup database query
	*/
	$category_ids = get_cat_IDs('-archive,-specialgroup1,-specialgroup2,-specialgroup3');
	$qry_prms = array(
		'cat' => $category_ids,
		'orderby' => 'date',
		'order' => 'DESC',
		'perm' => 'readable',
		'paged' => $cur_paged,
		'post_type' => 'post',
		'post_status' => 'any',
		'posts_per_page' => $per_paged
	);
	$wp_data = new WP_Query($qry_prms);
	$tot_paged = $wp_data->max_num_pages;
	/*
	 *** template-parts/content-precis/php
	*/
	include (locate_template('template-parts/content-precis.php', false, false));
}
/*
 *** developer.wordpress.org/reference/functions/get_sidebar/
*/
get_sidebar();
echo '</main>' . "\n";
echo '</div>' . "\n";
echo '<!-- xty:index/php -->' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: index.php / 31201215
*/
?>
