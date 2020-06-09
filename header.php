<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying page header
    *
    * ###:  header.php
    * bld:  26200615
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

echo '<!doctype html>' . "\n";
?>
<html <?php
language_attributes(); ?> >
<?php
echo '<head>' . "\n";
echo '<meta charset="' . get_bloginfo('charset') . '">' . "\n";
echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
echo '<link rel="profile" href="http://gmpg.org/xfn/11">' . "\n";

/*
***
    * functon: wp_head
    * dsc: load wordpress meta
    * ver: 200322
    * fnt: core wordpress functionality
    * ref:
***
*/
do_action('wp_head');

/*
***
    * functon: favicon image
    * dsc: set site favorite icon
    * ver: 200322
    * fnt: set site favorite icon from xidipity-cfg
    * ref:
***
*/
if (XWT_FAV_ICO == 'default')
{
  echo '<link rel="icon" href="' . get_stylesheet_directory_uri() . '/assets/img/FavoriteIcon-IAR1.png" sizes="32x32" />' . "\n";
  echo '<link rel="apple-touch-icon-precomposed" href="' . get_stylesheet_directory_uri() . '/assets/img/FavoriteIcon-IAR1.png" sizes="32x32" />' . "\n";
  echo '<link rel="icon" href="' . get_stylesheet_directory_uri() . '/assets/img/FavoriteIcon-IAR1.png" sizes="192x192" />' . "\n";
  echo '<meta name="msapplication-TileImage" content="' . get_stylesheet_directory_uri() . '/assets/img/FavoriteIcon-IAR1.png" />' . "\n";
}
else
{
  echo '<link rel="icon" href="' . XWT_FAV_ICO . '" sizes="32x32" />' . "\n";
  echo '<link rel="apple-touch-icon-precomposed" href="' . XWT_FAV_ICO . '" sizes="32x32" />' . "\n";
  echo '<link rel="icon" href="' . XWT_FAV_ICO . '" sizes="192x192" />' . "\n";
  echo '<meta name="msapplication-TileImage" content="' . XWT_FAV_ICO . '" />' . "\n";
}

/*
***
    * functon: hdr image
    * dsc: header background image
    * ver: 200322
    * fnt: set background image url
    * ref:
***
*/
if (XWT_HDR_IMG !== 'none')
{
    echo '<!--  img:HEADER/BACKGROUND -->' . "\n";
    echo '<style type="text/css">' . "\n";
    echo '.hdr\:bg-img {' . "\n";
    echo 'background-image: url("' . XWT_HDR_IMG . '");' . "\n";
    echo '}' . "\n";
    echo '</style>' . "\n";
    echo '<!-- /img:HEADER/BACKGROUND -->' . "\n";
}

