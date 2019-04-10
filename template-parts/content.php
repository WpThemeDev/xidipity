<?php
/*
*        file: content.php
*       build: 90323.1
* description: Template for displaying blog summary card.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<article id="post-' . get_the_ID() . '" class="' . implode(' ', get_post_class()) . '">' . "\n";
echo '<div class="post-content-wrapper post-content-wrapper-archive">' . "\n";
/* display featured image  ------------
-- */
xidipity_post_thumbnail();
echo '<div class="entry-data-wrapper entry-data-wrapper-archive">' . "\n";
echo '<div class="entry-header-wrapper entry-header-wrapper-archive">' . "\n";

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

echo '<header class="entry-header">' . "\n";
the_title('<h1 class="entry-title"><a href="' . esc_url(apply_filters('xidipity_the_permalink', get_permalink())) . '" rel="bookmark">', '</a></h1>');
echo '</header>' . "\n";

if ('post' == get_post_type()) {
    echo '<div class="entry-meta entry-meta-header-after">' . "\n";
    echo '<ul class="hz-list" style="margin-top: -4px; padding-bottom:10px;">' . "\n";
    echo '<li>' . xidipity_posted_on() . '</li>' . "\n";
    echo '<li>' . xidipity_posted_by() . '</li>' . "\n";
    echo '</ul>' . "\n";
    echo '</div>' . "\n";
}

echo '</div>' . "\n";

if (xidipity_has_excerpt()) {
    echo '<div class="entry-summary">' . "\n";
    the_excerpt();
    echo '</div>' . "\n";
}

/* template                ------------
version - 90306.1
annotation / read more / link
-- */
echo '<div style="display: table; background-color: var(--bg-wht); padding: 15px 0; width: 100%;">' . "\n";
echo '<div style="border-right: solid 1px var(--bg-bas-300); display: table-cell; text-align: center; vertical-align: middle; width: 40px;"><i class="far fa-comment-alt fg-pri-300" style="font-size: 1.2rem;">&#x200B;</i></div>' . "\n";
echo '<div style="display: table-cell; font-size: 0.85rem; padding-left: 10px; width: calc(100% - 40px);"><a href="' . esc_url(apply_filters('xidipity_the_permalink', get_permalink())) . '">Read more&nbsp;&#8230;</a></div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</article>' . "\n";
/*  # eof
    content.php
-------------------------------------*/
?>
