<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       template-parts/content-pagination.php
 * Function:        present pagination toolbar
 * Build:           200429
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
echo '<!--  file:content-pagination.php -->' . "\n";
/***
*/

$total_pages = $wp_data->max_num_pages;
if ($total_pages > 1)
{
    echo '<!--  ct:PAGINATION -->' . "\n";
    $current_page = max(1, get_query_var('paged'));
    $args = array(
        'base'               => get_pagenum_link(1) . '%_%',
        'format'             => '/page/%#%',
        'total'              => abs($total_pages),
        'current'            => abs($current_page),
        'show_all'           => false,
        'end_size'           => 1,
        'mid_size'           => 2,
        'prev_next'          => true,
        'prev_text'          => '<i class="fas fa-chevron-left"></i>',
        'next_text'          => '<i class="fas fa-chevron-right"></i>',
        'type'               => 'plain',
        'add_args'           => false,
        'add_fragment'       => '',
        'before_page_number' => '',
        'after_page_number'  => ''
    );
    echo '<div class="fx:r fxa:4 fxb:6 fxc:1 bg:bas-050 cnr:arch-small mar:vrt+0.5 pad:+0.5">' . "\n";
    echo paginate_links($args);
    echo '</div>' . "\n";
    echo '<!-- /ct:PAGINATION -->' . "\n";
}

/*
 * EOF:     template-parts/content-pagination.php
 * Build:   200429
 *
 */
?>
