<?php
/**
 * ------------------------- Xidipity Short Codes -------------------------
 file        - shortcodes.php
 Build       - 81218.2
 Programmer  - John Baer
 Purpose     - Support file for Xidipity Wordpress Theme
 License     - GNU General Public License v2 or later (http://www.gnu.org/licenses/gpl-2.0.html)
 Sources     - https://codex.wordpress.org/Shortcode_API
 Comments    -
 **/

/**
 * Short code
 *
 * xidipity_gallery
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
    if (!$atts['order'] == 'desc') {
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
 * lst_pages
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
      $atts['class'] = 'dbl-spaced';
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
 * lst_posts
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
      $atts['class'] = 'dbl-spaced';
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
 * lst_cats
 *
 * syntax - [lst_cats style="" active=0 depth=0 pid=0 cnt=0 xclude=0]
 *
 */

add_shortcode('lst_cats', 'lst_cats_shortcode');

function lst_cats_shortcode($atts)
{
  
  // check for & fix missing arguments
  
  if (!is_array($atts)) {
    $atts = array(
      'style' => '',
      'active' => 1,
      'depth' => 0,
      'pid' => 0,
      'cnt' => 0,
      'xclude' => 0
    );
    
  } else {
    
    if (!isset($atts['style'])) {
      $atts['style'] = 'dbl-spaced';
    }
    
    if (!isset($atts['active'])) {
      $atts['active'] = 1;
    }
    
    if (!isset($atts['pid'])) {
      $atts['pid'] = 0;
    }
    
    if (!isset($atts['cnt'])) {
      $atts['cnt'] = 0;
    }
    
    if (!isset($atts['xclude'])) {
      $atts['xclude'] = '';
    }
  }
  
  $defaults = array(
    'style' => '',
    'active' => 1,
    'depth' => 0,
    'pid' => 0,
    'cnt' => 0,
    'xclude' => 0
  );
  
  $sc_arg = wp_parse_args($atts, $defaults);
  
  $query_args = array(
    'child_of' => $sc_arg['pid'],
    'current_category' => 0,
    'depth' => $sc_arg['depth'],
    'echo' => 0,
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
    'show_count' => $sc_arg['cnt'],
    'show_option_all' => '',
    'show_option_none' => __('No categories', 'xidipity'),
    'style' => 'list',
    'taxonomy' => 'category',
    'title_li' => '',
    'use_desc_for_title' => 0
  );
  
  $html = '<ul>';
  if (!empty($sc_arg['style'])) {
    $html = '<ul class="' . $sc_arg['style'] . '">';
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
 * lst_blogs
 * build: 81218.1
 *
 * syntax - [lst_blogs orderby='' order='' fmt=0 posts=0]category 1,category 2, etc[/lst_blogs]
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
 *  fmt (format)
 *    0 = featured image left
 *    1 = featured image center
 *    2 = featured image right
 *
 *  posts (#)
 *
 *
 */

add_shortcode('lst_blogs', 'lst_blogs_shortcode');

function lst_blogs_shortcode($atts, $category_list)
{
  
  // check for & fix missing arguments
  
  if (!is_array($atts)) {
    $atts = array(
      'orderby' => 'post_date',
      'order' => 'ASC',
      'fmt' => 0,
      'posts' => 5
    );
    
  } else {
    
    if (!isset($atts['orderby'])) {
      $atts['orderby'] = 'post_date';
    }
    
    if (!isset($atts['order'])) {
      $atts['order'] = 'ASC';
    }
    
    if (!isset($atts['fmt'])) {
      $atts['fmt'] = 0;
    }
    
    if (!isset($atts['posts'])) {
      $atts['posts'] = 5;
    }
  }
  
  if (empty(trim($category_list))) {
    $html = disp_error('Xidipity Blogs Shortcode - no category specified.');
  } else {
    $array     = explode(',', $category_list);
    $items     = array_filter($array, create_function('$a', 'return trim($a)!=="";'));
    $cat_items = '';
    foreach ($items as $item) {
      $cat_items .= $item . ',';
    }
    $categories = substr($cat_items, 0, -1);
    
    // sanitize arguments
    if (empty(trim($atts['orderby']))) {
      $atts['orderby'] = 'post_date';
    }
    if (!$atts['order'] == 'desc') {
      $atts['order'] = 'ASC';
    }
    if ($atts['fmt'] > 2) {
      $atts['fmt'] = 0;
    }
    if ($atts['posts'] == 0) {
      $atts['posts'] = 5;
    }
    
    $defaults = array(
      'orderby' => 'post_date',
      'order' => 'ASC',
      'fmt' => 0,
      'posts' => 5
    );
    
    $sc_arg = wp_parse_args($atts, $defaults);
    
    // Set up initial query for post
    $args = array(
      'category_name' => $category_list,
      'order' => $sc_arg['order'],
      'orderby' => $sc_arg['orderby'],
      'perm' => 'readable',
      'post_type' => 'post',
      'posts_per_page' => $sc_arg['posts']
    );
    
    $query_rslt = new WP_Query(apply_filters('lst_blogs_shortcode_args', $args));
    
    if (!$query_rslt->have_posts()) {
      /**
       * Return if no posts match the current query.
       */
      return disp_error('List Blogs Shortcode - no posts assigned to (' . $categories . ').');
    }
    
    $html       = '';
    $pane       = 'L';
    $image_size = 'large';
    
    while ($query_rslt->have_posts()):
      $query_rslt->the_post();
      global $post;
      
      $i++;
      switch ($atts['fmt']) {
        case (1):
          $image   = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID(), $image_size) . '</a>';
          $title   = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
          $excerpt = '<p>' . get_the_excerpt() . '</p>';
          $stamp   = '<p class="posted-on" style="font-size: 85%; padding-top: 15px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
          
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
            $html .= '<div style="width: 100%;">';
            $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-300); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
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
            $html .= '<div style="width: 100%;">';
            $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-300); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
            $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
            $html .= '</div>';
            $html .= '</td>';
            $html .= '</tr>';
            $html .= '</tbody>';
            $html .= '</table>';
            $html .= '<p>&nbsp;</p>';
          }
          break;
        case (2):
          $image   = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID(), $image_size) . '</a>';
          $title   = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
          $excerpt = '<p>' . get_the_excerpt() . '</p>';
          $stamp   = '<p class="posted-on" style="font-size: 85%; padding-top: 15px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
          
          $html .= '<table id="twocol" class="twocolumn">';
          $html .= '<tbody>';
          $html .= '<tr>';
          $html .= '<td>';
          $html .= $title;
          $html .= $stamp;
          $html .= $excerpt;
          $html .= '<p>&nbsp;</p>';
          $html .= '<div style="width: 100%;">';
          $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-300); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
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
          $stamp   = '<p class="posted-on" style="font-size: 85%; padding-top: 15px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
          
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
          $html .= '<div style="width: 100%;">';
          $html .= '<div style="border-right: solid 1px #e0e0e0; color: var(--fg-pri-300); float: left; font-size: 1.2rem; line-height: 1.8; text-align: center; width: 40px;"><span class="far-glyph"></span></div>';
          $html .= '<div style="float: left; font-size: 0.9375rem; line-height: 2.45; padding-left: 10px;"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
          $html .= '</div>';
          $html .= '</td>';
          $html .= '</tr>';
          $html .= '</tbody>';
          $html .= '</table>';
          $html .= '<p>&nbsp;</p>';
      }
    endwhile;
    
    if ($atts['fmt'] == 1 && $pane == 'R') {
      $html .= '<td>';
      $html .= '<p>&nbsp;</p>';
      $html .= '</td>';
      $html .= '</tr>';
      $html .= '</tbody>';
      $html .= '</table>';
      $html .= '<p>&nbsp;</p>';
    }
    
    wp_reset_postdata();
  }
  
  return $html;
  
}

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

?>
