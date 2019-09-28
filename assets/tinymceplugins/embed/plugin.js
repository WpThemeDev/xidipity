/*
 *  Xidipity WordPress Theme
 *
 *  file:   embed/plugin.js
 *  build:  90927.1a
 *  descrp: embed plugin
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
    tinymce.PluginManager.add('embed', function( editor, url ) {
        editor.addButton( 'embed', {
            title: 'Embed',
            icon: 'mce-embed',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMTJ2N0g1di03SDN2N2MwIDEu%0D%0AMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi03aC0yem0tNiAuNjdsMi41OS0yLjU4TDE3IDEx%0D%0ALjVsLTUgNS01LTUgMS40MS0xLjQxTDExIDEyLjY3VjNoMnoiLz48cGF0aCBmaWxsPSJub25lIiBk%0D%0APSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+',
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
                  var html = '<!-- xwpt: 90927.1a/mce/toolbar/embed       -->' + String.fromCharCode(13) + document.getElementsByClassName("mce-textbox")[0].value + '<!-- /xwpt: 90927.1a/mce/toolbar/embed      -->';
                  editor.insertContent(html);
                }
              }, {
              });
            }
        });
    });
})();
/*
    eof: embed/plugin.js
*/
