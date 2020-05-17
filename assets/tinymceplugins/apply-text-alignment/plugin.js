/**
    * WordPress Xidipity Theme
    * Tinymce apply-text-alignment plugin 
    *
    * ###:  plugin.js
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

tinymce.PluginManager.add('apply_txt_align', function(editor, url) {
    editor.addButton('apply_txt_align', {
        type: 'splitbutton',
        title: 'Align Center',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThI%0D%0AM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+%0D%0APHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==',
        onclick: function() {
            editor.execCommand('JustifyCenter');
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
        }, {
            icon: false,
            text: '•\xa0Indent >',
            onclick: function() {
                tinymce.execCommand('mceReplaceContent', false, '<ul class="par"><li>{$selection}</li></ul>');
            }
        }, {
            icon: false,
            text: '•\xa0Hanging Indent >',
            onclick: function() {
                tinymce.execCommand('mceReplaceContent', false, '<span class="dsp:block pad:left+2" style="text-indent: -2rem;">{$selection}</span>');
            }
        }, {
            icon: false,
            text: '•\xa0Paragraph Indent >',
            onclick: function() {
                tinymce.execCommand('mceReplaceContent', false, '<span style="display:block;text-indent:2rem;">{$selection}</span>');
            }
        }],
    });
});

/*
 * EOF: apply-text-alignment / plugin.js / 24200520
 */
