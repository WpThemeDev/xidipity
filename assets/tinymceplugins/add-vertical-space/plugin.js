/**
    * WordPress Xidipity Theme
    * Tinymce add-vertical-space plugin 
    *
    * ###:  plugin.js
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

tinymce.PluginManager.add('add_vert_space', function(editor, url) {
    editor.addButton('add_vert_space', {
        title: '\xBD Vertical Space',
        icon: false,
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAg%0D%0AMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSAz%0D%0AIDE5IEwgMjEgMTkgTCAyMSAxMyBMIDMgMTMgTCAzIDE5IFogTSAzIDExIEwgMjEgMTEgTCAyMSA5%0D%0AIEwgMyA5IEwgMyAxMSBaIE0gMyA1IEwgMyA3IEwgMjEgNyBMIDIxIDUgTCAzIDUgWiIgc3R5bGU9%0D%0AImZpbGw6IHJnYigzMywgMzMsIDMzKTsiLz4KPC9zdmc+',
        type: 'splitbutton',
        onclick: function() {
            editor.insertContent('<p class="vs:1/2">&nbsp;</p>');
        },
        menu: [{
            text: '•\xa0\xBD Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="vs:1/2">&nbsp;</p>');
            }
        }, {
            text: '•\xa0\xBE Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="vs:3/4">&nbsp;</p>');
            }
        }, {
            text: '•\xa01 Line',
            icon: false,
            onclick: function() {
                editor.insertContent('<p>&nbsp;</p>');
            }
        }, {
            text: '•\xa01\xBD Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="vs:1-1/2">&nbsp;</p>');
            }
        }, {
            text: '•\xa02 Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="vs:2">&nbsp;</p>');
            }
        }, {
            text: '•\xa02\xBD Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="vs:2-1/2">&nbsp;</p>');
            }
        }, {
            text: '•\xa03 Lines',
            icon: false,
            onclick: function() {
                editor.insertContent('<p class="vs:3">&nbsp;</p>');
            }
        }]
    });
});

/*
 * EOF: add-vertical-space / plugin.js / 24200520
 */
