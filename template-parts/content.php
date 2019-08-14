<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   content.php
 *  build:  90728.1
 *  descrp: content / index
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    local variables
*/
$v_icon = '';
$v_link = '';
$v_meta_list = '';
echo '<!-- xwpt: 90728.1/content.php         -->' . "\n";
echo '<article id="xwtFxRowHalfItem" class="xwtAddShadow ' . implode(' ', get_post_class()) . '">' . "\n";
/*
    featured image
*/
$wp_img = get_the_post_thumbnail(null, 'FULL', array('class' => 'img-full'));
if ($wp_img)
{
    /*: post thumbnail :*/
    echo $wp_img;
}
echo '<div class="xwtAddPadPost">' . "\n";
if ('post' == get_post_type())
{
    if (is_sticky())
    {
        $v_icon = xidipity_icon_star();
    }
    else
    {
        $v_icon = xidipity_icon_cat();
    }
    $v_meta_list  = '';
    $v_meta_list .=  $v_icon . ',';
    $v_meta_list .=  xidipity_first_category() . ',';
    echo xidipity_metalinks(explode(',', $v_meta_list));
}
echo '<header id="xwtEntryHeader">' . "\n";
the_title('<h1 class="xwtEntryTitle"><a href="' . esc_url(apply_filters('xidipity_the_permalink', get_permalink())) . '" rel="bookmark">', '</a></h1>');
echo '</header>' . "\n";
if ('post' == get_post_type())
{
    $v_meta_list  = '';
    $v_meta_list .=  xidipity_posted_on() . ',';
    $v_meta_list .=  xidipity_posted_by() . ',';
    echo xidipity_metalinks(explode(',', $v_meta_list));
}
if (xidipity_has_excerpt())
{
    echo '<div class="txt-blk-rg">' . "\n";
    the_excerpt();
    echo '</div>' . "\n";
}
/*
    readmore
*/
$v_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));

$v_meta_list  = '';
$v_meta_list .=  xidipity_icon_rm() . ',';
$v_meta_list .=  '<a href="' . $v_link . '">Read more …</a>' . ',';
echo xidipity_metalinks(explode(',', $v_meta_list));
echo '<p>&nbsp;</p>' . "\n";
echo '</div>' . "\n";
echo '</article>' . "\n";
echo '<!-- /xwpt: 90728.1/content.php        -->' . "\n";
/*
    eof:content.php
*/
?>
