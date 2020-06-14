/**
 * WordPress Xidipity Theme
 * Tinymce add-horizontal-rule plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_horz_rule', function(editor) {
	'use strict';
	editor.addButton('add_horz_rule', {
		type: 'splitbutton',
		title: 'Horizontal Rule',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LWhvcml6b250YWwtbGluZS01MDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGlkPSJyZWN0LTEiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uczgtaG9yaXpvbnRhbC1saW5lLTUwIj4KICAgICAgICAgICAgPGltYWdlIHg9IjEiIHk9IjEiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUFYTlNSMElBcnM0YzZRQUFBRVJsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUE2QUJBQU1BQUFBQkFBRUFBS0FDQUFRQUFBQUJBQUFBTXFBREFBUUFBQUFCQUFBQU1nQUFBQUIxeTYrckFBQUFXa2xFUVZSb0JlM1FNUTRBSUFnRFFQVC9mOWJFaVltTmdYaE1UVmphaTNBRUNCQWdRSUFBQVFJRUNCQWdRSUFBQVFJZkNheTA5YVE4S2I0TmUxTGpxcXNobFk0ZkFRSUVDQkFnUUlBQUFRSUVDQkFnUUlBQWdXYUJDOW0rQVFnSlJuR25BQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgICAgICA8dXNlIHN0cm9rZS1vcGFjaXR5PSIwLjAxIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeGxpbms6aHJlZj0iI3JlY3QtMSI+PC91c2U+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
		menu: [{
			text: '•\xa0Single Narrow',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:solid-thin wd:70%" />');
			}
		}, {
			text: '•\xa0Single Wide',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:solid-thin" />');
			}
		}, {
			text: '•\xa0Double Narrow',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:double wd:70%" />');
			}
		}, {
			text: '•\xa0Double Wide',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:double" />');
			}
		}, {
			text: '•\xa0Gradient Narrow',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:gradient wd:70%" />');
			}
		}, {
			text: '•\xa0Gradient Wide',
			icon: false,
			onclick: function() {
				editor.insertContent('<hr class="rul:gradient" />');
			}
		}, {
			text: '•\xa0Emblem Narrow',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="fx:r fxa:3 fxc:3 wd:100%"><div class="fx:r fxa:2 fxc:3 wd:25% sm)wd:30%"><div class="bkg:bas-400 ln wd:100%">&#8203;</div></div><div class="fx:r fxa:3 fxc:3 mar:hrz+1.5 txt:bas-500 fnt:weight-bold wd:3">/<span style="width:1px;">&#8203;</span>/</div><div class="fx:r fxa:1 fxc:3 wd:25% sm)wd:30%"><div class="bkg:bas-400 ln wd:100%">&#8203;</div></div></div>');
			}
		}, {
			text: '•\xa0Emblem Wide',
			icon: false,
			onclick: function() {
				editor.insertContent('<div class="fx:r fxa:3 fxc:3 wd:100%"><div class="fx:r fxa:2 fxc:3 wd:50%"><div class="bkg:bas-400 ln wd:100%">&#8203;</div></div><div class="fx:r fxa:3 fxc:3 mar:hrz+1.5 txt:bas-500 fnt:weight-bold wd:3">/<span style="width:1px;">&#8203;</span>/</div><div class="fx:r fxa:1 fxc:3 wd:50%"><div class="bkg:bas-400 ln wd:100%">&#8203;</div></div></div>');
			}
		}],
		onPostRender: function() {
			// default
			this.value = '<hr class="rul:solid-medium" />';
		}
	});
});

/*
 * EOF: add-horizontal-rule / plugin.js / 27200615
 */
