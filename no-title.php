<?php
/*
 * Template Name: No-Title
 *
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       no-title.php
 * Function:        display page without page title
 * Build:           200318
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

/*
    set page options
*/
disp_sidebar('yes');
disp_menu('yes');
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
echo '<!-- xwpt: 90920.1d/page/php                -->' . "\n";
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
if ($wp_query->have_posts()) {
    while ($wp_query->have_posts()) {
        the_post();
        echo '<!-- xwpt: 90915.1a/content-page/php        -->' . "\n";
        echo '<div class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% fx:shadow">' . "\n";
        /*
        content title
        */
        echo '<div class="pad:left+1" style="display:none;">' . "\n";
        echo '<header class="fx:cn-itm-hd">' . "\n";
        the_title('<h1 class="fx:cn-itm-ti">', '</h1>');
        echo '</header>' . "\n";
        /*
        yoast breadcrumbs
        */
        if ( !is_front_page() && !is_home() )
        {
            if (function_exists('yoast_breadcrumb'))
            {
                yoast_breadcrumb('<p id="breadcrumbs" class="seo-pag-breadcrumbs">', '</p>');
            }
        }
        echo '</div>' . "\n";
        /*
        content
        */
        echo '<!-- xwpt: flexbox/content/wrapper          -->' . "\n";
        echo '<div class="cn:flex">' . "\n";
        echo '<div class="cn:block">' . "\n";
        the_content();
        echo '</div>' . "\n";
        echo '</div>' . "\n";
        echo '<!-- /xwpt: flexbox/content/wrapper         -->' . "\n";
        /*
            page footer
        */
        /*: edit :*/
        if (get_edit_post_link())
        {
            $v_meta_list .= dsp_edit(get_edit_post_link()) . '|';
        }
        /*: date :*/
        $v_meta_list .= dsp_date(get_the_date()) . '|';
        echo '<div class="pad:left+1 fnt:size-smaller prt(dsp:none)">' . "\n";
        echo xidipity_metalinks(explode('|', $v_meta_list)) . "\n";
        echo '</div>' . "\n";
        echo '</div>' . "\n";
    }
    echo '<!-- /xwpt: 90915.1a/content-page/php       -->' . "\n";
    /*
        pagination
    */
    $v_pages = $wp_query->max_num_pages;
    if ($v_pages > 1)
    {
        echo '<!-- xwpt: 90920.1d/page/php/pagination     -->' . "\n";
        $v_cur_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
        echo '<!-- /xwpt: 90920.1d/page/php/pagination    -->' . "\n";
    }
}
else
{
    get_template_part('template-parts/content', 'none');
}
echo '</div>' . "\n";
echo '</main>' . "\n";
echo '<!-- /xwpt: 90920.1d/page/php               -->' . "\n";
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
 * EOF:     no-title.php
 * Build:   200318
 *
 */
?>
