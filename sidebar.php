<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   sidebar.php
 *  build:  90819.1b
 *  descrp: sidebar (Flexbox column)
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
if ( ! xidipity_has_sidebar() ) {
  return;
}
echo '<!-- xwpt: 90819.1/sidebar         -->' . "\n";
echo '<div id="xwtFxRowItem">' . "\n";
echo '<div id="xwtFxColItems">' . "\n";
/*
    see functions.php (~131)
*/
dynamic_sidebar( 'sidebar-1' );
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90819.1/sidebar        -->' . "\n";
/*
    eof:sidebar.php
*/
?>
