/**
   * Plugin Name: TinyMCE Horizonal Rule Plugin
   * Plugin URI: http:www.xidipity.com
   * Version: 80906.1
   * Author: John Baer
   * Description: A TinyMCE Plugin to add horizonal rules to the MCE Visual Editor
   * License: GPL2
   */
   
  var imghorzrule = '/wp-content/themes/xidipity/assets/tinymceplugins/horzrule/mce-horz-rule.svg';

  (function() {
    tinymce.PluginManager.add('hrule', function(editor, url) {
      editor.addButton('hrule', {
        type: 'splitbutton',
        title: 'Horizonal Rule',
        image: imghorzrule,
        onclick: function(e) {
          editor.insertContent(this.value);
        },
        menu: [{
            text: '• Single Wide',
            icon: false,
            onclick: function() {
              editor.insertContent('<hr style="width:100%" />');
            }
          },
          {
            text: '• Double',
            icon: false,
            onclick: function() {
              editor.insertContent('<hr class="double" />');
            }
          },
          {
            text: '• Double Wide',
            icon: false,
            onclick: function() {
              editor.insertContent('<hr class="double" style="width:100%" />');
            }
          },
          {
            text: '• Gradient',
            icon: false,
            onclick: function() {
              editor.insertContent('<hr class="gradient" />');
            }
          },
          {
            text: '• Gradient Wide',
            icon: false,
            onclick: function() {
              editor.insertContent('<hr class="gradient" style="width:100%" />');
            }
          },
          {
            text: '• Emblem',
            icon: false,
            onclick: function() {
              editor.insertContent('<div class="hr-emblem w-4/5 mx-auto"><hr class="center-emblem-item" />' + String.fromCharCode(13) +
'<div class="center-emblem-item px-4 text-purple-dark">§</div>' + String.fromCharCode(13) +
'<hr class="center-emblem-item" /></div>');
            }
          },
          {
            text: '• Emblem Wide',
            icon: false,
            onclick: function() {
              editor.insertContent('<div class="hr-emblem w-full mx-auto"><hr class="center-emblem-item" />' + String.fromCharCode(13) +
'<div class="center-emblem-item px-4 text-purple-dark">§</div>' + String.fromCharCode(13) +
'<hr class="center-emblem-item" /></div>');
            }
          }
        ],

        onPostRender: function() {
          // Select the first item by default
          this.value ='<hr />';
        }

      });
    });
  })();