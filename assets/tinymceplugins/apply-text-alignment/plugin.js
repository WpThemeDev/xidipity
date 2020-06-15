/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-alignment plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_align', function(editor) {
	'use strict';
	editor.addButton('apply_txt_align', {
		type: 'splitbutton',
		title: 'Align Text',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDMgMyBMIDQ5IDMgTCA0OSA4LjExMSBMIDMgOC4xMTEgTCAzIDMgTSAzIDEzLjIyMyBMIDMzLjY2NiAxMy4yMjMgTCAzMy42NjYgMTguMzM0IEwgMyAxOC4zMzQgTCAzIDEzLjIyMyBNIDMgMjMuNDQ1IEwgNDkgMjMuNDQ1IEwgNDkgMjguNTU1IEwgMyAyOC41NTUgTCAzIDIzLjQ0NSBNIDMgMzMuNjY2IEwgMzMuNjY2IDMzLjY2NiBMIDMzLjY2NiAzOC43NzcgTCAzIDM4Ljc3NyBMIDMgMzMuNjY2IE0gMyA0My44ODkgTCA0OSA0My44ODkgTCA0OSA0OSBMIDMgNDkgTCAzIDQzLjg4OSBaIi8+Cjwvc3ZnPg==',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThIM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align left',
			onclick: function() {
				editor.execCommand('JustifyLeft');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNyAxNXYyaDEwdi0ySDd6bS00IDZoMTh2LTJIM3Yyem0wLThoMTh2LTJIM3Yyem00LTZ2MmgxMFY3SDd6TTMgM3YyaDE4VjNIM3oiLz48L3N2Zz4=',
			text: '\xa0Align Center',
			onclick: function() {
				editor.execCommand('JustifyCenter');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMyAyMWgxOHYtMkgzdjJ6bTYtNGgxMnYtMkg5djJ6bS02LTRoMTh2LTJIM3Yyem02LTRoMTJWN0g5djJ6TTMgM3YyaDE4VjNIM3oiLz48L3N2Zz4=',
			text: '\xa0Align Right',
			onclick: function() {
				editor.execCommand('JustifyRight');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMyAyMWgxOHYtMkgzdjJ6bTAtNGgxOHYtMkgzdjJ6bTAtNGgxOHYtMkgzdjJ6bTAtNGgxOFY3SDN2MnptMC02djJoMThWM0gzeiIvPjwvc3ZnPg==',
			text: '\xa0Justify',
			onclick: function() {
				editor.execCommand('JustifyFull');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNS41OSA3LjQxTDEwLjE4IDEybC00LjU5IDQuNTlMNyAxOGw2LTYtNi02ek0xNiA2aDJ2MTJoLTJ6Ii8+PC9zdmc+',
			text: '\xa0Indent',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<ul class="par"><li>{$selection}</li></ul>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTIuNzUgM2gtMS41TDYuNSAxNGgyLjFsLjktMi4yaDVsLjkgMi4yaDIuMUwxMi43NSAzem0tMi42MiA3TDEyIDQuOTggMTMuODcgMTBoLTMuNzR6bTEwLjM3IDhsLTMtM3YySDV2MmgxMi41djJsMy0zeiIvPjwvc3ZnPg==',
			text: '\xa0Hanging Indent',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="dsp:block pad:left+2" style="text-indent: -2rem;">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNOSAxMHY1aDJWNGgydjExaDJWNGgyVjJIOUM2Ljc5IDIgNSAzLjc5IDUgNnMxLjc5IDQgNCA0em0xMiA4bC00LTR2M0g1djJoMTJ2M2w0LTR6Ii8+PC9zdmc+',
			text: '\xa0Paragraph Indent',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span style="display:block;text-indent:2rem;">{$selection}</span>');
			}
		}],
	});
});

/*
 * EOF: apply-text-alignment / plugin.js / 24200531
 */
