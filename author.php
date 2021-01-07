<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying author info
 *
 * ###:  author.php
 * bld:  31201215
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
/*
 *** set page options
*/
xty('mnu-dsp','yes');
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
/*
 ***/
echo '<!-- xty:file/author/php -->' . "\n";
/***

*/
echo '<!-- xty:page/body -->' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
/*
 *** align sidebar
*/
if (xty('sb-aln') == 'left')
{
	echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5 md)mar:lt+0.5">' . "\n";
}
else
{
	echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
	echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5 md)mar:rt+0.5">' . "\n";
}
echo '<article class="box:shadow bkg:content txt:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
if (have_posts())
{
	the_post();
	$biography = get_the_author_meta('description');
	if (empty($biography))
	{
		$biography = 'No information about the author is available at this time.';
	}
	$avatar_link = esc_url(get_avatar_url(get_the_author_meta('user_email')));
	if (empty($avatar_link))
	{
		$avatar__img = '<div class="fnt:siz-lg-4x pad:rt+0.5"><i class="icon:user_solid"></i></div>';
	}
	else
	{
		$avatar__img = '<img class="wd:max5" src="' . $avatar_link . '" alt="Xidipity Avatar Image" />';
	}
	/*
	 *** developer.wordpress.org/reference/functions/the_title/
	*/
	echo '<!-- xty:page/body/header -->' . "\n";
	echo '<header class="mar:bt+1 wd:100%">' . "\n";
	echo '<div class="pg:title">Author: ' . __(get_the_author_meta('nickname')) . '</div>';
	echo '<div class="bkg:bas+2 ln mar:bt+0.75">&#8203;</div>' . "\n";
	echo '</header>' . "\n";
	echo '<!-- /xty:page/body/header -->' . "\n";
	echo '<!-- xty:page/body/content -->' . "\n";
	echo '<div class="bkg:content dsp:flw-rt ht:min10 mar:bt+0.5 wd:100%">' . "\n";
	/*
	 *** content
	*/
	echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
	echo '<section class="fxd:2 fxe:6 wd:100%">' . "\n";
	echo '<div class="fx:c md)fx:r fxa:1 fxb:1 fxc:3 md)fxc:1 wd:100%">' . "\n";
	echo '<div class="bkg:content fx:r fxa:3 fxb:1 fxc:3 pad:bt+1 md)pad:bt+0 wd:100% md)wd:10%">' . "\n";
	echo $avatar__img;
	echo '</div>' . "\n";
	echo '<div class="bkg:content fxd:3 fxe:6 wd:100% md)pad:lt+2 md)wd:90%">' . "\n";
	echo $biography;
	$qry_prms = array(
		'author' => get_the_author_meta('ID') ,
		'orderby' => 'post_date',
		'order' => 'DESC',
		'posts_per_page' => 10,
		'post_type' => 'post',
		'post_status' => 'publish',
		'suppress_filters' => true
	);
	$resume_query = new WP_Query($qry_prms);
	echo '<h4 class="mar:tp+1">Recent Posts:</h4>' . "\n";
	echo '<ol class="li:qtr-spaced">' . "\n";
	if ($resume_query->have_posts())
	{
		while ($resume_query->have_posts() && $cnt++ < 10)
		{
			$resume_query->the_post();
			$published = xty_published();
			echo '<li>' . $published['date'] . ' - ' . '<a href="' . get_permalink() . '">' . get_the_title() . '</a></li>' . "\n";
		}
	}
	else
	{
		echo '<li>No posts found!</li>' . "\n";
	}
	echo '</ol>' . "\n";
	echo '</div>' . "\n";
	echo '</div>' . "\n";
	echo '</section>' . "\n";
	echo '</div>' . "\n";
	echo '</div>' . "\n";
	echo '<!-- /xty:page/body/content -->' . "\n";
}
else
{
	/*
	 *** call support agent ***
	*/
	echo xty_support_agent('I was unable to load the author page template.');
}
/*
 *** inc/templage-tags/xty_content_footer
*/
if (empty(xty_user()))
{
	echo xty_content_footer(array(
		'today',
		'print'
	));
}
else
{
	echo xty_content_footer(array(
		'user',
		'today',
		'print'
	));
}
echo '</article>' . "\n";
echo '</section>' . "\n";
/*
 *** SIDEBAR/PHP ***
*/
echo '<!-- xty:page/body/sidebar -->' . "\n";
get_sidebar();
echo '<!-- /xty:page/body/sidebar -->' . "\n";
echo '</main>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xty:page/body -->' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
/*
 * EOF: author.php / 31201215
*/
?>
