<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   shortcodes.php
 *  build:  90819.1b
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
 *   --------------  ---------------------------------------
 *   bexc / 90819.1  blog excerpts
 *   blst / 90819.1  blog list
 *   clst / 90819.1  category list
 *   gimg / 90819.1  gallary images
 *   plst / 90819.1  page list
 *
 *   Utilities
 *   --------------  ---------------------------------------
 *   tst             test php code
 *   xt-info         theme info
 *   wp-ver          wordpess version
 *
**/
/*
 *  Xidipity WordPress Theme
 *
 *  name:   bexc
 *  build:  90819.1
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
    if ($v_align > 2)
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
        while ($db_query->have_posts())
        {
            $db_query->the_post();
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
            $v_img_exists = has_post_thumbnail(get_the_ID());
            $v_html_img = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID() , $v_img_size) . '</a>';
            $v_html_title = '<h1 class="xwtEntryTitle"><a href="' . esc_url(apply_filters('xidipity_the_permalink', get_permalink())) . '">' . get_the_title() . '</a></h1>';
            $html_retval .= '<!-- xsc: blog/excerpt -->';
            $html_retval .= '<div id="xscBExc">';
            switch ($v_align)
            {
                case 1:
                    /*: featured image left :*/
                    if ($v_img_exists)
                    {
                        $html_retval .= '<div class="xsc-sum-cards">';
                        $html_retval .= '<!-- card image left -->';
                        $html_retval .= '<div class="xsc-card-left">';
                        $html_retval .= $v_html_img;
                        $html_retval .= '</div>';
                        $html_retval .= '<!-- card content right -->';
                        $html_retval .= '<div class="xsc-card-right">';
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_cat));
                        $html_retval .= $v_html_title;
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_byline));
                        $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_rm));
                        $html_retval .= '</div>';
                        $html_retval .= '</div>';
                    }
                    else
                    {
                        $html_retval .= '<div class="xsc-sum-cards">';
                        $html_retval .= '<!-- card content only -->';
                        $html_retval .= '<div class="xsc-card-center pad:top-0.5">';
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_cat));
                        $html_retval .= $v_html_title;
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_byline));
                        $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_rm));
                        $html_retval .= '</div>';
                        $html_retval .= '</div>';
                    }
                break;
                case 2:
                    /*: featured image right: */
                    if ($v_img_exists)
                    {
                        $html_retval .= '<div class="xsc-sum-cards">';
                        $html_retval .= '<!-- card content left -->';
                        $html_retval .= '<div class="xsc-card-left">';
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_cat));
                        $html_retval .= $v_html_title;
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_byline));
                        $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_rm));
                        $html_retval .= '</div>';
                        $html_retval .= '<!-- card image left -->';
                        $html_retval .= '<div class="xsc-card-right">';
                        $html_retval .= $v_html_img;
                        $html_retval .= '</div>';
                        $html_retval .= '</div>';
                    }
                    else
                    {
                        $html_retval .= '<div class="xsc-sum-cards">';
                        $html_retval .= '<!-- card content only -->';
                        $html_retval .= '<div class="xsc-card-center pad:top-0.5">';
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_cat));
                        $html_retval .= $v_html_title;
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_byline));
                        $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                        $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_rm));
                        $html_retval .= '</div>';
                        $html_retval .= '</div>';
                    }
                break;
                default:
                    /*: featured image top / content bottom */
                    if ($v_img_exists)
                    {
                        $html_retval .= '<div class="xsc-sum-cards">';
                        $html_retval .= '<!-- image top -->';
                        $html_retval .= '<div class="xsc-card-center">';
                        $html_retval .= $v_html_img;
                        $html_retval .= '</div>';
                        $html_retval .= '</div>';
                    }
                    $html_retval .= '<div class="xsc-sum-cards">';
                    $html_retval .= '<!-- content bottom -->';
                    $html_retval .= '<div class="xsc-card-center pad:top-0.5">';
                    $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_cat));
                    $html_retval .= $v_html_title;
                    $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_byline));
                    $html_retval .= '<p>' . get_the_excerpt() . '</p>';
                    $html_retval .= xidipity_metalinks(explode(',', $v_meta_list_rm));
                    $html_retval .= '</div>';
                    $html_retval .= '</div>';
            }
            $html_retval .= '</div>';
            $html_retval .= '<!-- /xsc: blog/excerpt -->';
        }
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
/*
 *  name: blst
 *  build: 90819.1
 *  description: Unordered list of blog links
 *  attributes:
 *      $atts - array
 *  parameters:
 *      $prm - string
 *  doc: https://xidipity.com/reference/source-code/shortcodes/blst/
 *
**/
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
        $html_retval .= '<!-- xsc: blog/list -->';
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
        $html_retval .= '<!-- /xsc: blog/list -->';
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
 *  build: 90819.1
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
    $html_retval .= '<!-- xsc: cat/list -->';
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
    $html_retval .= '<!-- /xsc: cat/list -->';
    // close query
    wp_reset_postdata();
    // return html
    return $html_retval;
}
/**
 *  name: gimg
 *  build: 90819.1
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
            $v_cap = 'cap-l';
        break;
        case 2:
            $v_cap = 'cap-c';
        break;
        case 3:
            $v_cap = 'cap-r';
        break;
        default:
            $v_cap = 'cap-n';
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
            $html_retval .= '<!-- xsc: shortcode/gimg -->';
            $html_retval .= '<div id="xwtGimgItems">';
            while ($wp_query->have_posts())
            {
                $wp_query->the_post();
                $wp_img = wp_get_attachment_image_src(get_the_ID() , 'full');
                $html_retval .= '<div class="xwtGimgItem">';
                if (empty($v_class))
                {
                    $html_retval .= '<div><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img src="' . $wp_img[0] . '" alt="Xidipity Gallery Image"></a></div>';
                }
                else
                {
                    $html_retval .= '<div><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img class="' . $v_class . '" src="' . $wp_img[0] . '" alt="Xidipity Gallery Image"></a></div>';
                }
                $html_retval .= '<div class="' . $v_cap . '">' . $wp_query->post->post_excerpt . '</div>';
                if ($v_des == 1)
                {
                    $html_retval .= '<p>' . $wp_query->post->post_content . '</p>';
                }
                $html_retval .= '</div>';
            }
            $html_retval .= '</div>';
            $html_retval .= '<!-- /xsc: shortcode/gimg -->';
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
 *  build: 90819.1
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
    $html_retval .= '<!-- xsc: pg/list -->';
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
    $html_retval .= '<!-- /xsc: pg/list -->';
    // close query
    wp_reset_postdata();
    // return html
    return $html_retval;
}

/**
 *  Utilities
 *  -------------------------------------------------------
 *
 */
 /**
 *  name: tst
 *  build: 90819.1
 *  description: test php code
 *
 */
