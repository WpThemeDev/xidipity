<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying missing page error
    *
    * ###:  content-footer.php
    * bld:  28200715
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/
/*
***/
echo '<!--  file:content-footer.php -->' . "\n";
/***
*/
$footer_items = '';
if (current_user_can( 'edit_pages' ))
{
    $footer_items .= '<span class="fnt:size-larger pad:right+0.5"><i class="icon:doc_edit_solid"></i></span>' . '|';
    $footer_items .= '<a href="' . get_edit_post_link() . '">Edit</a>' . '|';
    $footer_items .= '^' . '|';
}
/*: today's date :*/
$footer_items .= '<span class="fnt:size-larger pad:right+0.5"><i class="icon:calendar_today_outline"></i></span>' . '|';
$footer_items .= xidipity_date() . '|';
echo '<!--  ct:FOOTER -->' . "\n";
echo xidipity_content_footer(explode('|', $footer_items)) . "\n";
echo '<!-- /ct:FOOTER -->' . "\n";

/*
 * EOF: content-footer.php / 27200615
 */
?>
