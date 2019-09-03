<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   content-post.php
 *  build:  90828.1a
 *  descrp: content / post
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
echo '<!-- xwpt: 90828.1a/content-post/php        -->' . "\n";
echo '<article class="fx:full-cn-item fx:shadow">' . "\n";
echo '<div class="pad:left-1">' . "\n";
$v_meta_list .= $wp_post_date . ',' . 'Author -' . ',' . '<a href="' . get_author_posts_url( $wp_author_id, $wp_author ) . '">' . $wp_author . '</a>';
echo xidipity_metalinks(explode(',', $v_meta_list));
/*
    content title
*/
echo '<header class="fx:cn-item-header">' . "\n";
the_title('<h1 class="fx:cn-item-title">', '</h1>');
echo '</header>' . "\n";
/*
    yoast breadcrumbs
*/
if ( function_exists('yoast_breadcrumb') ) {
  yoast_breadcrumb( '<p id="breadcrumbs" class="seo-pst-breadcrumbs">','</p>' );
}
echo '</div>' . "\n";
/*
    content
*/
echo '<div class="fx:cn-item-container pad:all-1">' . "\n";
the_content();
echo '</div>' . "\n";

/*
    meta footer
*/
echo '<div class="pad:left-1">' . "\n";
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
if (!empty($v_meta_list))
{
    echo xidipity_metalinks(explode(',', $v_meta_list));
}
echo '</div>' . "\n";
echo '</article>' . "\n";
echo '<!-- /xwpt: 90828.1a/content-post/php       -->' . "\n";
/*
    eof: content-post.php
*/
?>
