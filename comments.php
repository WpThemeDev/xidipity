<?php
/*
*        file: comments.php
*       build: 90325.1
* description: Template for displaying posts assigned to category.
*      github: https://github.com/WpThemeDev/xidipity
*    comments: Login required.
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/

if (post_password_required()) {
    return;
}

echo '<div id="comments" class="comments-area">' . "\n";

if (have_comments()):
    echo '<div class="comments-area-wrapper">' . "\n";
    echo '<h2 class="comments-title">' . "\n";
    $comments_number = get_comments_number();
    if ('1' === $comments_number) {
        printf(
        /* translators: %s: post title */
        esc_html(_x('One comment to &ldquo;%s&rdquo;', 'comments title', 'xidipity')) , get_the_title());
    }
    else {
        printf(
        /* translators: 1: number of comments, 2: post title */
        esc_html(_nx('%1$s Comment to &ldquo;%2$s&rdquo;', '%1$s Comments to &ldquo;%2$s&rdquo;', $comments_number, 'comments title', 'xidipity')) , number_format_i18n($comments_number) , get_the_title());
    }

    echo '</h2>' . "\n";
    if (get_comment_pages_count() > 1 && get_option('page_comments')):
        echo '<nav id="comment-nav-above" class="navigation comment-navigation comment-navigation-above" role="navigation">' . "\n";
        echo '<h1 class="screen-reader-text">' . esc_html_e('Comment navigation', 'xidipity') . '</h1>' . "\n";
        echo '<div class="nav-links">' . "\n";
        echo '<div class="nav-previous">' . previous_comments_link(esc_html__('Older Comments', 'xidipity')) . '</div>' . "\n";
        echo '<div class="nav-next">' . next_comments_link(esc_html__('Newer Comments', 'xidipity')) . '</div>' . "\n";
        echo '</div>' . "\n";
        echo '</nav>' . "\n";
    endif;
    /* comment ordered list    ------------
    -- */
    echo '<ol class="comment-list">' . "\n";
    wp_list_comments(array(
        'style' => 'ol',
        'short_ping' => true,
        'avatar_size' => 68,
    ));
    echo '</ol>' . "\n";
    /* comments                ------------
    -- */
    if (get_comment_pages_count() > 1 && get_option('page_comments')):
        echo '<nav id="comment-nav-below" class="navigation comment-navigation comment-navigation-below" role="navigation">' . "\n";
        echo '<h1 class="screen-reader-text">' . esc_html_e('Comment navigation', 'xidipity') . '</h1>' . "\n";
        echo '<div class="nav-links">' . "\n";
        echo '<div class="nav-previous">' . previous_comments_link(esc_html__('Older Comments', 'xidipity')) . '</div>' . "\n";
        echo '<div class="nav-next">' . next_comments_link(esc_html__('Newer Comments', 'xidipity')) . '</div>' . "\n";
        echo '</div>' . "\n";
        echo '</nav>' . "\n";
    endif;
    echo '</div>' . "\n";
endif;
/* closed comments         ------------
-- */

if (!comments_open() && '0' != get_comments_number() && post_type_supports(get_post_type() , 'comments')):
    echo '<div class="no-comments-wrapper">' . "\n";
    echo '<p class="no-comments">' . esc_html_e('Comments are closed.', 'xidipity') . '</p>' . "\n";
    echo '</div>' . "\n";
endif;
/* display comment form    ------------
-- */
comment_form();
echo '</div>' . "\n";
/*  # eof
    comments.php
-------------------------------------*/
?>
