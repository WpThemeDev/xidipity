<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   sidebar.php
 *  build:  90915.1a
 *  descrp: sidebar (Flexbox column)
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    get page template
*/
$wp_tmpl = page_tmpl();
echo '<!-- xwpt: 90915.1a/sidebar/php             -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-4    -->' . "\n";
/*
    logic check
*/
if ($wp_tmpl == 'no-sidebar')
{
    echo '<div class="fx:pg-ct-itm disp:none">' . "\n";
}
else
{
    echo '<div class="fx:pg-ct-itm">' . "\n";
}
echo '<!-- xwpt: flexbox/sidebar/container        -->' . "\n";
echo '<div class="fx:sb-ct">' . "\n";
dynamic_sidebar( 'sidebar-1' );
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90915.1a/sidebar/php            -->' . "\n";
/*
    eof: sidebar.php
*/
?>
