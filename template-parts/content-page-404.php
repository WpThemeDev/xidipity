<?php
/*
*        file: content-page-404.php
*       build: 90714.2
* description: The template used for displaying basic page content in info.php
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<!-- xwpt:90714.1/content-page-404.php    -->' . "\n";
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
$page = get_page_by_path('404-error');

if ($page) {
    // custom page
    $content =  apply_filters( 'the_content', $page->post_content );
    echo $content;
} else {
    // default
    echo '<h1><i class="fas fa-search-minus fg-pri-300 pr-4"></i>' . __('404 Error', 'xidipity') . '</h1>' . "\n";
    echo '<h5 class="fg-bas-700">' . __('Unable to locate requested page.', 'xidipity') . '</h5>' . "\n";
    echo '<p>&nbsp;</p>' . "\n";
    echo '<a href="' . esc_url(home_url('/')) . '" rel="Xidipity Home">' . "\n";
    echo '<i class="fas fa-home fg-pri-300"></i>' . "\n";
    echo '  Home Page</a>' . "\n";
}

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
echo '<!-- /xwpt:90714.1/content-page-404.php   -->' . "\n";
/*  # eof
content-page-404.php
-------------------------------------*/
?>
