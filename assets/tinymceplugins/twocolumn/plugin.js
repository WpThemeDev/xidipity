/*
 *  Xidipity WordPress Theme
 *
 *  file:   plugin.js
 *  build:  90817.1
 *  descrp: two column plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
    tinymce.PluginManager.add('twocolumn', function( editor, url ) {
        editor.addButton( 'twocolumn', {
            title: 'Two Column',
            icon: 'mce-column',
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjQiIGhl%0D%0AaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIw%0D%0AMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KICA8cGF0%0D%0AaCBkPSJNIDMgMTUgTCAxMSAxNSBMIDExIDEzIEwgMyAxMyBMIDMgMTUgWiBNIDMgMTkgTCAxMSAx%0D%0AOSBMIDExIDE3IEwgMyAxNyBMIDMgMTkgWiBNIDMgMTEgTCAxMSAxMSBMIDExIDkgTCAzIDkgTCAz%0D%0AIDExIFogTSAzIDUgTCAzIDcgTCAxMSA3IEwgMTEgNSBMIDMgNSBaIE0gMTMgNSBMIDIxIDUgTCAy%0D%0AMSAxOSBMIDEzIDE5IEwgMTMgNSBaIiBzdHlsZT0iZmlsbDogcmdiKDMzLCAzMywgMzMpOyIvPgog%0D%0AIDxyZWN0IHg9IjEyLjk1IiB5PSI0Ljk5OCIgd2lkdGg9IjguMDQyIiBoZWlnaHQ9IjE0LjAwMyIg%0D%0Ac3R5bGU9ImZpbGw6IHJnYigxMTcsIDExNywgMTE3KTsiLz4KPC9zdmc+',
            onclick: function() {
                var html = '<p><!-- mce: embedded/table/two column --></p><table id="twocol" class="twocolumn"><tbody><tr><td></td><td></td></tr></tbody></table><p><!-- /mce: embedded/table/two column --></p>';
                editor.insertContent(html);
            }
        });
    });
})();
