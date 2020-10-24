/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-italic plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_italic', function(editor) {
	'use strict';

	function setEmphasis(argTAG) {
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
		var preTAG;
		var pstTAG;
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
					selHTML = htmlARRAY[idx];
					preTAG = (isEmpty(selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>/, 'si')) ? '' : selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>/, 'si')[0]);
					pstTAG = (isEmpty(selHTML.match(/<(\/p.*?)>|<(\/h[1-6].*?)>|<(\/div.*?)>/, 'si')) ? '' : selHTML.match(/<(\/p.*?)>|<(\/h[1-6].*?)>|<(d\/iv.*?)>/, 'si')[0]);
					newHTML += selHTML.replace(preTAG,preTAG + '<' + argTAG + '>').replace(pstTAG,'</' + argTAG + '>' + pstTAG);
					idx++;
				}
				break;
			case (selTXT == selFULL || selNODE == 'span'):
				preTAG = (isEmpty(selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>|<(span.*?)>/, 'si')) ? '' : selHTML.match(/<(p.*?)>|<(h[1-6].*?)>|<(div.*?)>|<(span.*?)>/, 'si')[0]);
				pstTAG = (isEmpty(selHTML.match(/<(\/p.*?)>|<(\/h[1-6].*?)>|<(\/div.*?)>|<(\/span.*?)>/, 'si')) ? '' : selHTML.match(/<(\/p.*?)>|<(\/h[1-6].*?)>|<(d\/iv.*?)>|<(\/span.*?)>/, 'si')[0]);
				newHTML = selHTML.replace(preTAG,preTAG + '<' + argTAG + '>').replace(pstTAG,'</' + argTAG + '>' + pstTAG);
				break;
			default:
				newHTML = '<' + argTAG + '>' + selTXT + '</' + argTAG + '>';
		}
		if (!isEmpty(newHTML)) {
			editor.execCommand('mceReplaceContent', false, newHTML);
		}
		return;
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

	editor.addButton('apply_txt_italic', {
		type: 'splitbutton',
		title: 'Italic',
		shortcut: 'Ctr+I',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6Ii8+PC9zdmc+',
		onclick: function() {
			if (isReady()) {
				setEmphasis('i');
			}
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6Ii8+PC9zdmc+',
			text: '\xa0Italic',
			onclick: function() {
				if (isReady()) {
					setEmphasis('i');
				}
			}
		}, {
			icon: true,
			text: '\xa0Emphasis',
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjYgMTAuNzljLjk3LS42NyAxLjY1LTEuNzcgMS42NS0yLjc5IDAtMi4yNi0xLjc1LTQtNC00SDd2MTRoNy4wNGMyLjA5IDAgMy43MS0xLjcgMy43MS0zLjc5IDAtMS41Mi0uODYtMi44Mi0yLjE1LTMuNDJ6TTEwIDYuNWgzYy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTN2LTN6bTMuNSA5SDEwdi0zaDMuNWMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41eiIvPjwvc3ZnPg==',
			onclick: function() {
				if (isReady()) {
					setEmphasis('em');
				}

			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUgMTd2MmgxNHYtMkg1em00LjUtNC4yaDVsLjkgMi4yaDIuMUwxMi43NSA0aC0xLjVMNi41IDE1aDIuMWwuOS0yLjJ6TTEyIDUuOThMMTMuODcgMTFoLTMuNzRMMTIgNS45OHoiLz48L3N2Zz4=',
			text: '\xa0Strong',
			onclick: function() {
				if (isReady()) {
					setEmphasis('strong');
				}
			}
		}, ],
	});
});

/*
 * EOF: apply-text-italic / plugin.js / 30201101
 */
