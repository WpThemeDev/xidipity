<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   template-tags.php
 *  build:  90828.1a
 *  descrp: Core WordPress extensions
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
 
/*  # xidipity_icon_date
    # 90728.1
    # return date icon
    @return html
**/
   
if (!function_exists('xidipity_icon_date'))
{
    function xidipity_icon_date()
    {
            return '<i class="far fa-calendar-alt fg:bas-500"></i>';
    }
}

/*  # xidipity_icon_tags
    # 90728.1
    # return tags icon
    @return html
**/
   
if (!function_exists('xidipity_icon_tags'))
{
    function xidipity_icon_tags()
    {
            return '<i class="fas fa-tags fg:bas-500"></i>';
    }
}

/*  # xidipity_icon_cat
    # 90728.1
    # return category icon
    @return html
**/
   
if (!function_exists('xidipity_icon_cat'))
{
    function xidipity_icon_cat()
    {
            return '<i class="far fa-clone fg:bas-500"></i>';
    }
}

/*  # xidipity_icon_vw_img
    # 90728.1
    # return view image icon
    @return html
**/
   
if (!function_exists('xidipity_icon_vw_img'))
{
    function xidipity_icon_vw_img()
    {
            return '<i class="far fa-file-image fg:bas-500"></i>';
    }
}

/*  # xidipity_icon_edit
    # 90728.1
    # return edit icon
    @return html
**/
   
if (!function_exists('xidipity_icon_edit'))
{
    function xidipity_icon_edit()
    {
        return '<i class="far fa-edit fg:bas-500"></i>';
    }
}

/*  # xidipity_icon_idea
    # 90728.1
    # return idea icon
    @return html
**/
   
if (!function_exists('xidipity_icon_idea'))
{
    function xidipity_icon_idea()
    {
        return '<i class="far fa-lightbulb" style="color:#fdd835"></i>';
    }
}

/*  # xidipity_icon_note
    # 90728.1
    # return note icon
    @return html
**/
   
if (!function_exists('xidipity_icon_note'))
{
    function xidipity_icon_note()
    {
        return '<i class="far fa-sticky-note fg:bas-500"></i>';
    }
}

/*  # xidipity_icon_star
    # 90728.1
    # return star icon
    @return html
**/
   
if (!function_exists('xidipity_icon_star'))
{
    function xidipity_icon_star()
    {
        return '<i class="far fa-star fg:pri-300"></i>';
    }
}

/*  # xidipity_icon_caret_left
    # 90728.1
    # return caret left icon
    @return html
**/
   
if (!function_exists('xidipity_icon_caret_left'))
{
    function xidipity_icon_caret_left()
    {
        return '<i class="fas fa-angle-left"></i>';
    }
}

/*  # xidipity_icon_caret_right
    # 90728.1
    # return caret right icon
    @return html
**/
   
if (!function_exists('xidipity_icon_caret_right'))
{
    function xidipity_icon_caret_right()
    {
        return '<i class="fas fa-angle-right"></i>';
    }
}

/*  # xidipity_icon_rm
    # 90728.1
    # return readmore icon
    @return html
**/
   
if (!function_exists('xidipity_icon_rm'))
{
    function xidipity_icon_rm()
    {
        return '<i class="fas fa-book-reader fg:pri-300"></i>';
    }
}

/*  # xidipity_excerpt_banner
    # 90728.1
    # return excerpt banner
    @return html
**/

