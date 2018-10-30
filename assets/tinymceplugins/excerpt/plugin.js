/**
 * Plugin Name: TinyMCE Excerpt Plugin
 * Plugin URI: http:www.xidipity.com
 * Build: 81030
 * Author: John Baer
 * Description: A TinyMCE Plugin to add excerpt template to the MCE Visual Editor
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('excerpt', function( editor, url ) {
        editor.addButton( 'excerpt', {
            title: 'Excerpt',
            icon: 'mce-excerpt',
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjQiIGhl%0D%0AaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIw%0D%0AMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KICA8cGF0%0D%0AaCBkPSJNIDkgMjIgQyA4LjQ0OCAyMiA4IDIxLjU1MiA4IDIxIEwgOCAxOCBMIDQgMTggQyAyLjg5%0D%0ANSAxOCAyIDE3LjEwNSAyIDE2IEwgMiA0IEMgMiAyLjg5IDIuOSAyIDQgMiBMIDIwIDIgQyAyMS4x%0D%0AMDUgMiAyMiAyLjg5NSAyMiA0IEwgMjIgMTYgQyAyMiAxNy4xMDUgMjEuMTA1IDE4IDIwIDE4IEwg%0D%0AMTMuOSAxOCBMIDEwLjIgMjEuNzEgQyAxMCAyMS45IDkuNzUgMjIgOS41IDIyIEwgOS41IDIyIEwg%0D%0AOSAyMiBNIDEwIDE2IEwgMTAgMTkuMDggTCAxMy4wOCAxNiBMIDIwIDE2IEwgMjAgNCBMIDQgNCBM%0D%0AIDQgMTYgTCAxMCAxNiBaIiBzdHlsZT0iZmlsbDogcmdiKDMzLCAzMywgMzMpOyIvPgo8L3N2Zz4=',
            onclick: function() {
              var html = '<p class="excerpt-template">Place excerpt here ...<span class="hidden"><!--more--></span></p>';
              editor.insertContent(html);
            }
        });
    });
})();
