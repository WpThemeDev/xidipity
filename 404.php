<?php
/*
*        file: 404.php
*       build: 90323.1
* description: Template for displaying 404 image.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
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
echo '<head>' . "\n";
echo '<meta charset="' . get_bloginfo('charset') . '">' . "\n";
echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
echo '<link rel="profile" href="http://gmpg.org/xfn/11">' . "\n";
/* load wordpress meta     ------------
-- */
do_action('wp_head');
echo '</head>' . "\n";
echo '<body class="' . implode(' ', get_body_class()) . '">' . "\n";
echo '<div id="page" class="pl-4">' . "\n";
echo '<a class="skip-link screen-reader-text" href="#content">' . __('Skip to content') . '</a>' . "\n";
echo '</a>' . "\n";
echo '<header id="masthead" class="site-header">' . "\n";
echo '<div class="entry-header-wrapper bg-bas-050">' . "\n";
echo '<p class="site-title">' . "\n";
echo '<a href="' . esc_url(home_url('/')) . '" rel="home">' . "\n";
echo get_bloginfo('name') . "\n";
echo '</a>' . "\n";
echo '</p>' . "\n";
echo '<p class="site-description mb-4">' . "\n";
echo get_bloginfo('description') . "\n";
echo '</p>' . "\n";
echo '</div>' . "\n";
echo '</header>' . "\n";
echo '<h1><i class="fas fa-search-minus fg-pri-300 pr-4"></i>' . __('404 Error', 'xidipity') . '</h1>' . "\n";
echo '<h5 class="fg-bas-700">' . __('Unable to locate requested page.', 'xidipity') . '</h5>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<a href="' . esc_url(home_url('/')) . '" rel="home">' . "\n";
echo '<i class="fas fa-home fg-pri-300"></i>' . "\n";
echo '  Home Page</a>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</body>' . "\n";
/*  # eof
    404.php
-------------------------------------*/
?>
