/*
 *  Xidipity WordPress Theme
 *
 *  file:   embed/plugin.js
 *  build:  91025.1a
 *  descrp: embed plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 **/
tinymce.PluginManager.add('embed', function (editor, url) {
    editor.addButton('embed', {
        title: 'Insert template',
        icon: 'mce-embed',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAuNWgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMiAxNi41bDQtNGgtM3YtOWgtMnY5SDhsNCA0em05LTEzaC02djEuOTloNnYxNC4wM0gzVjUuNDloNlYzLjVIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnYtMTRjMC0xLjEtLjktMi0yLTJ6Ii8+PC9zdmc+',
        onclick: function () {
            editor.windowManager.open({
                name: 'embed',
                title: 'Embed',
                width: window.outerWidth * .5,
                minWidth: 320,
                height: window.outerHeight * .6,
                minHeight: 640,
                body: [{
                    id: "embed",
                    type: "textbox",
                    name: "mce_txt",
                    multiline: !0,
                    minWidth: window.innerWidth * .4,
                    minHeight: window.innerHeight * .61,
                    style: "direction: ltr; text-align: left; height: 100%; font-family: 'Roboto Mono', monospace; color: #212121; border: 1px solid #f5f5f5;"
                    }],
                onSubmit: function (e) {
                    editor.insertContent(e.data.mce-textbox.trim());
                }
            }, {});
        }
    });
});
/*
    eof: embed/plugin.js
*/
