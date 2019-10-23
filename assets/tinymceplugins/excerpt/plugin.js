/*
 *  Xidipity WordPress Theme
 *
 *  file:   excerpt/plugin.js
 *  build:  91020.1a
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
            title: 'Insert excerpt',
            icon: 'mce-excerpt',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+PC9zdmc+',
            onclick: function() {
              var html = '<!-- xwpt: 90927.1b/mce/toolbar/excerpt     --><table id="excerpt" cellspacing="0"><tbody><tr><td class="excerpt:txt">Type excerpt here ...</td><td class="excerpt:tag"><!--more--></td></tr></tbody></table><!-- /xwpt: 90927.1b/mce/toolbar/excerpt    -->';
              editor.insertContent(html);
            }
        });
    });
})();
/*
    eof: excerpt/plugin.js
*/
