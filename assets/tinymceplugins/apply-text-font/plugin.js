/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_font', function(editor) {
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

	editor.addButton('apply_txt_font', {
		type: 'splitbutton',
		title: 'Fonts',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+aWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQ8L3RpdGxlPgogIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogIDxnIGlkPSLwn5SNLVN5c3RlbS1JY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8ZyBpZD0iaWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgIDxwYXRoIGQ9Ik0xNC40MzgxLDUuODk2MDU5NzggQzE0LjgwNzE5LDUuODk2MjIxOTkgMTUuMTQyNDIyLDYuMDk5MTEwOCAxNS4zMTU4NTY1LDYuNDE3NjEwOSBMMTUuMzY3NSw2LjUyNzk0IEwyMC43MTA2LDIwLjAyMzQgTDIxLjAwODYsMjAuMDIzNCBDMjEuNTYwOSwyMC4wMjM0IDIyLjAwODYsMjAuNDcxMSAyMi4wMDg2LDIxLjAyMzQgQzIyLjAwODYsMjEuNTM2MjUgMjEuNjIyNTczLDIxLjk1OTAzODUgMjEuMTI1MjIzOSwyMi4wMTY4MjAzIEwyMS4wMDg2LDIyLjAyMzU1IEwxNy45OTk5LDIyLjAyMzMgQzE3LjQ0NzcsMjIuMDIzMyAxNywyMS41NzU2IDE3LDIxLjAyMzMgQzE3LDIwLjUxMDQ1IDE3LjM4NjAyNywyMC4wODc3OTA4IDE3Ljg4MzM3NjEsMjAuMDMwMDI3NSBMMTgsMjAuMDIzMyBMMTguNTU5NSwyMC4wMjMzIEwxNy43NTg0LDE3Ljk5OTkgTDExLjEwNTgsMTcuOTk5OSBMMTAuMzAyNiwyMC4wMjMzIEwxMSwyMC4wMjMzIEMxMS41NTIzLDIwLjAyMzMgMTIsMjAuNDcxIDEyLDIxLjAyMzMgQzEyLDIxLjUzNjE1IDExLjYxMzk3MywyMS45NTg4MDkyIDExLjExNjYyMzksMjIuMDE2NTcyNSBMMTEsMjIuMDIzMyBMOCwyMi4wMjMzIEM3LjQ0NzcyLDIyLjAyMzMgNywyMS41NzU2IDcsMjEuMDIzMyBDNywyMC41MTA0NSA3LjM4NjAzNTY2LDIwLjA4Nzc5MDggNy44ODMzNzc5LDIwLjAzMDAyNzUgTDgsMjAuMDIzMyBMOC4xNTA4MSwyMC4wMjMzIEwxMy41MDgyLDYuNTI3MTEgQzEzLjY1OTUsNi4xNDYwMSAxNC4wMjgxLDUuODk1ODcgMTQuNDM4MSw1Ljg5NjA1OTc4IFogTTE0LjQzNjUsOS42MDk1IEwxMS44OTk3LDE1Ljk5OTkgTDE2Ljk2NjYsMTUuOTk5OSBMMTQuNDM2NSw5LjYwOTUgWiBNNy4wMDA1NywyIEM3LjQyMTA3LDIgNy43OTY2NCwyLjI2MzEgNy45NDAzMywyLjY1ODI5IEwxMC44MjIsMTAuNTgzOSBMOS43MTEyOCwxMy4zODIgTDkuMjA4OCwxMiBMNC43OTE0NywxMiBMMy45Mzk4MSwxNC4zNDE4IEMzLjc1MTA1LDE0Ljg2MDggMy4xNzcyNywxNS4xMjg1IDIuNjU4MjUsMTQuOTM5OCBDMi4xMzkyMiwxNC43NTEgMS44NzE0OSwxNC4xNzcyIDIuMDYwMjUsMTMuNjU4MiBMNi4wNjA3NSwyLjY1ODIyIEM2LjIwNDQ3LDIuMjYzMDQgNi41ODAwNiwyIDcuMDAwNTcsMiBaIE03LjAwMDQxLDUuOTI2MTggTDUuNTE4ODMsMTAgTDguNDgxNjIsMTAgTDcuMDAwNDEsNS45MjYxOCBaIiBpZD0i8J+OqC1Db2xvciIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+',
		onclick: function () {
			if (isReady()) {
				setClass('fnt:family-serif');
			}
		},
		menu: [{
			icon: false,
			text: '•\xa0Sans',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:family-sans');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Serif',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:family-serif');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Mono',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:family-mono');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Cursive',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:family-cursive');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Fantasy',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:family-fantasy');
				}
			}
		}, ],
	});
});

/*
 * EOF: apply-text-font / plugin.js / 30201101
 */
