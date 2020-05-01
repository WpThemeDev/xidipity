/*
 * WordPress Xidipity Theme JS File
 *
 * File Name:       clear-format/plugin.js
 * Function:        tinymce set format to default plugin
 * Build:           200104-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            https://www.tiny.cloud/docs/
 *
 */

tinymce.PluginManager.add('clear_format', function( editor, url ) {
    editor.addButton( 'clear_format', {
        title: 'Clear Format',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgOFY1SDYuMzlsMyAzaDEuODNsLS41NSAxLjI4IDIuMDkgMi4xTDE0LjIxIDh6TTMuNDEgNC44NkwyIDYuMjdsNi45NyA2Ljk3TDYuNSAxOWgzbDEuNTctMy42NkwxNi43MyAyMWwxLjQxLTEuNDF6Ii8+PC9zdmc+',
        cmd: 'RemoveFormat'
    });
});

/*
 * EOF:     clear-format/plugin.js
 * Build:   200104-1
 *
 */
