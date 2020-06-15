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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDQwLjQgNTAgQyA0My4wNTEgNTAgNDUuMiA0Ny44NTEgNDUuMiA0NS4yIEwgNDUuMiA2LjggQyA0NS4yIDQuMTM2IDQzLjA0IDIgNDAuNCAyIEwgMjYgMiBMIDI2IDE4LjggTCAyMCAxNS4yIEwgMTQgMTguOCBMIDE0IDIgTCAxMS42IDIgQyA4Ljk0OSAyIDYuOCA0LjE0OSA2LjggNi44IEwgNi44IDQ1LjIgQyA2LjggNDcuODUxIDguOTQ5IDUwIDExLjYgNTAgTCA0MC40IDUwIFoiLz4KPC9zdmc+',
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
