<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   sidebar.php
 *  build:  90901.1a
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
echo '<!-- xwpt: 90901.1a/sidebar/php             -->' . "\n";
echo '<div class="fx:pg-item">' . "\n";
echo '<div class="fx:sb-container">' . "\n";
/*
    logic check
*/
if ($wp_tmpl !== 'no-sidebar')
{
    dynamic_sidebar( 'sidebar-1' );
}
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90901.1a/sidebar/php            -->' . "\n";
/*
    eof: sidebar.php
*/
?>
