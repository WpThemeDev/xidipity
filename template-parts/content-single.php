<?php
/*
*        file: content-single.php
*       build: 90627.1
* description: Template part for displaying single posts.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<article id="post-' . get_the_ID() . '" class="' . implode(' ', get_post_class()) . '">' . "\n";
echo '<div class="post-content-wrapper post-content-wrapper-single">' . "\n";
echo '<div class="entry-data-wrapper entry-data-wrapper-single">' . "\n";
echo '<div class="entry-header-wrapper">' . "\n";
echo '<div class="entry-meta entry-meta-header-before">' . "\n";
echo '<ul class="hz-list">' . "\n";
echo '<li>' . xidipity_posted_on() . '</li>' . "\n";
echo '<li>' . xidipity_posted_by() . '</li>' . "\n";
echo '</ul>' . "\n";
echo '</div>' . "\n";
/* content title           ------------
-- */
echo '<header class="entry-header">' . "\n";
the_title('<h1 class="entry-title">', '</h1>');
echo '</header>' . "\n";
echo '</div>' . "\n";
echo '<div class="entry-content">' . "\n";

/* yoast breadcrumbs       ------------
-- */

if ( function_exists('yoast_breadcrumb') ) {
  yoast_breadcrumb( '<p id="breadcrumbs" class="seo-breadcrumbs">','</p>' );
}

/* display content         ------------
-- */
the_content();

/* content footer          ------------
-- */
wp_link_pages(array(
    'before' => '<div class="page-links"><span class="page-links-title">' . esc_html__('Pages:', 'xidipity') . '</span>',
    'after' => '</div>',
    'link_before' => '<span>',
    'link_after' => '</span>',
));
echo '</div>' . "\n";
echo '<footer class="entry-meta entry-meta-footer">' . "\n";
xidipity_entry_footer();
echo '</footer>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</article>' . "\n";
/*  # eof
content-single.php
-------------------------------------*/
?>
