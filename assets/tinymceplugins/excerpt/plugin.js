/*
 *  Xidipity WordPress Theme
 *
 *  file:   excerpt/plugin.js
 *  build:  90927.1a
 *  descrp: excerpt plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
    tinymce.PluginManager.add('excerpt', function( editor, url ) {
        editor.addButton( 'excerpt', {
            title: 'Excerpt',
            icon: 'mce-excerpt',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0%0D%0ASDBWMHoiLz48cGF0aCBkPSJNMjAgMkg0Yy0xLjEgMC0yIC45LTIgMnYxOGw0LTRoMTRjMS4xIDAg%0D%0AMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptMCAxNEg2bC0yIDJWNGgxNnYxMnoiLz48L3N2Zz4=',
            onclick: function() {
              var html = '<!-- xwpt: 90927.1a/mce/toolbar/excerpt     --><div id="excerpt"><div class="excerpt-tr"><div class="excerpt-td">Place excerpt here ...<span class="excerpt-wp"><!--more--></span></div></div></div><!-- /xwpt: 90927.1a/mce/toolbar/excerpt    -->';
              editor.insertContent(html);
            }
        });
    });
})();
/*
    eof: excerpt/plugin.js
*/
