<?php
/**
 * WordPress Xidipity Theme
 * Theme functions
 *
 * ###:  functions.php
 * bld:  210618-1
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
/**
 *  global variables / constants
 *  build: 28200801
 *
 */
$xty = array();
/**
 *  theme configuration constants
 *  are here to keep folks out of
 *  this file :)
 */
include (locate_template('cfg.php', false, false));
/**
 *  name: xty
 *  build: 28200801
 *  description: set / get xty varables
 *  attributes:
 *      $key - array key
 *		$value - array key value
 *
 */
function xty($key = '', $value = '')
{
	global $xty;
	$ret_val = '';
	if (!empty($key))
	{
		if (empty($value) || $value == 'default')
		{
			/*: get value :*/
			if (array_key_exists($key, $xty))
			{
				$ret_val = $xty[$key];
			}
			/*: if empty/default, set to default value :*/
			if (empty($ret_val) || $value == 'default')
			{
				switch ($key)
				{
					case ('copyrightholder'):
						$xty[$key] = CopyRightHolder;
					break;
					case ('copyrightyear1'):
						$xty[$key] = CopyRightYear1;
					break;
					case ('copyrightyear2'):
						$xty[$key] = CopyRightYear2;
					break;
					case ('emoji-dsp'):
						$xty[$key] = EmojiDisplay;
					break;
					case ('fa-ver'):
						$xty[$key] = FontAwesomeVersion;
					break;
					case ('fav-ico'):
						$xty[$key] = FavoriteIcon;
					break;
					case ('ftr-aln'):
						$xty[$key] = FooterAlignment;
					break;
					case ('hdr-aln'):
						$xty[$key] = HeaderAlignment;
					break;
					case ('hdr-ht'):
						$xty[$key] = HeaderHeight;
					break;
					case ('hdr-img'):
						$xty[$key] = HeaderImage;
					break;
					case ('hdr-logo'):
						$xty[$key] = HeaderLogo;
					break;
					case ('mnu-aln'):
						$xty[$key] = MenuAlignment;
					break;
					case ('mnu-dsp'):
						$xty[$key] = MenuDisplay;
					break;
					case ('mnu-wd'):
						$xty[$key] = MenuWidth;
					break;
					case ('msg'):
						$xty[$key] = MessageDefault;
					break;
					case ('sb-aln'):
						$xty[$key] = SidebarAlignment;
					break;
					case ('fea-img'):
						$xty[$key] = FeaturedImage;
					break;
					case ('seo'):
						$xty[$key] = ThemeSEO;
					break;
					case ('sans'):
						$font = FontSans;
						$font = str_replace('<link href="','',$font);
						$font = str_replace('" rel="stylesheet">','',$font);
						$xty[$key] = $font;
					break;
					case ('serif'):
						$font = FontSerif;
						$font = str_replace('<link href="','',$font);
						$font = str_replace('" rel="stylesheet">','',$font);
						$xty[$key] = $font;
					break;
					case ('mono'):
						$font = FontMono;
						$font = str_replace('<link href="','',$font);
						$font = str_replace('" rel="stylesheet">','',$font);
						$xty[$key] = $font;
					break;
					case ('cursive'):
						$font = FontCursive;
						$font = str_replace('<link href="','',$font);
						$font = str_replace('" rel="stylesheet">','',$font);
						$xty[$key] = $font;
					break;
					case ('fantasy'):
						$font = FontFantasy;
						$font = str_replace('<link href="','',$font);
						$font = str_replace('" rel="stylesheet">','',$font);
						$xty[$key] = $font;
					break;
					default:
						$xty[$key] = '';
				}
				$ret_val = $xty[$key];
			}
		}
		else
		{
			/*: set value :*/
			$xty[$key] = $value;
		}
	}
	return $ret_val;
}
/**
 *  name: has_match
 *  build: 28200801
 *  description: is needle (smaller) in haystack (larger)
 *  attributes:
 *      $needle - string (smaller value)
 *      $haystack - string (larger value)
 *		$rigid - case sensitivity (default is false)
 *  returns: true / false
 */
