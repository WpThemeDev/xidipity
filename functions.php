<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       functions.php
 * Function:        xidipity functions definitions
 * Build:           200322
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         3.0
 * @since           0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/**
 *  global variables
 *  build: 200104-1
 *
 */

$global_dsp_menu = '';
$global_dsp_sidebar = '';

/**
 *  name: theme_cfg
 *  build: 190915.1b
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
                    case 'fav-icon':
                        $cfg_val = filter_var($cfg_val, FILTER_SANITIZE_URL);
                        if (filter_var($cfg_val, FILTER_VALIDATE_URL) == false)
                        {
                            $cfg_val = 'none';
                        }
                        define('XWT_FAV_ICO', $cfg_val);
                        update_option('XWT_FAV_ICO',$cfg_val);
                        break;
                    case 'fa-version':
                        define('XWT_FA_VER', $cfg_val);
                        break;
                    case 'hdr-height':
                        define('XWT_HDR_HGT', $cfg_val);
                        break;
                    case 'hdr-image':
                        $cfg_val = filter_var($cfg_val, FILTER_SANITIZE_URL);
                        if (filter_var($cfg_val, FILTER_VALIDATE_URL) == false)
                        {
                            $cfg_val = 'none';
                        }
						if (!has_match('.',$cfg_val))
                        {
                            $cfg_val = 'none';
                        }
                        define('XWT_HDR_IMG', $cfg_val);
                        break;
                    case 'hdr-logo':
                        $cfg_val = filter_var($cfg_val, FILTER_SANITIZE_URL);
                        if (filter_var($cfg_val, FILTER_VALIDATE_URL) == false)
                        {
                            $cfg_val = 'none';
                        }
						if (!has_match('.',$cfg_val))
                        {
                            $cfg_val = 'none';
                        }
                        define('XWT_HDR_LOGO', $cfg_val);
                        break;
                    case 'hdr-align':
                        if (!has_match('left/center/right',$cfg_val))
                        {
                            $cfg_val = 'center';
                        }
                        define('XWT_HDR_ALIGN', $cfg_val);
                        break;
                    case 'ftr-align':
                        if (!has_match('left/center/right',$cfg_val))
                        {
                            $cfg_val = 'center';
                        }
                        define('XWT_FTR_ALIGN', $cfg_val);
                        break;
                    case 'mnu-width':
                        if (!has_match('70%/75%/80%/85%/90%/95%/100%',$cfg_val))
                        {
                            $cfg_val = '100%';
                        }
                        define('XWT_MENU_WIDTH', $cfg_val);
                        break;
                    case 'mnu-align':
                        if (!has_match('left/center/right',$cfg_val))
                        {
                            $cfg_val = 'center';
                        }
                        define('XWT_MNU_ALIGN', $cfg_val);
                        break;
                    case 'sb-align':
                        if (!has_match('left/right',$cfg_val))
                        {
                            $cfg_val = 'right';
                        }
                        define('XWT_SIDEBAR_ALIGN', $cfg_val);
                        break;
                    case 'emoji-display':
                        if (!has_match('no/yes',$cfg_val))
                        {
                            $cfg_val = 'yes';
                        }
                        define('XWT_EMOJI_DSP', $cfg_val);
                        break;
                }
            }
        }
    }
    /**
     *  theme needs to work even if the
     *  xidipity-cfg.txt file is missing
     *
     */
    if (!defined('XWT_FA_VER')) {
        define('XWT_FA_VER', '5.12.0');
    }
    if (!defined('XWT_HDR_HGT')) {
        define('XWT_HDR_HGT', '100px');
    }
    if (!defined('XWT_FAV_ICO')) {
        define('XWT_FAV_ICO', 'none');
    }
    if (!defined('XWT_HDR_IMG')) {
        define('XWT_HDR_IMG', 'none');
    }
    if (!defined('XWT_HDR_LOGO')) {
        define('XWT_HDR_LOGO', 'none');
    }
    if (!defined('XWT_HDR_ALIGN')) {
        define('XWT_HDR_ALIGN', 'center');
    }
    if (!defined('XWT_FTR_ALIGN')) {
        define('XWT_FTR_ALIGN', 'center');
    }
    if (!defined('XWT_MENU_WIDTH')) {
        define('XWT_MENU_WIDTH', '100%');
    }
    if (!defined('XWT_MNU_ALIGN')) {
        define('XWT_MNU_ALIGN', 'center');
    }
    if (!defined('XWT_SIDEBAR_ALIGN')) {
        define('XWT_SIDEBAR_ALIGN', 'right');
    }
    if (!defined('XWT_EMOJI_DSP')) {
        define('XWT_EMOJI_DSP', 'yes');
    }
    return;
}

