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
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMyAxNWg4di0ySDN2MnptMCA0aDh2LTJIM3Yyem0wLThoOFY5SDN2MnptMC02djJoOFY1SDN6bTEwIDBoOHYxNGgtOFY1eiIvPjwvc3ZnPg==',
		onclick: function() {
			var dom = editor.dom;
			var uniqueID = dom.uniqueId();
			var html = '<!--  xwp:EDITOR/MULTI/COL --><table class="cols:auto-2"><tr><td id="' + uniqueID + '"></td></tr></table><!-- /xwp:EDITOR/MULTI/COL -->';
			editor.insertContent(html);
			var newTwoColumn = dom.select('td#' + uniqueID)[0];
			editor.selection.setCursorLocation(newTwoColumn);
		},
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
