/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-size plugin
 *
 * ###:  plugin.js
 * bld:  29200815
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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0gNi4wMzUgMTQgTCA4LjQzNSA3LjcgTCAxMC44MzUgMTQgTSA3LjQzNSA1IEwgMS45MzUgMTkgTCA0LjEzNSAxOSBMIDUuMjM1IDE2IEwgMTEuNDM1IDE2IEwgMTIuNTM1IDE5IEwgMTQuNzM1IDE5IEwgOS40MzUgNSBMIDcuNDM1IDUgWiIvPgogIDxwYXRoIGQ9Ik0gMTguNzUgNy41NDUgTCAyMS4wNCA5LjgzNSBMIDIyLjA1OSA4LjgxNSBMIDE4Ljc1IDUuNSBMIDE1LjQzNSA4LjgxNSBMIDE2LjQ2IDkuODM1IEwgMTguNzUgNy41NDUgWiBNIDE4Ljc1IDE2LjQ1NSBMIDE2LjQ2IDE0LjE2NSBMIDE1LjQ0MiAxNS4xODUgTCAxOC43NSAxOC41IEwgMjIuMDY1IDE1LjE4NSBMIDIxLjA0IDE0LjE2NSBMIDE4Ljc1IDE2LjQ1NSBaIi8+Cjwvc3ZnPg==',
		menu: [{
			icon: false,
			text: '+\xa06',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-lg-5x">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-lg-5x">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '+\xa05',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-lg-4x">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-lg-4x">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '+\xa04',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-lg-3x">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-lg-3x">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '+\xa03',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-lg-2x">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-lg-2x">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '+\xa02',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-lg-1x">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-lg-1x">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '+\xa01',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-lg">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-lg">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '+\xa0½',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-md-1x">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-md-1x">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			text: 'Default',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkuNiwxNEwxMiw3LjdMMTQuNCwxNE0xMSw1TDUuNSwxOUg3LjdMOC44LDE2SDE1TDE2LjEsMTlIMTguM0wxMyw1SDExWiIgLz48L3N2Zz4=',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-md">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-md">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '-\xa01',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-sm">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-sm">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '-\xa02',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-sm-1x">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-sm-1x">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: false,
			text: '-\xa03',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-sm-2x">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-sm-2x">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			text: 'Larger',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsN0wxMywxMi4wN0wxNC40MSwxMy41TDE3LDEwLjlWMTdIMTlWMTAuOUwyMS41OSwxMy41TDIzLDEyLjA3TDE4LDdaIiAvPjwvc3ZnPg==',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz+1">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz+1">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			text: 'Smaller',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsMTdMMjMsMTEuOTNMMjEuNTksMTAuNUwxOSwxMy4xVjdIMTdWMTMuMUwxNC40MSwxMC41TDEzLDExLjkzTDE4LDE3WiIgLz48L3N2Zz4=',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<span class="fnt:siz-sm-1">{$selection}</span>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<span id="' + uniqueID + '" class="fnt:siz-1">&nbsp;</span>';
					editor.insertContent(html);
					var newTag = dom.select('span#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, ],
	});
});

/*
 * EOF: apply-text-size / plugin.js / 29200815
 */
