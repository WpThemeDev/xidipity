/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        wrap selected text with span tags with weight styles
 * File Name:       text-weight/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91211.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/text-weight/
 */
tinymce.PluginManager.add('fntwgt', function (editor, url) {
    editor.addButton('fntwgt', {
        type: 'splitbutton',
        title: 'Semi Bold',
        icon: 'mce-fntwgt',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0%0D%0APSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuNiAxMC43OWMuOTctLjY3IDEu%0D%0ANjUtMS43NyAxLjY1LTIuNzkgMC0yLjI2LTEuNzUtNC00LTRIN3YxNGg3LjA0YzIuMDkgMCAzLjcx%0D%0ALTEuNyAzLjcxLTMuNzkgMC0xLjUyLS44Ni0yLjgyLTIuMTUtMy40MnpNMTAgNi41aDNjLjgzIDAg%0D%0AMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNWgtM3YtM3ptMy41IDlIMTB2LTNoMy41Yy44%0D%0AMyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYy%0D%0ANEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==',
        onclick: function () {
            editor.formatter.toggle('wgt600');
        },
        menu: [{
                icon: false,
                text: '•\xa0Thin',
                onclick: function () {
                    editor.formatter.toggle('wgt100');
                }
    },
            {
                icon: false,
                text: '•\xa0Xtra Light',
                onclick: function () {
                    editor.formatter.toggle('wgt200');
                }
    },
            {
                icon: false,
                text: '•\xa0Light',
                onclick: function () {
                    editor.formatter.toggle('wgt300');
                }
    },
            {
                icon: false,
                text: '•\xa0Normal',
                onclick: function () {
                    editor.formatter.toggle('wgt400');
                }
    },
            {
                icon: false,
                text: '•\xa0Medium',
                onclick: function () {
                    editor.formatter.toggle('wgt500');
                }
    },
            {
                icon: false,
                text: '•\xa0Semi Bold',
                onclick: function () {
                    editor.formatter.toggle('wgt600');
                }
    },
            {
                icon: false,
                text: '•\xa0Bold',
                onclick: function () {
                    editor.formatter.toggle('wgt700');
                }
    },
            {
                icon: false,
                text: '•\xa0Xtra Bold',
                onclick: function () {
                    editor.formatter.toggle('wgt800');
                }
    },
            {
                icon: false,
                text: '•\xa0Black',
                onclick: function () {
                    editor.formatter.toggle('wgt900');
                }
    }
  ]
    });
});
/**
 *  eof: text-weight/plugin.js
 */
