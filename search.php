<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   search.php
 *  build:  90915.1a
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
echo '<!-- xwpt: 90915.1a/search/php              -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-3    -->' . "\n";
echo '<main class="fx:pg-ct-itm">' . "\n";
if (empty(locate_template('template-parts/content-excerpt.php')))
{
    err_msg('missing file content-excerpt.php');
    echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
    echo '<div class="fx:cn-ct">' . "\n";
    get_template_part('template-parts/content', 'none');
    echo '</div>' . "\n";
}
elseif (have_posts())
{
    /*
        display excerpt banner
    */
    echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
    echo '<div class="fx:cn-ct">' . "\n";
    $wp_cnt = $wp_query->found_posts;
    if ($wp_cnt  == 1)
    {
        echo xidipity_excerpt_banner(array(
            'icon' => '<i class="far fa-comment-alt fg:pri-400 pad:right-0.75"></i>',
            'title' => $wp_query->found_posts . ' Item found',
        ));
    }
    else
    {
        echo xidipity_excerpt_banner(array(
            'icon' => '<i class="far fa-comment-alt fg:pri-400 pad:right-0.75"></i>',
            'title' => $wp_query->found_posts . ' Items found',
        ));
    }
    echo '</div>' . "\n";
    echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
    echo '<div class="fx:cn-ct">' . "\n";
    while (have_posts())
    {
        the_post();
        get_template_part('template-parts/content', 'excerpt');
    }
    echo '</div>' . "\n";
    /*
        display pagination
    */
    $v_pages = $wp_query->max_num_pages;
    if ($v_pages > 1)
    {
        echo '<!-- xwpt: 90915.1a/search/php/pagination   -->' . "\n";
        $v_cur_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
        echo '<!-- /xwpt: 90915.1a/search/php/pagination  -->' . "\n";
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
echo '<!-- /xwpt: 90915.1a/search/php             -->' . "\n";
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
    eof: search.php
*/
?>
