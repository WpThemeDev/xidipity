<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying searchs results
    *
    * ###:  inc/extras.php
    * bld:  28200710
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

/**
 * Theme Mod Defaults
 *
 * @param string $theme_mod - Theme modification name.
 * @return mixed
 */

function xidipity_default($theme_mod = 'xidipity_sidebar_position')
{
    return '';
}

/**
 * Theme Mod Wrapper
 *
 * @param string $theme_mod - Name of the theme mod to retrieve.
 * @return mixed
 */

function xidipity_mod($theme_mod = '')
{
    return get_theme_mod($theme_mod, xidipity_default($theme_mod));
}

/* deprecate */
if (!function_exists('xidipity_fonts_url')) {
    /**
     * Register Google fonts for xidipity.
     *
     * @return string Google fonts URL for the theme.
     */
    function xidipity_fonts_url()
    {

        // Fonts and Other Variables

        $fonts_url = '';
        $fonts = array();
        $subsets = 'latin,latin-ext';
        /* Translators: If there are characters in your language that are not
        * supported by Roboto, translate this to 'off'. Do not translate
        * into your own language.
        */
        if ('off' !== esc_html_x('on', 'Roboto: on or off', 'xidipity')) {
            $fonts[] = 'Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i';
        }

        /* Translators: If there are characters in your language that are not
        * supported by Roboto Condensed, translate this to 'off'. Do not translate
        * into your own language.
        */
        if ('off' !== esc_html_x('on', 'Roboto Condensed: on or off', 'xidipity')) {
            $fonts[] = 'Roboto+Condensed:300,300i,400,400i,700,700i';
        }

        /* Translators: If there are characters in your language that are not
        * supported by Roboto Mono, translate this to 'off'. Do not translate
        * into your own language.
        */
        if ('off' !== esc_html_x('on', 'Roboto Mono: on or off', 'xidipity')) {
            $fonts[] = 'Roboto+Mono:100,100i,300,300i,400,400i,500,500i,700,700i';
        }

        /* Translators: If there are characters in your language that are not
        * supported by Lora, translate this to 'off'. Do not translate
        * into your own language.
        */
        if ('off' !== esc_html_x('on', 'Lora: on or off', 'xidipity')) {
            $fonts[] = 'Lora:400,400i,700,700i';
        }

        /* Translators: If there are characters in your language that are not
        * supported by Architects Daughter, translate this to 'off'. Do not translate
        * into your own language.
        */
        if ('off' !== esc_html_x('on', 'Architects Daughter: on or off', 'xidipity')) {
            $fonts[] = 'Architects+Daughter';
        }

        /* Translators: To add an additional character subset specific to your language,
        * translate this to 'greek', 'cyrillic', 'devanagari' or 'vietnamese'.
        * Do not translate into your own language.
        */
        $subset = esc_html_x('no-subset', 'Add new subset (cyrillic, greek, devanagari, vietnamese)', 'xidipity');
        if ('cyrillic' == $subset) {
            $subsets.= ',cyrillic,cyrillic-ext';
        }
        elseif ('greek' == $subset) {
            $subsets.= ',greek,greek-ext';
        }
        elseif ('devanagari' == $subset) {
            $subsets.= ',devanagari';
        }
        elseif ('vietnamese' == $subset) {
            $subsets.= ',vietnamese';
        }

        if ($fonts) {
            $fonts_url = add_query_arg(array(
                'family' => urlencode(implode('|', $fonts)) ,
                'subset' => urlencode($subsets) ,
            ) , 'fonts.googleapis.com/css');
        }

        /**
         * Filters the Google Fonts URL.
         *
         * @param string $fonts_url Google Fonts URL.
         */
        return apply_filters('xidipity_fonts_url', $fonts_url);
    }

}
/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 *
 * @param array $args Configuration arguments.
 * @return array
 */

function xidipity_page_menu_args($args)
{
    $args['show_home'] = true;
    $args['menu_class'] = 'menu';
    return $args;
}

add_filter('wp_page_menu_args', 'xidipity_page_menu_args');
/**
 * Filter 'excerpt_length'
 *
 * @param int $length
 * @return int
 */

function xidipity_excerpt_length($length)
{
    if (is_admin()) {
        return $length;
    }

    // Excerpt Length

    $length = 30;
    /**
     * Filters the Excerpt length.
     *
     * @param int $length Excerpt Length.
     */
    return apply_filters('xidipity_excerpt_length', $length);
}

add_filter('excerpt_length', 'xidipity_excerpt_length');
/**
 * Filter 'excerpt_more'
 *
 * @param str $excerpt_more
 * @return str
 */

