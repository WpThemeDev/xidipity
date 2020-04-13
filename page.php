<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       page.php
 * Function:        display page
 * Build:           200322
 * GitHub:          github.com/WpThemeDev/xidipity/
 * License URI:     www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            developer.wordpress.org/themes/basics/
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
echo '<!--  file:page.php -->' . "\n";
/***

*/
echo '<!--  fi:3/HTML -->' . "\n";
echo '<div class="fxd:2 fxe:6 wd:100%">' . "\n";
echo '<!--  fc:MAIN -->' . "\n";

/*
***
    * align sidebar
***
*/
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:c md)fx:r-rev fxa:1 fxb:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:1/SECTION -->' . "\n";
    echo '<section class="fxd:2 fxe:6 mar:bottom+0.5 md)mar:left+0.5 wd:100%">' . "\n";
}
else
{
    echo '<main class="fx:c md)fx:r fxa:1 fxb:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:1/SECTION -->' . "\n";
    echo '<section class="fxd:2 fxe:6 mar:bottom+0.5 md)mar:right+0.5 wd:100%">' . "\n";
}

echo '<!--  ct:ARTICLE -->' . "\n";
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";

if ($wp_query->have_posts())
{

    echo '<!--  ct:HEADER -->' . "\n";
    echo '<header class="wd:100%">' . "\n";

    /*
    ***
        * function: the_title
        * descript: display page title
        * ref: developer.wordpress.org/reference/functions/the_title/
    ***
    */
    the_title('<div class="pg:title">', '</div>');
    echo '</header>' . "\n";
    echo '<!-- /ct:HEADER -->' . "\n";
    echo '<!--  ct:BODY -->' . "\n";
    echo '<div class="bg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";

    /*
    ***
        * yoast breadcrumbs plugin
    ***
    */
    if ( !is_front_page() && !is_home() )
    {
        if (function_exists('yoast_breadcrumb'))
        {
            yoast_breadcrumb('<div id="breadcrumbs" class="seo-pag-breadcrumbs">', '</div>');
        }
    }

    /*
    ***
        * function: the_content
        * descript: display page content
        * ref: developer.wordpress.org/reference/functions/the_content/
    ***
    */
    the_content();
    echo '</div>' . "\n";
    echo '<!-- /ct:BODY -->' . "\n";

    /*
    ***
        * page footer
    ***
    */
    $footer_items = '';
    /*: edit :*/
    if (get_edit_post_link())
    {
        $footer_items .= dsp_edit(get_edit_post_link()) . '|';
    }
    /*: modified date :*/
    $footer_items .= dsp_date(get_the_modified_time(get_option('date_format'))) . '|';
    echo '<!--  ct:FOOTER -->' . "\n";
    echo '<footer class="pad:left+1 fnt:size-smaller prt[dsp:none]">' . "\n";
    echo xidipity_metalinks(explode('|', $footer_items)) . "\n";
    echo '</footer>' . "\n";
    echo '<!-- /ct:FOOTER -->' . "\n";
}
else
{
    get_template_part('template-parts/content', 'none');
}
echo '</article>' . "\n";
echo '<!-- /ct:ARTICLE -->' . "\n";
echo '</section>' . "\n";
echo '<!-- /fi:1/SECTION 1 -->' . "\n";

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
 * EOF:     page.php
 * Build:   200322
 *
 */
?>
