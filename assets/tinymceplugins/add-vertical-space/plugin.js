/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        insert vertical spacer tag into tinymce HTML code
 * File Name:       add-vertical-space/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91212.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/add-vertical-space/
 */
tinymce.PluginManager.add('vspacer', function(editor, url) {
    editor.addButton('vspacer', {
        title: 'Vertical Spacers',
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAg%0D%0AMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSAz%0D%0AIDE5IEwgMjEgMTkgTCAyMSAxMyBMIDMgMTMgTCAzIDE5IFogTSAzIDExIEwgMjEgMTEgTCAyMSA5%0D%0AIEwgMyA5IEwgMyAxMSBaIE0gMyA1IEwgMyA3IEwgMjEgNyBMIDIxIDUgTCAzIDUgWiIgc3R5bGU9%0D%0AImZpbGw6IHJnYigzMywgMzMsIDMzKTsiLz4KPC9zdmc+',
        type: 'menubutton',
        menu: [{
            text: '•\xa0\xBD Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="dsp:tint!mce" style="line-height: calc(var(--dft-line-height) * 50%); font-size: calc(var(--dft-font-size) * 50%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa0\xBE Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="dsp:tint!mce" style="line-height: calc(var(--dft-line-height) * 75%); font-size: calc(var(--dft-font-size) * 75%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa01\xBD Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="dsp:tint!mce" style="line-height: calc(var(--dft-line-height) * 150%); font-size: calc(var(--dft-font-size) * 150%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa02 Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="dsp:tint!mce" style="line-height: calc(var(--dft-line-height) * 200%); font-size: calc(var(--dft-font-size) * 200%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa02\xBD Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="dsp:tint!mce" style="line-height: calc(var(--dft-line-height) * 250%); font-size: calc(var(--dft-font-size) * 250%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa03 Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="dsp:tint!mce" style="line-height: calc(var(--dft-line-height) * 300%); font-size: calc(var(--dft-font-size) * 300%);">&nbsp;</p>');
            }
        }]
    });
});
/**
 *  eof: add-vertical-space/plugin.js
 */
