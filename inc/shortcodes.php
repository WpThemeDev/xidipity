<?php
/*
*        file: shortcodes.php
*       build: 90330.1
* description: PHP support for Xidipity theme
*      github: https://github.com/WpThemeDev/xidipity
*              https://codex.wordpress.org/Shortcode_API
*    comments: Shortcodes are called from templates which are embedded in content.
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
/**
 * Short code
 *
 * page_list
 *
 * build: 90301.1
 *
 * syntax - [page_list class="" style_before="" style_after="" depth=0 xclude='']page title[/page_list]
 *
 *    class = ul class(es)
 *
 *    style_before = style before list item
 *
 *    style_after = style after list item
 *
 *    depth = number of hierarchies to display
 *
 *    xclude = page ids of pages to exclude
 *
 *    page title = parent page title (blank for all)
 *
 */
add_shortcode('page_list', 'page_list_shortcode');

function page_list_shortcode($atts, $page_title)
{

    // check for & fix missing arguments

    if (!is_array($atts)) {
        $atts = array(
            'class' => 'qtr-spaced',
            'style_before' => '',
            'style_after' => '',
            'depth' => 0,
            'xclude' => ''
        );
    }
    else {
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

    if ($page_title == 'page title') {
        $page_title = '';
    }

    if (!empty($page_title)) {
        $page = get_page_by_title($page_title);
        if ($page) {
            $pid = $page->ID;
        }
        else {
            $page_err = true;
        }
    }

    if (!$page_err) {

        // sanitized working variables

        $class = ck_prm($atts['class']);
        $style_before = ck_prm($atts['style_before']);
        $style_after = ck_prm($atts['style_after']);
        $depth = $atts['depth'];
        $xclude = ck_prm($atts['xclude']);
        $qry = array(
            'depth' => $depth,
            'date_format' => get_option('date_format') ,
            'child_of' => $pid,
            'exclude' => $xclude,
            'echo' => false,
            'sort_column' => 'post_title',
            'link_before' => $style_before,
            'link_after' => $style_after,
            'item_spacing' => 'discard',
            'title_li' => '',
            'walker' => ''
        );
        $html = '<ul>';
        if (!empty($class)) {
            $html = '<ul class="' . $class . '">';
        }

        $html.= wp_list_pages($qry);
        $html.= '</ul>';
    }
    else {
        $html = disp_error('Page List Template - (' . $page_title . ') page title not found.');
    }

    wp_reset_postdata();
    return $html;
}

/**
 * Short code
 *
 * blog_list
 *
 * build: 90311.1
 *
 * syntax - [blog_list class="" style_before="" style_after="" orderby="" order="" filter=0]category 1,category 2, etc[/blog_list]
 *
 *    class = ul class
 *    style_before = style before list item
 *    style_after = style after list item
 *    orderby = db sort order column
 *    order = ascending / descending
 *    filter
 *      0 = inclusive (default)
 *      1 = exclusinve
 *
 */
add_shortcode('blog_list', 'blog_list_shortcode');

function blog_list_shortcode($atts, $category_list)
{

    // check for & fix missing arguments

    if (!is_array($atts)) {
        $atts = array(
            'class' => 'qtr-spaced',
            'style_before' => '',
            'style_after' => '',
            'orderby' => 'title',
            'order' => 'DESC',
            'filter' => 0
        );
    }
    else {
        if (!isset($atts['class'])) {
            $atts['class'] = 'qtr-spaced';
        }

        if (!isset($atts['style_before'])) {
            $atts['style_before'] = '';
        }

        if (!isset($atts['style_after'])) {
            $atts['style_after'] = '';
        }

        if (!isset($atts['orderby'])) {
            $atts['orderby'] = 'title';
        }

        if (!isset($atts['order'])) {
            $atts['order'] = 'DESC';
        }

        if (!isset($atts['filter'])) {
            $atts['filter'] = 0;
        }
    }

    // sanitized working variables

    $class = ck_prm($atts['class']);
    $style_before = ck_prm($atts['style_before']);
    $style_after = ck_prm($atts['style_after']);
    $orderby = valid_orderby($atts['orderby']);
    $order = strtoupper($atts['order']);
    if (!$order == 'DESC') {
        $order = 'ASC';
    }

    $filter = 'i';
    if ($atts['filter'] == 1) {
        $filter = 'x';
    }

    $categories = valid_categories($category_list, $filter);
    $qry = array(
        'posts_per_page' => - 1,
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
    }
    else {
        $html = '<ul>';
    }

    $posts = get_posts($qry);
    $cnt = 0;
    foreach($posts as $post) {
        $cnt++;
        $html.= '<li><a href="' . get_permalink($post) . '">';
        $html.= $style_before . $post->post_title . $style_after;
        $html.= '</a></li>';
    }

    $html.= '</ul>';
    if ($cnt == 0) {
        $html = disp_error('Blog List Template - no posts found assigned to (' . $category_list . ').');
    }

    wp_reset_postdata();
    return $html;
}

/**
 * Short code
 *
 * cat_list
 *
 * build: 90314.1
 *
 * syntax - [cat_list class="" active='0/1' depth=0 show_cnt='0/1' xclude=""]category title[/cat_list]
 *
 *    class = ul class
 *
 *    active = hide empty (0=false/1=true)
 *
 *    depth = number of hierarchies to display
 *
 *    show_cnt = show category count (0=false/1=true)
 *
 *    xclude = page ids of pages to exclude
 *
 *    category title = parent category title (blank for all)
 */
add_shortcode('cat_list', 'cat_list_shortcode');

function cat_list_shortcode($atts, $category_title)
{

    // check for & fix missing arguments

    if (!isset($atts['class'])) {
        $class = 'qtr-spaced';
    }
    else {
        $class = ck_prm($atts['class']);
    }

    if (!isset($atts['active'])) {
        $active = false;
    }
    else {
        if ($atts['active'] == 1) {
            $active = true;
        }
        else {
            $active = false;
        }
    }

    if (!isset($atts['depth'])) {
        $depth = 0;
    }
    else {
        $depth = abs($atts['depth']);
    }

    if (!isset($atts['show_cnt'])) {
        $show_cnt = false;
    }
    else {
        if ($atts['show_cnt'] == 1) {
            $show_cnt = true;
        }
        else {
            $show_cnt = false;
        }
    }

    if (!isset($atts['xclude'])) {
        $xclude = '';
    }
    else {
        $xclude = ck_prm($atts['xclude']);
    }

    // get starting category id

    $pid = 0;
    $cat_err = false;
    if (!isset($category_title)) {
        $category_title = '';
    }

    if ($category_title == 'category title') {
        $category_title = '';
    }

    if (!empty($category_title)) {
        $cat = get_cat_ID($category_title);
        if ($cat == 0) {
            $cat_err = true;
        }
        else {
            $pid = $cat;
        }
    }

    if (!$cat_err) {
        $query_args = array(
            'child_of' => $pid,
            'current_category' => 0,
            'depth' => $depth,
            'echo' => false,
            'exclude' => $xclude,
            'exclude_tree' => '',
            'feed' => '',
            'feed_image' => '',
            'feed_type' => '',
            'hide_empty' => $active,
            'hide_title_if_empty' => false,
            'hierarchical' => true,
            'order' => 'ASC',
            'orderby' => 'name',
            'separator' => '<br />',
            'show_count' => $show_cnt,
            'show_option_all' => '',
            'show_option_none' => __('No categories', 'xidipity') ,
            'style' => 'list',
            'taxonomy' => 'category',
            'title_li' => '',
            'use_desc_for_title' => 0
        );
        $html = '<ul>';
        if (!empty($class)) {
            $html = '<ul class="' . $class . '">';
        }

        $html.= wp_list_categories($query_args);
        $html.= '</ul>';
    }
    else {
        $html = disp_error('Category List Template - (' . $category_title . ') category title not found.');
    }

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
    }
    else {
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
    }
    elseif (empty($sc_arg['slot'])) {
        $html = disp_error('Xidipity Adsense Shortcode - missing data-ad-slot data.');
    }
    else {
        $html = '<p class="mce:hidden"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- Responsive --> <ins class="adsbygoogle" style="display: block;" data-ad-client="' . $sc_arg['client'] . '" data-ad-slot="' . $sc_arg['slot'] . '" data-ad-format="auto" data-full-width-responsive="false"></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script></p>';
    }

    return $html;
}

