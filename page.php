<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   page.php
 *  build:  90915.1a
 *  descrp: Page template
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    save page template
*/
page_tmpl('page');
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
echo '<!-- xwpt: 90915.1a/page/php                -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-3    -->' . "\n";
echo '<main class="fx:pg-ct-itm">' . "\n";
echo '<div class="fx:cn-container">' . "\n";
if ($wp_query->have_posts()) {
    while ($wp_query->have_posts()) {
        the_post();
        get_template_part('template-parts/content', 'page');
        echo '</div>' . "\n";

        /*
            pagination
        */
        $v_pages = $wp_query->max_num_pages;
        if ($v_pages > 1)
        {
            echo '<!-- xwpt: 90915.1a/page/php/pagination     -->' . "\n";
            $v_cur_page = max(1, get_query_var('paged'));
            echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
            echo '<!-- /xwpt: 90915.1a/page/php/pagination    -->' . "\n";
        }
    }
}
else
{
    get_template_part('template-parts/content', 'none');
    echo '</div>' . "\n";
}
echo '</main>' . "\n";
echo '<!-- /xwpt: 90915.1a/page/php               -->' . "\n";
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
    eof: page.php
*/
?>
