<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       404.php
 * Function:        display 404 page
 * Build:           200128-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version			2.0
 * @since			0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/*
    set page options
*/
disp_sidebar('yes');
disp_menu('no');
/*
    system variables
*/
global $wp_query;
/*: current pagination number :*/
$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
/*: posts per page :*/
$wp_ppp = get_option('posts_per_page');
/*
    local variables
*/
$v_cur_page = 0;
$v_meta_list = '';
$v_pages = 0;
/*
    display header
*/
get_header();
echo '<!-- xwpt: 90927.1a/page/php                -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-3    -->' . "\n";
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:pg-ct-itm-sbl">' . "\n";
}
else
{
    echo '<main class="fx:pg-ct-itm-sbr">' . "\n";
}
echo '<div class="fx:cn-ct">' . "\n";
get_template_part('template-parts/content', 'none');
echo '</div>' . "\n";
echo '</main>' . "\n";
echo '<!-- /xwpt: 90927.1a/page/php               -->' . "\n";
/*
    display sidebar
*/
get_sidebar();
/*
    reset post data
*/
wp_reset_postdata();
/*
    display footer
*/
get_footer();

/*
 * EOF:     404.php
 * Build:   200128-1
 *
 */
?>