function xidipity_excerpt_more($excerpt_more)
{
    if (is_admin()) {
        return $excerpt_more;
    }

    // Excerpt More Suffix

    $excerpt_more = '&nbsp;&hellip;';
    /**
     * Filters the Excerpt more string.
     *
     * @param string $excerpt_more Excerpt More.
     */
    return apply_filters('xidipity_excerpt_more', $excerpt_more);
}

add_filter('excerpt_more', 'xidipity_excerpt_more');
/**
 * Filter 'the_content_more_link'
 * Prevent Page Scroll When Clicking the More Link.
 *
 * @param string $link
 * @return filtered link
 */

function xidipity_the_content_more_link_scroll($link)
{
    $link = preg_replace('|#more-[0-9]+|', '', $link);
    return $link;
}

add_filter('the_content_more_link', 'xidipity_the_content_more_link_scroll');
/**
 * Filter 'the_site_logo'
 *
 * @return string
 */

function xidipity_get_custom_logo($html)
{
    return '<div class="site-logo-wrapper">' . $html . '</div>';
}

add_filter('get_custom_logo', 'xidipity_get_custom_logo');
/**
 * Filter `body_class`
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */

function xidipity_body_classes($classes)
{

    // Adds a class of group-blog to blogs with more than 1 published author.

    if (is_multi_author()) {
        $classes[] = 'group-blog';
    }

    // Adds a class of hfeed to non-singular pages.

    if (!is_singular()) {
        $classes[] = 'hfeed';
    }

    // Site Title & Tagline Class

    if (display_header_text()) {
        $classes[] = 'has-site-branding';
    }

    // Custom Header

    if (get_header_image()) {
        $classes[] = 'has-custom-header';
    }

    // Custom Background Image

    if (get_background_image()) {
        $classes[] = 'has-custom-background-image';
    }

    return $classes;
}

add_filter('body_class', 'xidipity_body_classes');
/**
 * Adjust content_width value according to template.
 *
 * @return void
 */

function xidipity_template_redirect_content_width()
{

    // Singular Post

    if (is_singular()) {
        $GLOBALS['content_width'] = apply_filters('xidipity_content_width_singular', 691);
    }
}

add_action('template_redirect', 'xidipity_template_redirect_content_width');
/**
 * Enqueues front-end CSS to hide elements.
 *
 * @see wp_add_inline_style()
 */

function xidipity_hide_elements()
{

    // Elements

    $elements = array();

    // Designer Credit

    if (false === xidipity_mod('xidipity_credit')) {
        $elements[] = '.xidipity-designer';
    }

    // Bail if their are no elements to process

    if (0 === count($elements)) {
        return;
    }

    // Build Elements

    $elements = implode(',', $elements);

    // Build CSS

    $css = sprintf('%1$s { clip: rect(1px, 1px, 1px, 1px); position: absolute; }', $elements);

    // Add Inline Style

    wp_add_inline_style('xidipity-style', $css);
}

add_action('wp_enqueue_scripts', 'xidipity_hide_elements', 15);
/**
 * Filter in a link to a content ID attribute for the next/previous image links on image attachment pages
 */

function xidipity_attachment_link($url, $id)
{
    if (!is_attachment() && !wp_attachment_is_image($id)) {
        return $url;
    }

    $image = get_post($id);
    if (!empty($image->post_parent) && $image->post_parent != $id) {
        $url.= '#main';
    }

    return $url;
}

add_filter('attachment_link', 'xidipity_attachment_link', 10, 2);

if (!function_exists('xidipity_the_attached_image')) {
    /**
     * Print the attached image with a link to the next attached image.
     *
     * @return void
     */
    function xidipity_the_attached_image()
    {
        $post = get_post();
        /**
         * Filter the default xidipity attachment size.
         *
         * @param array $dimensions {
         *     An array of height and width dimensions.
         *
         *     @type int $height Height of the image in pixels. Default 1140.
         *     @type int $width  Width of the image in pixels. Default 1140.
         * }

         */
        $attachment_size = apply_filters('xidipity_attachment_size', 'full');
        $next_attachment_url = wp_get_attachment_url();
        if ($post->post_parent) { // Only look for attachments if this attachment has a parent object.
            /*
            * Grab the IDs of all the image attachments in a gallery so we can get the URL
            * of the next adjacent image in a gallery, or the first image (if we're
            * looking at the last image in a gallery), or, in a gallery of one, just the
            * link to that image file.
            */
            $attachment_ids = get_posts(array(
                'post_parent' => $post->post_parent,
                'fields' => 'ids',
                'numberposts' => 100,
                'post_status' => 'inherit',
                'post_type' => 'attachment',
                'post_mime_type' => 'image',
                'order' => 'ASC',
                'orderby' => 'menu_order ID',
            ));

            // If there is more than 1 attachment in a gallery...

            if (count($attachment_ids) > 1) {
                foreach($attachment_ids as $key => $attachment_id) {
                    if ($attachment_id == $post->ID) {
                        break;
                    }
                }

                // For next attachment

                $key++;
                if (isset($attachment_ids[$key])) {

                    // get the URL of the next image attachment

                    $next_attachment_url = get_attachment_link($attachment_ids[$key]);
                }
                else {

                    // or get the URL of the first image attachment

                    $next_attachment_url = get_attachment_link($attachment_ids[0]);
                }
            }
        } // end post->post_parent check
        printf('<a href="%1$s" title="%2$s" rel="attachment">%3$s</a>', esc_url($next_attachment_url) , esc_attr(get_the_title()) , wp_get_attachment_image($post->ID, $attachment_size));
    }

}

