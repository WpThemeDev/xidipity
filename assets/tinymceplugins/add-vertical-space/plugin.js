/**
 * WordPress Xidipity Theme
 * Tinymce add-vertical-space plugin 
 *
 * ###:  plugin.js
 * bld:  30201201
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('add_vert_space', function(editor) {
	'use strict';
	editor.addButton('add_vert_space', {
		type: 'splitbutton',
		title: 'Vertical Space',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc5MjkgNi4yMDcxMUMxNC4xODM0IDYuNTk3NjMgMTQuODE2NiA2LjU5NzYzIDE1LjIwNzEgNi4yMDcxMUMxNS41OTc2IDUuODE2NTggMTUuNTk3NiA1LjE4MzQyIDE1LjIwNzEgNC43OTI4OUwxMi43MDcxIDIuMjkyODlDMTIuMzE2NiAxLjkwMjM3IDExLjY4MzQgMS45MDIzNyAxMS4yOTI5IDIuMjkyODlMOC43OTI4OSA0Ljc5Mjg5QzguNDAyMzcgNS4xODM0MiA4LjQwMjM3IDUuODE2NTggOC43OTI4OSA2LjIwNzExQzkuMTgzNDIgNi41OTc2MyA5LjgxNjU4IDYuNTk3NjMgMTAuMjA3MSA2LjIwNzExTDExIDUuNDE0MjFMMTEgOEMxMSA4LjU1MjI4IDExLjQ0NzcgOSAxMiA5QzEyLjU1MjMgOSAxMyA4LjU1MjI4IDEzIDhWNS40MTQyMUwxMy43OTI5IDYuMjA3MTFaIiBmaWxsPSIjMjEyMTIxIi8+CjxwYXRoIGQ9Ik0xMy43OTI5IDE3Ljc5MjlDMTQuMTgzNCAxNy40MDI0IDE0LjgxNjYgMTcuNDAyNCAxNS4yMDcxIDE3Ljc5MjlDMTUuNTk3NiAxOC4xODM0IDE1LjU5NzYgMTguODE2NiAxNS4yMDcxIDE5LjIwNzFMMTIuNzA3MSAyMS43MDcxQzEyLjMxNjYgMjIuMDk3NiAxMS42ODM0IDIyLjA5NzYgMTEuMjkyOSAyMS43MDcxTDguNzkyODkgMTkuMjA3MUM4LjQwMjM3IDE4LjgxNjYgOC40MDIzNyAxOC4xODM0IDguNzkyODkgMTcuNzkyOUM5LjE4MzQyIDE3LjQwMjQgOS44MTY1OCAxNy40MDI0IDEwLjIwNzEgMTcuNzkyOUwxMSAxOC41ODU4TDExIDE2QzExIDE1LjQ0NzcgMTEuNDQ3NyAxNSAxMiAxNUMxMi41NTIzIDE1IDEzIDE1LjQ0NzcgMTMgMTZWMTguNTg1OEwxMy43OTI5IDE3Ljc5MjlaIiBmaWxsPSIjMjEyMTIxIi8+CjxwYXRoIGQ9Ik02IDExQzUuNDQ3NzIgMTEgNSAxMS40NDc3IDUgMTJDNSAxMi41NTIzIDUuNDQ3NzIgMTMgNiAxM0gxOEMxOC41NTIzIDEzIDE5IDEyLjU1MjMgMTkgMTJDMTkgMTEuNDQ3NyAxOC41NTIzIDExIDE4IDExSDZaIiBmaWxsPSIjMjEyMTIxIi8+Cjwvc3ZnPgo=',
		menu: [{
			text: '\xBD Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="vs:1/2">&nbsp;</div>');
			}
		}, {
			text: '\xBE Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="vs:3/4">&nbsp;</div>');
			}
		}, {
			text: '1 Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="vs:1">&nbsp;</div>');
			}
		}, {
			text: '1\xBD Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="vs:1-1/2">&nbsp;</div>');
			}
		}, {
			text: '2 Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="vs:2">&nbsp;</div>');
			}
		}, {
			text: '2\xBD Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="vs:2-1/2">&nbsp;</div>');
			}
		}, {
			text: '3 Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="vs:3">&nbsp;</div>');
			}
		}]
	});
});

/*
 * EOF: add-vertical-space / plugin.js / 30201201
 */
