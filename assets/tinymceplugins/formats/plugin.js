/**
   * Plugin Name: TinyMCE Formats Plugin
   * Plugin URI: http:www.xidipity.com
   * Build: 81030
   * Author: John Baer
   * Description: A TinyMCE Plugin to add alignment to custom dropdown to the MCE Visual Editor
   * License: GPL2
   * Comment: Secondary formats underline strikethrough superscript subscript removeformat
   */
   
  (function() {
    tinymce.PluginManager.add('formats', function(editor, url) {
      editor.addButton('formats', {
        type: 'splitbutton',
        title: 'Underline (Ctrl+U)',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJu%0D%0Ab25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0x%0D%0ALjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6%0D%0AbS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
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
