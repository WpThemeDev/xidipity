/*
 *  Xidipity WordPress Theme
 *
 *  file:   twocolumn/plugin.js
 *  build:  91020.1a
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
            title: 'Insert 2 column template',
            icon: 'mce-column',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNLTc0IDI5aDQ4djQ4aC00OFYyOXpNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTMgMTJoN3YxLjVoLTd6bTAtMi41aDdWMTFoLTd6bTAgNWg3VjE2aC03ek0yMSA0SDNjLTEuMSAwLTIgLjktMiAydjEzYzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNWgtOVY2aDl2MTN6Ii8+PC9zdmc+',
            onclick: function() {
                var html = '<!-- xwpt: 90927.1a/mce/toolbar/multi-col   --><table class="cols:auto"><tbody><tr><td><p>&nbsp;</p></td></tr></tbody></table><!-- /xwpt: 90927.1a/mce/toolbar/multi-col  -->';
                editor.insertContent(html);
            }
        });
    });
})();
/*
    eof: twocolumn/plugin.js
*/