/**
 * Short code
 *
 * blog_summary
 *
 * build: 90215.1
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

function blog_summary_shortcode($atts, $category_list)
{

    // check for & fix missing arguments

    if (!is_array($atts)) {
        $atts = array(
            'orderby' => 'date',
            'order' => 'DESC',
            'fmt' => 1,
            'cnt' => 4,
            'filter' => 0
        );
    }
    else {
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
    if ($atts['filter'] == 1) {
        $filter = 'x';
    }

    $sanitized_list = ck_categories($category_list);
    $categories = valid_categories($sanitized_list, $filter);
    $orderby = valid_orderby($atts['orderby']);
    $order = strtoupper($atts['order']);
    if (!$order == 'ASC') {
        $order = 'DESC';
    }

    $val = abs($atts['fmt']);
    if ($val > 2) {
        $fmt = 2;
    }
    else {
        $fmt = $val;
    }

    $val = abs($atts['cnt']);
    if ($val == 0 || $val > 4) {
        $post_cnt = 4;
    }
    else {
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
        $html = '';
        $pane = 'L';
        $image_size = 'large';
        while ($qry_rslt->have_posts()):
            $qry_rslt->the_post();
            global $post;
            $i++;
            switch ($fmt) {
            case 1:
                $image = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID() , $image_size) . '</a>';
                $title = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                $excerpt = '<p>' . get_the_excerpt() . '</p>';
                if ($order == 'modified') {
                    $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                }
                else {
                    $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                }

                if ($pane == 'L') {
                    $pane = 'R';
                    $html.= '<table id="twocol" class="twocolumn">';
                    $html.= '<tbody>';
                    $html.= '<tr>';
                    $html.= '<td>';
                    $html.= '<p>' . $image . '</p> <!-- Display Image -->';
                    $html.= '<p>&nbsp;</p>';
                    $html.= $title;
                    $html.= $stamp;
                    $html.= $excerpt;
                    $html.= '<p>&nbsp;</p>';
                    $html.= '<div style="display: table; background-color: var(--bg-wht); border-right: solid 1px var(--bg-bas-300); padding: 15px 0; width: 100%;">';
                    $html.= '<div style="display: table-cell; text-align: center; vertical-align: middle; width: 40px;"><i class="far fa-comment-alt fg-pri-300" style="font-size: 1.2rem;">&#x200B;</i></div>';
                    $html.= '<div style="display: table-cell; font-size: 0.85rem; width: calc(100% - 40px);"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                    $html.= '</div>';
                    $html.= '</td>';
                }
                else {
                    $pane = 'L';
                    $html.= '<td>';
                    $html.= '<p>' . $image . '</p> <!-- Display Image -->';
                    $html.= '<p>&nbsp;</p>';
                    $html.= $title;
                    $html.= $stamp;
                    $html.= $excerpt;
                    $html.= '<p>&nbsp;</p>';
                    $html.= '<div style="display: table; background-color: var(--bg-wht); border-right: solid 1px var(--bg-bas-300); padding: 15px 0; width: 100%;">';
                    $html.= '<div style="display: table-cell; text-align: center; vertical-align: middle; width: 40px;"><i class="far fa-comment-alt fg-pri-300" style="font-size: 1.2rem;">&#x200B;</i></div>';
                    $html.= '<div style="display: table-cell; font-size: 0.85rem; width: calc(100% - 40px);"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                    $html.= '</div>';
                    $html.= '</td>';
                    $html.= '</tr>';
                    $html.= '</tbody>';
                    $html.= '</table>';
                    $html.= '<p>&nbsp;</p>';
                }

                break;

            case 2:
                $image = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID() , $image_size) . '</a>';
                $title = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                $excerpt = '<p>' . get_the_excerpt() . '</p>';
                if ($order == 'modified') {
                    $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                }
                else {
                    $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                }

                $html.= '<table id="twocol" class="twocolumn">';
                $html.= '<tbody>';
                $html.= '<tr>';
                $html.= '<td>';
                $html.= $title;
                $html.= $stamp;
                $html.= $excerpt;
                $html.= '<p>&nbsp;</p>';
                $html.= '<div style="display: table; background-color: var(--bg-wht); border-right: solid 1px var(--bg-bas-300); padding: 15px 0; width: 100%;">';
                $html.= '<div style="display: table-cell; text-align: center; vertical-align: middle; width: 40px;"><i class="far fa-comment-alt fg-pri-300" style="font-size: 1.2rem;">&#x200B;</i></div>';
                $html.= '<div style="display: table-cell; font-size: 0.85rem; width: calc(100% - 40px);"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                $html.= '</div>';
                $html.= '</td>';
                $html.= '<td>';
                $html.= '<p>' . $image . '</p> <!-- Display Image -->';
                $html.= '</td>';
                $html.= '</tr>';
                $html.= '</tbody>';
                $html.= '</table>';
                $html.= '<p>&nbsp;</p>';
                break;

            default:
                $image = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID() , $image_size) . '</a>';
                $title = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                $excerpt = '<p>' . get_the_excerpt() . '</p>';
                if ($order == 'modified') {
                    $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                }
                else {
                    $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                }

                $html.= '<table id="twocol" class="twocolumn">';
                $html.= '<tbody>';
                $html.= '<tr>';
                $html.= '<td>';
                $html.= '<p>' . $image . '</p> <!-- Display Image -->';
                $html.= '</td>';
                $html.= '<td>';
                $html.= $title;
                $html.= $stamp;
                $html.= $excerpt;
                $html.= '<p>&nbsp;</p>';
                $html.= '<div style="display: table; background-color: var(--bg-wht); border-right: solid 1px var(--bg-bas-300); padding: 15px 0; width: 100%;">';
                $html.= '<div style="display: table-cell; text-align: center; vertical-align: middle; width: 40px;"><i class="far fa-comment-alt fg-pri-300" style="font-size: 1.2rem;">&#x200B;</i></div>';
                $html.= '<div style="display: table-cell; font-size: 0.85rem; width: calc(100% - 40px);"><a href="' . apply_filters('the_permalink', get_permalink()) . '">Read more …</a></div>';
                $html.= '</div>';
                $html.= '</td>';
                $html.= '</tr>';
                $html.= '</tbody>';
                $html.= '</table>';
                $html.= '<p>&nbsp;</p>';
            }

        endwhile;
        if ($fmt == 1 && $pane == 'R') {
            $html.= '<td>';
            $html.= '<p>&nbsp;</p>';
            $html.= '</td>';
            $html.= '</tr>';
            $html.= '</tbody>';
            $html.= '</table>';
            $html.= '<p>&nbsp;</p>';
        }
    }
    else {
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
 * build: 90223.1
 *
 * syntax - [img_gallery orderby='' order='' class='' ratio=0 opt=0 col=0 cap=0 filter=0]category 1,category 2, etc[/img_gallery]
 *
 *    orderby = db sort order column
 *    order = ascending / descending
 *    class = image class
 *      focalpoint
 *      graypoint
 *      shadow
 *      zoom
 *
 *    ratio
 *      0 -  custom
 *      1 -  1 x 1
 *      2 -  4 x 3  (default)
 *      3 -  6 x 4
 *      4 -  7 x 5
 *      5 - 16 x 10
 *      6 - 16 x 9
 *      7 - 21 x 9
 *
 *    opt (display options)
 *      0 ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ do not display captions or descriptions (default)
 *      1 ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ display captions
 *      2 ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ display descriptions
 *      3 ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ display captions and descriptions
 *
 *    col
 *      1 - 1 column
 *      2 - 2 column (default)
 *      3 - 3 column
 *      4 - 4 column
 *
 *    cap
 *      0 - caption left
 *      1 - caption center (default)
 *      2 - caption right
 *
 *    filter
 *      0 = inclusive
 *      1 = exclusive
 *
 *    category / categories
 *
 */