add_shortcode('tst', 'tst_shortcode');

function tst_shortcode($atts, $prm)
{
    // system
    $html_retval = '';
    // execute
    $html_retval = tst_php( $atts, $prm );
    // return html
    return $html_retval;
}
/**
 *  name: xt_info
 *  build: 90819.1
 *  description: theme information
 *  attributes:
 *      $att - string
 *  doc: https://xidipity.com/reference/source-code/shortcodes/xt_info/
 *
 */
add_shortcode('xt_info', 'xt_info_shortcode');
function xt_info_shortcode($atts = array(), $prm = string)
{
    // system
    $html_retval = '';
    // variables
    $v_prm = '';
    // attributes
    $a_prm = '';
    // initialize attributes
    if (isset($prm))
    {
        $a_prm = trim($prm);
    }
    // sanitize input
    switch (strtoupper($a_prm))
    {
        case 'NAME':
            $v_prm = 'Name';
        break;
        case 'THEMEURI':
            $v_prm = 'ThemeURI';
        break;
        case 'DESCRIPTION':
            $v_prm = 'Description';
        break;
        case 'AUTHOR':
            $v_prm = 'Author';
        break;
        case 'VERSION':
            $v_prm = 'Version';
        break;
        case 'STATUS':
            $v_prm = 'Status';
        break;
        case 'TAGS':
            $v_prm = 'Tags';
        break;
        default:
            $v_prm = 'Name';
    }
    $wp_theme = wp_get_theme();
    $html_retval = $wp_theme->get($v_prm);
    // return html
    return $html_retval;
}
/**
 *  name: wp_ver
 *  build: 90819.1
 *  description: wp version
 *  doc: https://xidipity.com/reference/source-code/shortcodes/wp_ver/
 *
 */
