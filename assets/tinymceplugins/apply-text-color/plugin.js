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
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDNjLTQuOTcgMC05IDQuMDMtOSA5czQuMDMgOSA5IDljLjgzIDAgMS41LS42NyAxLjUtMS41IDAtLjM5LS4xNS0uNzQtLjM5LTEuMDEtLjIzLS4yNi0uMzgtLjYxLS4zOC0uOTkgMC0uODMuNjctMS41IDEuNS0xLjVIMTZjMi43NiAwIDUtMi4yNCA1LTUgMC00LjQyLTQuMDMtOC05LTh6bS01LjUgOWMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzUuNjcgOSA2LjUgOSA4IDkuNjcgOCAxMC41IDcuMzMgMTIgNi41IDEyem0zLTRDOC42NyA4IDggNy4zMyA4IDYuNVM4LjY3IDUgOS41IDVzMS41LjY3IDEuNSAxLjVTMTAuMzMgOCA5LjUgOHptNSAwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTMTMuNjcgNSAxNC41IDVzMS41LjY3IDEuNSAxLjVTMTUuMzMgOCAxNC41IDh6bTMgNGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzE2LjY3IDkgMTcuNSA5czEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXoiLz48L3N2Zz4=',
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
 * EOF: apply-text-color / plugin.js / 27200615
 */
