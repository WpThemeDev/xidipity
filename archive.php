<?php
/*
*        file: archive.php
*       build: 90324.1
* description: Template for displaying posts assigned to category.
*      github: https://github.com/WpThemeDev/xidipity
*    comments: This file displays all categories searches.
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
/* display page header     ------------
-- */
get_header();
echo '<!-- xwpt:90324.1/archive.php         -->' . "\n";
echo '<div class="content-area-container">' . "\n";
echo '<section id="primary" class="content-area ' . xidipity_layout_class('content') . '">' . "\n";
echo '<main id="main" class="site-main">' . "\n";

if (have_posts()) {
    echo '<header class="page-header">' . "\n";
    the_archive_title('<h1 class="page-title">', '</h1>');
    the_archive_description('<div class="taxonomy-description">', '</div>');
    echo '</header>' . "\n";
    echo '<div id="post-wrapper" class="post-wrapper post-wrapper-archive">' . "\n";
    while (have_posts()) {
        the_post();
        /* Include the Post-Format-specific template for the content.
        * If you want to override this in a child theme, then include a file
        * called content-___.php (where ___ is the Post Format name) and that will be used instead.
        */
        get_template_part('template-parts/content', get_post_format());
    }

    echo '</div>' . "\n";
    $ppp = get_option('posts_per_page'); // posts per page
    $cnt_posts = wp_count_posts();
    $tot_posts = $cnt_posts->publish;
    $max_pg = $tot_posts / $ppp;
    xidipity_the_posts_pagination($max_pg);
}
else {
    get_template_part('template-parts/content', 'none');
}

echo '</main>' . "\n";
echo '</section>' . "\n";
/* display sidebar         ------------
-- */
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt:90324.1/archive.php        -->' . "\n";
/* display footer          ------------
-- */
get_footer();
/*  # eof
archive.php
-------------------------------------*/
?>
