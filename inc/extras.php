<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       inc/extras.php
 * Function:        xidipity extensions
 * Build:           200107-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version			1.0
 * @since			0.9
 * @link            https://developer.wordpress.org/themes/basics/
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
            ) , 'https://fonts.googleapis.com/css');
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
 *  bexc    91108.1a  blog excerpts
 *  blst    91108.1a  unordered list of linked blog titles
 *  clst    91108.1a  unordered list of linked category titles
 *  imgg    91108.1a  image gallary
 *  plst    91108.1a  unordered list of linked page titles
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
 *  build:  91108.1
 *  descrp: display blog excerpt(s)
 *  attributes ($atts - array):
 *      orderby - string
 *      order - string (A/D)
 *      xclude - string (y/n)
 *      align_img - string (l/r)
 *      count - numeric      
 *      paged - string (y/n)
 *
 *  parameters ($prm - string):
 *      category - string
 *
 *  [bexc orderby='' order='' xclude='' align_img='' count=0 paged='']category[/bexc]
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.9
 *
 */
add_shortcode('bexc', 'bexc_shortcode');
function bexc_shortcode($atts = array() , $prms = '')
{
    /*
        system variables
    */
    $html_retval = '';
    // current pagination number
    $wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    // posts / page
    $wp_ppp = get_option('posts_per_page');
    /*
        local variables
    */
    $v_align = 0;
    $v_align_img = 'l';
    $v_cats = '';
    $v_count = 0;
    $v_html_img = '';
    $v_html_title = '';
    $v_img_exists = false;
    $v_img_size = 'large';
    $v_meta_icon_cat = '';
    $v_meta_link_rm = '';
    $v_meta_list_byline = '';
    $v_meta_list_cat = '';
    $v_order = 'DESC';
    $v_orderby = '';
    $v_paged = 'n';
    $v_ppp = 0;
    /*
        attributes
    */
    $a_align_img = '';
    $a_count = 4;
    $a_fmt = 1;
    $a_order = '';
    $a_orderby = '';
    $a_paged = '';
    $a_xclude = '';    /*
        parameters
    */
    $p_cat_lst = trim($prms);
    /*
        initialize attributes
    */
    if (isset($atts['order']))
    {
        $a_order = tpl_prg($atts['order']);
    }
    if (isset($atts['orderby']))
    {
        $a_orderby = tpl_prg($atts['orderby']);
    }
    if (isset($atts['xclude']))
    {
        $a_xclude = $atts['xclude'];
    }
    if (isset($atts['align_img']))
    {
        $a_align_img = $atts['align_img'];
    }
    if (isset($atts['count']))
    {
        $a_count = $atts['count'];
    }
    if (isset($atts['paged']))
    {
        $a_paged = $atts['paged'];
    }
    /*
        sanitize attributes
    */
    if (strtoupper($a_order) == 'A')
    {
        $v_order = 'ASC';
    }
    If (!empty($a_orderby))
    {
        $v_orderby = val_orby($a_orderby);
    }
    if (strtolower($a_align_img) == 'r')
    {
        $v_align_img = 'r';
    }
    $v_ppp = abs($a_count);
    if ($v_ppp == 0)
    {
        $v_ppp = $wp_ppp;
    }
    /*
        sanitize parameter
    */
    if (strtolower($a_paged) == 'y')
    {
        $v_paged = 'y';
    }
    if (!empty($p_cat_lst))
    {
        if (strtolower($a_xclude) == 'y')
        {
            $v_cats = val_cat($p_cat_lst, 1);
        }
        else
        {
            $v_cats = val_cat($p_cat_lst, 0);            
        }
    }
    /*
        set up db query
    */
    if ($v_paged == 'y')
    {
        $qry_prms = array(
            'cat' => $v_cats,
            'ignore_sticky_posts' => false,
            'order' => $v_order,
            'orderby' => $v_orderby,
            'perm' => 'readable',
            'paged' => $wp_paged,
            'post_type' => 'post',
            'posts_per_page' => $v_ppp
        );
    }
    else
    {
        $qry_prms = array(
            'cat' => $v_cats,
            'ignore_sticky_posts' => false,
            'order' => $v_order,
            'orderby' => $v_orderby,
            'perm' => 'readable',
            'post_type' => 'post',
            'posts_per_page' => $v_ppp
        );
    }
    $db_query = new WP_Query($qry_prms);
    if ($db_query->have_posts())
    {
        $html_retval .= '<!-- xwpt: 90903.1a/xsc/bexc/php            -->';
        while ($db_query->have_posts())
        {
            $db_query->the_post();
            $v_count++;
            /*: post category :*/
            if (is_sticky())
            {
                $v_meta_icon_cat = xidipity_icon_star();
            }
            else
            {
                $v_meta_icon_cat = xidipity_icon_note();
            }
            $v_meta_list_cat =  $v_meta_icon_cat . ',' . xidipity_first_category();
            /*: post byline :*/
            if ($a_order == 'modified')
            {
                $v_meta_list_byline =  '<p class="fnt:size-small">' . get_the_modified_date() . ' | Author - ' . get_the_author() . '</p>';
            }
            else
            {
                $v_meta_list_byline =  '<p class="fnt:size-small">' . get_the_date() . ' | Author - ' . get_the_author() . '</p>';
            }
            /*: read more :*/
            $v_meta_link_rm = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));
            /*: image :*/
            $v_img_exists = has_post_thumbnail(get_the_ID());
            $wp_html_img_url = get_the_post_thumbnail_url($post->ID, 'full');
            if (!$wp_html_img_url)
            {
                $v_html_img = '';                             
            }
            else
            {
                $v_html_img = '<img class="img:100%" src="' . $wp_html_img_url . '" alt="Xidipity Blog Excerpt Shortcode" >';                
            }            
            /*: title :*/
            $v_html_title = '<h1 class="fx:cn-itm-ti"><a href="' . esc_url(apply_filters('xidipity_the_permalink', get_permalink())) . '">' . get_the_title() . '</a></h1>';
            if (!$wp_html_img_url)
            {
                $html_retval .= '<div class="fx:c fa:3 fb:6 fc:5 sm)fx:r">';
                $html_retval .= '<div class="fd:1 fe:1">';
                $html_retval .= '<p class="fx:cn-ct-meta mar:vrt-0.75 sm)pad:bottom-0.5 sm)pad:top-0"><span class="pad:right-0.5">' . $v_meta_icon_cat . '</span>' . xidipity_first_category() . '</p>';
                $html_retval .= '<header class="fx:cn-itm-hd">';
                $html_retval .= $v_html_title;
                $html_retval .= '</header>';
                $html_retval .= $v_meta_list_byline;
                $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                $html_retval .= dsp_rm($v_meta_link_rm);
                $html_retval .= '</div>';
                $html_retval .= '</div>';
            }
            elseif ($v_align_img == 'r')
            {
                $html_retval .= '<div class="fx:c fa:3 fb:6 fc:5 sm)fx:r-rev">';
                $html_retval .= '<div class="fd:1 fe:1 wd:100% sm)width:40%">';
                $html_retval .= $v_html_img;
                $html_retval .= '</div>';
                $html_retval .= '<div class="fd:1 fe:1 pad:right-1 wd:100% sm)max-width:60%">';
                $html_retval .= '<p class="fx:cn-ct-meta mar:vrt-0.75 sm)pad:bottom-0.5 sm)pad:top-0"><span class="pad:right-0.5">' . $v_meta_icon_cat . '</span>' . xidipity_first_category() . '</p>';
                $html_retval .= '<header class="fd:1 fe:1">';
                $html_retval .= $v_html_title;
                $html_retval .= '</header>';
                $html_retval .= $v_meta_list_byline;
                $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                $html_retval .= dsp_rm($v_meta_link_rm);
                $html_retval .= '</div>';
                $html_retval .= '</div>';
            }
            else
            {
                $html_retval .= '<div class="fx:c fa:3 fb:6 fc:5 sm)fx:r">';
                $html_retval .= '<div class="fd:1 fe:1 wd:100% sm)width:40%">';
                $html_retval .= $v_html_img;
                $html_retval .= '</div>';
                $html_retval .= '<div class="fd:1 fe:1 pad:left-1 wd:100% sm)max-width:60%">';
                $html_retval .= '<p class="fx:cn-ct-meta mar:vrt-0.75 sm)pad:bottom-0.5 sm)pad:top-0"><span class="pad:right-0.5">' . $v_meta_icon_cat . '</span>' . xidipity_first_category() . '</p>';
                $html_retval .= '<header class="fd:1 fe:1">';
                $html_retval .= $v_html_title;
                $html_retval .= '</header>';
                $html_retval .= $v_meta_list_byline;
                $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                $html_retval .= dsp_rm($v_meta_link_rm);
                $html_retval .= '</div>';
                $html_retval .= '</div>';
            }
            if ($v_count < $v_ppp)
            {
                $html_retval .= '<p>&nbsp;</p>';
            }
        }
        $html_retval .= '<!-- /xwpt: 90903.1a/xsc/bexc/php           -->';
        /*
            paginate flag set
        */
        if ($v_paged == 'y')
        {
            $v_pages = $db_query->max_num_pages;
            /*: pagination :*/
            if ($v_pages > 1)
            {
                $v_cur_page = max(1, get_query_var('paged'));
                $html_retval .= xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages));
            }
        }
    }
    else
    {
        $html_retval = dsp_err('[bexc] No blogs assigned to category list: ' . $p_cat_lst);
    }
    /*: close query :*/
    wp_reset_postdata();
    /*: return html :*/
    return $html_retval;
}
/**
 *  name:   blst
 *  build:  91108.1
 *  descrp: display unordered list of linked blog titles
 *  attributes ($atts - array):
 *      class - string
 *      pre_itm - string
 *      pst_itm - string
 *      orderby - string
 *      order - string (A/D)
 *      xclude - string (y/n)
 *
 *  parameters ($prm - string):
 *      category - string
 *
 *  [blst class='' pre_itm='' pst_itm='' orderby='' order='' xclude='']category[/blst]
 *
 */
