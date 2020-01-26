/*
 * WordPress Xidipity Theme JS File
 *
 * File Name:       add-vertical-space/plugin.js
 * Function:        tinymce vertical space plugin
 * Build:           200126-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            https://www.tiny.cloud/docs/
 *
 */

tinymce.PluginManager.add('add_vert_space', function(editor, url) {
    editor.addButton('add_vert_space', {
        title: '\xBD Vertical Space',
        icon: false,
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAg%0D%0AMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSAz%0D%0AIDE5IEwgMjEgMTkgTCAyMSAxMyBMIDMgMTMgTCAzIDE5IFogTSAzIDExIEwgMjEgMTEgTCAyMSA5%0D%0AIEwgMyA5IEwgMyAxMSBaIE0gMyA1IEwgMyA3IEwgMjEgNyBMIDIxIDUgTCAzIDUgWiIgc3R5bGU9%0D%0AImZpbGw6IHJnYigzMywgMzMsIDMzKTsiLz4KPC9zdmc+',
        type: 'splitbutton',
        onclick: function() {
            editor.insertContent('<p class="mce[dsp:tint]" style="line-height: calc(var(--dft-line-height) * 50%); font-size: calc(var(--dft-font-size) * 50%);">&nbsp;</p>');
        },
        menu: [{
            text: '•\xa0\xBD Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="mce[dsp:tint]" style="line-height: calc(var(--dft-line-height) * 50%); font-size: calc(var(--dft-font-size) * 50%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa0\xBE Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="mce[dsp:tint]" style="line-height: calc(var(--dft-line-height) * 75%); font-size: calc(var(--dft-font-size) * 75%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa01\xBD Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="mce[dsp:tint]" style="line-height: calc(var(--dft-line-height) * 150%); font-size: calc(var(--dft-font-size) * 150%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa02 Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="mce[dsp:tint]" style="line-height: calc(var(--dft-line-height) * 200%); font-size: calc(var(--dft-font-size) * 200%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa02\xBD Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="mce[dsp:tint]" style="line-height: calc(var(--dft-line-height) * 250%); font-size: calc(var(--dft-font-size) * 250%);">&nbsp;</p>');
            }
        }, {
            text: '•\xa03 Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="mce[dsp:tint]" style="line-height: calc(var(--dft-line-height) * 300%); font-size: calc(var(--dft-font-size) * 300%);">&nbsp;</p>');
            }
        }]
    });
});

/*
 * EOF:     add-vertical-space/plugin.js
 * Build:   200126-1
 *
 */
