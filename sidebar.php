<?php
/*
*        file: sidebar.php
*       build: 90325.1
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
echo '<div id="site-sidebar" class="' . xidipity_layout_class('sidebar') . '">' . "\n";
echo '<div id="secondary">' . "\n";
dynamic_sidebar( 'sidebar-1' );
echo '</div>' . "\n";
echo '</div>' . "\n";

/*  # eof
sidebar.php
-------------------------------------*/
?>
