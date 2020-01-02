<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   header.php
 *  build:  200102.1a
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
echo '<!-- xwpt: 91001.1a/header/php              -->' . "\n";
echo '<head>' . "\n";
echo '<meta charset="' . get_bloginfo('charset') . '">' . "\n";
echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
echo '<link rel="profile" href="http://gmpg.org/xfn/11">' . "\n";
/*
    load wordpress meta
*/
do_action('wp_head');

if (XWT_HDR_IMG !== 'none')
{
    echo '<!-- xwpt: header/background/image          -->' . "\n";
    echo '<style type="text/css">' . "\n";
    echo '.fx\:ct-itm-1-opt {' . "\n";
    echo 'background-image: url("' . XWT_HDR_IMG . '");' . "\n";
    echo 'background-repeat: no-repeat;' . "\n";
    echo 'background-position: center center;' . "\n";
    echo '-webkit-background-size: cover;' . "\n";
    echo '-moz-background-size: cover;' . "\n";
    echo '-o-background-size: cover;' . "\n";
    echo 'background-size: cover;' . "\n";
    echo 'height: auto;' . "\n";
    echo 'width: 100%;' . "\n";
    echo '}' . "\n";
    echo '</style>' . "\n";
    echo '<!-- /xwpt: header/background/image         -->' . "\n";
}
/*
    emoji support
*/
if (XWT_EMOJI_DSP == 'yes')
{
    echo '<!-- xwpt: wp/emoji/image                   -->' . "\n";
    echo '<style type="text/css">' . "\n";
    echo 'img.wp-smiley,' . "\n";
    echo 'img.emoji {' . "\n";
    echo 'display: inline !important;' . "\n";
    echo 'border: none !important;' . "\n";
    echo 'box-shadow: none !important;' . "\n";
    echo 'height: 1em !important;' . "\n";
    echo 'width: 1em !important;' . "\n";
    echo 'margin: 0 .07em !important;' . "\n";
    echo 'vertical-align: -0.1em !important;' . "\n";
    echo 'background: none !important;' . "\n";
    echo 'padding: 0 !important;' . "\n";
    echo '}' . "\n";
    echo '</style>' . "\n";
    echo '<!-- /xwpt: wp/emoji/image                  -->' . "\n";
}
else
{
    echo '<!-- xwpt: wp/emoji/image                   -->' . "\n";
    echo '<style type="text/css">' . "\n";
    echo 'img.wp-smiley,' . "\n";
    echo 'img.emoji {' . "\n";
    echo 'display: none !important;' . "\n";
    echo '}' . "\n";
    echo '</style>' . "\n";
    echo '<!-- /xwpt: wp/emoji/image                  -->' . "\n";
}
echo '</head>' . "\n";
echo '<body class="' . implode(' ', get_body_class()) . '">' . "\n";
echo '<!-- xwpt: flexbox/page/container           -->' . "\n";
echo '<div class="fx:pg-ct">' . "\n";
echo '<!-- xwpt: 91001.1a/header/php              -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-1    -->' . "\n";
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<header class="fx:pg-ct-itm-sbl fx:ct-itm-1-align">' . "\n";
}
else
{
    echo '<header class="fx:pg-ct-itm-sbr fx:ct-itm-1-align">' . "\n";
}
echo '<a class="skip-link screen-reader-text" href="#content">' . __('Skip to content') . '</a>' . "\n";
echo '<div class="fx:ct-itm-1-opt" style="min-height: ' . XWT_HDR_HGT . '">' . "\n";

/*
    header management
*/
echo '<div class="fx:area-ct-' . XWT_HDR_ALIGN . '">' . "\n";
if (XWT_HDR_LOGO == 'none')
{
    echo '<div class="fx:area-itm-' . XWT_HDR_ALIGN .  '">' . "\n";
    if (is_front_page() || is_home())
    {
        echo '<p class="site-title">' . get_bloginfo('name') . '</p>' . "\n";
    }
    else
    {
        echo '<p><a class="site-title" href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo( 'name' ) . '</a></p>' . "\n";
    }
    echo '<p class="site-description">' . get_bloginfo( 'description' ) . '</p>' . "\n";
    echo '</div>' . "\n";
}
else
{
    if (is_front_page() || is_home())
    {
        echo '<img class="fx:area-ct-itm" src="' . XWT_HDR_LOGO . '" alt="' . get_bloginfo('name') . ' Theme">' . "\n";
    }
    else
    {
        echo '<a href="' . esc_url(home_url('/')) . '" rel="home"><img class="fx:area-ct-itm" src="' . XWT_HDR_LOGO . '" alt="' . get_bloginfo('name') . '"></a>' . "\n";
    }
}
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</header>' . "\n";
echo '<!-- /xwpt: 91001.1a/header/php             -->' . "\n";

/*
    menu exceptions
*/
echo '<!-- xwpt: 90828.1a/header/php/nav          -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-2    -->' . "\n";
if ( disp_menu() == 'no' )
{
    if (XWT_SIDEBAR_ALIGN == 'left')
    {
        echo '<div class="fx:pg-ct-itm-sbl disp:none">' . "\n";
    }
    else
    {
        echo '<div class="fx:pg-ct-itm-sbr disp:none">' . "\n";
    }
}
else
{
    if (XWT_SIDEBAR_ALIGN == 'left')
    {
        echo '<div class="fx:pg-ct-itm-sbl">' . "\n";
    }
    else
    {
        echo '<div class="fx:pg-ct-itm-sbr">' . "\n";
    }
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
            echo '<div class="mnu:hb-' . XWT_MNU_ALIGN . '">' . "\n";
            echo '<a class="toc-btn" href="' . home_url('/') . '"><i class="fas fa-bars"></i></a>' . "\n";
            echo '</div>' . "\n";
        }
        else
        {
            echo '<div class="mnu:hb-' . XWT_MNU_ALIGN . '">' . "\n";
            echo '<a class="toc-btn" href="' . get_permalink($wp_page->ID) . '"><i class="fas fa-bars"></i></a>' . "\n";
            echo '</div>' . "\n";
        }
    }
    else
    {
        /*: drop down menu :*/
        echo '<div class="fx:area-ct-' . XWT_MNU_ALIGN . '">' . "\n";
        echo '<div class="fx:area-itm-' . XWT_MNU_ALIGN . ' fx:mnu-' . XWT_MENU_WIDTH . '">' . "\n";
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
        echo '</div>' . "\n";
    }
}
echo '</div>' . "\n";
echo '<!-- /xwpt: 91001.1a/header/php/nav         -->' . "\n";
/*
    eof: header.php
*/
?>
