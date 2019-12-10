<?php
/*
 * WordPress Xidipity PHP File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        xidipity functions definitions
 * File Name:       functions.php
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91108.1a
 * Revision:        2
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://developer.wordpress.org/themes/basics/theme-functions/
 *
 */

/**
 *  name: theme_cfg
 *  build: 90915.1b
 *  description: set global configuration defaults
 *
 */
function theme_cfg() {

    $xwt_file = get_template_directory() . '/xidipity-cfg.txt';
    
    if (file_exists($xwt_file)) {
        $xwt_prms = file_get_contents($xwt_file);
        $cfg_items = explode(',', $xwt_prms);
        foreach ($cfg_items as $cfg_item)
        {
            $xwt_prm = trim($cfg_item);
            if (!has_match($xwt_prm,'*'))
            {
                $cfg_key = trim(substr($xwt_prm,0,strpos($xwt_prm, '=')));
                $cfg_val = trim(substr($xwt_prm,strpos($xwt_prm, '=')+1));
                switch ($cfg_key)
                {
                    case 'fa-version':
                        update_option('xwt_fa_ver',$cfg_val);
                        break;
                    case 'hdr-height':
                        update_option('xwt_hdr_hgt',$cfg_val);
                        break;
                    case 'hdr-image':
                        $cfg_val = filter_var($cfg_val, FILTER_SANITIZE_URL);
                        if (filter_var($cfg_val, FILTER_VALIDATE_URL) == false)
                        {
                            $cfg_val = 'none';
                        }
                        update_option('xwt_hdr_img',$cfg_val);
                        break;
                    case 'hdr-logo':
                        $cfg_val = filter_var($cfg_val, FILTER_SANITIZE_URL);
                        if (filter_var($cfg_val, FILTER_VALIDATE_URL) == false)
                        {
                            $cfg_val = 'none';
                        }
                        update_option('xwt_hdr_logo',$cfg_val);
                        break;
                    case 'hdr-align':
                        if (!has_match('left/center/right',$cfg_val))
                        {
                            $cfg_val = 'center';
                        }
                        update_option('xwt_hdr_align',$cfg_val);
                        break;
                    case 'ftr-align':
                        if (!has_match('left/center/right',$cfg_val))
                        {
                            $cfg_val = 'center';
                        }
                        update_option('xwt_ftr_align',$cfg_val);
                        break;
                    case 'mnu-display':
                        if (!has_match('no/yes',$cfg_val))
                        {
                            $cfg_val = 'yes';
                        }
                        update_option('xwt_menu_disp',$cfg_val);
                        break;
                    case 'mnu-width':
                        if (!has_match('70%/75%/80%/85%/90%/95%/100%',$cfg_val))
                        {
                            $cfg_val = '100%';
                        }
                        update_option('xwt_menu_width',$cfg_val);
                        break;
                    case 'mnu-align':
                        if (!has_match('left/center/right',$cfg_val))
                        {
                            $cfg_val = 'center';
                        }
                        update_option('xwt_mnu_align',$cfg_val);
                        break;
                    case 'sb-display':
                        if (!has_match('no/yes',$cfg_val))
                        {
                            $cfg_val = 'yes';
                        }
                        update_option('xwt_sidebar_disp',$cfg_val);
                        break;
                    case 'sb-align':
                        if (!has_match('left/right',$cfg_val))
                        {
                            $cfg_val = 'right';
                        }
                        update_option('xwt_sidebar_align',$cfg_val);
                        break;
                    case 'emoji-display':
                        if (!has_match('no/yes',$cfg_val))
                        {
                            $cfg_val = 'yes';
                        }
                        update_option('xwt_emoji_dsp',$cfg_val);
                        break;
                }
            }
        }
    }
    return;
}

/**
 *  name: fa_ver
 *  build: 90915.1b
 *  description: get font awesome version
 */
function fa_ver()
{
    /*: return db value :*/
    return get_option('xwt_fa_ver');
}

/**
 *  name: hdr_hgt
 *  build: 90925.1a
 *  description: get page header height
 */
function hdr_hgt()
{
    /*: return db value :*/
    return get_option('xwt_hdr_hgt');
}

/**
 *  name: hdr_img
 *  build: 90925.1a
 *  description: get page header image
 */
function hdr_img()
{
    /*: return db value :*/
    return get_option('xwt_hdr_img');
}

/**
 *  name: hdr_logo
 *  build: 90925.1a
 *  description: get page header logo
 */
function hdr_logo()
{
    /*: return db value :*/
    return get_option('xwt_hdr_logo');
}

/**
 *  name: hdr_align
 *  build: 90925.1a
 *  description: get page header alignment
 */
function hdr_align()
{
    /*: return db value :*/
    return get_option('xwt_hdr_align');
}

/**
 *  name: ftr_align
 *  build: 90925.1a
 *  description: get page footer alignment
 */
function ftr_align()
{
    /*: return db value :*/
    return get_option('xwt_ftr_align');
}

/**
 *  name: mnu_width
 *  build: 90920.1a
 *  description: get menu width
 */
function mnu_width()
{
    /*: return db value :*/
    return get_option('xwt_menu_width');
}
 
/**
 *  name: emoji_dsp
 *  build: 90929.1a
 *  description: get emoji display option
 */
function emoji_dsp()
{
    /*: return db value :*/
    return get_option('xwt_emoji_dsp');
}

/**
 *  name: mnu_align
 *  build: 90920.1a
 *  description: get menu alignment
 */
function mnu_align()
{
    /*: return db value :*/
    return get_option('xwt_mnu_align');
}
 
/**
 *  name: disp_menu
 *  build: 90915.1b
 *  description: set / get display menu flag
 *  attributes:
 *      $attr - string
 *
 */
