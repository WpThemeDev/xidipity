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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LWJ1bGxldGVkLWxpc3QtNTA8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBpZD0icmVjdC0xIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbnM4LWJ1bGxldGVkLWxpc3QtNTAiPgogICAgICAgICAgICA8aW1hZ2UgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFNcUFEQUFRQUFBQUJBQUFBTWdBQUFBQjF5NityQUFBQTFVbEVRVlJvQmUyWFFRckNRQkFFbzNmQnV4Nk5meGZ4QmZva1BaZ1BhRGM0bHlWRXZmVkNEVFJMZGhMb3Fka056REFRRUlEQUx3VDJldWtzVFI5ZHRJNVNWK0VpSHRLcmtmZDJVamZoVHJSRjFQTnBwb3JLUmEwckdmVngyc3dZOXRaVDJqWTVGeEFYYXptS05QWXZLUmR5Vy9qb3VwQ0xTeDNsNkM2MVo5NlgvUkRuOW9zaC81MThzWDBuTFA4QXVpdENuZ2tJUUFBQ0VJQUFCRXlBd1NycEhEQllKWFdEd1NxcEcrV0Z3YXBJc0VJQUFoQ0FBQVFnRUVhQXdTcXBJUXhXU2QxZ3NFcnFSbmxoc0NvU3JCQ0FRRDZCTjA1cDBVRjc1K29JQUFBQUFFbEZUa1N1UW1DQyI+PC9pbWFnZT4KICAgICAgICAgICAgPHVzZSBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNyZWN0LTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
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
