<?php
/*
 *  Template Name: Naked
 *
 *  Xidipity WordPress Theme
 *
 *  file:   naked.php
 *  build:  200102.1a
 *  descrp: Page template
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    set page options
*/
disp_sidebar('no');
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
        echo '<div class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% fx:shadow mar:right-0.5">' . "\n";
        /*
        content title
        */
        echo '<div class="pad:left-1" style="display:none;">' . "\n";
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
        echo '<div class="fx:cn-itm-wrapper pad:all-1">' . "\n";
        the_content();
        echo '</div>' . "\n";
        /*
            page footer
        */
        echo '<div class="pad:left-1" style="display:none;">' . "\n";
        $v_meta_list = '';
        /*: edit :*/
        if (get_edit_post_link())
        {
            $v_meta_list .= xidipity_icon_edit() . ',';
            $v_meta_list .= '<a href="' . get_edit_post_link() . '">Edit</a>' . ',';
            $v_meta_list .= '&nbsp;,';
        }
        /*: date :*/
        $v_meta_list .= xidipity_icon_date() . ',';
        $v_meta_list .= get_the_date() . ',';
        echo xidipity_metalinks(explode(',', $v_meta_list));
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
    eof: naked.php
*/
?>
