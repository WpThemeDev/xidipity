<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   search.php
 *  build:  90824.1b
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
echo '<!-- xwpt: 90824.1b/search.php          -->' . "\n";
echo '<main id="xwtFxRowItem" class="xwtFxRowItemOpts">' . "\n";
echo '<div class="fx:col dv1/fx:row fx:nowrap fx:opt-045 dv1/fx:opt-205">' . "\n";
if (have_posts())
{
    /*
        display excerpt banner
    */
    $wp_cnt = $wp_query->found_posts;
    if ($wp_cnt  == 1)
    {
        echo xidipity_excerpt_banner(array(
            'icon' => '<i class="far fa-comment-alt fg-pri-400 pad:right-0.75"></i>',
            'title' => $wp_query->found_posts . ' Item found',
        ));
    }
    else
    {
        echo xidipity_excerpt_banner(array(
            'icon' => '<i class="far fa-comment-alt fg-pri-400 pad:right-0.75"></i>',
            'title' => $wp_query->found_posts . ' Items found',
        ));
    }
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
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
    }
}
else
{
    get_template_part('template-parts/content', 'none');
    echo '</div>' . "\n";
}
echo '</main>' . "\n";
/*
    display sidebar
*/
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt: 90824.1b/search.php         -->' . "\n";
/*
    reset post data
*/
wp_reset_postdata();
/*
    display footer
*/
get_footer();
/*
    eof: search.php
*/
?>
