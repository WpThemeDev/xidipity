/**
 * WordPress Xidipity Theme
 * Tinymce add-misc-opts plugin
 *
 * ###:  plugin.js
 * bld:  29200815
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_misc_opts', function(editor) {
	'use strict';
	editor.addButton('add_misc_opts', {
		type: 'splitbutton',
		title: 'Misc Opts',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYgMkM0Ljg5IDIgNCAyLjkgNCA0VjIwQzQgMjEuMTEgNC44OSAyMiA2IDIySDEyVjIwSDZWNEgxM1Y5SDE4VjEySDIwVjhMMTQgMk0xOCAxNEMxNy44NyAxNCAxNy43NiAxNC4wOSAxNy43NCAxNC4yMUwxNy41NSAxNS41M0MxNy4yNSAxNS42NiAxNi45NiAxNS44MiAxNi43IDE2TDE1LjQ2IDE1LjVDMTUuMzUgMTUuNSAxNS4yMiAxNS41IDE1LjE1IDE1LjYzTDE0LjE1IDE3LjM2QzE0LjA5IDE3LjQ3IDE0LjExIDE3LjYgMTQuMjEgMTcuNjhMMTUuMjcgMTguNUMxNS4yNSAxOC42NyAxNS4yNCAxOC44MyAxNS4yNCAxOUMxNS4yNCAxOS4xNyAxNS4yNSAxOS4zMyAxNS4yNyAxOS41TDE0LjIxIDIwLjMyQzE0LjEyIDIwLjQgMTQuMDkgMjAuNTMgMTQuMTUgMjAuNjRMMTUuMTUgMjIuMzdDMTUuMjEgMjIuNSAxNS4zNCAyMi41IDE1LjQ2IDIyLjVMMTYuNyAyMkMxNi45NiAyMi4xOCAxNy4yNCAyMi4zNSAxNy41NSAyMi40N0wxNy43NCAyMy43OUMxNy43NiAyMy45MSAxNy44NiAyNCAxOCAyNEgyMEMyMC4xMSAyNCAyMC4yMiAyMy45MSAyMC4yNCAyMy43OUwyMC40MyAyMi40N0MyMC43MyAyMi4zNCAyMSAyMi4xOCAyMS4yNyAyMkwyMi41IDIyLjVDMjIuNjMgMjIuNSAyMi43NiAyMi41IDIyLjgzIDIyLjM3TDIzLjgzIDIwLjY0QzIzLjg5IDIwLjUzIDIzLjg2IDIwLjQgMjMuNzcgMjAuMzJMMjIuNyAxOS41QzIyLjcyIDE5LjMzIDIyLjc0IDE5LjE3IDIyLjc0IDE5QzIyLjc0IDE4LjgzIDIyLjczIDE4LjY3IDIyLjcgMTguNUwyMy43NiAxNy42OEMyMy44NSAxNy42IDIzLjg4IDE3LjQ3IDIzLjgyIDE3LjM2TDIyLjgyIDE1LjYzQzIyLjc2IDE1LjUgMjIuNjMgMTUuNSAyMi41IDE1LjVMMjEuMjcgMTZDMjEgMTUuODIgMjAuNzMgMTUuNjUgMjAuNDIgMTUuNTNMMjAuMjMgMTQuMjFDMjAuMjIgMTQuMDkgMjAuMTEgMTQgMjAgMTRNMTkgMTcuNUMxOS44MyAxNy41IDIwLjUgMTguMTcgMjAuNSAxOUMyMC41IDE5LjgzIDE5LjgzIDIwLjUgMTkgMjAuNUMxOC4xNiAyMC41IDE3LjUgMTkuODMgMTcuNSAxOUMxNy41IDE4LjE3IDE4LjE3IDE3LjUgMTkgMTcuNVoiIC8+PC9zdmc+',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTYgMTdoM2wyLTRWN0g1djZoM3ptOCAwaDNsMi00VjdoLTZ2NmgzeiIvPjwvc3ZnPg==',
			text: '\xa0Block Quote',
			onclick: function() {
				editor.execCommand('mceBlockQuote');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGJhc2VQcm9maWxlPSJ0aW55IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkuOTMgMTMuNWg0LjE0TDEyIDcuOTh6TTIwIDJINGMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNC4wNSAxNi41bC0xLjE0LTNIOS4xN2wtMS4xMiAzSDUuOTZsNS4xMS0xM2gxLjg2bDUuMTEgMTNoLTIuMDl6Ii8+PC9zdmc+',
			text: '\xa0Frame Text',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<!--  xwp:EDITOR/CONTENT/FRAME --><table class="frame"><tr><td>{$selection}</td></tr></table><!-- /xwp:EDITOR/CONTENT/FRAME -->');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<!--  xwp:EDITOR/CONTENT/FRAME --><table class="frame"><tr><td id="' + uniqueID + '">&nbsp;</td></tr></table><!-- /xwp:EDITOR/CONTENT/FRAME -->';
					editor.insertContent(html);
					var newTag = dom.select('td#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4IDExdjJoNHYtMmgtNHptLTIgNi42MWMuOTYuNzEgMi4yMSAxLjY1IDMuMiAyLjM5LjQtLjUzLjgtMS4wNyAxLjItMS42LS45OS0uNzQtMi4yNC0xLjY4LTMuMi0yLjQtLjQuNTQtLjggMS4wOC0xLjIgMS42MXpNMjAuNCA1LjZjLS40LS41My0uOC0xLjA3LTEuMi0xLjYtLjk5Ljc0LTIuMjQgMS42OC0zLjIgMi40LjQuNTMuOCAxLjA3IDEuMiAxLjYuOTYtLjcyIDIuMjEtMS42NSAzLjItMi40ek00IDljLTEuMSAwLTIgLjktMiAydjJjMCAxLjEuOSAyIDIgMmgxdjRoMnYtNGgxbDUgM1Y2TDggOUg0em0xMS41IDNjMC0xLjMzLS41OC0yLjUzLTEuNS0zLjM1djYuNjljLjkyLS44MSAxLjUtMi4wMSAxLjUtMy4zNHoiLz48L3N2Zz4=',
			text: '\xa0Insert Excerpt',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<!--  xwp:EDITOR/EXCERPT --><table class="bdr:collapse mar:tp-0 mar:bt+0.5 wd:100% web[dsp:none]"><tr><td class="bdr:solid-thin bdr:bas-300 bkg:tint-bas+1 cnr:arch-small fnt:size-small pad:+0.5" id="' + uniqueID + '"></td><td class="mce[dsp:none]"><!--more--></td></tr></table><!-- /xwp:EDITOR/EXCERPT -->';
				editor.insertContent(html);
				var newExcerpt = dom.select('td#' + uniqueID)[0];
				editor.selection.setCursorLocation(newExcerpt);
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4=',
			text: '\xa0Code',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<code>{$selection}</code>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<code id="' + uniqueID + '">&nbsp;</code>';
					editor.insertContent(html);
					var newTag = dom.select('code#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNSw3SDEwLjVMMTYsMjFIMTMuNkwxMi41LDE4SDYuM0w1LjIsMjFIM0w4LjUsN003LjEsMTZIMTEuOUw5LjUsOS43TDcuMSwxNk0yMiw1VjdIMTlWMTBIMTdWN0gxNFY1SDE3VjJIMTlWNUgyMloiIC8+PC9zdmc+',
			text: '\xa0Insert Redline',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<ins>{$selection}</ins>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<ins id="' + uniqueID + '">&nbsp;</ins>';
					editor.insertContent(html);
					var newTag = dom.select('ins#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLjUsN0g4LjVMMywyMUg1LjJMNi4zLDE4SDEyLjVMMTMuNiwyMUgxNkwxMC41LDdNNy4xLDE2TDkuNSw5LjdMMTEuOSwxNkg3LjFNMjIsN0gxNFY1SDIyVjdaIiAvPjwvc3ZnPg==',
			text: '\xa0Delete Redline',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<del>{$selection}</del>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<del id="' + uniqueID + '">&nbsp;</del>';
					editor.insertContent(html);
					var newTag = dom.select('del#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDguNDFMMTYuNTkgMTMgMTggMTEuNTlsLTYtNi02IDZMNy40MSAxMyAxMiA4LjQxek02IDE4aDEydi0ySDZ2MnoiLz48L3N2Zz4=',
			text: '\xa0Acronym',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<abbr>{$selection}</abbr>');
			}
		}],
	});
});

/*
 * EOF: add-misc-opts / plugin.js / 29200815
 */
