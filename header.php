<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying page header
 *
 * ###:  header.php
 * bld:  31201215
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
echo '<!doctype html>' . "\n";
?>
<html <?php
language_attributes(); ?> >
<?php
echo '<head>' . "\n";
echo '<meta charset="' . get_bloginfo('charset') . '">' . "\n";
echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
echo '<link rel="profile" href="http://gmpg.org/xfn/11">' . "\n";
/*
 *** functon: wp_head / core wordpress functionality
*/
do_action('wp_head');
/*
 *** set site favorite icon
*/
if (xty('fav-ico') == 'default')
{
	echo '<link rel="icon" href="' . get_stylesheet_directory_uri() . '/assets/img/s_favoriteIcon_512x512.png" sizes="32x32" />' . "\n";
	echo '<link rel="apple-touch-icon-precomposed" href="' . get_stylesheet_directory_uri() . '/assets/img/s_favoriteIcon_512x512.png" sizes="32x32" />' . "\n";
	echo '<link rel="icon" href="' . get_stylesheet_directory_uri() . '/assets/img/s_favoriteIcon_512x512.png" sizes="192x192" />' . "\n";
	echo '<meta name="msapplication-TileImage" content="' . get_stylesheet_directory_uri() . '/assets/img/s_favoriteIcon_512x512.png" />' . "\n";
}
else
{
	echo '<link rel="icon" href="' . xty('fav-ico') . '" sizes="32x32" />' . "\n";
	echo '<link rel="apple-touch-icon-precomposed" href="' . xty('fav-ico') . '" sizes="32x32" />' . "\n";
	echo '<link rel="icon" href="' . xty('fav-ico') . '" sizes="192x192" />' . "\n";
	echo '<meta name="msapplication-TileImage" content="' . xty('fav-ico') . '" />' . "\n";
}
/*
 *** set background image url
*/
if (xty('hdr-img') !== 'none')
{
	echo '<!--  style:HEADER/BACKGROUND -->' . "\n";
	echo '<style type="text/css">' . "\n";
	echo '.hdr\:bg-img {' . "\n";
	echo 'background-image: url("' . xty('hdr-img') . '");' . "\n";
	echo '}' . "\n";
	echo '</style>' . "\n";
	echo '<!-- /style:HEADER/BACKGROUND -->' . "\n";
}
/*
 *** create emoji styles
*/
if (xty('emoji-dsp') == 'yes')
{
	echo '<style type="text/css">' . "\n";
	echo 'img.wp-smiley,' . "\n";
	echo 'img.emoji {' . "\n";
	echo 'display: inline !important;' . "\n";
	echo 'border: none !important;' . "\n";
	echo 'box-shadow: none !important;' . "\n";
	echo 'height: 1em !important;' . "\n";
	echo 'width: 1em !important;' . "\n";
	echo 'margin: 0 .07em !important;' . "\n";
	echo 'vertical-align: -0.1em !important;' . "\n";
	echo 'background: none !important;' . "\n";
	echo 'padding: 0 !important;' . "\n";
	echo '}' . "\n";
	echo '</style>' . "\n";
}
else
{
	echo '<style type="text/css">' . "\n";
	echo 'img.wp-smiley,' . "\n";
	echo 'img.emoji {' . "\n";
	echo 'display: none !important;' . "\n";
	echo '}' . "\n";
	echo '</style>' . "\n";
}
echo '</head>' . "\n";
echo '<body class="' . implode(' ', get_body_class()) . '">' . "\n";
/*
 *** open page flex container here / close in footer
*/
echo '<!-- xty:header/php -->' . "\n";
echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 pad:hrz+0.5-deprecate">' . "\n";
/*
 *** display header as configured
*/
if (xty('hdr-img') !== 'none') {
	$hdr_ht = xty('hdr-ht');
} else {
	$hdr_ht = '8rem';
}
echo '<!-- xty:page/header -->' . "\n";
echo '<div class="fxd:1 fxe:2 fb:100% wd:0">' . "\n";
if (xty('hdr-aln') == 'left')
{
	echo '<header class="fx:r fxa:1 fxc:3 hdr:bg-img fb:100%" style="min-height:' . $hdr_ht . ';">' . "\n";
}
elseif (xty('hdr-aln') == 'right')
{
	echo '<header class="fx:r fxa:2 fxc:3 hdr:bg-img fb:100%" style="min-height:' . $hdr_ht . ';">' . "\n";
}
else
{
	echo '<header class="fx:r fxa:3 fxc:3 hdr:bg-img fb:100%" style="min-height:' . $hdr_ht . ';">' . "\n";
}
echo '<a class="skip-link screen-reader-text" href="#content">' . __('Skip to content') . '</a>' . "\n";
if (xty('hdr-logo') == 'none')
{
	// @ home page?
	if (get_queried_object_id() == get_option('page_on_front'))
	{
		if (xty('hdr-aln') == 'left')
		{
			echo '<div class="aln:txt-lt">' . "\n";
			echo '<p class="hdr:title">' . get_bloginfo('name') . '</p>' . "\n";
			echo '<p class="hdr:desc">' . get_bloginfo('description') . '</p>' . "\n";
			echo '</div>' . "\n";
		}
		elseif (xty('hdr-aln') == 'rt')
		{
			echo '<div class="aln:txt-rt">' . "\n";
			echo '<p class="hdr:title">' . get_bloginfo('name') . '</p>' . "\n";
			echo '<p class="hdr:desc">' . get_bloginfo('description') . '</p>' . "\n";
			echo '</div>' . "\n";
		}
		else
		{
			echo '<div class="aln:txt-ct">' . "\n";
			echo '<p class="hdr:title">' . get_bloginfo('name') . '</p>' . "\n";
			echo '<p class="hdr:desc">' . get_bloginfo('description') . '</p>' . "\n";
			echo '</div>' . "\n";
		}
	}
	else
	{
		if (xty('hdr-aln') == 'left')
		{
			echo '<div class="aln:txt-lt">' . "\n";
			echo '<p><a class="hdr:title" href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo('name') . '</a></p>' . "\n";
			echo '<p class="hdr:desc">' . get_bloginfo('description') . '</p>' . "\n";
			echo '</div>' . "\n";
		}
		elseif (xty('hdr-aln') == 'right')
		{
			echo '<div class="aln:txt-rt">' . "\n";
			echo '<p><a class="hdr:title" href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo('name') . '</a></p>' . "\n";
			echo '<p class="hdr:desc">' . get_bloginfo('description') . '</p>' . "\n";
			echo '</div>' . "\n";
		}
		else
		{
			echo '<div class="aln:txt-ct">' . "\n";
			echo '<p><a class="hdr:title" href="' . esc_url(home_url('/')) . '" rel="home">' . get_bloginfo('name') . '</a></p>' . "\n";
			echo '<p class="hdr:desc">' . get_bloginfo('description') . '</p>' . "\n";
			echo '</div>' . "\n";
		}
	}
}
else
{
	if (is_front_page() || is_home())
	{
		echo '<img src="' . xty('hdr-logo') . '" alt="' . get_bloginfo('name') . ' Blog">' . "\n";
	}
	else
	{
		echo '<a href="' . esc_url(home_url('/')) . '" rel="home"><img src="' . xty('hdr-logo') . '" alt="' . get_bloginfo('name') . ' Blog"></a>' . "\n";
	}
}
echo '</header>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xty:page/header -->' . "\n";
/*
 *** display menu as configured
*/
$wp_page  = get_page_by_path('xidipity-toc');
$wp_menus = get_nav_menu_locations();
$wp_menu  = (abs($wp_menus['primary']) !== 0);
echo '<!-- xty:header/menu -->' . "\n";
if (xty('mnu-dsp') == 'no')
{
	echo '<div class="dsp:none fxd:1 fxe:2 fb:100%">' . "\n";
}
else
{
	if (xty('hdr-img') !== 'none') {
		echo '<div class="fxd:1 fxe:2 fb:100% mnu:mar-txt-tp prt[dsp:none]">' . "\n";
	} else {
		echo '<div class="fxd:1 fxe:2 fb:100% mnu:mar-img-tp prt[dsp:none]">' . "\n";
	}
}
if (xty('mnu-aln') == 'left')
{
	echo '<nav class="fx:r fxa:1 fxc:3 ht:auto sm)mar:vrt+0.25 fb:100%">' . "\n";
}
elseif (xty('mnu-aln') == 'right')
{
	echo '<nav class="fx:r fxa:2 fxc:3 ht:auto sm)mar:vrt+0.25 fb:100%">' . "\n";
}
else
{
	echo '<nav class="fx:r fxa:3 fxc:3 ht:auto sm)mar:vrt+0.25 fb:100%">' . "\n";
}
echo '<div role="navigation" id="nav" class="dsp:block" style="width: ' . xty('mnu-wd') . '">' . "\n";
if ($wp_menu || $wp_page)
{
	if ($wp_page)
	{
		if (xty('hdr-img') !== 'none') {
			echo '<div class="aln:txt-ct toc:mar-img-tp wd:100%">' . "\n";
		} else {
			echo '<div class="aln:txt-ct toc:mar-txt-tp wd:100%">' . "\n";
		}
		/*: xidipity toc page :*/
		if ($wp_page->ID == get_queried_object_id())
		{
			echo '<a class="toc:btn" href="' . home_url('/') . '"><i class="material-icons pad:hrz+0.5 pad:vrt+0.125">menu</i></a>' . "\n";
		}
		else
		{
			echo '<a class="toc:btn" href="' . get_permalink($wp_page->ID) . '"><i class="material-icons pad:hrz+0.5 pad:vrt+0.125">menu</i></a>' . "\n";
		}
		echo '</div>' . "\n";
	}
	else
	{
		echo '<input class="trigger" type="checkbox" id="mainNavButton" name="hm">' . "\n";
		echo '<label for="mainNavButton" onclick><i class="material-icons pad:hrz+0.5">menu</i></label>' . "\n";
		wp_nav_menu(array(
			'theme_location' => 'primary',
			'menu_id' => 'primary-menu',
			'container' => ''
		));
	}
}
echo '</div>' . "\n";
echo '</nav>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xty:header/menu -->' . "\n";
echo '<!-- /xty:header/php -->' . "\n";
/*
 * EOF: header.php / 31201215
*/
?>
