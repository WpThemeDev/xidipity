/**
 * WordPress Xidipity Theme
 * Tinymce add-template plugin 
 *
 * ###:  plugin.js
 * bld:  28200701
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_template', function(editor) {
	'use strict';
	editor.addButton('add_template', {
		title: 'Add Template',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYsMkEyLDIgMCAwLDAgNCw0VjIwQTIsMiAwIDAsMCA2LDIySDE4QTIsMiAwIDAsMCAyMCwyMFY4TDE0LDJINk02LDRIMTNWOUgxOFYyMEg2VjRNOCwxMlYxNEgxNlYxMkg4TTgsMTZWMThIMTNWMTZIOFoiIC8+PC9zdmc+',
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
					style: "direction: ltr; text-align: left; height: 100%; color: #504e4b; border: 1px solid #e9e7e4; font-family: monospace; white-space: pre-wrap;"
				},
				onSubmit: function() {
					var html = document.getElementsByClassName("mce-textbox")[0].value.trim();
					editor.insertContent(html.replace("`t\s*`t","`t"));
				}
			}, {});
		}
	});
});

/*
 * EOF: add-template / plugin.js / 28200701
 */
