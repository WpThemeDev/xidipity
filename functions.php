<?php
/**
 * xidipity functions and definitions
 *
 * build: 90317.1
 *
 * @package xidipity
 */

if (!function_exists('xidipity_setup')): /**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
  function xidipity_setup() {
    
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
    function wpdocs_theme_add_editor_styles() {
      add_editor_style('assets/css/editor-style.min.css');
    }
    add_action('admin_init', 'wpdocs_theme_add_editor_styles');
    
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
function xidipity_content_width() {
  $GLOBALS['content_width'] = apply_filters('xidipity_content_width', 317);
}
add_action('after_setup_theme', 'xidipity_content_width', 0);

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function xidipity_widgets_init() {
  
  // Widget Areas
  register_sidebar(array(
    'name' => esc_html__('Main Sidebar', 'xidipity'),
    'id' => 'sidebar-1',
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => '</aside>',
    'before_title' => '<h2 class="widget-title">',
    'after_title' => '</h2>'
  ));
  
}
add_action('widgets_init', 'xidipity_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function xidipity_scripts() {
  
  /**
   * Enqueue JS files
   */
  
  // Comment Reply
  if (is_singular() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }
  
  // Keyboard image navigation support
  if (is_singular() && wp_attachment_is_image()) {
    wp_enqueue_script('xidipity-keyboard-image-navigation', get_template_directory_uri() . '/assets/js/keyboard-image-navigation.js', array(
      'jquery'
    ), '20140127', true);
  }
  
  /*
  * Custom Scripts
  */
  
  // Clipboard Js
  wp_enqueue_script('xidipity-clipboardjs', 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.1/clipboard.min.js', array(), '2.0.1', false);

  // Sweet Alert Js
  wp_enqueue_script('xidipity-sweetalert', 'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js', array(), '2.1.2', false);

  // Tailwind CSS files
  wp_enqueue_style('tailwind-preflight', 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.7.4/preflight.min.css', array(), '7.3', 'all');
  wp_enqueue_style('tailwind-base', 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.7.4/tailwind.min.css', array(), '7.3', 'all');
  wp_enqueue_style('tailwind-utilities', 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.7.4/utilities.min.css', array(), '7.3', 'all');

  // Xidipity CSS files
  wp_enqueue_style('xidipity-var', get_stylesheet_directory_uri() . '/assets/css/blog-var.css#asyncload', array(), wp_get_theme()->get( 'Version' ), 'all');
  wp_enqueue_style('xidipity-prt-var', get_stylesheet_directory_uri() . '/assets/css/blog-print-var.css#asyncload', array(), wp_get_theme()->get( 'Version' ), 'print');
  wp_enqueue_style('xidipity-base', get_stylesheet_directory_uri() . '/assets/css/blog-base.min.css#asyncload', array(), wp_get_theme()->get( 'Version' ), 'all');
  wp_enqueue_style('xidipity-common', get_stylesheet_directory_uri() . '/assets/css/blog-common.min.css#asyncload', array(), wp_get_theme()->get( 'Version' ), 'all');
  wp_enqueue_style('xidipity-print', get_stylesheet_directory_uri() . '/assets/css/blog-print.min.css', array(), wp_get_theme()->get( 'Version' ), 'print');
  wp_enqueue_style('xidipity-palette', get_stylesheet_directory_uri() . '/assets/css/blog-palette.min.css', array(), wp_get_theme()->get( 'Version' ), 'all');

  // Fontawesome
  wp_enqueue_style('xidipity-font-awesome', 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', array(), '5.7.2', 'all');

  // Google Material Design Icons
  wp_enqueue_style('xidipity-md-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', array(), wp_get_theme()->get( 'Version' ), 'all');

  // Theme Stylesheet
  wp_enqueue_style('xidipity-style', get_stylesheet_uri());
  
}

/**
 * Load scripts async
 */
function xidipity_async_scripts($url) {
  if (strpos($url, '#asyncload') === false)
    return $url;
  else if (is_admin())
    return str_replace('#asyncload', '', $url);
  else
    return str_replace('#asyncload', '', $url) . "' async='async";
}
add_filter('clean_url', 'xidipity_async_scripts', 11, 1);

/**
 * Add Categories for Attachments
 */
function add_categories_for_attachments() {
  register_taxonomy_for_object_type('category', 'attachment');
}
add_action('init', 'add_categories_for_attachments');
add_action('wp_enqueue_scripts', 'xidipity_scripts');
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
require get_template_directory() . '/inc/custom-header.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Short code additions.
 */
require get_template_directory() . '/inc/shortcodes.php';

/**
 * ---------------------------- Tiny MCE Editor ---------------------------
 *
 **/

/**
 * Add the TinyMCE Table Plugin.
 *
 */

function add_the_table_button($buttons) {
  array_push($buttons, 'separator', 'table');
  return $buttons;
}
add_filter('mce_buttons', 'add_the_table_button');

function add_the_table_plugin($plugins) {
  $plugins['table'] = get_template_directory_uri() . '/assets/tinymceplugins/table/plugin.min.js';
  return $plugins;
}
add_filter('mce_external_plugins', 'add_the_table_plugin');

/**
 * Add the TinyMCE Embed Plugin.
 *
 */

add_action('admin_head', 'mce_add_embed_button');

function mce_add_embed_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_embed_plugin");
    add_filter('mce_buttons', 'register_mce_embed_button');
  }
}

function add_tinymce_embed_plugin($plugin_array) {
  $plugin_array['embed'] = get_template_directory_uri() . '/assets/tinymceplugins/embed/plugin.min.js';
  return $plugin_array;
}

function register_mce_embed_button($buttons) {
  array_push($buttons, "embed");
  return $buttons;
}

/**
 * Add the TinyMCE two columns Plugin.
 *
 */

add_action('admin_head', 'mce_add_twocol_button');

function mce_add_twocol_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_twocol_plugin");
    add_filter('mce_buttons', 'register_mce_twocol_button');
  }
}

