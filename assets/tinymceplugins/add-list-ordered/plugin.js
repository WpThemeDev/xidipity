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
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMiAxN2gydi41SDN2MWgxdi41SDJ2MWgzdi00SDJ2MXptMS05aDFWNEgydjFoMXYzem0tMSAzaDEuOEwyIDEzLjF2LjloM3YtMUgzLjJMNSAxMC45VjEwSDJ2MXptNS02djJoMTRWNUg3em0wIDE0aDE0di0ySDd2MnptMC02aDE0di0ySDd2MnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+',
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
