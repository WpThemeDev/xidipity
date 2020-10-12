/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-format plugin
 *
 * ###:  plugin.js
 * bld:  30201018
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_formats', function (editor) {
	'use strict';

	function setTag(argTAG) {
		if (argTAG === undefined) {
			argTAG = '';
		}
		// init ret val
		var newHTML = '';
		// selection content in html format
		var selTXT = editor.selection.getContent({
			format: 'html'
		});
		// check for multiple paragraphs
		if (!isEmpty(selTXT.match(/<u>|<s>|<sup>|<sub>|<kbd>/gi))) {
			// existing class with alignment
			newHTML = selTXT.replace(/\bu\b|\bs\b|\bsup\b|\bsub\b|\bkbd\b/, argTAG);
		} else {
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
					tagALN = getEmb(tagHTML);
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
				tagALN = getEmb(spanHTML);
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
				tagALN = getEmb(tagHTML);
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
				newHTML = '<span class="' + argTAG + '">' + selTXT + '</span>';
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

	function getEmb(argTAG) {
		// argTAG = tag which may contain class
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argTAG) && !isEmpty(argTAG.match(/trn:/g))) {
			htmlVAL = argTAG.substring(argTAG.indexOf('trn:'), argTAG.indexOf('trn:') + 10);
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

	editor.addButton('apply_txt_formats', {
		type: 'splitbutton',
		title: 'Text Formats',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
		onclick: function () {
			if (isReady()) {
				setTag('u');
			}
		},
		menu: [{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
				text: '\xa0Underline',
				onclick: function () {
					if (isReady()) {
						setTag('u');
					}
				},
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDE5aDR2LTNoLTR2M3pNNSA0djNoNXYzaDRWN2g1VjRINXpNMyAxNGgxOHYtMkgzdjJ6Ii8+PC9zdmc+',
				text: '\xa0Strike through',
				onclick: function () {
					if (isReady()) {
						setTag('s');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiB4PSIwIiB5PSIwIi8+PHBhdGggZD0iTTIyLDdoLTJ2MWgzdjFoLTRWN2MwLTAuNTUsMC40NS0xLDEtMWgyVjVoLTNWNGgzYzAuNTUsMCwxLDAuNDUsMSwxdjFDMjMsNi41NSwyMi41NSw3LDIyLDd6IE01Ljg4LDIwaDIuNjZsMy40LTUuNDJoMC4xMiBsMy40LDUuNDJoMi42NmwtNC42NS03LjI3TDE3LjgxLDZoLTIuNjhsLTMuMDcsNC45OWgtMC4xMkw4Ljg1LDZINi4xOWw0LjMyLDYuNzNMNS44OCwyMHoiLz48L2c+PC9zdmc+',
				text: '\xa0Super script',
				onclick: function () {
					if (isReady()) {
						setTag('sup');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBhdGggZD0iTTIyLDE4aC0ydjFoM3YxaC00di0yYzAtMC41NSwwLjQ1LTEsMS0xaDJ2LTFoLTN2LTFoM2MwLjU1LDAsMSwwLjQ1LDEsMXYxQzIzLDE3LjU1LDIyLjU1LDE4LDIyLDE4eiBNNS44OCwxOGgyLjY2IGwzLjQtNS40MmgwLjEybDMuNCw1LjQyaDIuNjZsLTQuNjUtNy4yN0wxNy44MSw0aC0yLjY4bC0zLjA3LDQuOTloLTAuMTJMOC44NSw0SDYuMTlsNC4zMiw2LjczTDUuODgsMTh6Ii8+PC9nPjwvc3ZnPg==',
				text: '\xa0Sub script',
				onclick: function () {
					if (isReady()) {
						setTag('sub');
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
						setTag('kbd');
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
 * EOF: apply-text-format / plugin.js / 30201018
 */
