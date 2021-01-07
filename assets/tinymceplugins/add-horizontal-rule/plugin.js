/**
 * WordPress Xidipity Theme
 * Tinymce add-horizontal-rule plugin
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('add_horz_rule', function(editor) {
	'use strict';
	editor.addButton('add_horz_rule', {
		type: 'splitbutton',
		title: 'Horizontal Rule',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMiA5Ljc1QzIgOS4zMzU3OSAyLjMzNTc5IDkgMi43NSA5SDE3LjI1QzE3LjY2NDIgOSAxOCA5LjMzNTc5IDE4IDkuNzVDMTggMTAuMTY0MiAxNy42NjQyIDEwLjUgMTcuMjUgMTAuNUgyLjc1QzIuMzM1NzkgMTAuNSAyIDEwLjE2NDIgMiA5Ljc1WiIgZmlsbD0iIzIxMjEyMSIvPgo8L3N2Zz4=',
		menu: [{
			text: 'Single Narrow',
			icon: false,
			onclick: function() {
				var html = '<!--  TMPL:HR -->';
				html += '<hr class="aln:ct rul:1x wd:70%" />';
				html += '<!-- /TMPL:HR -->';
				editor.insertContent(html);
			}
		}, {
			text: 'Single Wide',
			icon: false,
			onclick: function() {
				var html = '<!--  TMPL:HR -->';
				html += '<hr class="rul:1x" />';
				html += '<!-- /TMPL:HR -->';
				editor.insertContent(html);
			}
		}, {
			text: 'Double Narrow',
			icon: false,
			onclick: function() {
				var html = '<!--  TMPL:HR -->';
				html += '<hr class="aln:ct rul:dbl wd:70%" />';
				html += '<!-- /TMPL:HR -->';
				editor.insertContent(html);
			}
		}, {
			text: 'Double Wide',
			icon: false,
			onclick: function() {
				var html = '<!--  TMPL:HR -->';
				html += '<hr class="rul:dbl" />';
				html += '<!-- /TMPL:HR -->';
				editor.insertContent(html);
			}
		}, {
			text: 'Gradient Narrow',
			icon: false,
			onclick: function() {
				var html = '<!--  TMPL:HR -->';
				html += '<hr class="aln:ct rul:grd wd:70%" />';
				html += '<!-- /TMPL:HR -->';
				editor.insertContent(html);
			}
		}, {
			text: 'Gradient Wide',
			icon: false,
			onclick: function() {
				var html = '<!--  TMPL:HR -->';
				html += '<hr class="rul:grd" />';
				html += '<!-- /TMPL:HR -->';
				editor.insertContent(html);
			}
		}, {
			text: 'Emblem Narrow',
			icon: false,
			onclick: function() {
				var html = '<!--  TMPL:HR -->';
				html += '<div class="fx:r fxa:3 fxc:3 fb:100%"><div class="fx:r fxa:2 fxc:3 fb:25% sm)fb:30%"><hr class="wd:100%" /></div><div class="fx:r fxa:3 fxc:3 mar:hrz+1.5 txt:bas-500 fnt:wgt-700 wd:3">/<span style="width:1px;"></span>/</div><div class="fx:r fxa:1 fxc:3 fb:25% sm)fb:30%"><hr class="wd:100%" /></div></div>';
				html += '<!-- /TMPL:HR -->';
				editor.insertContent(html);
			}
		}, {
			text: 'Emblem Wide',
			icon: false,
			onclick: function() {
				var html = '<!--  TMPL:HR -->';
				html += '<div class="fx:r fxa:3 fxc:3 fb:100%"><div class="fx:r fxa:2 fxc:3 fb:50%"><hr class="wd:100%" /></div><div class="fx:r fxa:3 fxc:3 mar:hrz+1.5 txt:bas-500 fnt:wgt-700 wd:3">/<span style="width:1px;"></span>/</div><div class="fx:r fxa:1 fxc:3 fb:50%"><hr class="wd:100%" /></div></div>';
				html += '<!-- /TMPL:HR -->';
				editor.insertContent(html);
			}
		}],
	});
});

/*
 * EOF: add-horizontal-rule / plugin.js / 29200901
 */
