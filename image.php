<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       image.php
 * Function:        display media library image
 * Build:           200429
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/*
***
    * variables defaults
***
*/
$aspect_ratio = '';
$ratio = 0;
$seo = 'Xidipity WordPress Theme Media Library Image';
$wp_metadata = wp_get_attachment_metadata();

/*
***
    * display menus
***
*/
disp_menu('yes');

/*
***
    * function: get_header
    * descript: display page header
    * ref: developer.wordpress.org/reference/functions/get_header/
***
*/
get_header();

/*
***/
echo '<!--  file:page.php -->' . "\n";
/***

*/
echo '<!--  fi:3/HTML -->' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
echo '<!--  fc:3/1/HTML -->' . "\n";

/*
***
    * align sidebar
***
*/
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:left+0.5">' . "\n";
}
else
{
    echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:right+0.5">' . "\n";
}

echo '<!--  ct:ARTICLE -->' . "\n";
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";

if ($wp_query->have_posts())
{

    echo '<!--  ct:HEADER -->' . "\n";
    echo '<header class="wd:100%">' . "\n";

    /*
    ***
        * function: the_title
        * descript: display page title
        * ref: developer.wordpress.org/reference/functions/the_title/
    ***
    */
    the_title('<div class="pg:title">Media: ', '</div>');
    echo '<div class="bg:bas-300 ln mar:bottom+0.75 mce[dsp:none]">&#8203;</div>' . "\n";
    echo '</header>' . "\n";
    echo '<!-- /ct:HEADER -->' . "\n";
    echo '<!--  ct:BODY -->' . "\n";
    echo '<div class="bg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";

    /*
    ***
        * display image
    ***
    */
    $caption = wp_get_attachment_caption(get_the_ID());
    $content = get_the_content();
    echo '<div class="mar:vrt+0.5">' . "\n";
    echo '<!--  fc:MEDIA -->' . "\n";
    echo '<div class="fx:r fxa:3 fxb:1 fxc:3 wd:100%">' . "\n";
    echo wp_get_attachment_image(get_the_ID() , 'full', false, array('alt'=>$seo));
    echo '</div>' . "\n";
    echo '<!-- /fc:MEDIA -->' . "\n";
    if (!empty($caption))
    {
        echo '<div class="aln:text-center fnt:size-smaller mar:bottom+0.25 wd:100%">' . wp_get_attachment_caption(get_the_ID()) . '</div>' . "\n";
    }
    if (!empty($content))
    {
    echo get_the_content() . "\n";
    }
    echo '</div>' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /ct:BODY -->' . "\n";

    echo '<div class="bg:bas-300 ln mar:vrt+0.25 mce[dsp:none]">&#8203;</div>' . "\n";

    /*
    ***
        * page footer
    ***
    */
    /* file date */
    $footer_items = '';
    $footer_items .= '<a href="javascript:history.back()"><span class="pad:right+0.25">' . xidipity_icon_prev('small') . '</span>Go Back</a>' . '|';
    $footer_items .= get_the_date(get_option('date_format'),get_the_ID()) . '|';
    /*: dimensions :*/
    $footer_items .= 'Dimensions: ' . absint($wp_metadata['height']) . 'x' . absint($wp_metadata['width']) . ' pixels |';
    $ratio = round(absint($wp_metadata['height']) / absint($wp_metadata['width']) , 4);
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
        $footer_items .= 'Aspect Ratio: ' . $aspect_ratio . '|';
    }
    echo '<!--  ct:FOOTER -->' . "\n";
    echo '<footer class="pad:left+0.5 fnt:size-smaller prt[dsp:none]">' . "\n";

    $url = wp_get_attachment_url();
    if (!empty($url))
    {
        $footer_items .= 'File Type: ' . substr($url,-3) . '|';
    }
    echo xidipity_metalinks(explode('|', $footer_items)) . "\n";
    echo '</footer>' . "\n";
    echo '<!-- /ct:FOOTER -->' . "\n";
}
else
{
    get_template_part('template-parts/content', 'none');
}
echo '</article>' . "\n";
echo '<!-- /ct:ARTICLE -->' . "\n";
echo '</section>' . "\n";
echo '<!-- /fi:3/1/1/HTML 1 -->' . "\n";

/*
***
    * function: get_sidebar
    * descript: display sidebar
    * ref: developer.wordpress.org/reference/functions/get_sidebar/
***
*/
get_sidebar();
echo '</main>' . "\n";
echo '<!-- /fc:3/1/HTML -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fi:3/HTML -->' . "\n";

/*
***
    * function: get_footer
    * descript: display page footer
    * ref: developer.wordpress.org/reference/functions/get_footer/
***
*/
get_footer();

/*
***
    * function: wp_reset_postdata
    * descript: reset database query
    * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
***
*/
wp_reset_postdata();

/*
 * EOF:     image.php
 * Build:   200429
 *
 */
?>
