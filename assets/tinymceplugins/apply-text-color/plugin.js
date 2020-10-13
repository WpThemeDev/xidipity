/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-color plugin
 *
 * ###:  plugin.js
 * bld:  30201018
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_color', function (editor, url) {
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
			format : 'html'
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
				var tagDELIM = selNEW.replace(/(<\/(div|h[1-6]|p)>)(<(div|h[1-6]|p)>)/g,'$1,$3');
				// add to array
				var tmpARRAY = tagDELIM.split(',');
				var htmlARRAY = tmpARRAY.filter(function (el) {
					return el != '';
				});
				// loop through array
				var idx;
				var itmARRAY;
				var spanNODE;
				var tagCOLOR;
				var tagHTML;
				var tagNEW;
				var tagTMP;
				for (idx in htmlARRAY) {
					// get span item
					itmARRAY = htmlARRAY[idx];
					// node
					spanNODE = itmARRAY.match(/\bp|h[1-6]|div/)[0];
					// get tag
					tagHTML = getTag(itmARRAY,spanNODE);
					// check tag for style element
					tagCOLOR = getColor(tagHTML);
					tagNEW = '';
					if (isEmpty(tagCOLOR)) {
						if (isEmpty(tagHTML.match(/style/))) {
							tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' style="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

						} else {
							tagTMP = tagHTML.substring(0, tagHTML.indexOf('>')-1) + ' ' + argTAG + '">';
							tagNEW = tidyCss(tagTMP);
						}
					} else {
						tagNEW = tagHTML.replace(tagCOLOR,argTAG);
					}
					newHTML += itmARRAY.replace(tagHTML,tagNEW);
				}
				break;
			case (selNODE == 'span'):
				// get span
				var spanHTML = getSpan(selHTML);
				// check tag for style element
				tagCOLOR = getColor(spanHTML);
				var spanNEW = '';
				if (isEmpty(tagCOLOR)) {
					// existing style without color
					var spanTMP = spanHTML.substring(0, spanHTML.indexOf('>')-1) + ' ' + argTAG + '">';
					spanNEW = tidyCss(spanTMP);
				} else {
					// existing style with color
					spanNEW = spanHTML.replace(tagCOLOR,argTAG);
				}
				newHTML = selHTML.replace(spanHTML,spanNEW);
				break;
			case (selTXT == selFULL):
				// get tag
				tagHTML = getTag(selHTML,selNODE);
				// check tag for style element
				tagCOLOR = getColor(tagHTML);
				tagNEW = '';
				if (isEmpty(tagCOLOR)) {
					if (isEmpty(tagHTML.match(/style/))) {
						tagNEW = tagHTML.substring(0, tagHTML.indexOf('>')) + ' style="' + argTAG + '">' + tagHTML.substring(tagHTML.indexOf('>') + 1);

					} else {
						tagTMP = tagHTML.substring(0, tagHTML.indexOf('>')-1) + ' ' + argTAG + '">';
						tagNEW = tidyCss(tagTMP);
					}
				} else {
					tagNEW = tagHTML.replace(tagCOLOR,argTAG);
				}
				newHTML = selHTML.replace(tagHTML,tagNEW);
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

	function getColor(argTAG) {
		// argTAG = tag which may contain style
		if (argTAG === undefined) {
			argTAG = '';
		}
		var htmlVAL = '';
		if (!isEmpty(argTAG) && !isEmpty(argTAG.match(/color:/g))) {
			htmlVAL = argTAG.substring(argTAG.indexOf('color:'), argTAG.indexOf(';', argTAG.indexOf('color:') + 1) + 1);
		}
		// return color or ''
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

	editor.addButton('apply_txt_color', {
		title: 'Apply Color',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OS43ODUgNDg5Ljc4NTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSA0Ni4wNTMgMS45NDkgTCA0Ni4wNTMgMS45NDkgQyA0My42MjYgLTAuNDgyIDM3LjI4MiAxLjkyNCAzMS44ODQgNy4zMjEgTCAzMS44ODQgNy4zMjEgTCAzMS44ODEgNy4zMjEgQyAzMC45ODkgOC4yMTUgMzAuMTc5IDkuMTMzIDI5LjQ2MiAxMC4wNTcgQyAyOC41NTcgMTUuMjExIDI2LjMwMSAxOC44NjUgMjMuNjYgMTguODY1IEwgMjMuNjYgMTguODY5IEMgMjIuODA0IDE4Ljg2OSAyMS45OSAxOC40ODcgMjEuMjUgMTcuNzk3IEwgMjEuMjQ2IDE3Ljc5NyBMIDE5LjI5MSAxNS44NDMgQyAxOC4xODYgMTQuNzM3IDE2LjM5MyAxNC43MzcgMTUuMjg1IDE1Ljg0MyBMIDcuNjg4IDIzLjQzNiBMIDcuMjkyIDIzLjgzNyBMIDEuODI5IDI5LjI5NiBDIDAuNzI0IDMwLjQwMSAwLjcyNCAzMi4xOTUgMS44MjkgMzMuMzAxIEwgMTQuNjk5IDQ2LjE3MSBDIDE1LjgwNSA0Ny4yNzYgMTcuNTk5IDQ3LjI3NiAxOC43MDUgNDYuMTcxIEwgMjQuMTY2IDQwLjcwOCBMIDI0LjU2NiA0MC4zMTIgTCAzMi4xNiAzMi43MTcgQyAzMy4yNjUgMzEuNjExIDMzLjI2NSAyOS44MTcgMzIuMTYgMjguNzExIEwgMzAuMjAzIDI2Ljc1NSBMIDMwLjIwNSAyNi43NSBDIDI5LjUxMyAyNi4wMTIgMjkuMTM2IDI1LjE5NiAyOS4xMzYgMjQuMzQzIEwgMjkuMTM2IDI0LjM0MyBDIDI5LjEzNiAyNC4zNDMgMjkuMTM2IDI0LjM0MyAyOS4xMzYgMjQuMzQzIEMgMjkuMTM2IDIxLjcgMzIuNzg5IDE5LjQ0MyAzNy45NDQgMTguNTM5IEMgMzguODY3IDE3LjgyNCAzOS43ODUgMTcuMDExIDQwLjY4IDE2LjEyIEwgNDAuNjc3IDE2LjExNyBMIDQwLjY4IDE2LjEyIEMgNDYuMDc4IDEwLjcxOSA0OC40ODMgNC4zNzUgNDYuMDUzIDEuOTQ5IFogTSAyNC4zMjIgMzcuNjY5IEwgMjQuMzIzIDM3LjY3MSBMIDE5LjA0NiA0Mi45NDcgTCAxOS4wNDYgNDIuOTQ3IEwgMTcuNjY2IDQ0LjMyNyBDIDE3LjEwMyA0NC44OSAxNi4xOSA0NC44OSAxNS42MjcgNDQuMzI3IEwgMy42NzIgMzIuMzczIEMgMy4xMSAzMS44MSAzLjExIDMwLjg5OCAzLjY3MiAzMC4zMzYgTCA1LjA1MiAyOC45NTYgTCA1LjA1MiAyOC45NTYgTCAxMC4yNSAyMy43NTggTCAxMC4yNSAyMy43NTggQyAxMS41MTkgMjIuNDg5IDEzLjE2NiAyMi4wODQgMTMuOTMzIDIyLjg1MyBDIDE0LjcwMSAyMy42MjIgMTQuMzExIDI1LjI4NSAxMy4wNDcgMjYuNTUxIEwgMTMuMDQ3IDI2LjU1MSBDIDExLjc3OSAyNy44MTcgMTEuMzkzIDI5LjQ4IDEyLjE2MyAzMC4yNDggQyAxMi45MjUgMzEuMDE3IDE0LjU4MSAzMC42MTkgMTUuOTI2IDI5LjI3OCBMIDE1LjkyOSAyOS4yNzggQyAxNy4xODMgMjguMDcxIDE4Ljc3OSAyNy42OTkgMTkuNTMxIDI4LjQ1MSBDIDIwLjI4MSAyOS4yMDQgMTkuOTI0IDMwLjgxNCAxOC43MiAzMi4wNzEgTCAxOC43MjQgMzIuMDc1IEMgMTcuMzgyIDMzLjQxOSAxNi45OTQgMzUuMDgxIDE3Ljc2IDM1Ljg1MiBDIDE4LjUyNyAzNi42MTUgMjAuMTgzIDM2LjIyMSAyMS40NTIgMzQuOTU0IEwgMjEuNTI2IDM0Ljg3NyBMIDIxLjUyNyAzNC44NzcgQyAyMi43ODYgMzMuNjcgMjQuMzc4IDMzLjI5OSAyNS4xMzQgMzQuMDUzIEMgMjUuODgzIDM0LjgwNSAyNS41MjUgMzYuNDE1IDI0LjMyMiAzNy42NjkgWiBNIDI5LjU0NSAzMC40MTMgQyAzMC4xMDggMzAuOTc3IDMwLjEwOCAzMS44ODkgMjkuNTQ1IDMyLjQ1MyBMIDI3LjkyMSAzNC4wNzIgTCAxMy45MjkgMjAuMDc5IEwgMTUuNTQ3IDE4LjQ1NiBDIDE2LjExNiAxNy44OTIgMTcuMDI1IDE3Ljg5MiAxNy41ODkgMTguNDU2IEwgMjkuNTQ1IDMwLjQxMyBaIE0gMzkuNDc5IDguNTI0IEMgMzguNTk3IDcuNjM1IDM4LjU5NyA2LjIwNSAzOS40NzkgNS4zMjMgQyA0MC4zNjUgNC40NCA0MS43OTYgNC40NCA0Mi42NzggNS4zMjMgQyA0My41NjEgNi4yMDUgNDMuNTYxIDcuNjM1IDQyLjY3OCA4LjUyNCBDIDQxLjc5NiA5LjQwNyA0MC4zNjUgOS40MDcgMzkuNDc5IDguNTI0IFoiIHN0eWxlPSIiLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KPC9zdmc+',
		onClick: function () {
			if (!isReady()) {
				return;
			}
			editor.windowManager.open({
				title: 'Color Tool',
				body: [{
					type: 'container',
					html: '<table style="border-collapse: collapse; table-layout:fixed; width:400px;"><tbody><tr><td><button id="#282726" style="background-color:#282726; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#504e4b" style="background-color:#504e4b; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#797571" style="background-color:#797571; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#a19c96" style="background-color:#a19c96; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#c9c3bc" style="background-color:#c9c3bc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#d4cfc9" style="background-color:#d4cfc9; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#dfdbd7" style="background-color:#dfdbd7; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#e9e7e4" style="background-color:#e9e7e4; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#f4f3f2" style="background-color:#f4f3f2; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#faf9f8" style="background-color:#faf9f8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td><button id="#980000" style="background-color:#980000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ff0000" style="background-color:#ff0000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ff9900" style="background-color:#ff9900; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ffff00" style="background-color:#ffff00; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#00ff00" style="background-color:#00ff00; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#00ffff" style="background-color:#00ffff; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#4a86e8" style="background-color:#4a86e8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#0000ff" style="background-color:#0000ff; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#9900ff" style="background-color:#9900ff; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ff00ff" style="background-color:#ff00ff; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td><button id="#e6b8af" style="background-color:#e6b8af; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#f4cccc" style="background-color:#f4cccc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#fce5cd" style="background-color:#fce5cd; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#fff2cc" style="background-color:#fff2cc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#d9ead3" style="background-color:#d9ead3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#d0e0e3" style="background-color:#d0e0e3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#c9daf8" style="background-color:#c9daf8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#cfe2f3" style="background-color:#cfe2f3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#d9d2e9" style="background-color:#d9d2e9; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ead1dc" style="background-color:#ead1dc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td><button id="#dd7e6b" style="background-color:#dd7e6b; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ea9999" style="background-color:#ea9999; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#f9cb9c" style="background-color:#f9cb9c; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ffe599" style="background-color:#ffe599; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#b6d7a8" style="background-color:#b6d7a8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#a2c4c9" style="background-color:#a2c4c9; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#a4c2f4" style="background-color:#a4c2f4; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#9fc5e8" style="background-color:#9fc5e8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#b4a7d6" style="background-color:#b4a7d6; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#d5a6bd" style="background-color:#d5a6bd; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td><button id="#cc4125" style="background-color:#cc4125; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#e06666" style="background-color:#e06666; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#f6b26b" style="background-color:#f6b26b; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ffd966" style="background-color:#ffd966; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#93c47d" style="background-color:#93c47d; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#76a5af" style="background-color:#76a5af; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#6d9eeb" style="background-color:#6d9eeb; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#6fa8dc" style="background-color:#6fa8dc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#8e7cc3" style="background-color:#8e7cc3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#c27ba0" style="background-color:#c27ba0; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td><button id="#a61c00" style="background-color:#a61c00; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#cc0000" style="background-color:#cc0000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#e69138" style="background-color:#e69138; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#f1c232" style="background-color:#f1c232; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#6aa84f" style="background-color:#6aa84f; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#45818e" style="background-color:#45818e; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#3c78d8" style="background-color:#3c78d8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#3d85c6" style="background-color:#3d85c6; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#674ea7" style="background-color:#674ea7; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#a64d79" style="background-color:#a64d79; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td><button id="#85200c" style="background-color:#85200c; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#990000" style="background-color:#990000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#b45f06" style="background-color:#b45f06; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#bf9000" style="background-color:#bf9000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#38761d" style="background-color:#38761d; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#134f5c" style="background-color:#134f5c; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#1155cc" style="background-color:#1155cc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#0b5394" style="background-color:#0b5394; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#351c75" style="background-color:#351c75; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#741b47" style="background-color:#741b47; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td><button id="#5b0f00" style="background-color:#5b0f00; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#660000" style="background-color:#660000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#783f04" style="background-color:#783f04; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#7f6000" style="background-color:#7f6000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#274e13" style="background-color:#274e13; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#0c343d" style="background-color:#0c343d; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#1c4587" style="background-color:#1c4587; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#073763" style="background-color:#073763; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#20124d" style="background-color:#20124d; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#4c1130" style="background-color:#4c1130; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td><button id="#000000" style="background-color:#000000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#ffffff" style="background-color:#ffffff; border:solid 1px #c9c3bc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#006682" style="background-color:#006682; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#007fa3" style="background-color:#007fa3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#3399b5" style="background-color:#3399b5; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#66b2c8" style="background-color:#66b2c8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#c03613" style="background-color:#c03613; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#f04318" style="background-color:#f04318; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#f36946" style="background-color:#f36946; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td><td><button id="#f68e74" style="background-color:#f68e74; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="submit">&nbsp;</button></td></tr><tr><td colspan="10">&nbsp;</td></tr><tr><td style="vertical-align:middle;" colspan="6"><label for="icon" style="line-height:200%; margin-right: 8px;"><button id="swatch" style="background-color:#ffffff; border:solid 1px #c9c3bc; height:30px; width:30px;" type="submit">&nbsp;</button></label><input type="text" id="hex_id" name="ico_tag" value="" style="font-family:monospace; border: 1px solid #c9c3bc; width:125px;"></td><td style="vertical-align:middle;" colspan="4"><input type="checkbox" id="bkg_id" name="bkg" value=""><label for="bkg" style="margin-left:6px;">Background color</label></tr></tbody></table>'
					}],
				onClick: function (event) {
					var swatch = document.getElementById('swatch');
					var hex_input = document.getElementById('hex_id');
					var hex_val = event.target.id;
					if (hex_val.substring(0, 1) == '#' && hex_val.length == 7) {
						hex_input.value = hex_val;
					}
					if (hex_input.value.substring(0, 1) == '#' && hex_input.value.length == 7) {
						swatch.style.backgroundColor = hex_input.value;
					} else {
						swatch.style.backgroundColor = '#ffffff';
					}
				},
				onSubmit: function () {
					var hexCODE = document.getElementById("hex_id").value.trim();
					if (!isEmpty(hexCODE.match(/^#[0-9a-f]{6}$/i))) {
						if (document.getElementById("bkg_id").checked) {
							setTag('background-color: ' + hexCODE + ';');
						} else {
							setTag('color: ' + hexCODE + ';');
						}
					} else {
						alert('SYSTEM MESSAGE\nInvalid or missing color selection.\nFor example, red is #ff0000.');
					}
				},
			});
		}
	});
});

/*
 * EOF: apply-text-color / plugin.js / 30201018
 */
