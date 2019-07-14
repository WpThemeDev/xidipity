<?php
/*
*        file: content-page-info.php
*       build: 90714.1
* description: The template used for displaying info page content
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<!-- xwpt:90714.1/content-page-info.php    -->' . "\n";
//echo '<article id="post-' . get_the_ID() . '" class="' . implode(' ', get_post_class()) . '">' . "\n";
echo '<article class="w-full">' . "\n";
//echo '<div class="post-content-wrapper post-content-wrapper-single">' . "\n";
//echo '<div class="xwtAddPadPage">' . "\n";

//echo '<div class="entry-data-wrapper entry-data-wrapper-single">' . "\n";
//echo '<div class="entry-header-wrapper">' . "\n";
//echo '<header class="entry-header">' . "\n";
//the_title('<h1 class="entry-title">', '</h1>');
//echo '</header>' . "\n";
//echo '</div>' . "\n";
//echo '<div class="entry-content">' . "\n";

/* yoast breadcrumbs       ------------
-- */

//if ( function_exists('yoast_breadcrumb') ) {
//  yoast_breadcrumb( '<p id="breadcrumbs" class="seo-pag-breadcrumbs">','</p>' );
//}

/* display content         ------------
-- */

the_content();

/*
wp_link_pages(array(
    'before' => '<div class="page-links"><span class="page-links-title">' . esc_html__('Pages:', 'xidipity') . '</span>',
    'after' => '</div>',
    'link_before' => '<span>',
    'link_after' => '</span>',
));
echo '</div>' . "\n";

if ('' != get_edit_post_link()) {
    echo '<footer class="xwtContentFoot">' . "\n";
    xidipity_entry_footer();
    echo '</footer>' . "\n";
}
*/
//echo '</div>' . "\n";
//echo '</div>' . "\n";
echo '</article>' . "\n";
echo '<!-- /xwpt:90714.1/content-page-info.php   -->' . "\n";
/*  # eof
content-page-info.php
-------------------------------------*/
?>