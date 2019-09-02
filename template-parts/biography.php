<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   biography.php
 *  build:  90828.1a
 *  descrp: biography snippet
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
/*
    local variables
*/
$v_biography  = '';
$v_biography .= '<h5>About: <a href="' . get_author_posts_url( $wp_author_id, $wp_author ) . '">' . $wp_author . '</a></h5>';
$v_biography .= '<p>' . $wp_bio . '</p>';
$v_img = '<img class="img:100%" src="' . $wp_permalink . '" alt="Xidipity Avatar" />';
$v_meta_list = '';
echo '<!-- xwpt: 90828.1a/biography/php           -->' . "\n";
echo '<div class="fx:full-cn-item pad:all-1 fx:shadow">' . "\n";
echo '<div class="fx:bio-container">' . "\n";
echo '<div class="fx:bio-item">' . $v_img . '</div>';
echo '<div class="fx:bio-item pad:left-0.5">' . $v_biography . '</div>';
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90828.1a/biography/php          -->' . "\n";
/*
    eof: biography.php
*/
?>