if (!function_exists('xidipity_excerpt_banner'))
{
    function xidipity_excerpt_banner($atts = array())
    {
        /*: variables   :*/
        $html_retval = '';
        $v_cat = '';
        $v_cat_id = '';
        $v_icon = '';
        $v_title = '';
        $v_hdr_title = '';
        $v_hdr_descr = '';
        /*: attributes  :*/
        $a_cat = '';
        $a_icon = '';
        $a_title = '';
        /*: initialize attributes   :*/
        if (isset($atts['cat']))
        {
            $a_cat = $atts['cat'];
        }
        if (isset($atts['icon']))
        {
            $a_icon = $atts['icon'];
        }
        if (isset($atts['title']))
        {
            $a_title = $atts['title'];
        }
        /*: sanitize attributes :*/
        $v_cat = trim($a_cat);
        $v_icon = trim($a_icon);
        $v_title = trim($a_title);
        if (!empty($v_cat))
        {
            $v_cat_id = get_cat_ID($v_cat);
        }
        if (!empty($v_cat_id))
        {
            $v_hdr_title = $v_cat;
            $v_hdr_descr = category_description($v_cat_id);
        }
        if (empty($v_hdr_title))
        {
            $v_hdr_title = $v_title;
        }
        /*: go / nogo logic :*/
        if (!empty($v_hdr_title))
        {
            $html_retval .= '<div class="fx:full-cn-item fx:shadow pad:all-0.5">';
            $html_retval .= '<header class="fx:cn-item-header">';
            $html_retval .= '<h2>' . $v_icon . $v_hdr_title . '</h2>';
            if (!empty($v_hdr_descr))
            {
                $html_retval .= '<div class="fnt:size-smaller">' . $v_hdr_descr . '</div>';
            }
            $html_retval .= '</header>';
            $html_retval .= '</div>';
        }
        /*: return html :*/
        return $html_retval;
    }
}

/*  # xidipity_paginate_links
    # 90728.1
    # return pagination links
    @see https://codex.wordpress.org/Function_Reference/paginate_links
    @return html
**/
if (!function_exists('xidipity_paginate_links'))
{
    function xidipity_paginate_links($atts = array())
    {
        global $wp;
        $wp_url = add_query_arg( $wp->query_vars, home_url( $wp->request ) );
        /*: variables   :*/
        $html_retval = '';
        $v_page = 1;
        $v_pages = 10;
        $v_url = strtolower($wp_url);
        /*: attributes  :*/
        $a_page = 0;
        $a_pages = 0;
        /*: initialize attributes   :*/
        if (isset($atts['page']))
        {
            $a_page = $atts['page'];
        }
        if (isset($atts['pages']))
        {
            $a_pages = $atts['pages'];
        }
        /*: sanitize attributes :*/
        if ($a_page >0) {
            $v_page = $a_page;
        }
        if ($a_pages >0) {
            $v_pages = $a_pages;
        }
        /*: check url for search argument :*/
        $wp_search = false;
        if (!empty($v_url))
        {
            $wp_search = (abs(strpos($v_url, 's=')) !== 0);
        }
        $html_retval .= '<div class="fx:pg-nav-container bg:bas-200 bdr:radius-0.25 mar:vert-1">';
        if ($wp_search)
        {
            
            $html_retval .=  paginate_links(array(
                'after_page_number' => '</div>',
                'base' => '%_%',
                'before_page_number' => '<div class="fx:pg-nav-item">',
                'current' => $a_page,
                'format' => '?paged=%#%',
                'next_text' => '<div class="fx:pg-nav-item">' . xidipity_icon_caret_right() . '</div>',
                'prev_text' => '<div class="fx:pg-nav-item">' . xidipity_icon_caret_left() . '</div>',
                'total' => $a_pages,
            ));
        }
        else
        {
            $html_retval .=  paginate_links(array(
                'after_page_number' => '</div>',
                'base' => get_pagenum_link(1) . '%_%',
                'before_page_number' => '<div class="fx:pg-nav-item">',
                'current' => $a_page,
                'format' => 'page/%#%',
                'next_text' => '<div class="fx:pg-nav-item">' . xidipity_icon_caret_right() . '</div>',
                'prev_text' => '<div class="fx:pg-nav-item">' . xidipity_icon_caret_left() . '</div>',
                'total' => $a_pages,
            ));
        }
        $html_retval .= '</div>';
        /*: return html :*/
        
        return str_replace('&hellip;','<i class="fas fa-exchange-alt fg:bas-500"></i>',$html_retval);
    }
}

/*  # xidipity_metalinks
    # 90828.1a
    # return flexbox of metadata links
**/
if (!function_exists('xidipity_metalinks'))
{
    function xidipity_metalinks($atts = array())
    {
        /*: variables   :*/
        $html_retval = '';
        $v_cnt = count($atts);
        /*: go / no go  :*/
        if ($v_cnt >0)
        {
            $html_retval .= '<div class="fx:meta-container pad:vert-0.75">';
            foreach ($atts as $att)
            {
                $html_retval .= '<div class="fx:meta-item">' . $att . '</div>';
            }
            $html_retval .= '</div>';
        }
        /*: return html :*/
        return $html_retval;
    }
}

