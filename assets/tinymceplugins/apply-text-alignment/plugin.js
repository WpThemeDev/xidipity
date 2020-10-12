/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-alignment plugin
 *
 * ###:  plugin.js
 * bld:  30201018
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_align', function(editor) {
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
				var htmlARRAY = tagDELIM.split(',').filter(function (el) {
					return el != '';
				});
				// loop through array
				var idx;
				var itmARRAY;
				var spanNODE;
				var tagALN;
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
					// check tag for class element
					tagALN = getAln(tagHTML);
					tagNEW = '';
					if (isEmpty(tagALN)) {
						if (isEmpty(tagHTML.match(/class/))) {
							tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' class="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

						} else {
							tagTMP = tagHTML.substring(0, tagHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
							tagNEW = tidyCss(tagTMP);
						}
					} else {
						tagNEW = tagHTML.replace(tagALN, argTAG);
					}
					newHTML += itmARRAY.replace(tagHTML, tagNEW);
				}
				break;
			case (selNODE == 'span'):
				// get span
				var spanHTML = getSpan(selHTML);
				// check tag for class element
				tagALN = getAln(spanHTML);
				var spanNEW = '';
				if (isEmpty(tagALN)) {
					// existing class without weight
					var spanTMP = spanHTML.substring(0, spanHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
					spanNEW = tidyCss(spanTMP);
				} else {
					// existing class with alignment
					spanNEW = spanHTML.replace(tagALN, argTAG);
				}
				newHTML = selHTML.replace(spanHTML, spanNEW);
				break;
			case (selTXT == selFULL):
				// get tag
				tagHTML = getTag(selHTML, selNODE);
				// check tag for class element
				tagALN = getAln(tagHTML);
				tagNEW = '';
				if (isEmpty(tagALN)) {
					if (isEmpty(tagHTML.match(/class/))) {
						//
						tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' class="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

					} else {
						tagTMP = tagHTML.substring(0, tagHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
						tagNEW = tidyCss(tagTMP);
					}
				} else {
					tagNEW = tagHTML.replace(tagALN, argTAG);
				}
				newHTML = selHTML.replace(tagHTML, tagNEW);
				break;
			default:
				newHTML = '<p class="' + argTAG + '">' + selTXT + '</p>';
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
			var arrNEW = curCSS.split(' ').map(function (item) {
				return item.trim();
			}).filter(function (el) {
				return el != '';
			});
			arrNEW.sort();
			var newCSS = (arrNEW.join(' ')).trim();
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

	function getAln(argTAG) {
		// argTAG = tag which may contain class
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argTAG) && !isEmpty(argTAG.match(/aln:txt-/g))) {
			htmlVAL = argTAG.substring(argTAG.indexOf('aln:txt-'), argTAG.indexOf('aln:txt-') + 10);
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

	editor.addButton('apply_txt_align', {
		type: 'splitbutton',
		title: 'Align Text',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMTV2MmgxMHYtMkg3em0tNCA2aDE4di0ySDN2MnptMC04aDE4di0ySDN2MnptNC02djJoMTBWN0g3ek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
		onclick: function () {
			if (isReady()) {
				setTag('aln:txt-ct');
			}
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1IDE1SDN2MmgxMnYtMnptMC04SDN2MmgxMlY3ek0zIDEzaDE4di0ySDN2MnptMCA4aDE4di0ySDN2MnpNMyAzdjJoMThWM0gzeiIvPjwvc3ZnPg==',
			text: '\xa0Align left',
			onclick: function() {
				if (isReady()) {
					setTag('aln:txt-lt');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMTV2MmgxMHYtMkg3em0tNCA2aDE4di0ySDN2MnptMC04aDE4di0ySDN2MnptNC02djJoMTBWN0g3ek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align Center',
			onclick: function() {
				if (isReady()) {
					setTag('aln:txt-ct');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMjFoMTh2LTJIM3Yyem02LTRoMTJ2LTJIOXYyem0tNi00aDE4di0ySDN2MnptNi00aDEyVjdIOXYyek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align Right',
			onclick: function() {
				if (isReady()) {
					setTag('aln:txt-rt');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMjFoMTh2LTJIM3Yyem0wLTRoMTh2LTJIM3Yyem0wLTRoMTh2LTJIM3Yyem0wLTRoMThWN0gzdjJ6bTAtNnYyaDE4VjNIM3oiLz48L3N2Zz4=',
			text: '\xa0Justify',
			onclick: function() {
				if (isReady()) {
					setTag('aln:txt-jt');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSAxMCAxMy41IEwgMTAgMTguNSBMIDEyIDE4LjUgTCAxMiA3LjUgTCAxNCA3LjUgTCAxNCAxOC41IEwgMTYgMTguNSBMIDE2IDcuNSBMIDE4IDcuNSBMIDE4IDUuNSBMIDEwIDUuNSBDIDcuNzkgNS41IDYgNy4yOSA2IDkuNSBDIDYgMTEuNzEgNy43OSAxMy41IDEwIDEzLjUgWiIvPgo8L3N2Zz4=',
			text: '\xa0Indent',
			onclick: function() {
				if (isReady()) {
					setTag('aln:txt-bi');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTB2NWgyVjRoMnYxMWgyVjRoMlYySDlDNi43OSAyIDUgMy43OSA1IDZzMS43OSA0IDQgNHptMTIgOGwtNC00djNINXYyaDEydjNsNC00eiIvPjwvc3ZnPg==',
			text: '\xa0Hanging Indent',
			onclick: function() {
				if (isReady()) {
					setTag('aln:txt-hi');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDEwdjVoMlY0aDJ2MTFoMlY0aDJWMmgtOEM3Ljc5IDIgNiAzLjc5IDYgNnMxLjc5IDQgNCA0em0tMiA3di0zbC00IDQgNCA0di0zaDEydi0ySDh6Ii8+PC9zdmc+',
			text: '\xa0Paragraph Indent',
			onclick: function() {
				if (isReady()) {
					setTag('aln:txt-pi');
				}
			}
		}],
	});
});

/*
 * EOF: apply-text-alignment / plugin.js / 30201018
 */
