<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       inc/template-tags.php
 * Function:        extended functinality
 * Build:           200206
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            https://codex.wordpress.org/Template_Tags
 *
 */

/*
***
    * ico: xidipity_icon_date
    * dsc: calendar
    * ver: 200206
    * fnt: return font awesome calendar icon
    * ref: https://fontawesome.com/icons/calendar-alt?style=regular
***
*/
if (!function_exists('xidipity_icon_date'))
{
    function xidipity_icon_date()
    {
            return '<i class="far fa-calendar-alt wcag:fg-grey6"></i>';
    }
}

/*
***
    * ico: xidipity_icon_tags
    * dsc: tags
    * ver: 200206
    * fnt: return font awesome tags icon
    * ref: https://fontawesome.com/icons/tags?style=solid
***
*/
if (!function_exists('xidipity_icon_tags'))
{
    function xidipity_icon_tags()
    {
            return '<i class="fas fa-tags wcag:fg-grey6"></i>';
    }
}

/*
***
    * ico: xidipity_icon_bm
    * dsc: bookmark
    * ver: 200206
    * fnt: return font awesome bookmark icon
    * ref: https://fontawesome.com/icons/bookmark?style=regular
***
*/
if (!function_exists('xidipity_icon_bm'))
{
    function xidipity_icon_bm()
    {
            return '<i class="far fa-bookmark wcag:fg-grey6"></i>';         
    }
}

/*
***
    * ico: xidipity_icon_vw_img
    * dsc: image
    * ver: 200206
    * fnt: return font awesome file image icon
    * ref: https://fontawesome.com/icons/image?style=regular
***
*/
if (!function_exists('xidipity_icon_vw_img'))
{
    function xidipity_icon_vw_img()
    {
            return '<i class="far fa-file-image wcag:fg-grey6"></i>';
    }
}

/*
***
    * ico: xidipity_icon_edit
    * dsc: edit
    * ver: 200206
    * fnt: return font awesome file edit icon
    * ref: https://fontawesome.com/icons/edit?style=regular
***
*/
if (!function_exists('xidipity_icon_edit'))
{
    function xidipity_icon_edit()
    {
        return '<i class="far fa-edit wcag:fg-grey6"></i>';
    }
}

/*
***
    * ico: xidipity_icon_idea
    * dsc: light bulb
    * ver: 200206
    * fnt: return font awesome file lightbulb icon
    * ref: https://fontawesome.com/icons/lightbulb?style=regular
***
*/
if (!function_exists('xidipity_icon_idea'))
{
    function xidipity_icon_idea()
    {
        return '<i class="far fa-lightbulb fg:sec-bright"></i>';
    }
}

/*
***
    * ico: xidipity_icon_note
    * dsc: note
    * ver: 200206
    * fnt: return font awesome file sticky note icon
    * ref: https://fontawesome.com/icons/sticky-note?style=regular
***
*/
if (!function_exists('xidipity_icon_note'))
{
    function xidipity_icon_note()
    {
        return '<i class="far fa-sticky-note wcag:fg-grey6"></i>';
    }
}

/*
***
    * ico: xidipity_icon_star
    * dsc: star
    * ver: 200206
    * fnt: return font awesome file star icon
    * ref: https://fontawesome.com/icons/sticky-note?style=regular
***
*/
if (!function_exists('xidipity_icon_star'))
{
    function xidipity_icon_star()
    {
        return '<i class="far fa-star fg:sec-bright"></i>';
    }
}

/*
***
    * ico: xidipity_icon_caret_left
    * dsc: angle left
    * ver: 200206
    * fnt: return font awesome file angle left icon
    * ref: https://fontawesome.com/icons/angle-left?style=solid
***
*/
if (!function_exists('xidipity_icon_caret_left'))
{
    function xidipity_icon_caret_left()
    {
        return '<i class="fas fa-angle-left wcag:fg-grey9"></i>';
    }
}

