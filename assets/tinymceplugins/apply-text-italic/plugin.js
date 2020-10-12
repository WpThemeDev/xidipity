/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-italic plugin
 *
 * ###:  plugin.js
 * bld:  30201018
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_italic', function(editor) {
	'use strict';

	function setTag(argTAG) {
		if (argTAG === undefined) {
			argTAG = '';
		}
		// init ret val
		var newHTML = '';
		// selection content in html format
		var selTXT = editor.selection.getContent({
			format: 'html'
		});
		// check for multiple paragraphs
		if (!isEmpty(selTXT.match(/<i>|<em>|<strong>/gi))) {
			// existing class with alignment
			newHTML = selTXT.replace(/\bi\b|\bem\b|\bstrong\b/, argTAG);
		} else {
			newHTML = '<' + argTAG + '>' + selTXT + '</' + argTAG + '>';
		}
		if (!isEmpty(newHTML)) {
			editor.execCommand('mceReplaceContent', false, newHTML);
		}
		return;
	}

	function isEmpty(argSTR) {
		return (!argSTR || 0 === argSTR.length);
	}

	function isReady() {
		var blnVAL = true;
		var selTXT = editor.selection.getContent({
			format : 'text'
		});
		if (isEmpty(selTXT)) {
			alert('SYSTEM MESSAGE\nInvalid or missing text selection.');
			blnVAL = false;
		}
		return blnVAL;
	}

	editor.addButton('apply_txt_italic', {
		type: 'splitbutton',
		title: 'Italic',
		shortcut: 'Ctr+I',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6Ii8+PC9zdmc+',
		onclick: function() {
			if (isReady()) {
				setTag('i');
			}
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6Ii8+PC9zdmc+',
			text: '\xa0Italic',
			onclick: function() {
				if (isReady()) {
					setTag('i');
				}
			}
		}, {
			icon: true,
			text: '\xa0Emphasis',
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjYgMTAuNzljLjk3LS42NyAxLjY1LTEuNzcgMS42NS0yLjc5IDAtMi4yNi0xLjc1LTQtNC00SDd2MTRoNy4wNGMyLjA5IDAgMy43MS0xLjcgMy43MS0zLjc5IDAtMS41Mi0uODYtMi44Mi0yLjE1LTMuNDJ6TTEwIDYuNWgzYy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTN2LTN6bTMuNSA5SDEwdi0zaDMuNWMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41eiIvPjwvc3ZnPg==',
			onclick: function() {
				if (isReady()) {
					setTag('em');
				}

			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUgMTd2MmgxNHYtMkg1em00LjUtNC4yaDVsLjkgMi4yaDIuMUwxMi43NSA0aC0xLjVMNi41IDE1aDIuMWwuOS0yLjJ6TTEyIDUuOThMMTMuODcgMTFoLTMuNzRMMTIgNS45OHoiLz48L3N2Zz4=',
			text: '\xa0Strong',
			onclick: function() {
				if (isReady()) {
					setTag('strong');
				}
			}
		}, ],
	});
});

/*
 * EOF: apply-text-italic / plugin.js / 30201018
 */