if (!function_exists('xidipity_entry_footer'))
{
    /**
     * ### deprecate ###
     * Display HTML with meta information for the categories, tags and comments.
     */
    function xidipity_entry_footer()
    {
        echo 'xidipity_entry_footer deprecated' . "\n";
    }
}

if (!function_exists('xidipity_the_posts_pagination'))
{
    /**
     * ### deprecate ###
     * Display navigation to next/previous set of posts when applicable.
     *
     * @see https://codex.wordpress.org/Function_Reference/the_posts_pagination
     * @return void
     */
    function xidipity_the_posts_pagination($max_pg)
    {
        // Previous/next posts navigation @since 4.1.0
        //the_posts_pagination(array(
        //    'mid_size' => 4,
        //    'total' => $max_pg,
        //    'prev_text' => '<div class="xwtNavItem"><i class="fas fa-angle-left"></i></div>',
        //    'next_text' => '<div class="xwtNavItem"><i class="fas fa-angle-right"></i></div>',
        //    'before_page_number' => '<span class="meta-nav screen-reader-text">' . esc_html__( 'Page', 'xidipity' ) . ' </span>',
        //));
    }
}
if (!function_exists('xidipity_the_post_navigation'))
{
    /**
     * Previous/next post navigation.
     *
     * @see https://developer.wordpress.org/reference/functions/the_post_navigation/
     * @return void
     */
    function xidipity_the_post_navigation()
    {
        // Previous/next post navigation @since 4.1.0.
        //the_post_navigation(array(
        //    'next_text' => __('<div class="xwtNavItem"><i class="fas fa-angle-right"></i></div>') ,
        //    'prev_text' => __('<div class="xwtNavItem"><i class="fas fa-angle-left"></i></div>') ,
        //));
        //        the_post_navigation(array(
        //            'next_text' => __('<span class="meta-nav">' . esc_html__('%title', 'xidipity') . ' <i class="fas fa-arrow-circle-right fg:bas-600"></i></span> ') ,
        //            'next_text' => __('<span class="meta-nav pr-4">Next Post<i class="fas fa-angle-right pl-2"></i></span>') ,
        //            'prev_text' => __('<span class="meta-nav"><i class="fas fa-arrow-circle-left fg:bas-600"></i> ' . esc_html__('%title', 'xidipity') . '</span> ') ,
        //            'prev_text' => __('<span class="meta-nav pl-4"><i class="fas fa-angle-left pr-2"></i>Prev Post</span>') ,
        //        ));
        
    }
}
if (!function_exists('xidipity_posted_on'))
{
    /**
     * Prints HTML with meta information for the current post-date/time and author.
     */
    function xidipity_posted_on()
    {
        $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
        if (get_the_time('U') !== get_the_modified_time('U'))
        {
            $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
        }
        $time_string = sprintf($time_string, esc_attr(get_the_date('c')) , esc_html(get_the_date()) , esc_attr(get_the_modified_date('c')) , esc_html(get_the_modified_date()));
        $posted_on = sprintf('<span class="screen-reader-text">%1$s</span><a href="%2$s" rel="bookmark"> %3$s</a>', esc_html_x('Posted on', 'post date', 'xidipity') , esc_url(get_permalink()) , $time_string);
        // Posted On HTML
        $html = '<span class="posted-on">' . $posted_on . '</span>'; // // WPCS: XSS OK.
        
        /**
         * Filters the Posted On HTML.
         *
         * @param string $html Posted On HTML.
         */
        $html = apply_filters('xidipity_posted_on_html', $html);
        // echo $html; // WPCS: XSS OK.
        return $html; // WPCS: XSS OK.
        
    }
}
if (!function_exists('xidipity_posted_by'))
{
    /**
     * Prints author.
     */
    function xidipity_posted_by()
    {
        // Global Post
        global $post;
        // We need to get author meta data from both inside/outside the loop.
        $post_author_id = get_post_field('post_author', $post->ID);
        // Byline
        $byline = sprintf(esc_html_x('Author -  %s', 'post author', 'xidipity') , '<span class="author vcard"><a class="url fn n" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID', $post_author_id))) . '">' . esc_html(get_the_author_meta('nickname', $post_author_id)) . '</a></span>');
        // Posted By HTML
        $html = '<span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.
        
        /**
         * Filters the Posted By HTML.
         *
         * @param string $html Posted By HTML.
         */
        $html = apply_filters('xidipity_posted_by_html', $html);
        // echo $html; // WPCS: XSS OK.
        return $html; // WPCS: XSS OK.
        
    }
}

