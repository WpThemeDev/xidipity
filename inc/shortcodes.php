<?php
/**
 * ------------------------- Xidipity Short Codes -------------------------
 file        - shortcodes.php
 Build       - 90212.3
 Programmer  - John Baer
 Purpose     - Support file for Xidipity Wordpress Theme
 License     - GNU General Public License v2 or later (http://www.gnu.org/licenses/gpl-2.0.html)
 Sources     - https://codex.wordpress.org/Shortcode_API
 Comments    -
 **/

/**
 * Short code
 *
 * xidipity_gallery (deprecated)
 *
 * syntax - [xidipity_gallery orderby='' order='' opt=0 fmt=0 sdw=0]category 1,category 2, etc[/xidipity_gallery]
 *
 *  orderby (field name)
 *    post_date
 *    post_title
 *    post_author
 *
 *  order (acending / decending)
 *    asc
 *    desc
 *
 *  opt (display options)
 *    0 – do not display captions or descriptions (default)
 *    1 – display captions
 *    2 – display descriptions
 *    3 – display both captions and descriptions
 *
 *  fmt
 *    0 - full size
 *    1 - large
 *    2 - Medium
 *    3 - Small
 *
 *  sdw
 *    0 - no shadow
 *    1 - image shadow
 */

add_shortcode('xidipity_gallery', 'xidipity_gallery_shortcode');

function xidipity_gallery_shortcode($atts, $category_list)
{
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'orderby' => 'post_date',
            'order' => 'ASC',
            'opt' => 1,
            'fmt' => 2,
            'sdw' => 0
        );
        
    } else {
        
        if (!isset($atts['orderby'])) {
            $atts['orderby'] = 'post_date';
        }
        
        if (!isset($atts['order'])) {
            $atts['order'] = 'ASC';
        }
        
        if (!isset($atts['opt'])) {
            $atts['opt'] = 1;
        }
        
        if (!isset($atts['fmt'])) {
            $atts['fmt'] = 2;
        }
        
        if (!isset($atts['sdw'])) {
            $atts['sdw'] = 0;
        }
    }
    
    if (empty(trim($category_list))) {
        $html = disp_error('Xidipity Gallery Shortcode - no media category specified.');
    } else {
        $array     = explode(',', $category_list);
        $items     = array_filter($array, create_function('$a', 'return trim($a)!=="";'));
        $cat_items = '';
        foreach ($items as $item) {
            $cat_items .= $item . ',';
        }
        $categories = substr($cat_items, 0, -1);
        
        if (empty(trim($atts['orderby']))) {
            $atts['orderby'] = 'post_date';
        }
        if (!$atts['order'] == 'DESC') {
            $atts['order'] = 'ASC';
        }
        
        $defaults = array(
            'orderby' => 'post_date',
            'order' => 'ASC',
            'opt' => 0,
            'fmt' => 0,
            'sdw' => 0
        );
        
        $sc_arg = wp_parse_args($atts, $defaults);
        
        $query_args = array(
            'post_type' => 'attachment',
            'post_mime_type' => 'image',
            'orderby' => $sc_arg['orderby'],
            'order' => $sc_arg['order'],
            'posts_per_page' => '30',
            'post_status' => 'inherit',
            'category_name' => $category_list
        );
        
        $i          = 0;
        $html       = '<div class="xidipity-gallery">';
        $query_rslt = new WP_Query($query_args);
        while ($query_rslt->have_posts()):
            $query_rslt->the_post();
            $i++;
            $image       = wp_get_attachment_image_src(get_the_ID(), 'full'); // Full sized image
            $thumb       = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'thumbnail'); // Thumbnail size
            $img_id      = get_post(get_post_thumbnail_id());
            $caption_css = 'text-center';
            
            switch ($sc_arg['fmt']) {
                case (1):
                    $image_css = 'xidipity-gallery-itm-lg';
                    break;
                case (2):
                    $image_css = 'xidipity-gallery-itm-md';
                    break;
                case (3):
                    $image_css = 'xidipity-gallery-itm-sm';
                    break;
                default:
                    $image_css = 'xidipity-gallery-itm-fu';
            }
            
            $shadow_css = '';
            if ($sc_arg['sdw'] > 0) {
                $shadow_css = 'shadow';
            }
            
            $html .= '<div class="' . $image_css . '"><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img class="' . $shadow_css . '" src="' . $image[0] . '"></a>';
            if ($sc_arg['opt'] == 1 or $sc_arg['opt'] >= 3) {
                $html .= '<div class="' . $caption_css . '">' . $query_rslt->post->post_excerpt . '</div> <!-- Display Caption -->';
            }
            if ($sc_arg['opt'] == 2 or $sc_arg['opt'] >= 3) {
                $html .= $query_rslt->post->post_content . ' <!-- Display Description -->';
            }
            $html .= '</div>';
        endwhile;
        
        if ($i < 1) {
            $html = disp_error('Xidipity Gallery Shortcode - no images found assigned to (' . $categories . ').');
        }
        
        wp_reset_postdata();
    }
    
    return $html;
    
}

/**
 * Short code
 *
 * lst_pages (deprecate)
 *
 * build: 90105.1
 *
 * syntax - [lst_pages class="" before_item="" after_item="" depth=0 pid=0 xclude=0]
 *
 */

add_shortcode('lst_pages', 'lst_pages_shortcode');

