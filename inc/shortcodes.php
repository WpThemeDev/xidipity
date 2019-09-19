<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   shortcodes.php
 *  build:  90915.1a
 *  descrp: shortcodes
 *  ref:    https://codex.wordpress.org/Shortcode_API
 *          https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
 *
 *   TOC
 *   --------------  ----------------------------------------------------------
 *   bexc / 90903.1a blog excerpts
 *   blst / 90903.1a blog list
 *   clst / 90903.1a category list
 *   gimg / 90903.1a gallary images
 *   plst / 90903.1a page list
 *
 *   Utilities
 *   --------------  ----------------------------------------------------------
 *   lst_theme
 *   lst_theme       theme info
 *   wp-ver          wordpess version
 *
**/
/*
 *  Xidipity WordPress Theme
 *
 *  name:   bexc
 *  build:  90903.1
 *  descrp: display blog excerpt(s)
 *  attributes:
 *      $atts - array
 *  parameters:
 *      $prms - string
 *  ref:    https://xidipity.com/reference/source-code/shortcodes/bexc/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.9
 *
**/
add_shortcode('bexc', 'bexc_shortcode');
function bexc_shortcode($atts, $prms)
{
    /*
        system variables
    */
    $html_retval = '';
    // current pagination number
    $wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    // posts / page
    $wp_ppp = get_option('posts_per_page');
    /*
        local variables
    */
    $v_align = 0;
    $v_cats = '';
    $v_cnt = 0;
    $v_filter = 0;
    $v_html_img = '';
    $v_html_title = '';
    $v_img_exists = false;
    $v_img_size = 'large';
    $v_meta_icon_cat = '';
    $v_meta_link_rm = '';
    $v_meta_list_byline = '';
    $v_meta_list_cat = '';
    $v_meta_list_rm = '';
    $v_order = '';
    $v_orderby = '';
    $v_paged = 0;
    $v_ppp = 0;
    /*
        attributes
    */
    $a_cnt = 4;
    $a_filter = 0;
    $a_fmt = 1;
    $a_order = "DESC";
    $a_orderby = "date";
    $a_paged = 0;
    /*
        parameters
    */
    $p_cat_lst = trim($prms);
    /*
        initialize attributes
    */
    if (isset($atts['order']))
    {
        $a_order = tpl_prg($atts['order']);
    }
    if (isset($atts['orderby']))
    {
        $a_orderby = tpl_prg($atts['orderby']);
    }
    if (isset($atts['filter']))
    {
        $a_filter = $atts['filter'];
    }
    if (isset($atts['fmt']))
    {
        $a_fmt = $atts['fmt'];
    }
    if (isset($atts['cnt']))
    {
        $a_cnt = $atts['cnt'];
    }
    if (isset($atts['paged']))
    {
        $a_paged = $atts['paged'];
    }
    /*
        sanitize attributes
    */
    $v_order = strtoupper($a_order);
    if ($v_order !== 'ASC')
    {
        $v_order = 'DESC';
    }
    If (!empty($a_orderby))
    {
        $v_orderby = val_orby($a_orderby);
    }
    $v_filter = abs($a_filter);
    if ($v_filter > 1)
    {
        $v_filter = 1;
    }
    $v_align = abs($a_fmt);
    if ($v_align > 1)
    {
        $v_align = 1;
    }
    $v_ppp = abs($a_cnt);
    if ($v_ppp == 0)
    {
        $v_ppp = $wp_ppp;
    }
    $v_paged = abs($a_paged);
    if ($v_paged > 1)
    {
        $v_paged = 1;
    }
    /*
        sanitize parameter
    */
    if (!empty($p_cat_lst))
    {
        $v_cats = val_cat($p_cat_lst, $v_filter);
    }
    /*
        set up db query
    */
    if ($v_paged == 1)
    {
        $qry_prms = array(
            'cat' => $v_cats,
            'ignore_sticky_posts' => false,
            'order' => $v_order,
            'orderby' => $v_orderby,
            'perm' => 'readable',
            'paged' => $wp_paged,
            'post_type' => 'post',
            'posts_per_page' => $v_ppp
        );
    }
    else
    {
        $qry_prms = array(
            'cat' => $v_cats,
            'ignore_sticky_posts' => false,
            'order' => $v_order,
            'orderby' => $v_orderby,
            'perm' => 'readable',
            'post_type' => 'post',
            'posts_per_page' => $v_ppp
        );
    }
    $db_query = new WP_Query($qry_prms);
    if ($db_query->have_posts())
    {
        $html_retval .= '<!-- xwpt: 90903.1a/xsc/bexc/php            -->';
        while ($db_query->have_posts())
        {
            $db_query->the_post();
            $v_cnt++;
            /*: post category :*/
            if (is_sticky())
            {
                $v_meta_icon_cat = xidipity_icon_star();
            }
            else
            {
                $v_meta_icon_cat = xidipity_icon_note();
            }
            $v_meta_list_cat =  $v_meta_icon_cat . ',' . xidipity_first_category();
            /*: post byline :*/
            if ($a_order == 'modified')
            {
                $v_meta_list_byline =  get_the_modified_date() . ',' . 'Author -' . ',' . get_the_author();
            }
            else
            {
                $v_meta_list_byline =  get_the_date() . ',' . 'Author -' . ',' . get_the_author();
            }
            /*: read more :*/
            $v_meta_link_rm = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));
            $v_meta_list_rm = xidipity_icon_rm() . ',' . '<a href="' . $v_meta_link_rm . '">Read more …</a>';

            /*: image :*/
            $v_img_exists = has_post_thumbnail(get_the_ID());
            $wp_html_img_url = wp_get_attachment_image_url(get_post_thumbnail_id(get_the_ID()));
            $v_html_img = '<img class="img:100%" src="' . $wp_html_img_url . '" alt="Xidipity Blog Excerpt Shortcode" >';

            /*: title :*/
            $v_html_title = '<h1 class="fx:cn-itm-ti"><a href="' . esc_url(apply_filters('xidipity_the_permalink', get_permalink())) . '">' . get_the_title() . '</a></h1>';
            
            if (!$v_img_exists)
            {
                $html_retval .= '<div class="fx:bexc-cn-img-none">';
                $html_retval .= '<div class="fx:bexc-cn-img-none-item">';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_cat));
                $html_retval .= '<header class="fx:cn-itm-hd">';
                $html_retval .= $v_html_title;
                $html_retval .= '</header>';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_byline));
                $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_rm));
                $html_retval .= '</div>';
                $html_retval .= '</div>';
            }
            elseif ($v_align == 1)
            {
                $html_retval .= '<div class="fx:bexc-cn-img-right">';
                $html_retval .= '<div class="fx:bexc-cn-img-item">';
                $html_retval .= $v_html_img;
                $html_retval .= '</div>';
                $html_retval .= '<div class="fx:bexc-cn-img-item pad:right-1">';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_cat));
                $html_retval .= '<header class="fx:cn-itm-hd">';
                $html_retval .= $v_html_title;
                $html_retval .= '</header>';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_byline));
                $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_rm));
                $html_retval .= '</div>';
                $html_retval .= '</div>';
            }
            else
            {
                $html_retval .= '<div class="fx:bexc-cn-img-left">';
                $html_retval .= '<div class="fx:bexc-cn-img-item">';
                $html_retval .= $v_html_img;
                $html_retval .= '</div>';
                $html_retval .= '<div class="fx:bexc-cn-img-item pad:left-1">';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_cat));
                $html_retval .= '<header class="fx:cn-itm-hd">';
                $html_retval .= $v_html_title;
                $html_retval .= '</header>';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_byline));
                $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_rm));
                $html_retval .= '</div>';
                $html_retval .= '</div>';
            }
            if ($v_cnt < $v_ppp)
            {
                $html_retval .= '<p>&nbsp;</p>';
            }
        }
        $html_retval .= '<!-- /xwpt: 90903.1a/xsc/bexc/php           -->';
        
        /*
            paginate flag set
        */
        if ($v_paged == 1)
        {
            $v_pages = $db_query->max_num_pages;
            /*: pagination :*/
            if ($v_pages > 1)
            {
                $v_cur_page = max(1, get_query_var('paged'));
                $html_retval .= xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages));
            }
        }
    }
    else
    {
        $html_retval = dsp_err('[bexc] No blogs assigned to category list: ' . $p_cat_lst);
    }
    /*: close query :*/
    wp_reset_postdata();
    /*: return html :*/
    return $html_retval;
}
/**
 *  name: blst
 *  build: 90903.1
 *  description: Unordered list of blog links
 *  attributes:
 *      $atts - array
 *  parameters:
 *      $prm - string
 *  doc: https://xidipity.com/reference/source-code/shortcodes/blst/
 *
 */