/**
 *  name: disp_menu
 *  build: 190915.1b
 *  description: set / get display menu flag
 *  attributes:
 *      $argr - string
 *
 */
function disp_menu($argr='')
{
    $fn_val = 'yes';
    $v_attr = trim($argr);
    if (empty($v_attr))
    {
        /*: get value :*/
        if (empty($GLOBALS['$global_dsp_menu']))
        {
            /*: set default value :*/
            $GLOBALS['$global_dsp_menu'] = 'yes';
        }
        /*: return value :*/
        $fn_val = $GLOBALS['$global_dsp_menu'];
    }
    else
    {
        $v_attr = strtolower($v_attr);
        if (has_match('no,yes',$v_attr))
        {
            /*: set value :*/
            $GLOBALS['$global_dsp_menu'] = $v_attr;
        }
        else
        {
            /*: set default value :*/
            $GLOBALS['$global_dsp_menu'] = 'yes';
        }
        $fn_val = $v_attr;
    }
    return $fn_val;
}
/**
 *  name: err_msg
 *  build: 190901.1a
 *  description: set / get error message
 *  attributes:
 *      $argr - string
 *
 */
function err_msg($argr='')
{
    global $xwt_err_msg;
    $fn_val = '';
    if (!isset($xwt_err_msg))
    {
        $xwt_err_msg = '';
    }
    if (empty($argr))
    {
        $fn_val = $xwt_err_msg;
        /*: report & clear :*/
        $xwt_err_msg = '';
    }
    else
    {
        $xwt_err_msg = $argr;
    }
    return $fn_val;
}
/**
 *  name: has_match
 *  build: 190915.1b
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
 *  build: 190915.1b
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
 *  build: 190925.1a
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
 *  name: com_walker
 *  build: 200322
 *  description: category walker extension to support font awesome icons
 *  functions:
 *      $args - array
 *  doc: https://xidipity.com/reference/source-code/shortcodes/c_walker/
 *
 */

/**
 *  name: c_walker
 *  build: 190728.1
 *  description: category walker extension to support font awesome icons
 *  functions:
 *      $args - array
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
 *  build: 190728.1
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
        $args = array();
        $args['href'] = get_permalink($page->ID);
        $args['aria-current'] = ($page->ID == $current_page) ? 'page' : '';
        /**
         * Filters the HTML attributes applied to a page menu item's anchor element.
         *
         * @since 4.8.0
         *
         * @param array $args {
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
        $args = apply_filters('page_menu_link_attributes', $args, $page, $depth, $args, $current_page);
        $argributes = '';
        foreach ($args as $argr => $value)
        {
            if (!empty($value))
            {
                $value = ('href' === $argr) ? esc_url($value) : esc_attr($value);
                $argributes .= ' ' . $argr . '="' . $value . '"';
            }
        }
        //$output .= $indent . sprintf('<li%s><a%s>%s%s%s</a>', $css_classes, $argributes, $args['link_before'],
        $output .= $indent . sprintf('<li%s><a%s>%s%s%s</a>', $css_classes, $argributes, $args['link_before'],
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
        /**
         *  name: configuration
         *  build: 190925.1a
         *  description: read configuration file
         */
        theme_cfg();
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
        $ed_css7 = 'https://use.fontawesome.com/releases/v' . XWT_FA_VER . '/css/all.css';
        $ed_css8 = 'https://fonts.googleapis.com/css?family=Kalam:300,400,700|Kaushan+Script|Roboto+Condensed:300,400,700,|Roboto+Mono|Roboto+Slab:100,300,400,700|Roboto:100,300,400,500,700,900,&display=swap';
        $ed_css9 = '/assets/css/theme/editor.css';
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
         *  build: 190925.1a
         *  description: remove customization menubar option
         */
        add_action( 'admin_bar_menu', 'remove_some_nodes_from_admin_top_bar_menu', 999 );
        function remove_some_nodes_from_admin_top_bar_menu( $wp_admin_bar ) {
            $wp_admin_bar->remove_menu( 'customize' );
        }
        /**
         *  name: emoji_dsp
         *  build: 190929.1a
         *  description: disable emoji prefetch
         */
        if (XWT_EMOJI_DSP == 'no')
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
        'before_widget' => '<aside class="bg:content fg:content box:shadow ht:min4 mar:bottom+1 pad:+0.5 pad:bottom+1">',
        'after_widget' => '</aside>',
        'before_title' => '<p class="fnt:size-larger fnt:weight-normal mar:bottom+0.25">',
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
    wp_enqueue_style('xidipity-font-awesome', 'https://use.fontawesome.com/releases/v' . XWT_FA_VER . '/css/all.css', array() , XWT_FA_VER, 'all');
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
 *  Tinymce Plugins
 *
 *  custom plugins are assign to the editor toolbar and are located in
 *      "assets/tinymceplugins/ directory"
 *
 *  core toolbar plugins include:
 *      formatselect
 *      fontsizeselect
 *      link
 *
 *  https://www.tiny.cloud/docs/plugins/
 *
 */
