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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDUuNUwxMCA4SDE0TDEyIDUuNU0xOCAxMFYxNEwyMC41IDEyTDE4IDEwTTYgMTBMMy41IDEyTDYgMTRWMTBNMTQgMTZIMTBMMTIgMTguNUwxNCAxNk0yMSAzSDNDMS45IDMgMSAzLjkgMSA1VjE5QzEgMjAuMSAxLjkgMjEgMyAyMUgyMUMyMi4xIDIxIDIzIDIwLjEgMjMgMTlWNUMyMyAzLjkgMjIuMSAzIDIxIDNNMjEgMTlIM1Y1SDIxVjE5WiIgLz48L3N2Zz4=',
		cmd: 'mceFullscreen'
	});
});

/*
 * EOF: toggle-fullscreen / plugin.js / 27200615
 */
