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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY19mbHVlbnRfdGV4dF9jb2xvcl8yNF9maWxsZWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i8J+UjS1Qcm9kdWN0LUljb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNfZmx1ZW50X3RleHRfY29sb3JfMjRfZmlsbGVkIiBmaWxsPSIjMjEyMTIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTcuNzUsMTQuNTAwNTQzIEMxOC45OTI2NDA3LDE0LjUwMDU0MyAyMCwxNS41MDc5MDIzIDIwLDE2Ljc1MDU0MyBMMjAsMTkuNzUwMzgzNyBDMjAsMjAuOTkzMDI0MyAxOC45OTI2NDA3LDIyLjAwMDM4MzcgMTcuNzUsMjIuMDAwMzgzNyBMNS4yNSwyMi4wMDAzODM3IEM0LjAwNzM1OTMxLDIyLjAwMDM4MzcgMywyMC45OTMwMjQzIDMsMTkuNzUwMzgzNyBMMywxNi43NTA1NDMgQzMsMTUuNTA3OTAyMyA0LjAwNzM1OTMxLDE0LjUwMDU0MyA1LjI1LDE0LjUwMDU0MyBMMTcuNzUsMTQuNTAwNTQzIFogTTcuMDUyNTIyMjQsMTEuOTY5NDI5OSBMMTAuODA2MTMzNCwyLjQ3NDI3NDExIEMxMS4wNDE1MjE2LDEuODc4ODM0NzEgMTEuODQ4NjM3NiwxLjg0NDE0NTgzIDEyLjE1MDgzOTgsMi4zNjk3NTAxMiBMMTIuMjAxMzIyOSwyLjQ3NDg2Njc1IEwxNS45NDc3MTE4LDExLjk3NTM1MjcgQzE2LjA5OTY2MzcsMTIuMzYwNjg4MyAxNS45MTA0Njg4LDEyLjc5NjI0NTggMTUuNTI1MTMzMiwxMi45NDgxOTc3IEMxNS4xNzE5MDksMTMuMDg3NDg3IDE0Ljc3NjQ4NDMsMTIuOTQwMTE4MiAxNC41OTU5OTE1LDEyLjYxNzc4MjkgTDE0LjU1MjI4ODIsMTIuNTI1NjE5MiBMMTMuNTU2LDEwIEw5LjQ0MywxMCBMOC40NDc0Nzc3NiwxMi41MjA4ODE3IEM4LjMwNzg4ODQ5LDEyLjg3Mzk4NzUgNy45MzAxMzE4LDEzLjA2MjA3ODIgNy41NzE0MzQ3NiwxMi45NzM2ODA4IEw3LjQ3NDI3NDExLDEyLjk0MjYzMzYgQzcuMTIxMTY4MywxMi44MDMwNDQzIDYuOTMzMDc3NTgsMTIuNDI1Mjg3NiA3LjAyMTQ3NTAxLDEyLjA2NjU5MDYgTDcuMDUyNTIyMjQsMTEuOTY5NDI5OSBMMTAuODA2MTMzNCwyLjQ3NDI3NDExIEw3LjA1MjUyMjI0LDExLjk2OTQyOTkgWiBNMTEuNTAyNzQzNiw0Ljc5MjI2NDAyIEwxMC4wMzYsOC41IEwxMi45NjQsOC41IEwxMS41MDI3NDM2LDQuNzkyMjY0MDIgWiIgaWQ9IvCfjqgtQ29sb3IiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
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
