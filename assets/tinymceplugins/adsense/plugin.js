/**
 * Plugin Name: TinyMCE Adsense Plugin
 * Plugin URI: http:www.xidipity.com
 * Version: 80704.1
 * Author: John Baer
 * Description: A TinyMCE Plugin to add templates / snippets to the MCE Visual Editor
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('adsense', function( editor, url ) {
      editor.addButton( 'adsense', {
        title: 'Adsense',
        icon: 'mce-adsense',
        image: '/wp-content/themes/xidipity/assets/tinymceplugins/adsense/mce-adsense.svg',
        onclick: function() {
          editor.windowManager.open({
            name: 'adsense',
            title: 'Adsense',
            width: window.outerWidth * .5,
            minWidth: 320,
            height: window.outerHeight * .6,
            minHeight: 640,
            body: {
              type: "textbox",
              name: "mce_ad_txt",
              multiline: !0,
              minWidth: window.innerWidth * .4,
              minHeight: window.innerHeight * .61,
              style:  "direction: ltr; text-align: left; height: 100%; font-family: 'Roboto Mono', monospace; color: #212121; border: 1px solid #f5f5f5;",
              value:  '<blockquote class="web:hidden" style="border-color: #d1c4e9;" cite="https://www.google.com/adsense/">' + String.fromCharCode(13) +
                      '<h3 style="color: #616161;">Google Adsense</h3>' + String.fromCharCode(13) +
                      '<p><i class="material-icons pr-2" style="font-size: 1.25rem; vertical-align: bottom;">devices_other</i>Responsive</p>' + String.fromCharCode(13) +
                      '</blockquote>' + String.fromCharCode(13) +
                      '<p class="mce:hidden">[google_adsense client="CLIENT ID" slot="SLOT ID"]</p>'
                      },
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