add_shortcode('blst', 'blst_shortcode');
function blst_shortcode($atts, $prms)
{
    // system
    $html_retval = '';
    // variables
    $v_class = '';
    $v_pre_itm = '';
    $v_pst_itm = '';
    $v_orderby = '';
    $v_order = '';
    $v_filter = 0;
    // attributes
    $a_class = '';
    $a_style_before = '';
    $a_style_after = '';
    $a_orderby = '';
    $a_order = '';
    $a_filter = 0;
    // parameters
    $p_cat_lst = trim($prms);
    // initialize attributes
    if (isset($atts['class']))
    {
        $a_class = tpl_prg($atts['class']);
    }
    if (isset($atts['style_before']))
    {
        $a_style_before = tpl_prg($atts['style_before']);
    }
    if (isset($atts['style_after']))
    {
        $a_style_after = tpl_prg($atts['style_after']);
    }
    if (isset($atts['orderby']))
    {
        $a_orderby = tpl_prg($atts['orderby']);
    }
    if (isset($atts['order']))
    {
        $a_order = tpl_prg($atts['order']);
    }
    if (isset($atts['filter']))
    {
        $a_filter = $atts['filter'];
    }
    $v_filter = abs($a_filter);
    if ($v_filter > 1)
    {
        $v_filter = 1;
    }
    // sanitize attributes
    $v_categories = val_cat($p_cat_lst, $v_filter);
    $v_class = $a_class;
    $v_order = strtoupper($a_order);
    $v_orderby = val_orby($a_orderby);
    $v_pst_itm = $a_style_after;
    $v_pre_itm = $a_style_before;
    if ($v_order !== 'ASC')
    {
        $v_order = 'DESC';
    }
    if (!empty($v_categories))
    {
        // set up db query
        $wp_qry = array(
            'cat' => $v_categories,
            'offset' => 0,
            'order' => $v_order,
            'orderby' => $v_orderby,
            'post_status' => 'publish',
            'post_type' => 'post',
            'posts_per_page' => -1,
            'suppress_filters' => true,
        );
        $wp_posts = get_posts($wp_qry);
        $html_retval .= '<!-- xwpt: 90903.1a/xsc/blst/php            -->';
        $html_retval .= '<ul>';
        if (!empty($v_class))
        {
            $html_retval .= '<ul class="' . $v_class . '">';
        }
        foreach ($wp_posts as $wp_post)
        {
            $html_retval .= '<li><a href="' . get_permalink($wp_post) . '">';
            $html_retval .= $style_before . $wp_post->post_title . $style_after;
            $html_retval .= '</a></li>';
        }
        $html_retval .= '</ul>';
        $html_retval .= '<!-- /xwpt: 90903.1a/xsc/blst/php           -->';
        // close query
        wp_reset_postdata();
    }
    else
    {
        if (empty($p_cat_lst)) {
            $html_retval = dsp_err('[blst] Category not specified');
        }
        else
        {
            $html_retval = dsp_err('[blst] No blog posts assigned to: ' . $p_cat_lst);
        }
    }
    // return html
    return $html_retval;
}
/**
 *  name: clst
 *  build: 90903.1
 *  description: Unordered hierarchical list of category links
 *  attributes:
 *      $atts - array
 *  parameters:
 *      $prm - string
 *  doc: https://xidipity.com/reference/source-code/shortcodes/clst/
 *
 */
