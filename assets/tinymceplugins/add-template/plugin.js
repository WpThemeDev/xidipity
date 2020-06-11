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
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAuNWgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMiAxNi41bDQtNGgtM3YtOWgtMnY5SDhsNCA0em05LTEzaC02djEuOTloNnYxNC4wM0gzVjUuNDloNlYzLjVIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnYtMTRjMC0xLjEtLjktMi0yLTJ6Ii8+PC9zdmc+',
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
