/**
 * WordPress Xidipity Theme
 * Tinymce toggle-italic plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('toggle_italic', function(editor) {
	'use strict';
	editor.addButton('toggle_italic', {
		type: 'splitbutton',
		title: 'Italic',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgNHYzaDIuMjFsLTMuNDIgOEg2djNoOHYtM2gtMi4yMWwzLjQyLThIMThWNGgtOHoiLz48L3N2Zz4=',
		onclick: function() {
			editor.execCommand('mceReplaceContent', false, '<i>{$selection}</i>');
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgNHYzaDIuMjFsLTMuNDIgOEg2djNoOHYtM2gtMi4yMWwzLjQyLThIMThWNGgtOHoiLz48L3N2Zz4=',
			text: '\xa0Italic',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<i>{$selection}</i>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTYuNzYgNC44NGwtMS44LTEuNzktMS40MSAxLjQxIDEuNzkgMS43OSAxLjQyLTEuNDF6TTQgMTAuNUgxdjJoM3YtMnptOS05Ljk1aC0yVjMuNWgyVi41NXptNy40NSAzLjkxbC0xLjQxLTEuNDEtMS43OSAxLjc5IDEuNDEgMS40MSAxLjc5LTEuNzl6bS0zLjIxIDEzLjdsMS43OSAxLjggMS40MS0xLjQxLTEuOC0xLjc5LTEuNCAxLjR6TTIwIDEwLjV2Mmgzdi0yaC0zem0tOC01Yy0zLjMxIDAtNiAyLjY5LTYgNnMyLjY5IDYgNiA2IDYtMi42OSA2LTYtMi42OS02LTYtNnptLTEgMTYuOTVoMlYxOS41aC0ydjIuOTV6bS03LjQ1LTMuOTFsMS40MSAxLjQxIDEuNzktMS44LTEuNDEtMS40MS0xLjc5IDEuOHoiLz48L3N2Zz4=',
			text: '\xa0Emphasis',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<em>{$selection}</em>');
			}
		}, ],
	});
});

/*
 * EOF: toggle-italic / plugin.js / 27200615
 */
