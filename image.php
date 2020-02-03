<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       image.php
 * Function:        display media library image
 * Build:           200206
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
    system variables
*/
$wp_attm = get_queried_object();
$wp_attm_permalink = get_permalink( $wp_attm->post_parent );
$wp_attm_title = get_post( $wp_attm->post_parent )->post_title;
$wp_attm_title_lnk = '<a href="' . $wp_attm_permalink  . '"  title="' . $wp_attm_title . '">' . $wp_attm_title . '</a>';
$wp_metadata = wp_get_attachment_metadata();
/*
    local variables
*/
$v_aspect_ratio = '';
$v_meta_list = '';
$v_ratio = 0;
$v_title = '';
/*
    display page header
*/
get_header();
echo '<!-- xwpt: 90920.1d/image/php               -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-3    -->' . "\n";
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:pg-ct-itm-sbl">' . "\n";
}
else
{
    echo '<main class="fx:pg-ct-itm-sbr">' . "\n";
}
echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
echo '<div class="fx:cn-ct">' . "\n";
/*: get page title :*/
$v_title = get_the_title();
if (strpos($v_title, '.') > 1)
{
    $v_title = substr($v_title, 0, strpos($v_title, '.'));
}
/*: has attm :*/
if (have_posts())
{
    $v_ratio = round(absint($wp_metadata['height']) / absint($wp_metadata['width']) , 4);
    switch ($v_ratio)
    {
        case 1:
            $v_aspect_ratio = '1x1';
        break;
        case 0.75:
            $v_aspect_ratio = '4x3';
        break;
        case 0.6667:
            $v_aspect_ratio = '6x4 (classic film)';
        break;
        case 0.7146:
            $v_aspect_ratio = '7x5';
        break;
        case 0.625:
            $v_aspect_ratio = '16x10';
        break;
        case 0.5625:
            $v_aspect_ratio = '16x9 (high definition)';
        break;
        case 0.4281:
            $v_aspect_ratio = '21x9 (cinemascope)';
        break;
        default:
            $v_aspect_ratio = '';
    }
    echo '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
    echo '<article class="fx:cn-ct-itm fx:ct-itm-opt fx:shadow mar:right+0.5 pad:+2 wd:100%">' . "\n";
    echo '<h1 class="wcag:fg-grey9">' . $v_title . '</h1>' . "\n";
    echo '<p><span class="fnt:weight-normal">Dimensions:</span> ' . absint($wp_metadata['width']) . '&times;' . absint($wp_metadata['height']) . 'px' . "\n";
    if (!empty($v_aspect_ratio))
    {
        echo '<p><span class="fnt:weight-normal">Aspect Ratio:</span> ' . $v_aspect_ratio . '</p>' . "\n";
    }
    echo '<p>&nbsp;</p>' . "\n";
    echo '<div class="wd:100%">' . "\n";
    echo '<figure class="entry-attm wp-block-image">' . "\n";
    /*
        Filter the default Xidipity image attm size
        @param string $image_size Image size. Default = 'large'
    */
    $image_size = apply_filters('Xidipity_attm_size', 'full');
    $wp_image = wp_get_attachment_image(get_the_ID() , $image_size);
    echo wp_get_attachment_image(get_the_ID() , $image_size) . "\n";
    echo '<figcaption class="wp-caption-text">' . wp_get_attachment_caption(get_the_ID()) . '</figcaption>' . "\n";
    echo '</figure>' . "\n";
    echo get_the_content() . "\n";
    echo '</div>' . "\n";
    echo '<div class="wd:100%">' . "\n";
    if ($wp_metadata)
    {
        $v_meta_list .= dsp_view(esc_url(wp_get_attachment_url())) . '|';
    }
    /*
        show on login
    */
    if (get_edit_post_link())
    {
        $v_meta_list .= dsp_edit(get_edit_post_link()) . '|';
    }
    /*
        attm parent
    */
    if (!empty($wp_attm_title)) {

        $v_meta_list .= '<span class="pad:right+0.5">Published in:</span>';
        $v_meta_list .= $wp_attm_title_lnk . '|';
    }
    if (!empty($v_meta_list))
    {
        echo '<div class="pad:left+1 fnt:size-smaller prt(dsp:none)">' . "\n";
        echo xidipity_metalinks(explode('|', $v_meta_list)) . "\n";
        echo '</div>' . "\n";
    }
    echo '</div>' . "\n";
    echo '</article>' . "\n";
    /*
        If comments are open or we have at least one comment, load up the comment template.
    */
    if (comments_open() || get_comments_number())
    {
        comments_template();
    }
}
echo '</div>' . "\n";
echo '</main>' . "\n";
echo '<!-- /xwpt: 90920.1d/image/php              -->' . "\n";
/*
    display sidebar
*/
get_sidebar();
/*
    reset post data
*/
get_footer();

/*
 * EOF:     image.php
 * Build:   200206
 *
 */
?>
