<?php
/**
 * WordPress Xidipity Theme
 * Theme Extended Functionality
 *
 * ###:  inc/extras.php
 * bld:  28200801
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
/*
 *
 *  PRG     Build     Description
 *  ------  --------  ---------------------------------------------------------
 *  bexc    200513    blog excerpt
 *  xlst    200429    excerpt list
 *  blst    200322    unordered list of linked blog titles
 *  clst    200322    unordered list of linked category titles
 *  imgg    200322    image gallary
 *  plst    200322    unordered list of linked page titles
 *
 *  Utility
 *  ---------------  ---------------------------------------------------------
 *  get_db           get db value
 *  get_pg_title     get page title
 *  lst_theme        get theme info
 *  wp-ver           get wordpess version
 *
*/
/*
 *  Xidipity WordPress Theme
 *
 *  name:   bexc
 *  build:  200513
 *  descrp: display blog excerpt
 *  attributes ($args - array):
 *      readmore - string (n/y)
 *
 *  parameters ($prm - string):
 *      post title - string
 *
 *  [bexc readmore='']post[/bexc]
 *
*/
add_shortcode('bexc', 'bexc_shortcode');
function bexc_shortcode($args = array() , $prm = '')
{
	/*
	 ***
	 * variables defaults
	 ***
	*/
	$html_retval = '';
	$readmore = 'n';
	/*
	 ***
	 * parameters
	 ***
	*/
	$page_title = $prm;
	/*
	 ***
	 * initialize local arguments
	 ***
	*/
	if (isset($args['readmore']))
	{
		$tmp_str = purge_tmpl_mrker($args['readmore']);
		if (has_match(strtolower($tmp_str) , 'y,n'))
		{
			$readmore = $tmp_str;
		}
	}
	if (!empty($page_title))
	{
		$page = get_page_by_title($page_title, OBJECT, array(
			'post_type' => 'post'
		));
		if (!empty($page))
		{
			$bexc = get_the_excerpt($page->ID);
			if (!empty($bexc))
			{
				$html_retval = $bexc;
			}
			else
			{
				$html_retval = dsp_err('[bexc] Blog excerpt not found');
			}
			if ($readmore == 'y')
			{
				$page_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink($page->ID)));
				$html_retval .= xty_readmore($page_link);
			}
		}
		else
		{
			$html_retval = dsp_err('[bexc] Blog post not found');
		}
	}
	else
	{
		$html_retval = dsp_err('[bexc] Missing blog title parameter');
	}
	return $html_retval;
}
/*
 *
 *  name:   xlst
 *  build:  28200801
 *  descrp: display list of blog excerpts by category
 *  arguments ($args - array):
 *      align_img - string (l/r/x) x=no image
 *      cnt - numeric
 *      orderby - string
 *      order - string (a/d)
 *
 *  parameter ($prm - string):
 *      category - string
 *
 *  [xlst align_img='' cnt=0 orderby='' order='']categories[/xlst]
 *
*/
add_shortcode('xlst', 'xlst_shortcode');
function xlst_shortcode($args = array() , $prm = '')
{
	$html = '';
	/*
	 *** initialize arguments
	*/
	$args = array_map('strtolower', $args);
	if (isset($args['align_img']))
	{
		$result = purge_tmpl_mrker($args['align_img']);
		if (has_match($result, 'x,l,r'))
		{
			switch ($result)
			{
				case ('r'):
					xty('fea-img', 'right');
				break;
				case ('x'):
					xty('fea-img', 'none');
				break;
				default:
					xty('fea-img', 'left');
			}
		}
	}
	$pst_per_page = get_option('posts_per_page');
	if (isset($args['cnt']))
	{
		$result = abs($args['cnt']);
		if ($result > 0)
		{
			$pst_per_page = $result;
		}
		else
		{
			$pst_per_page = - 1;
		}
	}
	$order = 'DESC';
	$orderby = 'date';
	if (isset($args['orderby']))
	{
		$result = purge_tmpl_mrker($args['orderby']);
		if (!empty($result))
		{
			$orderby = valid_orderby($result);
		}
	}
	if ($orderby == 'title')
	{
		$order = 'ASC';
	}
	if (isset($args['order']))
	{
		$result = purge_tmpl_mrker($args['order']);
		if (!empty($result) && $result[0] == 'a')
		{
			$order = 'ASC';
		}
	}
	/*
	 *** get category id/s
	*/
	$category_ids = '';
	if (!empty($prm))
	{
		$category_ids = get_cat_IDs($prm);
		if (empty($category_ids))
		{
			$category_ids = '0c0f09273fc544b2bb2cd0ea64aec81d';
		}
	}
	/*
	 *** set up db query
	*/
	$qry_args = array(
		'cat' => $category_ids,
		'ignore_sticky_posts' => true,
		'order' => $order,
		'orderby' => $orderby,
		'post_type' => 'post',
		'posts_per_page' => $pst_per_page
	);
	$wp_data = new WP_Query($qry_args);
	if ($wp_data->have_posts())
	{
		$cnt = 0;
		while ($wp_data->have_posts())
		{
			$wp_data->the_post();
			/*
			 *** inc/template-tags/xty_excerpt
			*/
			$html .= '<div class="mar:bottom+2">' . "\n";
			$html .= xty_excerpt();
			$html .= '</div>' . "\n";
		}
	}
	else
	{
		/*
		 *** inc/template-tags/xty_support_agent
		*/
		$html = dsp_err('No posts assigned to the category ' . $prm . '.');
	}
	/*
	 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
	*/
	wp_reset_postdata();
	/*
	 *** return html
	*/
	return $html;
}
/**
 *  name:   blst
 *  build:  200322
 *  descrp: display unordered list of linked blog titles
 *  attributes ($args - array):
 *      class - string
 *      bullet - string (font awesome)
 *      orderby - string
 *      order - string (A/D)
 *      cnt - numeric
 *
 *  parameters ($prm - string):
 *      category - string
 *
 *  [blst class='' bullet='' orderby='' order='' cnt=0]category[/blst]
 *
 */