add_shortcode('clst', 'clst_shortcode');
function clst_shortcode($atts = array(), $prm = string)
{
    // system
    $html_retval = '';
    // variables
    $v_active = false;
    $v_class = '';
    $v_depth = 0;
    $v_hroot = '';
    $v_pre_itm = '';
    $v_pst_itm = '';
    $v_show_cnt = false;
    $v_xclude = '';
    // attributes
    $a_active = 0;
    $a_class = '';
    $a_depth = 0;
    $a_show_cnt = 0;
    $a_style_after = '';
    $a_style_before = '';
    $a_xclude = '';
    // parameters
    $p_hroot = trim($prm);
    // initialize attributes
    if (isset($atts['active']))
    {
        $a_active = $atts['active'];
    }
    if (isset($atts['class']))
    {
        $a_class = tpl_prg($atts['class']);
    }
    if (isset($atts['depth']))
    {
        $a_depth = $atts['depth'];
    }
    if (isset($atts['style_before']))
    {
        $a_style_before = tpl_prg($atts['style_before']);
    }
    if (isset($atts['style_after']))
    {
        $a_style_after = tpl_prg($atts['style_after']);
    }
    if (isset($atts['show_cnt']))
    {
        $a_show_cnt = $atts['show_cnt'];
    }
    if (isset($atts['xclude']))
    {
        $a_xclude = tpl_prg($atts['xclude']);
    }
    // sanitize attributes
    if (abs($a_active) == 1)
    {
        $v_active = true;
    }
    $v_class = $a_class;
    $v_pre_itm = $a_style_before;
    $v_pst_itm = $a_style_after;
    $v_depth = abs($a_depth);
    if (abs($a_show_cnt) == 1)
    {
        $v_show_cnt = true;
    }
    $v_xclude = val_cat($a_xclude,0);
    // update hroot
    $v_hroot = val_cat($p_hroot,0);
    // set up db query
    $wp_qry = array(
        'child_of' => $v_hroot,
        'class' => $v_class,
        'current_category' => 0,
        'depth' => $v_depth,
        'echo' => false,
        'exclude' => $v_xclude,
        'exclude_tree' => '',
        'feed' => '',
        'feed_image' => '',
        'feed_type' => '',
        'hide_empty' => $v_active,
        'hide_title_if_empty' => false,
        'hierarchical' => true,
        'link_after' => $v_pst_itm,
        'link_before' => $v_pre_itm,
        'order' => 'ASC',
        'orderby' => 'name',
        'separator' => '<br />',
        'show_count' => $v_show_cnt,
        'show_option_all' => '',
        'show_option_none' => __('No categories', 'xidipity') ,
        'style' => 'list',
        'taxonomy' => 'category',
        'title_li' => '',
        'use_desc_for_title' => 0,
        'walker' => new c_walker()
    );
    $html_retval .= '<!-- xwpt: 90903.1a/xsc/clst/php            -->';
    if (empty($v_class))
    {
        $html_retval .= '<ul>';
    }
    else
    {
        $html_retval .= '<ul class="' . $v_class . '">';
    }
    $html_retval .= wp_list_categories($wp_qry);
    $html_retval .= '</ul>';
    $html_retval .= '<!-- /xwpt: 90903.1a/xsc/clst/php           -->';
    // close query
    wp_reset_postdata();
    // return html
    return $html_retval;
}
/**
 *  name: gimg
 *  build: 90903.1a
 *  description: Gallery images by category
 *  attributes:
 *      $atts - array
 *  parameters:
 *      $prm - string
 *  doc: https://xidipity.com/reference/source-code/shortcodes/gimg/
 *
 */
