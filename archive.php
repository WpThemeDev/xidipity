<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   archive
 *  build:  90828.1a
 *  descrp: Display archive excerpts
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 ****/
/*
    system variables
*/
global $wp_query;
/* current pagination number */
$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
/*
    local variables
*/
$v_cur_page = 0;
$v_pages = 0;
/*
    sanitize variables
*/
$v_cur_page = $wp_paged;
/*
    display header
*/
get_header();
echo '<!-- xwpt: 90828.1a/archive/php             -->' . "\n";
echo '<main class="fx:pg-item">' . "\n";
if (have_posts())
{
    /*
        display category banner
    */
    echo '<div class="fx:cn-container">' . "\n";
    echo xidipity_excerpt_banner(array(
        'cat' => single_cat_title('', false),
        'icon' => '<i class="far fa-file-alt fg:bas-400 pad:right-0.5"></i>',
    ));
    echo '</div>' . "\n";
    echo '<div class="fx:cn-container">' . "\n";
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
        echo '<!-- xwpt: 90828.1a/archive/php/pagination  -->' . "\n";
        $v_cur_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
        echo '<!-- /xwpt: 90828.1a/archive/php/pagination -->' . "\n";
    }
}
else
{
    echo '<div class="fx:cn-container">' . "\n";
    get_template_part('template-parts/content', 'none');
    echo '</div>' . "\n";
}
echo '</main>' . "\n";
/*
    display sidebar
*/
get_sidebar();
echo '<!-- /xwpt: 90828.1a/archive/php            -->' . "\n";
/*
    reset post data
*/
wp_reset_postdata();
/*
    display footer
*/
get_footer();
/*
    eof: archive.php
*/
?>
