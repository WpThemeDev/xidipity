/**
   * Plugin Name: TinyMCE font weight Plugin
   * Plugin URI: http:www.xidipity.com
   * Version: 80906.1
   * Author: John Baer
   * Description: A TinyMCE Plugin to add font weight to selected text in the MCE Visual Editor
   * License: GPL2
   * Comment: Available font weights are not verified.
   */
   
  var imgbold = '/wp-content/themes/xidipity/assets/tinymceplugins/fntwgt/dft400.svg';

  (function() {
    tinymce.PluginManager.add('fntwgt', function(editor, url) {
      editor.addButton('fntwgt', {
        type: 'splitbutton',
        title: 'Semi Bold',
        image: imgbold,
        onclick: function(e) {
          editor.formatter.toggle('wgt600');
        },
      menu: [{
          icon: false,
          text: '• Thin',
          onclick: function() {
            editor.formatter.toggle('wgt100');
          }
        },
        {
          icon: false,
          text: '• Xtra Light',
          onclick: function() {
            editor.formatter.toggle('wgt200');
          }
        },
        {
          icon: false,
          text: '• Light',
          onclick: function() {
            editor.formatter.toggle('wgt300');
          }
        },
        {
          icon: false,
          text: '• Normal',
          onclick: function() {
            editor.formatter.toggle('wgt400');
          }
        },
        {
          icon: false,
          text: '• Medium',
          onclick: function() {
            editor.formatter.toggle('wgt500');
          }
        },
        {
          icon: false,
          text: '• Semi Bold',
          onclick: function() {
            editor.formatter.toggle('wgt600');
          }
        },
        {
          icon: false,
          text: '• Bold',
          onclick: function() {
            editor.formatter.toggle('wgt700');
          }
        },
        {
          icon: false,
          text: '• Xtra Bold',
          onclick: function() {
            editor.formatter.toggle('wgt800');
          }
        },
        {
          icon: false,
          text: '• Black',
          onclick: function() {
            editor.formatter.toggle('wgt900');
          }
        }
      ]
      });
    });
  })();