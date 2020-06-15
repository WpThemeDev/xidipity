/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-highlight plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_hilight', function(editor) {
	'use strict';
	editor.addButton('apply_txt_hilight', {
		type: 'splitbutton',
		title: 'Highlight',
		icon: true,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI2MHB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA2MCA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDQ1Ljc0NSAyIEMgNDQuNDY0IDIgNDMuMjMxIDIuNDU5IDQyLjI4NyAzLjQwMyBMIDI4LjIzOCAxNy40NzYgTCA0MS45MDEgMzEuMTM5IEwgNTUuOTc0IDE3LjA4OSBDIDU3LjgzNiAxNS4yMDMgNTcuODM2IDEyLjE1NiA1NS45NzQgMTAuMjQ2IEwgNDkuMTA3IDMuNDAzIEMgNDguMTYzIDIuNDU5IDQ2Ljk1NCAyIDQ1Ljc0NSAyIE0gMjUuOTE3IDE5Ljc3MyBMIDExLjUwNSAzNC4xODUgQyA5LjYxOCAzNi4wNzIgOS42MTggMzkuMTE4IDExLjU1MyA0MS4wNzcgQyA4LjYwMyA0NC4wNTEgNS42MDQgNDcuMDI2IDIuNjMgNTAgTCAxNi4zMTcgNTAgTCAxOC4zOTYgNDcuOTIgQyAyMC4yODIgNDkuNzU4IDIzLjMwNSA0OS43MzQgMjUuMTkxIDQ3Ljg3MiBMIDM5LjU3OSAzMy40NiIvPgo8L3N2Zz4=',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDUxKTsiLz4KPC9zdmc+' ,
			text: '\xa0Yellow',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:highlight">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMCwgNzEsIDE3MSk7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Primary',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:tint-pri+1">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCA5OCwgMCk7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Secondary',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:tint-sec+1">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMloiIHN0eWxlPSJmaWxsOiByZ2IoMjA2LCAyMDYsIDIwNik7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Base',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:tint-bas+1">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIgLz48L3N2Zz4=',
			text: '\xa0Dark',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:pri txt:wht">{$selection}</span>');
			}
		}, ],
	});
});
/*
 * EOF: apply-text-highlight / plugin.js / 27200615
 */
