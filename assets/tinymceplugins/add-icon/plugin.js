/**
 * WordPress Xidipity Theme
 * Tinymce add-icon plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_icon', function(editor, url) {
	'use strict';
	editor.addButton('add_icon', {
		title: 'Add Icon',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDMxIDEgTCA0NiAxNiBMIDQ2IDQ2IEMgNDYgNDguNzYyIDQzLjc2MiA1MSA0MSA1MSBMIDExIDUxIEMgOC4yNCA1MSA2IDQ4Ljc2MiA2IDQ2IEwgNiA2IEMgNiAzLjI0IDguMjQgMSAxMSAxIEwgMzEgMSBNIDQxIDQ2IEwgNDEgMTguNSBMIDI4LjUgMTguNSBMIDI4LjUgNiBMIDExIDYgTCAxMSA0NiBMIDQxIDQ2IE0gMzguNSAyOC41IEwgMzguNSA0My41IEwgMTMuNSA0My41IEwgMjYgMzEgTCAzMSAzNiBNIDIxIDIyLjI1IEMgMjEgMjQuMzIgMTkuMzIgMjYgMTcuMjUgMjYgQyAxNS4xOCAyNiAxMy41IDI0LjMyIDEzLjUgMjIuMjUgQyAxMy41IDIwLjE4IDE1LjE4IDE4LjUgMTcuMjUgMTguNSBDIDE5LjMyIDE4LjUgMjEgMjAuMTggMjEgMjIuMjUgWiIvPgo8L3N2Zz4=',
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
					if (html.includes('fa-')) {
						html = html.replace('</i>', '&#8203;</i>');
					} else if (html.includes('<img')) {
						html = html.replace('<img', '<img class="dsp:inline-block"');
					}
					html = html.concat('&nbsp;');
					editor.insertContent(html);
				}
			}, {});
		}
	});
});

/*
 * EOF: add-icon / plugin.js / 27200615
 */
