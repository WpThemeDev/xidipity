<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       comments.php
 * Function:        display comments
 * Build:           200205-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version			1.0
 * @since			0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/*
    login required
*/
if (post_password_required()) {
    return;
}

echo '<!-- xwpt: 90927.1a/comments/php            -->' . "\n";
echo '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
echo '<div class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% fx:shadow prt(dsp:none)">' . "\n";

if (have_comments()):
    echo '<div class="fx:ct-itm-opt mar:horz-1">' . "\n";
    echo '<h3 class="comments-title">' . "\n";
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

    echo '</h3>' . "\n";
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
    echo '<p>' . xidipity_icon_comment() . __('<span class="pad:left-0.5">Comments are closed.</span>', 'xidipity') . '</p>' . "\n";
    echo '</div>' . "\n";
endif;
/*
    display comment form
*/
echo '<div class="pad:1">' . "\n";
comment_form(array(
    'title_reply'=>xidipity_icon_discuss() . '<span class="pad:left-0.5">Got Something To Say?</span>',
    'logged_in_as' =>''
    ) );
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90927.1a/comments/php           -->' . "\n";
echo '</div>' . "\n";

/*
 * EOF:     comments.php
 * Build:   200205-1
 *
 */
?>
