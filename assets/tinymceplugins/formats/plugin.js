/**
   * Plugin Name: TinyMCE Formats Plugin
   * Plugin URI: http:www.xidipity.com
   * Version: 80906.1
   * Author: John Baer
   * Description: A TinyMCE Plugin to add alignment to custom dropdown to the MCE Visual Editor
   * License: GPL2
   * Comment: Secondary formats underline strikethrough superscript subscript removeformat
   */
   
  var imgunderline = '/wp-content/themes/xidipity/assets/tinymceplugins/formats/underline.svg';

  (function() {
    tinymce.PluginManager.add('formats', function(editor, url) {
      editor.addButton('formats', {
        type: 'splitbutton',
        title: 'Underline (Ctrl+U)',
        image: imgunderline,
        onclick: function(e) {
          tinymce.execCommand(this.value);
        },
        menu: [
          {
            icon: false,
            text: '• Strike through',
            onclick: function() {
              tinyMCE.execCommand('strikethrough');
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
          {
            icon: false,
            text: '• Remove format',
            onclick: function() {
              tinyMCE.execCommand('removeformat');
            }
          }
        ],
        
        onPostRender: function() {
          // Select the first item by default
          this.value ='Underline';
        }
      });
    });
  })();