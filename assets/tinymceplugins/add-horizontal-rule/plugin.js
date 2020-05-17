/**
    * WordPress Xidipity Theme
    * Tinymce add-horizontal-rule plugin 
    *
    * ###:  plugin.js
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
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
                editor.insertContent('<hr class="rul:solid-thin wd:70%" />');
            }
        }, {
            text: '•\xa0Single Wide',
            icon: false,
            onclick: function() {
                editor.insertContent('<hr class="rul:solid-thin" />');
            }
        }, {
            text: '•\xa0Double Narrow',
            icon: false,
            onclick: function() {
                editor.insertContent('<hr class="rul:double wd:70%" />');
            }
        }, {
            text: '•\xa0Double Wide',
            icon: false,
            onclick: function() {
                editor.insertContent('<hr class="rul:double" />');
            }
        }, {
            text: '•\xa0Gradient Narrow',
            icon: false,
            onclick: function() {
                editor.insertContent('<hr class="rul:gradient wd:70%" />');
            }
        }, {
            text: '•\xa0Gradient Wide',
            icon: false,
            onclick: function() {
                editor.insertContent('<hr class="rul:gradient" />');
            }
        }, {
            text: '•\xa0Emblem Narrow',
            icon: false,
            onclick: function() {
                editor.insertContent('<div class="fx:r fxa:3 fxc:3 wd:100%"><div class="fx:r fxa:2 fxc:3 wd:25% sm)wd:30%"><div class="bg:bas-400 ln wd:100%">&#8203;</div></div><div class="fx:r fxa:3 fxc:3 mar:hrz+1.5 fg:bas-500 fnt:weight-bold wd:3">/<span style="width:1px;">&#8203;</span>/</div><div class="fx:r fxa:1 fxc:3 wd:25% sm)wd:30%"><div class="bg:bas-400 ln wd:100%">&#8203;</div></div></div>');
            }
        }, {
            text: '•\xa0Emblem Wide',
            icon: false,
            onclick: function() {
                editor.insertContent('<div class="fx:r fxa:3 fxc:3 wd:100%"><div class="fx:r fxa:2 fxc:3 wd:50%"><div class="bg:bas-400 ln wd:100%">&#8203;</div></div><div class="fx:r fxa:3 fxc:3 mar:hrz+1.5 fg:bas-500 fnt:weight-bold wd:3">/<span style="width:1px;">&#8203;</span>/</div><div class="fx:r fxa:1 fxc:3 wd:50%"><div class="bg:bas-400 ln wd:100%">&#8203;</div></div></div>');
            }
        }],

        onPostRender: function() {
            // default
            this.value = '<hr class="rul:solid-medium" />';
        }

    });
});

/*
 * EOF: add-horizontal-rule / plugin.js / 24200520
 */
