/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        apply text alignment
 * File Name:       apply-text-alignment/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91215.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/apply-text-alignment/
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
                editor.execCommand('Indent');
            }
        }, {
            icon: false,
            text: '•\xa0Indent <',
            onclick: function() {
                editor.execCommand('Outdent');
            }
        }, {
            icon: false,
            text: '•\xa0_ Paragraph >',
            onclick: function() {
                tinymce.execCommand('mceReplaceContent', false, '<span style="display:block;text-indent:2.5rem;">{$selection}</span>');
            }
        }],
    });
});
/**
 *  eof: apply-text-alignment/plugin.js
 */
