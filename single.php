<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying blog post
 *
 * ###:  single.php
 * bld:  28200715
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
/*
 *** set page options
*/
dsp_menu('yes');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
/*
 ***/
echo '<cmt>### FILE/SINGLE/PHP ###</cmt>' . "\n";
/***
*/
echo '<cmt name="begin">PAGE/BODY</cmt>' . "\n";
echo '<div class="fxd:1 fxe:2 fb:100%">' . "\n";
echo '<cmt name="begin">PAGE/BODY/POST</cmt>' . "\n";
/*
 *** align sidebar
*/
if (XTY_SIDEBAR_ALIGN == 'left')
{
	echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<cmt name="begin">PAGE/BODY/POST/CONTENT</cmt>' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:left+0.5">' . "\n";
}
else
{
	echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<cmt name="begin">PAGE/BODY/POST/CONTENT</cmt>' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:right+0.5">' . "\n";
}
echo '<article class="bkg:content box:shadow dsp:block ht:min10 pad:hrz+1 txt:content wd:100%">' . "\n";
if (have_posts())
{
	the_post();
	/*
	 *** developer.wordpress.org/reference/functions/the_title/
	*/
	echo '<cmt name="begin">PAGE/BODY/POST/HEADER</cmt>' . "\n";
	echo '<header class="mar:top+1 wd:100%">' . "\n";
	the_title('<div class="pg:title">', '</div>');
	echo '<div class="bkg:bas+2 ln mar:bottom+0.75"></div>' . "\n";
	echo '</header>' . "\n";
	echo '<cmt name="end">PAGE/BODY/POST/HEADER</cmt>' . "\n";
	$category       = xty_category();
	$tags           = xty_tags(get_the_ID());
	$published      = xty_published();
	if ($published['date'] == $published['revision'])
	{
		$pub_icon       = '<i class="icon:calendar_outline"></i>';
		$published_date = $published['date'];
	}
	else
	{
		$pub_icon       = '<i class="icon:calendar_update_outline"></i>';
		$published_date = $published['revision'];
	}
	$author         = xty_author();
	$comment_cnt    = xty_comment_cnt();
	$comment        = 'No Comments';
	$comment_icon   = '<i class="icon:comment_none_outline"></i>';
	if ($comment_cnt > 1)
	{
		$comment        = $comment_cnt . ' Comments';
		$comment_icon   = '<i class="icon:comment_outline"></i>';
	}
	elseif ($comment_cnt == 1)
	{
		$comment        = '1 Comment';
		$comment_icon   = '<i class="icon:comment_outline"></i>';
	}
	/*
	 *** yoast breadcrumbs plugin
	*/
	if (!is_front_page() && !is_home())
	{
		if (function_exists('yoast_breadcrumb'))
		{
			yoast_breadcrumb('<div id="breadcrumbs" class="seo-pst-breadcrumbs">', '</div>');
		}
	}
	echo '<div class="fx:rw-rev md)fx:rw fxa:1 fxb:1 fxc:1">' . "\n";
	echo '<cmt name="begin">POST/PANEL/LEFT</cmt>' . "\n";
	echo '<div class="fxd:1 fxe:1 fb:100% md)fb:25% lg)fb:20% mar:top+0.5 md)mar:top+0">' . "\n";
	echo '<div class="fx:rw fxa:1 fxb:1 fxc:3">' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="aln:text-center bkg:bas+2 cnr:arch-small fnt:size-large ht:2 wd:2">' . xty_category_icon($category) . '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="fnt:size-small pad:left+0.5">' . $category . '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fx:break mar:vrt+0.25"></div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="aln:text-center bkg:bas+2 cnr:arch-small fnt:size-large ht:2 wd:2"><i class="icon:user_author_solid"></i></div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="fnt:size-small pad:left+0.5">' . $author . '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fx:break mar:vrt+0.25"></div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="aln:text-center bkg:bas+2 cnr:arch-small fnt:size-large ht:2 wd:2">' . $pub_icon . '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="fnt:size-small pad:left+0.5">' . $published_date . '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fx:break mar:vrt+0.25"></div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="aln:text-center bkg:bas+2 cnr:arch-small fnt:size-large ht:2 wd:2"><i class="icon:tag_outline"></i></div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="fnt:size-small pad:left+0.5">' . $tags . '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fx:break mar:vrt+0.25"></div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="aln:text-center bkg:bas+2 cnr:arch-small fnt:size-large ht:2 wd:2">' . $comment_icon . '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<div class="fxd:1 fxe:1">' . "\n";
	echo '<div class="fnt:size-small pad:left+0.5">' . $comment . '</div>' . "\n";
	echo '</div>' . "\n";
	echo '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<cmt name="end">POST/PANEL/LEFT</cmt>' . "\n";
	echo '<cmt name="begin">POST/PANEL/RIGHT</cmt>' . "\n";
	echo '<div class="fxd:1 fxe:1 fb:100% md)fb:75% lg)fb:80%">' . "\n";
	echo xty_dsp_content();
	echo '</div>' . "\n";
	echo '<cmt name="end">POST/PANEL/RIGHT</cmt>' . "\n";
	echo '</div>' . "\n";
	/*
	 *** comments
	*/
	if (comments_open() || get_comments_number() > 0)
	{
		echo '<div class="bkg:bas+2 ln mar:vrt+0.5"></div>' . "\n";
		if (!post_password_required())
		{
			/*
			 *** CONTENT/COMMENTS/PHP ***
			*/
			echo '<cmt name="begin">PAGE/BODY/POST/CONTENT/COMMENTS</cmt>' . "\n";
			get_template_part('template-parts/content', 'comments');
			echo '<cmt name="end">PAGE/BODY/POST/CONTENT/COMMENTS</cmt>' . "\n";
		}
	}
	echo '<div class="bkg:bas+2 ln mar:vrt+0.25"></div>' . "\n";
	/*
	 *** CONTENT/FOOTER/PHP
	*/
	echo '<cmt name="begin">PAGE/BODY/POST/CONTENT/FOOTER</cmt>' . "\n";
	get_template_part('template-parts/content', 'footer');
	echo '<cmt name="end">PAGE/BODY/POST/CONTENT/FOOTER</cmt>' . "\n";
}
else
{
	/*
	 *** call support agent ***
	*/
	echo xty_support_agent('I was unable to load the blog post.');
}
echo '</article>' . "\n";
echo '</section>' . "\n";
echo '<cmt name="end">PAGE/BODY/POST/CONTENT</cmt>' . "\n";
/*
 *** SIDEBAR/PHP ***
*/
echo '<cmt name="begin">PAGE/BODY/POST/SIDEBAR</cmt>' . "\n";
get_sidebar();
echo '<cmt name="end">PAGE/BODY/POST/SIDEBAR</cmt>' . "\n";
echo '</main>' . "\n";
echo '<cmt name="end">PAGE/BODY/POST</cmt>' . "\n";
echo '</div>' . "\n";
echo '<cmt name="end">PAGE/BODY</cmt>' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: single.php / 28200715
*/
?>
