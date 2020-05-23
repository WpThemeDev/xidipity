/**
    * WordPress Xidipity Theme
    * Tinymce add-multiple-columns plugin
    *
    * ###:  plugin.js
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

tinymce.PluginManager.add('add_multi_cols', function (editor, url) {
    editor.addButton('add_multi_cols', {
        type: 'splitbutton',
        title: 'Auto 2 Column',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNLTc0IDI5aDQ4djQ4aC00OFYyOXpNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTMgMTJoN3YxLjVoLTd6bTAtMi41aDdWMTFoLTd6bTAgNWg3VjE2aC03ek0yMSA0SDNjLTEuMSAwLTIgLjktMiAydjEzYzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNWgtOVY2aDl2MTN6Ii8+PC9zdmc+',
        onclick: function() {
            var dom = editor.dom;
            var uniqueID = dom.uniqueId();
            var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:auto-2"><tr><td id="' + uniqueID + '"></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
            editor.insertContent(html);
            var newTwoColumn = dom.select('td#' + uniqueID)[0];
            editor.selection.setCursorLocation(newTwoColumn);
        },
        menu: [{
            icon: false,
            text: '•\xa0Auto 2 Column',
            onclick: function() {
              var dom = editor.dom;
              var uniqueID = dom.uniqueId();
              var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:auto-2"><tr><td id="' + uniqueID + '"></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
              editor.insertContent(html);
              var newTwoColumn = dom.select('td#' + uniqueID)[0];
              editor.selection.setCursorLocation(newTwoColumn);
            }
        }, {
            icon: false,
            text: '•\xa0Auto 3 Column',
            onclick: function() {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:auto-3"><tr><td id="' + uniqueID + '"></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
                editor.insertContent(html);
                var newTwoColumn = dom.select('td#' + uniqueID)[0];
                editor.selection.setCursorLocation(newTwoColumn);
            }
        }, {
            icon: false,
            text: '•\xa0Auto 4 Column',
            onclick: function() {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:auto-4"><tr><td id="' + uniqueID + '"></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
                editor.insertContent(html);
                var newTwoColumn = dom.select('td#' + uniqueID)[0];
                editor.selection.setCursorLocation(newTwoColumn);
            }
        }, {
            icon: false,
            text: '•\xa0Fixed 2 Column',
            onclick: function() {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:fixed-2"><tr><td id="' + uniqueID + '"></td><td></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
                editor.insertContent(html);
                var newTwoColumn = dom.select('td#' + uniqueID)[0];
                editor.selection.setCursorLocation(newTwoColumn);
            }
        }, {
            icon: false,
            text: '•\xa0Fixed 3 Column',
            onclick: function() {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:fixed-3"><tr><td id="' + uniqueID + '"></td><td></td><td></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
                editor.insertContent(html);
                var newTwoColumn = dom.select('td#' + uniqueID)[0];
                editor.selection.setCursorLocation(newTwoColumn);
            }
        }, {
            icon: false,
            text: '•\xa0Fixed 4 Column',
            onclick: function() {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:fixed-4"><tr><td id="' + uniqueID + '"></td><td></td><td></td><td></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
                editor.insertContent(html);
                var newTwoColumn = dom.select('td#' + uniqueID)[0];
                editor.selection.setCursorLocation(newTwoColumn);
            }
        }, ],
    });
});

/*
 * EOF: add-multiple-columns / plugin.js / 24200520
 */
