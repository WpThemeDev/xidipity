/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-size plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_size', function(editor) {
	'use strict';

	function setClass(argTAG) {
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
		if (!isEmpty(selNODE.match(/em|i|kbd|\bs\b|strong|sub|sup|\bu\b/i))) {
			selTMP = '<' + selNODE + '>' + selTXT + '</' + selNODE + '>';
			selTXT = selTMP;
			// select parent node
			var tmpNODE;
			tmpNODE = editor.dom.getParent(htmlNODE,'div,h1,h2,h3,h4,h5,h6,p,span');
			htmlNODE = tmpNODE;
			// get new selection node name
			selNODE = htmlNODE.nodeName.toLowerCase();
		}
		selTMP = htmlNODE.innerHTML;
		var selFULL = selTMP.replace(/\sdata-mce-style.+"/g, '');
		selTMP = editor.dom.getOuterHTML(htmlNODE);
		var selHTML = selTMP.replace(/\sdata-mce-style.+"/g, '');
		var curTAG;
		var newTAG;
		switch (true) {
			case (selNODE == 'body'):
				// strip cr/lf
				var selNEW = selTXT.replace(/(\r\n|\n|\r)/gm, '');
				// delimit html string
				var tagDELIM = selNEW.replace(/(\/(?!span>).*?>)(<.)/g, '$1,$2');
				// create array from delimited string
				var htmlARRAY = tagDELIM.split(',');
				var lstREC = lastRec(htmlARRAY);
				var idx = 0;
				// loop through array
				for (;htmlARRAY[idx];) {
					if (idx > lstREC) {
						newHTML += '<p>&nbsp;</p>';
						break;
					}
					// save array item to var
					selHTML = htmlARRAY[idx];
					curTAG = (isEmpty(selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>/, 'si')) ? '' : selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>/, 'si')[0]);
					newTAG = getClass(selHTML, argTAG);
					newHTML += selHTML.replace(curTAG,newTAG);
					idx++;
				}
				break;
			case (selTXT == selFULL || selNODE == 'span'):
				curTAG = (isEmpty(selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>|<(span.*?)>/, 'si')) ? '' : selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>|<(span.*?)>/, 'si')[0]);
				newTAG = getClass(selHTML, argTAG);
				newHTML = selHTML.replace(curTAG,newTAG);
				break;
			default:
				newHTML = '<span class="' + argTAG + '">' + selTXT + '</span>';
		}
		if (!isEmpty(newHTML)) {
			editor.execCommand('mceReplaceContent', false, newHTML);
		}
		return;
	}

	function getClass(argHTML, argTAG) {
		// argHTML = (selHTML) current style
		// argTAG = update
		if (argHTML === undefined) {
			argHTML = '';
		}
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = argHTML;
		if (!isEmpty(argHTML) && !isEmpty(argTAG)) {
			// pull key
			var argKEY = argTAG.match(/^(.*?)-|^(.*?)\+/)[0].replace(/.$/, '');
			// pull tag
			var tagHTML = (isEmpty(argHTML.match(/^<(.|\n)*?>/, 'si')) ? '' : argHTML.match(/^<(.|\n)*?>/, 'si')[0]);
			var tmpVAL1;
			var tmpVAL2;
			if (isEmpty(tagHTML.match(/class/))) {
				tmpVAL1 = tagHTML.match(/^<p.*?>|^<h[1-6].*?>|<span.*?>|^<div.*?>/)[0].replace(/>$/, '') + ' class="' + argTAG + '">';
				htmlVAL = tidyTag(tmpVAL1);
			} else {
				var regEXP = new RegExp(argKEY, 'gis');
				if (isEmpty(tagHTML.match(regEXP))) {
					tmpVAL2 = tagHTML.match(/class(.*?)".*?"/)[0].replace(/"$/, '') + ' ' + argTAG + '"';
					tmpVAL1 = tidyClass(tmpVAL2);
					htmlVAL = tagHTML.replace(/class(.*?)".*?"/, tmpVAL1);
				} else {
					regEXP = RegExp('(' + argKEY + ')(.*?)"');
					var curTAG = tagHTML.match(regEXP)[0].replace(/"/, '');
					htmlVAL = tagHTML.replace(curTAG, argTAG);
				}
			}
		}
		return htmlVAL;
	}

	function hasContent(argHTML) {
		// argHTML = HTML to validate
		if (argHTML === undefined) {
			argHTML = '';
		}
		var htmlDIV = document.createElement('htmlDIV');
		htmlDIV.innerHTML = argHTML;
		// strip html to see what's left
		var htmlVAL = htmlDIV.textContent || htmlDIV.innerText || '';
		return (htmlVAL.length > 0);
	}

	function tidyTag(argTAG) {
		// argTAG = elements to order
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = argTAG;
		if (!isEmpty(argTAG)) {
			var curTAG = argTAG.match(/\s.*"/)[0].replace(/^\s/, '');
			var tagDELIM = curTAG.replace(/"\s/, '",');
			var arrTAG = tagDELIM.split(',');
			arrTAG.sort();
			var newTAG = (arrTAG.join(' '));
			htmlVAL = argTAG.replace(curTAG, newTAG);
		}
		// return html
		return htmlVAL;
	}

	function tidyClass(argCLS) {
		// argCLS = classes to tidy
		if (argCLS === undefined) {
			argCLS = '';
		}
		var htmlVAL = argCLS;
		if (!isEmpty(argCLS)) {
			var selCLS = argCLS.match(/"(.*?)"/, 'gi')[0];
			var curCLS = selCLS.replace(/"/g, '');
			var arrCLS = curCLS.split(' ');
			arrCLS.sort();
			var newCLS = (arrCLS.join(' '));
			htmlVAL = argCLS.replace(curCLS, newCLS);
		}
		// returns tidy classes
		return htmlVAL;
	}

	function lastRec(argARRAY) {
		if (argARRAY === undefined) {
			argARRAY = [''];
		}
		var cntITM;
		// 0 based
		var idx = argARRAY.length - 1;
		for (;argARRAY[idx];) {
			// save array item to var
			cntITM = argARRAY[idx];
			if (hasContent(cntITM)) {
				break;
			} else {
				idx--;
			}
		}
		if (idx < 1) {
			idx = argARRAY.length - 1;
		}
		return idx;
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
				setClass('fnt:siz+1');
			}
		},
		menu: [{
			icon: false,
			text: '+\xa06',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-5x')
				}
			}
		}, {
			icon: false,
			text: '+\xa05',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-5x');
				}
			}
		}, {
			icon: false,
			text: '+\xa04',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-3x');
				}
			}
		}, {
			icon: false,
			text: '+\xa03',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-2x');
				}
			}
		}, {
			icon: false,
			text: '+\xa02',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-1x');
				}
			}
		}, {
			icon: false,
			text: '+\xa01',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg');
				}
			}
		}, {
			icon: false,
			text: '+\xa0½',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-md-1x');
				}
			}
		}, {
			icon: true,
			text: 'Default',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkuNiwxNEwxMiw3LjdMMTQuNCwxNE0xMSw1TDUuNSwxOUg3LjdMOC44LDE2SDE1TDE2LjEsMTlIMTguM0wxMyw1SDExWiIgLz48L3N2Zz4=',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-md');
				}
			}
		}, {
			icon: false,
			text: '-\xa01',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-sm');
				}
			}
		}, {
			icon: false,
			text: '-\xa02',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-sm-1x');
				}
			}
		}, {
			icon: false,
			text: '-\xa03',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-sm-2x');
				}
			}
		}, {
			icon: true,
			text: 'Larger',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsN0wxMywxMi4wN0wxNC40MSwxMy41TDE3LDEwLjlWMTdIMTlWMTAuOUwyMS41OSwxMy41TDIzLDEyLjA3TDE4LDdaIiAvPjwvc3ZnPg==',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz+1');
				}
			}
		}, {
			icon: true,
			text: 'Smaller',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsMTdMMjMsMTEuOTNMMjEuNTksMTAuNUwxOSwxMy4xVjdIMTdWMTMuMUwxNC40MSwxMC41TDEzLDExLjkzTDE4LDE3WiIgLz48L3N2Zz4=',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-1');
				}
			}
		}, ],
	});
});

/*
 * EOF: apply-text-size / plugin.js / 30201101
 */
