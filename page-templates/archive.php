<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * Template Name: Archive
 *
 * File Name:       archive.php
 * Function:        display pages assigned to archive category
 * Build:           200322
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         2.0
 * @since           0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/*
***
    * set page options
***
*/
disp_menu('yes');

/*
***
    * pagination variables
***
*/
/*: current pagination number :*/
$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
/*: posts per page :*/
$wp_ppp = get_option('posts_per_page');

/*
***
    * function: get_header
    * dsc: header code
    * ver: 200322
    * fnt: load header.php
    * ref: developer.wordpress.org/reference/functions/get_header/
***
*/
get_header();

/*
***/
echo '<!--  file:archive.php -->' . "\n";
/***
*/

echo '<!--  fi:3/HTML -->' . "\n";
echo '<div class="fxd:2 fxe:6 wd:100%">' . "\n";
echo '<!--  fc:MAIN -->' . "\n";
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

/*
***
    * modify query if category
***
*/
$category_id = get_cat_ID('archive');

$qry_prms = array(
    'cat' => $category_id,
    'perm' => 'readable',
    'paged' => $wp_paged,
    'post_type' => 'post',
    'posts_per_page' => $wp_ppp
);
$search_query = new WP_Query($qry_prms);

/*
***
    * create block for content
***
*/
echo '<!--  ct:ARTICLE -->' . "\n";
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
if ($search_query->have_posts()) {

    /*
    ***
        * page title
    ***
    */
    echo '<!--  ct:HEADER -->' . "\n";
    echo '<header class="wd:100%">' . "\n";
    the_title('<div class="pg:title">', '</div>');
    echo '</header>' . "\n";
    echo '<!-- /ct:HEADER -->' . "\n";

    while ($search_query->have_posts())
    {
        $search_query->the_post();
        /*
        ***
            * excerpt data elements
        ***
        */
        $wp_img = get_the_post_thumbnail(null, 'FULL', array(
            'class' => 'cnr:arch-small ht:auto wd:100%'
        ));
        $excerpt_category = '<div class="fnt:size-smaller">' . dsp_archive() . '</div>';
        $excerpt_byline = '<div class="fnt:size-smaller">' . xidipity_posted_on() . '<span class="fg:wcag-grey6 pad:hrz+0.5">&bull;</span>' . xidipity_posted_by() . '</div>';
        /*
         ***
         * get post link for read more
         ***
        */
        $post_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));

        echo '<!--  ct:BODY -->' . "\n";
        echo '<div class="bg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";

        /*
        ***
            * function: the_excerpt
            * dsc: post excerpt
            * ver: 200322
            * fnt: display excerpt
            * ref: developer.wordpress.org/reference/functions/the_excerpt/
        ***
        */
        echo '<!--  fc:EXCERPT -->' . "\n";
        echo '<div class="fx:c md)fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
        if (!empty($wp_img))
        {
            echo '<!--  fi:1/EXCERPT  -->' . "\n";
            echo '<div class="fxd:2 fxe:6 wd:100% md)wd:1/3 xl)wd:1/4 ht:min10">' . "\n";
            echo '<!--  ct:IMAGE  -->' . "\n";
            echo '<div class="dsp:block pad:+1 ht:100%">' . "\n";
            echo $wp_img . "\n";
            echo '</div>' . "\n";
            echo '<!-- /ct:IMAGE  -->' . "\n";
            echo '</div>' . "\n";
            echo '<!-- /fi:1/EXCERPT  -->' . "\n";
            echo '<!--  fi:2/EXCERPT  -->' . "\n";
            echo '<div class="fxd:1 fxe:6 wd:100% md)wd:2/3 xl)wd:3/4 ht:min10">' . "\n";
        }
        else
        {
            echo '<!--  fi:1/EXCERPT  -->' . "\n";
            echo '<div class="fxd:1 fxe:6 wd:100% ht:min10">' . "\n";
        }
        echo '<!--  ct:TEXT  -->' . "\n";
        echo '<div class="dsp:block pad:+1 ht:100%">' . "\n";
        if (!empty($excerpt_category))
        {
            echo $excerpt_category . "\n";
        }
        if (!empty($excerpt_byline))
        {
            echo $excerpt_byline . "\n";
        }
        /* excerpt title */
        the_title('<div class="pg:title">', '</div>');
        the_excerpt();
        echo dsp_rm($post_link) . "\n";

        echo '</div>' . "\n";
        echo '<!-- /ct:TEXT  -->' . "\n";
        echo '</div>' . "\n";
        if (empty($wp_img))
        {
            echo '<!-- /fi:1/EXCERPT  -->' . "\n";
        }
        else
        {
            echo '<!-- /fi:2/EXCERPT  -->' . "\n";
        }
        echo '</div>' . "\n";
        echo '<!-- /fc:EXCERPT -->' . "\n";
        echo '</div>' . "\n";
        echo '<!-- /ct:BODY -->' . "\n";
    }

    /*
    ***
        * function: pagination
        * dsc: display pagination
        * ver: 200322
        * fnt: display pagination if paged & number of
        *      records exceeds limit/page
        * ref:
    ***
    */
    $total_pages = $search_query->max_num_pages;
    if ($total_pages > 1)
    {
        echo '<!--  ct:PAGINATION -->' . "\n";
        $current_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$current_page,'pages'=>$total_pages)) . "\n";
        echo '<!-- /ct:PAGINATION -->' . "\n";
    }

    /*
    ***
        * page footer
    ***
    */
    /*: date :*/
    $footer_items = dsp_date(date(get_option('date_format'))) . '|';
    echo '<!--  ct:FOOTER -->' . "\n";
    echo '<footer class="pad:left+1 fnt:size-smaller prt[dsp:none]">' . "\n";
    echo xidipity_metalinks(explode('|', $footer_items)) . "\n";
    echo '</footer>' . "\n";
    echo '<!-- /ct:FOOTER -->' . "\n";

}
else
{
    echo '<!--  fc:MAIN -->' . "\n";
    echo '<div class="fx:c sm)fx:r fxa:1 fxb:1 fxc:1 mar:vrt+1">' . "\n";
    echo '<!--  fi:1/SECTION -->' . "\n";
    echo '<div class="fxd:3 wd:100% pad:vrt+0.5 sm)wd:25%">' . "\n";
    echo '<img class="pad:hrz+2 wd:100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjAgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iYXJjaGl2ZSIgZmlsbD0iIzQyNDI0MiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTgsMTAgQzgsOC45IDguOSw4IDEwLDggQzExLjEsOCAxMiw4LjkgMTIsMTAgQzEyLDExLjEgMTEuMSwxMiAxMCwxMiBDOC45LDEyIDgsMTEuMSA4LDEwIE01LjgsMTUuNyBMNC4zLDE0LjMgTDUuOCwxMi44IEM1LjMsMTIgNSwxMSA1LDEwIEM1LDkgNS4zLDggNS44LDcuMyBMNC4zLDUuOCBMNS44LDQuMyBMNy4yLDUuOCBDOCw1LjMgOSw1IDEwLDUgQzExLDUgMTIsNS4zIDEyLjgsNS44IEwxNC4zLDQuMyBMMTUuNyw1LjcgTDE0LjIsNy4yIEMxNC43LDggMTUsOSAxNSwxMCBDMTUsMTEgMTQuNywxMiAxNC4yLDEyLjggTDE1LjcsMTQuMyBMMTQuMywxNS43IEwxMi44LDE0LjIgQzEyLDE0LjcgMTEsMTUgMTAsMTUgQzksMTUgOCwxNC43IDcuMywxNC4yIEw1LjgsMTUuNyBNMTAsNyBDOC4zLDcgNyw4LjMgNywxMCBDNywxMS43IDguMywxMyAxMCwxMyBDMTEuNywxMyAxMywxMS43IDEzLDEwIEMxMyw4LjMgMTEuNyw3IDEwLDcgTTE4LDAgQzE5LjEsMCAyMCwwLjkgMjAsMiBMMjAsMTggQzIwLDE5LjEgMTkuMSwyMCAxOCwyMCBMMTcsMjAgTDE3LDIxIEwxMywyMSBMMTMsMjAgTDcsMjAgTDcsMjEgTDMsMjEgTDMsMjAgTDIsMjAgQzAuOSwyMCAwLDE5LjEgMCwxOCBMMCwyIEMwLDAuOSAwLjksMCAyLDAgTDE4LDAgTTE4LDE4IEwxOCwyIEwyLDIgTDIsMTggTDE4LDE4IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="Xidipity WordPress Theme Archive Error Logo" />' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:1/SECTION -->' . "\n";
    echo '<!--  fi:1/SECTION -->' . "\n";
    echo '<div class="fxd:1 fxe:6 wd:100% sm)pad:+1 sm)wd:75%">' . "\n";
    echo '<h2>Search Error</h2>' . "\n";
    echo '<p>The search criteria did not return any documents.</p>' . "\n";
    echo '</div>' . "\n";
    echo '<!--  fi:1/SECTION -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:MAIN -->' . "\n";
}
echo '</article>' . "\n";
echo '<!--  ct:ARTICLE -->' . "\n";
echo '</section>' . "\n";
echo '<!-- /fi:1/SECTION -->' . "\n";

/*
***
    * function: get_sidebar
    * dsc: sidebar code
    * ver: 200322
    * fnt: load sidebar.php
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
    * dsc: footer code
    * ver: 200322
    * fnt: load footer.php
    * ref: developer.wordpress.org/reference/functions/get_footer/
***
*/
get_footer();

/*
***
    * function: wp_reset_postdata
    * dsc: database code
    * ver: 200322
    * fnt: reset database query
    * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
***
*/
wp_reset_postdata();

/*
 * EOF:     archive.php
 * Build:   200322
 *
 */
?>
