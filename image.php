<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying media library image
 *
 * ###:  image.php
 * bld:  28200801
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
/*
 *** set page options
*/
$aspect_ratio = '';
$ratio        = 0;
$seo          = 'Xidipity WordPress Theme Media Library Image';
$wp_metadata  = wp_get_attachment_metadata();
xty('mnu-dsp','yes');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
/*
 ***/
echo '<cmt>### FILE/IMAGE/PHP ###</cmt>' . "\n";
/***
*/
echo '<cmt name="begin">PAGE/BODY</cmt>' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
/*
 *** align sidebar
*/
if (xty('sb-aln') == 'left')
{
	echo '<cmt name="begin">PAGE/BODY</cmt>' . "\n";
	echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<cmt name="begin">PAGE/BODY/CONTENT</cmt>' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:left+0.5">' . "\n";
}
else
{
	echo '<cmt name="begin">PAGE/BODY</cmt>' . "\n";
	echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<cmt name="begin">PAGE/BODY/CONTENT</cmt>' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:right+0.5">' . "\n";
}
echo '<article class="box:shadow bkg:content txt:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
if ($wp_query->have_posts())
{
	echo '<cmt name="begin">PAGE/BODY/HEADER</cmt>' . "\n";
	echo '<header class="mar:top+1 wd:100%">' . "\n";
	/*
	 *** developer.wordpress.org/reference/functions/the_title/
	*/
	the_title('<div class="pg:title fnt:size-large sm)fnt:size-3x-large">Media: ', '</div>');
	echo '<div class="bkg:bas+2 ln mce[dsp:none]"></div>' . "\n";
	echo '</header>' . "\n";
	echo '<cmt name="end">PAGE/BODY/HEADER</cmt>' . "\n";
	echo '<cmt name="begin">PAGE/BODY/IMAGE</cmt>' . "\n";
	echo '<div class="bkg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";
	/*
	 *** display image
	*/
	$caption      = wp_get_attachment_caption(get_the_ID());
	$content_post = get_post(get_the_ID());
	$content      = $content_post->post_content;
	echo '<div class="mar:vrt+2">' . "\n";
	echo '<div class="fx:r fxa:3 fxb:1 fxc:3 wd:100%">' . "\n";
	echo wp_get_attachment_image(get_the_ID() , 'full', false, array(
		'alt' => $seo
	));
	echo '</div>' . "\n";
	if (!empty($caption))
	{
		echo '<div class="aln:text-center fnt:size-smaller mar:bottom+0.25 wd:100%">' . wp_get_attachment_caption(get_the_ID()) . '</div>' . "\n";
	}
	if (!empty($content))
	{
		$content = apply_filters('the_content', $content);
		$content = str_replace(']]>', ']]&gt;', $content);
		echo $content . "\n";
	}
	echo '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<cmt name="end">PAGE/BODY/IMAGE</cmt>' . "\n";
	echo '<div class="bkg:bas+2 ln mar:vrt+0.25 mce[dsp:none]"></div>' . "\n";
	/*
	 *** page footer
	*/
	/* file date */
	$data_item = array();
	$data_item['ico_1'] .= '<i class="icon:page_previous_solid"></i>';
	$data_item['txt_1'] .= '<a href="javascript:history.back()">Go Back</a>';
	$data_item['div_1'] .= '&#65372;';
	$data_item['raw_1'] .= '<div class="fx:break sm)dsp:none"></div>';
	/*: date :*/
	$data_item['ico_2'] .= '<i class="icon:calendar_today_outline"></i>';
	$data_item['txt_2'] .= get_the_date(get_option('date_format') , get_the_ID());
	$data_item['div_2'] .= '&#65372;';
	$data_item['raw_2'] .= '<div class="fx:break sm)dsp:none"></div>';
	/*: dimensions :*/
	$data_item['ico_3'] .= '<i class="icon:dimension_solid"></i>';
	$data_item['txt_3'] .= absint($wp_metadata['width']) . 'x' . absint($wp_metadata['height']) . ' pixels';
	$ratio        = round(absint($wp_metadata['height']) / absint($wp_metadata['width']) , 4);
	switch ($ratio)
	{
		case 1:
			$aspect_ratio = '1x1';
		break;
		case 0.75:
			$aspect_ratio = '4x3';
		break;
		case 0.6667:
			$aspect_ratio = '6x4 (classic film)';
		break;
		case 0.7146:
			$aspect_ratio = '7x5';
		break;
		case 0.625:
			$aspect_ratio = '16x10';
		break;
		case 0.5625:
			$aspect_ratio = '16x9 (high definition)';
		break;
		case 0.4281:
			$aspect_ratio = '21x9 (cinemascope)';
		break;
		default:
			$aspect_ratio = '';
	}
	if (!empty($aspect_ratio))
	{
		$data_item['div_3'] .= '&#65372;';
		$data_item['raw_3'] .= '<div class="fx:break sm)dsp:none"></div>';
		$data_item['ico_4'] .= '<i class="icon:aspect_ratio_outline"></i>';
		$data_item['txt_4'] .= $aspect_ratio;
	}
	$url = wp_get_attachment_url();
	if (!empty($url))
	{
		$data_item['div_4'] .= '&#65372;';
		$data_item['raw_4'] .= '<div class="fx:break sm)dsp:none"></div>';
		$data_item['txt_5'] .= 'File Type: ' . substr($url, -3);
	}
	echo '<cmt name="begin">PAGE/BODY/CONTENT/FOOTER</cmt>' . "\n";
	echo '<footer class="pad:left+0.5 fnt:size-smaller prt[dsp:none]">' . "\n";
	echo '<div class="fnt:size-medium fnt:size-smaller pad:bottom+0.25">' . "\n";
	echo xty_dsp_meta($data_item) . "\n";
	echo '</div>' . "\n";
	echo '</footer>' . "\n";
	echo '<cmt name="end">PAGE/BODY/CONTENT/FOOTER</cmt>' . "\n";
}
else
{
	/*
	 *** call support agent ***
	*/
	echo xty_support_agent('I was unable to load the image page template.');
}
echo '</article>' . "\n";
echo '</section>' . "\n";
echo '<cmt name="end">PAGE/BODY/CONTENT</cmt>' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_sidebar/
*/
echo '<cmt name="begin">PAGE/BODY/SIDEBAR</cmt>' . "\n";
get_sidebar();
echo '<cmt name="end">PAGE/BODY/SIDEBAR</cmt>' . "\n";
echo '</main>' . "\n";
echo '<cmt name="end">PAGE/BODY</cmt>' . "\n";
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
 * EOF: image.php / 28200801
*/
?>
