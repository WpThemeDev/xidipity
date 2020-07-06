<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying the 404 error
    *
    * ###:  404.php
    * bld:  28200715
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

/*
***
    * display menus
***
*/
disp_menu('yes');

/*
***
    * function: get_header
    * descript: display page header
    * ref: developer.wordpress.org/reference/functions/get_header/
***
*/
get_header();

/*
***/
echo '<!--  file:404.php -->' . "\n";
/***
*/
echo '<!--  fi:3/HTML -->' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
echo '<!--  fc:3/1/HTML -->' . "\n";

/*
***
    * align sidebar
***
*/
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/SECTION -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:left+0.5">' . "\n";
}
else
{
    echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/SECTION -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:right+0.5">' . "\n";
}
echo '<!--  fi:3/1/1/ARTICLE -->' . "\n";
echo '<article class="box:shadow bkg:content txt:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
echo '<!--  28200715:404 -->' . "\n";
echo '<div class="fx:r fxa:1 fxc:3 bdr:left-solid-thick bdr:pri-2 bkg:tint-bas-1 cnr:arch-small"><div class="fnt:size-7x-large pad:hrz+0.5"><i class="icon:support_agent_solid"></i></div><div class="pad:right+0.5 pad:vrt+0.5 txt:bas-3"><p class="fnt:family-serif fnt:size-2x-large sm)fnt:size-3x-large fnt:weight-normal wd:100%"><span class="fnt:weight-bold">404</span> Error</p><p>The requested page cannot be found.</p><div class="mar:vrt+0.5 pad:vrt+0.5"><!--  28200715:BUTTON --> <button class="aln:text-center fnt:size-x-small sm)fnt-size-medium" onclick="javascript:history.back()">Previous page</button><!-- /28200715:BUTTON --></div></div></div>' . "\n";
echo '<!-- /28200715:404 -->' . "\n";
echo '</article>' . "\n";
echo '<!-- /fi:3/1/1/ARTICLE -->' . "\n";
echo '</section>' . "\n";
echo '<!-- /fi:1/SECTION -->' . "\n";

/*
***
    * function: get_sidebar
    * descript: display sidebar
    * ref: developer.wordpress.org/reference/functions/get_sidebar/
***
*/
get_sidebar();
echo '</main>' . "\n";
echo '<!-- /fc:MAIN -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fi:3/HTML -->' . "\n";

/*
***
    * function: get_footer
    * descript: display page footer
    * ref: developer.wordpress.org/reference/functions/get_footer/
***
*/
get_footer();

/*
***
    * function: wp_reset_postdata
    * descript: reset database query
    * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
***
*/
wp_reset_postdata();

/*
 * EOF: 404.php / 28200715
 */
?>