add_shortcode('img_gallery', 'img_gallery_shortcode');

function img_gallery_shortcode($atts, $category_list)
{

    // done if no categories

    $sanitized_list = ck_categories($category_list);
    if (empty($sanitized_list)) {
        $html = disp_error('Image Gallery Template - missing media category.');
    }
    else {

        // check for & fix missing arguments

        if (!is_array($atts)) {
            $atts = array(
                'orderby' => 'date',
                'order' => 'DESC',
                'class' => '',
                'ratio' => 0,
                'opt' => 1,
                'col' => 2,
                'cap' => 1,
                'filter' => 0
            );
        }
        else {
            if (!isset($atts['orderby'])) {
                $atts['orderby'] = 'date';
            }

            if (!isset($atts['order'])) {
                $atts['order'] = 'DESC';
            }

            if (!isset($atts['class'])) {
                $atts['class'] = '';
            }

            if (!isset($atts['ratio'])) {
                $atts['ratio'] = 0;
            }

            if (!isset($atts['opt'])) {
                $atts['opt'] = 1;
            }

            if (!isset($atts['col'])) {
                $atts['col'] = 2;
            }

            if (!isset($atts['cap'])) {
                $atts['cap'] = 1;
            }

            if (!isset($atts['filter'])) {
                $atts['filter'] = 0;
            }
        }

        // sanitized working variables

        $orderby = valid_orderby($atts['orderby']);
        $order = strtoupper($atts['order']);
        if (!$order == 'DESC') {
            $order = 'ASC';
        }

        $val = abs($atts['ratio']);
        switch ($val) {
        case 1:
            $ratio = 'ratio@1x1';
            break;

        case 2:
            $ratio = 'ratio@4x3';
            break;

        case 3:
            $ratio = 'ratio@6x4';
            break;

        case 4:
            $ratio = 'ratio@7x5';
            break;

        case 5:
            $ratio = 'ratio@16x10';
            break;

        case 6:
            $ratio = 'ratio@16x9';
            break;

        case 7:
            $ratio = 'ratio@21x9';
            break;

        default:
            $ratio = 'custom';
        }

        $val = abs($atts['opt']);
        if ($val > 3) {
            $opt = 0;
        }
        else {
            $opt = $val;
        }

        $val = abs($atts['col']);
        if ($val == 0 || $val > 4) {
            $max_col = 2;
        }
        else {
            $max_col = $val;
        }

        $val = abs($atts['cap']);
        switch ($val) {
        case 0:
            $cap_style = 'class="img-caption align-left"';
            if ($max_col > 2) {
                $cap_style = 'class="img-caption align-left text-sm"';
            }

            break;

        case 2:
            $cap_style = 'class="img-caption align-right"';
            if ($max_col > 2) {
                $cap_style = 'class="img-caption align-right text-sm"';
            }

            break;

        default:
            $cap_style = 'class="img-caption"';
            if ($max_col > 2) {
                $cap_style = 'class="img-caption text-sm"';
            }
        }

        $val = ck_prm($atts['class']);
        if (!empty($val)) {
            if ($ratio == 'custom') {
                $class = 'class="' . $val . '"';
            }
            else {
                $class = 'class="' . $val . ' selected-ratio"';
            }
        }
        else {
            if ($ratio == 'custom') {
                $class = '';
            }
            else {
                $class = 'class="selected-ratio"';
            }
        }

        $filter = 'i';
        if ($atts['filter'] == 1) {
            $filter = 'x';
        }

        $categories = valid_categories($sanitized_list, $filter);

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
            $html = '<!-- 900208.1 Template: general / table / responsive -->';
            $html.= '<table id="responsive">';
            $html.= '<tbody>';
            while ($qry_rslt->have_posts()):
                $qry_rslt->the_post();
                $image = wp_get_attachment_image_src(get_the_ID() , 'full'); // Full sized image
                $thumb = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()) , 'thumbnail'); // Thumbnail size
                $img_id = get_post(get_post_thumbnail_id());
                if ($new_row) {
                    $html.= '<tr>';
                }

                $html.= '<td>';
                if ($ratio == 'custom') {
                    $html.= '<div><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img ' . $class . ' src="' . $image[0] . '"></a></div>';
                }
                else {
                    $html.= '<!-- 900220.1 Template: xtras / constrained / image -->';
                    $html.= '<div class="ratio-container">';
                    $html.= '<div class="' . $ratio . '"><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img ' . $class . ' src="' . $image[0] . '"></a></div>';
                    $html.= '</div>';
                }

                if ($opt == 1 || $opt == 3) {
                    $html.= '<div ' . $cap_style . '>' . $qry_rslt->post->post_excerpt . '</div>';
                }

                if ($opt == 2 || $opt == 3) {
                    $html.= '<p>' . $qry_rslt->post->post_content . '</p>';
                }

                $html.= '</td>';
                $cur_col++;
                $new_row = ($cur_col > $max_col);
                if ($new_row) {
                    $html.= '</tr>';
                    $cur_col = 1;
                }

            endwhile;
            if (!$new_row) {
                $html.= '</tr>';
            }

            $html.= '</tbody>';
            $html.= '</table>';
        }
        else {
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

function lst_theme_shortcode($atts)
{

    // check for & fix missing arguments

    if (!is_array($atts)) {
        $atts = array(
            'property' => 'Name',
            'label' => ''
        );
    }
    else {
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
        $opt = 'Name';
        $atts['label'] = '<sup><i class="fas fa-map-marker" style="color:#c62828;">&#x200B;</i></sup>';
    }

    $my_theme = wp_get_theme();
    if (empty($atts['label'])) {
        return $my_theme->get($opt);
    }
    else {
        return $my_theme->get($opt) . ' ' . $atts['label'];
    }
}

/**
 * Short code
 *
 * wp_ver
 *
 * build: 90329.1
 *
 * syntax - [wp_ver]
 *
 */
add_shortcode('wp_ver', 'wp_ver_shortcode');

function wp_ver_shortcode($atts)
{
    return get_bloginfo( 'version' );
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

function valid_categories($category_lst, $category_opt = 'i')
{
    $retval = '';
    if (!empty(trim($category_lst))) {
        $category_opt = strtolower($category_opt);
        $opt_chr = '';
        if ($category_opt == 'x') $opt_chr = '-';
        $category_lst = str_replace(' ', ',', $category_lst);
        $category_lst = str_replace('.', ',', $category_lst);
        $category_lst = str_replace('/', ',', $category_lst);
        $cat_array = explode(',', $category_lst);
        $lst_items = array_filter($cat_array);
        $cat_lst = '';
        foreach($lst_items as $lst_item) {
            $objCat = get_category_by_slug($lst_item);
            if ($objCat instanceof WP_Term) {
                $cat_lst.= $opt_chr . $objCat->term_id . ',';
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

function valid_orderby($arg)
{
    $ret_val = 'none';
    if (!empty(trim($arg))) {
        $valid_opts = array(
            'none',
            'id',
            'author',
            'title',
            'post_title',
            'name',
            'date',
            'post_date',
            'modified',
            'post_modified',
            'parent',
            'post_parent',
            'rand',
            'comment_count',
            'menu_order',
            'relevance'
        );
        if (in_array(strtolower($arg) , $valid_opts)) {
            $ret_val = strtolower($arg);
            if ($ret_val == 'id') {
                $ret_val = 'ID';
            }

            if (substr($ret_val, 0, 5) == 'post_') {
                $ret_val = substr_replace($ret_val, '', 0, 5);
            }
        }
    }

    return $ret_val;
}

/**
 * function
 *
 * ck_prm
 *
 * remove template default if present
 *
 * syntax - ck_prm( $arg )
 *
 *  $arg = parameter to validate
 *
 */

function ck_prm($arg)
{
    $val = rtrim(strtoupper($arg));
    switch ($val) {
    case 'STYLE':
        $ret_val = '';
        break;

    case 'CLASS':
        $ret_val = '';
        break;

    case 'IDS':
        $ret_val = '';
        break;

    default:
        $ret_val = rtrim($arg);
    }

    return $ret_val;
}

/**
 * function
 *
 * ck_categories
 *
 * remove template default if present
 *
 * syntax - ck_categories( $arg )
 *
 *  $arg = category variables to validate
 *
 *  test = two args of category + one arg of etc.
 *
 */

function ck_categories($category_lst)
{
    $retval = '';
    if (!empty(trim($category_lst))) {
        $tst_val = rtrim(strtolower($category_lst));
        if (substr_count($tst_val, 'category') == 2) {
            if (substr($tst_val, -3) !== 'etc') {
                $retval = rtrim($category_lst);
            }
        }
        else {
            $retval = rtrim($category_lst);
        }
    }

    return $retval;
}

/*  # eof
shortcodes.php
-------------------------------------*/
?>