function has_match($needle = '', $haystack = '', $rigid=false)
{
	$result = false;
	if (!empty($needle) && !empty($haystack))
	{
		$haystack = strwrap($haystack,'⁗');
		if ($rigid)
		{
			$result = (strpos($haystack, $needle) > 0);
			
		}
		else
		{
			$result = (stripos($haystack, $needle) > 0);
		}
	}
	return $result;
}
/**
 *  name: strwrap
 *  build: 28200801
 *  description: add chr(s) to beginning & end of string
 *  attributes:
 *      $str - string
 *      $pre - string
 *      $pst - string (optional)
 *  returns:
 *      string
 */
function strwrap($str = '', $pre = '', $pst = '')
{
	if (empty($pst))
	{
		$ret_val = $pre . $str . $pre;
	}
	else
	{
		$ret_val = $pre . $str . $pst;
	}
	return $ret_val;
}

/**
 *  name: scrub_list
 *  build: 28200801
 *  description:	standardize item separators to comma
 *					alphabetize
 *					remove dups
 *  attributes:
 *      $arg - string
 *  returns:
 *      string
 */
function scrub_list($arg = '', $case = '')
{
	$list = $arg;
	if (!empty($list))
	{
		$seps = array(
			".",
			"/",
			":",
			";",
			"|"
		);
		$list = str_replace($seps, ",", $list);
		$list = implode(',',array_unique(explode(',', $list)));
		$itms = explode(',', $list);
		switch (strtolower($case))
		{
		    case 'l':
		        $itms = array_map('strtolower', $itms);
		        break;
		    case 'u':
		        $itms = array_map('strtoupper', $itms);
		}
		natcasesort($itms);
		$list = implode(',',$itms);
	}
	return $list;
}
/**
 *  name: blog_copyright
 *  build: 31201215
 *  description: return copyright
 *  url: www.wpbeginner.com/wp-tutorials/how-to-add-a-dynamic-copyright-date-in-wordpress-footer/
 *
 */
