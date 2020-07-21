<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying excerpt list
 *
 * ###:  template-parts/content-excerpts.php
 * bld:  28200801
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
$cnt++;
$wp_img = get_the_post_thumbnail(null, 'FULL', array(
	'class' => 'cnr:arch-x-small ht:auto wd:100%'
));
$post_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));
echo '<cmt name="begin">TEMPLATE-PARTS/CONTENT-EXCERPT/PHP' . $cnt . '/</cmt>' . "\n";
echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 mar:vrt+1">' . "\n";
if (!empty($wp_img))
{
	echo '<div class="fxd:3 fxe:6 fb:100% sm)fb:30% lg)fb:20% sm)pad:right+0.75">' . "\n";
	echo $wp_img . "\n";
	echo '</div>' . "\n";
	echo '<div class="fxd:2 fxe:6 pad:top+0.5 sm)pad:top+0 fb:100% sm)fb:70% lg)fb:80%">' . "\n";
}
else
{
	echo '<div class="fxd:2 fxe:6 pad:top+0.5 sm)pad:top+0 fb:100%">' . "\n";
}
echo '<div class="fx:c fxa:1 fxb:1 fxc:1 ht:100%">' . "\n";
echo '<div class="fxd:3 fxe:6">' . "\n";
/*
 *** developer.wordpress.org/reference/functions/the_title/
*/
the_title('<h3>', '</h3>');
echo '<p class="fnt:size-medium">' . get_the_excerpt() . '</p>' . "\n";
echo '<div class="fx:r fxa:1 fxb:1 fxc:3 mar:top+0.5">' . "\n";
echo xty_readmore($post_link);
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<div class="fxd:2 fxe:6 pad:top+0.5 sm)pad:top+0">' . "\n";
echo '<div class="fx:rw fxa:1 fxb:1 fxc:3 fnt:size-x-small lg)fnt:size-small xl)fnt:size-medium">' . "\n";
echo '<div class="bkg:bas ln mar:bottom+0.75 sm)dsp:none wd:100%"></div>' . "\n";
$post_type = get_post_type();
$data_item = array();
if ($post_type == 'post')
{
	$category = xty_category();
	$data_item['ico_1'] = xty_category_icon($category);
	$data_item['txt_1'] = $category;
	$data_item['div_1'] = '&#65372;';
	$data_item['raw_1'] = '<div class="fx:break sm)dsp:none"></div>';
	$tags = xty_tags(get_the_ID());
	if (!empty($tags))
	{
		$data_item['ico_2'] = '<i class="icon:tag_outline"></i>';
		$data_item['txt_2'] = $tags;
		$data_item['div_2'] = '&#65372;';
		$data_item['raw_2'] = '<div class="fx:break sm)dsp:none"></div>';
	}
}
$published = xty_published();
if ($published['date'] == $published['revision'])
{
	$pub_icon = '<i class="icon:calendar_outline"></i>';
}
else
{
	$pub_icon = '<i class="icon:calendar_update_outline"></i>';
}
$data_item['ico_3'] = $pub_icon;
$data_item['txt_3'] = $published['revision'];
$data_item['div_3'] = '&#65372;';
$data_item['raw_3'] = '<div class="fx:break sm)dsp:none"></div>';
$data_item['ico_4'] = '<i class="icon:user_author_solid"></i>';
$data_item['txt_4'] = xty_author();
echo xty_dsp_meta($data_item) . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<cmt name="end">TEMPLATE-PARTS/CONTENT-EXCERPT/PHP' . $cnt . '/</cmt>' . "\n";
/*
 * EOF: template-parts/content-excerpts.php / 27200615
*/
?>
