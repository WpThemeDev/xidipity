<?php
/*
*        file: single.php
*       build: 90712.1
* description: The Template for displaying all single posts.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
/* display page header     ------------
-- */
get_header();
echo '<!-- xwpt:90712.1/single.php          -->' . "\n";
//echo '<div class="content-area-container">' . "\n";
//echo '<div id="primary" class="content-area ' . xidipity_layout_class('content') . '">' . "\n";
echo '<main id="xwtFxRowItem" class="xwtFxRowItemOpts">' . "\n";
echo '<div id="xwtFxRowItems" class="xpost-wrapper xpost-wrapper-archive">' . "\n";

while (have_posts()) {
    the_post();
    get_template_part('template-parts/content', 'single');
    if ('' !== get_the_author_meta('description')) {
        get_template_part('template-parts/biography');
    }
    echo '<div id="xwtFxRowFullItem" class="xwtAddShadow">' . "\n";
    xidipity_the_post_navigation();
    echo '</div>' . "\n";

    // If comments are open or we have at least one comment, load up the comment template

    if (comments_open() || '0' != get_comments_number()) {
        comments_template();
    }
}

echo '</div>' . "\n";
echo '</main>' . "\n";
//echo '</div>' . "\n";
/* display sidebar         ------------
-- */
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt:90712.1/single.php         -->' . "\n";
/* reset post data         ------------
-- */
wp_reset_postdata();
/* display footer          ------------
-- */
get_footer();
/*  # eof
single.php
-------------------------------------*/
?>