function lst_pages_shortcode($atts)
{
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'class' => '',
            'before_item' => '',
            'after_item' => '',
            'depth' => 0,
            'pid' => 0,
            'xclude' => 0
        );
        
    } else {
        
        if (!isset($atts['class'])) {
            $atts['class'] = 'qtr-spaced';
        }
        
        if (!isset($atts['before_item'])) {
            $atts['before_item'] = '';
        }
        
        if (!isset($atts['after_item'])) {
            $atts['after_item'] = '';
        }
        
        if (!isset($atts['depth'])) {
            $atts['depth'] = 0;
        }
        
        if (!isset($atts['pid'])) {
            $atts['pid'] = 0;
        }
        
        if (!isset($atts['xclude'])) {
            $atts['xclude'] = '';
        }
    }
    
    // remove xidipity template defaults
    if ($atts['class'] == 'CLASS') {
        $atts['class'] = '';
    }
    if ($atts['before_item'] == 'STYLE') {
        $atts['before_item'] = '';
    }
    if ($atts['after_item'] == 'STYLE') {
        $atts['after_item'] = '';
    }
    if ($atts['xclude'] == 'IDs') {
        $atts['xclude'] = '';
    }
    
    $defaults = array(
        'class' => '',
        'before_item' => '',
        'after_item' => '',
        'depth' => 0,
        'pid' => 0,
        'xclude' => 0
    );
    
    $sc_arg = wp_parse_args($atts, $defaults);
    
    $query_args = array(
        'depth' => $sc_arg['depth'],
        'show_date' => '',
        'date_format' => get_option('date_format'),
        'child_of' => $sc_arg['pid'],
        'exclude' => $sc_arg['xclude'],
        'title_li' => '',
        'echo' => 0,
        'authors' => '',
        'sort_column' => 'menu_order, post_title',
        'link_before' => $sc_arg['before_item'],
        'link_after' => $sc_arg['after_item'],
        'item_spacing' => 'preserve',
        'walker' => ''
    );
    
    $html = '<ul>';
    if (!empty($sc_arg['class'])) {
        $html = '<ul class="' . $sc_arg['class'] . '">';
    }
    $html .= wp_list_pages($query_args);
    $html .= '</ul>';
    wp_reset_postdata();
    
    return $html;
    
}

/**
 * Short code
 *
 * page_list
 *
 * build: 90212.3
 *
 * syntax - [page_list class="" style_before="" style_after="" depth=0 xclude='']page[/page_list]
 *
 *  class = ur class
 *  style_before = style before title
 *  style_afer = stle after title
 *  depth = number of hierarchies to display
 *  xclude = page ids of pages to exclude
 *
 */

add_shortcode('page_list', 'page_list_shortcode');

function page_list_shortcode($atts,$page_title) {
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'class' => 'qtr-spaced',
            'style_before' => '',
            'style_after' => '',
            'depth' => 0,
            'xclude' => ''
        );
        
    } else {
        
        if (!isset($atts['class'])) {
            $atts['class'] = 'qtr-spaced';
        }
        
        if (!isset($atts['style_before'])) {
            $atts['style_before'] = '';
        }
        
        if (!isset($atts['style_after'])) {
            $atts['style_after'] = '';
        }
        
        if (!isset($atts['depth'])) {
            $atts['depth'] = 0;
        }
        
        if (!isset($atts['xclude'])) {
            $atts['xclude'] = '';
        }
    }
    
    // get starting page id
    $pid = 0;
    $page_err = false;
    if (!isset($page_title)) {
        $page_title = '';
    }
    if (!empty($page_title)) {
        $page = get_page_by_title($page_title);
        if ($page) {
          $pid = $page->ID;
        } else {
          $page_err = true;
        }
    }
    
    if (!$page_err) {
        // sanitized working variables
        $class = trim($atts['class']);
        $style_before = trim($atts['style_before']);
        $style_after = trim($atts['style_after']);
        $depth = $atts['depth'];
        $xclude = $atts['xclude'];
    
        // remove template defaults
        if (strtoupper($class) == 'CLASS') {
            $class = '';
        }
        if (strtoupper($style_before) == 'STYLE') {
            $style_before = '';
        }
        if (strtoupper($style_after) == 'STYLE') {
            $style_after = '';
        }
        if (strtoupper($xclude) == 'IDs') {
            $xclude = '';
        }
        
        $qry = array(
            'depth' => $depth,
            'date_format' => get_option('date_format'),
            'child_of' => $pid,
            'exclude' => $xclude,
            'echo' => false,
            'sort_column' => 'post_title',
            'link_before' => $style_before,
            'link_after' => $style_after,
            'item_spacing' => 'discard',
            'title_li'    => '',
            'walker' => ''
        );
        
        $html = '<ul>';
        if (!empty($class)) {
            $html = '<ul class="' . $class . '">';
        }
        $html .= wp_list_pages($qry);
        $html .= '</ul>';
    } else {
        $html = disp_error('Page List Template - (' . $page_title . ') page title not found.');
    }

    wp_reset_postdata();
    
    return $html;
    
}

/**
 * Short code
 *
 * lst_posts (deprecate)
 *
 * build: 90105.1
 *
 * syntax - [lst_posts class="" before_item="" after_item="" order_by="" order="" cat="" xclude=0]
 *
 */

add_shortcode('lst_posts', 'lst_posts_shortcode');

