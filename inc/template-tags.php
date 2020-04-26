<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       inc/template-tags.php
 * Function:        extended functinality
 * Build:           200429
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
 *
 * Other SVG styles
 *  h1 - width:width:3.25rem;height:3.25rem;display:inline;padding-bottom:8px;
 *  h2 - width:2.4375rem;height:2.4375rem;display:inline;padding-bottom:5px;
 *  h3 - width:2.125rem;height:2.125rem;display:inline;padding-bottom:4px;
 *  h4 - width:1.8125rem;height:1.8125rem;display:inline;padding-bottom:4px;
 *  h5 - width:1.5rem;height:1.5rem;display:inline;padding-bottom:3px;
 *  h6 - width:1.375rem;height:1.375rem;display:inline;padding-bottom:3px;
 *
 *  src: https://materialdesignicons.com/
 *
 */

/*
***
    * ico: xidipity_icon_closed
    * dsc: closed
    * ver: 200422
    * fnt: return closed icon
    * arg: size (default is standard)
***
*/
if (!function_exists('xidipity_icon_closed'))
{
    function xidipity_icon_closed($arg='')
    {
        $ret_val = '';
        switch ($arg)
        {
            case 'fnt:size-small':
                $ret_val = '<svg style="width:1.125rem;height:1.125rem;display:inline;padding-bottom:4px;" viewBox="0 0 24 24"><path fill="currentColor" d="M15.46 15.88L16.88 14.46L19 16.59L21.12 14.47L22.54 15.88L20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.54L15.46 20.12L17.59 18L15.47 15.88M12 3C17.5 3 22 6.58 22 11C22 11.58 21.92 12.14 21.78 12.68C20.95 12.25 20 12 19 12C15.69 12 13 14.69 13 18L13.08 18.95L12 19C10.76 19 9.57 18.82 8.47 18.5C5.55 21 2 21 2 21C4.33 18.67 4.7 17.1 4.75 16.5C3.05 15.07 2 13.14 2 11C2 6.58 6.5 3 12 3Z" /></svg>';
                break;

            default:
                $ret_val = '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M15.46 15.88L16.88 14.46L19 16.59L21.12 14.47L22.54 15.88L20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.54L15.46 20.12L17.59 18L15.47 15.88M12 3C17.5 3 22 6.58 22 11C22 11.58 21.92 12.14 21.78 12.68C20.95 12.25 20 12 19 12C15.69 12 13 14.69 13 18L13.08 18.95L12 19C10.76 19 9.57 18.82 8.47 18.5C5.55 21 2 21 2 21C4.33 18.67 4.7 17.1 4.75 16.5C3.05 15.07 2 13.14 2 11C2 6.58 6.5 3 12 3Z" /></svg>';
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_arrow_lt
    * dsc: circle arrow left
    * ver: 200422
    * fnt: return arrow icon
    * arg: size (default is standard)
***
*/
if (!function_exists('xidipity_icon_arrow_lt'))
{
    function xidipity_icon_arrow_lt($arg='')
    {
        $ret_val = '';
        switch ($arg)
        {
            case 'fnt:size-small':
                $ret_val = '<svg style="width:1.125rem;height:1.125rem;display:inline;padding-bottom:4px;" viewBox="0 0 24 24"><path fill="currentColor" d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" /></svg>';
                break;

            default:
                $ret_val = '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" /></svg>';
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_archive
    * dsc: calendar
    * ver: 200422
    * fnt: return font awesome calendar icon
    * ref: https://fontawesome.com/icons/calendar-alt?style=regular
***
*/
if (!function_exists('xidipity_icon_archive'))
{
    function xidipity_icon_archive()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg>';
    }
}

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
        return '<i class="far fa-calendar-alt"></i>';
    }
}

/*
***
    * ico: xidipity_icon_question
    * dsc: question mark
    * ver: 200315
    * fnt: return font awesome calendar icon
    * ref: https://fontawesome.com/icons/question-circle?style=solid
***
*/
if (!function_exists('xidipity_icon_question'))
{
    function xidipity_icon_question()
    {
            return '<i class="fas fa-question-circle"></i>';
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
            return '<i class="fas fa-tags"></i>';
    }
}

/*
***
    * ico: xidipity_icon_comment
    * dsc: post comment
    * ver: 200422
    * fnt: return post comment icon
    * ref:
***
*/
if (!function_exists('xidipity_icon_comment'))
{
    function xidipity_icon_comment()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" /></svg>';
    }
}

/*
***
    * ico: xidipity_icon_comments
    * dsc: post comments
    * ver: 200422
    * fnt: return post comments icon
    * ref:
***
*/
if (!function_exists('xidipity_icon_comments'))
{
    function xidipity_icon_comments()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z" /></svg>';
    }
}

/*
***
    * ico: xidipity_icon_x_comments
    * dsc: post comments closed
    * ver: 200422
    * fnt: return post comments closed icon
    * ref:
***
*/
if (!function_exists('xidipity_icon_x_comments'))
{
    function xidipity_icon_x_comments()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M9.41,6L8,7.41L10.59,10L8,12.59L9.41,14L12,11.41L14.59,14L16,12.59L13.41,10L16,7.41L14.59,6L12,8.59L9.41,6Z" /></svg>';
    }
}

