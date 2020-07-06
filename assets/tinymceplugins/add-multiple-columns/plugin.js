/**
 * WordPress Xidipity Theme
 * Tinymce add-multiple-columns plugin
 *
 * ###:  plugin.js
 * bld:  28200715
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_multi_cols', function(editor) {
	'use strict';
	editor.addButton('add_multi_cols', {
		type: 'splitbutton',
		title: 'Multi Column',
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNCwySDZBMiwyIDAgMCwwIDQsNFYyMEEyLDIgMCAwLDAgNiwyMkgxOEEyLDIgMCAwLDAgMjAsMjBWOEwxNCwyTTE4LDIwSDZWNEgxM1Y5SDE4VjIwWiIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAuNDcyNSwgMC4wNDgpIj4KICAgIDxwYXRoIGQ9Ik0gMTIuNDIyIDEwLjY2NiBMIDE1LjkyMiAxMC42NjYgTCAxNS45MjIgMTguNDQzIEwgMTIuNDIyIDE4LjQ0MyBMIDEyLjQyMiAxMC42NjYgWiIvPgogICAgPHBhdGggZD0iTSA3LjEzMyAxMC42NTIgTCAxMC42MzMgMTAuNjUyIEwgMTAuNjMzIDE4LjQyOSBMIDcuMTMzIDE4LjQyOSBMIDcuMTMzIDEwLjY1MiBaIi8+CiAgPC9nPgo8L3N2Zz4=',
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
 * EOF: add-multiple-columns / plugin.js / 28200715
 */
