/**
 * Plugin Name: TinyMCE Full Screen Plugin
 * Plugin URI: http:www.xidipity.com
 * Version: 8.07.07
 * Author: John Baer
 * Description: A TinyMCE Plugin to toggle editor to and from full screen mode
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('xscreen', function( editor, url ) {
        editor.addButton( 'xscreen', {
            title: 'Full Screen',
            icon: 'mce-fullscreen',
            image: '/wp-content/themes/xidipity/assets/tinymceplugins/fullscreen/mce-fullscreen.svg',
            onclick: function() {
              tinymce.execCommand('mceFullscreen');
            }
        });
    });
})();
