<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       sidebar.php
 * Function:        display sidebar
 * Build:           200322
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version      1.0
 * @since      0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/*
***/
echo '<!--  file:sidebar.php -->' . "\n";
/***
*/
echo '<!--  fi:2/SECTION -->' . "\n";
echo '<section class="fxd:2 fxe:6 ht:min10 wd:100% md)wd:20 prt[dsp:none]">' . "\n";

/*
***
    * dynamic_sidebar
***
*/
dynamic_sidebar( 'sidebar-1' );
echo '</section>' . "\n";
echo '<!-- /fi:2/SECTION -->' . "\n";

/*
 * EOF:     sidebar.php
 * Build:   200322
 *
 */
?>
