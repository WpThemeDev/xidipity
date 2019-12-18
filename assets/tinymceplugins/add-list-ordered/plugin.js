/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        add ordered list
 * File Name:       add-list-ordered/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91211.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/add-list-ordered/
 */
tinymce.PluginManager.add('add_lst_order', function (editor, url) {
    editor.addButton('add_lst_order', {
        type: 'splitbutton',
        title: 'Ordered lists',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMiAxN2gydi41SDN2MWgxdi41SDJ2MWgzdi00SDJ2MXptMS05aDFWNEgydjFoMXYzem0tMSAzaDEuOEwyIDEzLjF2LjloM3YtMUgzLjJMNSAxMC45VjEwSDJ2MXptNS02djJoMTRWNUg3em0wIDE0aDE0di0ySDd2MnptMC02aDE0di0ySDd2MnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+',
        onclick: function () {
            var dom = editor.dom;
            var uniqueID = dom.uniqueId();
            var html = '<ol><li id="' + uniqueID + '"></li></ol>';
            editor.insertContent(html);
            var newListItem = dom.select('li#' + uniqueID)[0];
            editor.selection.setCursorLocation(newListItem);
        },
        menu: [{
            icon: false,
            text: '•\xa0Standard',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ol><li id="' + uniqueID + '"></li></ol>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }, {
            icon: false,
            text: '•\xa0Nested',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ol class="nested"><li id="' + uniqueID + '"></li></ol>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }, {
            icon: false,
            text: '•\xa0Alpha',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ol class="alpha"><li id="' + uniqueID + '"></li></ol>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }, {
            icon: false,
            text: '•\xa0Roman',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ol class="roman"><li id="' + uniqueID + '"></li></ol>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }, {
            icon: false,
            text: '•\xa0Outline',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ol class="outline"><li id="' + uniqueID + '"></li></ol>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }]
    });
});
/**
 *  eof: add-list-ordered/plugin.js
 */
