/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-color plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_color', function(editor) {
	'use strict';
	editor.addButton('apply_txt_color', {
		type: 'splitbutton',
		title: 'Text Color',
		icon: true,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDQwLjY2NyAyNiBDIDM4LjQ1OCAyNiAzNi42NjcgMjQuMjA5IDM2LjY2NyAyMiBDIDM2LjY2NyAxOS43OTEgMzguNDU4IDE4IDQwLjY2NyAxOCBDIDQyLjg3NiAxOCA0NC42NjcgMTkuNzkxIDQ0LjY2NyAyMiBDIDQ0LjY2NyAyNC4yMDkgNDIuODc2IDI2IDQwLjY2NyAyNiBNIDMyLjY2NyAxNS4zMzMgQyAzMC40NTggMTUuMzMzIDI4LjY2NyAxMy41NDIgMjguNjY3IDExLjMzMyBDIDI4LjY2NyA5LjEyNCAzMC40NTggNy4zMzMgMzIuNjY3IDcuMzMzIEMgMzQuODc2IDcuMzMzIDM2LjY2NyA5LjEyNCAzNi42NjcgMTEuMzMzIEMgMzYuNjY3IDEzLjU0MiAzNC44NzYgMTUuMzMzIDMyLjY2NyAxNS4zMzMgTSAxOS4zMzMgMTUuMzMzIEMgMTcuMTI0IDE1LjMzMyAxNS4zMzMgMTMuNTQyIDE1LjMzMyAxMS4zMzMgQyAxNS4zMzMgOS4xMjQgMTcuMTI0IDcuMzMzIDE5LjMzMyA3LjMzMyBDIDIxLjU0MiA3LjMzMyAyMy4zMzMgOS4xMjQgMjMuMzMzIDExLjMzMyBDIDIzLjMzMyAxMy41NDIgMjEuNTQyIDE1LjMzMyAxOS4zMzMgMTUuMzMzIE0gMTEuMzMzIDI2IEMgOS4xMjQgMjYgNy4zMzMgMjQuMjA5IDcuMzMzIDIyIEMgNy4zMzMgMTkuNzkxIDkuMTI0IDE4IDExLjMzMyAxOCBDIDEzLjU0MiAxOCAxNS4zMzMgMTkuNzkxIDE1LjMzMyAyMiBDIDE1LjMzMyAyNC4yMDkgMTMuNTQyIDI2IDExLjMzMyAyNiBNIDI2IDIgQyAxMi43NDUgMiAyIDEyLjc0NSAyIDI2IEMgMiAzOS4yNTUgMTIuNzQ1IDUwIDI2IDUwIEMgMjguMjA5IDUwIDMwIDQ4LjIwOSAzMCA0NiBDIDMwIDQ0Ljk2IDI5LjYgNDQuMDI3IDI4Ljk2IDQzLjMzMyBDIDI4LjM0NyA0Mi42MTMgMjcuOTQ3IDQxLjY4IDI3Ljk0NyA0MC42NjcgQyAyNy45NDcgMzguNDU4IDI5LjczOCAzNi42NjcgMzEuOTQ3IDM2LjY2NyBMIDM2LjY2NyAzNi42NjcgQyA0NC4wMyAzNi42NjcgNTAgMzAuNjk3IDUwIDIzLjMzMyBDIDUwIDExLjU0NyAzOS4yNTMgMiAyNiAyIFoiLz4KPC9zdmc+',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIgLz48L3N2Zz4=' ,
			text: '\xa0Black',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:blk">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoODIsIDgyLCA4Mik7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Grey',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:bas-3">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMjIwLCAyMCwgNjApOyIvPgo8L3N2Zz4=',
			text: '\xa0Red',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:red">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMCwgNzEsIDE3MSk7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Primary',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:pri">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCA5OCwgMCk7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Secondary',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:sec">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMCwgMTAwLCAwKTsiLz4KPC9zdmc+',
			text: '\xa0Green',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:green">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMTI4LCAwLCAxMjgpOyIvPgo8L3N2Zz4=',
			text: '\xa0Purple',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:purple">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMCwgMCwgMjU1KTsiLz4KPC9zdmc+',
			text: '\xa0Blue',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:blue">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDIwQTgsOCAwIDAsMSA0LDEyQTgsOCAwIDAsMSAxMiw0QTgsOCAwIDAsMSAyMCwxMkE4LDggMCAwLDEgMTIsMjBNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaIiAvPjwvc3ZnPg==',
			text: '\xa0White',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:wht">{$selection}</span>');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-color / plugin.js / 27200615
 */
