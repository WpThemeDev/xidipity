/*
 *  Xidipity WordPress Theme
 *
 *  file:   hilite/plugin.js
 *  build:  91020.1a
 *  descrp: hilite plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
    tinymce.PluginManager.add('hilite', function( editor, url ) {
        editor.addButton( 'hilite', {
            title: 'High lite',
            icon: 'mce-hilite',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMEgwdjI0aDI0eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNy42NiA3LjkzTDEyIDIuMjcgNi4zNCA3LjkzYy0zLjEyIDMuMTItMy4xMiA4LjE5IDAgMTEuMzFDNy45IDIwLjggOS45NSAyMS41OCAxMiAyMS41OGMyLjA1IDAgNC4xLS43OCA1LjY2LTIuMzQgMy4xMi0zLjEyIDMuMTItOC4xOSAwLTExLjMxek0xMiAxOS41OWMtMS42IDAtMy4xMS0uNjItNC4yNC0xLjc2QzYuNjIgMTYuNjkgNiAxNS4xOSA2IDEzLjU5cy42Mi0zLjExIDEuNzYtNC4yNEwxMiA1LjF2MTQuNDl6Ii8+PC9zdmc+',
            onclick: function() {
                tinymce.execCommand('mceReplaceContent',false,'<span class="bg:highlight">{$selection}</span>');
            }
        });
    });
})();
/*
    eof: hilite/plugin.js
*/
