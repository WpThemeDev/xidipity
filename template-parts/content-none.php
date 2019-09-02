<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   content-none.php
 *  build:  90828.1a
 *  descrp: content none
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
global $post;
$wp_title = get_the_title($post);
echo '<!-- xwpt: 90828.1a/content/none/php        -->' . "\n";
echo '<article class="fx:full-cn-item fx:shadow">' . "\n";
echo '<div class="pad:all-1">' . "\n";
/*
    no posts
*/
if (is_home() && current_user_can('publish_posts'))
{
    printf('<p>' . wp_kses(
    /* translators: 1: link to WP admin new post page. */
    __('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'xidipity') , array(
        'a' => array(
            'href' => array() ,
        ) ,
    )) . '</p>', esc_url(admin_url('post-new.php')));
}
elseif (is_search())
{
    echo '<!-- xwpt: 90828.1a/content/none/php/err    -->';
    echo '<div class="fx:an-container">';
    echo '<div class="fx:an-item"><svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' . "\n";
    echo '<path fill="none" d="M0 0h24v24H0V0z"/>' . "\n";
    echo '<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" style="fill: rgb(204, 0, 0);"/>' . "\n";
    echo '</svg></div>';
    echo '<div class="fx:an-item"><h2>Search results</h2></div>';
    echo '</div>';
    echo '<p>The search criteria did not return any records.</p>' . "\n";
    echo '<!-- /xwpt: 90828.1a/content/none/php/err   -->';
}
else
{
    echo '<!-- xwpt: 90828.1a/content/none/php/err    -->';
    echo '<div class="fx:an-container">';
    echo '<div class="fx:an-item"><svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' . "\n";
    echo '<path fill="none" d="M0 0h24v24H0V0z"/>' . "\n";
    echo '<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" style="fill: rgb(204, 0, 0);"/>' . "\n";
    echo '</svg></div>';
    echo '<div class="fx:an-item"><h2>Unkown page or post request</h2></div>';
    echo '</div>';
    echo '<p>This page states the resource requested was not found. The reason may be due to a logic error or some other defect.</p>' . "\n";
    echo '<!-- /xwpt: 90828.1a/content/none/php/err   -->';
    if (!empty($wp_title))
    {
        echo '<p>&nbsp;</p>' . "\n";
        echo '<p>The resource in question is titled ' . $wp_title . '.</p>' . "\n";
    }
    echo '<p>&nbsp;</p>' . "\n";
    echo '<p>Regardless of the circumstance, drop us a note on <a href="https://github.com/WpThemeDev/xidipity">GitHub</a> or send us an email at support@xidipity.com we will investigate the cause.</p>' . "\n";
    echo '<p>&nbsp;</p>' . "\n";
    echo '<p>Thank you</p>' . "\n";
}
echo '</div>' . "\n";
echo '</article>' . "\n";
echo '<!-- /xwpt: 90828.1a/content/none/php       -->' . "\n";
/*
    eof: content-none.php
*/
?>
