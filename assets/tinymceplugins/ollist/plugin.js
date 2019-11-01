/*
 *  Xidipity WordPress Theme
 *
 *  file:   ollist/plugin.js
 *  build:  91025.1a
 *  descrp: text ollist plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 **/
tinymce.PluginManager.add('ollist', function (editor, url) {
    editor.addButton('ollist', {
        type: 'splitbutton',
        title: 'Ordered lists',
        icon: 'mce-ollist',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMiAxN2gydi41SDN2MWgxdi41SDJ2MWgzdi00SDJ2MXptMS05aDFWNEgydjFoMXYzem0tMSAzaDEuOEwyIDEzLjF2LjloM3YtMUgzLjJMNSAxMC45VjEwSDJ2MXptNS02djJoMTRWNUg3em0wIDE0aDE0di0ySDd2MnptMC02aDE0di0ySDd2MnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+',
        onclick: function () {
            var dom = editor.dom;
            var uniqueID = dom.uniqueId();
            var html = '<!-- xwpt: 91025.1a/mce/std/ul             --><ol><li><p id="' + uniqueID + '">&nbsp;</p></li></ol><!-- /xwpt: 91025.1a/mce/std/ul            -->';
            editor.insertContent(html);
            var newListItem = dom.select('p#' + uniqueID)[0];
            editor.selection.setCursorLocation(newListItem);
        },
        menu: [{
            icon: false,
            text: '•\xa0Standard',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!-- xwpt: 91025.1a/mce/std/ol             --><ol><li><p id="' + uniqueID + '">&nbsp;</p></li></ol><!-- /xwpt: 91025.1a/mce/std/ul            -->';
                editor.insertContent(html);
                var newListItem = dom.select('p#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }, {
            icon: false,
            text: '•\xa0Outline',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!-- xwpt: 91025.1a/mce/outline/ol         --><ol class="outline"><li><p id="' + uniqueID + '">&nbsp;</p></li></ol><!-- /xwpt: 91025.1a/mce/outline/ol        -->';
                editor.insertContent(html);
                var newListItem = dom.select('p#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }]
    });
});
/*
    eof: ollist/plugin.js
*/