/*
 *
 *  PRG     Build     Description
 *  ------  --------  ---------------------------------------------------------
 *  bexc    200513    blog excerpt
 *  xlst    200429    excerpt list
 *  blst    200322    unordered list of linked blog titles
 *  clst    200322    unordered list of linked category titles
 *  imgg    200322    image gallary
 *  plst    200322    unordered list of linked page titles
 *
 *  Utility
 *  ---------------  ---------------------------------------------------------
 *  get_db           get db value
 *  get_pg_title     get page title
 *  lst_theme        get theme info
 *  wp-ver           get wordpess version
 *
 */

/*
 *  Xidipity WordPress Theme
 *
 *  name:   bexc
 *  build:  200513
 *  descrp: display blog excerpt
 *  attributes ($args - array):
 *      readmore - string (n/y)
 *
 *  parameters ($prm - string):
 *      post title - string
 *
 *  [bexc readmore='']post[/bexc]
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 1.0
 *
*/
add_shortcode('bexc', 'bexc_shortcode');
function bexc_shortcode($args = array(), $prm = '')
{
    /*
     ***
     * variables defaults
     ***
    */
    $html_retval = '';
    $readmore = 'n';

    /*
     ***
     * parameters
     ***
    */
    $page_title = $prm;

    /*
     ***
     * initialize local arguments
     ***
    */
    if (isset($args['readmore']))
    {
        $tmp_str = no_dft($args['readmore']);
        if (has_match('y,n', strtolower($tmp_str)))
        {
            $readmore = $tmp_str;
        }
    }

    if (!empty($page_title))
    {
        $page = get_page_by_title($page_title, OBJECT, array('post_type' => 'post'));
        if ( !empty($page) )
        {
            $bexc = get_the_excerpt($page->ID);
            if (!empty($bexc))
            {
                $html_retval = $bexc;
            }
            else
            {
                $html_retval = dsp_err('[bexc] Blog excerpt not found');
            }
            if ($readmore == 'y')
            {
                $page_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink($page->ID)));
                $html_retval .= dsp_rm($page_link);
            }
        }
        else
        {
            $html_retval = dsp_err('[bexc] Blog post not found');
        }
    }
    else
    {
        $html_retval = dsp_err('[bexc] Missing blog title parameter');
    }
    return $html_retval;
}