add_shortcode('blst', 'blst_shortcode');
function blst_shortcode($args = array() , $prms = '')
{
	/*
	 ***
	 * variables defaults
	 ***
	*/
	$bullet = '';
	$class = '';
	$cnt = - 1;
	$html_retval = '';
	$order = 'ASC';
	$orderby = 'title';
	/*
	 ***
	 * parameters
	 ***
	*/
	$prm_categories = trim($prms);
	/*
	 ***
	 * save args to local variables
	 ***
	*/
	if (isset($args['bullet']))
	{
		$bullet = purge_tmpl_mrker($args['bullet']);
	}
	if (isset($args['class']))
	{
		$tmp_str = purge_tmpl_mrker($args['class']);
		if (!empty($tmp_str))
		{
			$class = $tmp_str;
		}
	}
	if (isset($args['cnt']))
	{
		$tmp_num = abs($args['cnt']);
		if ($tmp_num > 0)
		{
			$cnt = $tmp;
		}
	}
	if (isset($args['orderby']))
	{
		$tmp_str = purge_tmpl_mrker($args['orderby']);
		if (!empty($tmp_str))
		{
			$orderby = valid_orderby($tmp_str);
		}
	}
	if (isset($args['order']))
	{
		$tmp_str = purge_tmpl_mrker($args['order']);
		if (strtoupper($tmp_str) == 'D')
		{
			$order = 'DESC';
		}
	}
	/*
	 ***
	 * font awesome bullet
	 ***
	*/
	if (!empty($bullet))
	{
		$tmp_str = $class;
		$class = 'ul-fa ' . $tmp_str;
		$pre_itm = '<span class="li-fa">' . $bullet . '</span>';
		$pst_itm = '';
	}
	/*
	 ***
	 * get category id's
	 ***
	*/
	$category_ids = get_cat_IDs($prm_categories);
	/*
	 ***
	 * set up db query
	 ***
	*/
	$qry_args = array(
		'ignore_sticky_posts' => 1,
		'order' => $order,
		'orderby' => $orderby,
		'perm' => 'readable',
		'posts_per_page' => $cnt,
		'cat' => $category_ids
	);
	$wp_data = new WP_Query($qry_args);
	/*
	 ***
	 * build return html
	 ***
	*/
	$html_retval = '<ul>';
	if (!empty($class))
	{
		$html_retval = '<ul class="' . $class . '">';
	}
	if ($wp_data->have_posts())
	{
		while ($wp_data->have_posts())
		{
			$wp_data->the_post();
			$html_retval .= '<li>';
			$html_retval .= '<a href="' . get_permalink() . '">' . $pre_itm . get_the_title() . $pst_itm . '</a>';
			$html_retval .= '</li>';
		}
	}
	else
	{
		$html_retval .= '<li>No posts found ...</li>';
	}
	$html_retval .= '</ul>';
	/*
	 ***
	 * function: wp_reset_postdata
	 * dsc: database code
	 * ver: 200322
	 * fnt: reset database query
	 * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
	 ***
	*/
	wp_reset_postdata();
	/*
	 ***
	 * return html
	 ***
	*/
	return $html_retval;
}
/**
 *  name:   clst
 *  build:  200322
 *  descrp: display unordered list of linked category titles
 *  attributes ($args - array):
 *      class - string
 *      bullet - string (font awesome)
 *      depth - numeric
 *      active - string (y/n)
 *
 *  parameters ($prm - string):
 *      category - string
 *
 *  developer.wordpress.org/reference/functions/wp_list_categories/
 *
 *  [clst class='' bullet='' depth=0 active='']category[/clst]
 *
 */
