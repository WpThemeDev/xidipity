/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        tinymce text formats toolbar button
 * File Name:       text-formats/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91211.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/text-formats/
 */
tinymce.PluginManager.add('formats', function(editor, url) {
    editor.addButton('formats', {
        type: 'splitbutton',
        title: 'Text formats',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0yNCAyNEgwVjBoMjR2MjR6Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iYiI+PHVzZSB4bGluazpocmVmPSIjYSIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxwYXRoIGNsaXAtcGF0aD0idXJsKCNiKSIgZD0iTTIuNSA0djNoNXYxMmgzVjdoNVY0aC0xM3ptMTkgNWgtOXYzaDN2N2gzdi03aDNWOXoiLz48L3N2Zz4=',
        onclick: function() {
            editor.execCommand('underline');
        },
        menu: [{
            icon: false,
            text: '•\xa0Underline',
            onclick: function() {
                editor.execCommand('underline');
            }
        }, {
            icon: false,
            text: '•\xa0Strike through',
            onclick: function() {
                editor.execCommand('mceReplaceContent', false, '<del>{$selection}</del>');
            }
        }, {
            icon: false,
            text: '•\xa0Super script',
            onclick: function() {
                editor.execCommand('superscript');
            }
        }, {
            icon: false,
            text: '•\xa0Sub script',
            onclick: function() {
                editor.execCommand('subscript');
            }
        }, {
            icon: false,
            text: '•\xa0Drop Shadow',
            onclick: function() {
                tinymce.execCommand('mceReplaceContent', false, '<span class="fnt:shadow-medium">{$selection}</span>');
            }
        }, ],
    });
});
/**
 *  eof: text-formats/plugin.js
 */