/*  # xidipity_first_category
    # 90728.1
    # return html
**/
if (!function_exists('xidipity_first_category'))
{
    function xidipity_first_category()
    {
        /*
            show yoast primary category, or first category
        */
        $category = get_the_category();
        $useCatLink = true;
        $html_retval = '';
        /*
            if post has a category assigned
        */
        if ($category)
        {
            $category_display = '';
            $category_link = '';
            if (class_exists('WPSEO_Primary_Term'))
            {
                /*
                    show the post's 'primary' category, if this yoast feature
                    is available, & one is set
                */
                $wpseo_primary_term = new WPSEO_Primary_Term('category', get_the_id());
                $wpseo_primary_term = $wpseo_primary_term->get_primary_term();
                $term = get_term($wpseo_primary_term);
                if (is_wp_error($term))
                {
                    /*
                        default to first category (not yoast) if an error is returned
                    */
                    $category_display = $category[0]->name;
                    $category_link = get_category_link($category[0]->term_id);
                }
                else
                {
                    /*
                        yoast primary category
                    */
                    $category_display = $term->name;
                    $category_link = get_category_link($term->term_id);
                }
            }
            else
            {
                /*
                    default, display the first category in wp's list of assigned categories
                */
                $category_display = $category[0]->name;
                $category_link = get_category_link($category[0]->term_id);
            }
            /*
                return category
            */
            if (!empty($category_display))
            {
                if ($useCatLink == true && !empty($category_link))
                {
                    $html_retval .= '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
                }
                else
                {
                    $html_retval = htmlspecialchars($category_display);
                }
            }
            /*: return html :*/
            return $html_retval;
        }
    }
}

if (!function_exists('xidipity_post_first_category'))
{
    /**
     * ### deprecate ###
     * Prints first category for the current post.
     *
     * @return void
     */
    function xidipity_post_first_category()
    {
        // SHOW YOAST PRIMARY CATEGORY, OR FIRST CATEGORY
        $category = get_the_category();
        $useCatLink = true;
        $html_retval = '';

        // If post has a category assigned.
        if ($category)
        {
            $category_display = '';
            $category_link = '';
            if (class_exists('WPSEO_Primary_Term'))
            {
                // Show the post's 'Primary' category, if this Yoast feature is available, & one is set
                $wpseo_primary_term = new WPSEO_Primary_Term('category', get_the_id());
                $wpseo_primary_term = $wpseo_primary_term->get_primary_term();
                $term = get_term($wpseo_primary_term);
                if (is_wp_error($term))
                {
                    // Default to first category (not Yoast) if an error is returned
                    $category_display = $category[0]->name;
                    $category_link = get_category_link($category[0]->term_id);
                }
                else
                {
                    // Yoast Primary category
                    $category_display = $term->name;
                    $category_link = get_category_link($term->term_id);
                }
            }
            else
            {
                // Default, display the first category in WP's list of assigned categories
                $category_display = $category[0]->name;
                $category_link = get_category_link($category[0]->term_id);
            }
            // Display category
            if (!empty($category_display))
            {
                if ($useCatLink == true && !empty($category_link))
                {
                    $html_retval .= '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
                }
                else
                {
                    $html_retval = htmlspecialchars($category_display);
                }
                return $html_retval;
            }
        }
    }
}
/**
 * Returns true if a blog has more than 1 category.
 *
 * @return bool
 */
function xidipity_categorized_blog()
{
    if (false === ($all_the_cool_cats = get_transient('xidipity_categories')))
    {
        // Create an array of all the categories that are attached to posts.
        $all_the_cool_cats = get_categories(array(
            'fields' => 'ids',
            'hide_empty' => 1,
            // We only need to know if there is more than one category.
            'number' => 2,
        ));
        // Count the number of categories that are attached to the posts.
        $all_the_cool_cats = count($all_the_cool_cats);
        set_transient('xidipity_categories', $all_the_cool_cats);
    }
    if ($all_the_cool_cats > 1)
    {
        // This blog has more than 1 category so xidipity_categorized_blog should return true.
        return true;
    }
    else
    {
        // This blog has only 1 category so xidipity_categorized_blog should return false.
        return false;
    }
}
/**
 * Flush out the transients used in xidipity_categorized_blog.
 */
