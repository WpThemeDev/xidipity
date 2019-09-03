<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   content-page.php
 *  build:  90901.1a
 *  descrp: content / page
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
$v_cat = '';
$v_meta_list = '';
/*
    get page template
*/
$wp_tmpl = page_tmpl();
echo '<!-- xwpt: 90901.1a/content-page/php        -->' . "\n";
if ($wp_tmpl == 'naked')
{
    /*
    content
    */
    echo '<div class="fx:cn-item-container pad:all-1 wd:100%">' . "\n";
    the_content();
    echo '</div>' . "\n";
}
else
{
    echo '<div class="fx:full-cn-item bg:bas-050 fx:shadow">' . "\n";
    /*
    content title
    */
    echo '<div class="pad:left-1">' . "\n";
    if ($wp_tmpl !== 'no-title')
    {
        echo '<header class="fx:cn-item-header">' . "\n";
        the_title('<h1 class="fx:cn-item-title">', '</h1>');
        echo '</header>' . "\n";
        /*
        yoast breadcrumbs
        */
        if ( !is_front_page() && !is_home() )
        {
            if (function_exists('yoast_breadcrumb'))
            {
                yoast_breadcrumb('<p id="breadcrumbs" class="seo-pag-breadcrumbs">', '</p>');
            }
        }
    }
    echo '</div>' . "\n";
    /*
    content
    */
    echo '<div class="fx:cn-item-container pad:all-1">' . "\n";
    the_content();
    echo '</div>' . "\n";
    /*
    page footer
    */
    echo '<div class="pad:left-1">' . "\n";
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
}
echo '<!-- /xwpt: 90901.1a/content-page/php       -->' . "\n";
/*
    eof: content-page.php
*/
?>