function blog_copyright()
{
	global $wpdb;
	$ret_val = '';
	switch(true) {
		case (xty('copyrightyear1') !== 'default' && xty('copyrightyear2') !== 'default'):	
			$ret_val = '<span class="pad:rt+0.5">' . "&copy; " . xty('copyrightyear1') . '-' . xty('copyrightyear2') . '</span>' . xty('copyrightholder');
			break;
		case (xty('copyrightyear2') !== 'default'):	
			$ret_val = '<span class="pad:rt+0.5">' . "&copy; " . xty('copyrightyear2') . '</span>' . xty('copyrightholder');
			break;
		case (xty('copyrightyear1') !== 'default'):	
			$ret_val = '<span class="pad:rt+0.5">' . "&copy; " . xty('copyrightyear1') . '</span>' . xty('copyrightholder');
			break;
		default:
			$db_val = $wpdb->get_results("
			SELECT
				YEAR(min(post_date_gmt)) AS firstdate,
				YEAR(max(post_date_gmt)) AS lastdate
				FROM
				$wpdb->posts
			WHERE
				post_status = 'publish'
			");
			if ($db_val)
			{
				$fn_copyright = "&copy; " . $db_val[0]->firstdate;
				if ($db_val[0]->firstdate != $db_val[0]->lastdate)
				{
					$fn_copyright .= '-' . $db_val[0]->lastdate;
				}
				$ret_val = '<span class="pad:rt+0.5">' . $fn_copyright . '</span>' . xty('copyrightholder');
			}
	}
	return $ret_val;
}
/**
 *  name: get_tag_ID
 *  build: 28200801
 *  description: return tag id
 *  url:
 *
 */
function get_tag_ID($tag_name = '')
{
	$tag = get_term_by('name', $tag_name, 'post_tag');
	if ($tag)
	{
		return $tag->term_id;
	}
	else
	{
		return 0;
	}
}
/**
 *  name: xty_srch_fl
 *  build: 28200801
 *  description: modify wp_query prior to running
 *  url: developer.wordpress.org/reference/hooks/pre_get_posts/
 *
 */
function xty_srch_fl($query)
{
	if (!is_admin() && $query->is_main_query())
	{
		if ($query->is_search)
		{
			$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
			$query->set('paged', $paged);
			$query->set('post_status', 'publish');
		}
	}
}
add_action('pre_get_posts', 'xty_srch_fl', 1);
/**
 *  name: xty_srch_url
 *  build: 28200801
 *  description: modify search url format
 *  url:
 *
 */
function xty_srch_url()
{
	if (is_search() && !empty($_GET['s']))
	{
		wp_redirect(home_url("/search/") . urlencode(get_query_var('s')));
		exit();
	}
}
add_action('template_redirect', 'xty_srch_url');
/**
 *  name: xty_setup
 *  build: 28200801
 *  description: set up Xidipity environment
 *  url:
 *
 */
if (!function_exists('xty_setup')):
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function xty_setup()
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
		add_theme_support('editor-styles');
		$ed_css1 = 'style.css';
		$ed_css2 = '/assets/css/sys/theme-vars.css';
		$ed_css3 = '/assets/css/theme/palette.css';
		$ed_css4 = '/assets/css/theme/common.css';
		$ed_css5 = '/assets/css/theme/advance.css';
		$ed_css6 = '/assets/css/theme/icons.css';
		$ed_css7 = '/assets/css/theme/flexbox.css';
		$ed_css8 = 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp';
		$ed_css9 = 'https://use.fontawesome.com/releases/v' . xty('fa-ver') . '/css/all.css';
		$ed_css10 = 'https://fonts.googleapis.com/css?family=Kalam:300,400,700|Kaushan+Script|Roboto+Condensed:300,400,700,|Roboto+Mono|Roboto+Slab:100,300,400,700|Roboto:100,300,400,500,700,900,&display=swap';
		$ed_css11 = '/assets/css/theme/editor.css';
		$ed_styles = array(
			$ed_css1,
			$ed_css2,
			$ed_css3,
			$ed_css4,
			$ed_css5,
			$ed_css6,
			$ed_css7,
			$ed_css8,
			$ed_css9,
			$ed_css10,
			$ed_css11
		);
		add_editor_style($ed_styles);
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
		add_action('admin_bar_menu', 'remove_some_nodes_from_admin_top_bar_menu', 999);
		function remove_some_nodes_from_admin_top_bar_menu($wp_admin_bar)
		{
			$wp_admin_bar->remove_menu('customize');
		}
		/**
		 *  name: emoji_dsp
		 *  build: 190929.1a
		 *  description: disable emoji prefetch
		 */
		if (xty('emoji-dsp') == 'no')
		{
			add_filter('emoji_svg_url', '__return_false');
		}
	}
endif; // xty_setup
add_action('after_setup_theme', 'xty_setup');
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
		'before_widget' => '<aside class="bkg:content txt:content box:shadow ht:min4 mar:bt+1 pad:+0.5 pad:bt+1">',
		'after_widget' => '</aside>',
		'before_title' => '<p class="fnt:siz+1 fnt:wgt-400 mar:bt+0.25">',
		'after_title' => '</p>'
	));
}
add_action('widgets_init', 'xidipity_widgets_init');
/**
 * Enqueue scripts and styles.
 */
