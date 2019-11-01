/*
 *  Xidipity WordPress Theme
 *
 *  file:   align/plugin.js
 *  build:  91025.1a
 *  descrp: text align plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 **/
tinymce.PluginManager.add('txtalign', function(editor, url) {
    editor.addButton('txtalign', {
        type: 'splitbutton',
        title: 'Align Left',
        icon: 'mce-alignleft',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThI%0D%0AM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+%0D%0APHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==',
        onclick: function() {
            editor.execCommand('JustifyLeft');
        },
        menu: [{
            icon: false,
            text: '•\xa0Align left',
            onclick: function() {
                editor.execCommand('JustifyLeft');
            }
        }, {
            icon: false,
            text: '•\xa0Align Center',
            onclick: function() {
                editor.execCommand('JustifyCenter');
            }
        }, {
            icon: false,
            text: '•\xa0Align Right',
            onclick: function() {
                editor.execCommand('JustifyRight');
            }
        }, {
            icon: false,
            text: '•\xa0Justify',
            onclick: function() {
                editor.execCommand('JustifyFull');
            }
        }],
    });
});
/**
 *  eof: align/plugin.js
 */