function lst_posts_shortcode($atts)
{
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'class' => '',
            'before_item' => '',
            'after_item' => '',
            'order_by' => 'post_title',
            'order' => 'ASC',
            'cat' => '',
            'xclude' => 0
        );
        
    } else {
        
        if (!isset($atts['class'])) {
            $atts['class'] = 'qtr-spaced';
        }
        
        if (!isset($atts['before_item'])) {
            $atts['before_item'] = '';
        }
        
        if (!isset($atts['after_item'])) {
            $atts['after_item'] = '';
        }
        
        if (!isset($atts['order_by'])) {
            $atts['order_by'] = 'post_title';
        }
        
        if (!isset($atts['order'])) {
            $atts['order'] = 'ASC';
        }
        
        if (!isset($atts['cat'])) {
            $atts['cat'] = '';
        }
        
        if (!isset($atts['xclude'])) {
            $atts['xclude'] = '';
        }
    }
    
    // remove xidipity template defaults
    if ($atts['class'] == 'CLASS') {
        $atts['class'] = '';
    }
    if ($atts['before_item'] == 'STYLE') {
        $atts['before_item'] = '';
    }
    if ($atts['after_item'] == 'STYLE') {
        $atts['after_item'] = '';
    }
    if ($atts['cat'] == 'NAMEs') {
        $atts['cat'] = '';
    }
    if ($atts['xclude'] == 'IDs') {
        $atts['xclude'] = '';
    }
    
    $defaults = array(
        'class' => '',
        'before_item' => '',
        'after_item' => '',
        'order_by' => 'post_title',
        'order' => 'ASC',
        'cat' => '',
        'xclude' => 0
    );
    
    $sc_arg = wp_parse_args($atts, $defaults);
    
    $query_args = array(
        'posts_per_page' => -1,
        'offset' => 0,
        'category' => '',
        'category_name' => $sc_arg['cat'],
        'orderby' => $sc_arg['order_by'],
        'order' => $sc_arg['order'],
        'include' => '',
        'exclude' => $sc_arg['xclude'],
        'meta_key' => '',
        'meta_value' => '',
        'post_type' => 'post',
        'post_mime_type' => '',
        'post_parent' => '',
        'author' => '',
        'author_name' => '',
        'post_status' => 'publish',
        'suppress_filters' => true
    );
    
    if (!empty($sc_arg['class'])) {
        $html = '<ul class="' . $sc_arg['class'] . '">';
    } else {
        $html = '<ul>';
    }
    $posts = get_posts($query_args);
    foreach ($posts as $post) {
        $html .= '<li><a href="';
        $html .= get_permalink($post);
        $html .= '">';
        if (!empty($sc_arg['before_item'])) {
            $html .= $sc_arg['before_item'];
        }
        $html .= $post->post_title;
        if (!empty($sc_arg['after_item'])) {
            $html .= $sc_arg['after_item'];
        }
        $html .= '</a></li>';
    }
    $html .= '</ul>';
    
    wp_reset_postdata();
    
    return $html;
    
}

/**
 * Short code
 *
 * blog_list
 *
 * build: 90210.1
 *
 * syntax - [blog_list class="" style_before="" style_after="" order_by="" order="" filter=0]category 1,category 2, etc[/blog_list]
 *
 */

add_shortcode('blog_list', 'blog_list_shortcode');

function blog_list_shortcode($atts, $category_list) {
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'class' => 'qtr-spaced',
            'style_before' => '',
            'style_after' => '',
            'order_by' => 'title',
            'order' => 'DESC',
            'filter' => 0
        );
        
    } else {
        
        if (!isset($atts['class'])) {
            $atts['class'] = 'qtr-spaced';
        }
        
        if (!isset($atts['style_before'])) {
            $atts['style_before'] = '';
        }
        
        if (!isset($atts['style_after'])) {
            $atts['style_after'] = '';
        }
        
        if (!isset($atts['order_by'])) {
            $atts['order_by'] = 'title';
        }
        
        if (!isset($atts['order'])) {
            $atts['order'] = 'DESC';
        }
        
        if (!isset($atts['filter'])) {
            $atts['filter'] = 0;
        }
    }

    // sanitized working variables
    $class = trim($atts['class']);
    $style_before = trim($atts['style_before']);
    $style_after = trim($atts['style_after']);
    
    $orderby = valid_orderby($atts['orderby']);
    $order = strtolower($atts['order']);
    if (!$order == 'DESC') {
        $order = 'ASC';
    }
    
    // remove template defaults
    if (strtoupper($class) == 'CLASS') {
        $class = '';
    }
    if (strtoupper($style_before) == 'STYLE') {
        $style_before = '';
    }
    if (strtoupper($style_after) == 'STYLE') {
        $style_after = '';
    }

    $filter = 'i';
    if ($atts['filter'] == 1) {$filter = 'x';}
    $categories = valid_categories($category_list,$filter);

    if (!empty($categories)) {
        $qry = array(
            'posts_per_page' => -1,
            'offset' => 0,
            'cat' => $categories,
            'orderby' => $orderby,
            'order' => $order,
            'post_type' => 'post',
            'post_status' => 'publish',
            'suppress_filters' => true
        );
        
        if (!empty($class)) {
            $html = '<ul class="' . $class . '">';
        } else {
            $html = '<ul>';
        }
        
        $posts = get_posts($qry);
        $cnt = 0;
        foreach ($posts as $post) {
            $cnt++;
            $html .= '<li><a href="' . get_permalink($post) . '">';
            $html .=  $style_before . $post->post_title . $style_after;
            $html .= '</a></li>';
        }
        $html .= '</ul>';
    
        if ($cnt == 0) {
          $html = disp_error('Blog List Template - no posts found assigned to (' . $category_list . ').');
        }
        
        wp_reset_postdata();
        
    } else {
      $html = disp_error('Blog List Template - missing valid category.');
    }
    
    return $html;
    
}

