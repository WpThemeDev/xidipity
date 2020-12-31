<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying blog excerpts
 *
 * ###:  template-parts/content-precis.php
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
echo '<cmt name="begin">TEMPLATE-PARTS/CONTENT-PRECIS/PHP</cmt>' . "\n";
echo '<article class="box:shadow bkg:content txt:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
if ($wp_data->have_posts())
{
	/*
	 *** X developer.wordpress.org/reference/functions/the_title/
	*/
	echo '<cmt name="begin">PRECIS/BODY/CONTENT</cmt>' . "\n";
	echo '<div class="bkg:content dsp:flw-rt ht:min10 mar:bt+0.5 wd:100%">' . "\n";
	/*
	 *** X yoast breadcrumbs plugin
	*/
	$cnt = 0;
	while ($wp_data->have_posts())
	{
		$wp_data->the_post();
		/*
		 *** inc/template-tags/xty_excerpt
		*/
		echo '<div class="mar:bt+2">' . "\n";
		echo xty_excerpt();
		echo '</div>' . "\n";
	}
	echo '</div>' . "\n";
	echo '<cmt name="end">PRECIS/BODY/CONTENT</cmt>' . "\n";
}
else
{
	/*
	 *** inc/template-tags/xty_support_agent
	*/
	echo xty_support_agent(xty('msg'));
}
/*
 *** template-tags/xty_pagination
*/
echo xty_pagination($cur_paged, $tot_paged);
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
echo '<cmt name="end">TEMPLATE-PARTS/CONTENT-PRECIS/PHP</cmt>' . "\n";
/*
 * EOF: template-parts/content-precis.php / 29200901
*/
?>
