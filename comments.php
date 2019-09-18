<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   comments.php
 *  build:  90915.1a
 *  descrp: comment template
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    login required
*/
if (post_password_required()) {
    return;
}

echo '<!-- xwpt: 90915.1a/comments/php            -->' . "\n";
echo '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
echo '<div class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% fx:shadow">' . "\n";

if (have_comments()):
    echo '<div class="fx:ct-itm-opt">' . "\n";
    echo '<h2 class="com:title">' . "\n";
    $comments_number = get_comments_number();
    if ('1' === $comments_number) {
        /*
            translators: %s: post title
        */
        printf(
        esc_html(_x('One comment to &ldquo;%s&rdquo;', 'comments title', 'xidipity')) , get_the_title());
    }
    else {
        /*
            translators: 1: number of comments, 2: post title
        */
        printf(
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
    /*
        comment ordered list
    */
    echo '<ol class="comment-list">' . "\n";
    wp_list_comments(array(
        'style' => 'ol',
        'short_ping' => true,
        'avatar_size' => 68,
    ));
    echo '</ol>' . "\n";
    /*
        comments
    */
    if (get_comment_pages_count() > 1 && get_option('page_comments')):
        echo '<nav id="comment-nav-below" class="navigation comment-navigation comment-navigation-below" role="navigation">' . "\n";
        echo '<h1 class="screen-reader-text">' . esc_html_e('Comment navigation', 'xidipity') . '</h1>' . "\n";
        echo '<div class="nav-links">' . "\n";
        echo '<div class="nav-previous">' . previous_comments_link(esc_html_e('Older Comments', 'xidipity')) . '</div>' . "\n";
        echo '<div class="nav-next">' . next_comments_link(esc_html_e('Newer Comments', 'xidipity')) . '</div>' . "\n";
        echo '</div>' . "\n";
        echo '</nav>' . "\n";
    endif;
    echo '</div>' . "\n";
endif;
/*
    closed comments
*/
if (!comments_open() && '0' != get_comments_number() && post_type_supports(get_post_type() , 'comments')):
    echo '<div class="com:msg">' . "\n";
    echo '<p>' . __('<i class="far fa-comment-alt fg-pri-400 pad:right-0.5"></i>Comments are closed.', 'xidipity') . '</p>' . "\n";
    echo '</div>' . "\n";
endif;
/*
    display comment form
*/
echo '<div class="pad:all-1">' . "\n";
comment_form(array(
    'title_reply'=>'<i class="far fa-comments fg-pri-300 pad:right-0.5"></i>Got Something To Say?',
    'logged_in_as' =>''
    ) );
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90915.1a/comments/php           -->' . "\n";
/*
    eof: comments.php
*/
?>
