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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNCwySDZBMiwyIDAgMCwwIDQsNFYyMEEyLDIgMCAwLDAgNiwyMkgxOEEyLDIgMCAwLDAgMjAsMjBWOEwxNCwyTTE4LDIwSDZWNEgxM1Y5SDE4VjIwWiIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDI5NjMsIDAsIDAsIDAuMDI5NjMsIDYuMjQ2MDc2LCA4LjI0NjA4MikiPgogICAgPGc+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xOTQuMTg4LDY4Ljg4NGM2LjcsMCwxMi4xMjktNS40MywxMi4xMjktMTIuMTI2di00NC42M2MwLTYuNy01LjQyOS0xMi4xMjgtMTIuMTI5LTEyLjEyOFMxODIuMDYsNS40MjgsMTgyLjA2LDEyLjEyOCB2NDQuNjNDMTgyLjA2LDYzLjQ1NCwxODcuNDg4LDY4Ljg4NCwxOTQuMTg4LDY4Ljg4NHoiLz4KICAgICAgICA8cGF0aCBkPSJNMzIzLjQ0NCwyNjcuOTE5aC0zNC42NTJsLTUzLjIzNy0xNTMuNzI4YzcuMDYyLTguOTYzLDExLjI5Ny0yMC4yNiwxMS4yOTctMzIuNTM0YzAtMjAuMjk2LTExLjU0NC0zNy45NDYtMjguNDA0LTQ2LjczMyB2MjUuMTE4YzAsMS45ODMtMC4yNDUsMy45MTEtMC42OTgsNS43NmMzLjA2LDQuNTMxLDQuODQ5LDkuOTg5LDQuODQ5LDE1Ljg1NWMwLDE1LjY2My0xMi43NDQsMjguNDA3LTI4LjQwNywyOC40MDcgYy0xNS42NjEsMC0yOC40MDUtMTIuNzQ0LTI4LjQwNS0yOC40MDdjMC01Ljg2NywxLjc4OS0xMS4zMjQsNC44NDgtMTUuODU2Yy0wLjQ1My0xLjg0OC0wLjY5OS0zLjc3Ni0wLjY5OS01Ljc1OXYtMjUuMTIgYy0xNi44Niw4Ljc4OS0yOC40MDYsMjYuNDM4LTI4LjQwNiw0Ni43MzRjMCwxMi4yNzQsNC4yMzQsMjMuNTcxLDExLjI5OSwzMi41MzVMOTkuNTg5LDI2Ny45MTlINjQuOTM3IGMtMy4xNjcsMC01Ljc0MywyLjU3Ny01Ljc0Myw1Ljc0NXY5LjU3NGMwLDMuMTY4LDIuNTc2LDUuNzQ2LDUuNzQzLDUuNzQ2aDI3LjM1NWwtMTMuMjM5LDM4LjIyNCBjLTAuNjA1LDEuNzUsMC4zMjIsMy42NTksMi4wNyw0LjI2NWwxLjM1OSwwLjQ3MmwtMTYuOTI0LDQ4Ljg1NGMtMC42MDQsMS43NSwwLjMyMiwzLjY1OCwyLjA3MSw0LjI2N2w5LjA1LDMuMTMzIGMxLjYwOSwwLjU1OSwzLjM4My0wLjE4Myw0LjExOC0xLjcyNGwyMi41NzgtNDcuMjk1bDQuODkxLDEuNjkzYzEuNzQ3LDAuNjA1LDMuNjU4LTAuMzIsNC4yNjQtMi4wNjhsMTcuMjU2LTQ5LjgxOWg1My4wMTR2Mi45NyBjMCw2LjI4LDUuMTA5LDExLjM5MiwxMS4zOTIsMTEuMzkyczExLjM5My01LjExLDExLjM5My0xMS4zOTJ2LTIuOTdoNTMuMDE1bDE3LjI1Niw0OS44MTljMC42MDQsMS43NDgsMi41MTYsMi42NzUsNC4yNjQsMi4wNjggbDQuODkzLTEuNjkzbDIyLjU3OCw0Ny4yOTVjMC43MzMsMS41NDEsMi41MDksMi4yODEsNC4xMTYsMS43MjRsOS4wNTItMy4xMzNjMS43NDktMC42MDUsMi42NzUtMi41MTUsMi4wNjktNC4yNjcgbC0xNi45MjQtNDguODU0bDEuMzU5LTAuNDcyYzEuNzQ4LTAuNjA0LDIuNjc2LTIuNTE0LDIuMDY4LTQuMjY1bC0xMy4yMzgtMzguMjI0aDI3LjM1NGMzLjE2NywwLDUuNzQ0LTIuNTc4LDUuNzQ0LTUuNzQ2di05LjU3NCBDMzI5LjE4OCwyNzAuNDk2LDMyNi42MTEsMjY3LjkxOSwzMjMuNDQ0LDI2Ny45MTl6IE0yMDUuNTgsMjY3LjkxOXYtMi45NzJjMC02LjI4MS01LjEwNy0xMS4zOTQtMTEuMzkyLTExLjM5NCBzLTExLjM5Miw1LjExMS0xMS4zOTIsMTEuMzk0djIuOTcyaC00NS43Mmw0Ni42MzMtMTM0LjY1MWMzLjM4NywwLjY4OCw2Ljg5MSwxLjA1LDEwLjQ3OCwxLjA1YzMuNTg5LDAsNy4wOTItMC4zNjIsMTAuNDc5LTEuMDUgbDQ2LjYzNSwxMzQuNjUxSDIwNS41OHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+',
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
