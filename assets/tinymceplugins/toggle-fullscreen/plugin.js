/**
 * WordPress Xidipity Theme
 * Tinymce toggle-fullscreen plugin 
 *
 * ###:  plugin.js
 * bld:  29201001
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('toggle_fullscreen', function(editor) {
	'use strict';
	editor.addButton('toggle_fullscreen', {
		title: 'Toggle Fullscreen',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjA2IDEzQzE1LjIgMTMgMTMuNjQgMTQuMzMgMTMuMjQgMTYuMUMxMi4yOSAxNS42OSAxMS40MiAxNS44IDEwLjc2IDE2LjA5QzEwLjM1IDE0LjMxIDguNzkgMTMgNi45NCAxM0M0Ljc3IDEzIDMgMTQuNzkgMyAxN0MzIDE5LjIxIDQuNzcgMjEgNi45NCAyMUM5IDIxIDEwLjY4IDE5LjM4IDEwLjg0IDE3LjMyQzExLjE4IDE3LjA4IDEyLjA3IDE2LjYzIDEzLjE2IDE3LjM0QzEzLjM0IDE5LjM5IDE1IDIxIDE3LjA2IDIxQzE5LjIzIDIxIDIxIDE5LjIxIDIxIDE3QzIxIDE0Ljc5IDE5LjIzIDEzIDE3LjA2IDEzTTYuOTQgMTkuODZDNS4zOCAxOS44NiA0LjEzIDE4LjU4IDQuMTMgMTdTNS4zOSAxNC4xNCA2Ljk0IDE0LjE0QzguNSAxNC4xNCA5Ljc1IDE1LjQyIDkuNzUgMTdTOC41IDE5Ljg2IDYuOTQgMTkuODZNMTcuMDYgMTkuODZDMTUuNSAxOS44NiAxNC4yNSAxOC41OCAxNC4yNSAxN1MxNS41IDE0LjE0IDE3LjA2IDE0LjE0QzE4LjYyIDE0LjE0IDE5Ljg4IDE1LjQyIDE5Ljg4IDE3UzE4LjYxIDE5Ljg2IDE3LjA2IDE5Ljg2TTIyIDEwLjVIMlYxMkgyMlYxMC41TTE1LjUzIDIuNjNDMTUuMzEgMi4xNCAxNC43NSAxLjg4IDE0LjIyIDIuMDVMMTIgMi43OUw5Ljc3IDIuMDVMOS43MiAyLjA0QzkuMTkgMS44OSA4LjYzIDIuMTcgOC40MyAyLjY4TDYgOUgxOEwxNS41NiAyLjY4TDE1LjUzIDIuNjNaIiAvPjwvc3ZnPg==',
		onclick: function () {
			editor.execCommand('mceFullscreen');
		}		
		
	});
});

/*
 * EOF: toggle-fullscreen / plugin.js / 29201001
 */
