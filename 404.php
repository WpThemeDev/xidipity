<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       404.php
 * Function:        display 404 page
 * Build:           200415
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
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
echo '<!--  fc:404 -->' . "\n";
echo '<div class="fx:c sm)fx:r fxa:1 fxb:1 fxc:1 mar:vrt+0.5">' . "\n";
echo '<!--  fi:LOGO -->' . "\n";
echo '<div class="fxd:3 wd:100% pad:vrt+0.5 sm)wd:25%">' . "\n";
echo '<img class="pad:hrz+2 wd:100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjEgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY29tbWVudC1zZWFyY2giIGZpbGw9IiMwMDNDOEYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy41LDAgQzE2LDAgMTgsMiAxOCw0LjUgQzE4LDUuMzggMTcuNzUsNi4yIDE3LjMxLDYuODkgTDIwLjQxLDEwIEwxOSwxMS4zOSBMMTUuODksOC4zMSBDMTUuMiw4Ljc1IDE0LjM4LDkgMTMuNSw5IEMxMSw5IDksNyA5LDQuNSBDOSwyIDExLDAgMTMuNSwwIE0xMy41LDIgQzEyLjExOTI4ODEsMiAxMSwzLjExOTI4ODEzIDExLDQuNSBDMTEsNS44ODA3MTE4NyAxMi4xMTkyODgxLDcgMTMuNSw3IEMxNC44ODA3MTE5LDcgMTYsNS44ODA3MTE4NyAxNiw0LjUgQzE2LDMuMTE5Mjg4MTMgMTQuODgwNzExOSwyIDEzLjUsMiBNMiwyIEw3LjUsMiBDNy4xOSwyLjc5IDcsMy42NCA3LDQuNSBDNyw4LjA4OTg1MDg3IDkuOTEwMTQ5MTMsMTEgMTMuNSwxMSBDMTQuMTgsMTEgMTQuODMsMTAuODkgMTUuNDYsMTAuNjkgTDE4LDEzLjIzIEwxOCwxNCBDMTgsMTUuMTA0NTY5NSAxNy4xMDQ1Njk1LDE2IDE2LDE2IEwxMS45LDE2IEw4LjIsMTkuNzEgQzgsMTkuODkgNy43NiwyMCA3LjUsMjAgTDcsMjAgQzYuNDQ3NzE1MjUsMjAgNiwxOS41NTIyODQ3IDYsMTkgTDYsMTYgTDIsMTYgQzAuODk1NDMwNSwxNiAwLDE1LjEwNDU2OTUgMCwxNCBMMCw0IEMwLDIuODk1NDMwNSAwLjg5NTQzMDUsMiAyLDIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="Xidipity WordPress Theme 404 Logo" />' . "\n";
echo '</div>' . "\n";
echo '<!-- /fi:LOGO -->' . "\n";
echo '<!--  fi:MESSAGE -->' . "\n";
echo '<div class="fxd:1 fxe:6 wd:100% sm)pad:+1 sm)wd:75%">' . "\n";
echo '<h2>404 Page Error</h2>' . "\n";
echo '<p>The page you are looking for can not be found.</p>' . "\n";
echo '<div class="aln:text-center sm)aln:text-left mar:top+1">' . "\n";
echo '<button onclick="goBack()">Return to previous page</button>' . "\n";
echo '</div>' . "\n";
echo '<script>' . "\n";
echo 'function goBack() {window.history.back();}' . "\n";
echo '</script>' . "\n";
echo '</div>' . "\n";
echo '<!--  fi:MESSAGE -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fc:404 -->' . "\n";
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
 * EOF:     404.php
 * Build:   200415
 *
 */
?>
