<?php
/**
 * WordPress Xidipity Theme
 * Theme Extended Functionality
 *
 * ###:  inc/template-tags.php
 * bld:  31201215
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
/*  # xty_excerpt
    # 30201115
    # return html excerpt
**/
if (!function_exists('xty_excerpt'))
{
	function xty_excerpt($argCnt = 0)
	{
		$html = '';
		$post_thumbnail_id = get_post_thumbnail_id();
		$wp_img = get_the_post_thumbnail(null, 'FULL', array(
			'class' => 'cnr:arch-x-small ht:auto wd:100%',
			'alt' => xty('seo')
		));
		$attachment_page_url = get_attachment_link($post_thumbnail_id);
		if (empty($attachment_page_url))
		{
			$attachment_page_url = wp_get_attachment_url();
		}
		$post_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));
		$html .= '<!-- xty:inc/template-tags/xty_excerpt' . $argCnt . '/ -->';
		if (xty('fea-img') == 'right')
		{
			$html .= '<div class="fx:rw sm)fx:r-rev fxa:1 fxb:1 fxc:1 mar:vrt+1">';
		}
		else
		{
			$html .= '<div class="fx:rw sm)fx:r fxa:1 fxb:1 fxc:1 mar:vrt+1">';
		}
		if (!empty($wp_img) && xty('fea-img') !== 'none')
		{
			$html .= '<div class="fxd:3 fxe:6 fb:100% sm)fb:40% sm)pad:rt+0.75 wd:0">';
			$html .= '<a href="' . $attachment_page_url . '">' . $wp_img . '</a>';
			$html .= '</div>';
			$html .= '<div class="fxd:2 fxe:6 pad:tp+0.5 sm)pad:tp+0 fb:100% sm)fb:70% lg)fb:80%">';
		}
		else
		{
			$html .= '<div class="fxd:2 fxe:6 pad:tp+0.5 sm)pad:tp+0 fb:100%">';
		}
		$html .= '<div class="fx:c fxa:1 fxb:1 fxc:1 ht:100%">';
		$html .= '<div class="fxd:3 fxe:6">';
		/*
		 *** developer.wordpress.org/reference/functions/the_title/
		*/
		$html .= '<h3>' . get_the_title() . '</h3>';
		$html .= '<p class="fnt:siz-md">' . get_the_excerpt() . '</p>';
		$html .= '<div class="mar:tp+0.5">';
		$html .= xty_readmore($post_link);
		$html .= '</div>';
		$html .= '</div>';
		$html .= '<div class="fxd:2 fxe:6 pad:tp+0.5 sm)pad:tp+0">';
		$html .= '<div class="fx:rw fxa:1 fxb:1 fxc:3 fnt:siz-sm-1x lg)fnt:siz-sm xl)fnt:siz-md">';
		$html .= '<div class="bkg:bas ln mar:bt+0.75 sm)dsp:none wd:100%"></div>';
		$post_type = get_post_type();
		$data_item = array();
		$ico_pre = '<div class="fx:r fxa:3 fxb:1 fxc:3 ht:2"><div class="fnt:siz-md-1x pad:rt+0.5">';
		$ico_pst = '</div></div>';
		$txt_pre = '<div class="fnt:siz-sm-2x pad:lt+0.25 pad:tp+0.25">';
		$txt_pst = '</div>';
		$div_pre = '<div class="txt:bas dsp:none sm)dsp:block aln:txt-ct pad:hrz+0.25">';
		$div_pst = '</div>';
		$bar_items = array();
		if ($post_type == 'post')
		{
			$category = xty_category();
			array_push($bar_items, 'category');
			$tags = xty_tags(get_the_ID());
			if (!empty($tags))
			{
				array_push($bar_items, 'tags');
			}
		}
		$published = xty_published();
		if ($published['date'] == $published['revision'])
		{
			array_push($bar_items, 'publish');
		}
		else
		{
			array_push($bar_items, 'modified');
		}
		array_push($bar_items, 'author');
		$html .= xty_info_bar($bar_items) . "\n";
		$html .= '</div>';
		$html .= '</div>';
		$html .= '</div>';
		$html .= '</div>';
		$html .= '</div>';
		$html .= '<!-- /xty:inc/template-tags/xty_excerpt' . $argCnt . '/ -->';
		/*
		 *** return html
		*/
		return $html;
	}
}
/*  # xty_pagination
    # 28200801
    # return html pagination
**/
if (!function_exists('xty_pagination'))
{
	function xty_pagination($cur_paged = 0, $tot_paged = 0)
	{
		$html = '';
		if (($cur_paged + $tot_paged) > 2)
		{
			$args = array(
				'base' => get_pagenum_link(1) . '%_%',
				'format' => '/page/%#%/',
				'total' => $tot_paged,
				'current' => $cur_paged,
				'show_all' => false,
				'end_size' => 1,
				'mid_size' => 2,
				'prev_next' => true,
				'prev_text' => '<b><</b>',
				'next_text' => '<b>></b>',
				'type' => 'plain',
				'add_args' => false,
				'add_fragment' => '',
				'before_page_number' => '',
				'after_page_number' => ''
			);
			$html .= '<div class="mar:vrt+0.25 prt[dsp:none]">';
			$html .= '<!-- xty:template-tags/xty_pagination -->';
			$html .= '<div class="fx:r fxa:4 fxb:6 fxc:3 bkg:bas+4 cnr:arch-x-small pad:vrt+0.25">';
			$html .= paginate_links($args);
			$html .= '</div>';
			$html .= '<!-- /xty:template-tags/xty_pagination -->';
			$html .= '</div>';
		}
		return $html;
	}
}
/*  # xty_content_footer
    # 28200801
    # return html
**/
if (!function_exists('xty_content_footer'))
{
	function xty_content_footer($items = array())
	{
		$html .= '<!-- xty:inc/template-tags/xty_content_footer -->';
		$html .= '<div class="mar:vrt+0.25">';
		$html .= xty_info_bar($items);
		$html .= '</div>';
		$html .= '<!-- /xty:inc/template-tags/xty_content_footer -->' . "\n";
		/*
		 *** return html
		*/
		return $html;
	}
}
/*  # xty_date
    # 28200801
    # return current date string
**/
if (!function_exists('xty_date'))
{
	function xty_date()
	{
		return current_time(get_option('date_format'));
	}
}
/*  # xty_comment_cnt
    # 28200801
    # return number of comments
**/
if (!function_exists('xty_comment_cnt'))
{
	function xty_comment_cnt()
	{
		$html = 0;
		if (comments_open())
		{
			$html = get_comments_number();
		}
		return $html;
	}
}
/*  # xty_dsp_content
    # 28200801
    # display content
**/
if (!function_exists('xty_dsp_content'))
{
	function xty_dsp_content()
	{
		remove_filter('the_content', 'wpautop');
		the_content();
		return;
	}
}
/*  # xty_published
    # 28200801
    # return date array
**/
if (!function_exists('xty_published'))
{
	function xty_published()
	{
		return array(
			"date" => get_the_date(get_option('date_format')) ,
			"revision" => get_the_modified_time(get_option('date_format'))
		);
	}
}
/*  # xty_support_agent
    # 28200801
    # return support agent message
**/
if (!function_exists('xty_support_agent'))
{
	function xty_support_agent($msg = '')
	{
		return '<div class="mar:vrt+1"><div class="fx:r fxa:1 fxc:3 bdr:lt-so-3x bdr:pri-2 bkg:tint-bas-1 cnr:arch-small"><div class="fnt:siz-lg-7x pad:hrz+0.5"><i class="icon:support_agent_solid"></i></div><div class="pad:rt+0.5 pad:vrt+0.5 txt:bas-3"><p class="fnt:family-serif fnt:siz-lg-2x sm)fnt:siz-lg-3x fnt:wgt-500 wd:100%">' . get_bloginfo('name') . ' Support</p><p>' . $msg . '</p><div class="mar:vrt+0.5 pad:vrt+0.5"><!--  TMPL:BUTTON --><button class="aln:txt-ct fnt:siz-sm-1x sm)fnt-size-medium" onclick="javascript:history.back()">Previous page</button><!-- /TMPL:BUTTON --></div></div></div></div>' . "\n";
	}
}
/*  # xty_author
    # 28200801
    # return post author
**/
if (!function_exists('xty_author'))
{
	function xty_author()
	{
		// Global Post
		global $post;
		$author = esc_html(get_the_author_meta('display_name', $post_author_id));
		if (empty($author))
		{
			$author = esc_html(get_the_author_meta('nickname', $post_author_id));
		}
		$post_author_id = get_post_field('post_author', $post->ID);
		return '<a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID', $post_author_id))) . '">' . $author . '</a>';
	}
}
/*  # xty_user
    # 28200801
    # return post author
**/
if (!function_exists('xty_user'))
{
	function xty_user()
	{
		if (is_user_logged_in())
		{
			$user_name = get_user_meta(get_current_user_id() , 'display_name', true);
			if (empty($user_name))
			{
				$user_name = get_user_meta(get_current_user_id() , 'nickname', true);
			}
		}
		else
		{
			$user_name = '';
		}
		return $user_name;
	}
}
/*  # xty_tags
    # 28200801
    # return post author
**/
if (!function_exists('xty_tags'))
{
	function xty_tags($arg = 0)
	{
		$html_val = '';
		$wp_tags = get_the_tags($arg);
		if (is_array($wp_tags))
		{
			$cnt = 1;
			$last_tag = count($wp_tags);
			foreach ($wp_tags as $wp_tag)
			{
				$html_val .= '<a href="' . get_tag_link($wp_tag->term_id) . '">' . $wp_tag->name . '</a>';
				if ($cnt++ < $last_tag)
				{
					$html_val .= ', ';
				}
			}
		}
		return $html_val;
	}
}
/*  # xty_readmore
    # 28200801
    # return html read more link
**/
if (!function_exists('xty_readmore'))
{
	function xty_readmore($arg = '')
	{
		$html = '';
		$html .= '<div class="fx:rw fxa:1 fxb:1 fxc:3">';
		$html .= '<div class="fx:r fxa:3 fxb:1 fxc:3 ht:2 wd:2 bkg:bas+5 cnr:arch-x-small">';
		$html .= '<div class="fnt:siz-md-1x fxd:1 fxe:1">';
		if (empty($arg))
		{
			$html .= '<i class="icon:comment_outline"></i>';
		}
		else
		{
			$html .= '<i class="icon:book_open_solid"></i>';			
		}
		$html .= '</div>';
		$html .= '</div>';
		$html .= '<div class="fnt:siz-sm-1x fxd:1 fxe:1 pad:lt+0.5 pad:tp+0.125">';
		if (empty($arg))
		{
			$html .= '<p>Additional information not available.</p>';
		}
		else
		{
			$html .= '<a href="' . $arg . '" >Read more &hellip;</a>';			
		}		
		$html .= '</div>';
		$html .= '</div>';
		return $html;
	}
}
/*  # xty_info_pole
    # 28200801
    # returns html flexbox of items
**/
if (!function_exists('xty_info_pole'))
{
	function xty_info_pole($items = array())
	{
		$ico_pre = '<div class="fx:r fxa:3 fxb:1 fxc:3 ht:2 wd:2 bkg:bas+3 cnr:arch-x-small"><div class="fnt:siz-md-1x fxd:1 fxe:1">';
		$ico_pst = '</div></div>';
		$txt_pre = '<div class="fnt:siz-sm-1x fxd:1 fxe:1 pad:lt+0.5">';
		$txt_pst = '</div>';
		$html .= '<!-- xty:inc/template-tags/xty_info_pole -->';
		$html .= '<div class="fx:rw fxa:1 fxb:1 fxc:3">';
		$end_item = end($items);
		foreach ($items as $item)
		{
			$add_divider = ($item !== $end_item);
			switch ($item)
			{
				case ('author'):
					$author = xty_author();
					if (empty($author))
					{
						$add_divider = false;
					}
					else
					{
						$html .= $ico_pre . '<i class="icon:user_author_solid"></i>' . $ico_pst;
						$html .= $txt_pre . $author . $txt_pst;
					}
				break;
				case ('category'):
					$cat = xty_category();
					if (empty($cat))
					{
						$add_divider = false;
					}
					else
					{
						$cat_dft = get_cat_name(get_option('default_category'));
						if (is_sticky())
						{
							$html .= $ico_pre . '<i class="icon:category_sticky_outline"></i>' . $ico_pst;								
						} elseif (has_match($cat_dft,$cat))
						{
							$html .= $ico_pre . '<i class="icon:category_default_outline"></i>' . $ico_pst;
						} elseif (has_match('archive', $cat))
						{
							$html .= $ico_pre . '<i class="icon:category_archive_solid"></i>' . $ico_pst;
						} else
						{
							$html .= $ico_pre . '<i class="icon:category_general_outline"></i>' . $ico_pst;
						}
						$html .= $txt_pre . $cat . $txt_pst;	
					}
				break;
				case ('comments'):
					$comment_cnt = xty_comment_cnt();
					$comment_msg = 'No Comments';
					$comment_icon = '<i class="icon:comment_none_outline"></i>';
					if ($comment_cnt > 1)
					{
						$comment_icon = '<i class="icon:comment_outline"></i>';
						$comment_msg = $comment_cnt . ' Comments';
					}
					elseif ($comment_cnt == 1)
					{
						$comment_icon = '<i class="icon:comment_outline"></i>';
						$comment_msg = '1 Comment';
					}
					$html .= $ico_pre . $comment_icon . $ico_pst;
					$html .= $txt_pre . $comment_msg . $txt_pst;
				break;
					/*: publish | modified date :*/
				case ('publish'):
					$published = xty_published();
					if ($published['date'] == $published['revision'])
					{
						$html .= $ico_pre . '<i class="icon:calendar_outline"></i>' . $ico_pst;
						$html .= $txt_pre . $published['date'] . $txt_pst;						
					}
					else
					{						
						$html .= $ico_pre . '<i class="icon:calendar_update_outline"></i>' . $ico_pst;
						$html .= $txt_pre . $published['revision'] . $txt_pst;
					}
				break;
				case ('tags'):
					$tags = xty_tags(get_the_ID());
					if (empty($tags))
					{
						$add_divider = false;
					}
					else
					{
						$html .= $ico_pre . '<i class="icon:tag_outline"></i>' . $ico_pst;
						$html .= $txt_pre . $tags . $txt_pst;
					}
				break;
				case ('readmore'):
					$html .= $ico_pre . '<i class="icon:tag_outline"></i>' . $ico_pst;
					$html .= $txt_pre . $tags . $txt_pst;
				break;
					/*: error :*/
				default:
					$html .= $ico_pre . '<i class="icon:error_solid"></i>' . $ico_pst;
					$html .= $txt_pre . $item . $txt_pst;
			}
			if ($add_divider)
			{
				$html .= '<div class="fx:break mar:vrt+0.25"></div>';
			}
		}
		$html .= '</div>';
		$html .= '<!-- /xty:inc/template-tags/xty_info_pole -->' . "\n";
		/*
		 *** return html
		*/
		return $html;
	}
}
/*  # xty_info_bar
    # 28200801
    # returns html flexbox of items
**/
if (!function_exists('xty_info_bar'))
{
	function xty_info_bar($items = array())
	{
		global $post;
		$ico_pre = '<div class="fx:r fxa:1 fxb:1 fxc:3 ht:2"><div class="fnt:siz-md-1x">';
		$ico_pst = '</div></div>';
		$ico_prt = '<div class="fx:r fxa:1 fxb:1 fxc:3 ht:2 prt[dsp:none]"><div class="fnt:siz-md-1x">';
		$txt_pre = '<div class="fnt:siz-sm-2x pad:lt+0.5">';
		$txt_pst = '</div>';
		$txt_prt = '<div class="fnt:siz-sm-2x pad:lt+0.5 prt[dsp:none]">';
		$div_pre = '<div class="aln:txt-ct dsp:none sm)dsp:block pad:hrz+0.25 txt:bas">';
		$div_pst = '</div>';
		$html .= '<!-- xty:inc/template-tags/xty_info_bar -->';
		$html .= '<div class="fx:rw fxa:1 fxb:1 fxc:3">';
		$end_item = end($items);
		foreach ($items as $item)
		{
			$add_divider = ($item !== $end_item);
			switch ($item)
			{
				case ('author'):
					$author = xty_author();
					if (empty($author))
					{
						$add_divider = false;
					}
					else
					{
						$html .= $ico_pre . '<i class="icon:user_author_solid"></i>' . $ico_pst;
						$html .= $txt_pre . $author . $txt_pst;
					}
				break;
					/*: browser back :*/
				case ('back'):
					$html .= $ico_prt . '<i class="icon:page_previous_solid"></i>' . $ico_pst;
					$html .= $txt_prt . '<a href="javascript:history.back()">Go Back</a>' . $txt_pst;
				break;
				case ('category'):
					$cat = xty_category();
					if (empty($cat))
					{
						$add_divider = false;
					}
					else
					{
						$cat_dft = get_cat_name(get_option('default_category'));
						if (is_sticky())
						{
							$html .= $ico_pre . '<i class="icon:category_sticky_outline"></i>' . $ico_pst;								
						} elseif (has_match($cat_dft,$cat))
						{
							$html .= $ico_pre . '<i class="icon:category_default_outline"></i>' . $ico_pst;
						} elseif (has_match('archive', $cat))
						{
							$html .= $ico_pre . '<i class="icon:category_archive_solid"></i>' . $ico_pst;
						} else
						{
							$html .= $ico_pre . '<i class="icon:category_general_outline"></i>' . $ico_pst;
						}
						$html .= $txt_pre . $cat . $txt_pst;	
					}
				break;
				case ('file_type'):
					$url = wp_get_attachment_url();
					if (empty($url))
					{
						$add_divider = false;
					}
					else
					{
						$html .= $txt_pre . 'File Type: ' . substr($url, -3) . $txt_pst;
					}
				break;
				case ('img_ratio'):
					$aspect_ratio = '';
					$att_metadata = wp_get_attachment_metadata($post->ID);
					if (!empty($att_metadata))
					{
						$ratio = round(absint($att_metadata['height']) / absint($att_metadata['width']) , 4);
						switch ($ratio)
						{
							case (1):
								$aspect_ratio = '1x1';
							break;
							case (0.75):
								$aspect_ratio = '4x3';
							break;
							case (0.6667):
								$aspect_ratio = '3x2 (classic film)';
							break;
							case (0.7146):
								$aspect_ratio = '7x5';
							break;
							case (0.625):
								$aspect_ratio = '16x10';
							break;
							case (0.5625):
								$aspect_ratio = '16x9 (high definition)';
							break;
							case (0.4281):
								$aspect_ratio = '21x9 (cinemascope)';
							break;
							default:
								$aspect_ratio = 'Unknown';								
						}
					}
					if (empty($aspect_ratio))
					{
						$add_divider = false;
					}
					else
					{
						$html .= $ico_pre . '<i class="icon:aspect_ratio_outline"></i>' . $ico_pst;
						$html .= $txt_pre . $aspect_ratio . $txt_pst;
					}
				break;
				case ('img_size'):
					$att_metadata = wp_get_attachment_metadata($post->ID);
					if (empty($att_metadata))
					{
						$add_divider = false;
					}
					else
					{
						$html .= $ico_pre . '<i class="icon:dimension_solid"></i>' . $ico_pst;
						$html .= $txt_pre . absint($att_metadata['width']) . 'x' . absint($att_metadata['height']) . ' pixels' . $txt_pst;
					}
				break;
					/*: modified date :*/
				case ('modified'):
					$published = xty_published();
					$html .= $ico_pre . '<i class="icon:calendar_update_outline"></i>' . $ico_pst;
					$html .= $txt_pre . $published['revision'] . $txt_pst;
				break;
				case ('print'):
					$html .= $ico_prt . '<i class="icon:printer_solid"></i>' . $ico_pst;
					$html .= $txt_prt . '<a href="javascript:window.print()">Print</a>' . $txt_pst;
				break;
					/*: publish date :*/
				case ('publish'):
					$published = xty_published();
					$html .= $ico_pre . '<i class="icon:calendar_outline"></i>' . $ico_pst;
					$html .= $txt_pre . $published['date'] . $txt_pst;
				break;
				case ('tags'):
					$tags = xty_tags(get_the_ID());
					if (empty($tags))
					{
						$add_divider = false;
					}
					else
					{
						$html .= $ico_pre . '<i class="icon:tag_outline"></i>' . $ico_pst;
						$html .= $txt_pre . $tags . $txt_pst;
					}
				break;
					/*: today's date :*/
				case ('today'):
					$html .= $ico_pre . '<i class="icon:calendar_today_outline"></i>' . $ico_pst;
					$html .= $txt_pre . xty_date() . $txt_pst;
				break;
					/*: current user :*/
				case ('user'):
					$current_user = xty_user();
					if (!empty($current_user))
					{
						$html .= $ico_pre . '<i class="icon:user_solid"></i>' . $ico_pst;
						$html .= $txt_pre . __($current_user) . $txt_pst;
					}
					else
					{
						$add_divider = false;
					}
				break;
					/*: error :*/
				default:
					$html .= $ico_pre . '<i class="icon:error_solid"></i>' . $ico_pst;
					$html .= $txt_pre . $item . $txt_pst;
			}
			if ($add_divider)
			{
				$html .= $div_pre . '&#65372;' . $div_pst;
				$html .= '<div class="fx:break sm)dsp:none"></div>';
			}
		}
		$html .= '</div>';
		$html .= '<!-- /xty:inc/template-tags/xty_info_bar -->' . "\n";
		/*
		 *** return html
		*/
		return $html;
	}
}
/*  # xty_category
    # 28200801
    # return category
**/
if (!function_exists('xty_category'))
{
	function xty_category($lnk = true)
	{
		/*
		          show yoast primary category, or first category
		*/
		$category = get_the_category();
		$useCatLink = true;
		$html = '';
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
				if ($useCatLink == true && !empty($category_link) && $lnk)
				{
					$html .= '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
				}
				else
				{
					$html = htmlspecialchars($category_display);
				}
			}
			/*: return html :*/
			return $html;
		}
	}
}
/*  # deprecate
    # 90728.1
    # return html
**/
if (!function_exists('xidipity_first_category'))
{
	function xidipity_first_category($arg = '')
	{
		/*
		          show yoast primary category, or first category
		*/
		$category = get_the_category();
		$useCatLink = true;
		$html = '';
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
				if ($useCatLink == true && !empty($category_link) && empty($arg))
				{
					$html .= '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
				}
				else
				{
					$html = htmlspecialchars($category_display);
				}
			}
			/*: return html :*/
			return $html;
		}
	}
}
/*  # custom logo
    # 90904.1a
    # core wordpress process
**/
if (!function_exists('xidipity_the_custom_logo'))
{
	/**
	 * Displays the optional custom logo.
	 *
	 * Does nothing if the custom logo is not available.
	 */
	function xidipity_the_custom_logo()
	{
		if (function_exists('the_custom_logo'))
		{
			the_custom_logo();
		}
	}
}
/*  # does excerpt exist
    # 90904.1a
    # core wordpress process
    # returns bool
**/
function xidipity_has_excerpt()
{
	// Post Excerpt
	$post_excerpt = get_the_excerpt();
	/**
	 * Filters the Post has excerpt.
	 *
	 * @param bool
	 */
	return apply_filters('xidipity_has_excerpt', !empty($post_excerpt));
}
/*
 * EOF: inc/template-tags.php / 31201215
*/
?>