/*
 *  Xidipity WordPress Theme
 *
 *  name:   xlst
 *  build:  200429
 *  descrp: display list of blog excerpts by category
 *  attributes ($args - array):
 *      align_img - string (l/r/x) x=no image
 *      cnt - numeric
 *      orderby - string
 *      order - string (a/d)
 *
 *  parameters ($prm - string):
 *      category - string
 *
 *  [xlst align_img='' cnt=0 orderby='' order='']categories[/xlst]
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.9
 *
*/
add_shortcode('xlst', 'xlst_shortcode');
function xlst_shortcode($args = array() , $prms = '')
{
    /*
     ***
     * variables defaults
     ***
    */
    $align_image = 'l';
    $cnt = get_option('posts_per_page');
    $html_retval = '';
    $order = '';
    $orderby = '';

    /*
     ***
     * parameters
     ***
    */
    $prm_categories = trim($prms);

    /*
     ***
     * initialize local arguments
     ***
    */
    if (isset($args['align_img']))
    {
        $tmp_str = no_dft($args['align_img']);
        if (has_match('x,l,r', strtolower($tmp_str)))
        {
            $align_image = $tmp_str;
        }
    }
    if (isset($args['cnt']))
    {
        $tmp_num = abs($args['cnt']);
        if ($tmp_num == 0)
        {
            $cnt = - 1;
        }
        elseif ($tmp_num > 0)
        {
            $cnt = $tmp_num;
        }
    }
    if (isset($args['orderby']))
    {
        $tmp_str = no_dft($args['orderby']);
        if (!empty($tmp_str))
        {
            $orderby = valid_orderby($tmp_str);
        }
    }
    if (isset($args['order']))
    {
        $tmp_str = no_dft($args['order']);
        if (strtoupper($tmp_str) == 'A')
        {
            $order = 'ASC';
        }
    }

    /*
     ***
     * get category id's
     ***
    */
    $category_ids = category_to_id($prm_categories);

    /*
     ***
     * set up db query
     ***
    */
    $qry_args = array(
        'cat' => $category_ids,
        'ignore_sticky_posts' => 1,
        'order' => $order,
        'orderby' => $orderby,
        'perm' => 'readable',
        'post_type' => 'post',
        'posts_per_page' => $cnt
    );
    $wp_data = new WP_Query($qry_args);

    if ($wp_data->have_posts())
    {
        $cnt = 0;
        while ($wp_data->have_posts())
        {
            $wp_data->the_post();
            $cnt++;
            /*
             ***
             * excerpt data elements
             ***
            */
            $excerpt_category = '';
            $excerpt_byline = '';
            if ($align_image == 'x')
            {
                $wp_img = '';
            }
            else
            {
                $wp_img = get_the_post_thumbnail(null, 'FULL', array(
                    'class' => 'cnr:arch-small ht:auto wd:100%'
                ));
            }
            //$excerpt_category = '<div class="fnt:size-smaller">' . dsp_cat(xidipity_first_category()) . '</div>';
            $excerpt_category = '<p>' . dsp_cat(xidipity_first_category()) . '</p>';
            $excerpt_byline = '<div class="fnt:size-smaller">' . xidipity_date('pub') . '<span class="txt:bas-1 pad:hrz+0.5">|</span>' . xidipity_posted_by() . '</div>';

            /*
             ***
             * get post link for read more
             ***
            */
            $post_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));

            $html_retval .= '<!--  bk:' . $cnt . '/PARAGRAPH -->' . "\n";
            $html_retval .= '<div class="bkg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";

            /*
             ***
             * build article
             ***
            */
            $html_retval .= '<!--  fc:EXCERPT -->' . "\n";
            if ($align_image == 'r' && !empty($wp_img))
            {
                $html_retval .= '<div class="fx:c md)fx:rw-rev fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
            }
            else
            {
                $html_retval .= '<div class="fx:c md)fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
            }

            if (!empty($wp_img))
            {
                $html_retval .= '<!--  fi:1/EXCERPT  -->' . "\n";
                $html_retval .= '<div class="fxd:2 fxe:6 wd:100% md)wd:1/3 xl)wd:1/4 ht:min10">' . "\n";
                $html_retval .= '<!--  ex:IMAGE  -->' . "\n";
                $html_retval .= '<div class="dsp:block pad:+1 ht:100%">' . "\n";
                $html_retval .= $wp_img;
                $html_retval .= '</div>' . "\n";
                $html_retval .= '<!-- /ex:IMAGE  -->' . "\n";
                $html_retval .= '</div>' . "\n";
                $html_retval .= '<!-- /fi:1/EXCERPT  -->' . "\n";
                $html_retval .= '<!--  fi:2/EXCERPT  -->' . "\n";
                $html_retval .= '<div class="fxd:1 fxe:6 wd:100% md)wd:2/3 xl)wd:3/4 ht:min10">' . "\n";
            }
            else
            {
                $html_retval .= '<!--  fi:1/EXCERPT  -->' . "\n";
                $html_retval .= '<div class="fxd:1 fxe:6 wd:100% ht:min10">' . "\n";
            }
            $html_retval .= '<!--  ex:TEXT  -->' . "\n";
            $html_retval .= '<div class="dsp:block pad:+1 ht:100%">' . "\n";
            if (!empty($excerpt_category))
            {
                $html_retval .= $excerpt_category;
            }
            if (!empty($excerpt_byline))
            {
                $html_retval .= $excerpt_byline;
            }
            $html_retval .= '<div class="pg:title led:x-narrow">' . get_the_title() . '</div>';
            $html_retval .= get_the_excerpt();
            $html_retval .= dsp_rm($post_link);
            $html_retval .= '</div>' . "\n";
            $html_retval .= '<!-- /ex:TEXT  -->' . "\n";
            $html_retval .= '</div>' . "\n";
            if (empty($wp_img))
            {
                $html_retval .= '<!-- /fi:1/EXCERPT  -->' . "\n";
            }
            else
            {
                $html_retval .= '<!-- /fi:2/EXCERPT  -->' . "\n";
            }
            $html_retval .= '</div>' . "\n";
            $html_retval .= '<!-- /fc:EXCERPT -->' . "\n";
            $html_retval .= '</div>' . "\n";
            $html_retval .= '<!-- /bk:' . $cnt . '/PARAGRAPH -->' . "\n";
        }
    }
    /*
    ***
        * function: wp_reset_postdata
        * dsc: database code
        * ver: 200322
        * fnt: reset database query
        * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
    ***
    */
    wp_reset_postdata();

    /*
    ***
        * return html
    ***
    */
    return $html_retval;
}

