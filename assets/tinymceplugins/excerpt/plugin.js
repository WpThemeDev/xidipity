/**
 * Plugin Name: TinyMCE Excerpt Plugin
 * Plugin URI: http:www.xidipity.com
 * Build: 90115.1
 * Author: John Baer
 * Description: A TinyMCE Plugin to add excerpt template to the MCE Visual Editor
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('excerpt', function( editor, url ) {
        editor.addButton( 'excerpt', {
            title: 'Excerpt',
            icon: 'mce-excerpt',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0%0D%0ASDBWMHoiLz48cGF0aCBkPSJNMjAgMkg0Yy0xLjEgMC0yIC45LTIgMnYxOGw0LTRoMTRjMS4xIDAg%0D%0AMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptMCAxNEg2bC0yIDJWNGgxNnYxMnoiLz48L3N2Zz4=',
            onclick: function() {
              var html = '<!-- Template: excerpt -->' + String.fromCharCode(13) +
              '<p class="excerpt-template">Place excerpt here ...<span class="hidden"><!--more--></span></p>' + String.fromCharCode(13) +
              '<p>&nbsp;</p>' + String.fromCharCode(13) +
              '<!-- End Template -->';
              editor.insertContent(html);
            }
        });
    });
})();