function add_tinymce_twocol_plugin($plugin_array) {
  $plugin_array['twocolumn'] = get_template_directory_uri() . '/assets/tinymceplugins/twocolumn/plugin.min.js';
  return $plugin_array;
}

function register_mce_twocol_button($buttons) {
  array_push($buttons, "twocolumn");
  return $buttons;
}

/**
 * Add the TinyMCE excerpt Plugin.
 *
 */

add_action('admin_head', 'mce_add_excerpt_button');

function mce_add_excerpt_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_excerpt_plugin");
    add_filter('mce_buttons', 'register_mce_excerpt_button');
  }
}

function add_tinymce_excerpt_plugin($plugin_array) {
  $plugin_array['excerpt'] = get_template_directory_uri() . '/assets/tinymceplugins/excerpt/plugin.min.js';
  return $plugin_array;
}

function register_mce_excerpt_button($buttons) {
  array_push($buttons, "excerpt");
  return $buttons;
}

/**
 * Add the TinyMCE vspacer Plugin.
 *
 */

add_action('admin_head', 'mce_add_vspacer_button');

function mce_add_vspacer_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_vspacer_plugin");
    add_filter('mce_buttons', 'register_mce_vspacer_button');
  }
}

function add_tinymce_vspacer_plugin($plugin_array) {
  $plugin_array['vspacer'] = get_template_directory_uri() . '/assets/tinymceplugins/vertspacers/plugin.min.js';
  return $plugin_array;
}

function register_mce_vspacer_button($buttons) {
  array_push($buttons, "vspacer");
  return $buttons;
}

/**
 * Add the TinyMCE hrule Plugin.
 *
 */

add_action('admin_head', 'mce_add_hrule_button');

function mce_add_hrule_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_hrule_plugin");
    add_filter('mce_buttons', 'register_mce_hrule_button');
  }
}

function add_tinymce_hrule_plugin($plugin_array) {
  $plugin_array['hrule'] = get_template_directory_uri() . '/assets/tinymceplugins/horzrule/plugin.min.js';
  return $plugin_array;
}

function register_mce_hrule_button($buttons) {
  array_push($buttons, "hrule");
  return $buttons;
}

/**
 * Add the TinyMCE Adsense Plugin.
 *
 */

add_action('admin_head', 'mce_add_adsense_button');

function mce_add_adsense_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_adsense_plugin");
    add_filter('mce_buttons', 'register_mce_adsense_button');
  }
}

function add_tinymce_adsense_plugin($plugin_array) {
  $plugin_array['adsense'] = get_template_directory_uri() . '/assets/tinymceplugins/adsense/plugin.min.js';
  return $plugin_array;
}

function register_mce_adsense_button($buttons) {
  array_push($buttons, "adsense");
  return $buttons;
}

/**
 * Add the TinyMCE Align Plugin.
 *
 */

add_action('admin_head', 'mce_add_txtalign_button');

function mce_add_txtalign_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_txtalign_plugin");
    add_filter('mce_buttons', 'register_mce_txtalign_button');
  }
}

function add_tinymce_txtalign_plugin($plugin_array) {
  $plugin_array['txtalign'] = get_template_directory_uri() . '/assets/tinymceplugins/align/plugin.min.js';
  return $plugin_array;
}

