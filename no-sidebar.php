<?php
/*
 *  Template Name: No Sidebar
 *
 *  Xidipity WordPress Theme
 *
 *  file:   no-sidebar.php
 *  build:  90824.1b
 *  descrp: no-sidebar template
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    save name to db
*/
update_option('current_page_template','no sidebar');
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
echo '<!-- xwpt: 90824.1b/no-sidebar            -->' . "\n";
/*
    set flexbox to full width
*/
echo '<main id="xwtFxRowFullItemAlt" class="xwtFxRowItemOpts">' . "\n";
if ($wp_query->have_posts()) {
    while ($wp_query->have_posts()) {
        the_post();
        get_template_part('template-parts/content-page', 'page');
        /*
            pagination
        */
        $v_pages = $wp_query->max_num_pages;
        if ($v_pages > 1)
        {
            $v_cur_page = max(1, get_query_var('paged'));
            echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
        }
    }
}
echo '</main>' . "\n";
/*
    no sidebar
*/
echo '</div>' . "\n";
echo '<!-- /xwpt: 90824.1b/no-sidebar           -->' . "\n";
/*
    reset post data
*/
wp_reset_postdata();
/*
    display footer
*/
get_footer();
/*
    eof: no-sidebar.php
*/
?>
