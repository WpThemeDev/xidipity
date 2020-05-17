/**
    * WordPress Xidipity Theme
    * Tinymce add-icon plugin 
    *
    * ###:  plugin.js
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

tinymce.PluginManager.add('add_icon', function( editor, url ) {
    editor.addButton( 'add_icon', {
        title: 'Add Icon',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTkgN3YyLjk5cy0xLjk5LjAxLTIgMFY3aC0zcy4wMS0xLjk5IDAtMmgzVjJoMnYzaDN2MmgtM3ptLTMgNFY4aC0zVjVINWMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMnYtOGgtM3pNNSAxOWwzLTQgMiAzIDMtNCA0IDVINXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+',
        onclick: function() {
          editor.windowManager.open({
            name: 'icon',
            title: 'Embed Icon',
            width: window.outerWidth * .5,
            minWidth: 320,
            height: window.outerHeight * .2,
            minHeight: 160,
            body: {
                id: "embed",
                type: "textbox",
                name: "mce_txt",
                multiline: !0,
                minWidth: window.innerWidth * .4,
                minHeight: window.innerHeight * .15,
                style: "direction: ltr; text-align: left; height: 100%; font-family: 'Roboto Mono', monospace; color: #212121; border: 1px solid #f5f5f5;" },
            onSubmit: function() {
                var html = document.getElementsByClassName("mce-textbox")[0].value.trim();
                if (html.includes('fa-'))
                {
                    html = html.replace('</i>','&#8203;</i>');
                }
                else if (html.includes('<img'))
                {
                    html = html.replace('<img','<img class="dsp:inline-block"');
                }
                html = html.concat('&nbsp;');
                editor.insertContent(html);
            }
          }, {
          });
        }
    });
});

/*
 * EOF: add-icon / plugin.js / 24200520
 */
