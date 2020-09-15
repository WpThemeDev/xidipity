/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-italic plugin 
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_italic', function(editor) {
	'use strict';

	function mnu_itm(num) {
		var mceNODE = editor.selection.getNode();
		var mceCONTENT = editor.selection.getContent({
			format: 'text'
		});
		var newTAGs = '';	//new tags
		switch (num) {
			case 1:
				newTAGs = '<i>';
				newTAGs += mceCONTENT;
				newTAGs += '</i>';
				editor.selection.setContent(newTAGs);
				break;
			case 2:
				newTAGs = '<em>';
				newTAGs += mceCONTENT;
				newTAGs += '</em>';
				editor.selection.setContent(newTAGs);
				break;
			case 3:
				newTAGs = '<strong>';
				newTAGs += mceCONTENT;
				newTAGs += '</strong>';
				editor.selection.setContent(newTAGs);
				break;
				}
				editor.selection.setContent(newTAGs);
				editor.undoManager.add();
		}
	}
	editor.addButton('apply_txt_italic', {
		type: 'splitbutton',
		title: 'Italic',
		shortcut: 'Ctr+I',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6Ii8+PC9zdmc+',
		onclick: function() {
			//editor.execCommand('mceReplaceContent', false, '<i>{$selection}</i>');
			mnu_itm(1);
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6Ii8+PC9zdmc+',
			text: '\xa0Italic',
			onclick: function() {
				//editor.execCommand('mceReplaceContent', false, '<i>{$selection}</i>');
				mnu_itm(1);
			}
		}, {
			icon: true,
			text: '\xa0Emphasis',
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjYgMTAuNzljLjk3LS42NyAxLjY1LTEuNzcgMS42NS0yLjc5IDAtMi4yNi0xLjc1LTQtNC00SDd2MTRoNy4wNGMyLjA5IDAgMy43MS0xLjcgMy43MS0zLjc5IDAtMS41Mi0uODYtMi44Mi0yLjE1LTMuNDJ6TTEwIDYuNWgzYy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTN2LTN6bTMuNSA5SDEwdi0zaDMuNWMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41eiIvPjwvc3ZnPg==',
			onclick: function() {
				//editor.execCommand('mceReplaceContent', false, '<em>{$selection}</em>');
				mnu_itm(2);
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUgMTd2MmgxNHYtMkg1em00LjUtNC4yaDVsLjkgMi4yaDIuMUwxMi43NSA0aC0xLjVMNi41IDE1aDIuMWwuOS0yLjJ6TTEyIDUuOThMMTMuODcgMTFoLTMuNzRMMTIgNS45OHoiLz48L3N2Zz4=',
			text: '\xa0Strong',
			onclick: function() {
				//editor.execCommand('mceReplaceContent', false, '<strong>{$selection}</strong>');
				mnu_itm(3);
			}
		}, ],
	});
});

/*
 * EOF: apply-text-italic / plugin.js / 29200901
 */
