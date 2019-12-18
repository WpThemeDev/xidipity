/*
 * WordPress Xidipity JS File
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019 John Baer
 * @license         GPL-3.0-or-later
 *
 * Function:        apply highlight background to selected text
 * File Name:       apply-text-highlight/plugin.js
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * Build:           91215.1a
 * Revision:        1
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 *                  https://xidipity.com/documentation/reference/editor/toolbar/apply-text-highlight/
 */
tinymce.PluginManager.add('apply_txt_hilight', function (editor, url) {
    editor.addButton('apply_txt_hilight', {
        title: 'Highlite',
        icon: false,
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LjUsMS4xNUMxNy45NywxLjE1IDE3LjQ2LDEuMzQgMTcuMDcsMS43M0wxMS4yNiw3LjU1TDE2LjkxLDEzLjJMMjIuNzMsNy4zOUMyMy41LDYuNjEgMjMuNSw1LjM1IDIyLjczLDQuNTZMMTkuODksMS43M0MxOS41LDEuMzQgMTksMS4xNSAxOC41LDEuMTVNMTAuMyw4LjVMNC4zNCwxNC40NkMzLjU2LDE1LjI0IDMuNTYsMTYuNSA0LjM2LDE3LjMxQzMuMTQsMTguNTQgMS45LDE5Ljc3IDAuNjcsMjFINi4zM0w3LjE5LDIwLjE0QzcuOTcsMjAuOSA5LjIyLDIwLjg5IDEwLDIwLjEyTDE1Ljk1LDE0LjE2IiAvPjwvc3ZnPg==',
        onclick: function () {
            tinymce.execCommand('mceReplaceContent', false, '<span class="bg:highlight">{$selection}</span>');
        }
    });
});
/**
 *  eof: apply-text-highlight/plugin.js
 */
