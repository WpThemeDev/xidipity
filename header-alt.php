<?php
/*
*        file: header-alt.php
*       build: 90714.1
* description: Template for page header without menu.
*      github: https://github.com/WpThemeDev/xidipity
*    comments: This template displays the page header and opens the page flexbox container
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<!doctype html>' . "\n";
?>
<html <?php
language_attributes(); ?> >
<?php
echo '<!-- xwpt:90714.1/header-alt.php       -->' . "\n";
echo '<head>' . "\n";
echo '<meta charset="' . get_bloginfo('charset') . '">' . "\n";
echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
echo '<link rel="profile" href="http://gmpg.org/xfn/11">' . "\n";
/* load wordpress meta     ------------
-- */
do_action('wp_head');
echo '</head>' . "\n";
echo '<body class="' . implode(' ', get_body_class()) . '">' . "\n";
echo '<div id="xwtBkPage" class="site">' . "\n";
echo '<a class="skip-link screen-reader-text" href="#content">' . __('Skip to content') . '</a>' . "\n";
echo '<header id="xwtBkHead" class="xwtBkHeadOpts">' . "\n";
echo '<div class="header-banner">' . "\n";
/* custom logo             ------------
-- */
$custom_logo_id = get_theme_mod('custom_logo');
$logo = wp_get_attachment_image_src($custom_logo_id, 'full');

if (has_custom_logo()) {
    echo '<a href="' . esc_url(home_url('/')) . '" rel="home"><img class="header-logo" src="' . esc_url($logo[0]) . '" alt="' . get_bloginfo('name') . '"></a>' . "\n";
}

if (is_front_page() && is_home()) {
    echo '<p class="site-title"><a href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo('name') . '</a></p>' . "\n";
}
else {
    echo '<p class="site-title"><a href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo('name') . '</a></p>' . "\n";
}

$description = get_bloginfo('description', 'display');

if ($description || is_customize_preview()) {
    echo '<p class="site-description">' . $description . '</p>' . "\n";
}

echo '</div>' . "\n";
$page = get_page_by_path('table-of-contents');

/* need primary menu       ------------
-- */
$menuLocations = get_nav_menu_locations();
$menuID = $menuLocations['no-menu'];
if ($menuID > 0 Or $page) {
    if ($page) {
        echo '<div class="toc-menu">';
        if ($page->ID == get_queried_object_id()) {
            echo '<a class="toc-btn" href="' . home_url('/') . '"><i class="fas fa-bars"></i></a>' . "\n";
        }
        else {
            echo '<a class="toc-btn" href="' . get_permalink($page->ID) . '"><i class="fas fa-bars"></i></a>' . "\n";
        }
    
        echo '</div>' . "\n";
    }
    else {
        echo '<nav id="site-navigation" class="main-navigation">' . "\n";
        echo '<input type="checkbox" id="menu-toggle">' . "\n";
        echo '<label for="menu-toggle"><i class="fas fa-bars"></i></label>' . "\n";
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_id' => 'primary-menu',
        ));
        echo '</nav>' . "\n";
    }
}
echo '</header>' . "\n";
echo '<!-- /xwpt:90714.1/header-alt.php      -->' . "\n";
// This is closed in the footer.php
//echo '<div id="content" class="site-content">' . "\n";
echo '<div id="xwtFxRowItems" class="xwtFxRowItemsOpts">' . "\n";

/* reset post data         ------------
-- */
wp_reset_postdata();
/*  # eof
    header.php
-------------------------------------*/
?>