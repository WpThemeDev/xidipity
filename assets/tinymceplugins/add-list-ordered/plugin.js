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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LW51bWJlcmVkLWxpc3QtNTA8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBpZD0icmVjdC0xIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbnM4LW51bWJlcmVkLWxpc3QtNTAiPgogICAgICAgICAgICA8aW1hZ2UgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFNcUFEQUFRQUFBQUJBQUFBTWdBQUFBQjF5NityQUFBQnlVbEVRVlJvQmUyWk95OEVVUmlHMTdva2JnbUpBcVZJS0JTaVFDVXFoVmJpQjRoQ0xWSG9SSzN4SjlCVDZORVNpVWFoRUNJUmw3aTBndWVOT1pQSjVneTJrZS9JOXliUHp0blpUZmI1dnBtemUyYTJVdkhZN2tBemV0MVF0YTFaYnRmSlM2dHdDeC9RQzBrbGRINEk2ems0VHNvK0lxdUNHbUFOa2p3aVRZZ3I3MStiSHg5VnBNbUVVOHVrWEQxU1hrZzkzZnFMOTRZNTh0dlAwaGVDeWRRV3NvdmxEYnlZdEhVcDc0QjN3RHZnSGJEV2djYUNVQi9qY2VpQXU4TCtwSWFiMkdvRnJOV3QySVBhSDB0MjJjODhpaFBRQml1Z1lyUXY2UXhpcjBLV1U2b2lkdnJNWmdVY1JRcFJnVWxrQk1zbjJDNnhWU0ZXeVpXSEdWM0RJV2l1eEdLMWlQeE1HY05hdDRJT1FGKy9aVEZmeURQbXRaSW5aZFZZM0I4bSsySkVUblBGNHgzd0RuZ0h2QVBlZ2U4NkVDNnNXbmpUTkV4QkQxeEMvclBQT0puc1lLb0xLOTFoVkFIN1lQYjJLRzZsMFQ5V1hkbXI2MnhWekVEMlBJbE5XS0tjRjJ4YkdUK0NGcEZKWmdQckszZ0FYZmJHVXJ1d05QTzhPQTltTU5keWZnSGVZQkkwWjRxUmVESVp4VlRDU3hGak0wY2djOHg5cXBsc2NXTHJxQ2c2eFpLS3JnaGY0UjR1UUZWdVFTaVNvZjJFT2RLUHF1NHl0c01wbklISE8rQWQrRWNkK0FUS3Z2L0x3ZXZoeGdBQUFBQkpSVTVFcmtKZ2dnPT0iPjwvaW1hZ2U+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlLW9wYWNpdHk9IjAuMDEiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjcmVjdC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
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
