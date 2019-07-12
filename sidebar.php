<?php
/*
*        file: sidebar.php
*       build: 90708.1
* description: The Sidebar containing the main widget areas.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
if ( ! xidipity_has_sidebar() ) {
  return;
}
echo '<!-- xwpt:90708.1/sidebar.php         -->' . "\n";
echo '<div id="xwtFxRowItem" class="_' . xidipity_layout_class('sidebar') . '">' . "\n";
echo '<div id="xwtFxColItems">' . "\n";
// see functions.php (~131)
dynamic_sidebar( 'sidebar-1' );
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt:90708.1/sidebar.php        -->' . "\n";
/*  # eof
sidebar.php
-------------------------------------*/
?>
