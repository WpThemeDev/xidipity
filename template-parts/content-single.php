<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   content-single.php
 *  build:  90819.1b
 *  descrp: content / single
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    system variables
*/
$wp_author = __(get_the_author_meta('nickname'));
$wp_author_id = get_the_author_meta('ID');
$wp_post_date = get_the_date();
$wp_tags = get_the_tags();
/*
    local variables
*/
$v_cat = '';
$v_meta_list = '';
echo '<!-- xwpt: 90819.1/content-single  -->' . "\n";
echo '<article id="xwtFxRowFullItem" class="xwtAddShadow ' . implode(' ', get_post_class()) . '">' . "\n";
echo '<div class="xwtAddPadPage">' . "\n";

$v_meta_list .= $wp_post_date . ',' . 'Author -' . ',' . '<a href="' . get_author_posts_url( $wp_author_id, $wp_author ) . '">' . $wp_author . '</a>';
echo xidipity_metalinks(explode(',', $v_meta_list));
/*
    content title
*/
echo '<header id="xwtEntryHeader">' . "\n";
the_title('<h1 class="xwtEntryTitle">', '</h1>');
echo '</header>' . "\n";
echo '<div id="xwtEntryContent" class="ht:min-275px">' . "\n";
/*
    yoast breadcrumbs
*/
if ( function_exists('yoast_breadcrumb') ) {
  yoast_breadcrumb( '<p id="breadcrumbs" class="seo-pst-breadcrumbs">','</p>' );
}
/*
    content
*/
the_content();

/*
    content footer
*/
$v_meta_list = '';
/*: edit :*/
if (get_edit_post_link())
{
    $v_meta_list .= xidipity_icon_edit() . ',';
    $v_meta_list .= '<a href="' . get_edit_post_link() . '">Edit</a>' . ',';
}
/*: category :*/
$v_cat = xidipity_first_category();
if (!empty($v_cat))
{
    $v_meta_list .=  xidipity_icon_cat() . ',';
    $v_meta_list .=  $v_cat . ',';
}
/*: tags :*/
if ($wp_tags)
{
    $v_meta_list .=  xidipity_icon_tags() . ',';
    if ( $wp_tags ) {
        foreach( $wp_tags as $wp_tag ) {
            $v_meta_list .= $wp_tag->name . ', ';
        }
    }
}
echo '</div>' . "\n";
if (!empty($v_meta_list))
{
    echo xidipity_metalinks(explode(',', $v_meta_list));
}
echo '</div>' . "\n";
echo '</article>' . "\n";
echo '<!-- /xwpt: 90819.1/content-single -->' . "\n";
/*
    eof:content-single.php
*/
?>