/**
 * Short code
 *
 * lst_cats
 *
 * build: 90103.1
 *
 * syntax - [lst_cats class="" active='0/1' depth=0 pid=0 show_cnt='0/1' xclude=""]
 *
 */

add_shortcode('lst_cats', 'lst_cats_shortcode');

function lst_cats_shortcode($atts)
{
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'class' => '',
            'active' => false,
            'depth' => 0,
            'pid' => 0,
            'show_cnt' => false,
            'xclude' => ''
        );
        
    } else {
        
        if (!isset($atts['class'])) {
            $atts['class'] = 'qtr-spaced';
        }
        
        if (!isset($atts['active'])) {
            $atts['active'] = false;
        }
        
        if (!isset($atts['pid'])) {
            $atts['pid'] = 0;
        }
        
        if (!isset($atts['show_cnt'])) {
            $atts['show_cnt'] = false;
        }
        
        if (!isset($atts['xclude'])) {
            $atts['xclude'] = '';
        }
    }
    
    $defaults = array(
        'class' => '',
        'active' => false,
        'depth' => 0,
        'pid' => 0,
        'show_cnt' => false,
        'xclude' => ''
    );
    
    $sc_arg = wp_parse_args($atts, $defaults);
    
    $query_args = array(
        'child_of' => $sc_arg['pid'],
        'current_category' => 0,
        'depth' => $sc_arg['depth'],
        'echo' => false,
        'exclude' => $sc_arg['xclude'],
        'exclude_tree' => '',
        'feed' => '',
        'feed_image' => '',
        'feed_type' => '',
        'hide_empty' => $sc_arg['active'],
        'hide_title_if_empty' => false,
        'hierarchical' => true,
        'order' => 'ASC',
        'orderby' => 'name',
        'separator' => '<br />',
        'show_count' => $sc_arg['show_cnt'],
        'show_option_all' => '',
        'show_option_none' => __('No categories', 'xidipity'),
        'style' => 'list',
        'taxonomy' => 'category',
        'title_li' => '',
        'use_desc_for_title' => 0
    );
    
    $html = '<ul>';
    if (!empty($sc_arg['class'])) {
        $html = '<ul class="' . $sc_arg['class'] . '">';
    }
    $html .= wp_list_categories($query_args);
    $html .= '</ul>';
    
    wp_reset_postdata();
    
    return $html;
    
}

/**
 * Short code
 *
 * google_adsense
 *
 * syntax - [google_adsense client="" slot=""]
 *
 */

add_shortcode('google_adsense', 'google_adsense_shortcode');

function google_adsense_shortcode($atts)
{
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'client' => '',
            'slot' => ''
        );
        
    } else {
        
        if (!isset($atts['client'])) {
            $atts['client'] = '';
        }
        
        if (!isset($atts['slot'])) {
            $atts['slot'] = '';
        }
    }
    
    $defaults = array(
        'client' => '',
        'slot' => ''
    );
    
    $sc_arg = wp_parse_args($atts, $defaults);
    
    if (empty($sc_arg['client'])) {
        $html = disp_error('Xidipity Adsense Shortcode - missing data-ad-client data.');
    } elseif (empty($sc_arg['slot'])) {
        $html = disp_error('Xidipity Adsense Shortcode - missing data-ad-slot data.');
    } else {
        $html = '<p class="mce:hidden"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- Responsive --> <ins class="adsbygoogle" style="display: block;" data-ad-client="' . $sc_arg['client'] . '" data-ad-slot="' . $sc_arg['slot'] . '" data-ad-format="auto" data-full-width-responsive="false"></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script></p>';
    }
    
    return $html;
    
}

/**
 * Short code
 *
 * lst_blogs (deprecate)
 *
 * build: 90210.1
 *
 * syntax - [lst_blogs orderby='' order='' fmt=0 cnt=0 filter=0]category 1,category 2, etc[/lst_blogs]
 *
 *  orderby (field name)
 *    date
 *    title
 *    author
 *
 *  order (acending / decending)
 *    asc
 *    desc
 *
 *  fmt (format)
 *    0 = featured image left
 *    1 = featured image center (default)
 *    2 = featured image right
 *
 * filter
 *    0 = inclusive
 *    1 = exclusive
 *
 *  cnt (#)
 *
 * Note: if the category argument is missing, all non sticky posts will be returned
 *
 */

add_shortcode('lst_blogs', 'lst_blogs_shortcode');

