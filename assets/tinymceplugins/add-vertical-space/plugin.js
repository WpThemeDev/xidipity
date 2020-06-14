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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LXNwbGl0LXZlcnRpY2FsLTUwPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgaWQ9InJlY3QtMSI+PC9yZWN0PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb25zOC1zcGxpdC12ZXJ0aWNhbC01MCI+CiAgICAgICAgICAgIDxpbWFnZSB4PSIxIiB5PSIxIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFBWE5TUjBJQXJzNGM2UUFBQUVSbFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBNkFCQUFNQUFBQUJBQUVBQUtBQ0FBUUFBQUFCQUFBQU1xQURBQVFBQUFBQkFBQUFNZ0FBQUFCMXk2K3JBQUFCbEVsRVFWUm9CZTJaeTBvRU1SQkZXMWQrajZBZ0tMcndid1FYampEdTdLV2ZOVDVXZm9BcjNiaDE1UXMzd25pdnBDREUySFJ3UXFyYUtyaVQ3blFlZGFxNkp6UHBycXR2TTB4eFVYK2F1alBNTWZ3eXFLODdWYjNSVHdPQWdMQTBsNWtjaEFDWmdSbUNNQU16QmtJOVRBbUVXcGl6eklQOWlyclBwUDQ5T1NkUUQ2bXdJM2doRVphU0VIdlFSM0x0RU9lOEp1MmtQRUZkYzN1Q0IrSVF5emRvUDNpVmdteWdmaGRLWVo1UnR4YjZOQ3Z1TUxPQThOWTVpRHpKZ2ZCeUNuTWY5V2wydUltWkY5QVZ0QVBGOWhzSTIyeEJDNGo5dGlIVk5nU3lVc2ZYVnpwYXc4RWNwR0h3czFON1JySmhhVmc1bVl4d05lVlhKRmRjMHphWmpEaUk2ZnZRbmZjSS9NTUkrRHFpTGVtK2ptakxTRzEvL0s5dWFZVDlHU21OV08zMm5wSGFFUzRkM3pNU1JZeTc3cmZRRFpSdW1VYk5maHh5eS9RU3VvWlViSmsrd3BHL2JtSS9ZSXlteGgrZEw1Q0FzRFQ3V3VFNEFTR015UmM5OEx1YnhLczNndEJtVUh5TGpUaysvKzZwOEtNRVJpMkV4SFVNakhxSU1UQm1JSVpnekVFSXpCd0h5NkJlS3EyV2ZHYXFaK0lMbE43bnRTclNRU0lBQUFBQVNVVk9SSzVDWUlJPSI+PC9pbWFnZT4KICAgICAgICAgICAgPHVzZSBzdHJva2Utb3BhY2l0eT0iMC4wMSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNyZWN0LTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
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
