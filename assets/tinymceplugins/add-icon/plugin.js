/**
 * WordPress Xidipity Theme
 * Tinymce add-icon plugin
 *
 * ###:  plugin.js
 * bld:  210619-1
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('add_icon', function (editor, url) {
	'use strict';
	var _js = {
		hd: 'ERROR',
		ms: null,
		ln: null,
		display: function () {
			editor.windowManager.alert(this.hd + ' #' + this.ln + ' - ' + this.ms);
			this.hd = 'ERROR';
			this.ms = null;
			this.ln = null;
		},
		hasError: function () {
			return (this.ms !== null);
		}
	}
	var icoObj = {
		brand: function () {
			//
			console.log(' OBJ > brand');
			//
			var retValue = '';
			if (!isEmpty(this.tag)) {
				switch (true) {
					case (!isEmpty(this.tag.match(/".*?fa.*?"/))):
						console.log('     - Mark -');
						retValue = 'font awesome';
						break;
					case (!isEmpty(this.tag.match(/"material-icons.*?"/))):
						console.log('     - Mark -');
						retValue = 'google';
						break;
					default:
						console.log('     - Mark -');
						retValue = 'xidipity';
				}
				//
				console.log('     - brand: ' + retValue);
				//
			}
			return retValue;
		}, // font awesome/google/xidipity
		class: function () {
			//
			console.log(' OBJ > class');
			//
			var retValue = '';
			switch (this.brand()) {
				case ('font awesome'):
					console.log('     - Mark -');
					retValue = getRegExpValue(this.tag, '"(.*?fa.*?)"', 'is',1);
					break;
				case ('google'):
					console.log('     - Mark -');
					retValue = getRegExpValue(this.tag, '"(material-icons.*?)"', 'is',1);
					break;
				case ('xidipity'):
					console.log('     - Mark -');
					retValue = getRegExpValue(this.tag, '"(icon.*?)"', 'is', 1);
			}
			//
			console.log('     - class: ' + retValue);
			//
			return retValue;
		},
		html: function () {
			//
			console.log(' OBJ > html');
			//
			var retValue = '';
			try {
				if (isEmpty(this.tag)) {
					throw new Error('Missing required icon tag.');
				}				
				var curClass = this.class();
				var icoTag = this.tag;
				var icoBrand = this.brand();
				var newClass = curClass + ' ' + this.sizeHtml() + ' ' + this.marginLeftHtml() + ' ' + this.marginRightHtml();
				var regExp = new RegExp(/\s\s+/, 'g');
				var tmpValue = newClass.replace(regExp, ' ');
				newClass = tmpValue.trim();
				if (curClass == newClass) {
					console.log('     - Mark -');
					tmpValue = icoTag;
				} else {
					console.log('     - Mark -');
					tmpValue = icoTag.replace(curClass, newClass);
					if (icoBrand == 'google') {
						tmpValue = tmpValue.replace(/span/g, 'i');					
					}
				}
				//
				retValue = '&#8203;' + tmpValue + '&#8203;';
				//
			} catch(e) {
				_js.ms = e.message;
				_js.ln = '107';				
			}
			//
			return retValue;
		}, // font awesome/google/xidipity
		marginLeft: 0,
		marginLeftHtml: function () {
			//
			console.log('OBJ > marginLeftHtml');
			//
			var retValue = '';
			switch (this.marginLeft) {
				case 1:
					retValue = 'mar:lt+0.125';
					break;
				case 2:
					retValue = 'mar:lt+0.25';
					break;
				case 3:
					retValue = 'mar:lt+0.5';
					break;
				case 4:
					retValue = 'mar:lt+0.75';
					break;
				case 5:
					retValue = 'mar:lt+1';
					break;
			}
			return retValue;
		},
		marginRight: 0,
		marginRightHtml: function () {
			//
			console.log('OBJ > marginRightHtml');
			//
			var retValue = '';
			switch (this.marginRight) {
				case 1:
					retValue = 'mar:rt+0.125';
					break;
				case 2:
					retValue = 'mar:rt+0.25';
					break;
				case 3:
					retValue = 'mar:rt+0.5';
					break;
				case 4:
					retValue = 'mar:rt+0.75';
					break;
				case 5:
					retValue = 'mar:rt+1';
					break;
			}
			return retValue;
		},
		size: 0,
		sizeHtml: function () {
			//
			console.log('OBJ > sizeHtml');
			//
			var retValue = '';
			switch (this.size) {
				case 1:
					retValue = 'fnt:siz-md-1x';
					break;
				case 2:
					retValue = 'fnt:siz-lg';
					break;
				case 3:
					retValue = 'fnt:siz-lg-1x';
					break;
				case 4:
					retValue = 'fnt:siz-lg-2x';
					break;
				case 5:
					retValue = 'fnt:siz-lg-3x';
					break;
				case 6:
					retValue = 'fnt:siz-lg-4x';
					break;
				case 7:
					retValue = 'fnt:siz-lg-5x';
					break;
			}
			return retValue;
		},
		tag: '' // icon tag
	}
	// get regular expression value
	function getRegExpValue(strArg1, strArg2, strArg3, numArg4) {
		//
		// Return RegExp value
		//	strArg1 - content
		//	strArg2	- expression
		//	strArg3 - scope
		//	numArg4	- group
		//
		var retValue = '';
		//
		if (!_js.hasError()) {
			//
			console.log('FN  > getRegExpValue');
			console.log('    - strArg1: ' + strArg1);
			console.log('    - strArg2: ' + strArg2);
			console.log('    - strArg3: ' + strArg3);
			console.log('    - numArg4: ' + numArg4);
			//
			try {
				if (strArg1 !== undefined || strArg1 !== null || typeof strArg1 === 'string' || strArg1.trim() !== '') {
					if (strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string' || strArg2.trim() == '') {
						throw new Error('Missing required argument/s.'); // regular expression
					}
					if (strArg3 === undefined || strArg3 === null || typeof strArg3 !== 'string') {
						strArg3 = ''; // regular expression scope
					}
					if (numArg4 === undefined || numArg4 === null || typeof numArg4 !== 'number') {
						numArg4 = 0; // group #
					}
					if (isEmpty(strArg3.match(/g|m|i|x|X|s|u|U|A|j|D/g))) {
						numArg4 = 0;
						strArg3 = 'g';
					}
					if (numArg4 > 0 && strArg3 == 'g') {
						strArg3 = 'i';
					}
					var regExp = new RegExp(strArg2, strArg3);
					if (!isEmpty(strArg1.match(regExp))) {
						//
						retValue = strArg1.match(regExp)[numArg4];
						//
					}
				}
				//
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '242';
			}
		}
		//
		return retValue;
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
					try {
						if (isEmpty(document.getElementById("tag_id").value)) {
							throw new Error('Missing required icon tag.');
						}
						icoObj.size = document.getElementById("sz_id").selectedIndex;
						icoObj.marginLeft = document.getElementById("lt_id").selectedIndex;
						icoObj.marginRight = document.getElementById("rt_id").selectedIndex;
						icoObj.tag = document.getElementById("tag_id").value;
						if (_js.hasError()) {
							_js.display();
							editor.focus();
						} else {
							editor.execCommand('mceInsertContent', false, icoObj.html());							
						}
					} catch(e) {
						_js.ms = e.message;
						_js.ln = '281';										
						_js.display();						
						editor.focus();
					}
				}
			});
			console.clear();
			document.getElementById('tag_id').focus();
		}
	});
});
/*
 * EOF: add-icon / plugin.js / 210619-1
 */
