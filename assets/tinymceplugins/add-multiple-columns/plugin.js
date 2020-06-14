/**
 * WordPress Xidipity Theme
 * Tinymce add-multiple-columns plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_multi_cols', function(editor) {
	'use strict';
	editor.addButton('add_multi_cols', {
		type: 'splitbutton',
		title: 'Auto 2 Column',
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LXNlbGVjdC1jb2x1bW4tNTA8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBpZD0icmVjdC0xIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbnM4LXNlbGVjdC1jb2x1bW4tNTAiPgogICAgICAgICAgICA8aW1hZ2UgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFNcUFEQUFRQUFBQUJBQUFBTWdBQUFBQjF5NityQUFBQlZFbEVRVlJvQmUxWUFRckNNQXljNHE5RVB5OStTMTNDVXJJakRMckUxV0FFYVZQWHBIZTlzOVZwcWxjeFVBeHNNWEF5UG53Yll4RkRVdXM1SjN2Tjc5dVMxQnR6bXZPUzdNaUdRR2l5dkRHdlhWalNRSFFSUGU3dFc3VzhPZHY4RVR2U2lrZDJNZ0loVHoyUWhJeEEwRk9NeWRKdGVRUzMrOGc0bzdUS0kxRUtzZndZbFh2S0tDMFRmRVlnM1I2NXp0RGxZa2NzZUdOaEVoZlNHNXZueUVXeUd5M3RsdGExTjVZU3VKRGVXSk1yT1ZjTGxjRTZFSVdKTDdjb1JTNlgwZXdvUlFhaVBTQkVsclNFaVJGdFJtbVZSNktVWXZreEtuZmR0Y0tZM0pHb1BMS0ROSFBLTUk5NGI3czRYOUNoTkhwanliTnF0ODRSNzIwWDUwdGh2R0wweGdpYzgxcmIvZXRYRlBwemp0WjRGMmFvelFoRXI3LzF0NlRWSHNyUXlRakU5RWhHSVBqbHdJSXBqL3lhYnpKS3F6d1NwU0xMajFHNTYvZUloMG5VdURmbXRZd3dPNTREM3RoRGFzMHRCdjZHZ1E5VkszSzR0ZTBXSmdBQUFBQkpSVTVFcmtKZ2dnPT0iPjwvaW1hZ2U+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlLW9wYWNpdHk9IjAuMDEiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjcmVjdC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
		menu: [{
			icon: false,
			text: '•\xa0Auto 2 Column',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:auto-2"><tr><td id="' + uniqueID + '"></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
				editor.insertContent(html);
				var newTwoColumn = dom.select('td#' + uniqueID)[0];
				editor.selection.setCursorLocation(newTwoColumn);
			}
		}, {
			icon: false,
			text: '•\xa0Auto 3 Column',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:auto-3"><tr><td id="' + uniqueID + '"></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
				editor.insertContent(html);
				var newTwoColumn = dom.select('td#' + uniqueID)[0];
				editor.selection.setCursorLocation(newTwoColumn);
			}
		}, {
			icon: false,
			text: '•\xa0Auto 4 Column',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:auto-4"><tr><td id="' + uniqueID + '"></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
				editor.insertContent(html);
				var newTwoColumn = dom.select('td#' + uniqueID)[0];
				editor.selection.setCursorLocation(newTwoColumn);
			}
		}, {
			icon: false,
			text: '•\xa0Fixed 2 Column',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:fixed-2"><tr><td id="' + uniqueID + '"></td><td></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
				editor.insertContent(html);
				var newTwoColumn = dom.select('td#' + uniqueID)[0];
				editor.selection.setCursorLocation(newTwoColumn);
			}
		}, {
			icon: false,
			text: '•\xa0Fixed 3 Column',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:fixed-3"><tr><td id="' + uniqueID + '"></td><td></td><td></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
				editor.insertContent(html);
				var newTwoColumn = dom.select('td#' + uniqueID)[0];
				editor.selection.setCursorLocation(newTwoColumn);
			}
		}, {
			icon: false,
			text: '•\xa0Fixed 4 Column',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:fixed-4"><tr><td id="' + uniqueID + '"></td><td></td><td></td><td></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
				editor.insertContent(html);
				var newTwoColumn = dom.select('td#' + uniqueID)[0];
				editor.selection.setCursorLocation(newTwoColumn);
			}
		}, ],
	});
});

/*
 * EOF: add-multiple-columns / plugin.js / 27200615
 */
