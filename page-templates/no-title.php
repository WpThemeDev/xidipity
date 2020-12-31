<?php
/**
 * Template Name: No Title
 *
 * WordPress Xidipity Theme
 * The template for displaying page without page title
 *
 * ###:  page-templates/no-title.php
 * bld:  30201115
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
echo '<cmt>### PAGE/PHP ###</cmt>' . "\n";
/***
*/
echo '<cmt name="begin">PAGE/BODY</cmt>' . "\n";
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
echo '<article class="box:shadow bkg:content txt:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
if (have_posts())
{
	the_post();
	echo '<cmt name="end">PAGE/BODY/HEADER</cmt>' . "\n";
	echo '<cmt name="begin">PAGE/BODY/CONTENT</cmt>' . "\n";
	//echo '<div class="bkg:content ht:min10 mar:bt+0.5 pad:tp+1 wd:100%">' . "\n";
	echo '<div class="bkg:content dsp:flw-rt ht:min10 mar:bt+0.5 pad:tp+1 wd:100%">' . "\n";
	
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
	echo '<cmt name="end">PAGE/BODY/CONTENT</cmt>' . "\n";
}
else
{
	/*
	 *** inc/templage-tags/xty_support_agent
	*/
	echo xty_support_agent('No-title was unable to load the requested template.');
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
echo '<cmt name="begin">PAGE/BODY/SIDEBAR</cmt>' . "\n";
get_sidebar();
echo '<cmt name="end">PAGE/BODY/SIDEBAR</cmt>' . "\n";
echo '</main>' . "\n";
echo '</div>' . "\n";
echo '<cmt name="end">PAGE/BODY</cmt>' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: page-templates/no-title.php / 30201115
*/
?>