add_shortcode('blst', 'blst_shortcode');
function blst_shortcode($atts = array(), $prms = '')
{
    // system
    $html_retval = '';
    // variables
    $v_cat_lst = '';
    $v_class = '';
    $v_pre_itm = '';
    $v_pst_itm = '';
    $v_orderby = 'title';
    $v_order = 'ASC';
    // attributes
    $a_class = '';
    $a_pre_itm = '';
    $a_pst_itm = '';
    $a_orderby = '';
    $a_order = '';
    $a_xclude = 0;
    // parameters
    $p_cat_lst = trim($prms);
    // initialize attributes
    if (isset($atts['class']))
    {
        $a_class = tpl_prg($atts['class']);
    }
    if (isset($atts['pre_itm']))
    {
        $a_pre_itm = tpl_prg($atts['pre_itm']);
    }
    if (isset($atts['pst_itm']))
    {
        $a_pst_itm = tpl_prg($atts['pst_itm']);
    }
    if (isset($atts['orderby']))
    {
        $a_orderby = tpl_prg($atts['orderby']);
    }
    if (isset($atts['order']))
    {
        $a_order = tpl_prg($atts['order']);
    }
    if (isset($atts['xclude']))
    {
        $a_xclude = tpl_prg($atts['xclude']);
    }
    // sanitize attributes
    if (strtolower($a_xclude) == 'y')
    {
        $v_cat_lst = val_cat($p_cat_lst, 1);
    }
    else
    {
        $v_cat_lst = val_cat($p_cat_lst, 0);
    }
    $v_class = $a_class;
    if (strtoupper($a_order) == 'D')
    {
        $v_order = 'DESC';
    }
    if (!empty($a_orderby))
    {
        $v_orderby = val_orby($a_orderby);
    }
    $v_pst_itm = $a_pst_itm;
    $v_pre_itm = $a_pre_itm;
    
    if (empty($v_cat_lst) && !empty($p_cat_lst))
    {
        $html_retval = dsp_err('[blst] Invalid category list.');
    }
    else
    {
        // set up db query
        $wp_qry = array(
            'cat' => $v_cat_lst,
            'offset' => 0,
            'order' => $v_order,
            'orderby' => $v_orderby,
            'post_status' => 'publish',
            'post_type' => 'post',
            'posts_per_page' => -1,
            'suppress_filters' => true,
        );
        $wp_posts = get_posts($wp_qry);
        if (!empty($wp_posts))
        {
            $html_retval .= '<!-- xwpt: 91108.1a/ext/blst/php            -->';
            $html_retval .= '<ul>';
            if (!empty($v_class))
            {
                $html_retval .= '<ul class="' . $v_class . '">';
            }
            foreach ($wp_posts as $wp_post)
            {
                $html_retval .= '<li><a href="' . get_permalink($wp_post) . '">';
                $html_retval .= $v_pre_itm . $wp_post->post_title . $v_pst_itm;
                $html_retval .= '</a></li>';
            }
            $html_retval .= '</ul>';
            $html_retval .= '<!-- /xwpt: 91108.1a/ext/blst/php           -->';
            // close query
            wp_reset_postdata();
        }        
    }    
    // return html
    return $html_retval;
}
/**
 *  name:   clst
 *  build:  91108.1
 *  descrp: display unordered list of linked category titles
 *  attributes ($atts - array):
 *      class - string
 *      pre_itm - string
 *      pst_itm - string
 *      depth - numeric
 *      active - string (y/n)
 *      xclude - string
 *
 *  parameters ($prm - string):
 *      category - string
 *
 *  https://developer.wordpress.org/reference/functions/wp_list_categories/
 *
 *  [clst class='' pre_itm='' pst_itm='' depth=0 active='' xclude='']category[/clst]
 *
 */
