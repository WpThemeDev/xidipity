/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-weight plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
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
				text: '•\xa0Thin',
				onclick: function() {
					editor.formatter.toggle('wgt100');
				}
			},
			{
				icon: false,
				text: '•\xa0Xtra Light',
				onclick: function() {
					editor.formatter.toggle('wgt200');
				}
			},
			{
				icon: false,
				text: '•\xa0Light',
				onclick: function() {
					editor.formatter.toggle('wgt300');
				}
			},
			{
				icon: false,
				text: '•\xa0Normal',
				onclick: function() {
					editor.formatter.toggle('wgt400');
				}
			},
			{
				icon: false,
				text: '•\xa0Medium',
				onclick: function() {
					editor.formatter.toggle('wgt500');
				}
			},
			{
				icon: false,
				text: '•\xa0Semi Bold',
				onclick: function() {
					editor.formatter.toggle('wgt600');
				}
			},
			{
				icon: false,
				text: '•\xa0Bold',
				onclick: function() {
					editor.formatter.toggle('wgt700');
				}
			},
			{
				icon: false,
				text: '•\xa0Xtra Bold',
				onclick: function() {
					editor.formatter.toggle('wgt800');
				}
			},
			{
				icon: false,
				text: '•\xa0Black',
				onclick: function() {
					editor.formatter.toggle('wgt900');
				}
			}
		]
	});
});

/*
 * EOF: apply-text-weight / plugin.js / 27200615
 */
