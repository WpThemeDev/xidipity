/**
 * WordPress Xidipity Theme
 * Tinymce add-template plugin 
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_template', function(editor) {
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
					html: '<form method="post" style="font-family:sans-serif;font-size:16px;">	<label for="tmpl" style="display:block;">Code:</label><br /><textarea type="text" id="tmpl_id" name="txt_tag" value="" rows="10" cols="60" style="font-family:monospace; border: 1px solid #e9e7e4; white-space: pre-wrap;"></textarea></form>'
					}],
				onSubmit: function () {
					var tmpl_tag = document.getElementById("tmpl_id").value;
					if (tmpl_tag.length > 0) {
						var tmpl_content = tmpl_tag.replace("`t\s*`t","`t");
						editor.insertContent(tmpl_content, {format: 'raw'});
					}
				}
			});
		}
	});
});

/*
 * EOF: add-template / plugin.js / 29200901
 */
