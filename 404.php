<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       404.php
 * Function:        display 404 page
 * Build:           200128-1
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
    system variables
*/
$wp_title = get_bloginfo('name');

/*
    set page options
*/
disp_sidebar('yes');
disp_menu('no');
/*
    display header
*/
get_header();
echo '<!-- xwpt: 200128-1/tmpl/an/404             -->' . "\n";
echo '<div class="bdr:solid-thin bdr:bas-300 bg:tint cnr:arch-small fx:r fxa:1 fxb:1 fxc:3 pad:0.5">' . "\n";
echo '<div class="fx:r fxa:3 fxb:6 fxc:3">' . "\n";
echo '<div class="fxd:1">' . "\n";
echo '<div class="fx:r fxa:3 fxb:6 fxc:3">' . "\n";
echo '<div class="fxd:1 mar:right-0.5" style="max-width:9.375rem; min-width:4.5rem;">' . "\n";
echo '<img class="xwd:100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjAgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYyICg5MTM5MCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaG93dG8iIGZpbGw9IiMxNTY1QzAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwwIEwyLDAgQzAuODk1NDMwNSwwIDAsMC44OTU0MzA1IDAsMiBMMCwxOCBDMCwxOS4xMDQ1Njk1IDAuODk1NDMwNSwyMCAyLDIwIEw5LDIwIEM4LjU5LDE5Ljc1IDguMiwxOS40NCA3Ljg2LDE5LjEgQzUuMjIsMTYuNjcgNS4wNSwxMi41NiA3LjUsOS45MiBDOS42OSw3LjUgMTMuMzMsNy4xMyAxNiw5IEwxNiw2IEwxMCwwIE05LDcgTDksMS41IEwxNC41LDcgTDksNyBNMTYuMzEsMTYuOSBDMTcuNjQsMTQuNzkgMTcsMTIgMTQuOTEsMTAuNjggQzEyLjgsOS4zNSAxMCwxMCA4LjY5LDEyLjA4IEM3LjM1LDE0LjE5IDgsMTYuOTcgMTAuMDksMTguMyBDMTEuNTUsMTkuMjMgMTMuNDEsMTkuMjMgMTQuODgsMTguMzIgTDE4LDIxLjM5IEwxOS4zOSwyMCBMMTYuMzEsMTYuOSBNMTIuNSwxNyBDMTEuMTE5Mjg4MSwxNyAxMCwxNS44ODA3MTE5IDEwLDE0LjUgQzEwLDEzLjExOTI4ODEgMTEuMTE5Mjg4MSwxMiAxMi41LDEyIEMxMy44ODA3MTE5LDEyIDE1LDEzLjExOTI4ODEgMTUsMTQuNSBDMTUsMTUuODgwNzExOSAxMy44ODA3MTE5LDE3IDEyLjUsMTcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="Xidipity WordPress Theme 404 Logo" />' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<div class="bdr:bas-400 bdr:left-solid-thin fxd:2 fnt:size-small pad:left-0.5">' . "\n";
echo '<p class="site-title">' . $wp_title . '</p><p class="fnt:size-x-large sm)fnt:size-xx-large fnt:weight-normal">404 Page Error</p><p>The page you are looking for can not be found.</p></div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 200128-1/tmpl/an/404            -->' . "\n";
echo '<div class="aln:text-center sm)aln:text-left mar:top-1">' . "\n";
echo '<button onclick="goBack()">Return to previous page</button>' . "\n";
echo '</div>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<script>' . "\n";
echo 'function goBack() {' . "\n";
echo 'window.history.back();' . "\n";
echo '}' . "\n";
echo '</script>' . "\n";
/*
    display sidebar
*/
get_sidebar();
/*
    reset post data
*/
wp_reset_postdata();
/*
    display footer
*/
get_footer();

/*
 * EOF:     404.php
 * Build:   200128-1
 *
 */
?>
