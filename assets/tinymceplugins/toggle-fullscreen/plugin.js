/*
 * WordPress Xidipity Theme JS File
 *
 * File Name:       toggle-fullscreen/plugin.js
 * Function:        tinymce fullscreen plugin
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

tinymce.PluginManager.add('toggle_fullscreen', function(editor, url) {
	editor.addButton('toggle_fullscreen', {
		title: 'Toggle Full Screen',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcgN0g3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1aDEwYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01ek03IDE1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+',
		onclick: function() {
			editor.execCommand('mceFullscreen');
		}
	});
});

/*
 * EOF:     toggle-fullscreen/plugin.js
 * Build:   200104-1
 *
 */
