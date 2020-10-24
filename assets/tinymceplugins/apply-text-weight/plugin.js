/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-weight plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_weight', function (editor) {
	'use strict';

	function setStyle(argTAG) {
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
		}
		selTMP = htmlNODE.innerHTML;
		var selFULL = selTMP.replace(/\sdata-mce-style.+"/g, '');
		selTMP = editor.dom.getOuterHTML(htmlNODE);
		var selHTML = selTMP.replace(/\sdata-mce-style.+"/g, '');
		switch (true) {
			case (selNODE == 'body'):
				// strip cr/lf
				var selNEW = selTXT.replace(/(\r\n|\n|\r)/gm, '');
				// delimit tags with comma
				var tagDELIM = selNEW.replace(/(\/(?!span>).*?>)(<.)/g, '$1,$2');
				// create array from delimited string
				var htmlARRAY = tagDELIM.split(',');
				var lstREC = lastRec(htmlARRAY);
				var idx = 0;
				var curTAG;
				var newTAG;
				// loop through array
				for (;htmlARRAY[idx];) {
					if (idx > lstREC) {
						newHTML += '<p>&nbsp;</p>';
						break;
					}
					// save array item to var
					selHTML = htmlARRAY[idx];
					curTAG = (isEmpty(selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>|<(span.*?)>/, 'si')) ? '' : selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>|<(span.*?)>/, 'si')[0]);
					newTAG = getStyle(selHTML, argTAG);
					newHTML += selHTML.replace(curTAG,newTAG);
					idx++;
				}
				break;
			case (selTXT == selFULL || selNODE == 'span'):
				curTAG = (isEmpty(selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>|<(span.*?)>/, 'si')) ? '' : selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>|<(span.*?)>/, 'si')[0]);
				newTAG = getStyle(selHTML, argTAG);
				newHTML = selHTML.replace(curTAG,newTAG);
				break;
			default:
				newHTML = '<span style="' + argTAG + '">' + selTXT + '</span>';
		}
		if (!isEmpty(newHTML)) {
			editor.execCommand('mceReplaceContent', false, newHTML);
		}
		return;
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

	function getStyle(argHTML, argTAG) {
		// argHTML = (selHTML) current style
		// argTAG = update
		if (argHTML === undefined) {
			argHTML = '';
		}
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argHTML) && !isEmpty(argTAG)) {
			// pull key
			var argKEY = argTAG.match(/^.*?:/)[0].replace(':', '');
			// pull tag
			var tagHTML = (isEmpty(argHTML.match(/^<(.|\n)*?>/, 'si')) ? '' : argHTML.match(/^<(.|\n)*?>/, 'si')[0]);
			if (isEmpty(tagHTML.match(/style/))) {
				htmlVAL = tagHTML.match(/^<p|^<h[1-6]|<span|^<div/)[0] + ' style="' + argTAG + '">';
			} else {
				var regEXP = new RegExp(argKEY, 'gis');
				if (isEmpty(tagHTML.match(regEXP))) {
					var tmpVAL2 = tagHTML.match(/style.*?;"/)[0].replace(/;"/, ';') + ' ' + argTAG + '"';
					var tmpVAL1 = tidyStyle(tmpVAL2);
					htmlVAL = tagHTML.replace(/style.*?;"/, tmpVAL1);
				} else {
					regEXP = RegExp('(' + argKEY + ')(.*?;)');
					htmlVAL = tagHTML.replace(regEXP, argTAG);
				}
			}
		}
		return htmlVAL;
	}

	function tidyStyle(argSTY) {
		// argSTY = class(s) to tidy
		if (argSTY === undefined) {
			argSTY = '';
		}
		var htmlVAL = argSTY;
		if (!isEmpty(argSTY)) {
			var regEXP = new RegExp(/"(.*?)"/, 'gi');
			var selSTY = argSTY.match(regEXP)[0];
			var curSTY = selSTY.replace(/"/g, '').replace(/;[ ]{1,}/g, ',').replace(/;/g, '');
			var arrSTY = curSTY.split(',');
			arrSTY.sort();
			var newSTY = '"' + (arrSTY.join('; ')) + ';"';
			htmlVAL = argSTY.replace(regEXP, newSTY);
		}
		// returns tidy style
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
				setStyle('font-weight: 400;');
			}
		},
		menu: [{
				icon: false,
				text: '100\xa0-\xa0Thin',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 100;');
					}
				}
			},
			{
				icon: false,
				text: '200\xa0-\xa0Xtra Light',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 200;');
					}
				}
			},
			{
				icon: false,
				text: '300\xa0-\xa0Light',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 300;');
					}
				}
			},
			{
				icon: false,
				text: '400\xa0-\xa0Normal',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 400;');
					}
				}
			},
			{
				icon: false,
				text: '500\xa0-\xa0Medium',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 500;');
					}
				}
			},
			{
				icon: false,
				text: '600\xa0-\xa0Semi Bold',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 600;');
					}
				}
			},
			{
				icon: false,
				text: '700\xa0-\xa0Bold',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 700;');
					}
				}
			},
			{
				icon: false,
				text: '800\xa0-\xa0Xtra Bold',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 800;');
					}
				}
			},
			{
				icon: false,
				text: '900\xa0-\xa0Black',
				onclick: function () {
					if (isReady()) {
						setStyle('font-weight: 900;');
					}
				}
			}
		]
	});
});
/*
 * EOF: apply-text-weight / plugin.js / 30201101
 */
