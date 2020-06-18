/**
 * WordPress Xidipity Theme
 * Tinymce add-vertical-space plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_vert_space', function(editor) {
	'use strict';
	editor.addButton('add_vert_space', {
		type: 'splitbutton',
		title: 'Vertical Space',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LDhIMTFWMTRINlY4SDNMOC41LDJMMTQsOE0xNS41LDIyTDIxLDE2SDE4VjEwSDEzVjE2SDEwTDE1LjUsMjJaIiAvPjwvc3ZnPg==',
		menu: [{
			text: '•\xa0\xBD Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:1/2">&nbsp;</p>');
			}
		}, {
			text: '•\xa0\xBE Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:3/4">&nbsp;</p>');
			}
		}, {
			text: '•\xa01 Line',
			icon: false,
			onclick: function() {
				editor.insertContent('<p>&nbsp;</p>');
			}
		}, {
			text: '•\xa01\xBD Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:1-1/2">&nbsp;</p>');
			}
		}, {
			text: '•\xa02 Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:2">&nbsp;</p>');
			}
		}, {
			text: '•\xa02\xBD Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:2-1/2">&nbsp;</p>');
			}
		}, {
			text: '•\xa03 Lines',
			icon: false,
			onclick: function() {
				editor.insertContent('<p class="vs:3">&nbsp;</p>');
			}
		}]
	});
});

/*
 * EOF: add-vertical-space / plugin.js / 27200615
 */
