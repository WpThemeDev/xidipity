<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying blog post
 *
 * ###:  single.php
 * bld:  01210115
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
/*
 *** set page options
*/
xty('mnu-dsp','yes');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
/*
 ***/
echo '<!-- xty:file/single/php -->' . "\n";
/***
*/
echo '<!-- xty:page/body -->' . "\n";
echo '<div class="fxd:1 fxe:2 fb:100%">' . "\n";
echo '<!-- xty:page/body/post -->' . "\n";
/*
 *** align sidebar
*/
if (xty('sb-aln') == 'left')
{
	echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<!-- xty:page/body/post/content -->' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5 md)mar:lt+0.5">' . "\n";
}
else
{
	echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<!-- xty:page/body/post/content -->' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5 md)mar:rt+0.5">' . "\n";
}
echo '<article class="bkg:content box:shadow dsp:blk ht:min10 pad:hrz+1 txt:content wd:100%">' . "\n";
if (have_posts())
{
	the_post();
	/*
	 *** developer.wordpress.org/reference/functions/the_title/
	*/
	echo '<!-- xty:page/body/post/header -->' . "\n";
	echo '<header class="mar:tp+1 wd:100%">' . "\n";
	the_title('<div class="pg:title">', '</div>');
	echo '<div class="bkg:bas+2 ln mar:bt+0.75"></div>' . "\n";
	echo '</header>' . "\n";
	echo '<!-- /xty:page/body/post/header -->' . "\n";
	/*
	 *** yoast breadcrumbs plugin
	*/
	if (!is_front_page() && !is_home())
	{
		if (function_exists('yoast_breadcrumb'))
		{
			yoast_breadcrumb('<div id="breadcrumbs" class="seo-pst-breadcrumbs">', '</div>');
		}
	}
	$options = array(
		'category',
		'author',
		'publish',
		'tags',
		'comments'
	);
	echo '<div class="fx:rw-rev md)fx:rw fxa:1 fxb:1 fxc:1 mar:bt+0.75">' . "\n";
	echo '<!-- xty:post/panel/left -->' . "\n";
	echo '<div class="fxd:1 fxe:1 fb:100% md)fb:25% lg)fb:20% mar:tp+0.5 md)mar:tp+0">' . "\n";
	/*
	 *** left column stats
	*/
	echo xty_info_pole($options) . "\n";
	echo '</div>' . "\n";
	echo '<!-- /xty:post/panel/left -->' . "\n";
	echo '<!-- xty:post/panel/right -->' . "\n";
	echo '<div class="fxd:1 fxe:1 fb:100% md)fb:75% lg)fb:80%">' . "\n";
	echo '<div class="dsp:flw-rt">' . "\n";
	echo xty_dsp_content();
	echo '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<!-- /xty:post/panel/right -->' . "\n";
	echo '</div>' . "\n";
	/*
	 *** comments
	*/
	if (comments_open() || get_comments_number() > 0)
	{
		echo '<div class="bkg:bas+2 ln mar:vrt+0.5"></div>' . "\n";
		if (!post_password_required())
		{
			/*
			 *** CONTENT/COMMENTS/PHP ***
			*/
			echo '<!-- xty:page/body/post/content/comments -->' . "\n";
			get_template_part('template-parts/content', 'comments');
			echo '<!-- /xty:page/body/post/content/comments -->' . "\n";
		}
	}
}
else
{
	/*
	 *** inc/templage-tags/xty_support_agent
	*/
	echo xty_support_agent('Single/php was unable to load the requested blog post.');
}
/*
 *** inc/templage-tags/xty_content_footer
*/
if (empty(xty_user()))
{
	echo xty_content_footer(array(
		'today',
		'print'
	));
}
else
{
	echo xty_content_footer(array(
		'user',
		'today',
		'print'
	));
}
echo '</article>' . "\n";
echo '</section>' . "\n";
echo '<!-- /xty:page/body/post/content -->' . "\n";
/*
 *** SIDEBAR/PHP ***
*/
echo '<!-- xty:page/body/post/sidebar -->' . "\n";
get_sidebar();
echo '<!-- /xty:page/body/post/sidebar -->' . "\n";
echo '</main>' . "\n";
echo '<!-- /xty:page/body/post -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /xty:page/body -->' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: single.php / 01210115
*/
?>
