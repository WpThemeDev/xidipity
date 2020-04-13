<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       author.php
 * Function:        display author info
 * Build:           200322
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version			1.0
 * @since			0.9
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
echo '<!--  file:page.php -->' . "\n";
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
    * article block
***
*/
echo '<!--  ct:ARTICLE -->' . "\n";
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";

if ($wp_query->have_posts())
{
    $biography = get_the_author_meta('description');
    if (empty($biography))
    {
        $biography = 'No information about the author is available at this time.';
    }
    $avatar_link = esc_url(get_avatar_url(get_the_author_meta('user_email')));

    if (empty($avatar_link))
    {
        $avatar__img = '<img class="wd:5" alt="Xidipity Default Avatar Image" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iYXZhdGFyLWVyciIgZmlsbD0iI0I4MjgwMCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEwLDE3LjIgQzcuNSwxNy4yIDUuMjksMTUuOTIgNCwxNCBDNC4wMywxMiA4LDEwLjkgMTAsMTAuOSBDMTIsMTAuOSAxNS45NywxMiAxNiwxNCBDMTQuNzEsMTUuOTIgMTIuNSwxNy4yIDEwLDE3LjIgTTEwLDMgQzExLjY1Njg1NDIsMyAxMyw0LjM0MzE0NTc1IDEzLDYgQzEzLDcuNjU2ODU0MjUgMTEuNjU2ODU0Miw5IDEwLDkgQzguMzQzMTQ1NzUsOSA3LDcuNjU2ODU0MjUgNyw2IEM3LDQuMzQzMTQ1NzUgOC4zNDMxNDU3NSwzIDEwLDMgTTEwLDAgQzQuNDc3MTUyNSwwIC00LjQ0MDg5MjFlLTE2LDQuNDc3MTUyNSAtNC40NDA4OTIxZS0xNiwxMCBDLTQuNDQwODkyMWUtMTYsMTIuNjUyMTY0OSAxLjA1MzU2ODQsMTUuMTk1NzA0IDIuOTI4OTMyMTksMTcuMDcxMDY3OCBDNC44MDQyOTU5NywxOC45NDY0MzE2IDcuMzQ3ODM1MSwyMCAxMCwyMCBDMTIuNjUyMTY0OSwyMCAxNS4xOTU3MDQsMTguOTQ2NDMxNiAxNy4wNzEwNjc4LDE3LjA3MTA2NzggQzE4Ljk0NjQzMTYsMTUuMTk1NzA0IDIwLDEyLjY1MjE2NDkgMjAsMTAgQzIwLDQuNDcgMTUuNSwwIDEwLDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />';
    }
    else
    {
        $avatar__img = '<img class="wd:max5" src="' . $avatar_link . '" alt="Xidipity Avatar Image" />';
    }

    echo '<!--  ct:HEADER -->' . "\n";
    echo '<header class="mar:bottom+1 wd:100%">' . "\n";
    echo '<div class="pg:title">Author: ' . __(get_the_author_meta('nickname')) . '</div>';
    echo '</header>' . "\n";
    echo '<!-- /ct:HEADER -->' . "\n";
    echo '<!--  ct:BODY -->' . "\n";
    echo '<div class="bg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";

    /*
    ***
        * content
    ***
    */

    echo '<!--  fc:MAIN -->' . "\n";
    echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
    echo '<!--  fi:1/SECTION -->' . "\n";
    echo '<section class="fxd:2 fxe:6 wd:100%">' . "\n";
    echo '<!--  fc:LAYOUT -->' . "\n";
    echo '<div class="fx:c md)fx:r fxa:1 fxb:1 fxc:3 md)fxc:1 wd:100%">' . "\n";
    echo '<!--  fc:IMAGE -->' . "\n";
    echo '<div class="bg:content fx:r fxa:3 fxb:1 fxc:3 pad:bottom+1 md)pad:bottom+0 wd:100% md)wd:10%">' . "\n";
    echo $avatar__img;
    echo '</div>' . "\n";
    echo '<!-- /fc:IMAGE -->' . "\n";
    echo '<!--  fi:1/CONTENT -->' . "\n";
    echo '<div class="bg:content fxd:3 fxe:6 wd:100% md)pad:left+2 md)wd:90%">' . "\n";
    echo $biography;

    $wp_qry = array(
        'author' => get_the_author_meta('ID'),
        'orderby' => 'post_date',
        'order' => 'DESC',
        'posts_per_page' => 10,
        'post_type' => 'post',
        'post_status' => 'publish',
        'suppress_filters' => true
    );
    $search_query = new WP_Query($wp_qry);

    echo '<h4 class="mar:top+1">Recent Posts:</h4>' . "\n";
    echo '<ul class="li:qtr-spaced">' . "\n";

    if ($search_query->have_posts())
    {
        while ($search_query->have_posts())
        {
            $search_query->the_post();
            echo '<li>' . get_the_date(get_option('date_format')) . ' - ' . '<a href="' . get_permalink() . '">' . get_the_title() . '</a></li>' . "\n";
        }
    }
    else
    {
        echo '<li>No posts found!</li>' . "\n";
    }
    echo '</ul>' . "\n";

    echo '</div>' . "\n";
    echo '<!--  fi:1/CONTENT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:LAYOUT -->' . "\n";
    echo '</section>' . "\n";
    echo '<!-- /fi:1/SECTION -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:MAIN -->' . "\n";

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
    $footer_items .= dsp_date(date(get_option('date_format'))) . '|';
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
 * EOF:     author.php
 * Build:   200322
 *
 */
?>
