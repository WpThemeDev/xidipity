/**
 * WordPress Xidipity Theme
 * Tinymce toggle-fullscreen plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('toggle_fullscreen', function(editor) {
	'use strict';
	editor.addButton('toggle_fullscreen', {
		title: 'Toggle Full Screen',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcgN0g3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1aDEwYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01ek03IDE1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+',
		onclick: function() {
			editor.execCommand('mceFullscreen');
		}
	});
});

/*
 * EOF: toggle-fullscreen / plugin.js / 27200615
 */