function xidipity_scripts()
{
	/*: xidipity fonts :*/
	// preconnect
	// wp_enqueue_style('google-preconnect', 'https://fonts.gstatic.com', array() , wp_get_theme()->get('Version') , 'all');
	// sans
	wp_enqueue_style('google-sans', xty('sans'), array() , wp_get_theme()->get('Version') , 'all');
	// serif
	wp_enqueue_style('google-serif', xty('serif'), array() , wp_get_theme()->get('Version') , 'all');
	// mono
	wp_enqueue_style('google-mono', xty('mono'), array() , wp_get_theme()->get('Version') , 'all');
	// cursive
	wp_enqueue_style('google-cursive', xty('cursive'), array() , wp_get_theme()->get('Version') , 'all');
	// fantasy
	wp_enqueue_style('google-fantasy', xty('fantasy'), array() , wp_get_theme()->get('Version') , 'all');
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
	wp_enqueue_style('xidipity-icons', get_stylesheet_directory_uri() . '/assets/css/theme/icons.css', array() , wp_get_theme()
		->get('Version') , 'all');
	wp_enqueue_style('xidipity-flexbox', get_stylesheet_directory_uri() . '/assets/css/theme/flexbox.css', array() , wp_get_theme()
		->get('Version') , 'all');
	wp_enqueue_style('xidipity-web', get_stylesheet_directory_uri() . '/assets/css/theme/web.css', array() , wp_get_theme()
		->get('Version') , 'all');
	/*: fontawesome css :*/
	// version set @ fa_ver
	wp_enqueue_style('xidipity-font-awesome', 'https://use.fontawesome.com/releases/v' . xty('fa-ver') . '/css/all.css', array() , xty('fa-ver') , 'all');
	/*: google material design icons :*/
	wp_enqueue_style('xidipity-md-icons', 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp', array() , wp_get_theme()
		->get('Version') , 'all');
	/*: wordpress dash icons :*/
	wp_enqueue_style( 'dashicons' );
	/*: animxyz :*/
	wp_enqueue_style('animxyz','https://cdn.jsdelivr.net/npm/@animxyz/core@0.1.1/dist/animxyz.min.css', array() , wp_get_theme()
		->get('Version') , 'all');
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
 * c_walker class
 */
require get_template_directory() . '/assets/classes/c_walker.php';
/**
 * p_walker class
 */
require get_template_directory() . '/assets/classes/p_walker.php';
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
add_action('admin_head', 'mce_add_apply_txt_italic_button');
function mce_add_apply_txt_italic_button()
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
		add_filter("mce_external_plugins", "add_tinymce_apply_txt_italic_plugin");
		add_filter('mce_buttons', 'register_mce_apply_txt_italic_button');
	}
}
function add_tinymce_apply_txt_italic_plugin($plugin_array)
{
	$plugin_array['apply_txt_italic'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-italic/plugin.js';
	return $plugin_array;
}
function register_mce_apply_txt_italic_button($buttons)
{
	array_push($buttons, 'apply_txt_italic');
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
 *  plugin: apply text font
 *  build:  27200615
 *  descr:  apply the following fonts
 *      - sans
 *      - serif
 *      - mono
 *      - cursive
 *      - condensed
 *		- fancy
 *
 */
add_action('admin_head', 'mce_add_apply_txt_font_button');
function mce_add_apply_txt_font_button()
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
		add_filter("mce_external_plugins", "add_tinymce_apply_txt_font_plugin");
		add_filter('mce_buttons', 'register_mce_apply_txt_font_button');
	}
}
function add_tinymce_apply_txt_font_plugin($plugin_array)
{
	$plugin_array['apply_txt_font'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-font/plugin.js';
	return $plugin_array;
}
function register_mce_apply_txt_font_button($buttons)
{
	array_push($buttons, "apply_txt_font");
	return $buttons;
}
/**
 *  plugin: apply text color
 *  build:  27200615
 *  descr:  apply the following text colors
 *      - black
 *      - grey (dim)
 *      - red
 *      - primary
 *      - secondary
 *		- green
 *		- purple
 *		- blue
 *
 */
add_action('admin_head', 'mce_add_apply_txt_color_button');
function mce_add_apply_txt_color_button()
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
		add_filter("mce_external_plugins", "add_tinymce_apply_txt_color_plugin");
		add_filter('mce_buttons', 'register_mce_apply_txt_color_button');
	}
}
function add_tinymce_apply_txt_color_plugin($plugin_array)
{
	$plugin_array['apply_txt_color'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-color/plugin.js';
	return $plugin_array;
}
function register_mce_apply_txt_color_button($buttons)
{
	array_push($buttons, "apply_txt_color");
	return $buttons;
}
/**
 *  plugin: apply text size
 *  build:  27200615
 *  descr:  apply the following sizes
 *      - 5x large
 *      - 4x large
 *      - 3x large
 *      - 2x large
 *      - x large
 *		- large
 *		- 1½ default
 *		- default
 *		- small
 *		- x small
 *		- 2x small
 *		- larger
 *		- smaller
 *
 */
add_action('admin_head', 'mce_add_apply_txt_size_button');
function mce_add_apply_txt_size_button()
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
		add_filter("mce_external_plugins", "add_tinymce_apply_txt_size_plugin");
		add_filter('mce_buttons', 'register_mce_apply_txt_size_button');
	}
}
function add_tinymce_apply_txt_size_plugin($plugin_array)
{
	$plugin_array['apply_txt_size'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-size/plugin.js';
	return $plugin_array;
}
function register_mce_apply_txt_size_button($buttons)
{
	array_push($buttons, "apply_txt_size");
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
 *  plugin: add icon
 *  build:  200513
 *  descr:  add icon code to HTML
 *
 */
add_action('admin_head', 'mce_add_icon_button');
function mce_add_icon_button()
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
		add_filter("mce_external_plugins", "add_tinymce_add_icon_plugin");
		add_filter('mce_buttons', 'register_mce_add_icon_button');
	}
}
function add_tinymce_add_icon_plugin($plugin_array)
{
	$plugin_array['add_icon'] = get_template_directory_uri() . '/assets/tinymceplugins/add-icon/plugin.js';
	return $plugin_array;
}
function register_mce_add_icon_button($buttons)
{
	array_push($buttons, "add_icon");
	return $buttons;
}
/**
 *  plugin: add video
 *  build:  30201115
 *  descr:  add video code to HTML
 *
 */
