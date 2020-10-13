/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-size plugin
 *
 * ###:  plugin.js
 * bld:  30201018
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_size', function(editor) {
	'use strict';

	function setTag(argTAG) {
		if (argTAG === undefined) {
			argTAG = '';
		}
		// init ret val
		var newHTML = '';
		// selection html node
		var htmlNODE = editor.selection.getNode();
		// get selection node name
		var selNODE = htmlNODE.nodeName.toLowerCase();
		// selection content in html format
		var selTXT = editor.selection.getContent({
			format: 'html'
		});
		var selTMP = '';
		if (!isEmpty(selNODE.match(/em|i|kbd|\bs\b|strong|sub|sup|u/gi))) {
			selTMP = '<' + selNODE + '>' + selTXT + '</' + selNODE + '>';
			selTXT = selTMP;
			// select parent node
			var tmpNODE = editor.dom.getParent(htmlNODE, 'div,h1,h2,h3,h4,h5,h6,p,span');
			htmlNODE = tmpNODE;
			// get new selection node name
			selNODE = htmlNODE.nodeName.toLowerCase();
		}
		selTMP = htmlNODE.innerHTML;
		var selFULL = selTMP.replace(/\sdata-mce-style.+"/g, '');
		selTMP = editor.dom.getOuterHTML(htmlNODE);
		var selHTML = selTMP.replace(/\sdata-mce-style.+"/g, '');
		// check for multiple paragraphs
		var tagCNT = (selTXT.match(/<\/.*?>/gi) || []).length;
		switch (true) {
			case (tagCNT > 1):
				// strip carrage returns
				var selNEW = selTXT.replace(/(\r\n|\n|\r)/gm, '');
				// delimit tags with comma
				var tagDELIM = selNEW.replace(/(<\/(div|h[1-6]|p)>)(<(div|h[1-6]|p)>)/g, '$1,$3');
				// add to array
				var tmpARRAY = tagDELIM.split(',');
				var htmlARRAY = tmpARRAY.filter(function (el) {
					return el != '';
				});
				// loop through array
				var idx;
				var itmARRAY;
				var spanNODE;
				var tagSIZ;
				var tagHTML;
				var tagNEW;
				var tagTMP;
				for (idx in htmlARRAY) {
					// get span item
					itmARRAY = htmlARRAY[idx];
					// node
					spanNODE = itmARRAY.match(/\bp|h[1-6]|div/)[0];
					// get tag
					tagHTML = getTag(itmARRAY, spanNODE);
					// check tag for style element
					tagSIZ = getSize(tagHTML);
					tagNEW = '';
					if (isEmpty(tagSIZ)) {
						if (isEmpty(tagHTML.match(/style/))) {
							tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' style="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

						} else {
							tagTMP = tagHTML.substring(0, tagHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
							tagNEW = tidyCss(tagTMP);
						}
					} else {
						tagNEW = tagHTML.replace(tagSIZ, argTAG);
					}
					newHTML += itmARRAY.replace(tagHTML, tagNEW);
				}
				break;
			case (selNODE == 'span'):
				// get span
				var spanHTML = getSpan(selHTML);
				// check tag for style element
				tagSIZ = getSize(spanHTML);
				var spanNEW = '';
				if (isEmpty(tagSIZ)) {
					// existing style without weight
					var spanTMP = spanHTML.substring(0, spanHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
					spanNEW = tidyCss(spanTMP);
				} else {
					// existing style with weight
					spanNEW = spanHTML.replace(tagSIZ, argTAG);
				}
				newHTML = selHTML.replace(spanHTML, spanNEW);
				break;
			case (selTXT == selFULL):
				// get tag
				tagHTML = getTag(selHTML, selNODE);
				// check tag for style element
				tagSIZ = getSize(tagHTML);
				tagNEW = '';
				if (isEmpty(tagSIZ)) {
					if (isEmpty(tagHTML.match(/style/))) {
						tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' style="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

					} else {
						tagTMP = tagHTML.substring(0, tagHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
						tagNEW = tidyCss(tagTMP);
					}
				} else {
					tagNEW = tagHTML.replace(tagSIZ, argTAG);
				}
				newHTML = selHTML.replace(tagHTML, tagNEW);
				break;
			default:
				newHTML = '<span style="' + argTAG + '">' + selTXT + '</span>';
		}
		if (!isEmpty(newHTML)) {
			editor.execCommand('mceReplaceContent', false, newHTML);
		}
		return;
	}

	function tidyCss(argCSS) {
		// argCSS = css to tidy
		if (argCSS === undefined) {
			argCSS = '';
		}
		var htmlVAL = argCSS;
		if (!isEmpty(argCSS)) {
			var curCSS = argCSS.substring(argCSS.indexOf('"') + 1, argCSS.lastIndexOf('"'));
			var arrNEW = curCSS.split(';').map(function (item) {
				return item.trim();
			}).filter(function (el) {
				return el != '';
			});
			arrNEW.sort();
			var newCSS = (arrNEW.join('; ') + ';').trim();
			htmlVAL = argCSS.replace(curCSS, newCSS);
		}
		// returns tidy css
		return htmlVAL;
	}

	function getSpan(argHTML) {
		// argHTML = inner/outer HTML
		if (argHTML === undefined) {
			argHTML = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argHTML.match(/span/g))) {
			var tmpVAL = argHTML.match(/<span\b[^>]*>(?:(?=([^<]+))\1|<(?!span\b[^>]*>))*?<\/span>/gi)[0];
			htmlVAL = tmpVAL.substring(0, tmpVAL.indexOf('>') + 1);
		}
		return htmlVAL;
	}

	function getSize(argTAG) {
		// argTAG = tag which may contain style
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argTAG) && !isEmpty(argTAG.match(/font-size:/g))) {
			htmlVAL = argTAG.substring(argTAG.indexOf('font-size:'), argTAG.indexOf(';', argTAG.indexOf('font-size:') + 1) + 1);
		}
		// return weight or ''
		return htmlVAL;
	}

	function getTag(argHTML, argTAG) {
		// argHTML = extHTML
		if (argHTML === undefined) {
			argHTML = '';
		}
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = '';
		var regEXP = new RegExp('^<' + argTAG, 'gi');
		if (!isEmpty(argHTML.match(regEXP)) && !isEmpty(argTAG.match(/div|h[1-6]|\bp\b/gi))) {
			regEXP = RegExp('^<' + argTAG + '\\b[^>]*>', 'gi');
			htmlVAL = argHTML.match(regEXP)[0];
		}
		// return tag or ''
		return htmlVAL;
	}

	function isEmpty(argSTR) {
		return (!argSTR || 0 === argSTR.length);
	}

	function isReady() {
		var blnVAL = true;
		var selTXT = editor.selection.getContent({
			format : 'text'
		});
		if (isEmpty(selTXT)) {
			alert('SYSTEM MESSAGE\nInvalid or missing text selection.');
			blnVAL = false;
		}
		return blnVAL;
	}

	editor.addButton('apply_txt_size', {
		type: 'splitbutton',
		title: 'Text Size',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0gNi4wMzUgMTQgTCA4LjQzNSA3LjcgTCAxMC44MzUgMTQgTSA3LjQzNSA1IEwgMS45MzUgMTkgTCA0LjEzNSAxOSBMIDUuMjM1IDE2IEwgMTEuNDM1IDE2IEwgMTIuNTM1IDE5IEwgMTQuNzM1IDE5IEwgOS40MzUgNSBMIDcuNDM1IDUgWiIvPgogIDxwYXRoIGQ9Ik0gMTguNzUgNy41NDUgTCAyMS4wNCA5LjgzNSBMIDIyLjA1OSA4LjgxNSBMIDE4Ljc1IDUuNSBMIDE1LjQzNSA4LjgxNSBMIDE2LjQ2IDkuODM1IEwgMTguNzUgNy41NDUgWiBNIDE4Ljc1IDE2LjQ1NSBMIDE2LjQ2IDE0LjE2NSBMIDE1LjQ0MiAxNS4xODUgTCAxOC43NSAxOC41IEwgMjIuMDY1IDE1LjE4NSBMIDIxLjA0IDE0LjE2NSBMIDE4Ljc1IDE2LjQ1NSBaIi8+Cjwvc3ZnPg==',
		onclick: function () {
			if (isReady()) {
				setTag('font-size: var(--font-size-larger);');
			}
		},
		menu: [{
			icon: false,
			text: '+\xa06',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-h1);')
				}
			}
		}, {
			icon: false,
			text: '+\xa05',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-h2);');
				}
			}
		}, {
			icon: false,
			text: '+\xa04',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-h3);');
				}
			}
		}, {
			icon: false,
			text: '+\xa03',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-h4);');
				}
			}
		}, {
			icon: false,
			text: '+\xa02',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-h5);');
				}
			}
		}, {
			icon: false,
			text: '+\xa01',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-h6);');
				}
			}
		}, {
			icon: false,
			text: '+\xa0½',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-xm);');
				}
			}
		}, {
			icon: true,
			text: 'Default',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkuNiwxNEwxMiw3LjdMMTQuNCwxNE0xMSw1TDUuNSwxOUg3LjdMOC44LDE2SDE1TDE2LjEsMTlIMTguM0wxMyw1SDExWiIgLz48L3N2Zz4=',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-md);');
				}
			}
		}, {
			icon: false,
			text: '-\xa01',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-sm);');
				}
			}
		}, {
			icon: false,
			text: '-\xa02',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-xs);');
				}
			}
		}, {
			icon: false,
			text: '-\xa03',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-2xs);');
				}
			}
		}, {
			icon: true,
			text: 'Larger',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsN0wxMywxMi4wN0wxNC40MSwxMy41TDE3LDEwLjlWMTdIMTlWMTAuOUwyMS41OSwxMy41TDIzLDEyLjA3TDE4LDdaIiAvPjwvc3ZnPg==',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-larger);');
				}
			}
		}, {
			icon: true,
			text: 'Smaller',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsMTdMMjMsMTEuOTNMMjEuNTksMTAuNUwxOSwxMy4xVjdIMTdWMTMuMUwxNC40MSwxMC41TDEzLDExLjkzTDE4LDE3WiIgLz48L3N2Zz4=',
			onclick: function() {
				if (isReady()) {
					setTag('font-size: var(--font-size-smaller);');
				}
			}
		}, ],
	});
});

/*
 * EOF: apply-text-size / plugin.js / 30201018
 */
