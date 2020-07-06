/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-highlight plugin
 *
 * ###:  plugin.js
 * bld:  28200715
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_hilight', function(editor) {
	'use strict';
	editor.addButton('apply_txt_hilight', {
		type: 'splitbutton',
		title: 'Highlight',
		icon: true,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LjUsMS4xNUMxNy45NywxLjE1IDE3LjQ2LDEuMzQgMTcuMDcsMS43M0wxMS4yNiw3LjU1TDE2LjkxLDEzLjJMMjIuNzMsNy4zOUMyMy41LDYuNjEgMjMuNSw1LjM1IDIyLjczLDQuNTZMMTkuODksMS43M0MxOS41LDEuMzQgMTksMS4xNSAxOC41LDEuMTVNMTAuMyw4LjVMNC4zNCwxNC40NkMzLjU2LDE1LjI0IDMuNTYsMTYuNSA0LjM2LDE3LjMxQzMuMTQsMTguNTQgMS45LDE5Ljc3IDAuNjcsMjFINi4zM0w3LjE5LDIwLjE0QzcuOTcsMjAuOSA5LjIyLDIwLjg5IDEwLDIwLjEyTDE1Ljk1LDE0LjE2IiAvPjwvc3ZnPg==',
		menu: [{
			icon: false,
			text: '•\xa0Yellow',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:highlight-yellow">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Cyan',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg\:highlight-cyan">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Magenta',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg\:highlight-magenta">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Green',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg\:highlight-green">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Orange',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:highlight-orange">{$selection}</span>');
			}
		}, ],
	});
});
/*
 * EOF: apply-text-highlight / plugin.js / 28200715
 */
