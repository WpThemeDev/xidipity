/**
 * WordPress Xidipity Theme
 * Tinymce add-template plugin 
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('add_template', function (editor) {
	'use strict';
	editor.addButton('add_template', {
		title: 'Add Template',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYsMkEyLDIgMCAwLDAgNCw0VjIwQTIsMiAwIDAsMCA2LDIySDE4QTIsMiAwIDAsMCAyMCwyMFY4TDE0LDJINk02LDRIMTNWOUgxOFYyMEg2VjRNOCwxMlYxNEgxNlYxMkg4TTgsMTZWMThIMTNWMTZIOFoiIC8+PC9zdmc+',
		onclick: function () {
			editor.windowManager.open({
				title: 'Add Template',
				body: [{
					type: "container",
					html: '<form method="post" style="font-family:sans-serif;font-size:16px;"> <label for="tmpl">Code:</label><br /><textarea type="text" id="tmpl_id" name="txt_tag" value="" rows="10" cols="60" style="font-family:monospace; border: 1px solid #e9e7e4; margin-bottom:10px; white-space:pre-wrap;"></textarea><br /><input type="checkbox" id="blk_id" name="code_block" value=""><label for="code_block" style="font-size:smaller;margin-left:6px;">Add as code block</label></form>'
					}],
				onSubmit: function () {
					var tmpl_tag = document.getElementById("tmpl_id").value;
					var tmpl_content = '';
					if (tmpl_tag.length > 0) {
						if (document.getElementById("blk_id").checked) {
							var lines = tmpl_tag.split('\n');
							tmpl_content = '<pre class="dsp:line-nums">';
							var i;
							for (i = 0; i < lines.length; i++) {
								tmpl_content += '<var>';
								tmpl_content += encodeURI(lines[i]).replace(/%(\w\w)/g, '&#x$1;');
								tmpl_content += '</var>\n';
							}
							tmpl_content += '</pre>';
						} else {
							tmpl_content = tmpl_tag.replace("`t\s*`t", "`t");
						}
						editor.execCommand('mceInsertContent', false, tmpl_content);
					}
				}
			});
		}
	});
});

/*
 * EOF: add-template / plugin.js / 29200901
 */