function lst_blogs_shortcode($atts, $category_list) {
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'orderby' => 'date',
            'order' => 'DESC',
            'fmt' => 1,
            'cnt' => 4,
            'filter' => 0
        );
        
    } else {
        
        if (!isset($atts['orderby'])) {
            $atts['orderby'] = 'date';
        }
        
        if (!isset($atts['order'])) {
            $atts['order'] = 'DESC';
        }
        
        if (!isset($atts['fmt'])) {
            $atts['fmt'] = 1;
        }
        
        if (!isset($atts['cnt'])) {
            $atts['cnt'] = 4;
        }
        
        if (!isset($atts['filter'])) {
            $atts['filter'] = 0;
        }
        
    }
    
    // sanitized working variables
    $filter = 'i';
    if ($atts['filter'] == 1) {$filter = 'x';}
    $categories = valid_categories($category_list,$filter);
    $orderby = valid_orderby($atts['orderby']);
    $order = strtoupper($atts['order']);
    if (!$order == 'ASC') {
        $order = 'DESC';
    }

    $val = $atts['fmt'];
    switch ($val) {
      case 0:
        $fmt = 0;
        break;
      case 2:
        $fmt = 2;
        break;
      default:
        $fmt = 1;
    }
    $val = $atts['cnt'];
    switch ($val) {
      case !is_numeric($val):
        $post_cnt = 4;
        break;
      case ($val < 1):
        $post_cnt = 4;
        break;
      default:
        $post_cnt = $val;
    }

    // Set up initial query for post
    $qry = array(
        'cat' => $categories,
        'ignore_sticky_posts' => true,
        'order' => $order,
        'orderby' => $orderby,
        'perm' => 'readable',
        'post_type' => 'post',
        'posts_per_page' => $post_cnt
    );
    
    $qry_rslt = new WP_Query($qry);
    
    if ($qry_rslt->have_posts()) {
    
        $html       = '';
        $pane       = 'L';
        $image_size = 'large';
        
        while ($qry_rslt->have_posts()):
            $qry_rslt->the_post();
            global $post;
            
            $i++;
            switch ($fmt) {
                case 1:
                    $image   = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID(), $image_size) . '</a>';
                    $title   = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified') {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    } else {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    if ($pane == 'L') {
                        $pane = 'R';
                        $html .= '<table id="twocol" class="twocolumn">';
                        $html .= '<tbody>';
                        $html .= '<tr>';
                        $html .= '<td>';
                        $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                        $html .= '<p>&nbsp;</p>';
                        $html .= $title;
                        $html .= $stamp;
                        $html .= $excerpt;
                        $html .= '<p>&nbsp;</p>';
                        $html .= '<div style="height:40px; width: 100%;">';
                        $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-900); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
                        $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                        $html .= '</div>';
                        $html .= '</td>';
                    } else {
                        $pane = 'L';
                        $html .= '<td>';
                        $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                        $html .= '<p>&nbsp;</p>';
                        $html .= $title;
                        $html .= $stamp;
                        $html .= $excerpt;
                        $html .= '<p>&nbsp;</p>';
                        $html .= '<div style="height:40px; width: 100%;">';
                        $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-900); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
                        $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                        $html .= '</div>';
                        $html .= '</td>';
                        $html .= '</tr>';
                        $html .= '</tbody>';
                        $html .= '</table>';
                        $html .= '<p>&nbsp;</p>';
                    }
                    break;
                case 2:
                    $image   = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID(), $image_size) . '</a>';
                    $title   = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified') {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    } else {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    
                    $html .= '<table id="twocol" class="twocolumn">';
                    $html .= '<tbody>';
                    $html .= '<tr>';
                    $html .= '<td>';
                    $html .= $title;
                    $html .= $stamp;
                    $html .= $excerpt;
                    $html .= '<p>&nbsp;</p>';
                    $html .= '<div style="height:40px; width: 100%;">';
                    $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-900); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
                    $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                    $html .= '</div>';
                    $html .= '</td>';
                    $html .= '<td>';
                    $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                    $html .= '</td>';
                    $html .= '</tr>';
                    $html .= '</tbody>';
                    $html .= '</table>';
                    $html .= '<p>&nbsp;</p>';
                    break;
                default:
                    $image   = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID(), $image_size) . '</a>';
                    $title   = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified') {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    } else {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    
                    $html .= '<table id="twocol" class="twocolumn">';
                    $html .= '<tbody>';
                    $html .= '<tr>';
                    $html .= '<td>';
                    $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                    $html .= '</td>';
                    $html .= '<td>';
                    $html .= $title;
                    $html .= $stamp;
                    $html .= $excerpt;
                    $html .= '<p>&nbsp;</p>';
                    $html .= '<div style="height:40px; width: 100%;">';
                    $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-900); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
                    $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                    $html .= '</div>';
                    $html .= '</td>';
                    $html .= '</tr>';
                    $html .= '</tbody>';
                    $html .= '</table>';
                    $html .= '<p>&nbsp;</p>';
            }
        endwhile;
        
        if ($fmt == 1 && $pane == 'R') {
            $html .= '<td>';
            $html .= '<p>&nbsp;</p>';
            $html .= '</td>';
            $html .= '</tr>';
            $html .= '</tbody>';
            $html .= '</table>';
            $html .= '<p>&nbsp;</p>';
        }
    
    } else {

        $html = disp_error('List Blogs Template - no posts assigned to (' . $category_list . ').');

    }
      
    wp_reset_postdata();
    
    return $html;
    
}

