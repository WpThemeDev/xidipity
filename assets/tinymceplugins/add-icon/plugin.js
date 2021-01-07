/**
 * WordPress Xidipity Theme
 * Tinymce add-icon plugin
 *
 * ###:  plugin.js
 * bld:  30201115
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('add_icon', function (editor, url) {
	'use strict';
	var iconObject = {
		brand: function () {
			var htmlValue = '';
			if (!isEmpty(this.tag)) {
				switch (true) {
					case (!isEmpty(this.tag.match(/<i.+"fa.+\/i>/))):
						htmlValue = 'font awesome';
						break;
					case (!isEmpty(this.tag.match(/<.+"material-icons".+>/))):
						htmlValue = 'google';
						break;
					default:
						htmlValue = 'xidipity';
				}
			}
			return htmlValue;
		}, // font awesome/google/xidipity
		class: function () {
			var htmlValue = '';
			switch (this.brand()) {
				case ('font awesome'):
					htmlValue = getRegExpValue(this.tag, '".+"', 'is').replace(/"/g, '');
					break;
				case ('google'):
					htmlValue = 'material-icons';
					break;
				case ('xidipity'):
					htmlValue = getRegExpValue(this.tag, '".+"', 'is').replace(/"/g, '');
			}
			return htmlValue;
		},
		html: function () {
			var htmlValue = '';
			if (!isEmpty(this.tag)) {
				var newClass = this.class() + ' ' + this.sizeHtml() + ' ' + this.marginLeftHtml() + ' ' + this.marginRightHtml();
				var regExp = new RegExp(/\s\s+/, 'ig');
				var tmpValue = newClass.replace(regExp, ' ');
				newClass = tmpValue.trim();
				if (this.class == newClass) {
					htmlValue = this.tag;
				} else {
					htmlValue = this.tag.replace(this.class(), newClass);
				}
				// cleanup
				if (this.brand() == 'google') {
					if (isEmpty(htmlValue.match(/span/))) {
						tmpValue = htmlValue.replace(/>\s/, '>').replace(/\s</, '<');
					} else {
						tmpValue = htmlValue.replace(/>\s/, '>').replace(/\s</, '<').replace(/span/g, 'i');
					}
					htmlValue = '&#8203;' + tmpValue + '&#8203;';
				} else {
					tmpValue = htmlValue;
					htmlValue = '&#8203;' + tmpValue + '&#8203;';
				}
			}
			return htmlValue;
		}, // font awesome/google/xidipity
		marginLeft: 0,
		marginLeftHtml: function () {
			var htmlValue = '';
			switch (this.marginLeft) {
				case 1:
					htmlValue = 'mar:lt+0.125';
					break;
				case 2:
					htmlValue = 'mar:lt+0.25';
					break;
				case 3:
					htmlValue = 'mar:lt+0.5';
					break;
				case 4:
					htmlValue = 'mar:lt+0.75';
					break;
				case 5:
					htmlValue = 'mar:lt+1';
					break;
			}
			return htmlValue;
		},
		marginRight: 0,
		marginRightHtml: function () {
			var htmlValue = '';
			switch (this.marginRight) {
				case 1:
					htmlValue = 'mar:rt+0.125';
					break;
				case 2:
					htmlValue = 'mar:rt+0.25';
					break;
				case 3:
					htmlValue = 'mar:rt+0.5';
					break;
				case 4:
					htmlValue = 'mar:rt+0.75';
					break;
				case 5:
					htmlValue = 'mar:rt+1';
					break;
			}
			return htmlValue;
		},
		size: 0,
		sizeHtml: function () {
			var htmlValue = '';
			switch (this.size) {
				case 1:
					htmlValue = 'fnt:siz-md-1x';
					break;
				case 2:
					htmlValue = 'fnt:siz-lg';
					break;
				case 3:
					htmlValue = 'fnt:siz-lg-1x';
					break;
				case 4:
					htmlValue = 'fnt:siz-lg-2x';
					break;
				case 5:
					htmlValue = 'fnt:siz-lg-3x';
					break;
				case 6:
					htmlValue = 'fnt:siz-lg-4x';
					break;
				case 7:
					htmlValue = 'fnt:siz-lg-5x';
					break;
			}
			return htmlValue;
		},
		tag: '' // icon tag
	}
	// get regular expression value
	function getRegExpValue(argValue, argRegExp, argRegExpScope) {
		// argValue = value to evaluate
		// argRegExp = regular expression
		// argRegExpScope = regular expression scope
		if (argValue === undefined || argValue === null) {
			argValue = '';
		}
		if (argRegExp === undefined || argRegExp === null) {
			argRegExp = '';
		}
		if (argRegExpScope === undefined || argRegExpScope === null) {
			argRegExpScope = 'g';
		}
		var htmlValue = '';
		if (!isEmpty(argValue) && !isEmpty(argRegExp)) {
			if (isEmpty(argRegExpScope.match(/g|m|i|x|X|s|u|U|A|j|D/g))) {
				argRegExpScope = 'g';
			}
			var regExp = new RegExp(argRegExp, argRegExpScope);
			if (!isEmpty(argValue.match(regExp))) {
				htmlValue = argValue.match(regExp)[0];
			}
		}
		return htmlValue;
	}
	function isEmpty(argSTR) {
		return (!argSTR || 0 === argSTR.length);
	}
	editor.addButton('add_icon', {
		title: 'Add Icon',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LDJMMjAsOFYyMEEyLDIgMCAwLDEgMTgsMjJINkEyLDIgMCAwLDEgNCwyMFY0QTIsMiAwIDAsMSA2LDJIMTRNMTgsMjBWOUgxM1Y0SDZWMjBIMThNMTcsMTNWMTlIN0wxMiwxNEwxNCwxNk0xMCwxMC41QTEuNSwxLjUgMCAwLDEgOC41LDEyQTEuNSwxLjUgMCAwLDEgNywxMC41QTEuNSwxLjUgMCAwLDEgOC41LDlBMS41LDEuNSAwIDAsMSAxMCwxMC41WiIgLz48L3N2Zz4=',
		onclick: function () {
			editor.windowManager.open({
				title: 'Add Icon',
				body: [{
					type: "container",
					html: '<form method="post" style="font-family:sans-serif;font-size:16px;width:500px;"><table style="border-collapse:separate; border-spacing:16px; padding-right:16px;width:100%"><tbody style="border-color: transparent;"><tr><td style="width:33.3333%"><label for="ico_siz" style="line-height:200%;">Size:</label><br /><select id="sz_id" style="border:1px solid #e9e7e4;"><option>default</option><option>+1/2</option><option>+1</option><option>+2</option><option>+3</option><option>+4</option><option>+5</option><option>+6</option></select></td><td style="width:33.3333%"><label for="margin_lt" style="line-height:200%;">Margin left:</label><br /><select id="lt_id" style="border:1px solid #e9e7e4;"><option>none</option><option>+1</option><option>+2</option><option>+3</option><option>+4</option><option>+5</option></select></td><td style="width:33.3333%; text-align: right;"><div style="text-align: left;"><label for="margin_rt" style="line-height:200%;">Margin right:</label><br /><select id="rt_id" style="border:1px solid #e9e7e4;"><option>none</option><option>+1</option><option>+2</option><option>+3</option><option>+4</option><option>+5</option></select></div></td></tr><tr><td colspan="3"><label for="icon" style="line-height:200%;">Icon Tag:</label><br /><input type="text" id="tag_id" name="ico_tag" value="" style="font-family:monospace; border: 1px solid #e9e7e4; width:100%;"></td></tr></tbody></table></form>'
					}],
				onSubmit: function () {
					// icon object
					if (!isEmpty(document.getElementById("tag_id").value)) {
						var iconObj = Object.create(iconObject);
						iconObj.size = document.getElementById("sz_id").selectedIndex;
						iconObj.marginLeft = document.getElementById("lt_id").selectedIndex;
						iconObj.marginRight = document.getElementById("rt_id").selectedIndex;
						iconObj.tag = document.getElementById("tag_id").value;
						if (!isEmpty(iconObj.tag)) {
							editor.execCommand('mceInsertContent', false, iconObj.html());
						}
					}
				}
			});
		}
	});
});
/*
 * EOF: add-icon / plugin.js / 30201115
 */
