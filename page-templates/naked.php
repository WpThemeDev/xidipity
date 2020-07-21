<?php
/**
    * Template Name: Naked
    *
    * WordPress Xidipity Theme
    * The template for displaying page without menu / page title / sidebar
    *
    * ###:  page-templates/naked.php
    * bld:  28200801
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/
/*
 *** set page options
*/
xty('mnu-dsp','no');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
/*
 ***/
echo '<cmt>### PAGE-TEMPLATE/NAKED/PHP ###</cmt>' . "\n";
/***
*/
echo '<cmt name="begin">PAGE/BODY</cmt>' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5">' . "\n";
echo '<article class="box:shadow bkg:content txt:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
if (have_posts())
{
	the_post();
	echo '<cmt name="end">PAGE/BODY/HEADER</cmt>' . "\n";
	echo '<cmt name="begin">PAGE/BODY/CONTENT</cmt>' . "\n";
	echo '<div class="bkg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";
	echo xty_dsp_content();
	echo '</div>' . "\n";
	echo '<cmt name="end">PAGE/BODY/CONTENT</cmt>' . "\n";
}
else
{
	/*
	 *** call support agent ***
	*/
	echo xty_support_agent('I was unable to load the page template naked.');
}
echo '</article>' . "\n";
echo '</section>' . "\n";
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
 * EOF: page-templates/naked.php / 28200801
 */
?>
