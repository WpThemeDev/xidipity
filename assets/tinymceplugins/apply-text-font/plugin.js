/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_font', function(editor) {
	'use strict';
	editor.addButton('apply_txt_font', {
		type: 'splitbutton',
		title: 'Fonts',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LjMsMTZMMTMuNiwxNEgxMC40TDkuNywxNkg3LjhMMTEsN0gxM0wxNi4yLDE2SDE0LjNNMjAsOC42OVY0SDE1LjMxTDEyLDAuNjlMOC42OSw0SDRWOC42OUwwLjY5LDEyTDQsMTUuMzFWMjBIOC42OUwxMiwyMy4zMUwxNS4zMSwyMEgyMFYxNS4zMUwyMy4zMSwxMkwyMCw4LjY5TTEwLjg1LDEyLjY1SDEzLjE1TDEyLDlMMTAuODUsMTIuNjVaIiAvPjwvc3ZnPg==',
		menu: [{
			icon: false,
			text: '•\xa0Sans',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-sans">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Serif',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-serif">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Mono',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-mono">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Cursive',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-cursive">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Condensed',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-condensed">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Fancy',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-fancy">{$selection}</span>');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-font / plugin.js / 27200615
 */
