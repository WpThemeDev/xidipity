/**
 * WordPress Xidipity Theme
 * Tinymce add-template plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_template', function(editor) {
	'use strict';
	editor.addButton('add_template', {
		title: 'Add Template',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IgoJIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJCb3VuZGluZ19Cb3giPgoJPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CjwvZz4KPGcgaWQ9IkZsYXQiPgoJPGcgaWQ9InVpX3g1Rl9zcGVjX3g1Rl9oZWFkZXJfY29weV8yIj4KCTwvZz4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMTcsMTkuMjIgNSwxOS4yMiA1LDcgMTIsNyAxMiw1IDMsNSAzLDIxIDE5LDIxIDE5LDEyIDE3LDEyIAkJIi8+CgkJPHBhdGggZD0iTTE5LDJoLTJ2M2gtM2MwLjAxLDAuMDEsMCwyLDAsMmgzdjIuOTljMC4wMSwwLjAxLDIsMCwyLDBWN2gzVjVoLTNWMnoiLz4KCQk8cmVjdCB4PSI3IiB5PSI5IiB3aWR0aD0iOCIgaGVpZ2h0PSIyIi8+CgkJPHBvbHlnb24gcG9pbnRzPSI3LDEyIDcsMTQgMTUsMTQgMTUsMTIgMTIsMTIgCQkiLz4KCQk8cmVjdCB4PSI3IiB5PSIxNSIgd2lkdGg9IjgiIGhlaWdodD0iMiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=',
		onclick: function() {
			editor.windowManager.open({
				name: 'embed',
				title: 'Add Template',
				width: window.outerWidth * .5,
				minWidth: 320,
				height: window.outerHeight * .6,
				minHeight: 640,
				body: {
					id: "embed",
					type: "textbox",
					name: "mce_txt",
					multiline: !0,
					minWidth: window.innerWidth * .4,
					minHeight: window.innerHeight * .61,
					style: "direction: ltr; text-align: left; height: 100%; font-family: 'Roboto Mono', monospace; color: #212121; border: 1px solid #f5f5f5;"
				},
				onSubmit: function() {
					var html = document.getElementsByClassName("mce-textbox")[0].value.trim();
					editor.insertContent(html);
				}
			}, {});
		}
	});
});

/*
 * EOF: add-template / plugin.js / 27200615
 */
