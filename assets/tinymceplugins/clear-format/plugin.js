/**
 * WordPress Xidipity Theme
 * Tinymce clear-format plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('clear_format', function(editor) {
	'use strict';
	editor.addButton('clear_format', {
		title: 'Clear Format',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMuMjcgNUwyIDYuMjdsNi45NyA2Ljk3TDYuNSAxOWgzbDEuNTctMy42NkwxNi43MyAyMSAxOCAxOS43MyAzLjU1IDUuMjcgMy4yNyA1ek02IDV2LjE4TDguODIgOGgyLjRsLS43MiAxLjY4IDIuMSAyLjFMMTQuMjEgOEgyMFY1SDZ6Ii8+PC9zdmc+',
		cmd: 'RemoveFormat'
	});
});

/*
 * EOF: clear-format / plugin.js / 27200615
 */
