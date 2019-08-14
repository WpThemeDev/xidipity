<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   content-page-404.php
 *  build:  90728.1
 *  descrp: 404 template
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
$wp_page = get_page_by_path('404-error');
echo '<!-- xwpt: 90728.1/content-page-404.php    -->' . "\n";
echo '<article class="w-full">' . "\n";
if ($wp_page) {
    /*
        custom page
    */
    $content =  apply_filters( 'the_content', $wp_page->post_content );
    echo $content;
} else {
    /*
        default
    */
    echo '<style>' . "\n";
    echo '@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap");' . "\n";
    echo 'body {' . "\n";
    echo 'font-family: "Roboto", sans-serif;' . "\n";
    echo 'font-size: 16px;' . "\n";
    echo '}' . "\n";
    echo '.title {' . "\n";
    echo 'font-size: 48px;' . "\n";
    echo 'padding-left: 8px;' . "\n";
    echo '}' . "\n";
    echo '.btn:hover {' . "\n";
    echo 'border: 2px solid #eee;' . "\n";
    echo 'cursor: pointer;' . "\n";
    echo '}' . "\n";
    echo '</style>' . "\n";
    echo '<div><svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' . "\n";
    echo '<path fill="none" d="M0 0h24v24H0V0z"/>' . "\n";
    echo '<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" style="fill: rgb(204, 0, 0);"/>' . "\n";
    echo '</svg><span class="title">404 Error</span></div>' . "\n";
    echo '<p>The page you are looking for can not be found!</p>' . "\n";
    echo '<button class="btn" onclick="goBack()">Go Back</button>' . "\n";
    echo '<script>' . "\n";
    echo 'function goBack() {' . "\n";
    echo 'window.history.back();' . "\n";
    echo '}' . "\n";
    echo '</script>' . "\n";
}
echo '</article>' . "\n";
echo '<!-- /xwpt: 90728.1/content-page-404.php   -->' . "\n";
/*
    eof:content-page-404.php
*/
?>
