/**
 * WordPress Xidipity Theme
 * Tinymce toggle-fullscreen plugin 
 *
 * ###:  plugin.js
 * bld:  30201201
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('toggle_fullscreen', function(editor) {
	'use strict';
	editor.addButton('toggle_fullscreen', {
		title: 'Toggle Fullscreen',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTQgMTJjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yem0tMi05Yy00Ljk3IDAtOSA0LjAzLTkgOUgwbDQgNCA0LTRINWMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuNTEgMC0yLjkxLS40OS00LjA2LTEuM2wtMS40MiAxLjQ0QzguMDQgMjAuMyA5Ljk0IDIxIDEyIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05eiIvPjwvc3ZnPg==',
		onclick: function () {
			editor.execCommand('mceFullscreen');
		}		
		
	});
});

/*
 * EOF: toggle-fullscreen / plugin.js / 30201201
 */