add_shortcode('gimg', 'gimg_shortcode');
function gimg_shortcode($atts = array() , $prms = string)
{
    // system
    $html_retval = '';
    // variables
    $v_categories = '';
    $v_class = '';
    $v_cap = '';
    $v_des = 0;
    $v_filter = 0;
    $v_order = '';
    $v_orderby = '';
    // attributes
    $a_class = '';
    $a_cap = 0;
    $a_des = 0;
    $a_filter = 0;
    $a_order = '';
    $a_orderby = '';
    // parameters
    $p_cat_lst = trim($prms);
    // initialize attributes
    if (isset($atts['class']))
    {
        $a_class = tpl_prg($atts['class']);
    }
    if (isset($atts['cap']))
    {
        $a_cap = $atts['cap'];
    }
    if (isset($atts['des']))
    {
        $a_des = $atts['des'];
    }
    if (isset($atts['filter']))
    {
        $a_filter = $atts['filter'];
    }
    if (isset($atts['order']))
    {
        $a_order = tpl_prg($atts['order']);
    }
    if (isset($atts['orderby']))
    {
        $a_orderby = tpl_prg($atts['orderby']);
    }
    $v_filter = abs($a_filter);
    if ($v_filter > 1)
    {
        $v_filter = 1;
    }
    // sanitize attributes
    $v_categories = val_cat($p_cat_lst, $v_filter);
    $v_class = $a_class;
    switch (abs($a_cap))
    {
        case 1:
            $v_cap = 'txt:left';
        break;
        case 2:
            $v_cap = 'txt:center';
        break;
        case 3:
            $v_cap = 'txt:right';
        break;
        default:
            $v_cap = 'disp:none';
    }
    $v_des = abs($a_des);
    if ($v_des > 1)
    {
        $v_des = 0;
    }
    $v_order = strtoupper($a_order);
    if ($v_order !== 'ASC')
    {
        $v_order = 'DESC';
    }
    $v_orderby = val_orby($a_orderby);
    // validate go / no go path
    if (strlen($p_cat_lst) == 0)
    {
        $html_retval = dsp_err('[gimg] Missing category list');
    }
    elseif (strlen($v_categories) == 0)
    {
        $html_retval = dsp_err('[gimg] Invalid category list: ' . $p_cat_lst);
    }
    else
    {
        // Set up db query
        $wp_prms = array(
            'cat' => $v_categories,
            'order' => $v_order,
            'orderby' => $v_orderby,
            'post_mime_type' => 'image',
            'post_status' => 'inherit',
            'post_type' => 'attachment',
            'posts_per_page' => '30'
        );
        $wp_query = new WP_Query($wp_prms);
        if ($wp_query->have_posts())
        {
            $html_retval .= '<!-- xwpt: 90903.1a/xsc/gimg/php            -->';
            $html_retval .= '<div class="fx:gimg-cn">';
            while ($wp_query->have_posts())
            {
                $wp_query->the_post();
                $wp_img = wp_get_attachment_image_src(get_the_ID() , 'full');
                $html_retval .= '<div class="fx:gimg-cn-item">';
                if (empty($v_class))
                {
                    $html_retval .= '<div><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img class="img:100%" src="' . $wp_img[0] . '" alt="Xidipity Gallery Image"></a></div>';
                }
                else
                {
                    $html_retval .= '<div><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img class="img:100% ' . $v_class . '" src="' . $wp_img[0] . '" alt="Xidipity Gallery Image"></a></div>';
                }
                $html_retval .= '<div class="' . $v_cap . '">' . $wp_query->post->post_excerpt . '</div>';
                if ($v_des == 1)
                {
                    $html_retval .= '<div class="pad:all-1">';
                    $html_retval .= '<p>' . $wp_query->post->post_content . '</p>';
                    $html_retval .= '</div>';
                }
                $html_retval .= '</div>';
            }
            $html_retval .= '</div>';
            $html_retval .= '<!-- /xwpt: 90903.1a/xsc/gimg/php           -->';
        }
        else
        {
            $html_retval = dsp_err('[gimg] No images assigned to category list: ' . $p_cat_lst);
        }
        // close query
        wp_reset_postdata();
    }
    // return html
    return $html_retval;
}
/**
 *  name: plst
 *  build: 90903.1
 *  description: Unordered hierarchical list of page links
 *  attributes:
 *      $atts - array
 *  parameters:
 *      $prm - string
 *  doc: https://xidipity.com/reference/source-code/shortcodes/plst/
 *
 */
