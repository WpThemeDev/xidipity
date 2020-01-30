<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       template-parts/content-none.php
 * Function:        page content not found
 * Build:           200128-1
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
    system variables
*/
global $post;
$wp_err = '';
echo '<!-- xwpt: 90915.1a/content/none/php        -->' . "\n";
echo '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
echo '<article class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% pad:1 fx:shadow">' . "\n";
/*
    no posts
*/
echo '<!-- xwpt: 90915.1a/content/none/php/err    -->';
if (is_home() && current_user_can('publish_posts'))
{
    printf('<p>' . wp_kses(
    /* translators: 1: link to WP admin new post page. */
    __('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'xidipity') , array(
        'a' => array(
            'href' => array() ,
        ) ,
    )) . '</p>', esc_url(admin_url('post-new.php')));
    echo '<!-- /xwpt: 90915.1a/content/none/php/err   -->';
}
elseif (is_search())
{
    echo '<div class="fx:an-container">';
    echo '<div class="fx:an-item"><svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' . "\n";
    echo '<path fill="none" d="M0 0h24v24H0V0z"/>' . "\n";
    echo '<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" style="fill: rgb(204, 0, 0);"/>' . "\n";
    echo '</svg></div>';
    echo '<div class="fx:an-item"><h2>Search results</h2></div>';
    echo '</div>';
    echo '<p>The search criteria did not return any records.</p>' . "\n";
}
else
{
    /*: display 404 error :*/
    echo '<div class="fx:an-container">';
    echo '<p>&nbsp;</p>' . "\n";
    echo '<!-- xwpt: flexbox/content/wrapper          -->' . "\n";
    echo '<div class="fx:cn-itm-wrapper pad:1">' . "\n";
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
    echo '<p class="fnt:size-x-large sm)fnt:size-xx-large fnt:weight-normal">404 Page Error</p><p>The page you are looking for can not be found.</p></div>' . "\n";
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
    echo '</div>' . "\n";
}
echo '<!-- /xwpt: 90915.1a/content/none/php/err   -->';
echo '</article>' . "\n";
echo '<!-- /xwpt: 90915.1a/content/none/php       -->' . "\n";

/*
 * EOF:     template-parts/content-none.php
 * Build:   200128-1
 *
 */
?>
