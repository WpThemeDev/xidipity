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
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik01IDE0LjVoMTR2LTZINXY2ek0xMSAuNTVWMy41aDJWLjU1aC0yem04LjA0IDIuNWwtMS43OSAxLjc5IDEuNDEgMS40MSAxLjgtMS43OS0xLjQyLTEuNDF6TTEzIDIyLjQ1VjE5LjVoLTJ2Mi45NWgyem03LjQ1LTMuOTFsLTEuOC0xLjc5LTEuNDEgMS40MSAxLjc5IDEuOCAxLjQyLTEuNDJ6TTMuNTUgNC40NmwxLjc5IDEuNzkgMS40MS0xLjQxLTEuNzktMS43OS0xLjQxIDEuNDF6bTEuNDEgMTUuNDlsMS43OS0xLjgtMS40MS0xLjQxLTEuNzkgMS43OSAxLjQxIDEuNDJ6Ii8+PC9zdmc+',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LjUsMS4xNUMxNy45NywxLjE1IDE3LjQ2LDEuMzQgMTcuMDcsMS43M0wxMS4yNiw3LjU1TDE2LjkxLDEzLjJMMjIuNzMsNy4zOUMyMy41LDYuNjEgMjMuNSw1LjM1IDIyLjczLDQuNTZMMTkuODksMS43M0MxOS41LDEuMzQgMTksMS4xNSAxOC41LDEuMTVNMTAuMyw4LjVMNC4zNCwxNC40NkMzLjU2LDE1LjI0IDMuNTYsMTYuNSA0LjM2LDE3LjMxQzMuMTQsMTguNTQgMS45LDE5Ljc3IDAuNjcsMjFINi4zM0w3LjE5LDIwLjE0QzcuOTcsMjAuOSA5LjIyLDIwLjg5IDEwLDIwLjEyTDE1Ljk1LDE0LjE2IiAvPjwvc3ZnPg==' ,
			text: '\xa0Yellow',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:highlight-yellow">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LjUsMS4xNUMxNy45NywxLjE1IDE3LjQ2LDEuMzQgMTcuMDcsMS43M0wxMS4yNiw3LjU1TDE2LjkxLDEzLjJMMjIuNzMsNy4zOUMyMy41LDYuNjEgMjMuNSw1LjM1IDIyLjczLDQuNTZMMTkuODksMS43M0MxOS41LDEuMzQgMTksMS4xNSAxOC41LDEuMTVNMTAuMyw4LjVMNC4zNCwxNC40NkMzLjU2LDE1LjI0IDMuNTYsMTYuNSA0LjM2LDE3LjMxQzMuMTQsMTguNTQgMS45LDE5Ljc3IDAuNjcsMjFINi4zM0w3LjE5LDIwLjE0QzcuOTcsMjAuOSA5LjIyLDIwLjg5IDEwLDIwLjEyTDE1Ljk1LDE0LjE2IiAvPjwvc3ZnPg==',
			text: '\xa0Cyan',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg\:highlight-cyan">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LjUsMS4xNUMxNy45NywxLjE1IDE3LjQ2LDEuMzQgMTcuMDcsMS43M0wxMS4yNiw3LjU1TDE2LjkxLDEzLjJMMjIuNzMsNy4zOUMyMy41LDYuNjEgMjMuNSw1LjM1IDIyLjczLDQuNTZMMTkuODksMS43M0MxOS41LDEuMzQgMTksMS4xNSAxOC41LDEuMTVNMTAuMyw4LjVMNC4zNCwxNC40NkMzLjU2LDE1LjI0IDMuNTYsMTYuNSA0LjM2LDE3LjMxQzMuMTQsMTguNTQgMS45LDE5Ljc3IDAuNjcsMjFINi4zM0w3LjE5LDIwLjE0QzcuOTcsMjAuOSA5LjIyLDIwLjg5IDEwLDIwLjEyTDE1Ljk1LDE0LjE2IiAvPjwvc3ZnPg==',
			text: '\xa0Magenta',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg\:highlight-magenta">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LjUsMS4xNUMxNy45NywxLjE1IDE3LjQ2LDEuMzQgMTcuMDcsMS43M0wxMS4yNiw3LjU1TDE2LjkxLDEzLjJMMjIuNzMsNy4zOUMyMy41LDYuNjEgMjMuNSw1LjM1IDIyLjczLDQuNTZMMTkuODksMS43M0MxOS41LDEuMzQgMTksMS4xNSAxOC41LDEuMTVNMTAuMyw4LjVMNC4zNCwxNC40NkMzLjU2LDE1LjI0IDMuNTYsMTYuNSA0LjM2LDE3LjMxQzMuMTQsMTguNTQgMS45LDE5Ljc3IDAuNjcsMjFINi4zM0w3LjE5LDIwLjE0QzcuOTcsMjAuOSA5LjIyLDIwLjg5IDEwLDIwLjEyTDE1Ljk1LDE0LjE2IiAvPjwvc3ZnPg==',
			text: '\xa0Green',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg\:highlight-green">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LjUsMS4xNUMxNy45NywxLjE1IDE3LjQ2LDEuMzQgMTcuMDcsMS43M0wxMS4yNiw3LjU1TDE2LjkxLDEzLjJMMjIuNzMsNy4zOUMyMy41LDYuNjEgMjMuNSw1LjM1IDIyLjczLDQuNTZMMTkuODksMS43M0MxOS41LDEuMzQgMTksMS4xNSAxOC41LDEuMTVNMTAuMyw4LjVMNC4zNCwxNC40NkMzLjU2LDE1LjI0IDMuNTYsMTYuNSA0LjM2LDE3LjMxQzMuMTQsMTguNTQgMS45LDE5Ljc3IDAuNjcsMjFINi4zM0w3LjE5LDIwLjE0QzcuOTcsMjAuOSA5LjIyLDIwLjg5IDEwLDIwLjEyTDE1Ljk1LDE0LjE2IiAvPjwvc3ZnPg==',
			text: '\xa0Orange',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="bkg:highlight-orange">{$selection}</span>');
			}
		}, ],
	});
});
/*
 * EOF: apply-text-highlight / plugin.js / 27200615
 */
