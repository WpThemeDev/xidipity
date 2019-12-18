/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        toggle italic of selected text
 * File Name:       toggle-italic/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91215.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/toggle-italic/
 */
tinymce.PluginManager.add('toggle_italic', function( editor, url ) {
    editor.addButton( 'toggle_italic', {
        title: 'Toggle Italic',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgNHYzaDIuMjFsLTMuNDIgOEg2djNoOHYtM2gtMi4yMWwzLjQyLThIMThWNGgtOHoiLz48L3N2Zz4=',
        cmd: 'Italic'
    });
});
/**
 *  eof: toggle-italic/plugin.js
 */
