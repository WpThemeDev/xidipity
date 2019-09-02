<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   single.php
 *  build:  90828.1a
 *  descrp: Single post template
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
$v_cur_page = 0;
$v_pages = 0;
/*
    display header
*/
get_header();
echo '<!-- xwpt: 90828.1a/single/php              -->' . "\n";
echo '<main class="fx:pg-item">' . "\n";
if ($wp_query->have_posts()) {
    the_post();
    echo '<div class="fx:cn-container">' . "\n";
    get_template_part('template-parts/content', 'post');
    echo '</div>' . "\n";
    /*
        pagination
    */
    $v_pages = $wp_query->max_num_pages;
    if ($v_pages > 1)
    {
        echo '<!-- xwpt: 90828.1a/single/php/pagination   -->' . "\n";
        $v_cur_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
        echo '<!-- /xwpt: 90828.1a/single/php/pagination  -->' . "\n";
    }
    /*
        author
    */
    if ('' !== get_the_author_meta('description'))
    {
        echo '<div class="fx:cn-container">' . "\n";
        get_template_part('template-parts/biography');
        echo '</div>' . "\n";
    }
    /*
        comments
    */
    if (comments_open() || '0' != get_comments_number())
    {
        comments_template();
    }
}
else
{
    get_template_part('template-parts/content', 'none');
    echo '</div>' . "\n";
}
echo '</main>' . "\n";
echo '<!-- /xwpt: 90828.1a/single/php             -->' . "\n";
/*
    display sidebar
*/
get_sidebar();
echo '</div>' . "\n";
/*
    reset post data
*/
wp_reset_postdata();
/*
    display footer
*/
get_footer();
/*
    eof: single.php
*/
?>
