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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDI5Ljg1OCA0MS40MjkgTCAxNy44NTggNDEuNDI5IEwgMTcuODU4IDMxLjE0MyBMIDI5Ljg1OCAzMS4xNDMgQyAzMi42OTggMzEuMTQzIDM1LjAwMSAzMy40NDUgMzUuMDAxIDM2LjI4NiBDIDM1LjAwMSAzOS4xMjYgMzIuNjk4IDQxLjQyOSAyOS44NTggNDEuNDI5IE0gMTcuODU4IDEwLjU3MSBMIDI4LjE0MyAxMC41NzEgQyAzMC45ODQgMTAuNTcxIDMzLjI4NiAxMi44NzQgMzMuMjg2IDE1LjcxNCBDIDMzLjI4NiAxOC41NTUgMzAuOTg0IDIwLjg1NyAyOC4xNDMgMjAuODU3IEwgMTcuODU4IDIwLjg1NyBNIDM3LjA1OCAyNS4yOCBDIDQwLjM4MyAyMi45NDkgNDIuNzE1IDE5LjE0MyA0Mi43MTUgMTUuNzE0IEMgNDIuNzE1IDcuOTY2IDM2LjcxNSAyIDI5LjAwMSAyIEwgNy41NzIgMiBMIDcuNTcyIDUwIEwgMzEuNzA5IDUwIEMgMzguOTA5IDUwIDQ0LjQyOSA0NC4xNzEgNDQuNDI5IDM3LjAwNiBDIDQ0LjQyOSAzMS43OTQgNDEuNDgxIDI3LjMzNyAzNy4wNTggMjUuMjggWiIvPgo8L3N2Zz4=',
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
