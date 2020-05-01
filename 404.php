<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       404.php
 * Function:        display 404 page
 * Build:           200415
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         2.0
 * @since           0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/*
***
    * display menus
***
*/
disp_menu('yes');

/*
***
    * function: get_header
    * descript: display page header
    * ref: developer.wordpress.org/reference/functions/get_header/
***
*/
get_header();

/*
***/
echo '<!--  file:404.php -->' . "\n";
/***
*/
echo '<!--  fi:3/HTML -->' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
echo '<!--  fc:3/1/HTML -->' . "\n";

/*
***
    * align sidebar
***
*/
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/SECTION -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:left+0.5">' . "\n";
}
else
{
    echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/SECTION -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:right+0.5">' . "\n";
}
echo '<!--  fi:3/1/1/ARTICLE -->' . "\n";
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
echo '<!--  fc:404 -->' . "\n";
echo '<div class="fx:rw sm)fx:r fxa:1 fxb:1 fxc:1 bg:bas-100 cnr:arch-small mar:vrt+0.5 pad:vrt+1">' . "\n";
echo '<!--  fc:LOGO -->' . "\n";
echo '<div class="fx:r fxa:3 fxb:1 fxc:3 wd:100% sm)wd:6">' . "\n";
echo '<svg class="ht:5 wd:5" viewBox="0 0 24 24">
<path fill="#003c8f" d="M9,13A3,3 0 0,0 12,16A3,3 0 0,0 15,13A3,3 0 0,0 12,10A3,3 0 0,0 9,13M20,19.59V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18C18.45,22 18.85,21.85 19.19,21.6L14.76,17.17C13.96,17.69 13,18 12,18A5,5 0 0,1 7,13A5,5 0 0,1 12,8A5,5 0 0,1 17,13C17,14 16.69,14.96 16.17,15.75L20,19.59Z" /></svg>' . "\n";
echo '</div>' . "\n";
echo '<!-- /fc:LOGO -->' . "\n";
echo '<!--  fc:MESSAGE -->' . "\n";
echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
echo '<h2 class="aln:text-center sm)aln:text-left wd:100%">System Page Error</h2>' . "\n";
echo '<p class="aln:text-center sm)aln:text-left wd:100%">The page you are looking for can not be found.</p>' . "\n";
echo '<!--  fc:BUTTON -->' . "\n";
echo '<div class="fx:r fxa:3 sm)fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
echo '<div class="aln:text-center sm)aln:text-left mar:top+1">' . "\n";
echo '<button onclick="javascript:history.back()">Return to previous page</button>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /fc:BUTTON -->' . "\n";
echo '</div>' . "\n";
echo '<!--  fc:MESSAGE -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fc:404 -->' . "\n";
echo '</article>' . "\n";
echo '<!-- /fi:3/1/1/ARTICLE -->' . "\n";
echo '</section>' . "\n";
echo '<!-- /fi:1/SECTION -->' . "\n";

/*
***
    * function: get_sidebar
    * descript: display sidebar
    * ref: developer.wordpress.org/reference/functions/get_sidebar/
***
*/
get_sidebar();
echo '</main>' . "\n";
echo '<!-- /fc:MAIN -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fi:3/HTML -->' . "\n";

/*
***
    * function: get_footer
    * descript: display page footer
    * ref: developer.wordpress.org/reference/functions/get_footer/
***
*/
get_footer();

/*
***
    * function: wp_reset_postdata
    * descript: reset database query
    * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
***
*/
wp_reset_postdata();

/*
 * EOF:     404.php
 * Build:   200415
 *
 */
?>
