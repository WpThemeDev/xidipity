/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  30201018
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_font', function(editor) {
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
				var tagFNT;
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
					tagFNT = getFnt(tagHTML);
					tagNEW = '';
					if (isEmpty(tagFNT)) {
						if (isEmpty(tagHTML.match(/style/))) {
							tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' style="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

						} else {
							tagTMP = tagHTML.substring(0, tagHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
							tagNEW = tidyCss(tagTMP);
						}
					} else {
						tagNEW = tagHTML.replace(tagFNT, argTAG);
					}
					newHTML += itmARRAY.replace(tagHTML, tagNEW);
				}
				break;
			case (selNODE == 'span'):
				// get span
				var spanHTML = getSpan(selHTML);
				// check tag for style element
				tagFNT = getFnt(spanHTML);
				var spanNEW = '';
				if (isEmpty(tagFNT)) {
					// existing style without weight
					var spanTMP = spanHTML.substring(0, spanHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
					spanNEW = tidyCss(spanTMP);
				} else {
					// existing style with weight
					spanNEW = spanHTML.replace(tagFNT, argTAG);
				}
				newHTML = selHTML.replace(spanHTML, spanNEW);
				break;
			case (selTXT == selFULL):
				// get tag
				tagHTML = getTag(selHTML, selNODE);
				// check tag for style element
				tagFNT = getFnt(tagHTML);
				tagNEW = '';
				if (isEmpty(tagFNT)) {
					if (isEmpty(tagHTML.match(/style/))) {
						tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' style="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

					} else {
						tagTMP = tagHTML.substring(0, tagHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
						tagNEW = tidyCss(tagTMP);
					}
				} else {
					tagNEW = tagHTML.replace(tagFNT, argTAG);
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

	function getFnt(argTAG) {
		// argTAG = tag which may contain style
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argTAG) && !isEmpty(argTAG.match(/font-family:/g))) {
			htmlVAL = argTAG.substring(argTAG.indexOf('font-family:'), argTAG.indexOf(';', argTAG.indexOf('font-family:') + 1) + 1);
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

	editor.addButton('apply_txt_font', {
		type: 'splitbutton',
		title: 'Fonts',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+aWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQ8L3RpdGxlPgogIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogIDxnIGlkPSLwn5SNLVN5c3RlbS1JY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8ZyBpZD0iaWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgIDxwYXRoIGQ9Ik0xNC40MzgxLDUuODk2MDU5NzggQzE0LjgwNzE5LDUuODk2MjIxOTkgMTUuMTQyNDIyLDYuMDk5MTEwOCAxNS4zMTU4NTY1LDYuNDE3NjEwOSBMMTUuMzY3NSw2LjUyNzk0IEwyMC43MTA2LDIwLjAyMzQgTDIxLjAwODYsMjAuMDIzNCBDMjEuNTYwOSwyMC4wMjM0IDIyLjAwODYsMjAuNDcxMSAyMi4wMDg2LDIxLjAyMzQgQzIyLjAwODYsMjEuNTM2MjUgMjEuNjIyNTczLDIxLjk1OTAzODUgMjEuMTI1MjIzOSwyMi4wMTY4MjAzIEwyMS4wMDg2LDIyLjAyMzU1IEwxNy45OTk5LDIyLjAyMzMgQzE3LjQ0NzcsMjIuMDIzMyAxNywyMS41NzU2IDE3LDIxLjAyMzMgQzE3LDIwLjUxMDQ1IDE3LjM4NjAyNywyMC4wODc3OTA4IDE3Ljg4MzM3NjEsMjAuMDMwMDI3NSBMMTgsMjAuMDIzMyBMMTguNTU5NSwyMC4wMjMzIEwxNy43NTg0LDE3Ljk5OTkgTDExLjEwNTgsMTcuOTk5OSBMMTAuMzAyNiwyMC4wMjMzIEwxMSwyMC4wMjMzIEMxMS41NTIzLDIwLjAyMzMgMTIsMjAuNDcxIDEyLDIxLjAyMzMgQzEyLDIxLjUzNjE1IDExLjYxMzk3MywyMS45NTg4MDkyIDExLjExNjYyMzksMjIuMDE2NTcyNSBMMTEsMjIuMDIzMyBMOCwyMi4wMjMzIEM3LjQ0NzcyLDIyLjAyMzMgNywyMS41NzU2IDcsMjEuMDIzMyBDNywyMC41MTA0NSA3LjM4NjAzNTY2LDIwLjA4Nzc5MDggNy44ODMzNzc5LDIwLjAzMDAyNzUgTDgsMjAuMDIzMyBMOC4xNTA4MSwyMC4wMjMzIEwxMy41MDgyLDYuNTI3MTEgQzEzLjY1OTUsNi4xNDYwMSAxNC4wMjgxLDUuODk1ODcgMTQuNDM4MSw1Ljg5NjA1OTc4IFogTTE0LjQzNjUsOS42MDk1IEwxMS44OTk3LDE1Ljk5OTkgTDE2Ljk2NjYsMTUuOTk5OSBMMTQuNDM2NSw5LjYwOTUgWiBNNy4wMDA1NywyIEM3LjQyMTA3LDIgNy43OTY2NCwyLjI2MzEgNy45NDAzMywyLjY1ODI5IEwxMC44MjIsMTAuNTgzOSBMOS43MTEyOCwxMy4zODIgTDkuMjA4OCwxMiBMNC43OTE0NywxMiBMMy45Mzk4MSwxNC4zNDE4IEMzLjc1MTA1LDE0Ljg2MDggMy4xNzcyNywxNS4xMjg1IDIuNjU4MjUsMTQuOTM5OCBDMi4xMzkyMiwxNC43NTEgMS44NzE0OSwxNC4xNzcyIDIuMDYwMjUsMTMuNjU4MiBMNi4wNjA3NSwyLjY1ODIyIEM2LjIwNDQ3LDIuMjYzMDQgNi41ODAwNiwyIDcuMDAwNTcsMiBaIE03LjAwMDQxLDUuOTI2MTggTDUuNTE4ODMsMTAgTDguNDgxNjIsMTAgTDcuMDAwNDEsNS45MjYxOCBaIiBpZD0i8J+OqC1Db2xvciIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+',
		onclick: function () {
			if (isReady()) {
				setTag('font-family: serif;');
			}
		},
		menu: [{
			icon: false,
			text: '•\xa0Sans',
			onclick: function() {
				if (isReady()) {
					setTag('fnt:family-sans;');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Serif',
			onclick: function() {
				if (isReady()) {
					setTag('font-family: sans-serif;');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Mono',
			onclick: function() {
				if (isReady()) {
					setTag('font-family: monospace;');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Cursive',
			onclick: function() {
				if (isReady()) {
					setTag('font-family: cursive;');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Fantasy',
			onclick: function() {
				if (isReady()) {
					setTag('font-family: fantasy;');
				}
			}
		}, ],
	});
});

/*
 * EOF: apply-text-font / plugin.js / 30201018
 */
