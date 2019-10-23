/*
 *  Xidipity WordPress Theme
 *
 *  file:   plugin.js
 *  build:  91020.1a
 *  descrp: format plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
tinymce.PluginManager.add('formats', function(editor, url) {
  editor.addButton('formats', {
    type: 'splitbutton',
    title: 'Text formats',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0yNCAyNEgwVjBoMjR2MjR6Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iYiI+PHVzZSB4bGluazpocmVmPSIjYSIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxwYXRoIGNsaXAtcGF0aD0idXJsKCNiKSIgZD0iTTIuNSA0djNoNXYxMmgzVjdoNVY0aC0xM3ptMTkgNWgtOXYzaDN2N2gzdi03aDNWOXoiLz48L3N2Zz4=',
    onclick: function(e) {
      tinymce.execCommand(this.value);
    },
    menu: [
      {
        icon: false,
        text: '• Underline',
        onclick: function() {
          tinyMCE.execCommand('underline');
        }
      },
      {
        icon: false,
        text: '• Strike through',
        onclick: function() {
          tinymce.execCommand('mceReplaceContent',false,'<del>{$selection}</del>');
        }
      },
      {
        icon: false,
        text: '• Super script',
        onclick: function() {
          tinyMCE.execCommand('superscript');
        }
      },
      {
        icon: false,
        text: '• Sub script',
        onclick: function() {
          tinyMCE.execCommand('subscript');
        }
      },
    ],
    
    onPostRender: function() {
      // Select the first item by default
      this.value ='Underline';
    }
  });
});
})();