add_shortcode('wp_ver', 'wp_ver_shortcode');

function wp_ver_shortcode()
{
    // system
    $html_retval = '';
    // execute
    $html_retval = get_bloginfo( 'version' );
    // return html
    return $html_retval;
}

/**
 *  Deprecated
 *  -------------------------------------------------------
 *
 */


/**
 * ### deprecate ###
 *  name: pag_dir
 *  build: 90819.1
 *  description: Display hierarchical list of page links
 *  attributes:
 *      $atts - array
 *      $prm - string
 *  doc: https://xidipity.com/reference/source-code/shortcodes/pag_dir/
 *
 */
add_shortcode('pag_dir', 'pag_dir_shortcode');
function pag_dir_shortcode($atts, $prm)
{
    // system
    $html_retval = '';
    // variables
    $v_hroot = 0;
    $v_class = '';
    $v_style_before = '';
    $v_style_after = '';
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
        $a_class = $atts['class'];
    }
    if (isset($atts['style_before']))
    {
        $a_style_before = $atts['style_before'];
    }
    if (isset($atts['style_after']))
    {
        $a_style_after = $atts['style_after'];
    }
    if (isset($atts['depth']))
    {
        $a_depth = $atts['depth'];
    }
    if (isset($atts['xclude']))
    {
        $a_xclude = $atts['xclude'];
    }
    // sanitize attributes
    $v_class = tpl_prg($a_class);
    $v_style_before = tpl_prg($a_style_before);
    $v_style_after = tpl_prg($a_style_after);
    $v_depth = abs($a_depth);
    $v_xclude = trim($a_xclude);
    // update hroot
    if (!empty($p_hroot))
    {
        $page = get_page_by_title($p_hroot);
        if ($page)
        {
            $v_hroot = $page->ID;
        }
    }
    // set up db query
    $wp_qry = array(
        'depth' => $v_depth,
        'date_format' => get_option('date_format') ,
        'child_of' => $v_hroot,
        'exclude' => $v_xclude,
        'echo' => false,
        'sort_column' => 'post_title',
        'link_before' => $v_style_before,
        'link_after' => $v_style_after,
        'item_spacing' => 'discard',
        'title_li' => '',
        'walker' => ''
    );
    $html_retval = '<ul>';
    if (!empty($v_class))
    {
        $html_retval = '<ul class="' . $v_class . '">';
    }
    $html_retval .= wp_list_pages($wp_qry);
    $html_retval .= '</ul>';
    // close query
    wp_reset_postdata();
    // return html
    return $html_retval;
}
/**
 * ### deprecate ###
 * Short code
 *
 * pst_dir (blog post directory)
 *
 * build: 90629.1
 *
 * syntax - [pst_dir class="" style_before="" style_after="" orderby="" order="" filter=0]category 1,category 2, etc[/pst_dir]
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
add_shortcode('pst_dir', 'pst_dir_shortcode');
function pst_dir_shortcode($atts, $category_list)
{
    // check for & fix missing arguments
    if (!is_array($atts))
    {
        $atts = array(
            'class' => 'qtr-spaced',
            'style_before' => '',
            'style_after' => '',
            'orderby' => 'title',
            'order' => 'DESC',
            'filter' => 0
        );
    }
    else
    {
        if (!isset($atts['class']))
        {
            $atts['class'] = 'qtr-spaced';
        }
        if (!isset($atts['style_before']))
        {
            $atts['style_before'] = '';
        }
        if (!isset($atts['style_after']))
        {
            $atts['style_after'] = '';
        }
        if (!isset($atts['orderby']))
        {
            $atts['orderby'] = 'title';
        }
        if (!isset($atts['order']))
        {
            $atts['order'] = 'DESC';
        }
        if (!isset($atts['filter']))
        {
            $atts['filter'] = 0;
        }
    }
    // sanitized working variables
    $class = ck_prm($atts['class']);
    $style_before = ck_prm($atts['style_before']);
    $style_after = ck_prm($atts['style_after']);
    $orderby = valid_orderby($atts['orderby']);
    $order = strtoupper($atts['order']);
    if (!$order == 'DESC')
    {
        $order = 'ASC';
    }
    $filter = 'i';
    if ($atts['filter'] == 1)
    {
        $filter = 'x';
    }
    $categories = valid_categories($category_list, $filter);
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
    if (!empty($class))
    {
        $html = '<ul class="' . $class . '">';
    }
    else
    {
        $html = '<ul>';
    }
    $posts = get_posts($qry);
    $cnt = 0;
    foreach ($posts as $post)
    {
        $cnt++;
        $html .= '<li><a href="' . get_permalink($post) . '">';
        $html .= $style_before . $post->post_title . $style_after;
        $html .= '</a></li>';
    }
    $html .= '</ul>';
    if ($cnt == 0)
    {
        $html = disp_error('Blog List Template - no posts found assigned to (' . $category_list . ').');
    }
    wp_reset_postdata();
    return $html;
}
/**
 * ### deprecate ###
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
    if (!isset($atts['class']))
    {
        $class = 'qtr-spaced';
    }
    else
    {
        $class = ck_prm($atts['class']);
    }
    if (!isset($atts['active']))
    {
        $active = false;
    }
    else
    {
        if ($atts['active'] == 1)
        {
            $active = true;
        }
        else
        {
            $active = false;
        }
    }
    if (!isset($atts['depth']))
    {
        $depth = 0;
    }
    else
    {
        $depth = abs($atts['depth']);
    }
    if (!isset($atts['show_cnt']))
    {
        $show_cnt = false;
    }
    else
    {
        if ($atts['show_cnt'] == 1)
        {
            $show_cnt = true;
        }
        else
        {
            $show_cnt = false;
        }
    }
    if (!isset($atts['xclude']))
    {
        $xclude = '';
    }
    else
    {
        $xclude = ck_prm($atts['xclude']);
    }
    // get starting category id
    $pid = 0;
    $cat_err = false;
    if (!isset($category_title))
    {
        $category_title = '';
    }
    if ($category_title == 'category title')
    {
        $category_title = '';
    }
    if (!empty($category_title))
    {
        $cat = get_cat_ID($category_title);
        if ($cat == 0)
        {
            $cat_err = true;
        }
        else
        {
            $pid = $cat;
        }
    }
    if (!$cat_err)
    {
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
        if (!empty($class))
        {
            $html = '<ul class="' . $class . '">';
        }
        $html .= wp_list_categories($query_args);
        $html .= '</ul>';
    }
    else
    {
        $html = disp_error('Category List Template - (' . $category_title . ') category title not found.');
    }
    wp_reset_postdata();
    return $html;
}
/**
 * ### deprecate ###
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
    if (!is_array($atts))
    {
        $atts = array(
            'client' => '',
            'slot' => ''
        );
    }
    else
    {
        if (!isset($atts['client']))
        {
            $atts['client'] = '';
        }
        if (!isset($atts['slot']))
        {
            $atts['slot'] = '';
        }
    }
    $defaults = array(
        'client' => '',
        'slot' => ''
    );
    $sc_arg = wp_parse_args($atts, $defaults);
    if (empty($sc_arg['client']))
    {
        $html = disp_error('Xidipity Adsense Shortcode - missing data-ad-client data.');
    }
    elseif (empty($sc_arg['slot']))
    {
        $html = disp_error('Xidipity Adsense Shortcode - missing data-ad-slot data.');
    }
    else
    {
        $html = '<p class="mce:hidden"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- Responsive --> <ins class="adsbygoogle" style="display: block;" data-ad-client="' . $sc_arg['client'] . '" data-ad-slot="' . $sc_arg['slot'] . '" data-ad-format="auto" data-full-width-responsive="false"></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script></p>';
    }
    return $html;
}
/**
 * ### deprecate ###
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
    if (!is_array($atts))
    {
        $atts = array(
            'orderby' => 'date',
            'order' => 'DESC',
            'fmt' => 1,
            'cnt' => 4,
            'filter' => 0
        );
    }
    else
    {
        if (!isset($atts['orderby']))
        {
            $atts['orderby'] = 'date';
        }
        if (!isset($atts['order']))
        {
            $atts['order'] = 'DESC';
        }
        if (!isset($atts['fmt']))
        {
            $atts['fmt'] = 1;
        }
        if (!isset($atts['cnt']))
        {
            $atts['cnt'] = 4;
        }
        if (!isset($atts['filter']))
        {
            $atts['filter'] = 0;
        }
    }
    // sanitized working variables
    $filter = 'i';
    if ($atts['filter'] == 1)
    {
        $filter = 'x';
    }
    $sanitized_list = ck_categories($category_list);
    $categories = valid_categories($sanitized_list, $filter);
    $orderby = valid_orderby($atts['orderby']);
    $order = strtoupper($atts['order']);
    if (!$order == 'ASC')
    {
        $order = 'DESC';
    }
    $val = abs($atts['fmt']);
    if ($val > 2)
    {
        $fmt = 2;
    }
    else
    {
        $fmt = $val;
    }
    $val = abs($atts['cnt']);
    if ($val == 0 || $val > 20)
    {
        $post_cnt = 10;
    }
    else
    {
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
    if ($qry_rslt->have_posts())
    {
        $html = '';
        $pane = 'L';
        $image_size = 'large';
        while ($qry_rslt->have_posts()):
            $qry_rslt->the_post();
            global $post;
            $i++;
            switch ($fmt)
            {
                case 1:
                    $image = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID() , $image_size) . '</a>';
                    $title = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified')
                    {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    else
                    {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    if ($pane == 'L')
                    {
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
                        $html .= get_readmore(get_permalink());
                        $html .= '</td>';
                    }
                    else
                    {
                        $pane = 'L';
                        $html .= '<td>';
                        $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                        $html .= '<p>&nbsp;</p>';
                        $html .= $title;
                        $html .= $stamp;
                        $html .= $excerpt;
                        $html .= get_readmore(get_permalink());
                        $html .= '</td>';
                        $html .= '</tr>';
                        $html .= '</tbody>';
                        $html .= '</table>';
                        $html .= '<p>&nbsp;</p>';
                    }
                break;
                case 2:
                    $image = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID() , $image_size) . '</a>';
                    $title = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified')
                    {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    else
                    {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    $html .= '<table id="twocol" class="twocolumn">';
                    $html .= '<tbody>';
                    $html .= '<tr>';
                    $html .= '<td>';
                    $html .= $title;
                    $html .= $stamp;
                    $html .= $excerpt;
                    $html .= get_readmore(get_permalink());
                    $html .= '<td>';
                    $html .= '<p>' . $image . '</p> <!-- Display Image -->';
                    $html .= '</td>';
                    $html .= '</tr>';
                    $html .= '</tbody>';
                    $html .= '</table>';
                    $html .= '<p>&nbsp;</p>';
                break;
                default:
                    $image = '<a style="width:100%;height:100%;" href="' . get_permalink() . '">' . get_the_post_thumbnail(get_the_ID() , $image_size) . '</a>';
                    $title = '<h3 class="page-title"><a href="' . apply_filters('the_permalink', get_permalink()) . '">' . get_the_title() . '</a></h3>';
                    $excerpt = '<p>' . get_the_excerpt() . '</p>';
                    if ($order == 'modified')
                    {
                        $stamp = '<p class="posted-on" style="font-size: 85%; padding-bottom: 5px; padding-top: 5px;">' . get_the_modified_date() . ' | By ' . get_the_author() . '</p>';
                    }
                    else
                    {
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
                    $html .= get_readmore(get_permalink());
                    $html .= '</td>';
                    $html .= '</tr>';
                    $html .= '</tbody>';
                    $html .= '</table>';
                    $html .= '<p>&nbsp;</p>';
            }
        endwhile;
        if ($fmt == 1 && $pane == 'R')
        {
            $html .= '<td>';
            $html .= '<p>&nbsp;</p>';
            $html .= '</td>';
            $html .= '</tr>';
            $html .= '</tbody>';
            $html .= '</table>';
            $html .= '<p>&nbsp;</p>';
        }
    }
    else
    {
        $html = disp_error('Blog Summary Template - no blog posts assigned to (' . $category_list . ').');
    }
    wp_reset_postdata();
    return $html;
}
/**
 * ### deprecate ###
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
 *      0 - do not display captions or descriptions (default)
 *      1 - display captions
 *      2 - display descriptions
 *      3 - display captions and descriptions
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
    if (empty($sanitized_list))
    {
        $html = disp_error('Image Gallery Template - missing media category.');
    }
    else
    {
        // check for & fix missing arguments
        if (!is_array($atts))
        {
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
        else
        {
            if (!isset($atts['orderby']))
            {
                $atts['orderby'] = 'date';
            }
            if (!isset($atts['order']))
            {
                $atts['order'] = 'DESC';
            }
            if (!isset($atts['class']))
            {
                $atts['class'] = '';
            }
            if (!isset($atts['ratio']))
            {
                $atts['ratio'] = 0;
            }
            if (!isset($atts['opt']))
            {
                $atts['opt'] = 1;
            }
            if (!isset($atts['col']))
            {
                $atts['col'] = 2;
            }
            if (!isset($atts['cap']))
            {
                $atts['cap'] = 1;
            }
            if (!isset($atts['filter']))
            {
                $atts['filter'] = 0;
            }
        }
        // sanitized working variables
        $orderby = valid_orderby($atts['orderby']);
        $order = strtoupper($atts['order']);
        if (!$order == 'DESC')
        {
            $order = 'ASC';
        }
        $val = abs($atts['ratio']);
        switch ($val)
        {
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
        if ($val > 3)
        {
            $opt = 0;
        }
        else
        {
            $opt = $val;
        }
        $val = abs($atts['col']);
        if ($val == 0 || $val > 4)
        {
            $max_col = 2;
        }
        else
        {
            $max_col = $val;
        }
        $val = abs($atts['cap']);
        switch ($val)
        {
            case 0:
                $cap_style = 'class="img-caption alx:left"';
                if ($max_col > 2)
                {
                    $cap_style = 'class="img-caption alx:left fnt:size-sm"';
                }
            break;
            case 2:
                $cap_style = 'class="img-caption alx:right"';
                if ($max_col > 2)
                {
                    $cap_style = 'class="img-caption alx:right fnt:size-sm"';
                }
            break;
            default:
                $cap_style = 'class="img-caption"';
                if ($max_col > 2)
                {
                    $cap_style = 'class="img-caption fnt:size-sm"';
                }
        }
        $val = ck_prm($atts['class']);
        if (!empty($val))
        {
            if ($ratio == 'custom')
            {
                $class = 'class="' . $val . '"';
            }
            else
            {
                $class = 'class="' . $val . ' selected-ratio"';
            }
        }
        else
        {
            if ($ratio == 'custom')
            {
                $class = '';
            }
            else
            {
                $class = 'class="selected-ratio"';
            }
        }
        $filter = 'i';
        if ($atts['filter'] == 1)
        {
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
        if ($qry_rslt->have_posts())
        {
            // working variables
            $new_row = true;
            $cur_col = 1;
            $html = '<!-- 900208.1 Template: general / table / responsive -->';
            $html .= '<table id="responsive">';
            $html .= '<tbody>';
            while ($qry_rslt->have_posts()):
                $qry_rslt->the_post();
                $image = wp_get_attachment_image_src(get_the_ID() , 'full'); // Full sized image
                $thumb = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()) , 'thumbnail'); // Thumbnail size
                $img_id = get_post(get_post_thumbnail_id());
                if ($new_row)
                {
                    $html .= '<tr>';
                }
                $html .= '<td>';
                if ($ratio == 'custom')
                {
                    $html .= '<div><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img ' . $class . ' src="' . $image[0] . '"></a></div>';
                }
                else
                {
                    $html .= '<!-- 900220.1 Template: xtras / constrained / image -->';
                    $html .= '<div class="ratio-container">';
                    $html .= '<div class="' . $ratio . '"><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_blank"><img ' . $class . ' src="' . $image[0] . '"></a></div>';
                    $html .= '</div>';
                }
                if ($opt == 1 || $opt == 3)
                {
                    $html .= '<div ' . $cap_style . '>' . $qry_rslt
                        ->post->post_excerpt . '</div>';
                }
                if ($opt == 2 || $opt == 3)
                {
                    $html .= '<p>' . $qry_rslt
                        ->post->post_content . '</p>';
                }
                $html .= '</td>';
                $cur_col++;
                $new_row = ($cur_col > $max_col);
                if ($new_row)
                {
                    $html .= '</tr>';
                    $cur_col = 1;
                }
            endwhile;
            if (!$new_row)
            {
                $html .= '</tr>';
            }
            $html .= '</tbody>';
            $html .= '</table>';
        }
        else
        {
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
/* -------------------------------------------------------------------------------------/
 * functions
 ** ----------------------------------------------------------------------------------- */
