<?php
/*
*        file: image.php
*       build: 90330.4
* description: Template for displaying image attachments
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
echo '<div class="content-area-container">' . "\n";
echo '<div id="primary" class="content-area ' . xidipity_layout_class('content') . '">' . "\n";

/* get page title          ------------
-- */
$pgtitle = get_the_title();
if (strpos($pgtitle, '.') > 1) {
    $pgtitle = substr($pgtitle, 0, strpos($pgtitle, '.'));
}

/* have attachment         ------------
-- */
if (have_posts()) {
    /* get attachment metadata ------------
    -- */
    $metadata = wp_get_attachment_metadata();
    // the_post();
    echo '<article id="post-' . get_the_ID() . '" class="post-459 attachment type-attachment status-inherit hentry">' . "\n";
    echo '<h2 class="p-4"><i class="far fa-image fg-pri-300"></i> ' . $pgtitle . '</h2>' . "\n";
    echo '<p class="pl-4">Dimensions: ' . absint($metadata['width']) . '&times;' . absint($metadata['height']) . 'px' . "\n";
    echo '<p>&nbsp;</p>' . "\n";
    echo '<div class="entry-content">' . "\n";
    echo '<figure class="entry-attachment wp-block-image">' . "\n";
    /**
     * Filter the default Xidipity image attachment size.
     *               *
     * @param string $image_size Image size. Default 'large'.
     */
    $image_size = apply_filters('Xidipity_attachment_size', 'full');
    echo wp_get_attachment_image(get_the_ID() , $image_size) . "\n";
    echo '<figcaption class="wp-caption-text">' . get_the_excerpt(get_the_ID()) . '</figcaption>' . "\n";
    echo '</figure>' . "\n";
    echo '<p class="pb-2 pl-4 pr-4"' . get_the_content() . '</p>';
    wp_link_pages(array(
        'before' => '<div class="page-links"><span class="page-links-title">' . __('Pages:', 'Xidipity') . '</span>',
        'after' => '</div>',
        'link_before' => '<span>',
        'link_after' => '</span>',
        'pagelink' => '<span class="screen-reader-text">' . __('Page', 'Xidipity') . ' </span>%',
        'separator' => '<span class="screen-reader-text">, </span>',
    ));
    echo '</div>' . "\n";
    echo '<footer class="text-sm">' . "\n";

    if ($metadata) {
        echo '<i class="far fa-eye fg-sec-300 pl-4 pr-1"></i><a href="' . esc_url(wp_get_attachment_url()) . '">Raw</a>';
    }

    Xidipity_entry_footer();
    echo '</footer>' . "\n";
    echo '</article>' . "\n";

    // Parent post navigation.

    $title = get_the_title();
    $parent = get_the_title($post->post_parent);
    if ($title !== $parent) {
        the_post_navigation(array(
            'prev_text' => _x('<h4><i class="far fa-bookmark fg-pri-300 pr-2"></i>Published in</h4><span class="post-title">%title</span>', 'Parent post link', 'Xidipity') ,
        ));
    }

    // If comments are open or we have at least one comment, load up the comment template.

    if (comments_open() || get_comments_number()) {
        comments_template();
    }

}

echo '</div>' . "\n";
/* display sidebar         ------------
-- */
get_sidebar();
echo '</div>' . "\n";
/* display footer          ------------
-- */
get_footer();
/*  # eof
    image.php
-------------------------------------*/
?>
