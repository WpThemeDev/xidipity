/**
 * WordPress Xidipity Theme
 * Tinymce add-list-ordered plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_lst_order', function(editor) {
	'use strict';
	editor.addButton('add_lst_order', {
		type: 'splitbutton',
		title: 'Ordered lists',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1NnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1NiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDE2LjE4OCAyOC42MjUgTCAxNi4xODggMjMuMzc1IEwgNTIuOTM4IDIzLjM3NSBMIDUyLjkzOCAyOC42MjUgTCAxNi4xODggMjguNjI1IE0gMTYuMTg4IDQ0LjM3NSBMIDE2LjE4OCAzOS4xMjUgTCA1Mi45MzggMzkuMTI1IEwgNTIuOTM4IDQ0LjM3NSBMIDE2LjE4OCA0NC4zNzUgTSAxNi4xODggMTIuODc1IEwgMTYuMTg4IDcuNjI1IEwgNTIuOTM4IDcuNjI1IEwgNTIuOTM4IDEyLjg3NSBMIDE2LjE4OCAxMi44NzUgTSA1LjY4OCAxNS41IEwgNS42ODggNy42MjUgTCAzLjA2MyA3LjYyNSBMIDMuMDYzIDUgTCA4LjMxMyA1IEwgOC4zMTMgMTUuNSBMIDUuNjg4IDE1LjUgTSAzLjA2MyAzOS4xMjUgTCAzLjA2MyAzNi41IEwgMTAuOTM4IDM2LjUgTCAxMC45MzggNDcgTCAzLjA2MyA0NyBMIDMuMDYzIDQ0LjM3NSBMIDguMzEzIDQ0LjM3NSBMIDguMzEzIDQzLjA2MyBMIDUuNjg4IDQzLjA2MyBMIDUuNjg4IDQwLjQzOCBMIDguMzEzIDQwLjQzOCBMIDguMzEzIDM5LjEyNSBMIDMuMDYzIDM5LjEyNSBNIDguOTY4IDIwLjc1IEMgMTAuMDU3IDIwLjc1IDEwLjkzOCAyMS42MzEgMTAuOTM4IDIyLjcxOSBDIDEwLjkzOCAyMy4yNDQgMTAuNzI4IDIzLjc0MyAxMC4zODcgMjQuMDg0IEwgNi4wMDMgMjguNjI1IEwgMTAuOTM4IDI4LjYyNSBMIDEwLjkzOCAzMS4yNSBMIDMuMDYzIDMxLjI1IEwgMy4wNjMgMjguODM1IEwgOC4zMTMgMjMuMzc1IEwgMy4wNjMgMjMuMzc1IEwgMy4wNjMgMjAuNzUgTCA4Ljk2OCAyMC43NSBaIi8+Cjwvc3ZnPg==',
		onclick: function() {
			var dom = editor.dom;
			var uniqueID = dom.uniqueId();
			var html = '<ol><li id="' + uniqueID + '"></li></ol>';
			editor.insertContent(html);
			var newListItem = dom.select('li#' + uniqueID)[0];
			editor.selection.setCursorLocation(newListItem);
		},
		menu: [{
			icon: false,
			text: '•\xa0Standard',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ol><li id="' + uniqueID + '"></li></ol>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: '•\xa0Nested',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ol class="nested"><li id="' + uniqueID + '"></li></ol>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: '•\xa0Alpha',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ol class="alpha"><li id="' + uniqueID + '"></li></ol>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: '•\xa0Roman',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ol class="roman"><li id="' + uniqueID + '"></li></ol>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: '•\xa0Outline',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ol class="outline"><li id="' + uniqueID + '"></li></ol>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}]
	});
});

/*
 * EOF: add-list-ordered / plugin.js / 27200615
 */