/*
***
    * ico: xidipity_icon_caret_right
    * dsc: angle right
    * ver: 200206
    * fnt: return font awesome file angle right icon
    * ref: https://fontawesome.com/icons/angle-right?style=solid
***
*/
if (!function_exists('xidipity_icon_caret_right'))
{
    function xidipity_icon_caret_right()
    {
        return '<i class="fas fa-angle-right wcag:fg-grey9"></i>';
    }
}

/*
***
    * ico: xidipity_icon_discuss
    * dsc: discussion
    * ver: 200206
    * fnt: return font awesome file comments icon
    * ref: https://fontawesome.com/icons/comments?style=regular
***
*/
if (!function_exists('xidipity_icon_discuss'))
{
    function xidipity_icon_discuss()
    {
        return '<i class="far fa-comments fg:sec"></i>';
    }
}

/*
***
    * ico: xidipity_icon_comment
    * dsc: comment
    * ver: 200206
    * fnt: return font awesome file comment icon
    * ref: https://fontawesome.com/icons/comment?style=regular
***
*/
if (!function_exists('xidipity_icon_comment'))
{
    function xidipity_icon_comment()
    {
        return '<i class="far fa-comment fg:sec"></i>';
    }
}

/*  # xidipity_excerpt_banner
    # 90728.1
    # return excerpt banner
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
            $html_retval .= '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
            $html_retval .= '<div class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% fx:shadow pad:+1">';
            $html_retval .= '<header class="fx:cn-itm-hd">';
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
        $html_retval .= '<div class="fx:cn-ct-nav bg:bas-200 mar:vert+1 cnr:arch-small">';
        if ($wp_search)
        {
            
            $html_retval .=  paginate_links(array(
                'after_page_number' => '</div>',
                'base' => '%_%',
                'before_page_number' => '<div class="fx:ct-nav-itm">',
                'current' => $a_page,
                'format' => '?paged=%#%',
                'next_text' => '<div class="fx:ct-nav-itm">' . xidipity_icon_caret_right() . '</div>',
                'prev_text' => '<div class="fx:ct-nav-itm">' . xidipity_icon_caret_left() . '</div>',
                'total' => $a_pages,
            ));
        }
        else
        {
            $html_retval .=  paginate_links(array(
                'after_page_number' => '</div>',
                'base' => get_pagenum_link(1) . '%_%',
                'before_page_number' => '<div class="fx:ct-nav-itm">',
                'current' => $a_page,
                'format' => 'page/%#%',
                'next_text' => '<div class="fx:ct-nav-itm">' . xidipity_icon_caret_right() . '</div>',
                'prev_text' => '<div class="fx:ct-nav-itm">' . xidipity_icon_caret_left() . '</div>',
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
        if ($v_cnt > 0)
        {
            $html_retval .= '<table class="bdr:collapse">';
            $html_retval .= '<tbody>';
            $html_retval .= '<tr>';
            foreach ($atts as $att)
            {
                if (!empty(trim($att)))
                {
                    $html_retval .= '<td class="aln:text-left aln:middle">' . trim($att) . '</td>';
                }
            }
            $html_retval .= '</tr>';
            $html_retval .= '</tbody>';
            $html_retval .= '</table>';
        }
        
        /*: return html :*/
        return $html_retval;
    }
}
/*  # posted_on
    # 90904.1a
    # core wp function
    # return posted on date
**/
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
/*  # posted_by
    # 90904.1a
    # core wp function
    # return posted author
**/
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
        $byline = sprintf(esc_html_x('Author -  %s', 'post author', 'xidipity') , '<span class="author vcard"><a class="url fn n" style="max-height:68px;max-width:68px;" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID', $post_author_id))) . '">' . esc_html(get_the_author_meta('nickname', $post_author_id)) . '</a></span>');
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

/*  # custom logo
    # 90904.1a
    # core wordpress process
**/
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
/*  # does excerpt exist
    # 90904.1a
    # core wordpress process
    # returns bool
**/
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

/*
 * EOF:     inc/template-tags.php
 * Build:   200206
 *
 */
?>