/**
 *  plugin: apply text weight
 *  build:  91215.1a
 *  descr:  apply font weight to selected text
 *
 */
add_action('admin_head', 'mce_add_apply_txt_weight_button');
function mce_add_apply_txt_weight_button()
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
        add_filter("mce_external_plugins", "add_tinymce_apply_txt_weight_plugin");
        add_filter('mce_buttons', 'register_mce_apply_txt_weight_button');
    }
}
function add_tinymce_apply_txt_weight_plugin($plugin_array)
{
    $plugin_array['apply_txt_weight'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-weight/plugin.js';
    return $plugin_array;
}
function register_mce_apply_txt_weight_button($buttons)
{
    array_push($buttons, "apply_txt_weight");
    return $buttons;
}
/**
 *  plugin: toggle italic
 *  build:  91215.1a
 *  descr:  apply/remove text italic
 *
 */
add_action('admin_head', 'mce_add_toggle_italic_button');
function mce_add_toggle_italic_button()
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
        add_filter("mce_external_plugins", "add_tinymce_toggle_italic_plugin");
        add_filter('mce_buttons', 'register_mce_toggle_italic_button');
    }
}
function add_tinymce_toggle_italic_plugin($plugin_array)
{
    $plugin_array['toggle_italic'] = get_template_directory_uri() . '/assets/tinymceplugins/toggle-italic/plugin.js';
    return $plugin_array;
}
function register_mce_toggle_italic_button($buttons)
{
    array_push($buttons, 'toggle_italic');
    return $buttons;
}
/**
 *  plugin: apply text format
 *  build:  91215.1a
 *  descr:  apply the following formats
 *      - underline
 *      - strike through
 *      - super script
 *      - sub script
 *      - drop shadow
 *
 */
add_action('admin_head', 'mce_add_apply_txt_formats_button');
function mce_add_apply_txt_formats_button()
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
        add_filter("mce_external_plugins", "add_tinymce_apply_txt_formats_plugin");
        add_filter('mce_buttons', 'register_mce_apply_txt_formats_button');
    }
}
function add_tinymce_apply_txt_formats_plugin($plugin_array)
{
    $plugin_array['apply_txt_formats'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-format/plugin.js';
    return $plugin_array;
}
function register_mce_apply_txt_formats_button($buttons)
{
    array_push($buttons, "apply_txt_formats");
    return $buttons;
}
/**
 *  plugin: apply text highlight
 *  build:  91215.1a
 *  descr:  apply highlight background color to selected text
 *
 */
add_action('admin_head', 'mce_add_apply_txt_hilight_button');
function mce_add_apply_txt_hilight_button()
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
        add_filter("mce_external_plugins", "add_tinymce_apply_txt_hilight_plugin");
        add_filter('mce_buttons', 'register_mce_apply_txt_hilight_button');
    }
}
function add_tinymce_apply_txt_hilight_plugin($plugin_array)
{
    $plugin_array['apply_txt_hilight'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-highlight/plugin.js';
    return $plugin_array;
}
function register_mce_apply_txt_hilight_button($buttons)
{
    array_push($buttons, 'apply_txt_hilight');
    return $buttons;
}
/**
 *  plugin: clear format
 *  build:  91215.1a
 *  descr:  remove all formatting from selected text
 *
 */
add_action('admin_head', 'mce_add_clear_format_button');
function mce_add_clear_format_button()
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
        add_filter("mce_external_plugins", "add_tinymce_clear_format_plugin");
        add_filter('mce_buttons', 'register_mce_clear_format_button');
    }
}
function add_tinymce_clear_format_plugin($plugin_array)
{
    $plugin_array['clear_format'] = get_template_directory_uri() . '/assets/tinymceplugins/clear-format/plugin.js';
    return $plugin_array;
}
function register_mce_clear_format_button($buttons)
{
    array_push($buttons, 'clear_format');
    return $buttons;
}
/**
 *  plugin: apply text alignment
 *  build:  91215.1a
 *  descr:  apply the following alignments
 *      - left
 *      - center
 *      - right
 *      - indent >
 *      - indent <
 *      - _ paragraph
 *
 */