add_action('admin_head', 'mce_add_video_button');
function mce_add_video_button()
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
		add_filter("mce_external_plugins", "add_tinymce_add_video_plugin");
		add_filter('mce_buttons', 'register_mce_add_video_button');
	}
}
function add_tinymce_add_video_plugin($plugin_array)
{
	$plugin_array['add_video'] = get_template_directory_uri() . '/assets/tinymceplugins/add-video/plugin.js';
	return $plugin_array;
}
function register_mce_add_video_button($buttons)
{
	array_push($buttons, "add_video");
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
 *  plugin: apply style
 *  build:  30201001
 *  descr:  duplicate existing style
 *
 */
add_action('admin_head', 'mce_app_txt_style_button');
function mce_app_txt_style_button()
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
		add_filter("mce_external_plugins", "add_tinymce_app_txt_style_plugin");
		add_filter('mce_buttons', 'register_mce_app_txt_style_button');
	}
}
function add_tinymce_app_txt_style_plugin($plugin_array)
{
	$plugin_array['app_txt_style'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-text-style/plugin.js';
	return $plugin_array;
}
function register_mce_app_txt_style_button($buttons)
{
	array_push($buttons, "app_txt_style");
	return $buttons;
}

/**
 *  plugin: mce_app_adhoc_fmt_button
 *  build:  01210115
 *  descr:  apply adhoc format
 *
 */
add_action('admin_head', 'mce_app_adhoc_fmt_button');
function mce_app_adhoc_fmt_button()
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
		add_filter("mce_external_plugins", "add_tinymce_app_adhoc_fmt_plugin");
		add_filter('mce_buttons', 'register_mce_app_adhoc_fmt_button');
	}
}
function add_tinymce_app_adhoc_fmt_plugin($plugin_array)
{
	$plugin_array['app_adhoc_fmt'] = get_template_directory_uri() . '/assets/tinymceplugins/apply-adhoc-format/plugin.js';
	return $plugin_array;
}
function register_mce_app_adhoc_fmt_button($buttons)
{
	array_push($buttons, "app_adhoc_fmt");
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
	$in['toolbar1'] = 'undo,redo,|,apply_txt_font,formatselect,apply_txt_size,|,apply_txt_weight,apply_txt_italic,apply_txt_formats,app_txt_style,apply_txt_color,clear_format,link,|,apply_txt_align,|,add_lst_order,add_lst_unorder,|,app_adhoc_fmt,add_misc_opts,add_vert_space,add_horz_rule,|,table,add_multi_cols,add_template,add_icon,add_video,toggle_fullscreen,dfw';
	$in['toolbar2'] = '';
	$in['toolbar3'] = '';
	$in['toolbar4'] = '';
	$in['fontsize'] = '16px';
	$in['table_toolbar'] = '';
	$in['min_height'] = '375';
	$in['max_height'] = '450';
	$in['verify_html'] = false;
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
 *  build: 29200815
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
	if (empty($arg))
	{
		$msg = 'Error detected without explanation';
	}
	else
	{
		$msg = $arg;
	}
	$fn_retval = '<!-- TMPL:ALERT --><div class="bdr:bas-2 bdr:lt-so-3x bkg:tint-bas-1 cnr:arch-sm fx:r fxa:1 fxc:3 pad:hrz+1 pad:vrt+0.25"><div class="mar:rt+0.75 txt:red">​<i class="icon:error_solid fnt:siz-lg-1x"></i>​</div><div class="fnt:siz-sm-1x"><p>' . __($msg) . '</p></div></div><!-- /TMPL:ALERT -->';
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
function filter_categories($filter = '')
{
	// system
	$ret_val = '';
	$category_list = '';
	$categories = get_categories(array(
		'orderby' => 'name',
		'order' => 'ASC'
	));
	$category_filter = strtolower($filter);
	foreach ($categories as $category)
	{
		$category_id = $category->term_id;
		$category_name = strtolower($category->name);
		$category_parents = strtolower(get_category_parents($category_id, false, '/'));
		if (!has_match($category_parents, 'media library'))
		{
			if (!has_match($category_filter, $category_name))
			{
				$category_list .= $category_id . ',';
			}
		}
	}
	if (strlen($category_list) > 1)
	{
		$ret_val = substr($category_list, 0, -1);
	}
	// return string
	return $ret_val;
}
/**
 * name:    get_cat_IDs
 * descr:   convert one or more category name(s) to id(s)
 * build:   28200801
 * accepts:
 *   $arg - category name/names "-category" to exclude
 * return:  sorted string of IDs
 *
 */
function get_cat_IDs($args = '')
{
	$list = '';
	if (!empty($args))
	{
		// scrub list to standard format
		$cat_list = scrub_list($args);
		$categories = explode(',', $cat_list);
		foreach ($categories as $category)
		{
			if ($category[0] == '-')
			{
				$result = get_cat_ID(substr($category, 1));
				if (abs($result) > 0)
				{
					$list .= '-' . $result . ',';
				}
			}
			else
			{
				$result = get_cat_ID($category);
				if (abs($result) > 0)
				{
					$list .= $result . ',';
				}
			}
		}
		if (!empty($list))
		{
			$list = substr($list, 0, -1);
		}
	}
	// return string
	return $list;
}
/**
 * name:    valid_orderby
 * descr:   validate query orderby
 * build:   28200801
 * accepts:
 *   $orderby - orderby
 * return:  valid orderby / date
 *
 */
function valid_orderby($orderby = '')
{
	// default
	$result = '';
	if (!empty($orderby))
	{
		$orderby = strtolower($orderby);
		if (has_match($orderby,'author,comment_count,date,id,menu_order,modified,name,none,parent,post_date,post_modified,post_parent,post_title,rand,relevance,title'))
		{
			if ($orderby == 'id')
			{
				$result = 'ID';
			}
			else
			{
				$result = $orderby;
			}
		}
	}
	return $result;
}
/**
 *  name: purge_tmpl_mrker
 *  build: 191101.1
 *  description: Purge template default markers (#?#)
 *  attributes:
 *      $arg - string
 *  doc: https://xidipity.com/reference/source-code/functions/purge_tmpl_mrker/
 *
 */
function purge_tmpl_mrker($arg = '')
{
	// system
	$ret_val = '';
	// atributes
	$a_prm = trim($arg);
	if (!empty($a_prm))
	{
		// No #?#
		if (substr_count($a_prm, '#') < 2)
		{
			$ret_val = $a_prm;
		}
	}
	// return string
	return $ret_val;
}
/*  # post_category
    # 200422
    # return html
**/
function post_category($arg = '')
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
			if ($useCatLink == true && !empty($category_link) && !empty($arg))
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
/*  # post_category
    # 210618
    # return current year XXXX
**/
function currentYear() {
	return date('Y');
}
/*
 * EOF: functions.php / 210618-1
*/
?>
