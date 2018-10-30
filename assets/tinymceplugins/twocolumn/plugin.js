/**
 * Plugin Name: TinyMCE Two Column Plugin
 * Plugin URI: http:www.xidipity.com
 * Version: 1.0
 * Author: John Baer
 * Description: A TinyMCE Plugin to add two column format to the MCE Visual Editor
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('twocolumn', function( editor, url ) {
        editor.addButton( 'twocolumn', {
            title: 'Two Column',
            icon: 'mce-column',
            image: '/wp-content/themes/xidipity/assets/tinymceplugins/twocolumn/mce-column.svg',
            onclick: function() {
              var html = '<table id="twocol" class="twocolumn">' + String.fromCharCode(13) +
              '  <tbody>' + String.fromCharCode(13) +
              '    <tr>' + String.fromCharCode(13) +
              '      <td></td>' + String.fromCharCode(13) +
              '      <td></td>' + String.fromCharCode(13) +
              '    </tr>' + String.fromCharCode(13) +
              '  </tbody>' + String.fromCharCode(13) +
              '</table>';
              editor.insertContent(html);
            }
        });
    });
})();
