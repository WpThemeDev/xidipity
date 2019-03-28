<?php
/*
*        file: image.php
*       build: 90327.1
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
    echo '<h2 style="margin: 15px;"><i class="far fa-image fg-pri-300"></i> ' . $pgtitle . '</h2>' . "\n";
    echo '<p style="margin-left:15px;">Dimensions: ' . absint($metadata['width']) . '&times;' . absint($metadata['height']) . 'px' . "\n";
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
    the_content();
    wp_link_pages(array(
        'before' => '<div class="page-links"><span class="page-links-title">' . __('Pages:', 'Xidipity') . '</span>',
        'after' => '</div>',
        'link_before' => '<span>',
        'link_after' => '</span>',
        'pagelink' => '<span class="screen-reader-text">' . __('Page', 'Xidipity') . ' </span>%',
        'separator' => '<span class="screen-reader-text">, </span>',
    ));
    echo '</div>' . "\n";
    echo '<footer class="entry-footer">' . "\n";

    if ($metadata) {
        printf('<span class="full-size-link"><span class="screen-reader-text">%1$s</span><i class="far fa-eye fg-sec-300 pl-4 pr-1"></i><a class="cat-links" href="%2$s">View</a></span>', _x('Full size', 'Used before full size attachment link.', 'Xidipity') , esc_url(wp_get_attachment_url()) , absint($metadata['width']) , absint($metadata['height'])) . "\n";
    }

    Xidipity_entry_footer();
    echo '</footer>' . "\n";
    echo '</article>' . "\n";

    // Parent post navigation.

    $title = the_title('', '', false);
    $parent = get_the_title($post->post_parent);
    if ($title !== $parent) {
        the_post_navigation(array(
            'prev_text' => _x('<span class="meta-nav">Published in</span><br /><span class="post-title">%title</span>', 'Parent post link', 'Xidipity') ,
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