/**
 * ### deprecated ###
 * function
 *
 * valid_categories
 *
 * return sanitized list of include/exclude categories id's separated by a comma
 *
 * syntax - valid_categories ( $category_lst, $category_opt )
 *
 *  $category_lst = comma separated category list
 *  $category_opt = (0) categories to include  (default)
 *                  (1) categories to exclude
 *
 */
function valid_categories($category_lst, $category_opt = 0)
{
    $retval = '';
    if (!empty(trim($category_lst)))
    {
        $category_opt = strtolower($category_opt);
        $opt_chr = '';
        if (abs($category_opt) == 1) $opt_chr = '-';
        $category_lst = str_replace(' ', ',', $category_lst);
        $category_lst = str_replace('.', ',', $category_lst);
        $category_lst = str_replace('/', ',', $category_lst);
        $cat_array = explode(',', $category_lst);
        $lst_items = array_filter($cat_array);
        $cat_lst = '';
        foreach ($lst_items as $lst_item)
        {
            $term = term_exists($lst_item);
            if (0 !== $term && null !== $term)
            {
                $cat_lst .= $opt_chr . $term . ',';
            }
        }
        $retval = substr($cat_lst, 0, -1);
    }
    return $retval;
}
/**
 * ### deprecated ###
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
    if (!empty(trim($arg)))
    {
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
        if (in_array(strtolower($arg) , $valid_opts))
        {
            $ret_val = strtolower($arg);
            if ($ret_val == 'id')
            {
                $ret_val = 'ID';
            }
            if (substr($ret_val, 0, 5) == 'post_')
            {
                $ret_val = substr_replace($ret_val, '', 0, 5);
            }
        }
    }
    return $ret_val;
}
/**
 * ### deprecated ###
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
    switch ($val)
    {
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
 * ### deprecated ###
 *
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
    if (!empty(trim($category_lst)))
    {
        $tst_val = rtrim(strtolower($category_lst));
        if (substr_count($tst_val, 'category') == 2)
        {
            if (substr($tst_val, -3) !== 'etc')
            {
                $retval = rtrim($category_lst);
            }
        }
        else
        {
            $retval = rtrim($category_lst);
        }
    }
    return $retval;
}
/*
    eof:shortcodes.php
*/
?>
