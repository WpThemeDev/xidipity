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
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjQiIGhl%0D%0AaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIw%0D%0AMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGgg%0D%0AZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUg%0D%0AMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYt%0D%0AMkg1eiIgc3R5bGU9ImZpbGw6IHJnYigzMywgMzMsIDMzKTsiLz4KICA8cmVjdCB4PSI0Ljk4NSIg%0D%0AeT0iMTguOTc3IiB3aWR0aD0iMTQuMDEzIiBoZWlnaHQ9IjIuMDM4IiBzdHlsZT0iZmlsbDogcmdi%0D%0AKDExNywgMTE3LCAxMTcpOyIvPgo8L3N2Zz4=',
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