/*
***
    * ico: xidipity_icon_tag
    * dsc: post tag
    * ver: 200422
    * fnt: return post tag icon
    * ref:
***
*/
if (!function_exists('xidipity_icon_tag'))
{
    function xidipity_icon_tag()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z" /></svg>';
    }
}

/*
***
    * ico: xidipity_icon_pdate
    * dsc: post date
    * ver: 200422
    * fnt: return post date icon
    * ref:
***
*/
if (!function_exists('xidipity_icon_pdate'))
{
    function xidipity_icon_pdate()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H10V19H5V8H19V9H21V5A2,2 0 0,0 19,3M21.7,13.35L20.7,14.35L18.65,12.35L19.65,11.35C19.85,11.14 20.19,11.13 20.42,11.35L21.7,12.63C21.89,12.83 21.89,13.15 21.7,13.35M12,18.94L18.07,12.88L20.12,14.88L14.06,21H12V18.94Z" /></svg>';
    }
}

/*
***
    * ico: xidipity_icon_author
    * dsc: post author
    * ver: 200422
    * fnt: return author icon
    * ref:
***
*/
if (!function_exists('xidipity_icon_author'))
{
    function xidipity_icon_author()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>';
    }
}

/*
***
    * ico: xidipity_icon_sticky
    * dsc: sticky post
    * ver: 200422
    * fnt: return sticky icon
    * ref: https://fontawesome.com/icons/thumbtack?style=regular
***
*/
if (!function_exists('xidipity_icon_sticky'))
{
    function xidipity_icon_sticky()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21M12,15H7V17H12M17,7H7V9H17" /></svg>';
    }
}

/*
***
    * ico: xidipity_icon_bm
    * dsc: bookmark
    * ver: 200422
    * fnt: return bookmark icon
    * ref: https://fontawesome.com/icons/bookmark?style=regular
***
*/
if (!function_exists('xidipity_icon_bm'))
{
    function xidipity_icon_bm()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>';
    }
}

/*
***
    * ico: xidipity_icon_uncategorized
    * dsc: uncategorized
    * ver: 200429
    * fnt: return uncategorized icon
    * ref: https://fontawesome.com/icons/bookmark?style=regular
***
*/
if (!function_exists('xidipity_icon_uncategorized'))
{
    function xidipity_icon_uncategorized()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M22,17V19H14V17H22M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z" /></svg>';
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
            return '<i class="far fa-file-image"></i>';
    }
}

/*
***
    * ico: xidipity_icon_edit
    * dsc: content footer edit icon
    * ver: 200422
    * fnt: return edit icon
    * ref: https://fontawesome.com/icons/edit?style=regular
***
*/
if (!function_exists('xidipity_icon_edit'))
{
    function xidipity_icon_edit()
    {
        return '<svg style="width:1.5rem;height:1.5rem;display:inline;padding-bottom:5px;" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z" /></svg>';
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
        return '<i class="far fa-lightbulb"></i>';
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
        return '<i class="far fa-sticky-note"></i>';
    }
}

/*
***
    * ico: xidipity_icon_pc
    * dsc: paperclip
    * ver: 200315
    * fnt: return font awesome file star icon
    * ref: https://fontawesome.com/icons/sticky-note?style=regular
***
*/
if (!function_exists('xidipity_icon_pc'))
{
    function xidipity_icon_pc()
    {
        return '<i class="fas fa-paperclip"></i>';
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
        return '<i class="far fa-star"></i>';
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
        return '<i class="fas fa-angle-left"></i>';
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
        return '<i class="fas fa-angle-right"></i>';
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
        return '<i class="far fa-comments"></i>';
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
        $args = array(
            'base'               => get_pagenum_link(1) . '%_%',
            'format'             => '/page/%#%',
            'total'              => abs($atts['pages']),
            'current'            => abs($atts['page']),
            'show_all'           => false,
            'end_size'           => 1,
            'mid_size'           => 2,
            'prev_next'          => true,
            'prev_text'          => '<i class="fas fa-chevron-left"></i>',
            'next_text'          => '<i class="fas fa-chevron-right"></i>',
            'type'               => 'plain',
            'add_args'           => false,
            'add_fragment'       => '',
            'before_page_number' => '',
            'after_page_number'  => ''
        );
        $html_retval  = '<div class="fx:r fxa:4 fxb:6 fxc:1 bg:bas-050 cnr:arch-small mar:vrt+0.25 pad:+0.5">';
        $html_retval .=  paginate_links($args);
        $html_retval .= '</div>';
        return $html_retval;
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
 * Build:   200429
 *
 */
?>
