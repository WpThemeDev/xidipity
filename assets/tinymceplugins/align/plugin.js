/*
 *  Xidipity WordPress Theme
 *
 *  file:   plugin.js
 *  build:  90817.1
 *  descrp: text align plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
tinymce.PluginManager.add('txtalign', function(editor, url) {
  editor.addButton('txtalign', {
    type: 'splitbutton',
    title: 'Align Left',
    icon: 'mce-alignleft',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThI%0D%0AM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+%0D%0APHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==',
    onclick: function(e) {
      tinymce.execCommand(this.value);
    },
    menu: [{
        icon: false,
        text: '• Align Center',
        onclick: function() {
          tinyMCE.execCommand('JustifyCenter');
        }
      },
      {
        icon: false,
        text: '• Align Right',
        onclick: function() {
          tinyMCE.execCommand('JustifyRight');
        }
      },
      {
        icon: false,
        text: '• Justify',
        onclick: function() {
          tinyMCE.execCommand('JustifyFull');
        }
      }
    ],
    
    onPostRender: function() {
      // Select the first item by default
      this.value ='JustifyLeft';
    }

  });
});
})();
