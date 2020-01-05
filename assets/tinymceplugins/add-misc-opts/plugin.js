/*
 * WordPress Xidipity Theme JS File
 *
 * File Name:       add-misc-opts/plugin.js
 * Function:        tinymce misc opts plugin
 * Build:           200104-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version      	1.0
 * @since      		0.9
 * @link            https://www.tiny.cloud/docs/
 *
 */

tinymce.PluginManager.add('add_misc_opts', function(editor, url) {
    editor.addButton('add_misc_opts', {
        type: 'splitbutton',
        title: 'Block Quote',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNSAxN2gzbDItNFY3SDR2NmgzbC0yIDR6bTEwIDBoM2wyLTRWN2gtNnY2aDNsLTIgNHoiLz48L3N2Zz4=',
        onclick: function() {
            editor.execCommand('mceBlockQuote');
        },
        menu: [{
            icon: false,
            text: '•\xa0Block Quote',
            onclick: function() {
                editor.execCommand('mceBlockQuote');
            }
        }, {
            icon: false,
            text: '•\xa0Excerpt',
            onclick: function() {
              var dom = editor.dom;
              var uniqueID = dom.uniqueId();                                
              var html = '<!-- xwpt: 90927.1b/mce/toolbar/excerpt     --><table class="exc dsp:none!web" cellspacing="0"><tbody><tr><td class="exc:content" id="' + uniqueID + '"></td><td class="exc:tag"><!--more--></td></tr></tbody></table><!-- /xwpt: 90927.1b/mce/toolbar/excerpt    -->';
              editor.insertContent(html);
              var newExcerpt = dom.select('p#' + uniqueID)[0];
              editor.selection.setCursorLocation(newExcerpt);
            }
        }],
    });
});

/*
 * EOF:     add-misc-opts/plugin.js
 * Build:   200104-1
 *
 */
