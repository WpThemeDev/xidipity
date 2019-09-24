<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   header.php
 *  build:  90915.1b
 *  descrp: Header template
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 **/
echo '<!doctype html>' . "\n";
?>
<html <?php
language_attributes(); ?> >
<?php
echo '<!-- xwpt: 90915.1b/header/php              -->' . "\n";
echo '<head>' . "\n";
echo '<meta charset="' . get_bloginfo('charset') . '">' . "\n";
echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
echo '<link rel="profile" href="http://gmpg.org/xfn/11">' . "\n";
/*
    load wordpress meta
*/
do_action('wp_head');
echo '</head>' . "\n";
echo '<body class="' . implode(' ', get_body_class()) . '">' . "\n";
echo '<!-- xwpt: flexbox/page/container           -->' . "\n";
echo '<div class="fx:pg-ct">' . "\n";
echo '<!-- xwpt: 90915.1b/header/php              -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-1    -->' . "\n";
echo '<header class="fx:pg-ct-itm fx:align-ct-itm-1">' . "\n";
echo '<a class="skip-link screen-reader-text" href="#content">' . __('Skip to content') . '</a>' . "\n";
echo '<div class="header-banner">' . "\n";
/*
    custom logo
*/
$custom_logo_id = get_theme_mod('custom_logo');
$logo = wp_get_attachment_image_src($custom_logo_id, 'full');
if (has_custom_logo())
{
    echo '<a href="' . esc_url(home_url('/')) . '" rel="home"><img class="header-logo" src="' . esc_url($logo[0]) . '" alt="' . get_bloginfo('name') . '"></a>' . "\n";
}
if (is_front_page() && is_home())
{
    echo '<p class="site-title"><a href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo('name') . '</a></p>' . "\n";
}
else
{
    echo '<p class="site-title"><a href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo('name') . '</a></p>' . "\n";
}
$description = get_bloginfo('description', 'display');
if ($description || is_customize_preview())
{
    echo '<p class="site-description">' . $description . '</p>' . "\n";
}
echo '</div>' . "\n";
echo '</header>' . "\n";
echo '<!-- /xwpt: 90915.1b/header/php             -->' . "\n";

/*
    menu exceptions
*/
echo '<!-- xwpt: 90828.1a/header/php/nav          -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-2    -->' . "\n";
if ( disp_menu() == 'no' )
{
    echo '<div class="fx:pg-ct-itm disp:none">' . "\n";
}
else
{
    echo '<div class="fx:pg-ct-itm">' . "\n";
}

/*
    primary menu
*/
$wp_page = get_page_by_path('xidipity-toc');
$wp_menus = get_nav_menu_locations();
$wp_menu = (abs($wp_menus['primary']) !== 0);
if ($wp_menu || $wp_page)
{
    if ($wp_page)
    {
        /*: xidipity toc page :*/
        if ($wp_page->ID == get_queried_object_id())
        {
            echo '<a class="toc-btn txt:align-center" href="' . home_url('/') . '"><i class="fas fa-bars"></i></a>' . "\n";
        }
        else
        {
            echo '<a class="toc-btn txt:align-center" href="' . get_permalink($wp_page->ID) . '"><i class="fas fa-bars"></i></a>' . "\n";
        }
    }
    else
    {
        /*: drop down menu :*/
        echo '<div class="fx:mnu-wrapper">' . "\n";
        echo '<nav role="navigation" id="nav">' . "\n";
        echo '<input class="trigger" type="checkbox" id="mainNavButton">' . "\n";
        echo '<label for="mainNavButton" onclick><i class="material-icons vert:align-bottom">menu</i></label>' . "\n";
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_id' => 'primary-menu',
            'container' => ''
        ));
        echo '</nav>' . "\n";
        echo '</div>' . "\n";
    }
}
echo '</div>' . "\n";
echo '<!-- /xwpt: 90915.1b/header/php/nav         -->' . "\n";
/*
    eof: header.php
*/
?>
