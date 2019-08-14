<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   content-page.php
 *  build:  90728.1
 *  descrp: content / page
 *  ref:    URL
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    local variables
*/
$v_cat = '';
$v_meta_list = '';

echo '<!-- xwpt: 90728.1/content-page.php    -->' . "\n";
echo '<article id="xwtFxRowFullItem" class="xwtAddShadow ' . implode(' ', get_post_class()) . '">' . "\n";
echo '<div class="xwtAddPadPage post-content-wrapper post-content-wrapper-single">' . "\n";
/*
    content title
*/
echo '<header id="xwtEntryHeader">' . "\n";
the_title('<h1 class="xwtEntryTitle">', '</h1>');
echo '</header>' . "\n";
echo '<div class="entry-content">' . "\n";
/*
    yoast breadcrumbs
*/
if ( function_exists('yoast_breadcrumb') ) {
  yoast_breadcrumb( '<p id="breadcrumbs" class="seo-pag-breadcrumbs">','</p>' );
}
/*
    content
    * set min height to keep meta @ bottom
*/
echo '<div class="xwtMinY-275">' . "\n";
the_content();
echo '</div>' . "\n";
/*
    page footer
*/
$v_meta_list = '';
/*: edit :*/
if (get_edit_post_link())
{
    $v_meta_list .= xidipity_icon_edit() . ',';
    $v_meta_list .= '<a href="' . get_edit_post_link() . '">Edit</a>' . ',';
}
/*: date :*/
$v_meta_list .= xidipity_icon_date() . ',';
$v_meta_list .= get_the_date() . ',';
echo xidipity_metalinks(explode(',', $v_meta_list));
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</article>' . "\n";
echo '<!-- /xwpt: 90728.1/content-page.php   -->' . "\n";
/*
    eof:content-page.php
*/
?>