function disp_menu($attr='')
{
    $fn_val = '';
    /*: get value :*/
    $db_val = get_option('xwt_menu_disp');
    if (empty($attr))
    {
        if (empty($db_val))
        {
            /*: set default :*/
            update_option('xwt_menu_disp','yes');
            $fn_val = 'yes';
        }
        elseif ($db_val == 'dftno')
        {
            /*: default override :*/
            $fn_val = 'no';
        }
        elseif ($db_val == 'dftyes')
        {
            /*: default override :*/
            $fn_val = 'yes';
        }
        else
        {
            /*: get value :*/
            $fn_val = $db_val;
        }
    }
    else
    {
        $db_val = strtolower($attr);
        if (!has_match($db_val,'dft') && has_match('no,yes',$db_val))
        {
            /*: set value :*/
            update_option('xwt_menu_disp',$db_val);
        }
    }
    return $fn_val;
}
 
/**
 *  name: disp_sidebar
 *  build: 90915.1b
 *  description: set / get display sidebar flag
 *  attributes:
 *      $attr - string
 *
 */
function disp_sidebar($attr='')
{
    $fn_val = '';
    /*: get value :*/
    $db_val = get_option('xwt_sidebar_disp');
    if (empty($attr))
    {
        if (empty($db_val))
        {
            /*: set default :*/
            update_option('xwt_sidebar_disp','yes');
            $fn_val = 'yes';
        }
        elseif ($db_val == 'dftno')
        {
            /*: default override :*/
            $fn_val = 'no';
        }
        elseif ($db_val == 'dftyes')
        {
            /*: default override :*/
            $fn_val = 'yes';
        }
        else
        {
            /*: get value :*/
            $fn_val = $db_val;
        }
    }
    else
    {
        $db_val = strtolower($attr);
        if (!has_match($db_val,'dft') && has_match('no,yes',$db_val))
        {
            /*: set value :*/
            update_option('xwt_sidebar_disp',$db_val);
        }
    }
    return $fn_val;
}
 
/**
 *  name: align_sidebar
 *  build: 90915.1b
 *  description: set / get sidebar alignment flag
 *  attributes:
 *      $attr - string
 *
 */
function align_sidebar($attr='')
{
    $fn_val = '';
    /*: get value :*/
    $db_val = get_option('xwt_sidebar_align');
    if (empty($attr))
    {
        if (empty($db_val))
        {
            /*: set default :*/
            update_option('xwt_sidebar_align','right');
            $fn_val = 'right';
        }
        else
        {
            /*: get value :*/
            $fn_val = $db_val;
        }
    }
    else
    {
        $db_val = strtolower($attr);
        if (has_match('left,right',$db_val)) {
            /*: set value :*/
            update_option('xwt_sidebar_align',$db_val);
        }
    }
    return $fn_val;
}

/**
 *  name: err_msg
 *  build: 90901.1a
 *  description: set / get error message
 *  attributes:
 *      $attr - string
 *
 */
function err_msg($attr='')
{
    global $xwt_err_msg;
    $fn_val = '';
    if (!isset($xwt_err_msg))
    {
        $xwt_err_msg = '';
    }
    if (empty($attr))
    {
        $fn_val = $xwt_err_msg;
        /*: report & clear :*/
        $xwt_err_msg = '';
    }
    else
    {
        $xwt_err_msg = $attr;
    }
    return $fn_val;
}

/**
 *  name: has_match
 *  build: 90915.1b
 *  description: is needle in haystack
 *  attributes:
 *      $haystack - string
 *      $needle - string
 *  returns:
 *      nothing (error)
 *      true / false
 */

function has_match($haystack='', $needle='')
{
    if (empty($haystack) || empty($needle))
    {
        $fn_val='';
    }
    else
    {
        $fn_val=false;
        $haystack = strwrap($haystack,'#');
        if (strpos($haystack,$needle) > 0)
        {
            $fn_val=true;
        }
    }
    return $fn_val;
}

/**
 *  name: strwrap
 *  build: 90915.1b
 *  description: add chr(s) to beginning & end of string
 *  attributes:
 *      $str - string
 *      $wrap - string
 *  returns:
 *      string
 */
function strwrap( $str='', $first='', $last='' )
{
    $fn_val = '';
    if (!empty($str))
    {
        if (empty($first) && empty($last))
        {
            $first = '"';
            $last = '"';
        }
        elseif (empty($last))
        {
            $last = $first;
        }
        $fn_val = $first . trim($str) . $last;
    }
    return $fn_val;
}

/**
 *  name: blog_copyright
 *  build: 90925.1a
 *  description: return copyright
 *  url: https://www.wpbeginner.com/wp-tutorials/how-to-add-a-dynamic-copyright-date-in-wordpress-footer/
 *
 */
