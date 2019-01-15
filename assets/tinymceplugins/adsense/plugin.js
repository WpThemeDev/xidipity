/**
 * Plugin Name: TinyMCE Adsense Plugin
 * Plugin URI: http:www.xidipity.com
 * Build: 90115.1
 * Author: John Baer
 * Description: A TinyMCE Plugin to add templates / snippets to the MCE Visual Editor
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('adsense', function( editor, url ) {
      editor.addButton( 'adsense', {
        title: 'Adsense',
        icon: 'mce-adsense',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEuOCAxMC45Yy0yLjI3LS41OS0z%0D%0ALTEuMi0zLTIuMTUgMC0xLjA5IDEuMDEtMS44NSAyLjctMS44NSAxLjc4IDAgMi40NC44NSAyLjUg%0D%0AMi4xaDIuMjFjLS4wNy0xLjcyLTEuMTItMy4zLTMuMjEtMy44MVYzaC0zdjIuMTZjLTEuOTQuNDIt%0D%0AMy41IDEuNjgtMy41IDMuNjEgMCAyLjMxIDEuOTEgMy40NiA0LjcgNC4xMyAyLjUuNiAzIDEuNDgg%0D%0AMyAyLjQxIDAgLjY5LS40OSAxLjc5LTIuNyAxLjc5LTIuMDYgMC0yLjg3LS45Mi0yLjk4LTIuMWgt%0D%0AMi4yYy4xMiAyLjE5IDEuNzYgMy40MiAzLjY4IDMuODNWMjFoM3YtMi4xNWMxLjk1LS4zNyAzLjUt%0D%0AMS41IDMuNS0zLjU1IDAtMi44NC0yLjQzLTMuODEtNC43LTQuNHoiLz48cGF0aCBkPSJNMCAwaDI0%0D%0AdjI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+',
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
              value:  '<p>&nbsp;</p>' + String.fromCharCode(13) +
                      '<!-- Template: adsense -->' + String.fromCharCode(13) +
                      '<blockquote class="web:hidden" style="border-color: #d1c4e9;" cite="https://www.google.com/adsense/">' + String.fromCharCode(13) +
                      '<h3 style="color: #616161;">Google Adsense</h3>' + String.fromCharCode(13) +
                      '<p><i class="material-icons pr-2" style="font-size: 1.25rem; vertical-align: bottom;">devices_other</i>Responsive</p>' + String.fromCharCode(13) +
                      '</blockquote>' + String.fromCharCode(13) +
                      '<p class="mce:hidden">[google_adsense client="CLIENT ID" slot="SLOT ID"]</p>' + String.fromCharCode(13) +
                      '<!-- End Template -->' + String.fromCharCode(13) +
                      '<p>&nbsp;</p>'
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