/**
 *  name:   blst
 *  build:  200322
 *  descrp: display unordered list of linked blog titles
 *  attributes ($args - array):
 *      class - string
 *      bullet - string (font awesome)
 *      orderby - string
 *      order - string (A/D)
 *      cnt - numeric
 *
 *  parameters ($prm - string):
 *      category - string
 *
 *  [blst class='' bullet='' orderby='' order='' cnt=0]category[/blst]
 *
 */
add_shortcode('blst', 'blst_shortcode');
function blst_shortcode($args = array(), $prms = '')
{
    /*
    ***
        * variables defaults
    ***
    */
    $bullet = '';
    $class = '';
    $cnt = -1;
    $html_retval = '';
    $order = 'ASC';
    $orderby = 'title';

    /*
    ***
        * parameters
    ***
    */
    $prm_categories = trim($prms);

    /*
    ***
        * save args to local variables
    ***
    */
    if (isset($args['bullet']))
    {
        $bullet = no_dft($args['bullet']);
    }
    if (isset($args['class']))
    {
        $tmp_str = no_dft($args['class']);
        if (!empty($tmp_str))
        {
            $class = $tmp_str;
        }
    }
    if (isset($args['cnt']))
    {
        $tmp_num = abs($args['cnt']);
        if ($tmp_num > 0)
        {
            $cnt = $tmp;
        }
    }
    if (isset($args['orderby']))
    {
        $tmp_str = no_dft($args['orderby']);
        If (!empty($tmp_str))
        {
            $orderby = valid_orderby($tmp_str);
        }
    }
    if (isset($args['order']))
    {
        $tmp_str = no_dft($args['order']);
        if (strtoupper($tmp_str) == 'D')
        {
            $order = 'DESC';
        }
    }

    /*
    ***
        * font awesome bullet
    ***
    */
    if (!empty($bullet))
    {
        $tmp_str = $class;
        $class = 'ul-fa ' . $tmp_str;
        $pre_itm  = '<span class="li-fa">' . $bullet . '</span>';
        $pst_itm  = '';
    }

    /*
    ***
        * get category id's
    ***
    */
    $category_ids = category_to_id($prm_categories);

    /*
    ***
        * set up db query
    ***
    */
    $qry_args = array(
        'ignore_sticky_posts' => 1,
        'order' => $order,
        'orderby' => $orderby,
        'perm' => 'readable',
        'posts_per_page' => $cnt,
        'cat' => $category_ids
    );
    $wp_data = new WP_Query($qry_args);

    /*
    ***
        * build return html
    ***
    */
    $html_retval = '<ul>';
    if (!empty($class))
    {
        $html_retval = '<ul class="' . $class . '">';
    }
    if ($wp_data->have_posts())
    {
        while ($wp_data->have_posts())
        {
            $wp_data->the_post();
            $html_retval .= '<li>';
            $html_retval .= '<a href="' . get_permalink() . '">'  . $pre_itm . get_the_title() . $pst_itm . '</a>';
            $html_retval .= '</li>';
        }
    }
    else
    {
        $html_retval .= '<li>No posts found ...</li>';
    }
    $html_retval .= '</ul>';

    /*
    ***
        * function: wp_reset_postdata
        * dsc: database code
        * ver: 200322
        * fnt: reset database query
        * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
    ***
    */
    wp_reset_postdata();

    /*
    ***
        * return html
    ***
    */
    return $html_retval;
}

/**
 *  name:   clst
 *  build:  200322
 *  descrp: display unordered list of linked category titles
 *  attributes ($args - array):
 *      class - string
 *      bullet - string (font awesome)
 *      depth - numeric
 *      active - string (y/n)
 *
 *  parameters ($prm - string):
 *      category - string
 *
 *  developer.wordpress.org/reference/functions/wp_list_categories/
 *
 *  [clst class='' bullet='' depth=0 active='']category[/clst]
 *
 */
