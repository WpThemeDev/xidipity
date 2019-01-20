/**
 * Plugin Name: TinyMCE Two Column Plugin
 * Plugin URI: http:www.xidipity.com
 * Build: 90120.1
 * Author: John Baer
 * Description: A TinyMCE Plugin to add two column format to the MCE Visual Editor
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('twocolumn', function( editor, url ) {
        editor.addButton( 'twocolumn', {
            title: 'Two Column',
            icon: 'mce-column',
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjQiIGhl%0D%0AaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIw%0D%0AMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KICA8cGF0%0D%0AaCBkPSJNIDMgMTUgTCAxMSAxNSBMIDExIDEzIEwgMyAxMyBMIDMgMTUgWiBNIDMgMTkgTCAxMSAx%0D%0AOSBMIDExIDE3IEwgMyAxNyBMIDMgMTkgWiBNIDMgMTEgTCAxMSAxMSBMIDExIDkgTCAzIDkgTCAz%0D%0AIDExIFogTSAzIDUgTCAzIDcgTCAxMSA3IEwgMTEgNSBMIDMgNSBaIE0gMTMgNSBMIDIxIDUgTCAy%0D%0AMSAxOSBMIDEzIDE5IEwgMTMgNSBaIiBzdHlsZT0iZmlsbDogcmdiKDMzLCAzMywgMzMpOyIvPgog%0D%0AIDxyZWN0IHg9IjEyLjk1IiB5PSI0Ljk5OCIgd2lkdGg9IjguMDQyIiBoZWlnaHQ9IjE0LjAwMyIg%0D%0Ac3R5bGU9ImZpbGw6IHJnYigxMTcsIDExNywgMTE3KTsiLz4KPC9zdmc+',
            onclick: function() {
              var html = '<!-- Template: two / columns -->' + String.fromCharCode(13) +
              '<table id="twocol" class="twocolumn">' + String.fromCharCode(13) +
              '  <tbody>' + String.fromCharCode(13) +
              '    <tr>' + String.fromCharCode(13) +
              '      <td></td>' + String.fromCharCode(13) +
              '      <td></td>' + String.fromCharCode(13) +
              '    </tr>' + String.fromCharCode(13) +
              '  </tbody>' + String.fromCharCode(13) +
              '</table>' + String.fromCharCode(13) +
              '<p>&nbsp;</p>' + String.fromCharCode(13) +
              '<!-- End Template -->';
              editor.insertContent(html);
            }
        });
    });
})();
