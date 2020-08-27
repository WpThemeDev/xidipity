/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-weight plugin 
 *
 * ###:  plugin.js
 * bld:  29200815
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_weight', function(editor) {
	'use strict';
	editor.addButton('apply_txt_weight', {
		type: 'splitbutton',
		title: 'Text Weight',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjYgMTAuNzljLjk3LS42NyAxLjY1LTEuNzcgMS42NS0yLjc5IDAtMi4yNi0xLjc1LTQtNC00SDd2MTRoNy4wNGMyLjA5IDAgMy43MS0xLjcgMy43MS0zLjc5IDAtMS41Mi0uODYtMi44Mi0yLjE1LTMuNDJ6TTEwIDYuNWgzYy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTN2LTN6bTMuNSA5SDEwdi0zaDMuNWMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41eiIvPjwvc3ZnPg==',
		onclick: function() {
			editor.formatter.toggle('wgt400');
		},
		menu: [{
				icon: false,
				text: '100\xa0-\xa0Thin',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-100">{$selection}</span>');
				}
			},
			{
				icon: false,
				text: '200\xa0-\xa0Xtra Light',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-200">{$selection}</span>');
				}
			},
			{
				icon: false,
				text: '300\xa0-\xa0Light',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-300">{$selection}</span>');
				}
			},
			{
				icon: false,
				text: '400\xa0-\xa0Normal',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-400">{$selection}</span>');
				}
			},
			{
				icon: false,
				text: '500\xa0-\xa0Medium',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-500">{$selection}</span>');
				}
			},
			{
				icon: false,
				text: '600\xa0-\xa0Semi Bold',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-600">{$selection}</span>');
				}
			},
			{
				icon: false,
				text: '700\xa0-\xa0Bold',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-700">{$selection}</span>');
				}
			},
			{
				icon: false,
				text: '800\xa0-\xa0Xtra Bold',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-800">{$selection}</span>');
				}
			},
			{
				icon: false,
				text: '900\xa0-\xa0Black',
				onclick: function() {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:wgt-900">{$selection}</span>');
				}
			}
		]
	});
});

/*
 * EOF: apply-text-weight / plugin.js / 29200815
 */
