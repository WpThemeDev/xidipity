/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        insert HTML into tinymce base
 * File Name:       add-template/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91211.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/add-template/
 */
tinymce.PluginManager.add('embed', function( editor, url ) {
    editor.addButton( 'embed', {
        title: 'Embed',
        icon: 'mce-embed',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAuNWgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMiAxNi41bDQtNGgtM3YtOWgtMnY5SDhsNCA0em05LTEzaC02djEuOTloNnYxNC4wM0gzVjUuNDloNlYzLjVIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnYtMTRjMC0xLjEtLjktMi0yLTJ6Ii8+PC9zdmc+',
        onclick: function() {
          editor.windowManager.open({
            name: 'embed',
            title: 'Embed',
            width: window.outerWidth * .5,
            minWidth: 320,
            height: window.outerHeight * .6,
            minHeight: 640,
            body: {
              id: "embed",
              type: "textbox",
              name: "mce_txt",
              multiline: !0,
              minWidth: window.innerWidth * .4,
              minHeight: window.innerHeight * .61,
              style: "direction: ltr; text-align: left; height: 100%; font-family: 'Roboto Mono', monospace; color: #212121; border: 1px solid #f5f5f5;" },
            onSubmit: function() {
              var html = document.getElementsByClassName("mce-textbox")[0].value.trim();
              editor.insertContent(html);
            }
          }, {
          });
        }
    });
});
/**
 *  eof: add-template/plugin.js
 */