function blog_copyright() {
    global $wpdb;
    $db_val = $wpdb->get_results("
    SELECT
        YEAR(min(post_date_gmt)) AS firstdate,
        YEAR(max(post_date_gmt)) AS lastdate
        FROM
        $wpdb->posts
    WHERE
        post_status = 'publish'
    ");
    $fn_val = '';
    if($db_val)
    {
        $fn_copyright = "&copy; " . $db_val[0]->firstdate;
        if($db_val[0]->firstdate != $db_val[0]->lastdate)
        {
            $fn_copyright .= '-' . $db_val[0]->lastdate;
        }
        $fn_val = $fn_copyright;
    }
    return $fn_val;
}

/**
 *  name: c_walker
 *  build: 90728.1
 *  description: category walker extension to support font awesome icons
 *  functions:
 *      $atts - array
 *  doc: https://xidipity.com/reference/source-code/shortcodes/c_walker/
 *
 */
class c_walker extends Walker
{
    public $tree_type = 'category';
    public $db_fields = array(
        'parent' => 'parent',
        'id' => 'term_id'
    );
    public function start_lvl(&$output, $depth = 0, $args = array())
    {
        $output .= '<ul class="' . $args['class'] . '">' . "\n";
    }
    public function end_lvl(&$output, $depth = 0, $args = array())
    {
        $output .= '</ul>' . "\n";
    }
    public function start_el(&$output, $category, $depth = 0, $args = array() , $current_object_id = 0)
    {
        $output .= '<li>' . $args['link_before'] . $category->name . "\n";
    }
    public function end_el(&$output, $category, $depth = 0, $args = array())
    {
        $output .= $args['link_after'] . '</li>' . "\n";
    }
}
/**
 *  name: p_walker
 *  build: 90728.1
 *  description: page list walker extension to support font awesome icons
 *  functions:
 *      $args - array
 *    $output - html
 *     $depth - numeric
 *  doc: https://xidipity.com/reference/source-code/shortcodes/p_walker/
 *
 */
class p_walker extends Walker
{
    /**
     * What the class handles.
     *
     * @since 2.1.0
     * @var string
     *
     * @see Walker::$tree_type
     */
    public $tree_type = 'page';
    /**
     * Database fields to use.
     *
     * @since 2.1.0
     * @var array
     *
     * @see Walker::$db_fields
     * @todo Decouple this.
     */
    public $db_fields = array(
        'parent' => 'post_parent',
        'id' => 'ID',
    );
    /**
     * Outputs the beginning of the current level in the tree before elements are output.
     *
     * @since 2.1.0
     *
     * @see Walker::start_lvl()
     *
     * @param string $output Used to append additional content (passed by reference).
     * @param int    $depth  Optional. Depth of page. Used for padding. Default 0.
     * @param array  $args   Optional. Arguments for outputting the next level.
     *                       Default empty array.
     */
    public function start_lvl(&$output, $depth = 0, $args = array())
    {
        if (isset($args['item_spacing']) && 'preserve' === $args['item_spacing'])
        {
            $t = "\t";
            $n = "\n";
        }
        else
        {
            $t = '';
            $n = '';
        }
        $indent = str_repeat($t, $depth);
        $output .= "{$n}{$indent}<ul class='children " . $args['class'] . "'>{$n}";
    }
    /**
     * Outputs the end of the current level in the tree after elements are output.
     *
     * @since 2.1.0
     *
     * @see Walker::end_lvl()
     *
     * @param string $output Used to append additional content (passed by reference).
     * @param int    $depth  Optional. Depth of page. Used for padding. Default 0.
     * @param array  $args   Optional. Arguments for outputting the end of the current level.
     *                       Default empty array.
     */
    public function end_lvl(&$output, $depth = 0, $args = array())
    {
        if (isset($args['item_spacing']) && 'preserve' === $args['item_spacing'])
        {
            $t = "\t";
            $n = "\n";
        }
        else
        {
            $t = '';
            $n = '';
        }
        $indent = str_repeat($t, $depth);
        $output .= "{$indent}</ul>{$n}";
    }
    /**
     * Outputs the beginning of the current element in the tree.
     *
     * @see Walker::start_el()
     * @since 2.1.0
     *
     * @param string  $output       Used to append additional content. Passed by reference.
     * @param WP_Post $page         Page data object.
     * @param int     $depth        Optional. Depth of page. Used for padding. Default 0.
     * @param array   $args         Optional. Array of arguments. Default empty array.
     * @param int     $current_page Optional. Page ID. Default 0.
     */
    public function start_el(&$output, $page, $depth = 0, $args = array() , $current_page = 0)
    {
        if (isset($args['item_spacing']) && 'preserve' === $args['item_spacing'])
        {
            $t = "\t";
            $n = "\n";
        }
        else
        {
            $t = '';
            $n = '';
        }
        if ($depth)
        {
            $indent = str_repeat($t, $depth);
        }
        else
        {
            $indent = '';
        }
        $css_class = array(
            'page_item',
            'page-item-' . $page->ID
        );
        if (isset($args['pages_with_children'][$page->ID]))
        {
            $css_class[] = 'page_item_has_children';
        }
        if (!empty($current_page))
        {
            $_current_page = get_post($current_page);
            if ($_current_page && in_array($page->ID, $_current_page->ancestors))
            {
                $css_class[] = 'current_page_ancestor';
            }
            if ($page->ID == $current_page)
            {
                $css_class[] = 'current_page_item';
            }
            elseif ($_current_page && $page->ID == $_current_page->post_parent)
            {
                $css_class[] = 'current_page_parent';
            }
        }
        elseif ($page->ID == get_option('page_for_posts'))
        {
            $css_class[] = 'current_page_parent';
        }
        /**
         * Filters the list of CSS classes to include with each page item in the list.
         *
         * @since 2.8.0
         *
         * @see wp_list_pages()
         *
         * @param string[] $css_class    An array of CSS classes to be applied to each list item.
         * @param WP_Post  $page         Page data object.
         * @param int      $depth        Depth of page, used for padding.
         * @param array    $args         An array of arguments.
         * @param int      $current_page ID of the current page.
         */
        $css_classes = implode(' ', apply_filters('page_css_class', $css_class, $page, $depth, $args, $current_page));
        $css_classes = $css_classes ? ' class="' . esc_attr($css_classes) . '"' : '';
        if ('' === $page->post_title)
        {
            /* translators: %d: ID of a post */
            $page->post_title = sprintf(__('#%d (no title)') , $page->ID);
        }
        $args['link_before'] = empty($args['link_before']) ? '' : $args['link_before'];
        $args['link_after'] = empty($args['link_after']) ? '' : $args['link_after'];
        $atts = array();
        $atts['href'] = get_permalink($page->ID);
        $atts['aria-current'] = ($page->ID == $current_page) ? 'page' : '';
        /**
         * Filters the HTML attributes applied to a page menu item's anchor element.
         *
         * @since 4.8.0
         *
         * @param array $atts {
         *     The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored.
         *
         *     @type string $href         The href attribute.
         *     @type string $aria_current The aria-current attribute.
         * }
         * @param WP_Post $page         Page data object.
         * @param int     $depth        Depth of page, used for padding.
         * @param array   $args         An array of arguments.
         * @param int     $current_page ID of the current page.
         */
        $atts = apply_filters('page_menu_link_attributes', $atts, $page, $depth, $args, $current_page);
        $attributes = '';
        foreach ($atts as $attr => $value)
        {
            if (!empty($value))
            {
                $value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }
        $output .= $indent . sprintf('<li%s><a%s>%s%s%s</a>', $css_classes, $attributes, $args['link_before'],
        /** This filter is documented in wp-includes/post-template.php */
        apply_filters('the_title', $page->post_title, $page->ID) , $args['link_after']);
        if (!empty($args['show_date']))
        {
            if ('modified' == $args['show_date'])
            {
                $time = $page->post_modified;
            }
            else
            {
                $time = $page->post_date;
            }
            $date_format = empty($args['date_format']) ? '' : $args['date_format'];
            $output .= ' ' . mysql2date($date_format, $time);
        }
    }
    /**
     * Outputs the end of the current element in the tree.
     *
     * @since 2.1.0
     *
     * @see Walker::end_el()
     *
     * @param string  $output Used to append additional content. Passed by reference.
     * @param WP_Post $page   Page data object. Not used.
     * @param int     $depth  Optional. Depth of page. Default 0 (unused).
     * @param array   $args   Optional. Array of arguments. Default empty array.
     */
    public function end_el(&$output, $page, $depth = 0, $args = array())
    {
        if (isset($args['item_spacing']) && 'preserve' === $args['item_spacing'])
        {
            $t = "\t";
            $n = "\n";
        }
        else
        {
            $t = '';
            $n = '';
        }
        $output .= "</li>{$n}";
    }
}
if (!function_exists('xidipity_setup')):
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function xidipity_setup()
    {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on xidipity, use a find and replace
         * to change 'xidipity' to the name of your theme in all the template files
        */
        load_theme_textdomain('xidipity', get_template_directory() . '/languages');
        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');
        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
        */
        add_theme_support('title-tag');
        /*
         * Enable support for custom logo.
         *
         * @see https://developer.wordpress.org/reference/functions/add_theme_support/#custom-logo
        */
        add_theme_support('custom-logo', array(
            'height' => 100,
            'width' => 360,
            'flex-height' => true,
            'flex-width' => true,
            'header-text' => array(
                'site-title',
                'site-description'
            )
        ));
        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
        */
        add_theme_support('post-thumbnails');
        // Theme Image Sizes
        add_image_size('xidipity-featured', 960, 720, true);
        // This theme uses wp_nav_menu() in four locations.
        register_nav_menus(array(
            'primary' => esc_html__('Primary Menu', 'xidipity')
        ));
        /*
         * Registers an editor stylesheet for the theme.
         * https://developer.wordpress.org/reference/functions/add_editor_style/
        */
		// Add support for editor styles.
		add_theme_support( 'editor-styles' );
        
        $ed_css1 = 'style.css';
        $ed_css2 = '/assets/css/sys/theme-vars.css';
        $ed_css3 = '/assets/css/theme/palette.css';
        $ed_css4 = '/assets/css/theme/common.css';
        $ed_css5 = '/assets/css/theme/advance.css';
        $ed_css6 = 'https://fonts.googleapis.com/icon?family=Material+Icons';
        $ed_css7 = 'https://use.fontawesome.com/releases/v' . fa_ver() . '/css/all.css';
        $ed_css8 = 'https://fonts.googleapis.com/css?family=Kalam:300,400,700|Kaushan+Script|Roboto+Condensed:300,400,700,|Roboto+Mono|Roboto+Slab:100,300,400,700|Roboto:100,300,400,500,700,900,&display=swap';
        $ed_css9 = '/assets/css/style/editor.css';

        $ed_styles = array( $ed_css1, $ed_css2, $ed_css3, $ed_css4, $ed_css5, $ed_css6, $ed_css7, $ed_css8, $ed_css9 );
        add_editor_style( $ed_styles );

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
        */
        add_theme_support('html5', array(
            'comment-form',
            'comment-list',
            'gallery',
            'caption'
        ));
        // Setup the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('xidipity_custom_background_args', array(
            'default-color' => 'f2f2f0',
            'default-image' => ''
        )));
        
        /**
         *  name: customization
         *  build: 90925.1a
         *  description: remove customization menubar option
         */
        add_action( 'admin_bar_menu', 'remove_some_nodes_from_admin_top_bar_menu', 999 );
        function remove_some_nodes_from_admin_top_bar_menu( $wp_admin_bar ) {
            $wp_admin_bar->remove_menu( 'customize' );
        }
        
        /**
         *  name: configuration
         *  build: 90925.1a
         *  description: read configuration file
         */
        theme_cfg();
        
        /**
         *  name: emoji_dsp
         *  build: 90929.1a
         *  description: disable emoji prefetch
         */
        if (emoji_dsp() == 'no')
        {
            add_filter( 'emoji_svg_url', '__return_false' );
        }
    }
    