add_action('admin_head', 'mce_add_apply_txt_align_button');
function mce_add_apply_txt_align_button()
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
        add_filter("mce_external_plugins", "add_tinymce_apply_txt_align_plugin");
        add_filter('mce_buttons', 'register_mce_apply_txt_align_button');
    }
}
function add_tinymce_apply_txt_align_plugin($plugin_array)
{
    $plugin_array['apply_txt_align'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-alignment/plugin.js';
    return $plugin_array;
}
function register_mce_apply_txt_align_button($buttons)
{
    array_push($buttons, "apply_txt_align");
    return $buttons;
}
/**
 *  plugin: add ordered list
 *  build:  91215.1a
 *  descr:  list choices
 *      - standard
 *      - nested
 *      - alpha
 *      - roman
 *      - outline
 *
 */
add_action('admin_head', 'mce_add_lst_order_button');
function mce_add_lst_order_button()
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
        add_filter("mce_external_plugins", "add_tinymce_lst_order_plugin");
        add_filter('mce_buttons', 'register_mce_lst_order_button');
    }
}
function add_tinymce_lst_order_plugin($plugin_array)
{
    $plugin_array['add_lst_order'] = get_template_directory_uri() . '/assets/tinymceplugins/add-list-ordered/plugin.js';
    return $plugin_array;
}
function register_mce_lst_order_button($buttons)
{
    array_push($buttons, 'add_lst_order');
    return $buttons;
}
/**
 *  plugin: add unordered list
 *  build:  91215.1a
 *  descr:  list choices
 *      - standard
 *      - circled
 *      - dash
 *      - square
 *      - mixed
 *
 */
add_action('admin_head', 'mce_add_lst_unorder_button');
function mce_add_lst_unorder_button()
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
        add_filter("mce_external_plugins", "add_tinymce_lst_unorder_plugin");
        add_filter('mce_buttons', 'register_mce_lst_unorder_button');
    }
}
function add_tinymce_lst_unorder_plugin($plugin_array)
{
    $plugin_array['add_lst_unorder'] = get_template_directory_uri() . '/assets/tinymceplugins/add-list-unordered/plugin.js';
    return $plugin_array;
}
function register_mce_lst_unorder_button($buttons)
{
    array_push($buttons, 'add_lst_unorder');
    return $buttons;
}
/**
 *  plugin: add miscellaneous options
 *  build:  91215.1a
 *  descr:  options include
 *      - block quote
 *      - excerpt
 *
 */
add_action('admin_head', 'mce_add_misc_opts_button');
function mce_add_misc_opts_button()
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
        add_filter("mce_external_plugins", "add_tinymce_misc_opts_plugin");
        add_filter('mce_buttons', 'register_mce_misc_opts_button');
    }
}
function add_tinymce_misc_opts_plugin($plugin_array)
{
    $plugin_array['add_misc_opts'] = get_template_directory_uri() . '/assets/tinymceplugins/add-misc-opts/plugin.js';
    return $plugin_array;
}
function register_mce_misc_opts_button($buttons)
{
    array_push($buttons, 'add_misc_opts');
    return $buttons;
}
/**
 *  plugin: add vertical space
 *  build:  91215.1a
 *  descr:  options include
 *      - 1/2 line
 *      - 3/4 line
 *      - 1 1/2 lines
 *      - 2 lines
 *      - 2 1/2 lines
 *      - 3 lines
 *
 */
add_action('admin_head', 'mce_add_vert_space_button');
function mce_add_vert_space_button()
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
        add_filter("mce_external_plugins", "add_tinymce_add_vert_space_plugin");
        add_filter('mce_buttons', 'register_mce_add_vert_space_button');
    }
}
function add_tinymce_add_vert_space_plugin($plugin_array)
{
    $plugin_array['add_vert_space'] = get_template_directory_uri() . '/assets/tinymceplugins/add-vertical-space/plugin.js';
    return $plugin_array;
}
function register_mce_add_vert_space_button($buttons)
{
    array_push($buttons, "add_vert_space");
    return $buttons;
}
/**
 *  plugin: add horizontal rule
 *  build:  91215.1a
 *  descr:  options include
 *      - Single narrow
 *      - Single wide
 *      - Double narrow
 *      - Double wide
 *      - Gradient narrow
 *      - Gradient wide
 *      - Emblem narrow
 *      - Emblem wide
 *
 */
add_action('admin_head', 'mce_add_horz_rule_button');
function mce_add_horz_rule_button()
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
        add_filter("mce_external_plugins", "add_tinymce_add_horz_rule_plugin");
        add_filter('mce_buttons', 'register_mce_add_horz_rule_button');
    }
}
function add_tinymce_add_horz_rule_plugin($plugin_array)
{
    $plugin_array['add_horz_rule'] = get_template_directory_uri() . '/assets/tinymceplugins/add-horizontal-rule/plugin.js';
    return $plugin_array;
}
function register_mce_add_horz_rule_button($buttons)
{
    array_push($buttons, "add_horz_rule");
    return $buttons;
}
/**
 *  plugin: add table
 *  build:  91215.1a
 *  descr:  modified core plugin
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
    $plugins['table'] = get_template_directory_uri() . '/assets/tinymceplugins/add-table/plugin.js';
    return $plugins;
}
add_filter('mce_external_plugins', 'add_the_table_plugin');
/**
 *  plugin: add multiple columns
 *  build:  91215.1a
 *  descr:  options include
 *      - Auto 2 columns
 *      - Auto 3 columns
 *      - Auto 4 columns
 *      - Fixed 2 columns
 *      - Fixed 3 columns
 *      - Fixed 4 columns
 *
 */