add_shortcode('clst', 'clst_shortcode');
function clst_shortcode($atts = array(), $prm = '')
{
    // system
    $html_retval = '';
    // variables
    $v_active = false;
    $v_class = '';
    $v_ct_root = '';
    $v_depth = 0;
    $v_pre_itm = '';
    $v_pst_itm = '';
    $v_xclude = '';
    // attributes
    $a_active = 0;
    $a_class = '';
    $a_depth = 0;
    $a_active = '';
    $a_pre_itm = '';
    $a_pst_itm = '';
    $a_xclude = '';
    // parameters
    $p_ct_root = trim($prm);
    // initialize attributes
    if (isset($atts['active']))
    {
        $a_active = $atts['active'];
    }
    if (isset($atts['class']))
    {
        $a_class = tpl_prg($atts['class']);
    }
    if (isset($atts['depth']))
    {
        $a_depth = $atts['depth'];
    }
    if (isset($atts['pst_itm']))
    {
        $a_pst_itm = tpl_prg($atts['pst_itm']);
    }
    if (isset($atts['pre_itm']))
    {
        $a_pre_itm = tpl_prg($atts['pre_itm']);
    }
    if (isset($atts['xclude']))
    {
        $a_xclude = tpl_prg($atts['xclude']);
    }
    // sanitize attributes
    if (strtolower($a_active) == 'y')
    {
        $v_active = true;
    }
    $v_class = $a_class;
    $v_pre_itm = $a_pst_itm;
    $v_pst_itm = $a_pre_itm;
    $v_depth = abs($a_depth);
    // convert excluded category names to cateogry id's
    if (!empty($a_xclude))
    {
        $xcats = explode(',', $a_xclude);
        foreach ($xcats as $xcat)        
        {
            $xcat_id = get_cat_ID($xcat);
            if (!empty($xcat_id))
            {
                $v_xclude .= $xcat_id . ',';
            }            
        }
    }
    // update hroot
    if (!empty($p_ct_root))
    {
        $v_ct_root = val_cat($p_ct_root, 0);
    }
    if (empty($v_ct_root) && !empty($p_ct_root))
    {
        $html_retval = dsp_err('[clst] Invalid category parent: ' . $p_ct_root);
    }
    else
    {
        // set up db query
        $wp_qry = array(
            'child_of' => $v_ct_root,
            'class' => $v_class,
            'current_category' => 0,
            'depth' => $v_depth,
            'echo' => false,
            'exclude' => $v_xclude,
            'exclude_tree' => '',
            'feed' => '',
            'feed_image' => '',
            'feed_type' => '',
            'hide_empty' => $v_active,
            'hide_title_if_empty' => false,
            'hierarchical' => true,
            'link_after' => $v_pst_itm,
            'link_before' => $v_pre_itm,
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
        $html_retval .= '<!-- xwpt: 91108.1a/xsc/clst/php            -->';
        if (empty($v_class))
        {
            $html_retval .= '<ul>';
        }
        else
        {
            $html_retval .= '<ul class="' . $v_class . '">';
        }
        $html_retval .= wp_list_categories($wp_qry);
        $html_retval .= '</ul>';
        $html_retval .= '<!-- /xwpt: 91108.1a/xsc/clst/php           -->';
    }
    // close query
    wp_reset_postdata();
    // return html
    return $html_retval;
}
/**
 *  name: imgg
 *  build: 91108.1a
 *  description: Gallery images by category
 *  attributes ($atts - array):
 *      class - string
 *      align_capt - string (l/c/r)
 *      dsp_desc - string (y/n)
 *      columns - numeric (2-4)
 *      orderby - string
 *      order - string (A/D)
 *      xclude - string (y/n)
 *
 *  parameters ($prm - string):
 *      category - string
 *
 * [imgg class="" align_capt="" dsp_desc="" columns=0 orderby="" order="" xclude=""]category[/imgg]
 *
 */
add_shortcode('imgg', 'imgg_shortcode');
function imgg_shortcode($atts = array() , $prms = '')
{
    // system
    $html_retval = '';
    // variables
    $v_categories = '';
    $v_class = '';
    $v_align_capt = 'c';
    $v_dsp_desc = 'n';
    $v_columns = '2';    
    $v_order = 'ASC';
    $v_orderby = '';
    // attributes
    $a_class = '';
    $a_align_capt = '';
    $a_dsp_desc = '';
    $a_columns = 0;    
    $a_xclude = '';
    $a_order = '';
    $a_orderby = '';
    // parameters
    $p_cat_lst = trim($prms);
    // initialize attributes
    if (isset($atts['class']))
    {
        $a_class = tpl_prg($atts['class']);
    }
    if (isset($atts['align_capt']))
    {
        $a_align_capt = $atts['align_capt'];
    }
    if (isset($atts['dsp_desc']))
    {
        $a_dsp_desc = $atts['dsp_desc'];
    }
    if (isset($atts['columns']))
    {
        $a_columns = $atts['columns'];
    }
    if (isset($atts['xclude']))
    {
        $a_xclude = $atts['xclude'];
    }
    if (isset($atts['order']))
    {
        $a_order = tpl_prg($atts['order']);
    }
    if (isset($atts['orderby']))
    {
        $a_orderby = tpl_prg($atts['orderby']);
    }
    // sanitize attributes
    $v_class = trim($a_class);
    if (strtolower($a_xclude) == 'y')
    {
        $v_categories = val_cat($p_cat_lst, 1);
    }
    else
    {
        $v_categories = val_cat($p_cat_lst, 0);        
    }
    switch (strtolower($a_align_capt))
    {
        case 'l':
            $v_align_capt = 'left';
        break;
        case 'c':
            $v_align_capt = 'center';
        break;
        case 'r':
            $v_align_capt = 'right';
        break;
        default:
            $v_align_capt = 'center';
    }
    if (strtolower($a_dsp_desc) == 'y')
    {
        $v_dsp_desc = 'y';
    }
    switch (abs($a_columns))
    {
        case 3:
            $v_columns = '1/3';
        break;
        case 4:
            $v_columns = '1/4';
        break;
        default:
            $v_columns = '1/2';
    }
    if (strtoupper($a_order) !== 'A')
    {
        $v_order = 'DESC';
    }
    $v_orderby = val_orby($a_orderby);
    // validate go / no go path
    if (strlen($p_cat_lst) == 0)
    {
        $html_retval = dsp_err('[imgg] Missing category list');
    }
    elseif (strlen($v_categories) == 0)
    {
        $html_retval = dsp_err('[imgg] Invalid category list: ' . $p_cat_lst);
    }
    else
    {
        // Set up db query
        $wp_prms = array(
            'cat' => $v_categories,
            'order' => $v_order,
            'orderby' => $v_orderby,
            'post_mime_type' => 'image',
            'post_status' => 'inherit',
            'post_type' => 'attachment',
            'posts_per_page' => '30'
        );
        $wp_query = new WP_Query($wp_prms);
        if ($wp_query->have_posts())
        {
            $html_retval .= '<!-- xwpt: 91108.1a/xsc/imgg/php            -->';
            $html_retval .= '<div class="fx:rw fa:1 fb:1 fc:1">';

            while ($wp_query->have_posts())
            {
                $wp_query->the_post();
                $wp_img = wp_get_attachment_image_src(get_the_ID() , 'full');

                $html_retval .= '<div class="fx:c fa:1 fb:1 fc:1 pad:0.5 wd:100% sm)wd:' . $v_columns . '">';
                $html_retval .= '<div class="fx:c fa:1 fb:1 fc:1">';
                
                $html_retval .= '<div class="fd:1 fe:1 wd:100%">';                
                if (empty($v_class))
                {
                    $html_retval .= '<a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img class="img:100%" src="' . $wp_img[0] . '" alt="Xidipity Gallery Image"></a>';
                }
                else
                {
                    $html_retval .= '<a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img class="img:100% ' . $v_class . '" src="' . $wp_img[0] . '" alt="Xidipity Gallery Image"></a>';
                }
                $html_retval .= '</div>';
                
                $html_retval .= '<div class="fd:1 fe:1 line:ht-2 aln:text-' . $v_align_capt . ' wd:100%">';    
                $html_retval .= '<p>' . $wp_query->post->post_excerpt . '</p>';
                $html_retval .= '</div>';
                
                if ($v_dsp_desc == 'y')
                {
                    $html_retval .= '<div class="fd:1 fe:1 wd:100%">';
                    $html_retval .= '<p>' . $wp_query->post->post_content . '</p>';
                    $html_retval .= '</div>';
                }
                $html_retval .= '</div>';
                $html_retval .= '</div>';
            }
            $html_retval .= '</div>';
            $html_retval .= '<!-- /xwpt: 90903.1a/xsc/imgg/php           -->';
        }
        else
        {
            $html_retval = dsp_err('[imgg] No images assigned to category list: ' . $p_cat_lst);
        }
        // close query
        wp_reset_postdata();
    }
    // return html
    return $html_retval;
}
/*
 *  Xidipity WordPress Theme
 *
 *  name:   plst
 *  build:  91108.1
 *  descrp: display unordered list of linked page titles
 *  attributes ($atts - array):
 *      class - string
 *      pre_itm - string
 *      pst_itm - string
 *      depth - numeric
 *      xclude - string
 *
 *  parameters ($prm - string):
 *      root page - string
 *
 *  [plst class='' pre_itm='' pst_itm='' depth=0 xclude='']root page[/plst]
 *
 *  https://developer.wordpress.org/reference/functions/wp_list_pages/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.9
 *
 */
add_shortcode('plst', 'plst_shortcode');
function plst_shortcode($atts = array(), $prm = string)
{
    // system
    $html_retval = '';
    // variables
    $v_class = '';
    $v_id_root = 0;
    $v_pre_itm = '';
    $v_pst_itm = '';
    $v_depth = 1;
    $v_xclude = '';
    // attributes
    $a_class = '';
    $a_pre_itm = '';
    $a_pst_itm = '';
    $a_depth = 0;
    $a_xclude = '';
    // parameters
    $p_pg_root = trim($prm);
    // initialize attributes
    if (isset($atts['class']))
    {
        $a_class = tpl_prg($atts['class']);
    }
    if (isset($atts['pre_itm']))
    {
        $a_pre_itm = tpl_prg($atts['pre_itm']);
    }
    if (isset($atts['pst_itm']))
    {
        $a_pst_itm = tpl_prg($atts['pst_itm']);
    }
    if (isset($atts['depth']))
    {
        $a_depth = $atts['depth'];
    }
    if (isset($atts['xclude']))
    {
        $a_xclude = tpl_prg($atts['xclude']);
    }
    // sanitize attributes
    $v_class = $a_class;
    $v_pre_itm = $a_pre_itm;
    $v_pst_itm = $a_pst_itm;
    $v_depth = abs($a_depth);
    // convert excluded page names to page id's
    if (!empty($a_xclude))
    {
        $xpages = explode(',', $a_xclude);
        foreach ($xpages as $xpage)        
        {
            $wp_page = get_page_by_title($xpage);
            if ($wp_page)
            {
                $v_xclude .= $wp_page->ID . ',';
            }            
        }
    }
    // update hroot
    if (!empty($p_pg_root))
    {
        $wp_page = get_page_by_title($p_pg_root);
        if ($wp_page)
        {
            $v_id_root = $wp_page->ID;
        }
    }
    // set up db query
    $wp_qry = array(
        'class' => $v_class,
        'depth' => $v_depth,
        'date_format' => get_option('date_format') ,
        'child_of' => $v_id_root,
        'exclude' => $v_xclude,
        'echo' => false,
        'sort_column' => 'title',
        'link_before' => $v_pre_itm,
        'link_after' => $v_pst_itm,
        'item_spacing' => 'discard',
        'title_li' => '',
        'walker' => new p_walker()
    );
    $html_retval .= '<!-- xwpt: 90903.1a/xsc/plst/php            -->';
    if (empty($v_class))
    {
        $html_retval .= '<ul>';
    }
    else
    {
        $html_retval .= '<ul class="' . $v_class . '">';
    }
    $html_retval .= wp_list_pages($wp_qry);
    $html_retval .= '</ul>';
    $html_retval .= '<!-- /xwpt: 90903.1a/xsc/plst/php           -->';
    // close query
    wp_reset_postdata();
    // return html
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
    # https://developer.wordpress.org/reference/functions/get_the_title/
 */
add_shortcode('get_pg_title', 'get_pg_title_shortcode');
function get_pg_title_shortcode()
{
    return get_the_title();
}

/*  # x_fa_ver
    # 90905.1a
    # display font awesome version
    # https://fontawesome.com/
 */
add_shortcode('x_fa_ver', 'x_fa_ver_shortcode');
function x_fa_ver_shortcode()
{
    return XWT_FA_VER;
}

/*  # x_wp_ver
    # 90903.1a
    # display wordpress version
    # https://wordpress.org/
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
            $atts['label'] = '<sup><i class="fas fa-map-marker" style="color:#c62828;">&#x200B;</i></sup>';
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
 * Build:   200107-1
 *
 */
?>
