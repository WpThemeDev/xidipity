/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-style plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('app_txt_style', function (editor) {
	'use strict';

	function getTxt() {
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
				tmpNODE = editor.dom.getParent(htmlNODE, 'div,h1,h2,h3,h4,h5,h6,p');
			} else {
				tmpNODE = editor.dom.getParent(htmlNODE, 'div,h1,h2,h3,h4,h5,h6,p,span');
			}
			htmlNODE = tmpNODE;
			// get new selection node name
			selNODE = htmlNODE.nodeName.toLowerCase();
		}
		selTMP = editor.dom.getOuterHTML(htmlNODE);
		var selHTML = selTMP.replace(/\sdata-mce-style.+"/g, '');
		selTMP = htmlNODE.innerHTML;
		var selFULL = selTMP.replace(/\sdata-mce-style.+"/g, '');
		switch (true) {
			case (selNODE == 'body'):
				alert('SYSTEM MESSAGE\nInvalid or too broad of a selection.');
				break;
			case (isEmpty(selHTML.match(/class|style|span|<em>|<i>|<kbd>|<s>|<strong>|<sub>|<sup>|<u>/))):
				alert('SYSTEM MESSAGE\nSelection missing style elements.');
				break;
			default:
				switch (true) {
					case (selTXT == selFULL):
						sessionStorage.setItem('srcHTML', selHTML);
						break;
					case (!isEmpty(selTXT.match(/<span>/))):
						sessionStorage.setItem('srcHTML', selFULL);
						break;
					default:
						sessionStorage.setItem('srcHTML', selTXT);
				}
				editor.selection.collapse();
		}
		return;
	}

	function setTxt() {
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
		if (!isEmpty(selNODE.match(/em|i|kbd|\bs\b|strong|sub|sup|u/, 'gi'))) {
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
		var preTAG;
		var pstTAG;
		var preEmp;
		var pstEmp;
		var regEXP;
		switch (true) {
			//case (selTXT == selFULL && selNODE !== 'span'):
			case (selTXT == selFULL):
				// full paragraph
				regEXP = new RegExp(/^<p.*?span.*?>|^<h[1-6].*?span.*?>|^<div.*?span.*?>/, 'g');
				preTAG = (isEmpty(selHTML.match(regEXP)) ? '' : selHTML.match(regEXP)[0]);
				if (isEmpty(preTAG)) {
					regEXP = new RegExp(/^<p.*?>|^<h[1-6].*?>|^<div.*?>/, 'g');
					preTAG = (isEmpty(selHTML.match(regEXP)) ? '' : selHTML.match(regEXP)[0]);
				}
				regEXP = new RegExp(/<\/span.*?\/p.*?>$|<\/span.*?\/h[1-6].*?>$|<\/span.*?\/div.*?>$/, 'g');
				pstTAG = (isEmpty(selHTML.match(regEXP)) ? '' : selHTML.match(regEXP)[0]);
				if (isEmpty(pstTAG)) {
					regEXP = new RegExp(/<\/p.*?>$|<\/h[1-6].*?>$|<\/div.*?>$/, 'g');
					pstTAG = (isEmpty(selHTML.match(regEXP)) ? '' : selHTML.match(regEXP)[0]);
				}
				var newTAGS = newTag(sessionStorage.getItem('srcHTML'), selHTML);
				if (newTAGS[2] == 0) {
					alert('SYSTEM MESSAGE\nUnable to apply selected style.');
				} else {
					newHTML = selHTML.replace(preTAG, newTAGS[0]).replace(pstTAG, newTAGS[1]);
				}
				break;
			case (selNODE == 'body'):
				// multi paragraph
				// strip carrage returns
				var selNEW = selTXT.replace(/(\r\n|\n|\r)/gm, '');
				// delimit tags with comma
				var tagDELIM = selNEW.replace(/(<\/(div|h[1-6]|p)>)(<(div|h[1-6]|p)>)/g, '$1,$3');
				// add to array
				var htmlARRAY = tagDELIM.split(',');
				var lstREC = lastRec(htmlARRAY);
				var idx = 0;
				var newTAGS;
				newHTML = '';
				// loop through array
				for (;htmlARRAY[idx];) {
					if (idx > lstREC) {
						newHTML += '<p>&nbsp;</p>';
						break;
					}
					selHTML = htmlARRAY[idx];
					regEXP = new RegExp(/^<p.*?span.*?>|^<h[1-6].*?span.*?>|^<div.*?span.*?>/, 'g');
					preTAG = (isEmpty(selHTML.match(regEXP)) ? '' : selHTML.match(regEXP)[0]);
					if (isEmpty(preTAG)) {
						regEXP = new RegExp(/^<p.*?>|^<h[1-6].*?>|^<div.*?>/, 'g');
						preTAG = (isEmpty(selHTML.match(regEXP)) ? '' : selHTML.match(regEXP)[0]);
					}
					regEXP = new RegExp(/<\/span.*?\/p.*?>$|<\/span.*?\/h[1-6].*?>$|<\/span.*?\/div.*?>$/, 'g');
					pstTAG = (isEmpty(selHTML.match(regEXP)) ? '' : selHTML.match(regEXP)[0]);
					if (isEmpty(pstTAG)) {
						regEXP = new RegExp(/<\/p.*?>$|<\/h[1-6].*?>$|<\/div.*?>$/, 'g');
						pstTAG = (isEmpty(selHTML.match(regEXP)) ? '' : selHTML.match(regEXP)[0]);
					}
					newTAGS = newTag(sessionStorage.getItem('srcHTML'), selHTML);
					if (newTAGS[2] == 0) {
						alert('(' + idx + ') SYSTEM MESSAGE\nUnable to apply selected style.');
						sessionStorage.setItem('srcHTML', '');
						break;
					} else {
						newHTML += selHTML.replace(preTAG, newTAGS[0]).replace(pstTAG, newTAGS[1]);
					}
					idx++;
				}
				break;
			default:
				// paragraph fragment
				var newTAGS = newTag(sessionStorage.getItem('srcHTML'), selTXT);
				if (newTAGS[2] == 0) {
					alert('SYSTEM MESSAGE\nUnable to apply selected style.');
				} else {
					newHTML = newTAGS[0] + selTXT + newTAGS[1];
				}
		}
		if (!isEmpty(newHTML)) {
			editor.execCommand('mceReplaceContent', false, newHTML);
		}
		sessionStorage.setItem('srcHTML', '');
		return;
	}

	function newTag(argSRC, argTAR) {
		// argSRC = source html
		// argTAR = target html
		if (argSRC === undefined) {
			argSRC = '';
		}
		if (argTAR === undefined) {
			argTAR = '';
		}
		var htmlARRAY = new Array(3);
		htmlARRAY[2] = 0;
		if (isEmpty(argSRC.match(/class|style|<em>|<i>|<kbd>|<s>|<strong>|<sub>|<sup>|<u>/))) {
			argSRC = '';
			argTAR = '';
		}
		if (!isEmpty(argSRC) && !isEmpty(argTAR)) {
			// vars
			var tarPRE;
			var tarPST;
			var newPRE;
			var newPST;
			var regEXP;
			var valCLASS = getElement(argSRC, 'class');
			var valSTYLE = getElement(argSRC, 'style');
			var valTAG = getElement(argSRC, 'tag');

			// the tags to replace
			regEXP = new RegExp(/^<p.*?span.*?>|^<h[1-6].*?span.*?>|^<div.*?span.*?>/, 'g');
			tarPRE = (isEmpty(argTAR.match(regEXP)) ? '' : argTAR.match(regEXP)[0]);
			if (isEmpty(tarPRE)) {
				regEXP = new RegExp(/^<p.*?>|^<h[1-6].*?>|^<div.*?>/, 'g');
				tarPRE = (isEmpty(argTAR.match(regEXP)) ? '' : argTAR.match(regEXP)[0]);
			}
			regEXP = new RegExp(/<\/span.*?\/p.*?>$|<\/span.*?\/h[1-6].*?>$|<\/span.*?\/div.*?>$/, 'g');
			tarPST = (isEmpty(argTAR.match(regEXP)) ? '' : argTAR.match(regEXP)[0]);
			if (isEmpty(tarPST)) {
				regEXP = new RegExp(/<\/p.*?>$|<\/h[1-6].*?>$|<\/div.*?>$/, 'g');
				tarPST = (isEmpty(argTAR.match(regEXP)) ? '' : argTAR.match(regEXP)[0]);
			}

			if (isEmpty(tarPRE)) {
				// alignment not allowed
				htmlARRAY[2] = 1;
				regEXP = new RegExp(/(aln:txt-)(lt|ct|rt|jt|bi|hi|pi)/, 'g');
				var tmpVAL = valCLASS.replace(regEXP, '').trim();
				valCLASS = tmpVAL;
				switch (true) {
					// has class & style
					case (!isEmpty(valCLASS) && !isEmpty(valSTYLE)):
						newPRE = '<span class="' + valCLASS + '"> style="' + valSTYLE + '">';
						newPST = '</span>';
						break;
						// has class & no style
					case (!isEmpty(valCLASS)):
						newPRE = '<span class="' + valCLASS + '">';
						newPST = '</span>';
						break;
						// has style & no class
					case (!isEmpty(valSTYLE)):
						newPRE = '<span style="' + valSTYLE + '">';
						newPST = '</span>';
						break;
					default:
						newPRE = '';
						newPST = '';
						htmlARRAY[2] = 0;
				}
				if (!isEmpty(valTAG)) {
					tmpVAL = newPRE;
					newPRE = tmpVAL + '<' + valTAG + '>';
					tmpVAL = newPST;
					newPST = '</' + valTAG + '>' + tmpVAL;
					htmlARRAY[2] = 1;
				}
			} else {
				htmlARRAY[2] = 2;
				switch (true) {
					// has alignment & color style
					case (!isEmpty(valCLASS.match(/(aln:txt-)(lt|ct|rt|jt|bi|hi|pi)/)) && !isEmpty(valSTYLE.match(/color:.*?;/))):
						newPRE = '<p class="' + valCLASS + '">' + '<span style="' + valSTYLE + '">';
						newPST = '</span></p>';
						break;
						// has alignment & some other style
					case (!isEmpty(valCLASS.match(/(aln:txt-)(lt|ct|rt|jt|bi|hi|pi)/)) && !isEmpty(valSTYLE)):
						newPRE = '<p class="' + valCLASS + '"> style="' + valSTYLE + '">';
						newPST = '</p>';
						break;
						// has alignment & no style
					case (!isEmpty(valCLASS.match(/(aln:txt-)(lt|ct|rt|jt|bi|hi|pi)/))):
						newPRE = '<p class="' + valCLASS + '">';
						newPST = '</p>';
						break;
						// has class & style
					case (!isEmpty(valCLASS) && !isEmpty(valSTYLE)):
						newPRE = tarPRE + '<span class="' + valCLASS + '"> style="' + valSTYLE + '">';
						newPST = '</span>' + tarPST;
						break;
						// has class & no style
					case (!isEmpty(valCLASS)):
						tmpVAL = tarPRE.replace(/>/, '');
						newPRE = tmpVAL + ' class="' + valCLASS + '">';
						newPST = tarPST;
						break;
						// has color style
					case (!isEmpty(valSTYLE.match(/color:.*?;/))):
						newPRE = tarPRE + '<span style="' + valSTYLE + '">';
						newPST = '</span>' + tarPST;
						break;
						// has style & no class
					case (!isEmpty(valSTYLE)):
						tmpVAL = tarPRE.replace(/>/, '');
						newPRE = tmpVAL + ' style="' + valSTYLE + '">';
						newPST = tarPST;
						break;
					default:
						newPRE = '';
						newPST = '';
						htmlARRAY[2] = 0;
				}
				if (!isEmpty(valTAG)) {
					if (isEmpty(newPRE)) {
						tmpVAL = tarPRE;
					} else {
						tmpVAL = newPRE;
					}
					newPRE = tmpVAL + '<' + valTAG + '>';
					if (isEmpty(newPST)) {
						tmpVAL = tarPST;
					} else {
						tmpVAL = newPST;
					}
					newPST = '</' + valTAG + '>' + tmpVAL;
					htmlARRAY[2] = 2;
				}
			}
			htmlARRAY[0] = newPRE;
			htmlARRAY[1] = newPST;
		}
		return htmlARRAY;
	}


	function getElement(argHTML, argEL) {
		// argHTML = html
		// argEL = element (style/class/tag)
		if (argHTML === undefined) {
			argHTML = '';
		}
		if (argEL === undefined) {
			argEL = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argHTML) && !isEmpty(argEL.match(/class|style|tag/))) {
			var regEXP;
			var htmlTMP;
			if (argEL == 'tag') {
				regEXP = new RegExp(/<em>|<i>|<kbd>|<s>|<strong>|<sub>|<sup>|<u>/, 'si');
				htmlTMP = (isEmpty(argHTML.match(regEXP)) ? '' : argHTML.match(regEXP)[0]);
				if (!isEmpty(htmlTMP)) {
					htmlVAL = htmlTMP.replace('<', '').replace('>', '');
				}
			} else if (argEL == 'class' || argEL == 'style') {
				regEXP = new RegExp(argEL + '.*?".*?"', 'si');
				htmlTMP = (isEmpty(argHTML.match(regEXP)) ? '' : argHTML.match(regEXP)[0]);
				if (!isEmpty(htmlTMP)) {
					regEXP = RegExp(argEL);
					htmlVAL = htmlTMP.replace(regEXP, '').replace(/=/, '').replace(/"/g, '');
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

	function lastRec(argARRAY) {
		if (argARRAY === undefined) {
			argARRAY = [''];
		}
		var cntITM;
		// 0 based
		var idx = argARRAY.length - 1;
		for (; argARRAY[idx];) {
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
			format: 'text'
		});
		if (isEmpty(selTXT)) {
			alert('SYSTEM MESSAGE\nInvalid or missing text selection.');
			blnVAL = false;
			sessionStorage.setItem('srcHTML', '');
		}
		return blnVAL;
	}

	editor.addButton('app_txt_style', {
		title: 'Duplicate Style',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4IDRWM2MwLS41NS0uNDUtMS0xLTFINWMtLjU1IDAtMSAuNDUtMSAxdjRjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xVjZoMXY0SDl2MTFjMCAuNTUuNDUgMSAxIDFoMmMuNTUgMCAxLS40NSAxLTF2LTloOFY0aC0zeiIvPjwvc3ZnPg==',
		onclick: function () {
			if (sessionStorage.getItem('srcHTML') == null) {
				sessionStorage.setItem('srcHTML', '');
			}
			if (isEmpty(sessionStorage.getItem('srcHTML'))) {
				if (isReady()) {
					getTxt();
				}
			} else {
				if (isReady()) {
					if (isEmpty(sessionStorage.getItem('srcHTML'))) {
						alert('SYSTEM MESSAGE\nInvalid or missing style elements.');
					} else {
						setTxt();
					}
				}
			}
		}
	});
});

/*
 * EOF: apply-text-style / plugin.js / 30201101
 */
