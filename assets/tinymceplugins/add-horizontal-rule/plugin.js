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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDQ1LjIgNDQuOTEyIEwgNDUuMiA1MCBMIDQwLjg4IDQ3LjE5MiBMIDI5LjM4NCAyNS41OTIgQyAzMC45NiAyNS4wOTggMzIuNDE1IDI0LjI4MSAzMy42NTYgMjMuMTkyIE0gMzMuMiAxNCBDIDMzLjIgMTcuOTc2IDI5Ljk3NiAyMS4yIDI2IDIxLjIgQyAyNS42NDggMjEuMjI0IDI1LjI5NiAyMS4yMjQgMjQuOTQ0IDIxLjIgTCAxMS4xMiA0Ny4xOTIgTCA2LjggNTAgTCA2LjggNDQuOTEyIEwgMjAuNjk2IDE4LjggQyAxNy4wMDEgMTQuNjY5IDE5LjE2MyA4LjA4NyAyNC41ODggNi45NTIgQyAyNS4wNTMgNi44NTUgMjUuNTI2IDYuODA0IDI2IDYuOCBMIDI2IDIgQyAyNy4zMjUgMiAyOC40IDMuMDc1IDI4LjQgNC40IEwgMjguNCA3LjIzMiBDIDMxLjI3IDguMjQ3IDMzLjE5MSAxMC45NTYgMzMuMiAxNCBNIDI4LjQgMTQgQyAyOC40IDEyLjE1MiAyNi40IDEwLjk5OCAyNC44IDExLjkyMiBDIDIzLjIgMTIuODQ1IDIzLjIgMTUuMTU1IDI0LjggMTYuMDc4IEMgMjUuMTY1IDE2LjI4OSAyNS41NzkgMTYuNCAyNiAxNi40IEMgMjcuMzI1IDE2LjQgMjguNCAxNS4zMjUgMjguNCAxNCBNIDcuMzI4IDIxLjIgTCAxMS42IDI1LjUyIEwgOC4xNDQgMzIuMTQ0IEwgMi4yNCAyNi4yNCBNIDI2IDM5LjgyNCBMIDIyLjQgMzYuMiBMIDE4LjggNDIuOCBMIDI2IDUwIEwgMzMuMiA0Mi44IEwgMjkuNjcyIDM2LjE1MiBNIDQ0LjY3MiAyMS4yIEwgNDAuNCAyNS41MiBMIDQ0IDMyLjE0NCBMIDQ5Ljc2IDI2LjI0IFoiLz4KPC9zdmc+',
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
