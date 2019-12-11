/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        toggle tinymce into full screen & standard view
 * File Name:       fullscreen/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91210.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/toggle-fullscreen/
 */
tinymce.PluginManager.add('xscreen', function(editor, url) {
    editor.addButton('xscreen', {
        title: 'Toggle Full Screen',
        icon: 'mce-fullscreen',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcgN0g3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1aDEwYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01ek03IDE1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+',
        onclick: function() {
            editor.execCommand('mceFullscreen');
        }
    });
});
/*
    eof: fullscreen/plugin.js
*/
