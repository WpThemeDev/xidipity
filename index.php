<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   index.php
 *  build:  90828.1a
 *  descrp: Display blog excerpts
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 **/
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
echo '<!-- xwpt: 90828.1a/index/php               -->' . "\n";
echo '<main class="fx:pg-item">' . "\n";
echo '<div class="fx:cn-container">' . "\n";
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
    while (have_posts())
    {
        the_post();
        get_template_part('template-parts/content', get_post_format());
    }
    echo '</div>' . "\n";
    /*
        display pagination
    */
    $v_pages = $wp_query->max_num_pages;
    if ($v_pages > 1)
    {
        $v_cur_page = max(1, get_query_var('paged'));
        echo '<!-- xwpt: 90828.1a/index/php/pagination    -->' . "\n";
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
        echo '<!-- /xwpt: 90828.1a/index/php/pagination   -->' . "\n";
    }
}
else
{
    get_template_part('template-parts/content', 'none');
    echo '</div>' . "\n";
}
echo '</main>' . "\n";
echo '<!-- /xwpt: 90828.1a/index/php              -->' . "\n";
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
    eof: index.php
*/
?>
