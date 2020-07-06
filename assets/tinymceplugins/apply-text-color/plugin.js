/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-color plugin
 *
 * ###:  plugin.js
 * bld:  28200715
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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDIyQTEwLDEwIDAgMCwxIDIsMTJBMTAsMTAgMCAwLDEgMTIsMkMxNy41LDIgMjIsNiAyMiwxMUE2LDYgMCAwLDEgMTYsMTdIMTQuMkMxMy45LDE3IDEzLjcsMTcuMiAxMy43LDE3LjVDMTMuNywxNy42IDEzLjgsMTcuNyAxMy44LDE3LjhDMTQuMiwxOC4zIDE0LjQsMTguOSAxNC40LDE5LjVDMTQuNSwyMC45IDEzLjQsMjIgMTIsMjJNMTIsNEE4LDggMCAwLDAgNCwxMkE4LDggMCAwLDAgMTIsMjBDMTIuMywyMCAxMi41LDE5LjggMTIuNSwxOS41QzEyLjUsMTkuMyAxMi40LDE5LjIgMTIuNCwxOS4xQzEyLDE4LjYgMTEuOCwxOC4xIDExLjgsMTcuNUMxMS44LDE2LjEgMTIuOSwxNSAxNC4zLDE1SDE2QTQsNCAwIDAsMCAyMCwxMUMyMCw3LjEgMTYuNCw0IDEyLDRNNi41LDEwQzcuMywxMCA4LDEwLjcgOCwxMS41QzgsMTIuMyA3LjMsMTMgNi41LDEzQzUuNywxMyA1LDEyLjMgNSwxMS41QzUsMTAuNyA1LjcsMTAgNi41LDEwTTkuNSw2QzEwLjMsNiAxMSw2LjcgMTEsNy41QzExLDguMyAxMC4zLDkgOS41LDlDOC43LDkgOCw4LjMgOCw3LjVDOCw2LjcgOC43LDYgOS41LDZNMTQuNSw2QzE1LjMsNiAxNiw2LjcgMTYsNy41QzE2LDguMyAxNS4zLDkgMTQuNSw5QzEzLjcsOSAxMyw4LjMgMTMsNy41QzEzLDYuNyAxMy43LDYgMTQuNSw2TTE3LjUsMTBDMTguMywxMCAxOSwxMC43IDE5LDExLjVDMTksMTIuMyAxOC4zLDEzIDE3LjUsMTNDMTYuNywxMyAxNiwxMi4zIDE2LDExLjVDMTYsMTAuNyAxNi43LDEwIDE3LjUsMTBaIiAvPjwvc3ZnPg==',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMzIgMyAzIDcuMDMyIDMgMTIgQyAzIDE2Ljk2OCA3LjAzMiAyMSAxMiAyMSBDIDE2Ljk2OCAyMSAyMSAxNi45NjggMjEgMTIgQyAyMSA3LjAzMiAxNi45NjggMyAxMiAzIFoiLz4KPC9zdmc+' ,
			text: '\xa0Black',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:blk">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMzIgMyAzIDcuMDMyIDMgMTIgQyAzIDE2Ljk2OCA3LjAzMiAyMSAxMiAyMSBDIDE2Ljk2OCAyMSAyMSAxNi45NjggMjEgMTIgQyAyMSA3LjAzMiAxNi45NjggMyAxMiAzIFoiIHN0eWxlPSJmaWxsOiByZ2IoODIsIDgyLCA4Mik7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Grey',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:bas-3">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMzIgMyAzIDcuMDMyIDMgMTIgQyAzIDE2Ljk2OCA3LjAzMiAyMSAxMiAyMSBDIDE2Ljk2OCAyMSAyMSAxNi45NjggMjEgMTIgQyAyMSA3LjAzMiAxNi45NjggMyAxMiAzIFoiIHN0eWxlPSJmaWxsOiByZ2IoMjIwLCAyMCwgNjApOyIvPgo8L3N2Zz4=',
			text: '\xa0Red',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:red">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMzIgMyAzIDcuMDMyIDMgMTIgQyAzIDE2Ljk2OCA3LjAzMiAyMSAxMiAyMSBDIDE2Ljk2OCAyMSAyMSAxNi45NjggMjEgMTIgQyAyMSA3LjAzMiAxNi45NjggMyAxMiAzIFoiIHN0eWxlPSJmaWxsOiByZ2IoMCwgNzEsIDE3MSk7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Primary',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:pri">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMzIgMyAzIDcuMDMyIDMgMTIgQyAzIDE2Ljk2OCA3LjAzMiAyMSAxMiAyMSBDIDE2Ljk2OCAyMSAyMSAxNi45NjggMjEgMTIgQyAyMSA3LjAzMiAxNi45NjggMyAxMiAzIFoiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCA5OCwgMCk7Ii8+Cjwvc3ZnPg==',
			text: '\xa0Secondary',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:sec">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMzIgMyAzIDcuMDMyIDMgMTIgQyAzIDE2Ljk2OCA3LjAzMiAyMSAxMiAyMSBDIDE2Ljk2OCAyMSAyMSAxNi45NjggMjEgMTIgQyAyMSA3LjAzMiAxNi45NjggMyAxMiAzIFoiIHN0eWxlPSJmaWxsOiByZ2IoMCwgMTAwLCAwKTsiLz4KPC9zdmc+',
			text: '\xa0Green',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:green">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMzIgMyAzIDcuMDMyIDMgMTIgQyAzIDE2Ljk2OCA3LjAzMiAyMSAxMiAyMSBDIDE2Ljk2OCAyMSAyMSAxNi45NjggMjEgMTIgQyAyMSA3LjAzMiAxNi45NjggMyAxMiAzIFoiIHN0eWxlPSJmaWxsOiByZ2IoMTI4LCAwLCAxMjgpOyIvPgo8L3N2Zz4=',
			text: '\xa0Purple',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:purple">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMzIgMyAzIDcuMDMyIDMgMTIgQyAzIDE2Ljk2OCA3LjAzMiAyMSAxMiAyMSBDIDE2Ljk2OCAyMSAyMSAxNi45NjggMjEgMTIgQyAyMSA3LjAzMiAxNi45NjggMyAxMiAzIFoiIHN0eWxlPSJmaWxsOiByZ2IoMCwgMCwgMjU1KTsiLz4KPC9zdmc+',
			text: '\xa0Blue',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:blue">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxMiAzIEMgNy4wMjMgMyAzIDcuMDIzIDMgMTIgQyAzIDE2Ljk3NyA3LjAyMyAyMSAxMiAyMSBDIDE2Ljk3NyAyMSAyMSAxNi45NzcgMjEgMTIgQyAyMSA3LjAyMyAxNi45NzcgMyAxMiAzIFogTSAxMiAxOS4yIEMgOC4wMzEgMTkuMiA0LjggMTUuOTY5IDQuOCAxMiBDIDQuOCA4LjAzMSA4LjAzMSA0LjggMTIgNC44IEMgMTUuOTY5IDQuOCAxOS4yIDguMDMxIDE5LjIgMTIgQyAxOS4yIDE1Ljk2OSAxNS45NjkgMTkuMiAxMiAxOS4yIFoiIHN0eWxlPSJzdHJva2U6IHJnYigwLCAwLCAwKTsiLz4KPC9zdmc+',
			text: '\xa0White',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:wht">{$selection}</span>');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-color / plugin.js / 28200715
 */
