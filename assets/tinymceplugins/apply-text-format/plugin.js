/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-format plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_formats', function (editor) {
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

	editor.addButton('apply_txt_formats', {
		type: 'splitbutton',
		title: 'Text Formats',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
		onclick: function () {
			if (isReady()) {
				setEmphasis('u');
			}
		},
		menu: [{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
				text: '\xa0Underline',
				onclick: function () {
					if (isReady()) {
						setEmphasis('u');
					}
				},
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDE5aDR2LTNoLTR2M3pNNSA0djNoNXYzaDRWN2g1VjRINXpNMyAxNGgxOHYtMkgzdjJ6Ii8+PC9zdmc+',
				text: '\xa0Strike through',
				onclick: function () {
					if (isReady()) {
						setEmphasis('s');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiB4PSIwIiB5PSIwIi8+PHBhdGggZD0iTTIyLDdoLTJ2MWgzdjFoLTRWN2MwLTAuNTUsMC40NS0xLDEtMWgyVjVoLTNWNGgzYzAuNTUsMCwxLDAuNDUsMSwxdjFDMjMsNi41NSwyMi41NSw3LDIyLDd6IE01Ljg4LDIwaDIuNjZsMy40LTUuNDJoMC4xMiBsMy40LDUuNDJoMi42NmwtNC42NS03LjI3TDE3LjgxLDZoLTIuNjhsLTMuMDcsNC45OWgtMC4xMkw4Ljg1LDZINi4xOWw0LjMyLDYuNzNMNS44OCwyMHoiLz48L2c+PC9zdmc+',
				text: '\xa0Super script',
				onclick: function () {
					if (isReady()) {
						setEmphasis('sup');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBhdGggZD0iTTIyLDE4aC0ydjFoM3YxaC00di0yYzAtMC41NSwwLjQ1LTEsMS0xaDJ2LTFoLTN2LTFoM2MwLjU1LDAsMSwwLjQ1LDEsMXYxQzIzLDE3LjU1LDIyLjU1LDE4LDIyLDE4eiBNNS44OCwxOGgyLjY2IGwzLjQtNS40MmgwLjEybDMuNCw1LjQyaDIuNjZsLTQuNjUtNy4yN0wxNy44MSw0aC0yLjY4bC0zLjA3LDQuOTloLTAuMTJMOC44NSw0SDYuMTlsNC4zMiw2LjczTDUuODgsMTh6Ii8+PC9nPjwvc3ZnPg==',
				text: '\xa0Sub script',
				onclick: function () {
					if (isReady()) {
						setEmphasis('sub');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxnPjxwYXRoIGQ9Ik0yLjUsNHYzaDV2MTJoM1Y3aDVWNEgyLjV6IE0yMS41LDloLTl2M2gzdjdoM3YtN2gzVjl6Ii8+PC9nPjwvZz48L2c+PC9zdmc+',
				text: '\xa0Upper Case',
				onclick: function () {
					setClass('trn:txt-upper');
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxnPjxwYXRoIGQ9Ik0yLjUsNHYzaDV2MTJoM1Y3aDVWNEgyLjV6IE0yMS41LDloLTl2M2gzdjdoM3YtN2gzVjl6Ii8+PC9nPjwvZz48L2c+PC9zdmc+',
				text: '\xa0Lower Case',
				onclick: function () {
					setClass('trn:txt-lower');
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxnPjxwYXRoIGQ9Ik0yLjUsNHYzaDV2MTJoM1Y3aDVWNEgyLjV6IE0yMS41LDloLTl2M2gzdjdoM3YtN2gzVjl6Ii8+PC9nPjwvZz48L2c+PC9zdmc+',
				text: '\xa0Small Caps',
				onclick: function () {
					setClass('trn:caps-sm');
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDd2NEg1LjgzbDMuNTgtMy41OUw4IDZsLTYgNiA2IDYgMS40MS0xLjQxTDUuODMgMTNIMjFWN3oiLz48L3N2Zz4=',
				text: '\xa0Keyboard',
				onclick: function () {
					if (isReady()) {
						setEmphasis('kbd');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxwYXRoIGQ9Ik0yMCw2djE0SDZ2MmgxNGMxLjEsMCwyLTAuOSwyLTJWNkgyMHoiLz48cGF0aCBkPSJNMTYsMkg0QzIuOSwyLDIsMi45LDIsNHYxMmMwLDEuMSwwLjksMiwyLDJoMTJjMS4xLDAsMi0wLjksMi0yVjRDMTgsMi45LDE3LjEsMiwxNiwyeiBNOSwxNkg0di01aDVWMTZ6IE0xNiwxNmgtNXYtNWg1IFYxNnogTTE2LDlINFY0aDEyVjl6Ii8+PC9nPjwvZz48L3N2Zz4=',
				text: '\xa0Drop Shadow',
				onclick: function () {
					setClass('trn:shadow-md');
				}
},
],
	});
});

/*
 * EOF: apply-text-format / plugin.js / 30201101
 */