endif; // xidipity_setup
add_action('after_setup_theme', 'xidipity_setup');
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function xidipity_content_width()
{
    $GLOBALS['content_width'] = apply_filters('xidipity_content_width', 317);
}
add_action('after_setup_theme', 'xidipity_content_width', 0);
/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function xidipity_widgets_init()
{
    // Widget Areas
    register_sidebar(array(
        'name' => esc_html__('Main Sidebar', 'xidipity') ,
        'id' => 'sidebar-1',
        'before_widget' => '<aside class="fx:sb-ct-itm fx:sb-ct-opt fx:shadow"><div class="fx:sb-itm-opt">',
        'after_widget' => '</div></aside>',
        'before_title' => '<p class="fx:sb-widget-ti">',
        'after_title' => '</p>'
    ));
}
add_action('widgets_init', 'xidipity_widgets_init');
/**
 * Enqueue scripts and styles.
 */
function xidipity_scripts()
{
    /*: googlefonts.css :*/
    wp_enqueue_style('xidipity-googlefonts', 'https://fonts.googleapis.com/css?family=Kalam:300,400,700|Kaushan+Script|Roboto+Condensed:300,400,700,|Roboto+Mono|Roboto+Slab:100,300,400,700|Roboto:100,300,400,500,700,900,&display=swap', array() , wp_get_theme()->get('Version') , 'all');
    /*: style.css :*/
    wp_enqueue_style('xidipity-style', get_stylesheet_uri());
    /*: xidipity css :*/
    wp_enqueue_style('xidipity-print-var', get_stylesheet_directory_uri() . '/assets/css/sys/print-vars.css', array() , wp_get_theme()
        ->get('Version') , 'print');
    wp_enqueue_style('xidipity-theme-var', get_stylesheet_directory_uri() . '/assets/css/sys/theme-vars.css', array() , wp_get_theme()
        ->get('Version') , 'screen');
    wp_enqueue_style('xidipity-common', get_stylesheet_directory_uri() . '/assets/css/theme/common.css', array() , wp_get_theme()
        ->get('Version') , 'all');
    wp_enqueue_style('xidipity-palette', get_stylesheet_directory_uri() . '/assets/css/theme/palette.css', array() , wp_get_theme()
        ->get('Version') , 'all');
    wp_enqueue_style('xidipity-print', get_stylesheet_directory_uri() . '/assets/css/theme/print.css', array() , wp_get_theme()
        ->get('Version') , 'print');
    wp_enqueue_style('xidipity-advance', get_stylesheet_directory_uri() . '/assets/css/theme/advance.css', array() , wp_get_theme()
        ->get('Version') , 'all');
    wp_enqueue_style('xidipity-web', get_stylesheet_directory_uri() . '/assets/css/theme/web.css', array() , wp_get_theme()
        ->get('Version') , 'all');
    /*: fontawesome css :*/
    // version set @ fa_ver
    wp_enqueue_style('xidipity-font-awesome', 'https://use.fontawesome.com/releases/v' . fa_ver() . '/css/all.css', array() , fa_ver(), 'all');
    /*: google material design icons :*/
    wp_enqueue_style('xidipity-md-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', array() , wp_get_theme()
        ->get('Version') , 'all');
    /*: clipboard js :*/
    wp_enqueue_script('xidipity-clipboardjs', 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.1/clipboard.min.js', array() , '2.0.1', false);
    /*: sweet alert js :*/
    wp_enqueue_script('xidipity-sweetalert', 'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js', array() , '2.1.2', false);
    /*: comment reply ? :*/
    if (is_singular() && comments_open() && get_option('thread_comments'))
    {
        wp_enqueue_script('comment-reply');
    }
    /*: keyboard image navigation ? :*/
    if (is_singular() && wp_attachment_is_image())
    {
        wp_enqueue_script('xidipity-keyboard-image-navigation', get_template_directory_uri() . '/assets/js/keyboard-image-navigation.js', array(
            'jquery'
        ) , '20140127', true);
    }
}
add_action('wp_enqueue_scripts', 'xidipity_scripts');
/**
 * Add Categories for Attachments
 */
function add_categories_for_attachments()
{
    register_taxonomy_for_object_type('category', 'attachment');
}
add_action('init', 'add_categories_for_attachments');
/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';
/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';
/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';
/**
 * Customizer additions.
 */
//require get_template_directory() . '/inc/customizer.php';
/**
 * Short code additions.
 */
require get_template_directory() . '/inc/shortcodes.php';
/**
 * Add the TinyMCE Table Plugin.
 *
 */
function add_the_table_button($buttons)
{
    array_push($buttons, 'separator', 'table');
    return $buttons;
}
add_filter('mce_buttons', 'add_the_table_button');
function add_the_table_plugin($plugins)
{
    $plugins['table'] = get_template_directory_uri() . '/assets/tinymceplugins/table/plugin.js';
    return $plugins;
}
add_filter('mce_external_plugins', 'add_the_table_plugin');
/**
 * Add the TinyMCE Embed Plugin.
 *
 */
add_action('admin_head', 'mce_add_embed_button');
function mce_add_embed_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_embed_plugin");
        add_filter('mce_buttons', 'register_mce_embed_button');
    }
}
function add_tinymce_embed_plugin($plugin_array)
{
    $plugin_array['embed'] = get_template_directory_uri() . '/assets/tinymceplugins/embed/plugin.js';
    return $plugin_array;
}
function register_mce_embed_button($buttons)
{
    array_push($buttons, "embed");
    return $buttons;
}
/**
 * Add the TinyMCE two columns Plugin.
 *
 */
