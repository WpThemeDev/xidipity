/**
 * WordPress Xidipity Theme
 * Tinymce add-icon plugin 
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_icon', function (editor, url) {
	'use strict';
	//editor.triggerSave();
	editor.addButton('add_icon', {
		title: 'Add Icon',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LDJMMjAsOFYyMEEyLDIgMCAwLDEgMTgsMjJINkEyLDIgMCAwLDEgNCwyMFY0QTIsMiAwIDAsMSA2LDJIMTRNMTgsMjBWOUgxM1Y0SDZWMjBIMThNMTcsMTNWMTlIN0wxMiwxNEwxNCwxNk0xMCwxMC41QTEuNSwxLjUgMCAwLDEgOC41LDEyQTEuNSwxLjUgMCAwLDEgNywxMC41QTEuNSwxLjUgMCAwLDEgOC41LDlBMS41LDEuNSAwIDAsMSAxMCwxMC41WiIgLz48L3N2Zz4=',
		onclick: function () {
			editor.windowManager.open({
				title: 'Add Icon',
				body: [{
					type: "container",
					html: '<form method="post" style="font-family:sans-serif;font-size:16px;width:500px;"><table style="border-collapse:separate; border-spacing:16px; padding-right:16px;width:100%"><tbody style="border-color: transparent;"><tr><td style="width:33.3333%"><label for="ico_siz" style="line-height:200%;">Size:</label><br /><select id="sz_id" style="border:1px solid #e9e7e4;"><option>inherit</option><option>+1/2</option><option>+1</option><option>+2</option><option>+3</option><option>+4</option><option>+5</option><option>+6</option></select></td><td style="width:33.3333%"><label for="margin_lt" style="line-height:200%;">Margin left:</label><br /><select id="lt_id" style="border:1px solid #e9e7e4;"><option>none</option><option>+1</option><option>+2</option><option>+3</option><option>+4</option><option>+5</option></select></td><td style="width:33.3333%; text-align: right;"><div style="text-align: left;"><label for="margin_rt" style="line-height:200%;">Margin right:</label><br /><select id="rt_id" style="border:1px solid #e9e7e4;"><option>none</option><option>+1</option><option>+2</option><option>+3</option><option>+4</option><option>+5</option></select></div></td></tr><tr><td colspan="3"><label for="icon" style="line-height:200%;">Icon Tag:</label><br /><input type="text" id="ic_id" name="ico_tag" value="" style="font-family:monospace; border: 1px solid #e9e7e4; width:100%;"></td></tr></tbody></table></form>'
					}],
				onSubmit: function () {
					var sz_idx = document.getElementById("sz_id").selectedIndex;
					var lt_idx = document.getElementById("lt_id").selectedIndex;
					var rt_idx = document.getElementById("rt_id").selectedIndex;
					var ic_tag = document.getElementById("ic_id").value;

					if (ic_tag !== '') {					
						var ico_class = '';
						switch (sz_idx) {
							case 1:
								ico_class = 'fnt:siz-md-1x';
								break;
							case 2:
								ico_class = 'fnt:siz-lg';
								break;
							case 3:
								ico_class = 'fnt:siz-lg-1x';
								break;
							case 4:
								ico_class = 'fnt:siz-lg-2x';
								break;
							case 5:
								ico_class = 'fnt:siz-lg-3x';
								break;
							case 6:
								ico_class = 'fnt:siz-lg-4x';
								break;
							case 7:
								ico_class = 'fnt:siz-lg-5x';
								break;
						}
						var lt_class = '';
						switch (lt_idx) {
							case 1:
								lt_class = 'mar:lt+0.125';
								break;
							case 2:
								lt_class = 'mar:lt+0.25';
								break;
							case 3:
								lt_class = 'mar:lt+0.5';
								break;
							case 4:
								lt_class = 'mar:lt+0.75';
								break;
							case 5:
								lt_class = 'mar:lt+1';
								break;
						}
						var rt_class = '';
						switch (rt_idx) {
							case 1:
								rt_class = 'mar:rt+0.125';
								break;
							case 2:
								rt_class = 'mar:rt+0.25';
								break;
							case 3:
								rt_class = 'mar:rt+0.5';
								break;
							case 4:
								rt_class = 'mar:rt+0.75';
								break;
							case 5:
								rt_class = 'mar:rt+1';
								break;
						}
						if ((sz_idx + lt_idx + rt_idx) == 0) {
							editor.insertContent(ic_tag, {format: 'raw'});
						} else {
							var html_class = ico_class;
							html_class += ' ';
							html_class += lt_class;
							html_class += ' ';
							html_class += rt_class;
							var span_class = html_class.replace(/\s+/g,' ').trim();
							var html = '<span class="';
							html += span_class;
							html += '">';
							html += ic_tag;
							html += '</span>';
							editor.insertContent(html, {format: 'raw'});
						}						
					}
				}
			});
		}
	});
});

/*
 * EOF: add-icon / plugin.js / 29200901
 */