add_shortcode('plst', 'plst_shortcode');
function plst_shortcode($atts = array(), $prm = string)
{
    // system
    $html_retval = '';
    // variables
    $v_hroot = 0;
    $v_class = '';
    $v_pre_itm = '';
    $v_pst_itm = '';
    $v_depth = 0;
    $v_xclude = '';
    // attributes
    $a_class = '';
    $a_style_before = '';
    $a_style_after = '';
    $a_depth = 0;
    $a_xclude = '';
    // parameters
    $p_hroot = trim($prm);
    // initialize attributes
    if (isset($atts['class']))
    {
        $a_class = tpl_prg($atts['class']);
    }
    if (isset($atts['style_before']))
    {
        $a_style_before = tpl_prg($atts['style_before']);
    }
    if (isset($atts['style_after']))
    {
        $a_style_after = tpl_prg($atts['style_after']);
    }
    if (isset($atts['depth']))
    {
        $a_depth = $atts['depth'];
    }
    if (isset($atts['xclude']))
    {
        $a_xclude = tpl_prg($atts['xclude']);
    }
    // sanitize attributes
    $v_class = $a_class;
    $v_pre_itm = $a_style_before;
    $v_pst_itm = $a_style_after;
    $v_depth = abs($a_depth);
    $v_xclude = $a_xclude;
    // update hroot
    if (!empty($p_hroot))
    {
        $wp_page = get_page_by_title($p_hroot);
        if ($wp_page)
        {
            $v_hroot = $wp_page->ID;
        }
    }
    // set up db query
    $wp_qry = array(
        'class' => $v_class,
        'depth' => $v_depth,
        'date_format' => get_option('date_format') ,
        'child_of' => $v_hroot,
        'exclude' => $v_xclude,
        'echo' => false,
        'sort_column' => 'title',
        'link_before' => $v_pre_itm,
        'link_after' => $v_pst_itm,
        'item_spacing' => 'discard',
        'title_li' => '',
        'walker' => new p_walker()
    );
    $html_retval .= '<!-- xwpt: 90903.1a/xsc/plst/php            -->';
    if (empty($v_class))
    {
        $html_retval .= '<ul>';
    }
    else
    {
        $html_retval .= '<ul class="' . $v_class . '">';
    }
    $html_retval .= wp_list_pages($wp_qry);
    $html_retval .= '</ul>';
    $html_retval .= '<!-- /xwpt: 90903.1a/xsc/plst/php           -->';
    // close query
    wp_reset_postdata();
    // return html
    return $html_retval;
}

