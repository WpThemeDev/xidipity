<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       footer.php
 * Function:        display page footer
 * Build:           200206
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

echo '<!-- xwpt: 90920.1d/footer/php              -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-5    -->' . "\n";
/*
    footer management
*/
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<footer class="fx:pg-ct-itm-sbl fnt:size-smaller mar:bottom+1">' . "\n";
    echo '<div class="fx:area-ct-' . XWT_FTR_ALIGN . ' mar:vert+0.75">' . "\n";
    echo '<div class="fx:area-itm-' . XWT_FTR_ALIGN .  '">' . "\n";
}
else
{
    echo '<footer class="fx:pg-ct-itm-sbr fnt:size-smaller mar:bottom+1">' . "\n";
    echo '<div class="fx:area-ct-' . XWT_FTR_ALIGN . ' mar:vert+0.75">' . "\n";
    echo '<div class="fx:area-itm-' . XWT_FTR_ALIGN .  '">' . "\n";
}
echo '<p>' . blog_copyright() . '</p>';
echo '<p><a href="' . get_site_url() . '">Xidipity Theme</a> &sdot; Powered by <a href="https://wordpress.org">WordPress</a>';
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</footer>' . "\n";
echo '<!-- /xwpt: 90920.1d/footer/php             -->' . "\n";
/*: wordpress code :*/
wp_footer();
echo '</body>' . "\n";
echo '</html>' . "\n";

/*
 * EOF:     footer.php
 * Build:   200206
 *
 */
?>