add_shortcode('clst', 'clst_shortcode');
function clst_shortcode($args = array(), $prm = '')
{
    /*
    ***
        * variables defaults
    ***
    */
    $active = 0;
    $bullet = '';
    $class = '';
    $depth = 0;
    $html_retval = '';
    $pre_itm = '';
    $pst_itm = '';

    /*
    ***
        * parameters
    ***
    */
    $prm_categories = trim($prm);

    /*
    ***
        * save args to local variables
    ***
    */
    if (isset($args['active']))
    {
        $tmp_str = strtolower(no_dft($args['active']));
        if ($tmp_str == 'y')
        {
            $active = 1;
        }
    }
    if (isset($args['bullet']))
    {
        $bullet = no_dft($args['bullet']);
    }
    if (isset($args['class']))
    {
        $tmp_str = no_dft($args['class']);
        if (!empty($tmp_str))
        {
            $class = $tmp_str;
        }
    }
    if (isset($args['depth']))
    {
        $depth = abs($args['depth']);
    }

    /*
    ***
        * font awesome bullet
    ***
    */
    if (!empty($bullet))
    {
        $tmp_str = $class;
        $class = 'ul-fa ' . $tmp_str;
        $pre_itm  = '<span class="li-fa">' . $bullet . '</span>';
        $pst_itm  = '';
    }

    /*
    ***
        * get category id's
    ***
    */
    $category_ids = category_to_id($prm_categories);

    /*
    ***
        * separate include/exclude category id's
    ***
    */
    $include_ids = '';
    $exclude_ids = '';
    $cat_ids = explode(',', $category_ids);
    foreach ($cat_ids as $cat_id)
    {
        if (substr($cat_id,0,1) == '-')
        {
            $exclude_ids .= substr($cat_id,1) . ',';
        }
        else
        {
            $include_ids .= $cat_id . ',';
        }
    }
    if (!empty($include_ids))
    {
        $include_ids = substr($include_ids, 0, -1);
    }
    if (!empty($exclude_ids))
    {
        $exclude_ids = substr($exclude_ids, 0, -1);
    }

    /*
    ***
        * set up db query
    ***
    */
    $wp_data = array(
        'child_of' => $include_ids,
        'class' => $class,
        'current_category' => 0,
        'depth' => $depth,
        'echo' => false,
        'exclude' => $exclude_ids,
        'exclude_tree' => '',
        'feed' => '',
        'feed_image' => '',
        'feed_type' => '',
        'hide_empty' => $active,
        'hide_title_if_empty' => false,
        'hierarchical' => true,
        'link_after' => $pst_itm,
        'link_before' => $pre_itm,
        'order' => 'ASC',
        'orderby' => 'name',
        'separator' => '<br />',
        'show_count' => false,
        'show_option_all' => '',
        'show_option_none' => __('No categories', 'xidipity') ,
        'style' => 'list',
        'taxonomy' => 'category',
        'title_li' => '',
        'use_desc_for_title' => 0,
        'walker' => new c_walker()
    );

    /*
    ***
        * build return html
    ***
    */
    $html_retval = '<ul>';
    if (!empty($class))
    {
        $html_retval = '<ul class="' . $class . '">';
    }
    $html_retval .= wp_list_categories($wp_data);
    $html_retval .= '</ul>';

    /*
    ***
        * function: wp_reset_postdata
        * dsc: database code
        * ver: 200322
        * fnt: reset database query
        * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
    ***
    */
    wp_reset_postdata();

    /*
    ***
        * return html
    ***
    */
    return $html_retval;
}

/**
 *  name: imgg
 *  build: 28200710
 *  description: Gallery images by category
 *  attributes ($args - array):
 *      class	- string
 *      caption	- string (l/c/r)
 *      content	- string (y/n)
 *      orderby	- string
 *      order	- string (A/D)
 *
 *  parameters ($prm - string):
 *      category - string
 *
 * [imgg class="" caption="" content="" orderby="" order=""]category[/imgg]
 *
 */
