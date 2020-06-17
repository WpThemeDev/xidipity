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
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1IDE1SDN2MmgxMnYtMnptMC04SDN2MmgxMlY3ek0zIDEzaDE4di0ySDN2MnptMCA4aDE4di0ySDN2MnpNMyAzdjJoMThWM0gzeiIvPjwvc3ZnPg==',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1IDE1SDN2MmgxMnYtMnptMC04SDN2MmgxMlY3ek0zIDEzaDE4di0ySDN2MnptMCA4aDE4di0ySDN2MnpNMyAzdjJoMThWM0gzeiIvPjwvc3ZnPg==',
			text: '\xa0Align left',
			onclick: function() {
				editor.execCommand('JustifyLeft');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMTV2MmgxMHYtMkg3em0tNCA2aDE4di0ySDN2MnptMC04aDE4di0ySDN2MnptNC02djJoMTBWN0g3ek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align Center',
			onclick: function() {
				editor.execCommand('JustifyCenter');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMjFoMTh2LTJIM3Yyem02LTRoMTJ2LTJIOXYyem0tNi00aDE4di0ySDN2MnptNi00aDEyVjdIOXYyek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align Right',
			onclick: function() {
				editor.execCommand('JustifyRight');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMjFoMTh2LTJIM3Yyem0wLTRoMTh2LTJIM3Yyem0wLTRoMTh2LTJIM3Yyem0wLTRoMThWN0gzdjJ6bTAtNnYyaDE4VjNIM3oiLz48L3N2Zz4=',
			text: '\xa0Justify',
			onclick: function() {
				editor.execCommand('JustifyFull');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSAxMCAxMy41IEwgMTAgMTguNSBMIDEyIDE4LjUgTCAxMiA3LjUgTCAxNCA3LjUgTCAxNCAxOC41IEwgMTYgMTguNSBMIDE2IDcuNSBMIDE4IDcuNSBMIDE4IDUuNSBMIDEwIDUuNSBDIDcuNzkgNS41IDYgNy4yOSA2IDkuNSBDIDYgMTEuNzEgNy43OSAxMy41IDEwIDEzLjUgWiIvPgo8L3N2Zz4=',
			text: '\xa0Indent',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<ul class="par"><li>{$selection}</li></ul>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTB2NWgyVjRoMnYxMWgyVjRoMlYySDlDNi43OSAyIDUgMy43OSA1IDZzMS43OSA0IDQgNHptMTIgOGwtNC00djNINXYyaDEydjNsNC00eiIvPjwvc3ZnPg==',
			text: '\xa0Hanging Indent',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="dsp:block pad:left+2" style="text-indent: -2rem;">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDEwdjVoMlY0aDJ2MTFoMlY0aDJWMmgtOEM3Ljc5IDIgNiAzLjc5IDYgNnMxLjc5IDQgNCA0em0tMiA3di0zbC00IDQgNCA0di0zaDEydi0ySDh6Ii8+PC9zdmc+',
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
