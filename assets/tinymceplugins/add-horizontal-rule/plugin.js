/*
 * WordPress Xidipity Theme JS File
 *
 * File Name:       add-horizontal-rule/plugin.js
 * Function:        tinymce horizontal rule plugin
 * Build:           200104-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version			1.0
 * @since			0.9
 * @link            https://www.tiny.cloud/docs/
 *
 */

tinymce.PluginManager.add('add_horz_rule', function(editor, url) {
    editor.addButton('add_horz_rule', {
        type: 'splitbutton',
        title: 'Horizontal Rule',
		icon: false,
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjAi%0D%0AIGlkPSJMYXllcl8xIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVu%0D%0AZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVj%0D%0AaXNpb24iIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94%0D%0APSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMjQgMTAyNCIgeG1sbnM9%0D%0AImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+Y29tcGFzc2VzIGljb248L3Rp%0D%0AdGxlPgogIDxkZXNjPmNvbXBhc3NlcyBpY29uIGZyb20gdGhlIEljb25FeHBlcmllbmNlLmNvbSBP%0D%0ALUNvbGxlY3Rpb24uIENvcHlyaWdodCBieSBJTkNPUlMgR21iSCAod3d3LmluY29ycy5jb20pLjwv%0D%0AZGVzYz4KICA8bGluZSBzdHlsZT0ic3Ryb2tlLXdpZHRoOiA0cHg7IHN0cm9rZTogcmdiKDMzLCAz%0D%0AMywgMzMpOyBmaWxsOiBub25lOyIgeDE9IjEyIiB5MT0iMi43MjEiIHgyPSIxMiIgeTI9IjIxLjI3%0D%0AOSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgMSwgLTEsIDAsIDIzLjk5OTk5OSwgLTAuMDAwMDAxKSIv%0D%0APgo8L3N2Zz4=',
        onclick: function() {
            editor.insertContent(this.value);
        },
        menu: [{
            text: '•\xa0Single Narrow',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
            }
        }, {
            text: '•\xa0Single Wide',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="wd:100%" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
            }
        }, {
            text: '•\xa0Double Narrow',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="double" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
            }
        }, {
            text: '•\xa0Double Wide',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="double wd:100%" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
            }
        }, {
            text: '•\xa0Gradient Narrow',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="gradient" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
            }
        }, {
            text: '•\xa0Gradient Wide',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="gradient wd:100%" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
            }
        }, {
            text: '•\xa0Emblem Narrow',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 91211.1a/mce/rule/emblem/center  --><div class="horz:align-center wd:80%"><div class="fx:r fa:1 fb:3 fc:5"><div class="fd:2 fe:1"><hr class="horz:align-right wd:100%" /></div><div class="fd:1 fe:1 mar:horz-2"><span class="fnt:weight-bolder fnt:size-larger" style="margin-top: -0.125rem;">§</span></div><div class="fd:2 fe:1"><hr class="horz:align-left wd:100%" /></div></div></div><!-- /xwpt: 91211.1a/mce/rule/emblem/center -->');
            }
        }, {
            text: '•\xa0Emblem Wide',
            icon: false,
            onclick: function() {
                editor.insertContent('<!-- xwpt: 91211.1a/mce/rule/emblem/center  --><div class="horz:align-center wd:100%"><div class="fx:r fa:1 fb:3 fc:5"><div class="fd:2 fe:1"><hr class="horz:align-right wd:100%" /></div><div class="fd:1 fe:1 mar:horz-2"><span class="fnt:weight-bolder fnt:size-larger" style="margin-top: -0.125rem;">§</span></div><div class="fd:2 fe:1"><hr class="horz:align-left wd:100%" /></div></div></div><!-- /xwpt: 91211.1a/mce/rule/emblem/center -->');
            }
        }],

        onPostRender: function() {
            // Select the first item by default
            this.value = '<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->';
        }

    });
});

/*
 * EOF:     add-horizontal-rule/plugin.js
 * Build:   200104-1
 *
 */