function register_mce_txtalign_button($buttons) {
  array_push($buttons, "txtalign");
  return $buttons;
}

/**
 * Add the TinyMCE formats Plugin.
 *
 */

add_action('admin_head', 'mce_add_formats_button');

function mce_add_formats_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_formats_plugin");
    add_filter('mce_buttons', 'register_mce_formats_button');
  }
}

function add_tinymce_formats_plugin($plugin_array) {
  $plugin_array['formats'] = get_template_directory_uri() . '/assets/tinymceplugins/formats/plugin.min.js';
  return $plugin_array;
}

function register_mce_formats_button($buttons) {
  array_push($buttons, "formats");
  return $buttons;
}

/**
 * Add the TinyMCE font weights Plugin.
 *
 */

add_action('admin_head', 'mce_add_fntwgt_button');

function mce_add_fntwgt_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_fntwgt_plugin");
    add_filter('mce_buttons', 'register_mce_fntwgt_button');
  }
}

function add_tinymce_fntwgt_plugin($plugin_array) {
  $plugin_array['fntwgt'] = get_template_directory_uri() . '/assets/tinymceplugins/fntwgt/plugin.min.js';
  return $plugin_array;
}

function register_mce_fntwgt_button($buttons) {
  array_push($buttons, "fntwgt");
  return $buttons;
}

/**
 * Add the TinyMCE full screen Plugin.
 *
 */

add_action('admin_head', 'mce_add_xscreen_button');

function mce_add_xscreen_button() {
  global $typenow;
  // check user permissions
  if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
    return;
  }
  // verify the post type
  if (!in_array($typenow, array(
    'post',
    'page'
  )))
    return;
  // check if WYSIWYG is enabled
  if (get_user_option('rich_editing') == 'true') {
    add_filter("mce_external_plugins", "add_tinymce_xscreen_plugin");
    add_filter('mce_buttons', 'register_mce_xscreen_button');
  }
}

function add_tinymce_xscreen_plugin($plugin_array) {
  $plugin_array['xscreen'] = get_template_directory_uri() . '/assets/tinymceplugins/fullscreen/plugin.min.js';
  return $plugin_array;
}

function register_mce_xscreen_button($buttons) {
  array_push($buttons, 'xscreen');
  return $buttons;
}

/**
 * Change TinyMCE configuration
 *
 */
add_filter("tiny_mce_before_init", function($in, $editor_id) {
  $in['remove_linebreaks']       = false;
  $in['paste_remove_styles']     = true;
  $in['paste_remove_spans']      = true;
  $in['wpautop']                 = false;
  $in['indent']                  = true;
  $in['tadv_noautop']            = false;
  $in['apply_source_formatting'] = true;
  $in['menubar']                 = '';
  $in['toolbar1']                = 'undo,redo,formatselect,fontsizeselect,fntwgt,italic,formats,indent,outdent,forecolor,backcolor,bullist,numlist,link,unlink,blockquote,txtalign,hrule,vspacer,table,embed,twocolumn,excerpt,adsense,xscreen';
  $in['toolbar2']                = '';
  $in['toolbar3']                = '';
  $in['toolbar4']                = '';
  $in['fontsize_formats']        = '12px 14px 16px 18px 20px 24px 30px 36px';
  $in['fontsize']                = '16px';
  $in['table_toolbar']           = '';
  $in['min_height']              = '375';
  $in['max_height']              = '450';
  $in['formats']                 = "{wgt100: {inline: 'span',styles: {'font-weight': '100'}},wgt200: {inline: 'span',styles: {'font-weight': '200'}},wgt300: {inline: 'span',styles: {'font-weight': '300'}},wgt400: {inline: 'span',styles: {'font-weight': '400'}},wgt500: {inline: 'span',styles: {'font-weight': '500'}},wgt600: {inline: 'span',styles: {'font-weight': '600'}},wgt700: {inline: 'span',styles: {'font-weight': '700'}}}";
  return $in;
}, 15, 2);

/**
 * Remove 'Colors' panel from the Customizer.
 *
 */
add_action("customize_register", "xidipity_theme_customize_register");
function xidipity_theme_customize_register($wp_customize) {
  
  //=============================================================
  // Remove header image and widgets option from theme customizer
  //=============================================================
  // $wp_customize->remove_control("header_image");
  // $wp_customize->remove_panel("widgets");
  
  //=============================================================
  // Remove Colors, Background image, and Static front page
  // option from theme customizer
  //=============================================================
  $wp_customize->remove_section("colors");
  $wp_customize->remove_section("background_image");
  // $wp_customize->remove_section("static_front_page");
}

?>
