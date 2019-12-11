/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        insert vertical spacer template into tinymce HTML code
 * File Name:       add-vertical-space/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91211.1a
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
            text: '•\xa01/2 Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-1/2">½×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
            }
        }, {
            text: '•\xa03/4 Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-3/4">¾×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
            }
        }, {
            text: '•\xa0Single Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-single">1×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
            }
        }, {
            text: '•\xa0Double Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-double">2×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
            }
        }, {
            text: '•\xa0Triple Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-triple">3×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
            }
        }]
    });
});
/**
 *  eof: add-vertical-space/plugin.js
 */
