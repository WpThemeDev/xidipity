<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   archive.php
 *  build:  90728.1
 *  descrp: Display archive excerpts
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 ****/
/*
    display header
*/
get_header();
echo '<!-- xwpt: 90713.1/archive.php         -->' . "\n";
echo '<main id="xwtFxRowItem" class="xwtFxRowItemOpts">' . "\n";
echo '<div id="xwtFxRowItems" class="xpost-wrapper xpost-wrapper-archive">' . "\n";
if (have_posts())
{
    /*
        display excerpt banner
    */
    echo xidipity_excerpt_banner(array(
        'cat' => 'Archive',
        'icon' => '<i class="far fa-file-alt fg-bas-400 pr-2"></i>',
    ));
    while (have_posts())
    {
        the_post();
        get_template_part('template-parts/content', get_post_format());
    }
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
}
echo '</div>' . "\n";
echo '</main>' . "\n";
/*
    display sidebar
*/
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt: 90713.1/archive.php        -->' . "\n";
/*
    reset post data
*/
wp_reset_postdata();
/*
    display footer
*/
get_footer();
/*
    eof:archive.php
*/
?>
