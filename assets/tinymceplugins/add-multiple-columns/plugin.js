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
		title: 'Multi Column',
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDMgMyBMIDIzLjQ0NSAzIEwgMjMuNDQ1IDguMTEyIEwgMyA4LjExMiBMIDMgMyBNIDI4LjU1NSAzIEwgNDkgMyBMIDQ5IDguMTEyIEwgMjguNTU1IDguMTEyIEwgMjguNTU1IDMgTSAzIDEzLjIyMyBMIDIzLjQ0NSAxMy4yMjMgTCAyMy40NDUgMTguMzM0IEwgMyAxOC4zMzQgTCAzIDEzLjIyMyBNIDI4LjU1NSAxMy4yMjMgTCA0OSAxMy4yMjMgTCA0OSAxOC4zMzQgTCAyOC41NTUgMTguMzM0IEwgMjguNTU1IDEzLjIyMyBNIDMgMjMuNDQ1IEwgMjMuNDQ1IDIzLjQ0NSBMIDIzLjQ0NSAyOC41NTUgTCAzIDI4LjU1NSBMIDMgMjMuNDQ1IE0gMjguNTU1IDIzLjQ0NSBMIDQ5IDIzLjQ0NSBMIDQ5IDI4LjU1NSBMIDI4LjU1NSAyOC41NTUgTCAyOC41NTUgMjMuNDQ1IE0gMyAzMy42NjYgTCAyMy40NDUgMzMuNjY2IEwgMjMuNDQ1IDM4Ljc3NyBMIDMgMzguNzc3IEwgMyAzMy42NjYgTSAyOC41NTUgMzMuNjY2IEwgNDkgMzMuNjY2IEwgNDkgMzguNzc3IEwgMjguNTU1IDM4Ljc3NyBMIDI4LjU1NSAzMy42NjYgTSAzIDQzLjg4OCBMIDIzLjQ0NSA0My44ODggTCAyMy40NDUgNDkgTCAzIDQ5IEwgMyA0My44ODggTSAyOC41NTUgNDMuODg4IEwgNDkgNDMuODg4IEwgNDkgNDkgTCAyOC41NTUgNDkgTCAyOC41NTUgNDMuODg4IFoiLz4KPC9zdmc+',
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
