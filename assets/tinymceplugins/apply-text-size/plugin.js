/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-size plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_size', function(editor) {
	'use strict';
	editor.addButton('apply_txt_size', {
		type: 'splitbutton',
		title: 'Font Size',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIzIDdWMWgtNnYySDdWMUgxdjZoMnYxMEgxdjZoNnYtMmgxMHYyaDZ2LTZoLTJWN2gyek0zIDNoMnYySDNWM3ptMiAxOEgzdi0yaDJ2MnptMTItMkg3di0ySDVWN2gyVjVoMTB2MmgydjEwaC0ydjJ6bTQgMmgtMnYtMmgydjJ6TTE5IDVWM2gydjJoLTJ6bS01LjI3IDloLTMuNDlsLS43MyAySDcuODlsMy40LTloMS40bDMuNDEgOWgtMS42M2wtLjc0LTJ6bS0zLjA0LTEuMjZoMi42MUwxMiA4LjkxbC0xLjMxIDMuODN6Ii8+PC9zdmc+',
		menu: [{
			icon: false,
			text: '•\xa05x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-5x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa04x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-4x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa03x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-3x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa02x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-2x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa01½ Default',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-medium">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Default',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-size-medium">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Small',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-small">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0x Small',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-small">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa02x Small',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-2x-small">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Larger',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-larger">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Smaller',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-smaller">{$selection}</span>');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-size / plugin.js / 27200615
 */
