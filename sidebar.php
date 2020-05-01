<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       sidebar.php
 * Function:        display sidebar
 * Build:           200415
 * GitHub:          github.com/WpThemeDev/xidipity/
 * License URI:     www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            developer.wordpress.org/themes/basics/
 *
 * comment  -------------------------------------------------------------------
 *  the sidebar is locked to a width of 320px (wd:20) when the media exceeds
 *  a width of 900px.
 *
 */

/*
***/
echo '<!--  file:sidebar.php -->' . "\n";
/***
*/

/*
***
    * dynamic_sidebar
***
*/
echo '<!--  fi:3/1/2/HTML -->' . "\n";
echo '<section class="aln:text-left fxd:4 fxe:6 wd:0 fb:100% md)fb:20 prt[dsp:none]">' . "\n";
dynamic_sidebar( 'sidebar-1' );
echo '</section>' . "\n";
echo '<!-- /fi:3/1/2/HTML -->' . "\n";

/*
 * EOF:     sidebar.php
 * Build:   200415
 *
 */
?>