add_shortcode('clst', 'clst_shortcode');
function clst_shortcode($args = array() , $prm = '')
{
	/*
	 ***
	 * variables defaults
	 ***
	*/
	$active = 0;
	$bullet = '';
	$class = '';
	$depth = 0;
	$html_retval = '';
	$pre_itm = '';
	$pst_itm = '';
	/*
	 ***
	 * parameters
	 ***
	*/
	$prm_categories = trim($prm);
	/*
	 ***
	 * save args to local variables
	 ***
	*/
	if (isset($args['active']))
	{
		$tmp_str = strtolower(purge_tmpl_mrker($args['active']));
		if ($tmp_str == 'y')
		{
			$active = 1;
		}
	}
	if (isset($args['bullet']))
	{
		$bullet = purge_tmpl_mrker($args['bullet']);
	}
	if (isset($args['class']))
	{
		$tmp_str = purge_tmpl_mrker($args['class']);
		if (!empty($tmp_str))
		{
			$class = $tmp_str;
		}
	}
	if (isset($args['depth']))
	{
		$depth = abs($args['depth']);
	}
	/*
	 ***
	 * font awesome bullet
	 ***
	*/
	if (!empty($bullet))
	{
		$tmp_str = $class;
		$class = 'ul-fa ' . $tmp_str;
		$pre_itm = '<span class="li-fa">' . $bullet . '</span>';
		$pst_itm = '';
	}
	/*
	 ***
	 * get category id's
	 ***
	*/
	$category_ids = get_cat_IDs($prm_categories);
	/*
	 ***
	 * separate include/exclude category id's
	 ***
	*/
	$include_ids = '';
	$exclude_ids = '';
	$cat_ids = explode(',', $category_ids);
	foreach ($cat_ids as $cat_id)
	{
		if (substr($cat_id, 0, 1) == '-')
		{
			$exclude_ids .= substr($cat_id, 1) . ',';
		}
		else
		{
			$include_ids .= $cat_id . ',';
		}
	}
	if (!empty($include_ids))
	{
		$include_ids = substr($include_ids, 0, -1);
	}
	if (!empty($exclude_ids))
	{
		$exclude_ids = substr($exclude_ids, 0, -1);
	}
	/*
	 ***
	 * set up db query
	 ***
	*/
	$wp_data = array(
		'child_of' => $include_ids,
		'class' => $class,
		'current_category' => 0,
		'depth' => $depth,
		'echo' => false,
		'exclude' => $exclude_ids,
		'exclude_tree' => '',
		'feed' => '',
		'feed_image' => '',
		'feed_type' => '',
		'hide_empty' => $active,
		'hide_title_if_empty' => false,
		'hierarchical' => true,
		'link_after' => $pst_itm,
		'link_before' => $pre_itm,
		'order' => 'ASC',
		'orderby' => 'name',
		'separator' => '<br />',
		'show_count' => false,
		'show_option_all' => '',
		'show_option_none' => __('No categories', 'xidipity') ,
		'style' => 'list',
		'taxonomy' => 'category',
		'title_li' => '',
		'use_desc_for_title' => 0,
		'walker' => new c_walker()
	);
	/*
	 ***
	 * build return html
	 ***
	*/
	$html_retval = '<ul>';
	if (!empty($class))
	{
		$html_retval = '<ul class="' . $class . '">';
	}
	$html_retval .= wp_list_categories($wp_data);
	$html_retval .= '</ul>';
	/*
	 ***
	 * function: wp_reset_postdata
	 * dsc: database code
	 * ver: 200322
	 * fnt: reset database query
	 * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
	 ***
	*/
	wp_reset_postdata();
	/*
	 *** return html
	*/
	return $html_retval;
}
/**
 *  name: imgg (scratchpad)
 *  build: 28200801
 *  description: Gallery images by category
 *  attributes ($args - array):
 *      class	- string
 *      caption	- string (l/c/r)
 *      content	- string (y/n)
 *      orderby	- string
 *      order	- string (A/D)
 *
 *  parameter ($prm - string):
 *      category/s - string
 *
 * [imgg class="" cnt=0  caption="" content="" orderby="" order=""]category/s[/imgg]
 *
 */
