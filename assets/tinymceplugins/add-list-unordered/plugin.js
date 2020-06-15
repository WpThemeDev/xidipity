/**
 * WordPress Xidipity Theme
 * Tinymce add-list-unordered plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_lst_unorder', function(editor) {
	'use strict';
	editor.addButton('add_lst_unorder', {
		type: 'splitbutton',
		title: 'Unordered lists',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1NnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1NiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDE0LjcgNi40MDEgTCA1My45MDEgNi40MDEgTCA1My45MDEgMTEuOTk5IEwgMTQuNyAxMS45OTkgTCAxNC43IDYuNDAxIE0gMTQuNyAyOC43OTkgTCAxNC43IDIzLjIwMSBMIDUzLjkwMSAyMy4yMDEgTCA1My45MDEgMjguNzk5IEwgMTQuNyAyOC43OTkgTSA2LjMgNSBDIDguNjIxIDUgMTAuNSA2Ljg3OSAxMC41IDkuMiBDIDEwLjUgMTEuNTIxIDguNjIxIDEzLjQgNi4zIDEzLjQgQyAzLjk3OSAxMy40IDIuMSAxMS41MjEgMi4xIDkuMiBDIDIuMSA2Ljg3OSAzLjk3OSA1IDYuMyA1IE0gNi4zIDIxLjggQyA4LjYyMSAyMS44IDEwLjUgMjMuNjc5IDEwLjUgMjYgQyAxMC41IDI4LjMyMSA4LjYyMSAzMC4yIDYuMyAzMC4yIEMgMy45NzkgMzAuMiAyLjEgMjguMzIxIDIuMSAyNiBDIDIuMSAyMy42NzkgMy45NzkgMjEuOCA2LjMgMjEuOCBNIDE0LjcgNDUuNTk5IEwgMTQuNyA0MC4wMDEgTCA1My45MDEgNDAuMDAxIEwgNTMuOTAxIDQ1LjU5OSBMIDE0LjcgNDUuNTk5IE0gNi4zIDM4LjYgQyA4LjYyMSAzOC42IDEwLjUgNDAuNDc5IDEwLjUgNDIuOCBDIDEwLjUgNDUuMTIxIDguNjIxIDQ3IDYuMyA0NyBDIDMuOTc5IDQ3IDIuMSA0NS4xMjEgMi4xIDQyLjggQyAyLjEgNDAuNDc5IDMuOTc5IDM4LjYgNi4zIDM4LjYgWiIvPgo8L3N2Zz4=',
		onclick: function() {
			var dom = editor.dom;
			var uniqueID = dom.uniqueId();
			var html = '<ul><li id="' + uniqueID + '"></li></ul>';
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
				var html = '<ul><li id="' + uniqueID + '"></li></ul>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: '•\xa0Circle',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ul class="circle"><li id="' + uniqueID + '"></li></ul>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: '•\xa0Dash',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ul class="dash"><li id="' + uniqueID + '"></li></ul>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: '•\xa0Square',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ul class="square"><li id="' + uniqueID + '"></li></ul>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}, {
			icon: false,
			text: '•\xa0Mixed',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<ul class="mixed"><li id="' + uniqueID + '"></li></ul>';
				editor.insertContent(html);
				var newListItem = dom.select('li#' + uniqueID)[0];
				editor.selection.setCursorLocation(newListItem);
			}
		}]
	});
});

/*
 * EOF: add-list-unordered / plugin.js / 27200615
 */
