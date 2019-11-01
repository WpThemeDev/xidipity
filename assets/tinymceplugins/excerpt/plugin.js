/*
 *  Xidipity WordPress Theme
 *
 *  file:   excerpt/plugin.js
 *  build:  91025.1a
 *  descrp: excerpt plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
tinymce.PluginManager.add('excerpt', function( editor, url ) {
    editor.addButton( 'excerpt', {
        title: 'Insert excerpt',
        icon: 'mce-excerpt',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+PC9zdmc+',
        onclick: function() {
            var dom = editor.dom;
            var uniqueID = dom.uniqueId();                                
            var html = '<!-- xwpt: 90927.1b/mce/toolbar/excerpt     --><table class="exc" cellspacing="0"><tbody><tr><td class="exc:content"><p id="' + uniqueID + '">Type excerpt here ...</p></td><td class="exc:tag"><!--more--></td></tr></tbody></table><!-- /xwpt: 90927.1b/mce/toolbar/excerpt    -->';
            editor.insertContent(html);
            var newExcerpt = dom.select('p#' + uniqueID)[0];
            editor.selection.setCursorLocation(newExcerpt);                
        }
    });
});
/*
    eof: excerpt/plugin.js
*/
