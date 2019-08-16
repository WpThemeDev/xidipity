<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   content-none.php
 *  build:  90816.1
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
echo '<!-- xwpt: 90816.1/content-none    -->' . "\n";
echo '<article id="xwtFxRowFullItem" class="xwtAddShadow ' . implode(' ', get_post_class()) . '">' . "\n";
echo '<div class="xwtAddPadPage">' . "\n";
echo '<!-- xwpt: 90816.1/content-none.php    -->' . "\n";
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
    echo '<h2><svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' . "\n";
    echo '<path fill="none" d="M0 0h24v24H0V0z"/>' . "\n";
    echo '<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" style="fill: rgb(204, 0, 0);"/>' . "\n";
    echo '</svg> Search results</h2>' . "\n";
    echo '<p>The search criteria did not return any records.</p>' . "\n";
}
else
{
    echo '<h2><svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0V0z"/>
  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm.88 13.75h-1.75V14h1.75v1.75zm0-2.87h-1.75c0-2.84 2.62-2.62 2.62-4.38 0-.96-.79-1.75-1.75-1.75s-1.75.79-1.75 1.75H8.5C8.5 6.57 10.07 5 12 5s3.5 1.57 3.5 3.5c0 2.19-2.62 2.41-2.62 4.38z" style="fill: rgb(25, 118, 210);"/>
</svg>' . "\n";
    echo '</svg> Unkown page or post request</h2>' . "\n";
    echo '<p>&nbsp;</p>' . "\n";
    echo '<p>This is a page that is never meant to be viewed. Unforunately this is probably due to a logic error or coding defect.</p>' . "\n";
    echo '<p>&nbsp;</p>' . "\n";
    if (!empty($wp_title))
    {
        echo '<p>As best as I can tell the page in question is titled ' . $wp_title . '.</p>' . "\n";
        echo '<p>&nbsp;</p>' . "\n";
    }
    echo '<p>If you would be so kind as to drop us a note on <a href="https://github.com/WpThemeDev/xidipity">GitHub</a> or send us an email at support@xidipity.com we will investigate the cause.</p>' . "\n";
    echo '<p>&nbsp;</p>' . "\n";
    echo '<p>Thank you</p>' . "\n";
}
echo '</div>' . "\n";
echo '</article>' . "\n";
echo '<!-- /xwpt: 90816.1/content-none        -->' . "\n";
/*
    eof:content-none.php
*/
?>
