/**
   * Plugin Name: TinyMCE Vertical Spacers Plugin
   * Plugin URI: http:www.xidipity.com
   * Build: 81030
   * Author: John Baer
   * Description: A TinyMCE Plugin to add horizonal spacer snippets to the MCE Visual Editor
   * License: GPL2
   */
   
  (function() {
    tinymce.PluginManager.add('vspacer', function(editor, url) {
      editor.addButton('vspacer', {
        title: 'Vertical Spacers',
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAg%0D%0AMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSAz%0D%0AIDE5IEwgMjEgMTkgTCAyMSAxMyBMIDMgMTMgTCAzIDE5IFogTSAzIDExIEwgMjEgMTEgTCAyMSA5%0D%0AIEwgMyA5IEwgMyAxMSBaIE0gMyA1IEwgMyA3IEwgMjEgNyBMIDIxIDUgTCAzIDUgWiIgc3R5bGU9%0D%0AImZpbGw6IHJnYigzMywgMzMsIDMzKTsiLz4KPC9zdmc+',
        type: 'menubutton',
        menu: [{
            text: '• 1/2 Height',
            icon: false,
            onclick: function() {
              editor.insertContent('<p class="spacer-1/2">½×</p>');
            }
          },
          {
            text: '• 3/4 Height',
            icon: false,
            onclick: function() {
              editor.insertContent('<p class="spacer-3/4">¾×</p>');
            }
          },
          {
            text: '• Single Height',
            icon: false,
            onclick: function() {
              editor.insertContent('<p class="spacer-single">1×</p>');
            }
          },
          {
            text: '• Double Height',
            icon: false,
            onclick: function() {
              editor.insertContent('<p class="spacer-double">2×</p>');
            }
          },
          {
            text: '• Triple Height',
            icon: false,
            onclick: function() {
              editor.insertContent('<p class="spacer-triple">3×</p>');
            }
          }
        ]
      });
    });
  })();
