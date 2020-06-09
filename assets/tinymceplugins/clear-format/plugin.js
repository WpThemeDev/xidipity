/**
 * WordPress Xidipity Theme
 * Tinymce clear-format plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('clear_format', function(editor) {
	'use strict';
	editor.addButton('clear_format', {
		title: 'Clear Format',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgOFY1SDYuMzlsMyAzaDEuODNsLS41NSAxLjI4IDIuMDkgMi4xTDE0LjIxIDh6TTMuNDEgNC44NkwyIDYuMjdsNi45NyA2Ljk3TDYuNSAxOWgzbDEuNTctMy42NkwxNi43MyAyMWwxLjQxLTEuNDF6Ii8+PC9zdmc+',
		cmd: 'RemoveFormat'
	});
});

/*
 * EOF: clear-format / plugin.js / 27200615
 */
