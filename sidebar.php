<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       sidebar.php
 * Function:        display sidebar
 * Build:           200107-1
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
    get page options
*/
echo '<!-- xwpt: 90915.1a/sidebar/php             -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-4    -->' . "\n";
/*
    logic check
*/
if (disp_sidebar() == 'no')
{
    if (XWT_SIDEBAR_ALIGN == 'left')
    {
        echo '<div class="fx:pg-ct-itm-sbl dsp:none">' . "\n";
    }
    else
    {
        echo '<div class="fx:pg-ct-itm-sbr dsp:none">' . "\n";
    }
}
else
{
    if (XWT_SIDEBAR_ALIGN == 'left')
    {
        echo '<div class="fx:pg-ct-itm-sbl">' . "\n";
    }
    else
    {
        echo '<div class="fx:pg-ct-itm-sbr">' . "\n";
    }
}
echo '<!-- xwpt: flexbox/sidebar/container        -->' . "\n";
echo '<div class="fx:sb-ct fx:sb-ct-opt">' . "\n";
/*: hook for print.css to hide sidebar :*/
echo '<div id="sidebar">' . "\n";
dynamic_sidebar( 'sidebar-1' );
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90915.1a/sidebar/php            -->' . "\n";

/*
 * EOF:     sidebar.php
 * Build:   200104-1
 *
 */
?>
