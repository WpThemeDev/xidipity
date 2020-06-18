/**
 * WordPress Xidipity Theme
 * Tinymce add-horizontal-rule plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_horz_rule', function(editor) {
	'use strict';
	editor.addButton('add_horz_rule', {
		type: 'splitbutton',
		title: 'Horizontal Rule',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwIDE5Ljg4VjIyTDE4LjIgMjAuODNMMTMuNDEgMTEuODNBNC45NCA0Ljk0IDAgMCAwIDE1LjE5IDEwLjgzTTE1IDdBMyAzIDAgMCAxIDEyIDEwQTMuMjcgMy4yNyAwIDAgMSAxMS41NiAxMEw1LjggMjAuODNMNCAyMlYxOS44OEw5Ljc5IDlBMyAzIDAgMCAxIDEyIDRWMkExIDEgMCAwIDEgMTMgM1Y0LjE4QTMgMyAwIDAgMSAxNSA3TTEzIDdBMSAxIDAgMSAwIDEyIDhBMSAxIDAgMCAwIDEzIDdNNC4yMiAxMEw2IDExLjhMNC41NiAxNC41NkwyLjEgMTIuMU0xMiAxNy43NkwxMC41IDE2LjI1TDkgMTlMMTIgMjJMMTUgMTlMMTMuNTMgMTYuMjNNMTkuNzggMTBMMTggMTEuOEwxOS41IDE0LjU2TDIxLjkgMTIuMVoiIC8+PC9zdmc+',
		menu: [{
			text: '•\xa0Single Narrow',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:solid-thin wd:70%" />');
			}
		}, {
			text: '•\xa0Single Wide',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:solid-thin" />');
			}
		}, {
			text: '•\xa0Double Narrow',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:double wd:70%" />');
			}
		}, {
			text: '•\xa0Double Wide',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:double" />');
			}
		}, {
			text: '•\xa0Gradient Narrow',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:gradient wd:70%" />');
			}
		}, {
			text: '•\xa0Gradient Wide',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:gradient" />');
			}
		}, {
			text: '•\xa0Emblem Narrow',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="fx:r fxa:3 fxc:3 wd:100%"><div class="fx:r fxa:2 fxc:3 wd:25% sm)wd:30%"><div class="bkg:bas-400 ln wd:100%">&#8203;</div></div><div class="fx:r fxa:3 fxc:3 mar:hrz+1.5 txt:bas-500 fnt:weight-bold wd:3">/<span style="width:1px;">&#8203;</span>/</div><div class="fx:r fxa:1 fxc:3 wd:25% sm)wd:30%"><div class="bkg:bas-400 ln wd:100%">&#8203;</div></div></div>');
			}
		}, {
			text: '•\xa0Emblem Wide',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="fx:r fxa:3 fxc:3 wd:100%"><div class="fx:r fxa:2 fxc:3 wd:50%"><div class="bkg:bas-400 ln wd:100%">&#8203;</div></div><div class="fx:r fxa:3 fxc:3 mar:hrz+1.5 txt:bas-500 fnt:weight-bold wd:3">/<span style="width:1px;">&#8203;</span>/</div><div class="fx:r fxa:1 fxc:3 wd:50%"><div class="bkg:bas-400 ln wd:100%">&#8203;</div></div></div>');
			}
		}],
		onPostRender: function() {
			// default
			this.value = '<hr class="rul:solid-medium" />';
		}
	});
});

/*
 * EOF: add-horizontal-rule / plugin.js / 27200615
 */