function xidipity_category_transient_flusher()
{
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
    {
        return;
    }
    // Like, beat it. Dig?
    delete_transient('xidipity_categories');
}
add_action('edit_category', 'xidipity_category_transient_flusher');
add_action('save_post', 'xidipity_category_transient_flusher');

/* deprecated
if (!function_exists('xidipity_post_thumbnail'))
{
    function xidipity_post_thumbnail()
    {
        // Post Thumbnail HTML
        $html = '';
        // Get Post Thumbnail
        $post_thumbnail = get_the_post_thumbnail(null, 'xidipity-featured', array(
            'class' => 'post-thumbnail-fmt'
        ));
        // Validation
        if (!empty($post_thumbnail))
        {
            // Post Thumbnail HTML
            $html = sprintf('<div class="post-thumbnail-wrapper post-thumbnail-wrapper-archive"><figure class="post-thumbnail post-thumbnail-archive"><a href="%1$s">%2$s</a></figure></div>', esc_attr(esc_url(get_the_permalink())) , $post_thumbnail);
        }
        $html = apply_filters('xidipity_post_thumbnail_html', $html);
        // Print HTML
        if (!empty($html))
        {
            echo $html; // WPCS: XSS OK.
            
        }
    }
}
*/
if (!function_exists('xidipity_the_custom_logo'))
{
    /**
     * Displays the optional custom logo.
     *
     * Does nothing if the custom logo is not available.
     */
    function xidipity_the_custom_logo()
    {
        if (function_exists('the_custom_logo'))
        {
            the_custom_logo();
        }
    }
}
/**
 * A helper conditional function.
 * Theme has Excerpt or Not
 *
 * https://codex.wordpress.org/Function_Reference/get_the_excerpt
 * This function must be used within The Loop.
 *
 * @return bool
 */
function xidipity_has_excerpt()
{
    // Post Excerpt
    $post_excerpt = get_the_excerpt();
    /**
     * Filters the Post has excerpt.
     *
     * @param bool
     */
    return apply_filters('xidipity_has_excerpt', !empty($post_excerpt));
}
/**
 * A helper conditional function.
 * Theme has Sidebar or Not
 *
 * @return bool
 */
function xidipity_has_sidebar()
{
    /**
     * Filters the theme has active sidebar.
     *
     * @param bool
     */
    return apply_filters('xidipity_has_sidebar', is_active_sidebar('sidebar-1'));
}
/**
 * Display the layout classes.
 *
 * @param string $section - Name of the section to retrieve the classes
 * @return void
 */
function xidipity_layout_class($section = 'content')
{
    // Sidebar Position
    $sidebar_position = xidipity_mod('xidipity_sidebar_position');
    if (!xidipity_has_sidebar())
    {
        $sidebar_position = 'no';
    }
    // Layout Skeleton
    $layout_skeleton = array(
        'content' => array(
            'content' => '',
        ) ,
        'content-sidebar' => array(
            'content' => '',
            'sidebar' => 'sidebar-widget-area',
        ) ,
        'sidebar-content' => array(
            'content' => '',
            'sidebar' => 'sidebar-widget-area',
        ) ,
        'sidebar-content-rtl' => array(
            'content' => '',
            'sidebar' => 'sidebar-widget-area',
        ) ,
    );
    // Layout Classes
    switch ($sidebar_position)
    {
        case 'no':
            $layout_classes = $layout_skeleton['content']['content'];
        break;
        case 'left':
            $layout_classes = ('sidebar' === $section) ? $layout_skeleton['sidebar-content']['sidebar'] : $layout_skeleton['sidebar-content']['content'];
            if (is_rtl())
            {
                $layout_classes = ('sidebar' === $section) ? $layout_skeleton['sidebar-content-rtl']['sidebar'] : $layout_skeleton['sidebar-content-rtl']['content'];
            }
        break;
        case 'right':
        default:
            $layout_classes = ('sidebar' === $section) ? $layout_skeleton['content-sidebar']['sidebar'] : $layout_skeleton['content-sidebar']['content'];
    }
    return esc_attr($layout_classes);
}
/*
    eof: template-tags.php
*/
?>
