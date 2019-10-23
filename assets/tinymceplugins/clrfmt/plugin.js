/*
 *  Xidipity WordPress Theme
 *
 *  file:   clrfmt/plugin.js
 *  build:  91020.1a
 *  descrp: clrfmt plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
    tinymce.PluginManager.add('clrfmt', function( editor, url ) {
        editor.addButton( 'clrfmt', {
            title: 'clear format',
            icon: 'mce-clrfmt',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgOFY1SDYuMzlsMyAzaDEuODNsLS41NSAxLjI4IDIuMDkgMi4xTDE0LjIxIDh6TTMuNDEgNC44NkwyIDYuMjdsNi45NyA2Ljk3TDYuNSAxOWgzbDEuNTctMy42NkwxNi43MyAyMWwxLjQxLTEuNDF6Ii8+PC9zdmc+',
            cmd: 'removeformat',
        });
    });
})();
/*
    eof: clrfmt/plugin.js
*/
