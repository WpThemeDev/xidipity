<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   single.php
 *  build:  90728.1
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
echo '<!-- xwpt: 90728.1/single.php          -->' . "\n";
echo '<main id="xwtFxRowItem" class="xwtFxRowItemOpts">' . "\n";
echo '<div id="xwtFxRowItems" class="xpost-wrapper xpost-wrapper-archive">' . "\n";
while (have_posts())
{
    the_post();
    get_template_part('template-parts/content', 'single');
    /*
        pagination (?)
    */
    $v_pages = $wp_query->max_num_pages;
    if ($v_pages > 1)
    {
        $v_cur_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
    }
    /*
        author
    */
    if ('' !== get_the_author_meta('description'))
    {
        get_template_part('template-parts/biography');
    }
    /*
        comments
    */
    if (comments_open() || '0' != get_comments_number())
    {
        comments_template();
    }
}
echo '</div>' . "\n";
echo '</main>' . "\n";
echo '<!-- /xwpt: 90728.1/single.php          -->' . "\n";
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
    eof:single.php
*/
?>
