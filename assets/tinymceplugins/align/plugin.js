/**
   * Plugin Name: TinyMCE txtAlign Plugin
   * Plugin URI: http:www.xidipity.com
   * Version: 80906.1
   * Author: John Baer
   * Description: A TinyMCE Plugin to add alignment to custom dropdown to the MCE Visual Editor
   * License: GPL2
   */
   
  (function() {
    tinymce.PluginManager.add('txtalign', function(editor, url) {
      editor.addButton('txtalign', {
        type: 'splitbutton',
        title: 'Align Left',
        icon: 'alignleft',
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