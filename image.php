<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   image.php
 *  build:  90728.1
 *  descrp: Display media library image
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 **/
/*
    system variables
*/
$wp_attach_id = get_queried_object()->ID;
$wp_metadata = wp_get_attachment_metadata();
$wp_parent_id = wp_get_post_parent_id($wp_attach_id);
$wp_parent_permalink = get_permalink( $wp_parent_id );
$wp_parent_title = get_the_title( $wp_parent_id );
/*
    local variables
*/
$v_aspect_ratio = '';
$v_meta_list = '';
$v_ptitle = '';
$v_ratio = 0;
$v_title = '';

/*
    display page header
*/
get_header();
echo '<!-- xwpt: 90728.1/image.php           -->' . "\n";
echo '<main id="xwtFxRowItem" class="xwtFxRowItemOpts">' . "\n";
echo '<div id="xwtFxRowItems" class="xpost-wrapper xpost-wrapper-archive">' . "\n";
/* get page title          ------------
 -- */
$v_title = get_the_title();
if (strpos($v_title, '.') > 1)
{
    $v_title = substr($v_title, 0, strpos($v_title, '.'));
}
/* have attachment         ------------
 -- */
if (have_posts())
{
    /* get attachment metadata ------------
     -- */
    //$wp_metadata = wp_get_attachment_metadata();
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
    echo '<article  id="xwtFxRowFullItem" class="xwtAddShadow">' . "\n";
    echo '<div class="xwtAddPadPost">' . "\n";
    echo '<h2 class="p-4"><i class="far fa-image fg-pri-300"></i> ' . $v_title . '</h2>' . "\n";
    echo '<p class="pl-4 text-sm"><span class="font-normal">Dimensions:</span> ' . absint($wp_metadata['width']) . '&times;' . absint($wp_metadata['height']) . 'px' . "\n";
    if (!empty($v_aspect_ratio))
    {
        echo '<p class="pl-4 text-sm"><span class="font-normal">Aspect Ratio:</span> ' . $v_aspect_ratio . '</p>' . "\n";
    }
    echo '<p>&nbsp;</p>' . "\n";
    echo '<div class="entry-content">' . "\n";
    echo '<figure class="entry-attachment wp-block-image">' . "\n";
    /*
    Filter the default Xidipity image attachment size
    @param string $image_size Image size. Default = 'large'
    */
    $image_size = apply_filters('Xidipity_attachment_size', 'full');
    $wp_image = wp_get_attachment_image(get_the_ID() , $image_size);
    echo wp_get_attachment_image(get_the_ID() , $image_size) . "\n";
    echo '<figcaption class="wp-caption-text">' . wp_get_attachment_caption(get_the_ID()) . '</figcaption>' . "\n";
    echo '</figure>' . "\n";
    echo get_the_content() . "\n";
    echo '</div>' . "\n";
    echo '<footer class="xwtContentFoot">' . "\n";
    if ($wp_metadata)
    {
        $v_meta_list .= xidipity_icon_vw_img();
        $v_meta_list .=  ',' . '<a href="' . esc_url(wp_get_attachment_url()) . '">View</a>';
    }
    /*
        show on login
    */
    if (get_edit_post_link())
    {
        $v_meta_list .= ',' . xidipity_icon_edit();
        $v_meta_list .= ',' . '<a href="' . get_edit_post_link() . '">Edit</a>';
    }
    /*
        attachment parent
    */
    if ($wp_parent_id >0) {

        $v_meta_list .= ',' . '<p>Published in:</p>';
        $v_meta_list .= ',' . '<a href="' . $wp_parent_permalink . '">' . $wp_parent_title . '</a>';
    }
    if (!empty($v_meta_list))
    {
        echo xidipity_metalinks(explode(',', $v_meta_list));
    }
    echo '</footer>' . "\n";
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
/*
    display sidebar
*/
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt: 90728.1/image.php          -->' . "\n";
/*
    reset post data
*/
get_footer();
/*
    eof:image.php
*/
?>