/*
***
    * functon: emoji
    * dsc: emoji style
    * ver: 200322
    * fnt: create emoji styles
    * ref:
***
*/
echo '<!--  emoji:HEADER/STYLE -->' . "\n";
if (XWT_EMOJI_DSP == 'yes')
{
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
}
else
{
    echo '<style type="text/css">' . "\n";
    echo 'img.wp-smiley,' . "\n";
    echo 'img.emoji {' . "\n";
    echo 'display: none !important;' . "\n";
    echo '}' . "\n";
    echo '</style>' . "\n";
}
echo '<!-- /emoji:HEADER/STYLE -->' . "\n";
echo '</head>' . "\n";
echo '<body class="' . implode(' ', get_body_class()) . '">' . "\n";
/*
***/
echo '<!--  file:header.php -->' . "\n";
/***
*/
/*
***
    * open htm/flex/container here / close in footer
***
*/
echo '<!--  fc:HTML -->' . "\n";
echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 pad:hrz+0.5">' . "\n";
/*
***
    * element: header
    * dsc: page header
    * bld: 200322
    * fnt: display header as configured
    * ref:
***
*/
echo '<!--  fi:1/HTML -->' . "\n";
echo '<div class="fxd:1 fxe:2 fb:100%">' . "\n";
echo '<!--  fc:HEADER -->' . "\n";
if (XWT_HDR_ALIGN == 'left') {
    echo '<header class="fx:r fxa:1 fxc:3 hdr:bg-img wd:100%" style="min-height:' . XWT_HDR_HGT . ';">' . "\n";
} elseif (XWT_HDR_ALIGN == 'right') {
    echo '<header class="fx:r fxa:2 fxc:3 hdr:bg-img wd:100%" style="min-height:' . XWT_HDR_HGT . ';">' . "\n";
} else {
    echo '<header class="fx:r fxa:3 fxc:3 hdr:bg-img wd:100%" style="min-height:' . XWT_HDR_HGT . ';">' . "\n";
}
echo '<a class="skip-link screen-reader-text" href="#content">' . __('Skip to content') . '</a>' . "\n";
echo '<!--  ct:HEADER -->' . "\n";
if (XWT_HDR_LOGO == 'none')
{
    if (is_front_page() || is_home())
    {
        if (XWT_HDR_ALIGN == 'left') {
            echo '<div class="aln:text-left dsp:block">' . "\n";
            echo '<p class="hdr:title">' . get_bloginfo('name') . '</p>' . "\n";
            echo '<p class="hdr:desc">' . get_bloginfo( 'description' ) . '</p>' . "\n";
            echo '</div>' . "\n";
        } elseif (XWT_HDR_ALIGN == 'right') {
            echo '<div class="aln:text-right dsp:block">' . "\n";
            echo '<p class="hdr:title">' . get_bloginfo('name') . '</p>' . "\n";
            echo '<p class="hdr:desc">' . get_bloginfo( 'description' ) . '</p>' . "\n";
            echo '</div>' . "\n";
        } else {
            echo '<div class="aln:text-center dsp:block">' . "\n";
            echo '<p class="hdr:title">' . get_bloginfo('name') . '</p>' . "\n";
            echo '<p class="hdr:desc">' . get_bloginfo( 'description' ) . '</p>' . "\n";
            echo '</div>' . "\n";
        }
    }
    else
    {
        if (XWT_HDR_ALIGN == 'left') {
            echo '<div class="aln:text-left dsp:block">' . "\n";
            echo '<p><a class="hdr:title" href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo( 'name' ) . '</a></p>' . "\n";
            echo '<p class="hdr:desc">' . get_bloginfo( 'description' ) . '</p>' . "\n";
            echo '</div>' . "\n";
        } elseif (XWT_HDR_ALIGN == 'right') {
            echo '<div class="aln:text-right dsp:block">' . "\n";
            echo '<p><a class="hdr:title" href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo( 'name' ) . '</a></p>' . "\n";
            echo '<p class="hdr:desc">' . get_bloginfo( 'description' ) . '</p>' . "\n";
            echo '</div>' . "\n";
        } else {
            echo '<div class="aln:text-center dsp:block">' . "\n";
            echo '<p><a class="hdr:title" href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo( 'name' ) . '</a></p>' . "\n";
            echo '<p class="hdr:desc">' . get_bloginfo( 'description' ) . '</p>' . "\n";
            echo '</div>' . "\n";
        }
    }
}
else
{
    echo '<div class="dsp:block">' . "\n";
    if (is_front_page() || is_home())
    {
        echo '<img src="' . XWT_HDR_LOGO . '" alt="' . get_bloginfo('name') . ' Theme">' . "\n";
    }
    else
    {
        echo '<a href="' . esc_url(home_url('/')) . '" rel="home"><img src="' . XWT_HDR_LOGO . '" alt="' . get_bloginfo('name') . '"></a>' . "\n";
    }
    echo '</div>' . "\n";
}
echo '<!-- /ct:HEADER -->' . "\n";
echo '</header>' . "\n";
echo '<!-- /fc:HEADER -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fi:1/HTML -->' . "\n";

/*
***
    * element: menu
    * dsc: page menu
    * ver: 200322
    * fnt: display menu as configured
    * ref: primary menu
***
*/
$wp_page = get_page_by_path('xidipity-toc');
$wp_menus = get_nav_menu_locations();
$wp_menu = (abs($wp_menus['primary']) !== 0);
echo '<!--  fi:2/HTML -->' . "\n";
if (disp_menu() == 'no')
{
    echo '<div class="dsp:none fxd:1 fxe:2 fb:100%">' . "\n";
}
else
{
    echo '<div class="fxd:1 fxe:2 fb:100% prt[dsp:none]">' . "\n";
}
echo '<!--  fc:NAV -->' . "\n";
if (XWT_MNU_ALIGN == 'left') {
    echo '<nav class="fx:r fxa:1 fxc:3 ht:auto sm)mar:vrt+0.25 wd:100%">' . "\n";
} elseif (XWT_MNU_ALIGN == 'right') {
    echo '<nav class="fx:r fxa:2 fxc:3 ht:auto sm)mar:vrt+0.25 wd:100%">' . "\n";
} else {
    echo '<nav class="fx:r fxa:3 fxc:3 ht:auto sm)mar:vrt+0.25 wd:100%">' . "\n";
}
echo '<!--  ct:NAV -->' . "\n";
echo '<div role="navigation" id="nav" class="dsp:block" style="width: ' . XWT_MENU_WIDTH . '">' . "\n";
if ($wp_menu || $wp_page)
{
    if ($wp_page)
    {
        /*: xidipity toc page :*/
        if ($wp_page->ID == get_queried_object_id())
        {
            echo '<a class="toc:btn led:wide" href="' . home_url('/') . '"><i class="fas fa-bars"></i></a>' . "\n";
        }
        else
        {
            echo '<a class="toc:btn led:wide" href="' . get_permalink($wp_page->ID) . '"><i class="fas fa-bars"></i></a>' . "\n";
        }
    }
    else
    {
        echo '<input class="trigger" type="checkbox" id="mainNavButton" name="hm">' . "\n";
        echo '<label for="mainNavButton" class="led:wide toc:hamburger" onclick><i class="fas fa-bars"></i></label>' . "\n";
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_id' => 'primary-menu',
            'container' => ''
        ));
    }
}
echo '</div>' . "\n";
echo '<!-- /ct:NAV -->' . "\n";
echo '</nav>' . "\n";
echo '<!-- /fc:NAV -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fi:2/HTML -->' . "\n";

/*
 * EOF: header.php / 26200615
 */
?>