add_action('admin_head', 'mce_add_twocol_button');
function mce_add_twocol_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_twocol_plugin");
        add_filter('mce_buttons', 'register_mce_twocol_button');
    }
}
function add_tinymce_twocol_plugin($plugin_array)
{
    $plugin_array['twocolumn'] = get_template_directory_uri() . '/assets/tinymceplugins/twocolumn/plugin.js';
    return $plugin_array;
}
function register_mce_twocol_button($buttons)
{
    array_push($buttons, "twocolumn");
    return $buttons;
}
/**
 * Add the TinyMCE excerpt Plugin.
 *
 *
 */
add_action('admin_head', 'mce_add_excerpt_button');
function mce_add_excerpt_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_excerpt_plugin");
        add_filter('mce_buttons', 'register_mce_excerpt_button');
    }
}
function add_tinymce_excerpt_plugin($plugin_array)
{
    $plugin_array['excerpt'] = get_template_directory_uri() . '/assets/tinymceplugins/excerpt/plugin.js';
    return $plugin_array;
}
function register_mce_excerpt_button($buttons)
{
    array_push($buttons, "excerpt");
    return $buttons;
}
/**
 * Add the TinyMCE vspacer Plugin.
 *
 */
add_action('admin_head', 'mce_add_vspacer_button');
function mce_add_vspacer_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_vspacer_plugin");
        add_filter('mce_buttons', 'register_mce_vspacer_button');
    }
}
function add_tinymce_vspacer_plugin($plugin_array)
{
    $plugin_array['vspacer'] = get_template_directory_uri() . '/assets/tinymceplugins/vertspacers/plugin.js';
    return $plugin_array;
}
function register_mce_vspacer_button($buttons)
{
    array_push($buttons, "vspacer");
    return $buttons;
}
/**
 * Add the TinyMCE hrule Plugin.
 *
 */
