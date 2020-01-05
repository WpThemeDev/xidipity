/*
 * WordPress Xidipity Theme JS File
 *
 * File Name:       toggle-italic/plugin.js
 * Function:        tinymce italic plugin
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

tinymce.PluginManager.add('toggle_italic', function( editor, url ) {
    editor.addButton( 'toggle_italic', {
        title: 'Toggle Italic',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgNHYzaDIuMjFsLTMuNDIgOEg2djNoOHYtM2gtMi4yMWwzLjQyLThIMThWNGgtOHoiLz48L3N2Zz4=',
        cmd: 'Italic'
    });
});

/*
 * EOF:     toggle-italic/plugin.js
 * Build:   200104-1
 *
 */
