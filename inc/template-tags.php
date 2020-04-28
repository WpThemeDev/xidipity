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
    * SVG icon sizes
    *  h1      - svg:h1
    *  h2      - svg:h2
    *  h3      - svg:h3
    *  h4      - svg:h4
    *  h5      - svg:h5
    *  h6      - svg:h6
    *  large   - svg:large
    *  medium  - svg:medium (default font size)
    *  small   - svg:small
    *
    *  src: https://materialdesignicons.com/
    *
*/

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
    function xidipity_icon_archive($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_calendar
    * dsc: calendar
    * ver: 200206
    * fnt: return calendar icon
    * ref: materialdesignicons.com
***
*/
if (!function_exists('xidipity_icon_calendar'))
{
    function xidipity_icon_calendar($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_today
    * dsc: today calendar
    * ver: 200429
    * fnt: return today calendar icon
    * ref: materialdesignicons.com
***
*/
if (!function_exists('xidipity_icon_today'))
{
    function xidipity_icon_today($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_comment
    * dsc: post comment
    * ver: 200429
    * fnt: return post comment icon
    * ref:
***
*/
if (!function_exists('xidipity_icon_comment'))
{
    function xidipity_icon_comment($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_comments
    * dsc: post comments
    * ver: 200429
    * fnt: return post comments icon
    * ref:
***
*/
if (!function_exists('xidipity_icon_comments'))
{
    function xidipity_icon_comments($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z" /></svg>';
            }
        }
        return $ret_val;
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
    function xidipity_icon_x_comments($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M9.41,6L8,7.41L10.59,10L8,12.59L9.41,14L12,11.41L14.59,14L16,12.59L13.41,10L16,7.41L14.59,6L12,8.59L9.41,6Z" /></svg>';
        if (!empty($size))
        {
            $sizes = 'h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M9.41,6L8,7.41L10.59,10L8,12.59L9.41,14L12,11.41L14.59,14L16,12.59L13.41,10L16,7.41L14.59,6L12,8.59L9.41,6Z" /></svg>';
            }
        }
        return $ret_val;
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
    function xidipity_icon_tag($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_author
    * dsc: post author
    * ver: 200422
    * fnt: return author icon
    * ref: materialdesignicons.com/
***
*/
if (!function_exists('xidipity_icon_author'))
{
    function xidipity_icon_author($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_sticky
    * dsc: sticky post
    * ver: 200422
    * fnt: return sticky icon
    * ref: materialdesignicons.com/
***
*/
if (!function_exists('xidipity_icon_sticky'))
{
    function xidipity_icon_sticky($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21M12,15H7V17H12M17,7H7V9H17" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21M12,15H7V17H12M17,7H7V9H17" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_bm
    * dsc: bookmark
    * ver: 200422
    * fnt: return bookmark icon
    * ref: materialdesignicons.com/
***
*/
if (!function_exists('xidipity_icon_bm'))
{
    function xidipity_icon_bm($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_uncategorized
    * dsc: uncategorized
    * ver: 200429
    * fnt: return uncategorized icon
    * ref: materialdesignicons.com/
***
*/
if (!function_exists('xidipity_icon_uncategorized'))
{
    function xidipity_icon_uncategorized($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M22,17V19H14V17H22M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M22,17V19H14V17H22M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z" /></svg>';
            }
        }
        return $ret_val;
    }
}

/*
***
    * ico: xidipity_icon_edit
    * dsc: edit icon
    * ver: 200429
    * fnt: return sized edit icon
    * ref: materialdesignicons.com/
***
*/
if (!function_exists('xidipity_icon_edit'))
{
    function xidipity_icon_edit($arg='')
    {
        $size = strtolower($arg);
        $ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z" /></svg>';
        if (!empty($size))
        {
            $sizes ='h1,h2,h3,h4,h5,h6,large,small';
            if (has_match($sizes,$size))
            {
                $ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z" /></svg>';
            }
        }
        return $ret_val;
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

/*  # xidipity_date
    # 200429
    # display post
    #   ars
    #       cur = current (default)
    #       mix  = published / modified
    #       mod  = modified
    #       pub = published (default)
    # return date string
**/
if (!function_exists('xidipity_date'))
{
    function xidipity_date($arg='')
    {
        $cur = current_time(get_option('date_format'));
        $pub = get_the_date(get_option('date_format'));
        $mod = get_the_modified_time(get_option('date_format'));
        $fmt = strtolower($arg);
        switch ($fmt)
        {
            case 'pub':
                $date_retval = $pub;
            break;
            case 'mod':
                $date_retval = $mod;
            break;
            case 'mix':
                if ($pub !== $mod)
                {
                    $date_retval = $pub . ' / ' . $mod;
                }
                else
                {
                    $date_retval = $pub;                    
                }
            break;
            default:
                $date_retval = $cur;
        }
        return $date_retval;
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
