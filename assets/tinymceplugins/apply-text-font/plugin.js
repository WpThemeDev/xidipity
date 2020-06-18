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
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE3IDNIN2MtMS4xIDAtMS45OS45LTEuOTkgMkw1IDIxbDctMyA3IDNWNWMwLTEuMS0uOS0yLTItMnptMCAxNWwtNS0yLjE4TDcgMThWNWgxMHYxM3oiLz48L3N2Zz4=',
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
