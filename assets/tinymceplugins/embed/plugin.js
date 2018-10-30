/**
 * Plugin Name: TinyMCE Embed Plugin
 * Plugin URI: http:www.xidipity.com
 * Version: 1.0
 * Author: John Baer
 * Description: A TinyMCE Plugin to add templates / snippets to the MCE Visual Editor
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('embed', function( editor, url ) {
        editor.addButton( 'embed', {
            title: 'Embed',
            icon: 'mce-embed',
            image: '/wp-content/themes/xidipity/assets/tinymceplugins/embed/mce-embed.svg',
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
                  var html = document.getElementsByClassName("mce-textbox")[0].value;
                  editor.insertContent(html);
                }
              }, {
              });
            }
        });
    });
})();
