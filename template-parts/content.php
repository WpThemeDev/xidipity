<?php
/*
*        file: content.php
*       build: 90708.1
* description: Template for displaying blog summary card.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<!-- xwpt:90708.1/content.php         -->' . "\n";
echo '<article id="xwtFxRowHalfItem" class="xwtAddShadow ' . implode(' ', get_post_class()) . '">' . "\n";
// echo '<div class="post-content-wrapper post-content-wrapper-archive">' . "\n";
/* display featured image  ------------
-- */
xidipity_post_thumbnail();
// echo '<div class="entry-data-wrapper entry-data-wrapper-archive">' . "\n";
echo '<div class="xwtAddPadContent entry-header-wrapper entry-header-wrapper-archive">' . "\n";

if ('post' == get_post_type()) {
    echo '<div class="entry-meta entry-meta-header-before">' . "\n";
    echo '<ul class="hz-list">' . "\n";
    echo '<li>' . xidipity_post_first_category() . '</li>' . "\n";
    if (is_sticky() && is_home() && !is_paged()) {
        echo '<li>' . "\n";
        echo '<span class="post-label post-label-featured">' . "\n";
        echo '<sup><i class="far fa-star fg-pri-300"></i></sup><span class="screen-reader-text">' . __('Featured', 'xidipity') . '</span>' . "\n";
        echo '</span>' . "\n";
        echo '</li>' . "\n";
    }

    echo '</ul>' . "\n";
}

echo '<header id="xwtEntryHeader">' . "\n";
the_title('<h1 class="xwtEntryTitle"><a href="' . esc_url(apply_filters('xidipity_the_permalink', get_permalink())) . '" rel="bookmark">', '</a></h1>');
echo '</header>' . "\n";

// ! Important
// This needs more work. After validation test check classes.
//

if ('post' == get_post_type()) {
    echo '<div class="entry-meta entry-meta-header-after">' . "\n";
    echo '<ul class="hz-list" style="padding-bottom: 10px;">' . "\n";
    echo '<li>' . xidipity_posted_on() . '</li>' . "\n";
    echo '<li>' . xidipity_posted_by() . '</li>' . "\n";
    echo '</ul>' . "\n";
    echo '</div>' . "\n";
}

echo '</div>' . "\n";

// ! Important
// This needs more work. After validation test check classes.
//
if (xidipity_has_excerpt()) {
    echo '<div class="entry-summary">' . "\n";
    the_excerpt();
    echo '</div>' . "\n";
}

/* xt:annotation/readmore  ------------
 */
echo get_readmore(esc_url(apply_filters('xidipity_the_permalink', get_permalink())));
echo '</div>' . "\n";
// echo '</div>' . "\n";
// echo '</div>' . "\n";
echo '</article>' . "\n";
echo '<!-- /xwpt:90708.1/content.php        -->' . "\n";
/*  # eof
    content.php
-------------------------------------*/
?>