add_action('admin_head', 'mce_add_multi_cols_button');
function mce_add_multi_cols_button()
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
        add_filter("mce_external_plugins", "add_tinymce_add_multi_cols_plugin");
        add_filter('mce_buttons', 'register_mce_add_multi_cols_button');
    }
}
function add_tinymce_add_multi_cols_plugin($plugin_array)
{
    $plugin_array['add_multi_cols'] = get_template_directory_uri() . '/assets/tinymceplugins/add-multiple-columns/plugin.js';
    return $plugin_array;
}
function register_mce_add_multi_cols_button($buttons)
{
    array_push($buttons, "add_multi_cols");
    return $buttons;
}
/**
 *  plugin: add template
 *  build:  91215.1a
 *  descr:  add template code to HTML
 *
 */
add_action('admin_head', 'mce_add_template_button');
function mce_add_template_button()
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
        add_filter("mce_external_plugins", "add_tinymce_add_template_plugin");
        add_filter('mce_buttons', 'register_mce_add_template_button');
    }
}
function add_tinymce_add_template_plugin($plugin_array)
{
    $plugin_array['add_template'] = get_template_directory_uri() . '/assets/tinymceplugins/add-template/plugin.js';
    return $plugin_array;
}
function register_mce_add_template_button($buttons)
{
    array_push($buttons, "add_template");
    return $buttons;
}
/**
 *  plugin: toggle fullscreen
 *  build:  91215.1a
 *  descr:  toggle editor full screen mode
 *
 */
add_action('admin_head', 'mce_add_toggle_fullscreen_button');
function mce_add_toggle_fullscreen_button()
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
        add_filter("mce_external_plugins", "add_tinymce_toggle_fullscreen_plugin");
        add_filter('mce_buttons', 'register_mce_toggle_fullscreen_button');
    }
}
function add_tinymce_toggle_fullscreen_plugin($plugin_array)
{
    $plugin_array['toggle_fullscreen'] = get_template_directory_uri() . '/assets/tinymceplugins/toggle-fullscreen/plugin.js';
    return $plugin_array;
}
function register_mce_toggle_fullscreen_button($buttons)
{
    array_push($buttons, 'toggle_fullscreen');
    return $buttons;
}
/**
 *  plugin: add menu divider
 *  build:  91215.1a
 *  descr:  add "|" to toolbar menu
 *
 */
