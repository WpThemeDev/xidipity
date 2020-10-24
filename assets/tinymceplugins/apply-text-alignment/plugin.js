/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-alignment plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_align', function(editor) {
	'use strict';

	function setClass(argTAG) {
		if (argTAG === undefined) {
			argTAG = '';
		}
		// note node change
		var nodeCHG = false;
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
		if (!isEmpty(selNODE.match(/em|i|kbd|\bs\b|span|strong|sub|sup|\bu\b/i))) {
			selTMP = '<' + selNODE + '>' + selTXT + '</' + selNODE + '>';
			selTXT = selTMP;
			// select parent node
			var tmpNODE;
			if (selNODE == 'span') {
				tmpNODE = editor.dom.getParent(htmlNODE,'div,h1,h2,h3,h4,h5,h6,p');
			} else {
				tmpNODE = editor.dom.getParent(htmlNODE,'div,h1,h2,h3,h4,h5,h6,p,span');
			}
			htmlNODE = tmpNODE;
			// get new selection node name
			selNODE = htmlNODE.nodeName.toLowerCase();
			nodeCHG = true;
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
			case (selTXT == selFULL || nodeCHG):
				curTAG = (isEmpty(selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>/, 'si')) ? '' : selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>/, 'si')[0]);
				newTAG = getClass(selHTML, argTAG);
				newHTML = selHTML.replace(curTAG,newTAG);
				break;
			default:
				newHTML = '<p class="' + argTAG + '">' + selTXT + '</p>';
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

	editor.addButton('apply_txt_align', {
		type: 'splitbutton',
		title: 'Align Text',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMTV2MmgxMHYtMkg3em0tNCA2aDE4di0ySDN2MnptMC04aDE4di0ySDN2MnptNC02djJoMTBWN0g3ek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
		onclick: function () {
			if (isReady()) {
				setClass('aln:txt-ct');
			}
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1IDE1SDN2MmgxMnYtMnptMC04SDN2MmgxMlY3ek0zIDEzaDE4di0ySDN2MnptMCA4aDE4di0ySDN2MnpNMyAzdjJoMThWM0gzeiIvPjwvc3ZnPg==',
			text: '\xa0Align left',
			onclick: function() {
				if (isReady()) {
					setClass('aln:txt-lt');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMTV2MmgxMHYtMkg3em0tNCA2aDE4di0ySDN2MnptMC04aDE4di0ySDN2MnptNC02djJoMTBWN0g3ek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align Center',
			onclick: function() {
				if (isReady()) {
					setClass('aln:txt-ct');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMjFoMTh2LTJIM3Yyem02LTRoMTJ2LTJIOXYyem0tNi00aDE4di0ySDN2MnptNi00aDEyVjdIOXYyek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align Right',
			onclick: function() {
				if (isReady()) {
					setClass('aln:txt-rt');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMjFoMTh2LTJIM3Yyem0wLTRoMTh2LTJIM3Yyem0wLTRoMTh2LTJIM3Yyem0wLTRoMThWN0gzdjJ6bTAtNnYyaDE4VjNIM3oiLz48L3N2Zz4=',
			text: '\xa0Justify',
			onclick: function() {
				if (isReady()) {
					setClass('aln:txt-jt');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSAxMCAxMy41IEwgMTAgMTguNSBMIDEyIDE4LjUgTCAxMiA3LjUgTCAxNCA3LjUgTCAxNCAxOC41IEwgMTYgMTguNSBMIDE2IDcuNSBMIDE4IDcuNSBMIDE4IDUuNSBMIDEwIDUuNSBDIDcuNzkgNS41IDYgNy4yOSA2IDkuNSBDIDYgMTEuNzEgNy43OSAxMy41IDEwIDEzLjUgWiIvPgo8L3N2Zz4=',
			text: '\xa0Indent',
			onclick: function() {
				if (isReady()) {
					setClass('aln:txt-bi');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTB2NWgyVjRoMnYxMWgyVjRoMlYySDlDNi43OSAyIDUgMy43OSA1IDZzMS43OSA0IDQgNHptMTIgOGwtNC00djNINXYyaDEydjNsNC00eiIvPjwvc3ZnPg==',
			text: '\xa0Hanging Indent',
			onclick: function() {
				if (isReady()) {
					setClass('aln:txt-hi');
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDEwdjVoMlY0aDJ2MTFoMlY0aDJWMmgtOEM3Ljc5IDIgNiAzLjc5IDYgNnMxLjc5IDQgNCA0em0tMiA3di0zbC00IDQgNCA0di0zaDEydi0ySDh6Ii8+PC9zdmc+',
			text: '\xa0Paragraph Indent',
			onclick: function() {
				if (isReady()) {
					setClass('aln:txt-pi');
				}
			}
		}],
	});
});

/*
 * EOF: apply-text-alignment / plugin.js / 30201101
 */
