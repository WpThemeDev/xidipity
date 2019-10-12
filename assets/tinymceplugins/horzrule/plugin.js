/*
 *  Xidipity WordPress Theme
 *
 *  file:   horzrule/plugin.js
 *  build:  91001.1a
 *  descrp: horizonal rule plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
    tinymce.PluginManager.add('hrule', function(editor, url) {
        editor.addButton('hrule', {
            type: 'splitbutton',
            title: 'Horizonal Rule',
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjAi%0D%0AIGlkPSJMYXllcl8xIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVu%0D%0AZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVj%0D%0AaXNpb24iIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94%0D%0APSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMjQgMTAyNCIgeG1sbnM9%0D%0AImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+Y29tcGFzc2VzIGljb248L3Rp%0D%0AdGxlPgogIDxkZXNjPmNvbXBhc3NlcyBpY29uIGZyb20gdGhlIEljb25FeHBlcmllbmNlLmNvbSBP%0D%0ALUNvbGxlY3Rpb24uIENvcHlyaWdodCBieSBJTkNPUlMgR21iSCAod3d3LmluY29ycy5jb20pLjwv%0D%0AZGVzYz4KICA8bGluZSBzdHlsZT0ic3Ryb2tlLXdpZHRoOiA0cHg7IHN0cm9rZTogcmdiKDMzLCAz%0D%0AMywgMzMpOyBmaWxsOiBub25lOyIgeDE9IjEyIiB5MT0iMi43MjEiIHgyPSIxMiIgeTI9IjIxLjI3%0D%0AOSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgMSwgLTEsIDAsIDIzLjk5OTk5OSwgLTAuMDAwMDAxKSIv%0D%0APgo8L3N2Zz4=',
            onclick: function(e) {
                editor.insertContent(this.value);
            },
            menu: [{
                    text: '• Single Wide',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="wd:100%" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
                    }
                },
                {
                    text: '• Double',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="double" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
                    }
                },
                {
                    text: '• Double Wide',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="double wd:100%" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
                    }
                },
                {
                    text: '• Gradient',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="gradient" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
                    }
                },
                {
                    text: '• Gradient Wide',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr class="gradient wd:100%" /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->');
                    }
                },
                {
                    text: '• Emblem',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<!-- xwpt: 91001.1a/ui/rule/emblem/center   --><div class="horz:align-center wd:80%"><div class="fx:r fa:1 fb:3 fc:5"><div class="fd:2 fe:1"><hr class="horz:align-right wd:100%" /></div><div class="fd:1 fe:1 mar:horz-2">&#x1F5CE;</div><div class="fd:2 fe:1"><hr class="horz:align-left wd:100%" /></div></div></div><!-- /xwpt: 91001.1a/ui/rule/emblem/center  -->');
                    }
                },
                {
                    text: '• Emblem Wide',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<!-- xwpt: 91001.1a/ui/rule/emblem/center   --><div class="horz:align-center wd:100%"><div class="fx:r fa:1 fb:3 fc:5"><div class="fd:2 fe:1"><hr class="horz:align-right wd:100%" /></div><div class="fd:1 fe:1 mar:horz-2">&#x1F5CE;</div><div class="fd:2 fe:1"><hr class="horz:align-left wd:100%" /></div></div></div><!-- /xwpt: 91001.1a/ui/rule/emblem/center  -->');
                    }
                }
            ],

            onPostRender: function() {
                // Select the first item by default
                this.value = '<!-- xwpt: 91001.1a/mce/toolbar/horzrule    --><hr /><!-- /xwpt: 91001.1a/mce/toolbar/horzrule   -->';
            }

        });
    });
})();
/*
    eof: horzrule/plugin.js
*/
