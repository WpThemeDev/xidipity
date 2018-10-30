/**
 * Plugin Name: TinyMCE Excerpt Plugin
 * Plugin URI: http:www.xidipity.com
 * Version: 1.0
 * Author: John Baer
 * Description: A TinyMCE Plugin to add excerpt template to the MCE Visual Editor
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('excerpt', function( editor, url ) {
        editor.addButton( 'excerpt', {
            title: 'Excerpt',
            icon: 'mce-excerpt',
            image: '/wp-content/themes/xidipity/assets/tinymceplugins/excerpt/mce-excerpt.svg',
            onclick: function() {
              var html = '<p class="excerpt-template">Place excerpt here ...<span class="hidden"><!--more--></span></p>';
              editor.insertContent(html);
            }
        });
    });
})();
