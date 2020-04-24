<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       template-parts/content-none.php
 * Function:        report unexpected execution of site
 * Build:           200422
 * GitHub:          github.com/WpThemeDev/xidipity/
 * License URI:     www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           1.0
 *
 */

/*
***/
echo '<!--  file:content-none.php -->' . "\n";
/***
*/
echo '<!--  fc:NONE -->' . "\n";
echo '<div class="fx:c sm)fx:r fxa:1 fxb:1 fxc:1 mar:vrt+0.5">' . "\n";
echo '<!--  fi:LOGO -->' . "\n";
echo '<div class="fxd:3 wd:100% pad:vrt+0.5 sm)wd:25%">' . "\n";
echo xidipity_404_logo() . "\n";
echo '</div>' . "\n";
echo '<!-- /fi:LOGO -->' . "\n";
echo '<!--  fi:MESSAGE -->' . "\n";
echo '<div class="fxd:1 fxe:6 wd:100% sm)pad:+1 sm)wd:75%">' . "\n";
echo '<h2>System Page Error</h2>' . "\n";
echo '<p>The page you are looking for can not be found.</p>' . "\n";
echo '<div class="aln:text-center sm)aln:text-left mar:top+1">' . "\n";
echo '<button onclick="goBack()">Return to previous page</button>' . "\n";
echo '</div>' . "\n";
echo '<script>' . "\n";
echo 'function goBack() {window.history.back();}' . "\n";
echo '</script>' . "\n";
echo '</div>' . "\n";
echo '<!--  fi:MESSAGE -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fc:NONE -->' . "\n";

/*
 * EOF:     template-parts/content-none.php
 * Build:   200422
 *
 */
?>