/**
 * Short code
 *
 * blog_summary
 *
 * build: 90210.1
 *
 * syntax - [blog_summary orderby='' order='' fmt=0 cnt=0 filter=0]category 1,category 2, etc[/blog_summary]
 *
 *  orderby (field name)
 *    date
 *    title
 *    author
 *
 *  order (acending / decending)
 *    asc
 *    desc
 *
 *  fmt (format)
 *    0 = featured image left
 *    1 = featured image center (default)
 *    2 = featured image right
 *
 * filter
 *    0 = inclusive
 *    1 = exclusive
 *
 *  cnt (#)
 *
 * Note: if the category argument is missing, all non sticky posts will be returned
 *
 */

add_shortcode('blog_summary', 'blog_summary_shortcode');

function blog_summary_shortcode($atts, $category_list) {
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'orderby' => 'date',
            'order' => 'DESC',
            'fmt' => 1,
            'cnt' => 4,
            'filter' => 0
        );
        
    } else {
        
        if (!isset($atts['orderby'])) {
            $atts['orderby'] = 'date';
        }
        
        if (!isset($atts['order'])) {
            $atts['order'] = 'DESC';
        }
        
        if (!isset($atts['fmt'])) {
            $atts['fmt'] = 1;
        }
        
        if (!isset($atts['cnt'])) {
            $atts['cnt'] = 4;
        }
        
        if (!isset($atts['filter'])) {
            $atts['filter'] = 0;
        }
        
    }
    
    // sanitized working variables
    $filter = 'i';
    if ($atts['filter'] == 1) {$filter = 'x';}
    $categories = valid_categories($category_list,$filter);
    $orderby = valid_orderby($atts['orderby']);
    $order = strtoupper($atts['order']);
    if (!$order == 'ASC') {
        $order = 'DESC';
    }

    $val = $atts['fmt'];
    switch ($val) {
      case 0:
        $fmt = 0;
        break;
      case 2:
        $fmt = 2;
        break;
      default:
        $fmt = 1;
    }
    $val = $atts['cnt'];
    switch ($val) {
      case !is_numeric($val):
        $post_cnt = 4;
        break;
      case ($val < 1):
        $post_cnt = 4;
        break;
      default:
        $post_cnt = $val;
    }

    // Set up initial query for post
    $qry = array(
        'cat' => $categories,
        'ignore_sticky_posts' => true,
        'order' => $order,
        'orderby' => $orderby,
        'perm' => 'readable',
        'post_type' => 'post',
        'posts_per_page' => $post_cnt
    );
    
    $qry_rslt = new WP_Query($qry);
    
    if ($qry_rslt->have_posts()) {
    
        $html       = '';
        $pane       = 'L';
        $image_size = 'large';
        
        while ($qry_rslt->have_posts()):
            $qry_rslt->the_post();
            global $post;
            
            $i++;
            switch ($fmt) {
                case 1:
                    $image   = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID(), $image_size) . '</a>';
                    $title   = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified') {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    } else {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    if ($pane == 'L') {
                        $pane = 'R';
                        $html .= '<table id="twocol" class="twocolumn">';
                        $html .= '<tbody>';
                        $html .= '<tr>';
                        $html .= '<td>';
                        $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                        $html .= '<p>&nbsp;</p>';
                        $html .= $title;
                        $html .= $stamp;
                        $html .= $excerpt;
                        $html .= '<p>&nbsp;</p>';
                        $html .= '<div style="height:40px; width: 100%;">';
                        $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-900); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
                        $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                        $html .= '</div>';
                        $html .= '</td>';
                    } else {
                        $pane = 'L';
                        $html .= '<td>';
                        $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                        $html .= '<p>&nbsp;</p>';
                        $html .= $title;
                        $html .= $stamp;
                        $html .= $excerpt;
                        $html .= '<p>&nbsp;</p>';
                        $html .= '<div style="height:40px; width: 100%;">';
                        $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-900); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
                        $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                        $html .= '</div>';
                        $html .= '</td>';
                        $html .= '</tr>';
                        $html .= '</tbody>';
                        $html .= '</table>';
                        $html .= '<p>&nbsp;</p>';
                    }
                    break;
                case 2:
                    $image   = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID(), $image_size) . '</a>';
                    $title   = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified') {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    } else {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    
                    $html .= '<table id="twocol" class="twocolumn">';
                    $html .= '<tbody>';
                    $html .= '<tr>';
                    $html .= '<td>';
                    $html .= $title;
                    $html .= $stamp;
                    $html .= $excerpt;
                    $html .= '<p>&nbsp;</p>';
                    $html .= '<div style="height:40px; width: 100%;">';
                    $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-900); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
                    $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                    $html .= '</div>';
                    $html .= '</td>';
                    $html .= '<td>';
                    $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                    $html .= '</td>';
                    $html .= '</tr>';
                    $html .= '</tbody>';
                    $html .= '</table>';
                    $html .= '<p>&nbsp;</p>';
                    break;
                default:
                    $image   = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID(), $image_size) . '</a>';
                    $title   = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified') {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    } else {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    
                    $html .= '<table id="twocol" class="twocolumn">';
                    $html .= '<tbody>';
                    $html .= '<tr>';
                    $html .= '<td>';
                    $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                    $html .= '</td>';
                    $html .= '<td>';
                    $html .= $title;
                    $html .= $stamp;
                    $html .= $excerpt;
                    $html .= '<p>&nbsp;</p>';
                    $html .= '<div style="height:40px; width: 100%;">';
                    $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-900); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
                    $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                    $html .= '</div>';
                    $html .= '</td>';
                    $html .= '</tr>';
                    $html .= '</tbody>';
                    $html .= '</table>';
                    $html .= '<p>&nbsp;</p>';
            }
        endwhile;
        
        if ($fmt == 1 && $pane == 'R') {
            $html .= '<td>';
            $html .= '<p>&nbsp;</p>';
            $html .= '</td>';
            $html .= '</tr>';
            $html .= '</tbody>';
            $html .= '</table>';
            $html .= '<p>&nbsp;</p>';
        }
    
    } else {

        $html = disp_error('Blog Summary Template - no blog posts assigned to (' . $category_list . ').');

    }
      
    wp_reset_postdata();
    
    return $html;
    
}

