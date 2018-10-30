/**
   * Plugin Name: TinyMCE Vertical Spacers Plugin
   * Plugin URI: http:www.xidipity.com
   * Version: 80906.1
   * Author: John Baer
   * Description: A TinyMCE Plugin to add horizonal spacer snippets to the MCE Visual Editor
   * License: GPL2
   */
   
  var imgvertsp = '/wp-content/themes/xidipity/assets/tinymceplugins/vertspacers/mce-vert-spacer.svg';

  (function() {
    tinymce.PluginManager.add('vspacer', function(editor, url) {
      editor.addButton('vspacer', {
        title: 'Vertical Spacers',
        image: imgvertsp,
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