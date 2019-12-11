/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        clear format of selected text
 * File Name:       clrfmt/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91210.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/clear-format/
 */
tinymce.PluginManager.add('clrfmt', function( editor, url ) {
    editor.addButton( 'clrfmt', {
        title: 'Clear Format',
        icon: 'mce-clrfmt',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgOFY1SDYuMzlsMyAzaDEuODNsLS41NSAxLjI4IDIuMDkgMi4xTDE0LjIxIDh6TTMuNDEgNC44NkwyIDYuMjdsNi45NyA2Ljk3TDYuNSAxOWgzbDEuNTctMy42NkwxNi43MyAyMWwxLjQxLTEuNDF6Ii8+PC9zdmc+',
        cmd: 'removeformat'
    });
});
/*
    eof: clrfmt/plugin.js
*/
