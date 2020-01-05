/*
 * WordPress Xidipity Theme JS File
 *
 * File Name:       add-menu-divider/plugin.js
 * Function:        tinymce menu divider plugin
 * Build:           200104-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version			1.0
 * @since			0.9
 * @link            https://www.tiny.cloud/docs/
 *
 */

tinymce.PluginManager.add('add_mnu_div', function (editor, url) {
    editor.addButton('add_mnu_div', {
        title: '',
        icon: false,
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTIgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiAgPGxpbmUgc3R5bGU9InN0cm9rZTogcmdiKDE4OSwgMTg5LCAxODkpOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IiB4MT0iNiIgeTE9IjQuNzA3IiB4Mj0iNiIgeTI9IjE5LjI5MyIvPgo8L3N2Zz4=',
    });
});

/*
 * EOF:     add-menu-divider/plugin.js
 * Build:   200104-1
 *
 */
