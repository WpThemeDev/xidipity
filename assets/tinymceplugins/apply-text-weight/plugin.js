/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-weight plugin
 *
 * ###:  plugin.js
 * bld:  30201018
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_weight', function (editor) {
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
				var tagWGT;
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
					tagWGT = getWgt(tagHTML);
					tagNEW = '';
					if (isEmpty(tagWGT)) {
						if (isEmpty(tagHTML.match(/style/))) {
							tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' style="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

						} else {
							tagTMP = tagHTML.substring(0, tagHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
							tagNEW = tidyCss(tagTMP);
						}
					} else {
						tagNEW = tagHTML.replace(tagWGT, argTAG);
					}
					newHTML += itmARRAY.replace(tagHTML, tagNEW);
				}
				break;
			case (selNODE == 'span'):
				// get span
				var spanHTML = getSpan(selHTML);
				// check tag for style element
				tagWGT = getWgt(spanHTML);
				var spanNEW = '';
				if (isEmpty(tagWGT)) {
					// existing style without weight
					var spanTMP = spanHTML.substring(0, spanHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
					spanNEW = tidyCss(spanTMP);
				} else {
					// existing style with weight
					spanNEW = spanHTML.replace(tagWGT, argTAG);
				}
				newHTML = selHTML.replace(spanHTML, spanNEW);
				break;
			case (selTXT == selFULL):
				// get tag
				tagHTML = getTag(selHTML, selNODE);
				// check tag for style element
				tagWGT = getWgt(tagHTML);
				tagNEW = '';
				if (isEmpty(tagWGT)) {
					if (isEmpty(tagHTML.match(/style/))) {
						tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' style="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

					} else {
						tagTMP = tagHTML.substring(0, tagHTML.indexOf('>') - 1) + ' ' + argTAG + '">';
						tagNEW = tidyCss(tagTMP);
					}
				} else {
					tagNEW = tagHTML.replace(tagWGT, argTAG);
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

	function getWgt(argTAG) {
		// argTAG = tag which may contain style
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argTAG) && !isEmpty(argTAG.match(/font-weight:/g))) {
			htmlVAL = argTAG.substring(argTAG.indexOf('font-weight:'), argTAG.indexOf(';', argTAG.indexOf('font-weight:') + 1) + 1);
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
	
	editor.addButton('apply_txt_weight', {
		type: 'splitbutton',
		title: 'Text Weight',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjYgMTAuNzljLjk3LS42NyAxLjY1LTEuNzcgMS42NS0yLjc5IDAtMi4yNi0xLjc1LTQtNC00SDd2MTRoNy4wNGMyLjA5IDAgMy43MS0xLjcgMy43MS0zLjc5IDAtMS41Mi0uODYtMi44Mi0yLjE1LTMuNDJ6TTEwIDYuNWgzYy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTN2LTN6bTMuNSA5SDEwdi0zaDMuNWMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41eiIvPjwvc3ZnPg==',
		onclick: function () {
			if (isReady()) {
				setTag('font-weight: 400;');
			}
		},
		menu: [{
				icon: false,
				text: '100\xa0-\xa0Thin',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 100;');
					}
				}
			},
			{
				icon: false,
				text: '200\xa0-\xa0Xtra Light',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 200;');
					}
				}
			},
			{
				icon: false,
				text: '300\xa0-\xa0Light',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 300;');
					}
				}
			},
			{
				icon: false,
				text: '400\xa0-\xa0Normal',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 400;');
					}
				}
			},
			{
				icon: false,
				text: '500\xa0-\xa0Medium',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 500;');
					}
				}
			},
			{
				icon: false,
				text: '600\xa0-\xa0Semi Bold',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 600;');
					}
				}
			},
			{
				icon: false,
				text: '700\xa0-\xa0Bold',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 700;');
					}
				}
			},
			{
				icon: false,
				text: '800\xa0-\xa0Xtra Bold',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 800;');
					}
				}
			},
			{
				icon: false,
				text: '900\xa0-\xa0Black',
				onclick: function () {
					if (isReady()) {
						setTag('font-weight: 900;');
					}
				}
			}
		]
	});
});
/*
 * EOF: apply-text-weight / plugin.js / 30201018
 */
