/*
 * WordPress Xidipity Theme JS File
 *
 * File Name:       add-list-unordered/plugin.js
 * Function:        tinymce unordered list plugin
 * Build:           200104-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version      	1.0
 * @since      		0.9
 * @link            https://www.tiny.cloud/docs/
 *
 */

tinymce.PluginManager.add('add_lst_unorder', function (editor, url) {
    editor.addButton('add_lst_unorder', {
        type: 'splitbutton',
        title: 'Unordered lists',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNCAxMC41Yy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXptMC02Yy0uODMgMC0xLjUuNjctMS41IDEuNVMzLjE3IDcuNSA0IDcuNSA1LjUgNi44MyA1LjUgNiA0LjgzIDQuNSA0IDQuNXptMCAxMmMtLjgzIDAtMS41LjY4LTEuNSAxLjVzLjY4IDEuNSAxLjUgMS41IDEuNS0uNjggMS41LTEuNS0uNjctMS41LTEuNS0xLjV6TTcgMTloMTR2LTJIN3Yyem0wLTZoMTR2LTJIN3Yyem0wLTh2MmgxNFY1SDd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+PC9zdmc+',
        onclick: function () {
            var dom = editor.dom;
            var uniqueID = dom.uniqueId();
            var html = '<ul><li id="' + uniqueID + '"></li></ul>';
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
                var html = '<ul><li id="' + uniqueID + '"></li></ul>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
        }, {
            icon: false,
            text: '•\xa0Circle',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ul class="circle"><li id="' + uniqueID + '"></li></ul>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
        }, {
            icon: false,
            text: '•\xa0Dash',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ul class="dash"><li id="' + uniqueID + '"></li></ul>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
        }, {
            icon: false,
            text: '•\xa0Square',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ul class="square"><li id="' + uniqueID + '"></li></ul>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
        }, {
            icon: false,
            text: '•\xa0Mixed',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<ul class="mixed"><li id="' + uniqueID + '"></li></ul>';
                editor.insertContent(html);
                var newListItem = dom.select('li#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
        }]
    });
});

/*
 * EOF:     add-list-unordered/plugin.js
 * Build:   200104-1
 *
 */
