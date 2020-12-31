/**
 * WordPress Xidipity Theme
 * Tinymce add-list-ordered plugin
 *
 * ###:  plugin.js
 * bld:  30201201
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('add_lst_order', function(editor) {
	'use strict';
	editor.addButton('add_lst_order', {
		type: 'splitbutton',
		title: 'Ordered lists',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIgMTdoMnYuNUgzdjFoMXYuNUgydjFoM3YtNEgydjF6bTEtOWgxVjRIMnYxaDF2M3ptLTEgM2gxLjhMMiAxMy4xdi45aDN2LTFIMy4yTDUgMTAuOVYxMEgydjF6bTUtNnYyaDE0VjVIN3ptMCAxNGgxNHYtMkg3djJ6bTAtNmgxNHYtMkg3djJ6Ii8+PC9zdmc+',
		onclick: function() {
			var dom = editor.dom;
			var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
			var html = '<ol><li id="';
			html += uniqueID;
			html += '"></li></ol>';
			editor.execCommand('mceInsertContent', false, html);
			var newListItem = dom.select('li#' + uniqueID)[0];
			editor.selection.setCursorLocation(newListItem);
		},
		menu: [{
			icon: false,
			text: 'Standard',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ol><li id="';
				html += uniqueID;
				html += '"></li></ol>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Decimal',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ol class="decimal"><li id="';
				html += uniqueID;
				html += '"></li></ol>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Alpha',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ol class="alpha"><li id="';
				html += uniqueID;
				html += '"></li></ol>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Roman',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ol class="roman"><li id="';
				html += uniqueID;
				html += '"></li></ol>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Outline',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ol class="outline"><li id="';
				html += uniqueID;
				html += '"></li></ol>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}]
	});
});

/*
 * EOF: add-list-ordered / plugin.js / 30201201
 */
