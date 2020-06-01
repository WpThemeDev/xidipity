/**
    * WordPress Xidipity Theme
    * Tinymce apply-text-format plugin
    *
    * ###:  plugin.js
    * bld:  24200531
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

tinymce.PluginManager.add('apply_txt_formats', function(editor, url) {
    editor.addButton('apply_txt_formats', {
        type: 'splitbutton',
        title: 'Underline',
    icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0yNCAyNEgwVjBoMjR2MjR6Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iYiI+PHVzZSB4bGluazpocmVmPSIjYSIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxwYXRoIGNsaXAtcGF0aD0idXJsKCNiKSIgZD0iTTIuNSA0djNoNXYxMmgzVjdoNVY0aC0xM3ptMTkgNWgtOXYzaDN2N2gzdi03aDNWOXoiLz48L3N2Zz4=',
        onclick: function() {
            editor.execCommand('mceReplaceContent', false, '<u>{$selection}</u>');
        },
        menu: [{
            icon: true,
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTIgMTdjMy4zMSAwIDYtMi42OSA2LTZWM2gtMi41djhjMCAxLjkzLTEuNTcgMy41LTMuNSAzLjVTOC41IDEyLjkzIDguNSAxMVYzSDZ2OGMwIDMuMzEgMi42OSA2IDYgNnptLTcgMnYyaDE0di0ySDV6Ii8+PC9zdmc+',
            text: '\xa0Underline',
            onclick: function() {
                editor.execCommand('mceReplaceContent', false, '<u>{$selection}</u>');
            }
        }, {
            icon: true,
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTAgMTloNHYtM2gtNHYzek01IDR2M2g1djNoNFY3aDVWNEg1ek0zIDE0aDE4di0ySDN2MnoiLz48L3N2Zz4=',
            text: '\xa0Strike through',
            onclick: function() {
                editor.execCommand('mceReplaceContent', false, '<del>{$selection}</del>');
            }
        }, {
            icon: true,
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9ImJsYWNrIiB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4Ij48Zz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHg9IjAiIHk9IjAiLz48cGF0aCBkPSJNMjIsN2gtMnYxaDN2MWgtNFY3YzAtMC41NSwwLjQ1LTEsMS0xaDJWNWgtM1Y0aDNjMC41NSwwLDEsMC40NSwxLDF2MUMyMyw2LjU1LDIyLjU1LDcsMjIsN3ogTTUuODgsMjBoMi42NmwzLjQtNS40MmgwLjEyIGwzLjQsNS40MmgyLjY2bC00LjY1LTcuMjdMMTcuODEsNmgtMi42OGwtMy4wNyw0Ljk5aC0wLjEyTDguODUsNkg2LjE5bDQuMzIsNi43M0w1Ljg4LDIweiIvPjwvZz48L3N2Zz4=',
            text: '\xa0Super script',
            onclick: function() {
                editor.execCommand('superscript');
            }
        }, {
            icon: true,
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9ImJsYWNrIiB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4Ij48Zz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiLz48cGF0aCBkPSJNMjIsMThoLTJ2MWgzdjFoLTR2LTJjMC0wLjU1LDAuNDUtMSwxLTFoMnYtMWgtM3YtMWgzYzAuNTUsMCwxLDAuNDUsMSwxdjFDMjMsMTcuNTUsMjIuNTUsMTgsMjIsMTh6IE01Ljg4LDE4aDIuNjYgbDMuNC01LjQyaDAuMTJsMy40LDUuNDJoMi42NmwtNC42NS03LjI3TDE3LjgxLDRoLTIuNjhsLTMuMDcsNC45OWgtMC4xMkw4Ljg1LDRINi4xOWw0LjMyLDYuNzNMNS44OCwxOHoiLz48L2c+PC9zdmc+',
            text: '\xa0Sub script',
            onclick: function() {
                editor.execCommand('subscript');
            }
        }, {
            icon: true,
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTUuNiAxMC43OWMuOTctLjY3IDEuNjUtMS43NyAxLjY1LTIuNzkgMC0yLjI2LTEuNzUtNC00LTRIN3YxNGg3LjA0YzIuMDkgMCAzLjcxLTEuNyAzLjcxLTMuNzkgMC0xLjUyLS44Ni0yLjgyLTIuMTUtMy40MnpNMTAgNi41aDNjLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNWgtM3YtM3ptMy41IDlIMTB2LTNoMy41Yy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjV6Ii8+PC9zdmc+',
            text: '\xa0Strong',
            onclick: function() {
                editor.execCommand('mceReplaceContent', false, '<strong>{$selection}</strong>');
            }
        }, {
            icon: true,
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9ImJsYWNrIiB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4Ij48Zz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiLz48L2c+PGc+PGc+PHBhdGggZD0iTTIwLDZ2MTRINnYyaDE0YzEuMSwwLDItMC45LDItMlY2SDIweiIvPjxwYXRoIGQ9Ik0xNiwySDRDMi45LDIsMiwyLjksMiw0djEyYzAsMS4xLDAuOSwyLDIsMmgxMmMxLjEsMCwyLTAuOSwyLTJWNEMxOCwyLjksMTcuMSwyLDE2LDJ6IE05LDE2SDR2LTVoNVYxNnogTTE2LDE2aC01di01aDUgVjE2eiBNMTYsOUg0VjRoMTJWOXoiLz48L2c+PC9nPjwvc3ZnPg==',
            text: '\xa0Drop Shadow',
            onclick: function() {
                editor.execCommand('mceReplaceContent', false, '<span class="fnt:shadow-medium">{$selection}</span>');
            }
        }, ],
    });
});

/*
 * EOF: apply-text-format / plugin.js / 24200531
 */
