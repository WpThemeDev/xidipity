<?php
/*
*        file: custom-header.php
*       build: 90327.1
* description: Implementation of the Custom Header feature
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @uses xidipity_header_style()
* @uses xidipity_admin_header_style()
* @uses xidipity_admin_header_image()
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/

function xidipity_custom_header_setup()
{
    add_theme_support('custom-header', apply_filters('xidipity_custom_header_args', array(
        'default-text-color' => '#212121',
        'width' => 1165,
        'height' => 100,
        'flex-height' => true,
        'wp-head-callback' => 'xidipity_header_style',
    )));
}

add_action('after_setup_theme', 'xidipity_custom_header_setup');

if (!function_exists('xidipity_header_style')) {
    /**
     * Styles the header image and text displayed on the blog
     *
     * @see xidipity_custom_header_setup().
     */
    function xidipity_header_style()
    {
        if (get_header_image()) {
            echo '<style type="text/css">' . "\n";
            echo '.header-banner {' . "\n";
            echo 'background-image: url("' . header_image() . '");' . "\n";
            echo 'background-repeat: no-repeat;' . "\n";
            echo 'background-position: top center;' . "\n";
            echo '-webkit-background-size: cover;' . "\n";
            echo '-moz-background-size: cover;' . "\n";
            echo '-o-background-size: cover;' . "\n";
            echo 'background-size: cover;' . "\n";
            echo '}' . "\n";
            echo '</style>' . "\n";
        }

        // Header Text Color

        $header_text_color = get_header_textcolor();

        // If no custom color for text is set, let's bail.

        if (display_header_text() && $header_text_color === get_theme_support('custom-header', 'default-text-color')) {
            return;
        }

        // If we get this far, we have custom styles. Let's do this.

        echo '<style type="text/css">' . "\n";

        // Has the text been hidden?

        if (!display_header_text()) {
            echo '.site-title,' . "\n";
            echo '.site-description {' . "\n";
            echo 'clip: rect(1px, 1px, 1px, 1px);' . "\n";
            echo 'position: absolute;' . "\n";
            echo '}' . "\n";

            // If the user has set a custom color for the text use that

        }
        else {
            echo '.site-title a,' . "\n";
            echo '.site-title a:visited {' . "\n";
            echo 'color: #' . esc_attr($header_text_color) . ';' . "\n";
            echo '}' . "\n";
            echo '.site-title a:hover,' . "\n";
            echo '.site-title a:focus,' . "\n";
            echo '.site-title a:active {' . "\n";
            echo 'opacity: 0.7;' . "\n";
            echo '}' . "\n";
            echo '.site-description {' . "\n";
            echo 'color: #' . esc_attr($header_text_color) . ';' . "\n";
            echo 'opacity: 0.7;' . "\n";
            echo '}' . "\n";
        }

        echo '</style>' . "\n";
    }
}

/*  # eof
custom-header.php
-------------------------------------*/
?>
