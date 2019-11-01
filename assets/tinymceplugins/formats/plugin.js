/*
 *  Xidipity WordPress Theme
 *
 *  file:   formats/plugin.js
 *  build:  91025.1a
 *  descrp: format plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 **/
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
        }, ],
    });
});
/*
    eof: formats/plugin.js
*/
