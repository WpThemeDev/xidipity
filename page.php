<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying pages
 *
 * ###:  page.php
 * bld:  01210115
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
/*
 *** set page options
*/
xty('mnu-dsp', 'yes');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
/*
 ***/
echo '<!-- xty:page/php -->' . "\n";
/***
*/
echo '<!-- xty:page/body -->' . "\n";
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
echo '<article class="box:shadow bkg:content txt:content dsp:blk pad:hrz+1 ht:min10 wd:100%">' . "\n";
if (have_posts())
{
	the_post();
	/*
	 *** developer.wordpress.org/reference/functions/the_title/
	*/
	echo '<!-- xty:page/body/header -->' . "\n";
	echo '<header class="mar:tp+1 wd:100%">' . "\n";
	the_title('<div class="pg:title">', '</div>');
	echo '<div class="bkg:bas+2 ln mar:bt+0.75"></div>' . "\n";
	echo '</header>' . "\n";
	echo '<!-- /xty:page/body/header -->' . "\n";
	echo '<!-- xty:page/body/content -->' . "\n";
	echo '<div class="bkg:content dsp:flw-rt ht:min10 mar:bt+0.5 wd:100%">' . "\n";
	/*
	 *** yoast breadcrumbs plugin
	*/
	if (!is_front_page() && !is_home())
	{
		if (function_exists('yoast_breadcrumb'))
		{
			yoast_breadcrumb('<div id="breadcrumbs" class="seo-pag-breadcrumbs">', '</div>' . "\n");
		}
	}
	echo xty_dsp_content();
	echo '</div>' . "\n";
	echo '<!-- /xty:page/body/content -->' . "\n";
}
else
{
	/*
	 *** inc/templage-tags/xty_support_agent
	*/
	echo xty_support_agent('Page/php was unable to load the requested template.');
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
/*
 *** SIDEBAR/PHP ***
*/
echo '<!-- xty:page/body/sidebar -->' . "\n";
get_sidebar();
echo '<!-- /xty:page/body/sidebar -->' . "\n";
echo '</main>' . "\n";
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
 * EOF: page.php / 01210115
*/
?>
