<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       404.php
 * Function:        display 404 page
 * Build:           200104-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version			1.0
 * @since			0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/*
    system variables
*/
$wp_page = get_page_by_title('404-err');
$wp_title = get_bloginfo('name');
echo '<!doctype html>' . "\n";
?>
<html <?php
language_attributes(); ?> >
<?php
echo '<head>' . "\n";
echo '<meta charset="UTF-8">' . "\n";
echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
echo '<link rel="profile" href="http://gmpg.org/xfn/11">' . "\n";
echo '<title>' . $wp_title . ' 404 Error</title>' . "\n";
echo '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">' . "\n";
echo '<style type="text/css" media="screen">' . "\n";
echo 'body {' . "\n";
echo 'font-family: "Roboto", sans-serif;' . "\n";
echo 'font-size: 16px;' . "\n";
echo '}' . "\n";
echo '.title {' . "\n";
echo 'font-size: 48px;' . "\n";
echo 'padding-left: 8px;' . "\n";
echo '}' . "\n";
echo 'img.full-scr {' . "\n";
echo 'height:auto;' . "\n";
echo 'width:100%;' . "\n";
echo '}' . "\n";
echo '.btn:hover {' . "\n";
echo 'border: 2px solid #eee;' . "\n";
echo 'cursor: pointer;' . "\n";
echo '}' . "\n";
echo '</style>' . "\n";
echo '</head>' . "\n";
echo '<body>' . "\n";
echo '<!-- /xwpt: 90728.1/404.php     -->' . "\n";
if ($wp_page) {
    /*
        404 image
    */
    $wp_images = get_attached_media('image', $wp_page->ID );
}
If (!empty($wp_images))
{
    foreach ($wp_images as $wp_image) {
        $wp_img = wp_get_attachment_image_src($wp_image->ID,'full');
        echo '<img class="full-scr" src="' .$wp_img[0] . '" alt="' . $wp_title . ' 404 error"/>' . "\n";
    }
}
else
{
    /*
        404 text
    */
    echo '<div><svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' . "\n";
    echo '<path fill="none" d="M0 0h24v24H0V0z"/>' . "\n";
    echo '<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" style="fill: rgb(204, 0, 0);"/>' . "\n";
    echo '</svg><span class="title">' . $wp_title . ' 404 Error</span></div>' . "\n";
    echo '<p>The page you are looking for can not be found!</p>' . "\n";
    echo '<button class="btn" onclick="goBack()">Go Back</button>' . "\n";
    echo '<script>' . "\n";
    echo 'function goBack() {' . "\n";
    echo 'window.history.back();' . "\n";
    echo '}' . "\n";
    echo '</script>' . "\n";
}
echo '<!-- /xwpt: 90728.1/404.php     -->' . "\n";
echo '</body>' . "\n";
echo '</html>' . "\n";

/*
 * EOF:     404.php
 * Build:   200104-1
 *
 */
?>
