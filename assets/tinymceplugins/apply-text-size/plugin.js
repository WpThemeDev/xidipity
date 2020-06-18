/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-size plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_size', function(editor) {
	'use strict';
	editor.addButton('apply_txt_size', {
		type: 'splitbutton',
		title: 'Text Size',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptLjc1Ljc1aDIyLjV2MjIuNUguNzV6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE0Ljk0IDQuNjZoLTQuNzJsMi4zNi0yLjM2em0tNC42OSAxNC43MWg0LjY2bC0yLjMzIDIuMzN6TTYuMSA2LjI3TDEuNiAxNy43M2gxLjg0bC45Mi0yLjQ1aDUuMTFsLjkyIDIuNDVoMS44NEw3Ljc0IDYuMjdINi4xem0tMS4xMyA3LjM3bDEuOTQtNS4xOCAxLjk0IDUuMThINC45N3ptMTAuNzYgMi41aDYuMTJ2MS41OWgtOC41M3YtMS4yOWw1LjkyLTguNTZoLTUuODh2LTEuNmg4LjN2MS4yNmwtNS45MyA4LjZ6Ii8+PC9zdmc+',
		menu: [{
			icon: false,
			text: '•\xa05x Large',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-5x-large">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-5x-large">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa04x Large',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-4x-large">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-4x-large">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa03x Large',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-3x-large">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-3x-large">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa02x Large',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-2x-large">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-2x-large">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa0x Large',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-large">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-x-large">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa0Large',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-large">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-large">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa01½ Default',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-medium">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-x-medium">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa0Default',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-medium">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-medium">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa0Small',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-small">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-small">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa0x Small',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-small">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-x-small">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa02x Small',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-2x-small">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-2x-small">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa0Larger',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-larger">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-larger">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '•\xa0Smaller',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-smaller">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:size-smaller">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, ],
	});
});

/*
 * EOF: apply-text-size / plugin.js / 27200615
 */
