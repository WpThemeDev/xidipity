/*
 *  Xidipity WordPress Theme
 *
 *  file:   ullist/plugin.js
 *  build:  91025.1a
 *  descrp: text ullist plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 **/
tinymce.PluginManager.add('ullist', function (editor, url) {
    editor.addButton('ullist', {
        type: 'splitbutton',
        title: 'Unordered lists',
        icon: 'mce-ullist',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNCAxMC41Yy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXptMC02Yy0uODMgMC0xLjUuNjctMS41IDEuNVMzLjE3IDcuNSA0IDcuNSA1LjUgNi44MyA1LjUgNiA0LjgzIDQuNSA0IDQuNXptMCAxMmMtLjgzIDAtMS41LjY4LTEuNSAxLjVzLjY4IDEuNSAxLjUgMS41IDEuNS0uNjggMS41LTEuNS0uNjctMS41LTEuNS0xLjV6TTcgMTloMTR2LTJIN3Yyem0wLTZoMTR2LTJIN3Yyem0wLTh2MmgxNFY1SDd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+PC9zdmc+',
        onclick: function () {
            var dom = editor.dom;
            var uniqueID = dom.uniqueId();
            var html = '<!-- xwpt: 91025.1a/mce/std/ul             --><ul><li><p id="' + uniqueID + '">&nbsp;</p></li></ul><!-- /xwpt: 91025.1a/mce/std/ul            -->';
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
                var html = '<!-- xwpt: 91025.1a/mce/std/ul             --><ul><li><p id="' + uniqueID + '">&nbsp;</p></li></ul><!-- /xwpt: 91025.1a/mce/std/ul            -->';
                editor.insertContent(html);
                var newListItem = dom.select('p#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }, {
            icon: false,
            text: '•\xa0Mixed',
            onclick: function () {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!-- xwpt: 91025.1a/mce/std/ul             --><ul class="mixed"><li><p id="' + uniqueID + '">&nbsp;</p></li></ul><!-- /xwpt: 91025.1a/mce/std/ul            -->';
                editor.insertContent(html);
                var newListItem = dom.select('p#' + uniqueID)[0];
                editor.selection.setCursorLocation(newListItem);
            }
            }]
    });
});
/*
    eof: ullist/plugin.js
*/
