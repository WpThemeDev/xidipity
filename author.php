<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   author.php
 *  build:  90920.1c
 *  descrp: author template
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
$wp_author = __(get_the_author_meta('nickname'));
$wp_author_id = get_the_author_meta('ID');
$wp_bio = get_the_author_meta('description');
$wp_permalink = esc_url(get_avatar_url(get_the_author_meta('user_email') , 64));
$wp_thumbnail = get_image_sizes('small');
/*
    local variables
*/
$v_img_width = abs($wp_thumbnail['width']);
$v_post = '';
/*: sanitize   :*/
if ($v_img_width == 0)
{
    $v_img_width = 200;
}
/*
    display header
*/
get_header();
echo '<!-- xwpt: 90920.1c/author/php              -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-3    -->' . "\n";
echo '<main class="fx:pg-ct-itm-sbr">' . "\n";
/*
    biography
*/
$wp_author = __(get_the_author_meta('nickname'));
$wp_author_id = get_the_author_meta('ID');
$wp_bio = get_the_author_meta('description');
$wp_permalink = esc_url(get_avatar_url(get_the_author_meta('user_email') , 64));
/*
    local variables
*/
$v_biography  = '';
$v_biography .= '<h5>About: <a href="' . get_author_posts_url( $wp_author_id, $wp_author ) . '">' . $wp_author . '</a></h5>';
if ('' !== get_the_author_meta('description'))
{
    $v_biography .= '<p>' . $wp_bio . '</p>';
}
else
{
    $v_biography .= '<p>No information about the author is available at this time.</p>';
}
$v_img = '<img class="img:100%" src="' . $wp_permalink . '" alt="Xidipity Avatar" />';
$v_meta_list = '';
echo '<!-- xwpt: 90915.1a/biography/php           -->' . "\n";
echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
echo '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
echo '<div class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% pad:all-1 fx:shadow">' . "\n";
echo '<div class="fx:bio-container">' . "\n";
echo '<div class="fx:bio-item">' . $v_img . '</div>';
echo '<div class="fx:bio-item pad:left-0.5">' . $v_biography . '</div>';
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90915.1a/biography/php          -->' . "\n";
/*
    history
*/
echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
echo '<div class="fx:cn-ct">' . "\n";
echo '<div class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% fx:shadow">' . "\n";
echo '<h4>Other posts by author:</h4>' . "\n";
//echo '<p>&nbsp;</p>' . "\n";
echo '<div class="sys:bg pad:all-1">' . "\n";
$wp_qry = array(
    'author' => $wp_author_id,
    'orderby' => 'post_date',
    'order' => 'DESC',
    'posts_per_page' => 10,
    'post_type' => 'post',
    'post_status' => 'publish',
    'suppress_filters' => true
);
$wp_posts = get_posts($wp_qry);
foreach ($wp_posts as $wp_post)
{
    $v_post  = '';
    $v_post .= '<a href="' . get_permalink($wp_post) . '">' . $wp_post->post_title . '</a>';
    $v_post .= '<p>' . get_the_excerpt($wp_post) . '</p>';

    $wp_image = wp_get_attachment_image(get_post_thumbnail_id($wp_post));
    $wp_image_url = wp_get_attachment_image_url(get_post_thumbnail_id($wp_post));
    echo '<div class="fx:author-container">' . "\n";
    if ($wp_image)
    {
        echo '<div class="fx:author-item"><img style="min-width:' . $v_img_width . 'px;" src="' . $wp_image_url . '" alt="Xidipity WordPress Theme"></div>';
    }
    else
    {
        echo '<div class="fx:author-item" style="min-width:' . $v_img_width . 'px;"><img style="height:auto; width:' . $v_img_width . 'px;" src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" alt="Xidipity WordPress Theme"></div>';
    }
    echo '<div class="fx:author-item">' . get_the_date('m/d/Y') . '</div>';
    echo '<div class="fx:author-item">' . $v_post . '</div>';
    echo '</div>' . "\n";
}
echo '</div>' . "\n";
/*
page footer
*/
echo '<div class="pad:left-1 fnt:size-smaller">' . "\n";
$v_meta_list = '';
/*: edit :*/
if (get_edit_post_link())
{
    $v_meta_list .= xidipity_icon_edit() . ',';
    $v_meta_list .= '<a href="' . get_edit_post_link() . '">Edit</a>' . ',';
    $v_meta_list .= '&nbsp;,';
}
/*: date :*/
$v_meta_list .= xidipity_icon_date() . ',';
$v_meta_list .= get_the_date() . ',';
echo xidipity_metalinks(explode(',', $v_meta_list));
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</main>' . "\n";
echo '<!-- /xwpt: 90920.1c/author/php             -->' . "\n";
/*
    display sidebar
*/
get_sidebar();
/*
    display footer
*/
get_footer();
/*
    eof: author.php
*/
?>
