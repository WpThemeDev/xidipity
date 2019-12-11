/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        insert excerpt template into tinymce HTML code
 * File Name:       add-excerpt/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91211.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/add-excerpt/
 */
tinymce.PluginManager.add('excerpt', function( editor, url ) {
    editor.addButton( 'excerpt', {
        title: 'Insert excerpt',
        icon: 'mce-excerpt',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+PC9zdmc+',
        onclick: function() {
            var dom = editor.dom;
            var uniqueID = dom.uniqueId();                                
            var html = '<!-- xwpt: 90927.1b/mce/toolbar/excerpt     --><table class="exc dsp:none!web" cellspacing="0"><tbody><tr><td class="exc:content" id="' + uniqueID + '"></td><td class="exc:tag"><!--more--></td></tr></tbody></table><!-- /xwpt: 90927.1b/mce/toolbar/excerpt    -->';
            editor.insertContent(html);
            var newExcerpt = dom.select('p#' + uniqueID)[0];
            editor.selection.setCursorLocation(newExcerpt);                
        }
    });
});
/**
 *  eof: add-excerpt/plugin.js
 */
