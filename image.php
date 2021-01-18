<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying media library image
 *
 * ###:  image.php
 * bld:  01210115
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
/*
 *** set page options
*/
$aspect_ratio = '';
$ratio = 0;
$seo = 'Xidipity WordPress Theme Media Library Image';
$wp_metadata = wp_get_attachment_metadata();
xty('mnu-dsp', 'yes');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
/*
 ***/
echo '<!-- xty:file/image/php -->' . "\n";
/***
*/
echo '<!-- xty:page/body -->' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
/*
 *** align sidebar
*/
if (xty('sb-aln') == 'left')
{
	echo '<!-- xty:page/body -->' . "\n";
	echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<!-- xty:PAGE/BODY/CONTENT -->' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5 md)mar:lt+0.5">' . "\n";
}
else
{
	echo '<!-- xty:page/body -->' . "\n";
	echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<!-- xty:page/body/content -->' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5 md)mar:rt+0.5">' . "\n";
}
echo '<article class="box:shadow bkg:content txt:content dsp:blk pad:hrz+1 ht:min10 wd:100%">' . "\n";
if ($wp_query->have_posts())
{
	echo '<!-- xty:page/body/header -->' . "\n";
	echo '<header class="mar:tp+1 wd:100%">' . "\n";
	/*
	 *** developer.wordpress.org/reference/functions/the_title/
	*/
	the_title('<div class="pg:title">', '</div>');
	echo '<div class="bkg:bas+2 ln mce[dsp:none]"></div>' . "\n";
	echo '</header>' . "\n";
	echo '<!-- /xty:page/body/header -->' . "\n";
	echo '<!-- xty:page/body/image -->' . "\n";
	echo '<div class="bkg:content dsp:flw-rt ht:min10 mar:bt+0.5 wd:100%">' . "\n";
	/*
	 *** display image
	*/
	$caption = wp_get_attachment_caption(get_the_ID());
	$content_post = get_post(get_the_ID());
	$content = $content_post->post_content;
	echo '<div class="mar:vrt+2">' . "\n";
	echo '<div class="fx:r fxa:3 fxb:1 fxc:3 wd:100%">' . "\n";
	echo wp_get_attachment_image(get_the_ID() , 'full', false, array(
		'alt' => $seo
	));
	echo '</div>' . "\n";
	if (!empty($caption))
	{
		echo '<div class="aln:txt-ct fnt:siz-1 wd:100%">' . wp_get_attachment_caption(get_the_ID()) . '</div>' . "\n";
	}
	if (!empty($content))
	{
		echo '<p>&nbsp;</p>' . "\n";
		$content = apply_filters('the_content', $content);
		$content = str_replace(']]>', ']]&gt;', $content);
		echo $content . "\n";
	}
	echo '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<!-- /xty:page/body/image -->' . "\n";
}
else
{
	/*
	 *** inc/templage-tags/xty_support_agent
	*/
	echo xty_support_agent('I was unable to load the image page template.');
}
/*
 *** inc/templage-tags/xty_content_footer
*/
if (empty(xty_user()))
{
	echo xty_content_footer(array(
		'back',
		'today',
		'img_size',
		'img_ratio',
		'print',
		'file_type'
	));
}
else
{
	echo xty_content_footer(array(
		'back',
		'user',
		'today',
		'img_size',
		'img_ratio',
		'print',
		'file_type'
	));
}
echo '</article>' . "\n";
echo '</section>' . "\n";
echo '<!-- /xty:page/body/content -->' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_sidebar/
*/
echo '<!-- xty:page/body/sidebar -->' . "\n";
get_sidebar();
echo '<!-- /xty:page/body/sidebar -->' . "\n";
echo '</main>' . "\n";
echo '<!-- /xty:page/body -->' . "\n";
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
 * EOF: image.php / 01210115
*/
?>