add_action('admin_head', 'mce_add_mnu_div_button');
function mce_add_mnu_div_button()
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
        add_filter("mce_external_plugins", "add_tinymce_add_mnu_div_plugin");
        add_filter('mce_buttons', 'register_mce_add_mnu_div_button');
    }
}
function add_tinymce_add_mnu_div_plugin($plugin_array)
{
    $plugin_array['add_mnu_div'] = get_template_directory_uri() . '/assets/tinymceplugins/add-menu-divider/plugin.js';
    return $plugin_array;
}
function register_mce_add_mnu_div_button($buttons)
{
    array_push($buttons, 'add_mnu_div');
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
    $in['toolbar1'] = 'undo,redo,formatselect,fontsizeselect,add_mnu_div,apply_txt_weight,toggle_italic,apply_txt_formats,forecolor,apply_txt_hilight,clear_format,link,add_mnu_div,apply_txt_align,add_mnu_div,add_lst_order,add_lst_unorder,add_mnu_div,add_misc_opts,add_vert_space,add_horz_rule,add_mnu_div,table,add_multi_cols,add_template,toggle_fullscreen';
    $in['toolbar2'] = '';
    $in['toolbar3'] = '';
    $in['toolbar4'] = '';
    $in['fontsize_formats'] = '12px 14px 16px 18px 20px 22px 24px 26px 30px 34px';
    $in['fontsize'] = '16px';
    $in['table_toolbar'] = '';
    $in['min_height'] = '375';
    $in['max_height'] = '450';
    $in['textcolor_map'] = '["000000", "Black", "212121", "Grey 9", "424242", "Grey 8", "616161", "Grey 7", "757575", "Grey 6", "B50707", "Red", "783BB7", "Deep Purple", "0051D8", "Blue", "048618", "Green", "D44511", "Deep Orange", "263238", "Blue Grey", "FFFFFF", "White", ]';
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
 *  name: dsp_rm
 *  build: 200315
 *  description: Return properly formatted read more HTML string
 *  attributes:
 *      $arg - string
 *  ref:
 *
 */
function dsp_rm($arg = '')
{
    // system
    $fn_retval = '';
    // atributes (rm url)
    $v_html = trim($arg);
    if (empty($v_html))
    {
        $fn_retval = '<ul class="ul:icon mar:vrt+0.5"><li><div class="ul:icon-itm"><img class="ht:max1.5 wd:max1.5" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE1LjUsMTJDMTgsMTIgMjAsMTQgMjAsMTYuNUMyMCwxNy4zOCAxOS43NSwxOC4yMSAxOS4zMSwxOC45TDIyLjM5LDIyTDIxLDIzLjM5TDE3Ljg4LDIwLjMyQzE3LjE5LDIwLjc1IDE2LjM3LDIxIDE1LjUsMjFDMTMsMjEgMTEsMTkgMTEsMTYuNUMxMSwxNCAxMywxMiAxNS41LDEyTTE1LjUsMTRBMi41LDIuNSAwIDAsMCAxMywxNi41QTIuNSwyLjUgMCAwLDAgMTUuNSwxOUEyLjUsMi41IDAgMCwwIDE4LDE2LjVBMi41LDIuNSAwIDAsMCAxNS41LDE0TTYsMjJBMiwyIDAgMCwxIDQsMjBWNEM0LDIuODkgNC45LDIgNiwySDdWOUw5LjUsNy41TDEyLDlWMkgxOEEyLDIgMCAwLDEgMjAsNFYxMS44MUMxOC44MywxMC42OSAxNy4yNSwxMCAxNS41LDEwQTYuNSw2LjUgMCAwLDAgOSwxNi41QzksMTguODEgMTAuMjEsMjAuODUgMTIuMDMsMjJINloiIC8+PC9zdmc+" alt="Xidipity WordPress Theme Read More" /></div><div class="ul:icon-itm pad:left+0.5" style="padding-top:0.125rem;">No additional information</div></li></ul>';
    }
    else
    {
        $fn_retval = '<ul class="ul:icon mar:vrt+0.5"><li><div class="ul:icon-itm"><img class="ht:max1.5 wd:max1.5" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xOSwyTDE0LDYuNVYxNy41TDE5LDEzVjJNNi41LDVDNC41NSw1IDIuNDUsNS40IDEsNi41VjIxLjE2QzEsMjEuNDEgMS4yNSwyMS42NiAxLjUsMjEuNjZDMS42LDIxLjY2IDEuNjUsMjEuNTkgMS43NSwyMS41OUMzLjEsMjAuOTQgNS4wNSwyMC41IDYuNSwyMC41QzguNDUsMjAuNSAxMC41NSwyMC45IDEyLDIyQzEzLjM1LDIxLjE1IDE1LjgsMjAuNSAxNy41LDIwLjVDMTkuMTUsMjAuNSAyMC44NSwyMC44MSAyMi4yNSwyMS41NkMyMi4zNSwyMS42MSAyMi40LDIxLjU5IDIyLjUsMjEuNTlDMjIuNzUsMjEuNTkgMjMsMjEuMzQgMjMsMjEuMDlWNi41QzIyLjQsNi4wNSAyMS43NSw1Ljc1IDIxLDUuNVY3LjVMMjEsMTNWMTlDMTkuOSwxOC42NSAxOC43LDE4LjUgMTcuNSwxOC41QzE1LjgsMTguNSAxMy4zNSwxOS4xNSAxMiwyMFYxM0wxMiw4LjVWNi41QzEwLjU1LDUuNCA4LjQ1LDUgNi41LDVWNVoiIHN0eWxlPSJmaWxsOiByZ2IoMTE3LCAxMTcsIDExNyk7Ii8+Cjwvc3ZnPg==" alt="Xidipity WordPress Theme Read More" /></div><div class="ul:icon-itm pad:left+0.5" style="padding-top:0.125rem;"><a href="' . $v_html . '">Read more …</a></div></li></ul>';
    }
    // return html
    return $fn_retval;
}

/**
 *  name: dsp_sticky
 *  build: 200314
 *  description: Return properly formatted sticky post category HTML string
 *  attributes:
 *      $arg - string
 *  ref:
 *
 */
function dsp_archive()
{
    // return html
    return '<p><span class="fg:wcag-grey6 pad:right+0.5">' . xidipity_icon_archive() . '</span>Archive</p>';
}

/**
 *  name: dsp_sticky
 *  build: 200314
 *  description: Return properly formatted sticky post category HTML string
 *  attributes:
 *      $arg - string
 *  ref:
 *
 */
function dsp_sticky($arg = '')
{
    // system
    $fn_retval = '';
    // atributes (first category)
    $v_html = trim($arg);
    if (!empty($v_html))
    {
    $fn_retval = '<p><span class="fg:wcag-grey6 pad:right+0.5">' . xidipity_icon_pc() . '</span>' . $v_html . '</p>';
    }
    // return html
    return $fn_retval;
}

/**
 *  name: dsp_date
 *  build: 200206
 *  description: Return properly formatted post date HTML string
 *  attributes:
 *      $arg - string
 *  ref:
 *
 */
function dsp_date($args = '')
{
    // system
    $fn_retval = '';
    // atributes (formatted date)
    if (empty($args))
    {
        $fn_retval = '<p><span class="fg:wcag-grey6 pad:right+0.5"><i class="far fa-calendar-alt">&#x200B;</i></span>' . current_time(get_option('date_format')) . '</p>';
    }
    elseif ($args = 'plain')
    {
        $fn_retval = '<p>' . current_time(get_option('date_format')) . '</p>';
    }
    else
    {
        $fn_retval = '<p><span class="fg:wcag-grey6 pad:right+0.5"><i class="far fa-calendar-alt">&#x200B;</i></span>' . $args . '</p>';
    }
    // return html
    return $fn_retval;
}
/**
 *  name: dsp_edit
 *  build: 200206
 *  description: Return properly formatted edit post HTML string
 *  attributes:
 *      $arg - string
 *  ref:
 *
 */
function dsp_edit($arg = '')
{
    // system
    $fn_retval = '';
    // atributes (page url)
    $v_html = trim($arg);
    if (!empty($v_html))
    {
    $fn_retval = '<p><span class="fg:wcag-grey6 pad:right+0.5"><i class="fas fa-user-edit">&#x200B;</i></span><a href="' . $v_html . '">Edit</a></p>';
    }
    // return html
    return $fn_retval;
}
/**
 *  name: dsp_view
 *  build: 200206
 *  description: Return properly formatted view image HTML string
 *  attributes:
 *      $arg - string
 *  ref:
 *
 */
function dsp_view($arg = '')
{
    // system
    $fn_retval = '';
    // atributes (image url)
    $v_html = trim($arg);
    if (!empty($v_html))
    {
    $fn_retval = '<p><span class="pad:right+0.5"><i class="far fa-eye">&#x200B;</i></span><a href="' . $v_html . '">View</a></p>';
    }
    // return html
    return $fn_retval;
}
/**
 *  name: dsp_cat
 *  build: 200206
 *  description: Return properly formatted post category HTML string
 *  attributes:
 *      $arg - string
 *  ref:
 *
 */
function dsp_cat($arg = '')
{
    // system
    $fn_retval = '';
    // atributes (first category)
    $v_html = trim($arg);
    if (strtolower($v_html) == 'uncategorized')
    {
    $fn_retval = '<p><span class="fg:sec pad:right+0.5">' . xidipity_icon_question() . '</span>' . $v_html . '</p>';
    }
    else
    {
    $fn_retval = '<p><span class="fg:wcag-grey6 pad:right+0.5">' . xidipity_icon_bm() . '</span>' . $v_html . '</p>';
    }
    // return html
    return $fn_retval;
}
/**
 *  name: dsp_tags
 *  build: 200206
 *  description: Return properly formatted post tags HTML string
 *  attributes:
 *      $arg - string
 *  comment: sized for a smaller font
 *
 */
function dsp_tags()
{
    // system
    $fn_val = '';
    // atributes (tag array)
    $wp_tags = get_the_tags();
    // variables
    $tag_list =  '';
    if (!empty($wp_tags))
    {
      foreach( $wp_tags as $wp_tag ) {
          $tag_list .= $wp_tag->name . ',';
      }
    }
    if (strlen($tag_list) > 1)
    {
        $fn_val = substr($tag_list, 0, -1);
    }

    // return html
    return $fn_val;
}
/**
 *  name: tag_count
 *  build: 200322
 *  description: count post tags
 *  attributes:
 *      $arg - string
 *  comment: sized for a smaller font
 *
 */
function cnt_tags()
{
    // system
    $fn_val = 0;
    $tags = get_the_tags();
    if(is_array($tags))
    {
        $fn_val = count($tags);
    }
    // return html
    return $fn_val;
}
/**
 *  name: dsp_err
 *  build: 200315
 *  description: Return properly formatted error message
 *  attributes:
 *      $arg - string
 *  ref:
 *
 */
function dsp_err($arg = '')
{
    // system
    $fn_retval = '';
    // variables
    $v_msg = '';
    // atributes
    $a_msg = trim($arg);
    if (empty($a_msg))
    {
        $v_msg = 'Error detected without an explanation';
    }
    else
    {
        $v_msg = $a_msg;
    }
    $fn_retval = '<table class="bdr:collapse bdr:hidden cols:auto wd:100%"><tbody><tr><td class="aln:middle bg:wcag-red cnr:arch-left-small fnt:size-2x-large fg:wht pad:hrz+0.75"><i class="fas fa-bell">&#x200B;</i></td><td class="aln:text-left aln:middle bg:tint cnr:arch-right-small fnt:size-smaller pad:vrt+0.5 wd:100%">' . __($v_msg) . '</td></tr></tbody></table>';
    // return html
    return $fn_retval;
}
/**
 *  name: filter_categories
 *  build: 200322
 *  description: return string of active category ids removing those
 *               listed in the $filter attribute
 *  attributes: $filter
 *  ref: developer.wordpress.org/reference/functions/get_categories/
 */
function filter_categories($filter='')
{
    // system
    $fn_val = '';
    $category_list ='';
    $categories = get_categories( array(
        'orderby' => 'name',
        'order'   => 'ASC'
    ) );
    $category_filter = strtolower($filter);
    foreach( $categories as $category )
    {
        $category_id = $category->term_id;
        $category_name = strtolower($category->name);
        $category_parents = strtolower(get_category_parents($category_id, false, '/'));

        if (!has_match($category_parents,'media library'))
        {
            if (!has_match($category_filter,$category_name))
            {
                $category_list .= $category_id . ',';
            }
        }
    }
    if (strlen($category_list) > 1)
    {
        $fn_val = substr($category_list, 0, -1);
    }
    // return string
    return $fn_val;
}

/**
 * name:    category_to_id
 * descr:   convert category name(s) to id(s)
 * build:   200322
 * accepts:
 *   $arg - category name/names "-category" to exclude
 * return:  string
 *
 */
function category_to_id($args='')
{
    $fn_val = '';
    if (!empty($args))
    {
        $separators = array(
            ".",
            "/",
            ":",
            ";",
            "|"
        );
        /*: standardize separators :*/
        $name_list = str_replace($separators, ",", $args);
        $categories = explode(',', $name_list);
        $id_list = '';
        foreach ($categories as $category)
        {
            $id_prefix = substr($category,0,1);
            if ($id_prefix == '-')
            {
                $category = substr($category,1);
            } else {
                $id_prefix = '';
            }
            $id = get_cat_ID($category);
            if (!empty($id))
            {
                $id_list .= $id_prefix . $id . ',';
            }
        }
        $fn_val = substr($id_list, 0, -1);
    }
    // return string
    return $fn_val;
}

/**
 * name:    tag_to_id
 * descr:   convert tag name(s) to id(s)
 * build:   200322
 * accepts:
 *   $arg - tag name/names "-tag" to exclude
 * return:  string
 *
 */
function tag_to_id($args='')
{
    $fn_val = '';
    if (!empty($args))
    {
        $separators = array(
            ".",
            "/",
            ":",
            ";",
            "|"
        );
        /*: standardize separators :*/
        $name_list = str_replace($separators, ",", $args);
        $tags = explode(',', $name_list);
        $id_list = '';
        foreach ($tags as $tag)
        {
            $id_prefix = substr($tag,0,1);
            if ($id_prefix == '-')
            {
                $tag = substr($tag,1);
            } else {
                $id_prefix = '';
            }
            $wp_tag = get_term_by('name', $tag, 'post_tag');
            $id = $wp_tag->term_id;
            if (!empty($id))
            {
                $id_list .= $id_prefix . $id . ',';
            }
        }
        $fn_val = substr($id_list, 0, -1);
    }
    // return string
    return $fn_val;
}

/**
 * name:    valid_orderby
 * descr:   validate submission
 * build:   200322
 * accepts:
 *   $arg - submission
 * return:  valid orderby / date
 *
 */
function valid_orderby($arg='')
{
    // system
    $fn_val = 'date';
    $valid = 'author,comment_count,date,id,menu_order,modified,name,none,parent,post_date,post_modified,post_parent,post_title,rand,relevance,title';
    $value = strtolower($arg);
    if (has_match($valid,$value))
    {
        if ($value == 'id')
        {
            $value = 'ID';
        }
        $fn_val = $value;
    }
    // return string
    return $fn_val;
}

/**
 *  name: no_dft
 *  build: 191101.1
 *  description: Purge template default values (#?#)
 *  attributes:
 *      $arg - string
 *  doc: https://xidipity.com/reference/source-code/functions/no_dft/
 *
 */
function no_dft($arg='')
{
    // system
    $fn_val = '';
    // atributes
    $a_prm = trim($arg);
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
 *  build: 190728.1
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
 * EOF:     functions.php
 * Build:   200322
 *
 */
?>
