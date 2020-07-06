/**
 * WordPress Xidipity Theme
 * Tinymce add-horizontal-rule plugin
 *
 * ###:  plugin.js
 * bld:  28200715
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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNCwySDZBMiwyIDAgMCwwIDQsNFYyMEEyLDIgMCAwLDAgNiwyMkgxOEEyLDIgMCAwLDAgMjAsMjBWOEwxNCwyTTE4LDIwSDZWNEgxM1Y5SDE4VjIwWiIvPgogIDxwYXRoIGQ9Ik0gMTUuOTM3IDE0LjE2NSBMIDguMDYzIDE0LjE2NSBDIDcuODA5IDE0LjE2NSA3LjYgMTQuMzU5IDcuNiAxNC41OTggTCA3LjYgMTcuNjgyIEMgNy42IDE3LjkyMSA3LjgwOSAxOC4xMTYgOC4wNjMgMTguMTE2IEwgMTUuOTM3IDE4LjExNiBDIDE2LjE5MSAxOC4xMTYgMTYuNCAxNy45MjEgMTYuNCAxNy42ODIgTCAxNi40IDE0LjU5OCBDIDE2LjQgMTQuMzU5IDE2LjE5MSAxNC4xNjUgMTUuOTM3IDE0LjE2NSBaIE0gNy42IDExLjAxOSBMIDcuNiAxMi45MiBMIDE2LjQgMTIuOTIgTCAxNi40IDExLjAxOSBMIDcuNiAxMS4wMTkgWiIvPgo8L3N2Zz4=',
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
 * EOF: add-horizontal-rule / plugin.js / 28200715
 */
