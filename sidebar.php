<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying sidebar
    *
    * ###:  sidebar.php
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

/*
***/
echo '<!--  file:sidebar.php -->' . "\n";
/***
*/

/*
***
    * dynamic_sidebar
***
*/
echo '<!--  fi:3/1/2/HTML -->' . "\n";
echo '<section class="aln:text-left fxd:4 fxe:6 wd:0 fb:100% md)fb:20 prt[dsp:none]">' . "\n";
dynamic_sidebar( 'sidebar-1' );
echo '</section>' . "\n";
echo '<!-- /fi:3/1/2/HTML -->' . "\n";

/*
 * EOF: sidebar.php / 24200520
 */
?>
