<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   biography.php
 *  build:  90824.1b
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
$v_img = '<img src="' . $wp_permalink . '" alt="Xidipity Avatar" />';
$v_meta_list = '';
echo '<!-- xwpt: 90824.1b/biography.php       -->' . "\n";
echo '<div id="xwtFxRowFullItem" class="xwtAddShadow">' . "\n";
echo '<div class="xwtAddPadPost">' . "\n";
echo '<div class="fx:row fx:nowrap fx:opt-000">' . "\n";
echo '<div class="bio-item">' . $v_img . '</div>';
echo '<div class="bio-item">' . $v_biography . '</div>';
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90824.1b/biography.php      -->' . "\n";
/*
    eof: biography.php
*/
?>