add_action('admin_head', 'mce_add_hrule_button');
function mce_add_hrule_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_hrule_plugin");
        add_filter('mce_buttons', 'register_mce_hrule_button');
    }
}
function add_tinymce_hrule_plugin($plugin_array)
{
    $plugin_array['hrule'] = get_template_directory_uri() . '/assets/tinymceplugins/horzrule/plugin.js';
    return $plugin_array;
}
function register_mce_hrule_button($buttons)
{
    array_push($buttons, "hrule");
    return $buttons;
}
/**
 * Add the TinyMCE Align Plugin.
 *
 */
add_action('admin_head', 'mce_add_txtalign_button');
function mce_add_txtalign_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_txtalign_plugin");
        add_filter('mce_buttons', 'register_mce_txtalign_button');
    }
}
function add_tinymce_txtalign_plugin($plugin_array)
{
    $plugin_array['txtalign'] = get_template_directory_uri() . '/assets/tinymceplugins/align/plugin.js';
    return $plugin_array;
}
function register_mce_txtalign_button($buttons)
{
    array_push($buttons, "txtalign");
    return $buttons;
}
/**
 * Add the TinyMCE formats Plugin.
 *
 */
add_action('admin_head', 'mce_add_formats_button');
function mce_add_formats_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_formats_plugin");
        add_filter('mce_buttons', 'register_mce_formats_button');
    }
}
function add_tinymce_formats_plugin($plugin_array)
{
    $plugin_array['formats'] = get_template_directory_uri() . '/assets/tinymceplugins/formats/plugin.js';
    return $plugin_array;
}
function register_mce_formats_button($buttons)
{
    array_push($buttons, "formats");
    return $buttons;
}
/**
 * Add the TinyMCE font weights Plugin.
 *
 */
add_action('admin_head', 'mce_add_fntwgt_button');
function mce_add_fntwgt_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_fntwgt_plugin");
        add_filter('mce_buttons', 'register_mce_fntwgt_button');
    }
}
function add_tinymce_fntwgt_plugin($plugin_array)
{
    $plugin_array['fntwgt'] = get_template_directory_uri() . '/assets/tinymceplugins/fntwgt/plugin.js';
    return $plugin_array;
}
function register_mce_fntwgt_button($buttons)
{
    array_push($buttons, "fntwgt");
    return $buttons;
}
/**
 * Add the TinyMCE full screen Plugin.
 *
 */
add_action('admin_head', 'mce_add_xscreen_button');
function mce_add_xscreen_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_xscreen_plugin");
        add_filter('mce_buttons', 'register_mce_xscreen_button');
    }
}
function add_tinymce_xscreen_plugin($plugin_array)
{
    $plugin_array['xscreen'] = get_template_directory_uri() . '/assets/tinymceplugins/fullscreen/plugin.js';
    return $plugin_array;
}
function register_mce_xscreen_button($buttons)
{
    array_push($buttons, 'xscreen');
    return $buttons;
}
/**
 * Add the TinyMCE MnuSp Plugin.
 *
 */
add_action('admin_head', 'mce_add_mnusp_button');
function mce_add_mnusp_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_mnusp_plugin");
        add_filter('mce_buttons', 'register_mce_mnusp_button');
    }
}
function add_tinymce_mnusp_plugin($plugin_array)
{
    $plugin_array['mnusp'] = get_template_directory_uri() . '/assets/tinymceplugins/mnusp/plugin.js';
    return $plugin_array;
}
function register_mce_mnusp_button($buttons)
{
    array_push($buttons, 'mnusp');
    return $buttons;
}

/**
 * Add the TinyMCE ClrFmt Plugin.
 *
 */
add_action('admin_head', 'mce_add_clrfmt_button');
function mce_add_clrfmt_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_clrfmt_plugin");
        add_filter('mce_buttons', 'register_mce_clrfmt_button');
    }
}
function add_tinymce_clrfmt_plugin($plugin_array)
{
    $plugin_array['clrfmt'] = get_template_directory_uri() . '/assets/tinymceplugins/clrfmt/plugin.js';
    return $plugin_array;
}
function register_mce_clrfmt_button($buttons)
{
    array_push($buttons, 'clrfmt');
    return $buttons;
}

/**
 * Add the TinyMCE HiLite Plugin.
 *
 */
add_action('admin_head', 'mce_add_hilite_button');
function mce_add_hilite_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_hilite_plugin");
        add_filter('mce_buttons', 'register_mce_hilite_button');
    }
}
function add_tinymce_hilite_plugin($plugin_array)
{
    $plugin_array['hilite'] = get_template_directory_uri() . '/assets/tinymceplugins/hilite/plugin.js';
    return $plugin_array;
}
function register_mce_hilite_button($buttons)
{
    array_push($buttons, 'hilite');
    return $buttons;
}

/**
 * Add the TinyMCE UlList Plugin.
 *
 */
add_action('admin_head', 'mce_add_ullist_button');
function mce_add_ullist_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_ullist_plugin");
        add_filter('mce_buttons', 'register_mce_ullist_button');
    }
}
function add_tinymce_ullist_plugin($plugin_array)
{
    $plugin_array['ullist'] = get_template_directory_uri() . '/assets/tinymceplugins/ullist/plugin.js';
    return $plugin_array;
}
function register_mce_ullist_button($buttons)
{
    array_push($buttons, 'ullist');
    return $buttons;
}

