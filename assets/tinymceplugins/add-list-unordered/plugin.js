/**
 * WordPress Xidipity Theme
 * Tinymce add-list-unordered plugin
 *
 * ###:  plugin.js
 * bld:  31201215
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('add_lst_unorder', function(editor) {
	'use strict';
	editor.addButton('add_lst_unorder', {
		type: 'splitbutton',
		title: 'Unordered lists',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNCAxMC41Yy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXptMC02Yy0uODMgMC0xLjUuNjctMS41IDEuNVMzLjE3IDcuNSA0IDcuNSA1LjUgNi44MyA1LjUgNiA0LjgzIDQuNSA0IDQuNXptMCAxMmMtLjgzIDAtMS41LjY4LTEuNSAxLjVzLjY4IDEuNSAxLjUgMS41IDEuNS0uNjggMS41LTEuNS0uNjctMS41LTEuNS0xLjV6TTcgMTloMTR2LTJIN3Yyem0wLTZoMTR2LTJIN3Yyem0wLTh2MmgxNFY1SDd6Ii8+PC9zdmc+',
		onclick: function() {
			var dom = editor.dom;
			var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
			var html = '<ul><li id="';
			html += uniqueID;
			html += '"></li></ul>';
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
				var html = '<ul><li id="';
				html += uniqueID;
				html += '"></li></ul>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Circle',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ul class="circle"><li id="';
				html += uniqueID;
				html += '"></li></ul>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Dash',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ul class="dash"><li id="';
				html += uniqueID;
				html += '"></li></ul>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Square',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ul class="square"><li id="';
				html += uniqueID;
				html += '"></li></ul>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Mixed',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ul class="mixed"><li id="';
				html += uniqueID;
				html += '"></li></ul>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: 'Unmarked',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = (Math.random().toString(16)+"000000000").substr(4,5);
				var html = '<ul class="no-bullets"><li id="';
				html += uniqueID;
				html += '">&#182;</li></ul>';
				editor.execCommand('mceInsertContent', false, html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				var range = editor.selection.getRng();
				range.setStart(newListItem, 0);
				range.setEnd(newListItem, 2);
				editor.selection.setRng(range);
				editor.selection.setCursorLocation(newListItem,0);
			}
		}]
	});
});
/*
 * EOF: add-list-unordered / plugin.js / 31201215
 */
