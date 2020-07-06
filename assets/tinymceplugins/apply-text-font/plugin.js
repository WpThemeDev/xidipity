/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  28200715
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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE1LjU0LDMuNUwyMC41LDguNDdMMTkuMDcsOS44OEwxNC4xMiw0LjkzTDE1LjU0LDMuNU0zLjUsMTkuNzhMMTAsMTMuMzFDOS45LDEzIDkuOTcsMTIuNjEgMTAuMjMsMTIuMzVDMTAuNjIsMTEuOTYgMTEuMjYsMTEuOTYgMTEuNjUsMTIuMzVDMTIuMDQsMTIuNzUgMTIuMDQsMTMuMzggMTEuNjUsMTMuNzdDMTEuMzksMTQuMDMgMTEsMTQuMSAxMC42OSwxNEw0LjIyLDIwLjVMMTQuODMsMTYuOTVMMTguMzYsMTAuNTlMMTMuNDIsNS42NEw3LjA1LDkuMTdMMy41LDE5Ljc4WiIgLz48L3N2Zz4=',
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
 * EOF: apply-text-font / plugin.js / 28200715
 */