/**
 * Add the TinyMCE OlList Plugin.
 *
 */
add_action('admin_head', 'mce_add_ollist_button');
function mce_add_ollist_button()
{
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
    {
        return;
    }
    // verify the post type
    if (!in_array($typenow, array(
        'post',
        'page'
    ))) return;
    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true')
    {
        add_filter("mce_external_plugins", "add_tinymce_ollist_plugin");
        add_filter('mce_buttons', 'register_mce_ollist_button');
    }
}
function add_tinymce_ollist_plugin($plugin_array)
{
    $plugin_array['ollist'] = get_template_directory_uri() . '/assets/tinymceplugins/ollist/plugin.js';
    return $plugin_array;
}
function register_mce_ollist_button($buttons)
{
    array_push($buttons, 'ollist');
    return $buttons;
}

/**
 * Change TinyMCE configuration
 *
 */
add_filter("tiny_mce_before_init", function ($in, $editor_id)
{
    $in['remove_linebreaks'] = false;
    $in['paste_remove_styles'] = true;
    $in['paste_remove_spans'] = true;
    $in['wpautop'] = false;
    $in['indent'] = true;
    $in['tadv_noautop'] = false;
    $in['apply_source_formatting'] = true;
    $in['menubar'] = '';
    // $in['toolbar1'] = 'undo,redo,formatselect,fontsizeselect,fntwgt,italic,formats,indent,outdent,forecolor,backcolor,bullist,numlist,link,unlink,blockquote,txtalign,hrule,vspacer,table,embed,twocolumn,excerpt,adsense,xscreen';
    // $in['toolbar1'] = 'undo,redo,formatselect,fontsizeselect,fntwgt,italic,formats,indent,outdent,forecolor,backcolor,bullist,numlist,link,unlink,blockquote,txtalign,hrule,vspacer,table,embed,twocolumn,excerpt,xscreen';
    $in['toolbar1'] = 'undo,redo,formatselect,fontsizeselect,mnusp,fntwgt,italic,formats,forecolor,hilite,clrfmt,mnusp,txtalign,vspacer,hrule,mnusp,ollist,ullist,indent,outdent,mnusp,blockquote,excerpt,link,unlink,table,twocolumn,embed,mnusp,xscreen';
    $in['toolbar2'] = '';
    $in['toolbar3'] = '';
    $in['toolbar4'] = '';
    $in['fontsize_formats'] = '12px 14px 16px 18px 20px 22px 24px 26px 30px 34px';
    $in['fontsize'] = '16px';
    $in['table_toolbar'] = '';
    $in['min_height'] = '375';
    $in['max_height'] = '450';
    $in['textcolor_map'] = '["000000", "Black", "212121", "Grey 9", "424242", "Grey 8", "616161", "Grey 7", "757575", "Grey 6", "d50000", "Red", "c51162", "Pink", "aa00ff", "Purple", "0a00b6", "Dark Purple", "304ffe", "Indigo", "2962ff", "Blue", "0091ea", "Light Blue", "0093BD", "Cyan", "009688", "Teal", "087f23", "Green", "689f38", "Light Green", "6c6f00", "Lime", "c17900", "Yellow", "ee6c03", "Amber", "ef6c00", "Orange", "a30000", "Dark Orange", "ffffff", "White", ]';
    $in['formats'] = "{wgt100: {inline: 'span',styles: {'font-weight': '100'}},wgt200: {inline: 'span',styles: {'font-weight': '200'}},wgt300: {inline: 'span',styles: {'font-weight': '300'}},wgt400: {inline: 'span',styles: {'font-weight': '400'}},wgt500: {inline: 'span',styles: {'font-weight': '500'}},wgt600: {inline: 'span',styles: {'font-weight': '600'}},wgt700: {inline: 'span',styles: {'font-weight': '700'}}}";
    $in['textcolor_cols'] = '5';
    return $in;
}
, 15, 2);
/**
 * Remove 'Colors' panel from the Customizer.
 *
 */
add_action("customize_register", "xidipity_theme_customize_register");
function xidipity_theme_customize_register($wp_customize)
{
    // =============================================================
    // Remove header image and widgets option from theme customizer
    // =============================================================
    // $wp_customize->remove_control("header_image");
    // $wp_customize->remove_panel("widgets");
    // =============================================================
    // Remove Colors, Background image, and Static front page
    // option from theme customizer
    // =============================================================
    $wp_customize->remove_section("colors");
    $wp_customize->remove_section("background_image");
    // $wp_customize->remove_section("static_front_page");
    
}
/**
 * Use tinymce to edit category descriptions
 *
 */
if (class_exists('WPSEO_Meta'))
{
    return;
}
/* remove the html filtering ----------
 -- */
remove_filter('pre_term_description', 'wp_filter_kses');
remove_filter('term_description', 'wp_kses_data');
/* new description box       ----------
 -- */
define('mce_cat_descrip', 'Category_Description_option');
add_filter('edit_category_form_fields', 'mce_cat_descrip');
function mce_cat_descrip($tag)
{
    $tag_extra_fields = get_option(mce_cat_descrip);
    echo '<table class="form-table">' . "\n";
    echo '<tr class="form-field">' . "\n";
    echo '<th scope="row" valign="top"><label for="description">' . _e('Description', 'categorytinymce') . '</label></th>' . "\n";
    echo '<td>' . "\n";
    $settings = array(
        'wpautop' => true,
        'media_buttons' => true,
        'quicktags' => true,
        'textarea_rows' => '15',
        'textarea_name' => 'description'
    );
    wp_editor(html_entity_decode($tag->description, ENT_QUOTES, 'UTF-8') , 'mce_cat_descrip', $settings);
    echo '<br />' . "\n";
    echo '<span class="description">' . _e('The description content supports full markup including icons.', 'categorytinymce') . '</span>' . "\n";
    echo '</td>' . "\n";
    echo '</tr>' . "\n";
    echo '</table>' . "\n";
}
add_action('admin_head', 'remove_default_category_description');
function remove_default_category_description()
{
    global $current_screen;
    if ($current_screen->id == 'edit-category')
    {
?>
        <script type="text/javascript">
        jQuery(function($) {
            $('textarea#description').closest('tr.form-field').remove();
        });
        </script>
    <?php
    }
}
/**
 *  name: dsp_err
 *  build: 91108.1a
 *  description: Return properly formatted error message
 *  attributes:
 *      $att - string
 *  ref:
 *
 */
