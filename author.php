<?php
/*
*        file: author.php
*       build: 90327.1
* description: The template part for displaying an Author biography
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*   reference: https://developer.wordpress.org/reference/functions/get_the_author_meta/
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
/* display page header     ------------
-- */
get_header();
echo '<!-- xwpt:90327.1/author.php          -->' . "\n";
echo '<div class="content-area-container">' . "\n";
echo '<div id="primary" class="content-area ' . xidipity_layout_class('content') . '">' . "\n";
echo '<main id="main" class="site-main">' . "\n";
echo '<div id="post-wrapper" class="post-wrapper post-wrapper-single">' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<!-- 90224.1 Template: miscellaneous / speciality / header / h4 -->' . "\n";
echo '<div style="display: table; font-family: var(--font-sans); width: 100%;">' . "\n";
$avatar = esc_url(get_avatar_url(get_the_author_meta('user_email') , 64));
echo '<div style="background-color: var(--sys-content-bg-color); border-right: solid 3px var(--fg-sec-100); display: table-cell; padding: 8px 10px 0 10px; width: 84px; vertical-align: middle;"><img src="' . $avatar . '" class="rounded-full" alt="avatar" /></div>' . "\n";
echo '<div style="background-color: var(--bg-bas-050); color: var(--fg-bas-900); display: table-cell; padding-left: 15px; width: calc(100% - 84px); vertical-align: top;"><h5>About: ' . get_the_author_meta('nickname') . '</h5><p class="text-sm">' . get_the_author_meta('description', $post->post_author) . '</p></div>' . "\n";
echo '</div>' . "\n";
echo '<!-- End Template -->' . "\n";
echo '<p>&nbsp;</p>' . "\n";
$qry = array(
    'author' => $post->post_author ,
    'orderby' => 'post_date',
    'order' => 'DESC',
    'posts_per_page' => - 1,
    'post_type' => 'post',
    'post_status' => 'publish',
    'suppress_filters' => true
);
$posts = get_posts($qry);
echo '<h5>Posts by The Author</h5>' . "\n";
echo '<ul class="style-text">' . "\n";
echo '<li class="font-normal"><span style="padding-left: 3px; padding-right: 38px;">Posted</span>| Title</li>' . "\n";
echo '</ul>' . "\n";
$html = '<ol class="qtr-spaced">';

foreach($posts as $post) {
    $html.= '<li><a href="' . get_permalink($post) . '">';
    $html.= get_the_date('m/d/Y') . ' | ' . $post->post_title;
    $html.= '</a></li>';
}

$html.= '</ol>';
echo $html;
echo '</div>' . "\n";
echo '</main>' . "\n";
echo '</div>' . "\n";
/* display sidebar         ------------
-- */
get_sidebar();
echo '</div>' . "\n";
echo '<!-- /xwpt:90327.1/author.php         -->' . "\n";
/* reset post data         ------------
-- */
wp_reset_postdata();
/* display footer          ------------
-- */
get_footer();
/*  # eof
author.php
-------------------------------------*/
?>
