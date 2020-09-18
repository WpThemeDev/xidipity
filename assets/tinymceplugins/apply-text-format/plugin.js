/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-format plugin
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_formats', function (editor) {
	'use strict';

	function setTag(argTAG) {
		var mceNODE = editor.selection.getNode();
		// selected contents
		var textSELECTED = editor.selection.getContent({
			format: 'text'
		});
		var textHTML = editor.selection.getContent({
			format: 'html'
		});
		// node text
		var textNODE = clrMCE(mceNODE.innerHTML);
		// node html
		var htmlNODE = mceNODE.outerHTML;
		if (textHTML == textNODE) {
			// full node
			var nodeTARGET = htmlNODE.substring(0, htmlNODE.indexOf('>') + 1); // selector (ie. <span>...</span>)
			var htmlUPDATE = ''; // new html
			var tagTARGET = ''; // tag selector
			var tagUPDATE = '';
			switch (true) {
				case (argTAG.match(/~/g) !== null):
					htmlUPDATE = htmlNODE.substring(0,htmlNODE.indexOf('>')+1);
					htmlUPDATE += argTAG.substring(0,argTAG.indexOf('~'));
					htmlUPDATE += textHTML; // include any embeded html
					htmlUPDATE += argTAG.substring(argTAG.indexOf('~')+1);
					htmlUPDATE += htmlNODE.substring(htmlNODE.lastIndexOf('<'));
					break;
				case (nodeTARGET.match(/class/g) !== null):
					tagTARGET = getTag(nodeTARGET, 'class');
					tagUPDATE = tagTARGET.slice(0, -1) + ' ' + argTAG + '"';
					htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
					break;
				default:
					tagTARGET = nodeTARGET.substring(0, nodeTARGET.indexOf('>') + 1);
					tagUPDATE = tagTARGET.slice(0, -1) + ' class="' + argTAG + '">';
					htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
			}
			// remove mce style data tags
			htmlUPDATE = clrMCE(htmlUPDATE);
			mceNODE.remove();
		} else {
			// partical node
			if (argTAG.match(/~/g) !== null) {
				htmlUPDATE = argTAG.substring(0,argTAG.indexOf('~'));
				htmlUPDATE += textHTML;
				htmlUPDATE += argTAG.substring(argTAG.indexOf('~')+1);
			} else {
				htmlUPDATE = '<span class="' + argTAG + '">';
				htmlUPDATE += textHTML;
				htmlUPDATE += '</span>';
			}
		}
		editor.selection.setContent(htmlUPDATE);
		editor.undoManager.add();
		return;
	}

	function getTag(argTARGET, argSELECTOR) {
		// arguments
		// 	argTARGET		nodeTARGET
		// 	argSELECTOR		node selector (style/class)
		var retVAL = '';
		if (argTARGET !== '') {
			var idxLT = 0; // starting index
			var idxRT = 0; // ending index
			var qFLAG = false; // quote flag
			switch (argSELECTOR) {
				//case ('style'):
				//	idxLT = argTARGET.indexOf('style');
				//	break;
				case ('class'):
					idxLT = argTARGET.indexOf('class');
					break;
				default:
					idxLT = 0;
			}
			if (idxLT > 0) {
				qFLAG = false;
				for (idxRT = idxLT; idxRT < argTARGET.length; idxRT++) {
					if (argTARGET.substring(idxRT, idxRT + 1) == '"') {
						if (qFLAG) {
							break;
						} else {
							qFLAG = true;
						}
					}
				}
				retVAL = argTARGET.substring(idxLT, idxRT + 1);
			}
		}
		return retVAL;
	}

	function clrMCE(argHTML) {
		var htmlUPDATE = ''; // updated html
		if (argHTML !== '') {
			var idxLT = argHTML.indexOf('data-mce-style'); // starting index
			var idxRT = 0; // ending index
			var qFLAG = false; // quote flag
			var mceTARGET = ''; // mce tag
			if (idxLT > 0) {
				qFLAG = false;
				for (idxRT = idxLT; idxRT < argHTML.length; idxRT++) {
					if (argHTML.substring(idxRT, idxRT + 1) == '"') {
						if (qFLAG) {
							break;
						} else {
							qFLAG = true;
						}
					}
				}
				mceTARGET = argHTML.substring(idxLT - 1, idxRT + 1);
				htmlUPDATE = argHTML.replace(mceTARGET, '');
			} else {
				htmlUPDATE = argHTML;
			}
		} else {
			htmlUPDATE = argHTML;
		}
		return htmlUPDATE;
	}
	editor.addButton('apply_txt_formats', {
		type: 'splitbutton',
		title: 'Text Formats',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
		onclick: function () {
			setTag('<u>~</u>');
		},
		menu: [{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
				text: '\xa0Underline',
				onclick: function () {
					setTag('<u>~</u>');
				},
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDE5aDR2LTNoLTR2M3pNNSA0djNoNXYzaDRWN2g1VjRINXpNMyAxNGgxOHYtMkgzdjJ6Ii8+PC9zdmc+',
				text: '\xa0Strike through',
				onclick: function () {
					setTag('<s>~</s>');

				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiB4PSIwIiB5PSIwIi8+PHBhdGggZD0iTTIyLDdoLTJ2MWgzdjFoLTRWN2MwLTAuNTUsMC40NS0xLDEtMWgyVjVoLTNWNGgzYzAuNTUsMCwxLDAuNDUsMSwxdjFDMjMsNi41NSwyMi41NSw3LDIyLDd6IE01Ljg4LDIwaDIuNjZsMy40LTUuNDJoMC4xMiBsMy40LDUuNDJoMi42NmwtNC42NS03LjI3TDE3LjgxLDZoLTIuNjhsLTMuMDcsNC45OWgtMC4xMkw4Ljg1LDZINi4xOWw0LjMyLDYuNzNMNS44OCwyMHoiLz48L2c+PC9zdmc+',
				text: '\xa0Super script',
				onclick: function () {
					setTag('<sup>~</sup>');
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBhdGggZD0iTTIyLDE4aC0ydjFoM3YxaC00di0yYzAtMC41NSwwLjQ1LTEsMS0xaDJ2LTFoLTN2LTFoM2MwLjU1LDAsMSwwLjQ1LDEsMXYxQzIzLDE3LjU1LDIyLjU1LDE4LDIyLDE4eiBNNS44OCwxOGgyLjY2IGwzLjQtNS40MmgwLjEybDMuNCw1LjQyaDIuNjZsLTQuNjUtNy4yN0wxNy44MSw0aC0yLjY4bC0zLjA3LDQuOTloLTAuMTJMOC44NSw0SDYuMTlsNC4zMiw2LjczTDUuODgsMTh6Ii8+PC9nPjwvc3ZnPg==',
				text: '\xa0Sub script',
				onclick: function () {
					setTag('<sub>~</sub>');
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxnPjxwYXRoIGQ9Ik0yLjUsNHYzaDV2MTJoM1Y3aDVWNEgyLjV6IE0yMS41LDloLTl2M2gzdjdoM3YtN2gzVjl6Ii8+PC9nPjwvZz48L2c+PC9zdmc+',
				text: '\xa0Small Caps',
				onclick: function () {
					setTag('fnt:caps-small');
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDd2NEg1LjgzbDMuNTgtMy41OUw4IDZsLTYgNiA2IDYgMS40MS0xLjQxTDUuODMgMTNIMjFWN3oiLz48L3N2Zz4=',
				text: '\xa0Keyboard',
				onclick: function () {
					setTag('<kbd>~</kbd>');
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxwYXRoIGQ9Ik0yMCw2djE0SDZ2MmgxNGMxLjEsMCwyLTAuOSwyLTJWNkgyMHoiLz48cGF0aCBkPSJNMTYsMkg0QzIuOSwyLDIsMi45LDIsNHYxMmMwLDEuMSwwLjksMiwyLDJoMTJjMS4xLDAsMi0wLjksMi0yVjRDMTgsMi45LDE3LjEsMiwxNiwyeiBNOSwxNkg0di01aDVWMTZ6IE0xNiwxNmgtNXYtNWg1IFYxNnogTTE2LDlINFY0aDEyVjl6Ii8+PC9nPjwvZz48L3N2Zz4=',
				text: '\xa0Drop Shadow',
				onclick: function () {
					setTag('fnt:shadow-medium');
				}
},
],
	});
});

/*
 * EOF: apply-text-format / plugin.js / 29200901
 */
