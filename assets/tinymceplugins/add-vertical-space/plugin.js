/**
 * WordPress Xidipity Theme
 * Tinymce add-vertical-space plugin 
 *
 * ###:  plugin.js
 * bld:  28200715
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_vert_space', function(editor) {
	'use strict';
	editor.addButton('add_vert_space', {
		type: 'splitbutton',
		title: 'Vertical Space',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0gMTMuOTg1IDIgTCAxOS45NzYgOCBMIDE5Ljk3NiAxMi4xNyBDIDE5LjQ3NyAxMi4wNiAxOC45NzggMTIgMTguNDc4IDEyIEwgMTcuOTc5IDEyIEwgMTcuOTc5IDkgTCAxMi45ODcgOSBMIDEyLjk4NyA0IEwgNS45OTcgNCBMIDUuOTk3IDIwIEwgMTIuMTU4IDIwIEMgMTIuMzI4IDIwLjcyIDEyLjYxNyAyMS4zOSAxMi45ODcgMjIgTCA1Ljk5NyAyMiBDIDQuODk5IDIyIDQgMjEuMSA0IDIwIEwgNCA0IEMgNCAyLjkgNC44OTkgMiA1Ljk5NyAyIEwgMTMuOTg1IDIgWiIgc3R5bGU9IiIvPgogIDxwYXRoIGQ9Ik0gMTcuNzAyIDE0LjEyNCBMIDE2LjAzNSAxNC4xMjQgTCAxNi4wMzUgMTcuNDU3IEwgMTMuMjU2IDE3LjQ1NyBMIDEzLjI1NiAxNC4xMjQgTCAxMS41OSAxNC4xMjQgTCAxNC42NDUgMTAuNzkgTCAxNy43MDIgMTQuMTI0IE0gMTguNTM1IDIxLjkwMiBMIDIxLjU5IDE4LjU2OCBMIDE5LjkyMyAxOC41NjggTCAxOS45MjMgMTUuMjM1IEwgMTcuMTQ1IDE1LjIzNSBMIDE3LjE0NSAxOC41NjggTCAxNS40NzggMTguNTY4IEwgMTguNTM1IDIxLjkwMiBaIi8+Cjwvc3ZnPg==',
		menu: [{
			text: '•\xa0\xBD Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:1/2">&nbsp;</p>');
			}
		}, {
			text: '•\xa0\xBE Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:3/4">&nbsp;</p>');
			}
		}, {
			text: '•\xa01 Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<p>&nbsp;</p>');
			}
		}, {
			text: '•\xa01\xBD Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:1-1/2">&nbsp;</p>');
			}
		}, {
			text: '•\xa02 Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:2">&nbsp;</p>');
			}
		}, {
			text: '•\xa02\xBD Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:2-1/2">&nbsp;</p>');
			}
		}, {
			text: '•\xa03 Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:3">&nbsp;</p>');
			}
		}]
	});
});

/*
 * EOF: add-vertical-space / plugin.js / 28200715
 */
