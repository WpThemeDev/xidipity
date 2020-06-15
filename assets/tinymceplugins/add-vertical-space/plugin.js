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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjUycHgiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDE2IDQxIEwgMjMuNSA0MSBMIDIzLjUgMzMuNSBMIDEgMzMuNSBMIDEgMjguNSBMIDUxIDI4LjUgTCA1MSAzMy41IEwgMjguNSAzMy41IEwgMjguNSA0MSBMIDM2IDQxIEwgMjYgNTEgTCAxNiA0MSBNIDI2IDEgTCAxNiAxMSBMIDIzLjUgMTEgTCAyMy41IDE4LjUgTCAxIDE4LjUgTCAxIDIzLjUgTCA1MSAyMy41IEwgNTEgMTguNSBMIDI4LjUgMTguNSBMIDI4LjUgMTEgTCAzNiAxMSBMIDI2IDEgWiIvPgo8L3N2Zz4=',
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