function dsp_err($att = '')
{
    // system
    $fn_retval = '';
    // variables
    $v_msg = '';
    // atributes
    $a_msg = trim($att);
    if (empty($a_msg))
    {
        $v_msg = 'Error detected without an explanation';
    }
    else
    {
        $v_msg = $a_msg;
    }
    $fn_retval = '<!-- xwpt: 91108.1a/an/tmpl/warning         --><div class="bdr:bas-300 bdr:rounded bg:tint fa:1 fb:1 fc:5 fx:r pad:all-0.5"><div class="fd:1 fe:4 pad:left-0.25 pad:right-0.75"><i class="material-icons fnt:size-xx-large fg:red">notifications_active</i></div><div class="bdr:bas-400 bdr:left-solid-medium fd:2 fe:4 fnt:size-small pad:left-0.5"><p>' . __($v_msg) . '</p></div></div><!-- /xwpt: 91108.1a/an/tmpl/warning        -->';
    // return html
    return $fn_retval;
}
/**
 *  name: val_cat
 *  build: 90728.1
 *  description: Validate one or more wordpress categories
 *  attributes:
 *      $att_list - array
 *      $att_opt - numeric
 *  doc: https://xidipity.com/reference/source-code/functions/val_cat/
 *
 */
function val_cat($att_list, $att_opt)
{
    // system
    $fn_val = '';
    // variables
    $v_cat_lst = '';
    $v_cat_opt = '';
    $v_cat_sep = array(
        ".",
        "/",
        ":",
        ";",
        "|"
    );
    $v_lst_item = '';
    $v_lst_items = array();
    $v_tmp = '';
    // attributes
    $a_cat_lst = trim($att_list);
    $a_cat_opt = abs($att_opt);
    if (!empty($a_cat_lst))
    {
        if ($a_cat_opt == 1)
        {
            $v_cat_opt = '-';
        }
        $v_tmp = str_replace($v_cat_sep, ",", $a_cat_lst);
        // save to array
        $v_lst_items = explode(',', $v_tmp);
        foreach ($v_lst_items as $v_lst_item)
        {
            // alpha, numbers, _
            $v_tmp = preg_replace("/[^0-9a-zA-Z ]/", "", $v_lst_item);
            $wp_term = term_exists($v_tmp);
            if (0 !== $wp_term && null !== $wp_term)
            {
                $v_cat_lst .= $v_cat_opt . $wp_term . ',';
            }
        }
        $fn_val = substr($v_cat_lst, 0, -1);
    }
    // return string
    return $fn_val;
}
/**
 *  name: val_orby
 *  build: 90728.1
 *  description: Validate orderby database argument
 *  attributes:
 *      $att - string
 *  doc: https://xidipity.com/reference/source-code/functions/val_orby/
 *
 */
function val_orby($att)
{
    // system
    $fn_val = 'none';
    // variables
    $v_list = 'author,comment_count,date,id,menu_order,modified,name,none,parent,post_date,post_modified,post_parent,post_title,rand,relevance,title';
    $v_orderby = '';
    // arguments
    $a_orderby = trim($att);
    // sanitize attributes
    $v_orderby = strtolower($a_orderby);
    if (!empty($v_orderby))
    {
        if (strpos($v_list, $v_orderby) === false)
        {
            $fn_val = 'none';
        }
        else
        {
            $fn_val = $a_orderby;
            if ($fn_val == 'id')
            {
                $fn_val = 'ID';
            }
        }
    }
    // return string
    return $fn_val;
}
/**
 *  name: tpl_prg
 *  build: 91101.1
 *  description: Purge template default values (#?#)
 *  attributes:
 *      $att - string
 *  doc: https://xidipity.com/reference/source-code/functions/tpl_prg/
 *
 */
function tpl_prg($att='')
{
    // system
    $fn_val = '';
    // atributes
    $a_prm = trim($att);
    if (!empty($a_prm))
    {
        // No #?#
        if (substr_count($a_prm, '#') < 2)
        {
            $fn_val = $a_prm;
        }
    }
    // return string
    return $fn_val;
}
/**
 *  name: get_image_sizes
 *  build: 90728.1
 *  description: return reg image demensions
 *
 */
function get_image_sizes($size = '')
{
    global $_wp_additional_image_sizes;
    $sizes = array();
    $get_intermediate_image_sizes = get_intermediate_image_sizes();
    // Create the full array with sizes and crop info
    foreach ($get_intermediate_image_sizes as $_size)
    {
        if (in_array($_size, array(
            'thumbnail',
            'medium',
            'large'
        )))
        {
            $sizes[$_size]['width'] = get_option($_size . '_size_w');
            $sizes[$_size]['height'] = get_option($_size . '_size_h');
            $sizes[$_size]['crop'] = (bool)get_option($_size . '_crop');
        }
        elseif (isset($_wp_additional_image_sizes[$_size]))
        {
            $sizes[$_size] = array(
                'width' => $_wp_additional_image_sizes[$_size]['width'],
                'height' => $_wp_additional_image_sizes[$_size]['height'],
                'crop' => $_wp_additional_image_sizes[$_size]['crop']
            );
        }
    }
    // Get only 1 size if found
    if ($size)
    {
        if (isset($sizes[$size]))
        {
            return $sizes[$size];
        }
        else
        {
            return false;
        }
    }
    return $sizes;
}
/*
    eof: functions.php
*/
?>
