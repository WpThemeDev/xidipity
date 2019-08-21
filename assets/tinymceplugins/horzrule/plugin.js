/*
 *  Xidipity WordPress Theme
 *
 *  file:   plugin.js
 *  build:  90819.1a
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
                        editor.insertContent('<hr class="wd:100%" />');
                    }
                },
                {
                    text: '• Double',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<hr class="double" />');
                    }
                },
                {
                    text: '• Double Wide',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<hr class="double wd:100%" />');
                    }
                },
                {
                    text: '• Gradient',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<hr class="gradient" />');
                    }
                },
                {
                    text: '• Gradient Wide',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<hr class="gradient wd:100%" />');
                    }
                },
                {
                    text: '• Emblem',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<div id="erFxCenter"><div class="erfx-center wd:100%"><hr class="alx:right" /></div><div class="erfx-center"><p><i class="fas fa-square fg-bas-400">&#x200B;</i></p></div><div class="erfx-center wd:100%"><hr class="alx:left" /></div></div>');
                    }
                },
                {
                    text: '• Emblem Wide',
                    icon: false,
                    onclick: function() {
                        editor.insertContent('<div id="erFxCenter"><div class="erfx-center wd:100%"><hr class="wd:100%" /></div><div class="erfx-center"><p><i class="fas fa-square fg-bas-400">&#x200B;</i></p></div><div class="erfx-center wd:100%"><hr class="wd:100%" /></div></div>');
                    }
                }
            ],

            onPostRender: function() {
                // Select the first item by default
                this.value = '<hr />';
            }

        });
    });
})();