/**
 * Short code
 *
 * img_gallery
 *
 * build: 90210.1
 *
 * syntax - [img_gallery orderby='' order='' opt=0 col=0 cap=0 sdw=0 filter=0]category 1,category 2, etc[/img_gallery]
 *
 *  orderby (field name)
 *    date (default)
 *    post_title
 *    post_author
 *
 *  order (acending / decending)
 *    asc
 *    desc (default)
 *
 *  opt (display options)
 *    0 – do not display captions or descriptions (default)
 *    1 – display captions
 *    2 – display descriptions
 *    3 – display both captions and descriptions
 *
 *  col
 *    1 - 1 column
 *    2 - 2 column (default)
 *    3 - 3 column
 *    4 - 4 column
 *
 *  cap
 *    0 - caption left (default)
 *    1 - caption center
 *    2 - caption right
 *
 *  sdw
 *    0 - no image shadow (default)
 *    1 - image shadow
 *
 * filter
 *    0 = inclusive
 *    1 = exclusive
 *
 */

add_shortcode('img_gallery', 'img_gallery_shortcode');

function img_gallery_shortcode($atts, $category_list) {
    // done if no categories
    if (empty(trim($category_list))) {
        $html = disp_error('Image Gallery Template - missing media category.');
    } else {
        // check for & fix missing arguments
        if (!is_array($atts)) {
            $atts = array(
                'orderby' => 'date',
                'order' => 'DESC',
                'opt' => 1,
                'col' => 2,
                'cap' => 0,
                'sdw' => 0,
                'filter' => 0
            );
        } else {
            if (!isset($atts['orderby'])) {
                $atts['orderby'] = 'date';
            }
            if (!isset($atts['order'])) {
                $atts['order'] = 'DESC';
            }
            if (!isset($atts['opt'])) {
                $atts['opt'] = 1;
            }
            if (!isset($atts['col'])) {
                $atts['col'] = 2;
            }
            if (!isset($atts['cap'])) {
                $atts['cap'] = 0;
            }
            if (!isset($atts['sdw'])) {
                $atts['sdw'] = 0;
            }
            if (!isset($atts['filter'])) {
                $atts['filter'] = 0;
            }
        }
        // sanitized working variables
        $orderby = valid_orderby($atts['orderby']);
        $order = strtolower($atts['order']);
        if (!$order == 'DESC') {
            $order = 'ASC';
        }
        $val = $atts['opt'];
        switch ($val) {
          case !is_numeric($val):
            $opt = 0;
            break;
          case ($val > 3):
            $opt = 0;
            break;
          default:
            $opt = $val;
        }
        $val = $atts['col'];
        switch ($val) {
          case !is_numeric($val):
            $max_col = 2;
            break;
          case ($val > 4):
            $max_col = 2;
            break;
          default:
            $max_col = $val;
        }
        $val = $atts['cap'];
        switch ($val) {
          case !is_numeric($val):
            $cap = 1;
            $cap_style = 'style="text-align:left;"';
            if ($max_col > 2) {
              $cap_style = 'style="text-align:left;font-size:smaller;"';
            }
            break;
          case ($val == 0):
            $cap = 1;
            $cap_style = 'style="text-align:left;"';
            if ($max_col > 2) {
              $cap_style = 'style="text-align:left;font-size:smaller;"';
            }
            break;
          case ($val == 1):
            $cap = 2;
            $cap_style = 'style="text-align:center;"';
            if ($max_col > 2) {
              $cap_style = 'style="text-align:center;font-size:smaller;"';
            }
            break;
          case ($val == 2):
            $cap = 3;
            $cap_style = 'style="text-align:right;"';
            if ($max_col > 2) {
              $cap_style = 'style="text-align:right;font-size:smaller;"';
            }
            break;
          default:
            $cap = 1;
            $cap_style = 'style="text-align:left;"';
            if ($max_col > 2) {
              $cap_style = 'style="text-align:left;font-size:smaller;"';
            }
        }
        $val = $atts['sdw'];
        switch ($val) {
          case !is_numeric($val):
            $sdw = 0;
            $sdw_class = '';
            break;
          case ($val > 0):
            $sdw = 1;
            $sdw_class = 'class="shadow"';
            break;
          default:
            $sdw = 0;
            $sdw_class = '';
        }

        $filter = 'i';
        if ($atts['filter'] == 1) {$filter = 'x';}
        $categories = valid_categories($category_list,$filter);

        // run query
        $qry = array(
            'post_type' => 'attachment',
            'post_mime_type' => 'image',
            'orderby' => $orderby,
            'order' => $order,
            'posts_per_page' => '30',
            'post_status' => 'inherit',
            'cat' => $categories
        );
        $qry_rslt = new WP_Query($qry);

        if ($qry_rslt->have_posts()) {
            // working variables
            $new_row = true;
            $cur_col = 1;
            $html    = '<!-- 900208.1 Template: general / table / responsive -->';
            $html   .= '<table id="responsive">';
            $html   .= '<tbody>';

            while ($qry_rslt->have_posts()):
                $qry_rslt->the_post();
                $image  = wp_get_attachment_image_src(get_the_ID(), 'full'); // Full sized image
                $thumb  = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'thumbnail'); // Thumbnail size
                $img_id = get_post(get_post_thumbnail_id());
                
                if ( $new_row ) {
                  $html .= '<tr>';
                }
                $html .= '<td>';
                $html .= '<a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img ' . $sdw_class  . ' src="' . $image[0] . '"></a>';

                if ( $opt == 1 || $opt == 3 ) {
                    $html .= '<div ' . $cap_style . '>' . $qry_rslt->post->post_excerpt . '</div>';
                }
                if ( $opt == 2 || $opt == 3 ) {
                    $html .= '<p>' . $qry_rslt->post->post_content . '</p>';
                }
                $html .= '</td>';
    
                $cur_col++;
                $new_row = ($cur_col > $max_col);

                if ( $new_row ) {
                  $html .= '</tr>';
                  $cur_col = 1;
                }

            endwhile;
                    
            if ( !$new_row ) {
                $html .= '</tr>';
            }
            $html .= '</tbody>';
            $html .= '</table>';

        } else {

            $html = disp_error('Image Gallery Template - no images found assigned to (' . $category_list . ').');

        }
        
        wp_reset_postdata();
            
    }
    
    return $html;
    
}

