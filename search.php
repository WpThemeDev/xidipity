<?php
/*
*        file: search.php
*       build: 90713.1
* description: Template for displaying page content.
*      github: https://github.com/WpThemeDev/xidipity
*    comments: The template for displaying search results pages.
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
/* display page header     ------------
-- */
get_header();
echo '<!-- xwpt:90713.1/search.php          -->' . "\n";
//echo '<div class="content-area-container">' . "\n";
//echo '<div id="primary" class="content-area ' . xidipity_layout_class('content') . '">' . "\n";
//echo '<main id="main" class="site-main">' . "\n";
echo '<main id="xwtFxRowItem" class="xwtFxRowItemOpts">' . "\n";
echo '<div id="xwtFxRowItems" class="xpost-wrapper xpost-wrapper-archive">' . "\n";

if (have_posts()) {
    //echo '<header class="page-header">' . "\n";
    //echo '</header>' . "\n";
    //echo '<div id="post-wrapper" class="post-wrapper post-wrapper-archive">' . "\n";
    echo '<div id="xwtFxRowFullItem" class="xwtAddShadow">' . "\n";
    echo '<header class="xwtAddPadExcerpt">' . "\n";
    //echo '<h2><i class="far fa-file-alt fg-bas-300 pr-2"></i>Results:&nbsp;<span>' . get_search_query() . '</span></h2>' . "\n";
    echo '<h2><i class="far fa-file-alt fg-bas-400 pr-2"></i>Search Results</h2>' . "\n";
    echo '</header>' . "\n";
    echo '</div>' . "\n";
    $max_pg = 0;
    while (have_posts()) {
        the_post();
        /* Include the Post-Format-specific template for the content.
        * If you want to override this in a child theme, then include a file
        * called content-___.php (where ___ is the Post Format name) and that will be used instead.
        */
        $max_pg++;
        get_template_part('template-parts/content', get_post_format());
    }
    //echo '</div>' . "\n";
    xidipity_the_posts_pagination($max_pg);
} else {
    get_template_part('template-parts/content', 'none');
}
echo '</div>' . "\n";
echo '</main>' . "\n";
/* display sidebar         ------------
-- */
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt:90713.1/search.php         -->' . "\n";
/* reset post data         ------------
-- */
wp_reset_postdata();
/* display footer          ------------
-- */
get_footer();
/*  # eof
search.php
-------------------------------------*/
?>