add_shortcode('imgg', 'imgg_shortcode');
function imgg_shortcode($args = array() , $prms = '')
{
    /*
    ***
        * variables defaults
    ***
    */
    $class = '';
    $caption = 'c';
    $content = 'n';
    $html_retval = '';
    $order = '';
    $orderby = '';
    $seo = 'Xidipity WordPress Theme Gallery Image';

    /*
    ***
        * parameters
    ***
    */
    $prm_categories = trim($prms);

    /*
    ***
        * save args to local variables
    ***
    */
    if (isset($args['caption']))
    {
        $tmp_str = strtolower(no_dft($args['caption']));
        if (has_match('l,c,r,x', $tmp_str))
        {
            $caption = $tmp_str;
        }
    }
    if (isset($args['class']))
    {
        $tmp_str = no_dft($args['class']);
        if (!empty($tmp_str))
        {
            $class = no_dft($args['class']);
        }
    }
    if (isset($args['content']))
    {
        $tmp_str = strtolower(no_dft($args['content']));
        if (has_match('y,n', $tmp_str))
        {
            $content = $tmp_str;
        }
    }
    if (isset($args['orderby']))
    {
        $tmp_str = no_dft($args['orderby']);
        If (!empty($tmp_str))
        {
            $orderby = valid_orderby($tmp_str);
        }
    }
    if (isset($args['order']))
    {
        $tmp_str = no_dft($args['order']);
        if (strtoupper($tmp_str) == 'D')
        {
            $order = 'DESC';
        }
    }

    /*
    ***
        * get category id's
    ***
    */
    $category_ids = category_to_id($prm_categories);

    // validate go / no go path
    if (empty($prm_categories))
    {
        $html_retval = dsp_err('[imgg] Missing category list');
    }
    elseif (empty($category_ids))
    {
        $html_retval = dsp_err('[imgg] Invalid category list: ' . $prm_categories);
    }
    else
    {
        /*
        ***
            * set up db query
        ***
        */
        $qry_args = array(
            'cat' => $category_ids,
            'order' => '',
            'orderby' => '',
            'post_mime_type' => 'image',
            'post_status' => 'inherit',
            'post_type' => 'attachment',
            'posts_per_page' => '-1'
        );
        $wp_data = new WP_Query($qry_args);

        if ($wp_data->have_posts())
        {
            $html_retval .= '<!--  28200701:GALLERY -->';
            $html_retval .= '<div class="fx:rw fxa:1 fxb:1 fxc:1 wd:100%">';

            while ($wp_data->have_posts())
            {
                $wp_data->the_post();
                $wp_post = get_post();
                $image_caption = $wp_post->post_excerpt;
                $image_content = $wp_post->post_content;

                $html_retval .= '<div class="fxd:1 fxe:1 pad:bottom+1 sm)pad:hrz+0.5 wd:100% sm)wd:1/2 md)wd:1/3 xl)wd:1/4">';
                /*
                ***
                    * display details as column
                ***
                */
				$html_retval .= '<div class="fx:c fxa:1 fxb:6 fxc:5">';
                /*
                ***
                    * display image
                ***
                */
                $html_retval .= '<div class="fxd:1 fxe:1">';
                $html_retval .= wp_get_attachment_link(get_the_ID(),'full', true, false, false, array('class'=>$class,'alt'=>$seo));
                $html_retval .= '</div>';

                /*
                ***
                    * display caption
                ***
                */
				if (empty($image_caption))
				{
					$show_caption = 'x';
				}
				else
				{
					$show_caption = $caption;
				}
                switch ($show_caption)
                {
                    case 'l':
                        $html_retval .= '<div class="aln:text-left fxd:1 fxe:1 fnt:size-smaller">';
                    break;
                    case 'r':
                        $html_retval .= '<div class="aln:text-right fxd:1 fxe:1 fnt:size-smaller">';
                    case 'x':
                        $html_retval .= '<div class="dsp:none">';
                    break;
                    default:
                        $html_retval .= '<div class="aln:text-center fxd:1 fxe:1 fnt:size-smaller">';
                }
                $html_retval .= $image_caption;
                $html_retval .= '</div>';

                /*
                ***
                    * display content
                ***
                */
                if ($content == 'y')
                {
                    $html_retval .= '<div class="aln:text-left fxd:1 fxe:1">';
                    $html_retval .= $image_content;
                    $html_retval .= '</div>';
                }
                $html_retval .= '</div>';
                $html_retval .= '</div>';
            }
            $html_retval .= '</div>';
            $html_retval .= '<!-- /28200701:GALLERY -->';
        }
        else
        {
            $html_retval = dsp_err('[imgg] No images assigned to category(s): ' . $prm_categories);
        }

        /*
        ***
            * function: wp_reset_postdata
            * descript: reset database query
            * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
        ***
        */
        wp_reset_postdata();
    }

    /*
    ***
        * return html
    ***
    */
    return $html_retval;
}

