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
		title: 'Font Size',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1NiA1MiIgd2lkdGg9IjU2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6bTAgMGgyNHYyNEgwVjB6bS43NS43NWgyMi41djIyLjVILjc1eiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMzUuOTU1IDcuODM5IEwgMjQuMjc3IDcuODM5IEwgMzAuMTE2IDIgWiBNIDI0LjM1MSA0NC4yMzUgTCAzNS44ODEgNDQuMjM1IEwgMzAuMTE2IDUwIFogTSAxNC4wODMgMTEuODIzIEwgMi45NDkgNDAuMTc3IEwgNy41MDIgNDAuMTc3IEwgOS43NzggMzQuMTE1IEwgMjIuNDIxIDM0LjExNSBMIDI0LjY5NyA0MC4xNzcgTCAyOS4yNSA0MC4xNzcgTCAxOC4xNDEgMTEuODIzIEwgMTQuMDgzIDExLjgyMyBaIE0gMTEuMjg3IDMwLjA1OCBMIDE2LjA4NyAxNy4yNDEgTCAyMC44ODcgMzAuMDU4IEwgMTEuMjg3IDMwLjA1OCBaIE0gMzcuOTEgMzYuMjQzIEwgNTMuMDUyIDM2LjI0MyBMIDUzLjA1MiA0MC4xNzcgTCAzMS45NDcgNDAuMTc3IEwgMzEuOTQ3IDM2Ljk4NiBMIDQ2LjU5NCAxNS44MDYgTCAzMi4wNDYgMTUuODA2IEwgMzIuMDQ2IDExLjg0NyBMIDUyLjU4MiAxMS44NDcgTCA1Mi41ODIgMTQuOTY1IEwgMzcuOTEgMzYuMjQzIFoiLz4KPC9zdmc+',
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
