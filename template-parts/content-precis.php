<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying blog excerpts
 *
 * ###:  content-precis.php
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
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
	echo '<div class="bkg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";
	/*
	 *** X yoast breadcrumbs plugin
	*/
	$cnt = 0;
	while ($wp_data->have_posts())
	{
		$wp_data->the_post();
		echo '<div class="mar:bottom+2">' . "\n";
		include (locate_template('template-parts/content-excerpts.php', false, false));
		echo '</div>' . "\n";
	}
	echo '</div>' . "\n";
	echo '<cmt name="end">PRECIS/BODY/CONTENT</cmt>' . "\n";
}
else
{
	/*
	 *** call support agent ***
	*/
	echo xty_support_agent(sup_msg());
}
/*
 *** template-parts/content-pagination/php ***
*/
if ($wp_total > 1)
{
	echo '<div class="bkg:bas+2 ln"></div>';
	echo '<div class="mar:vrt+0.25 prt[dsp:none]">' . "\n";
	include (locate_template('template-parts/content-pagination.php', false, false));
	echo '</div>' . "\n";
}
/*
 *** template-parts/content-footer/php ***
*/
echo '<cmt name="begin">PRECIS/BODY/FOOTER</cmt>' . "\n";
get_template_part('template-parts/content', 'footer');
echo '<cmt name="end">PRECIS/BODY/FOOTER</cmt>' . "\n";
echo '</article>' . "\n";
echo '</section>' . "\n";
echo '<cmt name="end">TEMPLATE-PARTS/CONTENT-PRECIS/PHP</cmt>' . "\n";
/*
 * EOF: content-precis.php / 27200615
*/
?>