/**
 *  Utilities
 *  ---------------------------------------------------------------------------
 *
 */

/*  # x_pg_title
    # 90905.1a
    # get page title
    # https://developer.wordpress.org/reference/functions/get_the_title/
**/
add_shortcode('x_pg_title', 'x_pg_title_shortcode');
function x_pg_title_shortcode()
{
    return get_the_title();
}

/*  # x_fa_ver
    # 90905.1a
    # display font awesome version
    # https://fontawesome.com/
**/
add_shortcode('x_fa_ver', 'x_fa_ver_shortcode');
function x_fa_ver_shortcode()
{
    return fa_ver();
}

/*  # x_wp_ver
    # 90903.1a
    # display wordpress version
    # https://wordpress.org/
**/
add_shortcode('x_wp_ver', 'x_wp_ver_shortcode');
function x_wp_ver_shortcode()
{
    // system
    $html_retval = '';
    // execute
    $html_retval = get_bloginfo( 'version' );
    // return html
    return $html_retval;
}

/*  # xidipity
    # 90903.1a
    # display theme property
        - Name
        - ThemeURI
        - Description
        - Author
        - Version
        - Status
        - Tags
**/
add_shortcode('xidipity', 'xidipity_shortcode');
function xidipity_shortcode($atts)
{
    // check for & fix missing arguments
    if (!is_array($atts))
    {
        $atts = array(
            'property' => 'Name',
            'label' => ''
        );
    }
    else
    {
        if (empty($atts['property']))
        {
            $atts['property'] = 'Name';
        }
    }
    // sanitize inputs
    $args = strtoupper($atts['property']);
    switch ($args)
    {
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
    if (empty($atts['label']))
    {
        return $my_theme->get($opt);
    }
    else
    {
        return $my_theme->get($opt) . ' ' . $atts['label'];
    }
}

/*
    eof: shortcodes.php
*/
?>
