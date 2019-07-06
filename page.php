<?php
/*
*        file: page.php
*       build: 90324.1
* description: This is the template that displays all pages by default.
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
echo '<!-- xwpt:90324.1/page.php            -->' . "\n";
echo '<div class="content-area-container">' . "\n";
echo '<div id="primary" class="content-area ' . xidipity_layout_class('content') . '">' . "\n";
echo '<main id="main" class="site-main">' . "\n";
echo '<div id="post-wrapper" class="post-wrapper post-wrapper-single">' . "\n";
/* run database query      ------------
-- */
if ($wp_query->have_posts()) {
    while ($wp_query->have_posts()) {
        the_post();
        get_template_part('template-parts/content', 'page');

        // If comments are open or we have at least one comment, load up the comment template

        if (comments_open() || '0' != get_comments_number()) {
            comments_template();
        }
    }
}

echo '</div>' . "\n";
echo '</main>' . "\n";
echo '</div>' . "\n";
/* display sidebar         ------------
-- */
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt:90324.1/page.php           -->' . "\n";
/* reset post data         ------------
-- */
wp_reset_postdata();
/* display footer          ------------
-- */
get_footer();
/*  # eof
page.php
-------------------------------------*/
?>
