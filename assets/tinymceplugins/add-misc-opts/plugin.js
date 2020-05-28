/**
    * WordPress Xidipity Theme
    * Tinymce add-misc-opts plugin
    *
    * ###:  plugin.js
    * bld:  24200527
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
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
            text: '•\xa0Content Frame',
            onclick: function () {
                var seltxt = editor.selection.getContent({format : 'text'});
                if (seltxt.length > 0)
                    {
                        editor.execCommand('mceReplaceContent', false, '<!--  xwp:EDITOR/CONTENT/FRAME --><table class="frame"><tr><td>{$selection}</td></tr></table><!-- /xwp:EDITOR/CONTENT/FRAME -->');
                    } else {
                        var dom = editor.dom;
                        var uniqueID = dom.uniqueId();
                        var html = '<!--  xwp:EDITOR/CONTENT/FRAME --><table class="frame"><tr><td id="' + uniqueID + '">&nbsp;</td></tr></table><!-- /xwp:EDITOR/CONTENT/FRAME -->';
                        editor.insertContent(html);
                        var newTag = dom.select('p#' + uniqueID)[0];
                        editor.selection.setCursorLocation(newTag);
                    }
            }
        }, {
            icon: false,
            text: '•\xa0Excerpt',
            onclick: function() {
                var dom = editor.dom;
                var uniqueID = dom.uniqueId();
                var html = '<!--  xwp:EDITOR/EXCERPT --><table class="bdr:collapse mar:top-0 mar:bottom+0.5 wd:100% web[dsp:none]"><tr><td class="bdr:solid-thin bdr:bas-300 bg:tint cnr:arch-small fnt:size-small pad:+0.5" id="' + uniqueID + '"></td><td class="mce[dsp:none]"><!--more--></td></tr></table><!-- /xwp:EDITOR/EXCERPT -->';
                editor.insertContent(html);
                var newExcerpt = dom.select('p#' + uniqueID)[0];
                editor.selection.setCursorLocation(newExcerpt);
            }
        }, {
            icon: false,
            text: '•\xa0Acronym',
            onclick: function () {
                editor.execCommand('mceReplaceContent', false, '<abbr>{$selection}</abbr>');
            }
        }],
    });
});

/*
 * EOF: add-misc-opts / plugin.js / 24200527
 */