/**
 * Short code
 *
 * lst_theme
 *
 * build: 90108.1
 *
 * syntax - [lst_theme property="" label=""]
 *
 *  property values include
 *    Name
 *    ThemeURI
 *    Description
 *    Author
 *    Version
 *    Status
 *    Tags
 *
 */

add_shortcode('lst_theme', 'lst_theme_shortcode');

function lst_theme_shortcode($atts) {
    
    // check for & fix missing arguments
    
    if (!is_array($atts)) {
        $atts = array(
            'property' => 'Name',
            'label' => ''
        );
        
    } else {
        
        if (empty($atts['property'])) {
            $atts['property'] = 'Name';
        }
        
    }
    
    // sanitize inputs
    $args = strtoupper($atts['property']);
    switch ($args) {
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
            $opt           = 'Name';
            $atts['label'] = '<sup><i class="fas fa-map-marker" style="color:#c62828;">&#x200B;</i></sup>';
    }
    
    $my_theme = wp_get_theme();
    
    if (empty($atts['label'])) {
        return $my_theme->get($opt);
    } else {
        return $my_theme->get($opt) . ' ' . $atts['label'];
    }
}

/* -------------------------------------------------------------------------------------/
 * functions
** ----------------------------------------------------------------------------------- */

/**
 * function
 *
 * disp_error
 *
 * syntax - $html = disp_error('Error message');
 *
 */
function disp_error($msg)
{
    
    return '<div style="background-color: #f7f7f7; border-left: 5px solid #d32f2f; padding: 10px; width: 100%;">' . $msg . '</div>';
    
}

/**
 * function
 *
 * valid_categories
 *
 * return sanitized list of include/exclude categories id's separated by a comma
 *
 * syntax - valid_categories ( $category_lst, $category_opt )
 *
 *  $category_lst = comma separated category list
 *  $category_opt = (i) categories to include  (default)
 *                  (x) categories to exclude
 *
 */

function valid_categories($category_lst,$category_opt='i') {
  $retval = '';
  if (!empty(trim($category_lst))) {
      $category_opt = strtolower($category_opt);
      $opt_chr = '';
      if ( $category_opt == 'x' ) $opt_chr = '-';
      $category_lst = str_replace(' ',',',$category_lst);
      $category_lst = str_replace('.',',',$category_lst);
      $category_lst = str_replace('/',',',$category_lst);
      $cat_array = explode(',', $category_lst);
      $lst_items = array_filter($cat_array);
      $cat_lst   = '';
      foreach ($lst_items as $lst_item) {
          $objCat = get_category_by_slug($lst_item);
          if ( $objCat instanceof WP_Term ) {
            $cat_lst .= $opt_chr . $objCat->term_id . ',';
          }
      }
      $retval = substr($cat_lst, 0, -1);
  }
  return $retval;
}

/**
 * function
 *
 * valid_orderby
 *
 * return sanitized orderby variable
 *
 * syntax - valid_orderby ( $arg )
 *
 *  $arg = orderby variable to validate
 *
 */

function valid_orderby($arg) {
  $ret_val = 'none';
  if (!empty(trim($arg))) {
      $valid_opts = array('none','id','author','title','post_title','name','date','post_date','modified','post_modified','parent','post_parent','rand','comment_count','menu_order','relevance');
      if (in_array(strtolower($arg), $valid_opts)) {
        $ret_val = strtolower($arg);
        if ( $ret_val == 'id' ) { $ret_val = 'ID'; }
        if ( substr($ret_val, 0, 5) == 'post_') {
          $ret_val = substr_replace($ret_val, '', 0, 5);
        }
      }
  }
  return $ret_val;
}

?>
