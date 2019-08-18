<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   author.php
 *  build:  90818.1
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
$wp_thumbnail = get_image_sizes('thumbnail');
/*
    local variables
*/
$v_biography = '';
$v_biography .= '<h1>' . $wp_author . '</h1>';
$v_biography .= '<p>' . $wp_bio . '</p>';
$v_img = '<img src="' . $wp_permalink . '" alt="Xidipity Avatar" />';
$v_meta_list = '';
$v_post = '';
$v_thumbnail_x = abs($wp_thumbnail['width']);
/*: sanitize   :*/
if ($v_thumbnail_x == 0)
{
    $v_thumbnail_x = 150;
}
/*
    display header
*/
get_header();
echo '<!-- xwpt: 90714.1/author.php            -->' . "\n";
echo '<main id="xwtFxRowItem" class="xwtFxRowItemOpts">' . "\n";
echo '<div id="xwtFxRowItems">' . "\n";
/*
    content
*/
echo '<!-- xwpt: 90818.1/biography.php       -->' . "\n";
echo '<div id="xwtFxRowFullItem" class="xwtAddShadow">' . "\n";
echo '<div class="xwtAddPadPost">' . "\n";
echo '<div id="xwtBioData">' . "\n";
echo '<div class="bio-item">' . $v_img . '</div>';
echo '<div class="bio-item">' . $v_biography . '</div>';
echo '</div>' . "\n";
echo '<hr />' . "\n";
echo '<h5>Other Posts</h5>' . "\n";
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
    echo '<div id="xwtBioData">' . "\n";
    if ($wp_image)
    {
        echo '<div class="bio-item" style="min-width:' . $v_thumbnail_x . 'px;">' . $wp_image . '</div>';
    }
    else
    {
        echo '<div class="bio-item" style="min-width:' . $v_thumbnail_x . 'px;"><img style="height:auto; width:' . $v_thumbnail_x . 'px;" src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" alt="Xidipity WordPress Theme"></div>';
    }
    echo '<div class="bio-item">' . get_the_date('m/d/Y') . '</div>';
    echo '<div class="bio-item">' . $v_post . '</div>';
    echo '</div>' . "\n";
}
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</main>' . "\n";
/*
    display sidebar
*/
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt: 90714.1/author.php           -->' . "\n";
/*
    display footer
*/
get_footer();
/*
    eof:author.php
*/
?>