add_shortcode('imgg', 'imgg_shortcode');
function imgg_shortcode($args = array() , $prm = '')
{
	$html = '';
	$tot_paged = 0;
	xty('seo', 'Xidipity WordPress Theme Gallery');
	/*
	 *** initialize arguments
	*/
	$args = array_map('strtolower', $args);
	$caption = 'c';
	if (isset($args['caption']))
	{
		$result = purge_tmpl_mrker($args['caption']);
		if (has_match($result, 'l,c,r,x'))
		{
			$caption = $result;
		}
	}
	$class = '';
	if (isset($args['class']))
	{
		$result = purge_tmpl_mrker($args['class']);
		if (!empty($result))
		{
			$class = $result;
		}
	}
	$content = 'n';
	if (isset($args['content']))
	{
		$result = purge_tmpl_mrker($args['content']);
		if (has_match($result, 'y,n'))
		{
			$content = $result;
		}
	}
	$pst_per_page = get_option('posts_per_page');
	if (isset($args['cnt']))
	{
		$result = abs($args['cnt']);
		if ($result > 0)
		{
			$pst_per_page = $result;
		}
		else
		{
			$pst_per_page = - 1;
		}
	}
	$orderby = 'date';
	if (isset($args['orderby']))
	{
		$result = purge_tmpl_mrker($args['orderby']);
		if (!empty($result))
		{
			$orderby = valid_orderby($result);
		}
	}
	$order = 'DESC';
	if (isset($args['order']))
	{
		$result = purge_tmpl_mrker($args['order']);
		if (!empty($result) && $result[0] == 'a')
		{
			$order = 'ASC';
		}
	}
	/*
	 *** get category id/s
	*/
	$category_ids = '';
	if (!empty($prm))
	{
		$category_ids = get_cat_IDs($prm);
		if (empty($category_ids))
		{
			$category_ids = '0c0f09273fc544b2bb2cd0ea64aec81d';
		}
	}
	/*
	 *** set pagination variables
	*/
	$cur_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
	/*
	 *** set up db query
	*/
	$qry_args = array(
		'cat' => $category_ids,
		'ignore_sticky_posts' => true,
		'order' => $order,
		'orderby' => $orderby,
		'paged' => $cur_paged,
		'post_mime_type' => 'image',
		'post_status' => 'inherit',
		'post_type' => 'attachment',
		'posts_per_page' => $pst_per_page
	);
	$wp_data = new WP_Query($qry_args);
	if ($wp_data->have_posts())
	{
		$cnt = 0;
		$tot_paged = $wp_data->max_num_pages;
		$html .= '<div class="fx:rw fxa:1 fxb:1 fxc:1 wd:100%">';
		while ($wp_data->have_posts())
		{
			$wp_data->the_post();
			$cnt++;
			$html .= '<cmt name="begin">INC/EXTRAS/IMGG/' . $cnt . '/</cmt>';
			/*
			 *** get post object
			*/
			$wp_post = get_post();
			$image_caption = $wp_post->post_excerpt;
			$image_content = $wp_post->post_content;
			$html .= '<div class="fxd:1 fxe:1 pad:bottom+1 sm)pad:hrz+0.5 wd:100% sm)wd:1/2 md)wd:1/3 xl)wd:1/4">';
			/*
			 *** display details as column
			*/
			$html .= '<div class="fx:c fxa:1 fxb:6 fxc:5">';
			/*
			 *** display image
			*/
			$html .= '<div class="fxd:1 fxe:1">';
			$html .= wp_get_attachment_link(get_the_ID() , 'full', true, false, false, array(
				'class' => $class,
				'alt' => xty('seo')
			));
			$html .= '</div>';
			/*
			 *** display caption
			*/
			if (empty($image_caption))
			{
				$show_caption = 'x';
			}
			else
			{
				$show_caption = $caption;
			}
			switch ($show_caption)
			{
				case 'l':
					$html .= '<div class="aln:text-left fxd:1 fxe:1 fnt:size-smaller mar:top+0.25">';
				break;
				case 'r':
					$html .= '<div class="aln:text-right fxd:1 fxe:1 fnt:size-smaller mar:top+0.25">';
				case 'x':
					$html .= '<div class="dsp:none">';
				break;
				default:
					$html .= '<div class="aln:text-center fxd:1 fxe:1 fnt:size-smaller mar:top+0.25">';
			}
			$html .= $image_caption;
			$html .= '</div>';
			/*
			 *** display content
			*/
			if ($content == 'y')
			{
				$html .= '<div class="aln:text-left fxd:1 fxe:1 mar:top+0.25">';
				$html .= $image_content;
				$html .= '</div>';
			}
			$html .= '</div>';
			$html .= '</div>';
			$html .= '<cmt name="end">INC/EXTRAS/IMGG/' . $cnt . '/</cmt>';
		}
		$html .= '</div>';
	}
	else
	{
		/*
		 *** template-tags/xty_support_agent
		*/
		$html = xty_support_agent('There are no images are assigned to the category/s: ' . $prm);
	}
	/*
	 *** template-tags/xty_pagination
	*/
	$html .= xty_pagination($cur_paged, $tot_paged);
	/*
	 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
	*/
	wp_reset_postdata();
	/*
	 *** return html
	*/
	return $html;
}
/*
 *
 *  name:   plst
 *  build:  200322
 *  descrp: display unordered list of linked page titles
 *  attributes ($args - array):
 *      class - string
 *      bullet - string (font awesome/google)
 *      depth - numeric
 *
 *  parameters ($prm - string):
 *      page title(s) - string
 *
 *  [plst class='' bullet='' depth=0]titles[/plst]
 *
 *  developer.wordpress.org/reference/functions/wp_list_pages/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.9
 *
*/
add_shortcode('plst', 'plst_shortcode');
function plst_shortcode($args = array() , $prm = string)
{
	/*
	 ***
	 * variables defaults
	 ***
	*/
	$bullet = '';
	$class = '';
	$depth = 0;
	$html_retval = '';
	$pre_itm = '';
	$pst_itm = '';
	/*
	 ***
	 * parameters
	 ***
	*/
	$prm_titles = trim($prm);
	/*
	 ***
	 * save args to local variables
	 ***
	*/
	if (isset($args['bullet']))
	{
		$bullet = purge_tmpl_mrker($args['bullet']);
	}
	if (isset($args['class']))
	{
		$tmp_str = purge_tmpl_mrker($args['class']);
		if (!empty($tmp_str))
		{
			$class = $tmp_str;
		}
	}
	if (isset($args['depth']))
	{
		$depth = abs($args['depth']);
	}
	/*
	 ***
	 * font awesome bullet
	 ***
	*/
	if (!empty($bullet))
	{
		$tmp_str = $class;
		$class = 'ul-fa';
		if (!empty($tmp_str))
		{
			$class .= ' ' . $tmp_str;
		}
		$pre_itm = '<span class="li-fa">' . $bullet . '</span>';
	}
	/*
	 ***
	 * sanitize page title argument
	 ***
	*/
	$include_ids = '';
	$exclude_ids = '';
	if (!empty($prm_titles))
	{
		$separators = array(
			".",
			"/",
			":",
			";",
			"|"
		);
		$tmp_str = str_replace($separators, ",", $prm_titles);
		$prm_titles = $tmp_str;
		/*
		 ***
		 * build include/exclude page id list
		 ***
		*/
		$titles = explode(',', $prm_titles);
		foreach ($titles as $title)
		{
			$page = get_page_by_title(str_replace('-', '', $title));
			if ($page)
			{
				if (substr($title, 0, 1) == '-')
				{
					$exclude_ids .= $page->ID . ',';
				}
				else
				{
					$include_ids .= $page->ID . ',';
				}
			}
		}
		if (!empty($include_ids))
		{
			$include_ids = substr($include_ids, 0, -1);
		}
		if (!empty($exclude_ids))
		{
			$exclude_ids = substr($exclude_ids, 0, -1);
		}
	}
	/*
	 ***
	 * initialize query arguments
	 ***
	*/
	$wp_data = array(
		'child_of' => $include_ids,
		'depth' => $depth,
		'echo' => false,
		'exclude' => $exclude_ids,
		'link_after' => $pst_itm,
		'link_before' => $pre_itm,
		'sort_column' => 'title',
		'title_li' => ''
	);
	/*
	 ***
	 * build return html
	 ***
	*/
	$html_retval = '<ul>';
	if (!empty($class))
	{
		$html_retval = '<ul class="' . $class . '">';
	}
	$html_retval .= wp_list_pages($wp_data);
	$html_retval .= '</ul>';
	/*
	 ***
	 * function: wp_reset_postdata
	 * dsc: database code
	 * ver: 200322
	 * fnt: reset database query
	 * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
	 ***
	*/
	wp_reset_postdata();
	/*
	 ***
	 * return html
	 ***
	*/
	return $html_retval;
}
/**
 *  Utilities
 *  ---------------------------------------------------------------------------
 *
 */
/*  # fa_ver
    # 28200801
    # display font awesome version
    # fontawesome.com/
*/
add_shortcode('fa_ver', 'fa_ver_shortcode');
function fa_ver_shortcode()
{
	return xty('fa-ver');
}
/*  # wp_ver
    # 28200801
    # display wordpress version
    # wordpress.org/
*/
add_shortcode('wp_ver', 'wp_ver_shortcode');
function wp_ver_shortcode()
{
	return get_bloginfo('version');
}
/*  # xidipity
    # 28200801
    # display theme property
        - Name
        - ThemeURI
        - Description
        - Author
        - Version
        - Status
        - Tags
*/
add_shortcode('xidipity', 'xidipity_shortcode');
function xidipity_shortcode($atts = array())
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
			$atts['label'] = '<sup><i class="fas fa-map-marker" style="color:#c62828;">&#8203;</i></sup>';
	}
	$xty_theme = wp_get_theme();
	if (empty($atts['label']))
	{
		return $xty_theme->get($opt);
	}
	else
	{
		return $xty_theme->get($opt) . ' ' . $atts['label'];
	}
}
/*
 * EOF:     inc/extras.php
 * Build:   28200801
 *
*/
?>
