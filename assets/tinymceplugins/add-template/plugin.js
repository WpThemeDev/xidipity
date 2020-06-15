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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDExIDEgQyA4LjIzOSAxIDYgMy4yMzkgNiA2IEwgNiA0NiBDIDYgNDguNzYxIDguMjM5IDUxIDExIDUxIEwgNDEgNTEgQyA0My43NjEgNTEgNDYgNDguNzYxIDQ2IDQ2IEwgNDYgMTYgTCAzMSAxIEwgMTEgMSBNIDExIDYgTCAyOC41IDYgTCAyOC41IDE4LjUgTCA0MSAxOC41IEwgNDEgNDYgTCAxMSA0NiBMIDExIDYgTSAxNiAyNiBMIDE2IDMxIEwgMzYgMzEgTCAzNiAyNiBMIDE2IDI2IE0gMTYgMzYgTCAxNiA0MSBMIDI4LjUgNDEgTCAyOC41IDM2IEwgMTYgMzYgWiIvPgo8L3N2Zz4=',
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
