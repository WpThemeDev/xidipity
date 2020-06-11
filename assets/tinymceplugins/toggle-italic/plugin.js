/**
 * WordPress Xidipity Theme
 * Tinymce toggle-italic plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('toggle_italic', function(editor) {
	'use strict';
	editor.addButton('toggle_italic', {
		type: 'splitbutton',
		title: 'Italic',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgNHYzaDIuMjFsLTMuNDIgOEg2djNoOHYtM2gtMi4yMWwzLjQyLThIMThWNGgtOHoiLz48L3N2Zz4=',
		onclick: function() {
			editor.execCommand('mceReplaceContent', false, '<i>{$selection}</i>');
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgNHYzaDIuMjFsLTMuNDIgOEg2djNoOHYtM2gtMi4yMWwzLjQyLThIMThWNGgtOHoiLz48L3N2Zz4=',
			text: '\xa0Italic',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<i>{$selection}</i>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwLDExSDIzVjEzSDIwVjExTTEsMTFINFYxM0gxVjExTTEzLDFWNEgxMVYxSDEzTTQuOTIsMy41TDcuMDUsNS42NEw1LjYzLDcuMDVMMy41LDQuOTNMNC45MiwzLjVNMTYuOTUsNS42M0wxOS4wNywzLjVMMjAuNSw0LjkzTDE4LjM3LDcuMDVMMTYuOTUsNS42M00xMiw2QTYsNiAwIDAsMSAxOCwxMkMxOCwxNC4yMiAxNi43OSwxNi4xNiAxNSwxNy4yVjE5QTEsMSAwIDAsMSAxNCwyMEgxMEExLDEgMCAwLDEgOSwxOVYxNy4yQzcuMjEsMTYuMTYgNiwxNC4yMiA2LDEyQTYsNiAwIDAsMSAxMiw2TTE0LDIxVjIyQTEsMSAwIDAsMSAxMywyM0gxMUExLDEgMCAwLDEgMTAsMjJWMjFIMTRNMTEsMThIMTNWMTUuODdDMTQuNzMsMTUuNDMgMTYsMTMuODYgMTYsMTJBNCw0IDAgMCwwIDEyLDhBNCw0IDAgMCwwIDgsMTJDOCwxMy44NiA5LjI3LDE1LjQzIDExLDE1Ljg3VjE4WiIgLz48L3N2Zz4=',
			text: '\xa0Emphasis',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<em>{$selection}</em>');
			}
		}, ],
	});
});

/*
 * EOF: toggle-italic / plugin.js / 27200615
 */
