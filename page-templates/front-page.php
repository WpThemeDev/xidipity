<?php
/**
    * Template Name: FrontPage
    *
    * WordPress Xidipity Theme
    * The template for displaying font page
    *
    * ###:  font-page.php
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
echo '<!--  file:front-page.php -->' . "\n";
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
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:left+0.5">' . "\n";
}
else
{
    echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:right+0.5">' . "\n";
}

echo '<!--  ct:ARTICLE -->' . "\n";
echo '<article class="box:shadow bkg:content txt:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";

if ($wp_query->have_posts())
{
    the_post();
    echo '<!--  ct:BODY -->' . "\n";
    echo '<div class="bkg:content ht:min10 mar:bottom+0.5 pad:top+0.5 wd:100%">' . "\n";

    /*
    ***
        * no title / breadcrumbs
    ***
    */

    /*
    ***
        * function: the_content wrapper
        * descript: display page content
        * ref: developer.wordpress.org/reference/functions/the_content/
    ***
    */
    dsp_content();
    echo '</div>' . "\n";
    echo '<!-- /ct:BODY -->' . "\n";
    echo '<div class="bkg:bas+2 ln mar:vrt+0.25">&#8203;</div>' . "\n";
}
else
{
    get_template_part('template-parts/content', 'none');
}

/*
***
    * content footer
***
*/
get_template_part('template-parts/content', 'footer');
echo '</article>' . "\n";
echo '<!-- /ct:ARTICLE -->' . "\n";
echo '</section>' . "\n";
echo '<!-- /fi:3/1/1/HTML 1 -->' . "\n";

/*
***
    * function: get_sidebar
    * descript: display sidebar
    * ref: developer.wordpress.org/reference/functions/get_sidebar/
***
*/
get_sidebar();
echo '</main>' . "\n";
echo '<!-- /fc:3/1/HTML -->' . "\n";
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
 * EOF: font-page.php / 28200715
 */
?>