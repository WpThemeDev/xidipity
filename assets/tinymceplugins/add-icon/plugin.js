/**
 * WordPress Xidipity Theme
 * Tinymce add-icon plugin 
 *
 * ###:  plugin.js
 * bld:  28200715
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_icon', function(editor, url) {
	'use strict';
	editor.addButton('add_icon', {
		title: 'Add Icon',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LDJMMjAsOFYyMEEyLDIgMCAwLDEgMTgsMjJINkEyLDIgMCAwLDEgNCwyMFY0QTIsMiAwIDAsMSA2LDJIMTRNMTgsMjBWOUgxM1Y0SDZWMjBIMThNMTcsMTNWMTlIN0wxMiwxNEwxNCwxNk0xMCwxMC41QTEuNSwxLjUgMCAwLDEgOC41LDEyQTEuNSwxLjUgMCAwLDEgNywxMC41QTEuNSwxLjUgMCAwLDEgOC41LDlBMS41LDEuNSAwIDAsMSAxMCwxMC41WiIgLz48L3N2Zz4=',
		onclick: function() {
			editor.windowManager.open({
				name: 'icon',
				title: 'Embed Icon',
				width: window.outerWidth * .5,
				minWidth: 320,
				height: window.outerHeight * .2,
				minHeight: 160,
				body: {
					id: "embed",
					type: "textbox",
					name: "mce_txt",
					multiline: !0,
					minWidth: window.innerWidth * .4,
					minHeight: window.innerHeight * .15,
					style: "direction: ltr; text-align: left; height: 100%; font-family: 'Roboto Mono', monospace; color: #212121; border: 1px solid #f5f5f5;"
				},
				onSubmit: function() {
					var html = document.getElementsByClassName("mce-textbox")[0].value.trim();
					if (html.includes('<img')) {
						html = html.replace('<img', '<img class="dsp:inline-block"');
					}
					editor.insertContent(html.replace("`t\s*`t","`t"));
				}
			}, {});
		}
	});
});

/*
 * EOF: add-icon / plugin.js / 28200715
 */
