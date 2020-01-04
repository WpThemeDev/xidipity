<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       searchform.php
 * Function:        search form elements
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

echo '<!-- xwpt:90708.1/searchform.php      -->' . "\n";
echo '<div class="search-frm-container">' . "\n";
echo '<form role="search" method="get" class="search-frm" action="' . esc_url( home_url( '/' ) ) . '">' . "\n";
echo '<label>' . "\n";
echo '<span class="screen-reader-text">' . esc_html_x( 'Search for:', 'label', 'xidipity' ) . '</span>' . "\n";
echo '<input type="search" class="search-fld" placeholder="' . esc_attr_x( 'Search &hellip;', 'placeholder', 'xidipity' ); ?>" value="<?php echo get_search_query(); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label', 'xidipity' ) . '" />' . "\n";
echo '</label>' . "\n";
echo '<button type="submit" class="search-sub"><span class="screen-reader-text">' . esc_html_x( 'Search', 'submit button', 'xidipity' ) . '</span><i class="fas fa-search"></i></button>' . "\n";
echo '</form>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt:90708.1/searchform.php     -->' . "\n";

/*
 * EOF:     searchform.php
 * Build:   200104-1
 *
 */
?>
