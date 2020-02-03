<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       index.php
 * Function:        display blog excerpts
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

/*
    set page options
*/
disp_sidebar('yes');
disp_menu('yes');
/*
    system variables
*/
global $wp_query;
/* current pagination number */
$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
/* posts per page */
$wp_ppp = get_option('posts_per_page');
/*
    local variables
*/
$v_cat_lst = '';
$v_cur_page = 0;
$v_icon = '';
$v_link = '';
$v_meta_list = '';
$v_pages = 0;
/*
    parameters
*/
/* categories to exclude */
$p_cat_lst = 'archive,featured post,spotlight post';
/* categories to exclude */
/*
    sanitize variables
*/
$v_cat_lst = val_cat($p_cat_lst, 1);
$v_cur_page = $wp_paged;
/*
    display header
*/
get_header();
echo '<!-- xwpt: 90920.1d/index/php               -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-3    -->' . "\n";
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:pg-ct-itm-sbl">' . "\n";
}
else
{
    echo '<main class="fx:pg-ct-itm-sbr">' . "\n";
}
$qry_prms = array(
    'cat' => $v_cat_lst,
    'order' => 'DESC',
    'orderby' => 'date',
    'paged' => $v_cur_page,
    'posts_per_page' => $wp_ppp,
);
query_posts($qry_prms);
if (have_posts())
{
    echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
    echo '<div class="fx:cn-ct">' . "\n";
    while (have_posts())
    {
        the_post();
        echo '<!-- xwpt: 90920.1d/content/blog/php        -->' . "\n";
        echo '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
        echo '<article class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-50% fx:shadow">' . "\n";
        /*
            featured image
        */
        $wp_img = get_the_post_thumbnail(null, 'FULL', array('class' => 'xwd:100%'));
        if ($wp_img)
        {
            /*: post thumbnail :*/
            echo $wp_img;
            echo '<div class="pad:+1">' . "\n";
        }
        else
        {
            echo '<div class="pad:+1 ht:min-455px">' . "\n";
        }
        if ('post' == get_post_type())
        {
            if (is_sticky())
            {
                $v_meta_list = dsp_sticky(xidipity_first_category());
            }
            else
            {
                $v_meta_list = dsp_cat(xidipity_first_category());
            }
			echo xidipity_metalinks(explode('|', $v_meta_list)) . "\n";
        }
        if ('post' == get_post_type())
        {
            $v_meta_list  = '';
            $v_meta_list .=  xidipity_posted_on() . '|';
            $v_meta_list .=  xidipity_posted_by() . '|';
            echo '<div class="fnt:size-smaller" style="margin-top:-16px;margin-left:-8px;">' . "\n";
            echo xidipity_metalinks(explode('|', $v_meta_list)) . "\n";
            echo '</div>' . "\n";
        }
        echo '<header class="fx:cn-itm-hd">' . "\n";
        the_title('<h1 class="fx:cn-itm-ti"><a href="' . esc_url(apply_filters('xidipity_the_permalink', get_permalink())) . '" rel="bookmark">', '</a></h1>');
        echo '</header>' . "\n";
        if (xidipity_has_excerpt())
        {
            the_excerpt();
        }
        /*
            readmore
        */
        $v_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));
        echo dsp_rm($v_link) . "\n";
        echo '</div>' . "\n";
        echo '</article>' . "\n";
        echo '<!-- /xwpt: 90920.1d/content/blog/php       -->' . "\n";
    }
    echo '</div>' . "\n";
    /*
        display pagination
    */
    $v_pages = $wp_query->max_num_pages;
    if ($v_pages > 1)
    {
        $v_cur_page = max(1, get_query_var('paged'));
        echo '<!-- xwpt: 90920.1d/index/php/pagination    -->' . "\n";
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
        echo '<!-- /xwpt: 90920.1d/index/php/pagination   -->' . "\n";
    }
}
else
{
    echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
    echo '<div class="fx:cn-ct">' . "\n";
    get_template_part('template-parts/content', 'none');
    echo '</div>' . "\n";
}
echo '</main>' . "\n";
echo '<!-- /xwpt: 90920.1d/index/php              -->' . "\n";
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
 * EOF:     index.php
 * Build:   200206
 *
 */
?>