/*
 *  Xidipity WordPress Theme
 *
 *  name:   plst
 *  build:  200322
 *  descrp: display unordered list of linked page titles
 *  attributes ($args - array):
 *      class - string
 *      bullet - string (font awesome/google)
 *      depth - numeric
 *
 *  parameters ($prm - string):
 *      page title(s) - string
 *
 *  [plst class='' bullet='' depth=0]titles[/plst]
 *
 *  developer.wordpress.org/reference/functions/wp_list_pages/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.9
 *
*/
add_shortcode('plst', 'plst_shortcode');
function plst_shortcode($args = array() , $prm = string)
{
    /*
     ***
     * variables defaults
     ***
    */
    $bullet = '';
    $class = '';
    $depth = 0;
    $html_retval = '';
    $pre_itm = '';
    $pst_itm = '';

    /*
     ***
     * parameters
     ***
    */
    $prm_titles = trim($prm);

    /*
     ***
     * save args to local variables
     ***
    */
    if (isset($args['bullet']))
    {
        $bullet = no_dft($args['bullet']);
    }
    if (isset($args['class']))
    {
        $tmp_str = no_dft($args['class']);
        if (!empty($tmp_str))
        {
            $class = $tmp_str;
        }
    }
    if (isset($args['depth']))
    {
        $depth = abs($args['depth']);
    }

    /*
     ***
     * font awesome bullet
     ***
    */
    if (!empty($bullet))
    {
        $tmp_str = $class;
        $class = 'ul-fa';
        if (!empty($tmp_str))
        {
            $class .= ' ' . $tmp_str;
        }
        $pre_itm = '<span class="li-fa">' . $bullet . '</span>';
    }

	/*
     ***
     * sanitize page title argument
     ***
    */
    $include_ids = '';
    $exclude_ids = '';
	if (!empty($prm_titles))
	{
		$separators = array(
			".",
			"/",
			":",
			";",
			"|"
		);
		$tmp_str = str_replace($separators, ",", $prm_titles);
		$prm_titles = $tmp_str;

		/*
		 ***
		 * build include/exclude page id list
		 ***
		*/
		$titles = explode(',', $prm_titles);
		foreach ($titles as $title)
		{
			$page = get_page_by_title(str_replace('-', '', $title));
			if ($page)
			{
				if (substr($title, 0, 1) == '-')
				{
					$exclude_ids .= $page->ID . ',';
				}
				else
				{
					$include_ids .= $page->ID . ',';
				}
			}
		}
		if (!empty($include_ids))
		{
			$include_ids = substr($include_ids, 0, -1);
		}
		if (!empty($exclude_ids))
		{
			$exclude_ids = substr($exclude_ids, 0, -1);
		}		
	}

    /*
    ***
        * initialize query arguments
    ***
    */
    $wp_data = array(
        'child_of' => $include_ids,
        'depth' => $depth,
        'echo' => false,
        'exclude' => $exclude_ids,
        'link_after' => $pst_itm,
        'link_before' => $pre_itm,
        'sort_column' => 'title',
        'title_li' => ''
    );

    /*
     ***
     * build return html
     ***
    */
    $html_retval = '<ul>';
    if (!empty($class))
    {
        $html_retval = '<ul class="' . $class . '">';
    }
    $html_retval .= wp_list_pages($wp_data);
    $html_retval .= '</ul>';

    /*
     ***
     * function: wp_reset_postdata
     * dsc: database code
     * ver: 200322
     * fnt: reset database query
     * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
     ***
    */
    wp_reset_postdata();

    /*
     ***
     * return html
     ***
    */
    return $html_retval;
}

/**
 *  Utilities
 *  ---------------------------------------------------------------------------
 *
 */

/**
 *  name: get_db
 *  build: 90915.1b
 *  description: display db value
 *
 */
add_shortcode('get_db', 'get_db_shortcode');
function get_db_shortcode($atts, $prms='')
{
    echo strwrap(get_option($prms),'<p>','</p>');
    return;
}

/*  # get_pg_title
    # 90905.1a
    # get page title
    # developer.wordpress.org/reference/functions/get_the_title/
 */
add_shortcode('get_pg_title', 'get_pg_title_shortcode');
function get_pg_title_shortcode()
{
    return get_the_title();
}

/*  # x_fa_ver
    # 90905.1a
    # display font awesome version
    # fontawesome.com/
 */
add_shortcode('x_fa_ver', 'x_fa_ver_shortcode');
function x_fa_ver_shortcode()
{
    return XWT_FA_VER;
}

/*  # x_wp_ver
    # 90903.1a
    # display wordpress version
    # wordpress.org/
 */
add_shortcode('x_wp_ver', 'x_wp_ver_shortcode');
function x_wp_ver_shortcode()
{
    // system
    $html_retval = '';
    // execute
    $html_retval = get_bloginfo( 'version' );
    // return html
    return $html_retval;
}

/*  # xidipity
    # 90903.1a
    # display theme property
        - Name
        - ThemeURI
        - Description
        - Author
        - Version
        - Status
        - Tags
 */
add_shortcode('xidipity', 'xidipity_shortcode');
function xidipity_shortcode($atts)
{
    // check for & fix missing arguments
    if (!is_array($atts))
    {
        $atts = array(
            'property' => 'Name',
            'label' => ''
        );
    }
    else
    {
        if (empty($atts['property']))
        {
            $atts['property'] = 'Name';
        }
    }
    // sanitize inputs
    $args = strtoupper($atts['property']);
    switch ($args)
    {
        case 'NAME':
            $opt = 'Name';
        break;
        case 'THEMEURI':
            $opt = 'ThemeURI';
        break;
        case 'DESCRIPTION':
            $opt = 'Description';
        break;
        case 'AUTHOR':
            $opt = 'Author';
        break;
        case 'VERSION':
            $opt = 'Version';
        break;
        case 'STATUS':
            $opt = 'Status';
        break;
        case 'TAGS':
            $opt = 'Tags';
        break;
        default:
            $opt = 'Name';
            $atts['label'] = '<sup><i class="fas fa-map-marker" style="color:#c62828;">&#8203;</i></sup>';
    }
    $my_theme = wp_get_theme();
    if (empty($atts['label']))
    {
        return $my_theme->get($opt);
    }
    else
    {
        return $my_theme->get($opt) . ' ' . $atts['label'];
    }
}

/*
 * EOF:     inc/extras.php
 * Build:   28200710
 *
 */
?>
