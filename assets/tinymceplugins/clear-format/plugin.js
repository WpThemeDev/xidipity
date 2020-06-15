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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI2MHB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA2MCA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDE1LjYyNSAzIEwgMTUuNjI1IDMuNTE3IEwgMjMuNzMzIDExLjYyNSBMIDMwLjYzMyAxMS42MjUgTCAyOC41NjMgMTYuNDU1IEwgMzQuNiAyMi40OTMgTCAzOS4yMjkgMTEuNjI1IEwgNTUuODc1IDExLjYyNSBMIDU1Ljg3NSAzIEwgMTUuNjI1IDMgTSA3Ljc3NiAzIEwgNC4xMjUgNi42NTEgTCAyNC4xNjQgMjYuNjkgTCAxNy4wNjMgNDMuMjUgTCAyNS42ODggNDMuMjUgTCAzMC4yMDEgMzIuNzI4IEwgNDYuNDc0IDQ5IEwgNTAuMTI1IDQ1LjM0OSBMIDguNTgxIDMuNzc2IEwgNy43NzYgMyBaIi8+Cjwvc3ZnPg==',
		cmd: 'RemoveFormat'
	});
});

/*
 * EOF: clear-format / plugin.js / 27200615
 */
