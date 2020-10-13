/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-style plugin
 *
 * ###:  plugin.js
 * bld:  30201018
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('app_txt_style', function (editor) {
	'use strict';

	function getTxt() {
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
		if (selNODE == 'body') {
			alert('SYSTEM MESSAGE\nInvalid or too broad of a selection.');
		} else {
			var valCLASS = getClass(selHTML);
			var valSTYLE = getStyle(selHTML);
			var valTAG = getTag(selHTML);
			if (isEmpty(valTAG + valSTYLE + valCLASS)) {
				alert('SYSTEM MESSAGE\nSelected text missing style arguments.');
			} else {
				sessionStorage.setItem('memStat', '*');
				sessionStorage.setItem('memClass', valCLASS);
				sessionStorage.setItem('memStyle', valSTYLE);
				sessionStorage.setItem('memTag', valTAG);
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
		if (!isEmpty(selNODE.match(/em|i|kbd|\bs\b|strong|sub|sup|u/,'gi'))) {
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
		var valCLASS = sessionStorage.getItem('memClass');
		var valSTYLE = sessionStorage.getItem('memStyle');
		var valTAG = sessionStorage.getItem('memTag');
		switch (true) {
			case (selTXT == selFULL && selNODE !== 'span'):
				var preTAG = selHTML.match(/<p\b|<h[1-6]|<div/, 's')[0];
				var pstTAG = preTAG.replace(/</, '</') + '>';
				var preEmp = sessionStorage.getItem('memTag');
				var pstEmp = preEmp.replace(/</, '</').trim();
				switch (true) {
					case (!isEmpty(valCLASS) && !isEmpty(valSTYLE)):
						newHTML = preTAG + ' ' + valCLASS + ' ' + valSTYLE + '>' + preEmp + selTXT + pstEmp + pstTAG;
						break;
					case (!isEmpty(valCLASS)):
						newHTML = preTAG + ' ' + valCLASS + '>' + preEmp + selTXT + pstEmp + pstTAG;
						break;
					case (!isEmpty(valSTYLE)):
						newHTML = preTAG + ' ' + valSTYLE + '>' + preEmp + selTXT + pstEmp + pstTAG;
						break;
					default:
						newHTML = preTAG + '>' + preEmp + selTXT + pstEmp + pstTAG;
				}
				break;
			case (selNODE == 'body'):
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
				//var spanNODE;
				//var tagWGT;
				//var tagHTML;
				//var tagNEW;
				//var tagTMP;
				newHTML = '';
				for (idx in htmlARRAY) {
					// get span item
					itmARRAY = htmlARRAY[idx];
					var preTAG = itmARRAY.match(/<p\b|<h[1-6]|<div/, 's')[0];
					var pstTAG = preTAG.replace(/</, '</') + '>';
					var preEmp = sessionStorage.getItem('memTag');
					var pstEmp = preEmp.replace(/</, '</').trim();
					var tmpHTML = document.createElement('div');
					// strip html tags
					tmpHTML.innerHTML = itmARRAY;
					selTXT = tmpHTML.textContent || tmpHTML.innerText;
					switch (true) {
						case (!isEmpty(valCLASS) && !isEmpty(valSTYLE)):
							newHTML += preTAG + ' ' + valCLASS + ' ' + valSTYLE + '>' + preEmp + selTXT + pstEmp + pstTAG;
							break;
						case (!isEmpty(valCLASS)):
							newHTML += preTAG + ' ' + valCLASS + '>' + preEmp + selTXT + pstEmp + pstTAG;
							break;
						case (!isEmpty(valSTYLE)):
							newHTML += preTAG + ' ' + valSTYLE + '>' + preEmp + selTXT + pstEmp + pstTAG;
							break;
						default:
							newHTML += preTAG + '>' + preEmp + selTXT + pstEmp + pstTAG;
					}
				}
				break;
			default:
				preTAG = '<span';
				pstTAG = '</span>';
				preEmp = sessionStorage.getItem('memTag');
				pstEmp = preEmp.replace(/</, '</').trim();
				switch (true) {
					case (!isEmpty(valCLASS) && !isEmpty(valSTYLE)):
						newHTML = preTAG + ' ' + valCLASS + ' ' + valSTYLE + '>' + preEmp + selTXT + pstEmp + pstTAG;
						break;
					case (!isEmpty(valCLASS)):
						newHTML = preTAG + ' ' + valCLASS + '>' + preEmp + selTXT + pstEmp + pstTAG;
						break;
					case (!isEmpty(valSTYLE)):
						newHTML = preTAG + ' ' + valSTYLE + '>' + preEmp + selTXT + pstEmp + pstTAG;
						break;
					default:
						newHTML = preTAG + '>' + preEmp + selTXT + pstEmp + pstTAG;
				}
		}
		if (!isEmpty(newHTML)) {
			editor.execCommand('mceReplaceContent', false, newHTML);
		}
		clrMem();
		return;
	}

	function getTag(argHTML) {
		// argHTML = inner/outer HTML
		if (argHTML === undefined) {
			argHTML = '';
		}
		var htmlVAL = '';
		var regEXP = new RegExp(/<em>|<i>|<kbd>|<s>|<strong>|<sub>|<sup>|<u>/,'is');
		if (!isEmpty(argHTML.match(regEXP))) {
			htmlVAL = argHTML.match(regEXP)[0];
		}
		return htmlVAL;
	}

	function getClass(argHTML) {
		// argHTML = inner/outer HTML
		if (argHTML === undefined) {
			argHTML = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argHTML.match(/class/))) {
			var regEXP = new RegExp(/class\b=".*?"/, 'is');
			htmlVAL = argHTML.match(regEXP)[0];
		}
		return htmlVAL;
	}

	function getStyle(argHTML) {
		// argHTML = inner/outer HTML
		if (argHTML === undefined) {
			argHTML = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argHTML.match(/style/))) {
			var regEXP = new RegExp(/style\b.*?;"/, 'is');
			htmlVAL = argHTML.match(regEXP)[0];
		}
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
			clrMem();
		}
		return blnVAL;
	}

	function clrMem() {
		sessionStorage.setItem('memStat', '');
		sessionStorage.setItem('memClass', '');
		sessionStorage.setItem('memStyle', '');
		sessionStorage.setItem('memTag', '');
		return;
	}

	editor.addButton('app_txt_style', {
		title: 'Duplicate Style',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4IDRWM2MwLS41NS0uNDUtMS0xLTFINWMtLjU1IDAtMSAuNDUtMSAxdjRjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xVjZoMXY0SDl2MTFjMCAuNTUuNDUgMSAxIDFoMmMuNTUgMCAxLS40NSAxLTF2LTloOFY0aC0zeiIvPjwvc3ZnPg==',
		onclick: function () {
			if (sessionStorage.getItem('memStat') == null) {
				clrMem();
			}
			if (isEmpty(sessionStorage.getItem('memStat'))) {
				if (isReady()) {
					getTxt();
				}
			} else {
				if (isReady()) {
					if (isEmpty(sessionStorage.getItem('memClass') + sessionStorage.getItem('memStyle') + sessionStorage.getItem('memTag'))) {
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
 * EOF: apply-text-style / plugin.js / 30201018
 */
