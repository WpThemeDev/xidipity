<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       template-parts/content-none.php
 * Function:        report unexpected execution of site
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
 * @see             developer.wordpress.org/themes/basics/
 * @see             developer.wordpress.org/reference/functions/is_home/
 * @see             developer.wordpress.org/reference/functions/current_user_can/
 * @see             developer.wordpress.org/reference/functions/wp_kses/
 * @see             developer.wordpress.org/reference/functions/esc_url/
 *
 */

/*
***/
echo '<!--  file:content-none.php -->' . "\n";
/***
*/
if (is_home() && current_user_can('publish_posts'))
{
    echo '<!--  sec:FLEX/CONTAINER -->' . "\n";
    echo '<div class="fx:c sm)fx:r fxa:1 fxb:1 fxc:1 mar:vrt+0.5">' . "\n";
    echo '<!--  sec:FLEX/ITEM 1 -->' . "\n";
    echo '<div class="fxd:3 wd:100% pad:vrt+0.5 sm)wd:25%">' . "\n";
    echo '<img class="pad:hrz+2 wd:100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMTggMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+bm8tYmxvZ3M8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibm8tYmxvZ3MiIGZpbGw9IiMwMDNDOEYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy43LDkuMzUgTDE2LjcsMTAuMzUgTDE0LjY1LDguMyBMMTUuNjUsNy4zIEMxNS44Niw3LjA5IDE2LjIxLDcuMDkgMTYuNDIsNy4zIEwxNy43LDguNTggQzE3LjkxLDguNzkgMTcuOTEsOS4xNCAxNy43LDkuMzUgTTgsMTQuOTQgTDE0LjA2LDguODggTDE2LjExLDEwLjkzIEwxMC4wNiwxNyBMOCwxNyBMOCwxNC45NCBNOCwxMCBDMy41OCwxMCAwLDExLjc5IDAsMTQgTDAsMTYgTDYsMTYgTDYsMTQuMTEgTDEwLDEwLjExIEM5LjM0LDEwLjAzIDguNjcsMTAgOCwxMCBNOCwwIEM1Ljc5MDg2MSwwIDQsMS43OTA4NjEgNCw0IEM0LDYuMjA5MTM5IDUuNzkwODYxLDggOCw4IEMxMC4yMDkxMzksOCAxMiw2LjIwOTEzOSAxMiw0IEMxMiwxLjc5MDg2MSAxMC4yMDkxMzksMCA4LDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="Xidipity WordPress Theme New Blog Logo" />' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /sec:FLEX/ITEM 1 -->' . "\n";
    echo '<!--  sec:FLEX/ITEM 2 -->' . "\n";
    echo '<div class="fxd:1 fxe:6 wd:100% sm)pad:+1 sm)wd:75%">' . "\n";
    echo '<h2>1st Post</h2>' . "\n";
    printf('<p>' . wp_kses(
    /* translators: 1: link to WP admin new post page. */
    __('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'xidipity') , array(
        'a' => array(
            'href' => array() ,
        ) ,
    )) . '</p>', esc_url(admin_url('post-new.php')));
    echo '</div>' . "\n";
    echo '<!-- /sec:FLEX/ITEM 2 -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /sec:FLEX/CONTAINER -->' . "\n";
}
else
{
    echo '<!--  sec:FLEX/CONTAINER -->' . "\n";
    echo '<div class="fx:c sm)fx:r fxa:1 fxb:1 fxc:1 mar:vrt+0.5">' . "\n";
    echo '<!--  sec:FLEX/ITEM 1 -->' . "\n";
    echo '<div class="fxd:3 wd:100% pad:vrt+0.5 sm)wd:25%">' . "\n";
    echo '<img class="pad:hrz+2 wd:100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjEgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY29tbWVudC1zZWFyY2giIGZpbGw9IiMwMDNDOEYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy41LDAgQzE2LDAgMTgsMiAxOCw0LjUgQzE4LDUuMzggMTcuNzUsNi4yIDE3LjMxLDYuODkgTDIwLjQxLDEwIEwxOSwxMS4zOSBMMTUuODksOC4zMSBDMTUuMiw4Ljc1IDE0LjM4LDkgMTMuNSw5IEMxMSw5IDksNyA5LDQuNSBDOSwyIDExLDAgMTMuNSwwIE0xMy41LDIgQzEyLjExOTI4ODEsMiAxMSwzLjExOTI4ODEzIDExLDQuNSBDMTEsNS44ODA3MTE4NyAxMi4xMTkyODgxLDcgMTMuNSw3IEMxNC44ODA3MTE5LDcgMTYsNS44ODA3MTE4NyAxNiw0LjUgQzE2LDMuMTE5Mjg4MTMgMTQuODgwNzExOSwyIDEzLjUsMiBNMiwyIEw3LjUsMiBDNy4xOSwyLjc5IDcsMy42NCA3LDQuNSBDNyw4LjA4OTg1MDg3IDkuOTEwMTQ5MTMsMTEgMTMuNSwxMSBDMTQuMTgsMTEgMTQuODMsMTAuODkgMTUuNDYsMTAuNjkgTDE4LDEzLjIzIEwxOCwxNCBDMTgsMTUuMTA0NTY5NSAxNy4xMDQ1Njk1LDE2IDE2LDE2IEwxMS45LDE2IEw4LjIsMTkuNzEgQzgsMTkuODkgNy43NiwyMCA3LjUsMjAgTDcsMjAgQzYuNDQ3NzE1MjUsMjAgNiwxOS41NTIyODQ3IDYsMTkgTDYsMTYgTDIsMTYgQzAuODk1NDMwNSwxNiAwLDE1LjEwNDU2OTUgMCwxNCBMMCw0IEMwLDIuODk1NDMwNSAwLjg5NTQzMDUsMiAyLDIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="Xidipity WordPress Theme 404 Logo" />' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /sec:FLEX/ITEM 1 -->' . "\n";
    echo '<!--  sec:FLEX/ITEM 2 -->' . "\n";
    echo '<div class="fxd:1 fxe:6 wd:100% sm)pad:+1 sm)wd:75%">' . "\n";
    echo '<h2>404 Page Error</h2>' . "\n";
    echo '<p>The page you are looking for can not be found.</p>' . "\n";
    echo '<p>&nbsp;</p>' . "\n";
    echo '<div class="aln:text-center sm)aln:text-left mar:top+1">' . "\n";
    echo '<button onclick="goBack()">Return to previous page</button>' . "\n";
    echo '</div>' . "\n";
    echo '<p>&nbsp;</p>' . "\n";
    echo '<script>function goBack() { window.history.back(); }</script>' . "\n";
    echo '</div>' . "\n";
    echo '<!--  sec:FLEX/ITEM 2 -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /sec:FLEX/CONTAINER -->' . "\n";
}

/*
 * EOF:     template-parts/content-none.php
 * Build:   200322
 *
 */
?>
