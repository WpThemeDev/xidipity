/*
 *  Xidipity WordPress Theme
 *
 *  file:   vertspacer/plugin.js
 *  build:  90927.1a
 *  descrp: vertical Space plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
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
          editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-1/2">½×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
        }
      },
      {
        text: '• 3/4 Height',
        icon: false,
        onclick: function() {
          editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-3/4">¾×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
        }
      },
      {
        text: '• Single Height',
        icon: false,
        onclick: function() {
          editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-single">1×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
        }
      },
      {
        text: '• Double Height',
        icon: false,
        onclick: function() {
          editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-double">2×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
        }
      },
      {
        text: '• Triple Height',
        icon: false,
        onclick: function() {
          editor.insertContent('<!-- xwpt: 90927.1a/mce/toolbar/vertspacer  --><p class="vert:spacer-triple">3×</p><!-- /xwpt: 90927.1a/mce/toolbar/vertspacer -->');
        }
      }
    ]
  });
});
})();
/*
    eof: vertspacer/plugin.js
*/
