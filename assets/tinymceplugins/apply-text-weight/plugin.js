/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-weight plugin 
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_weight', function (editor) {
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
				case (nodeTARGET.match(/style/g) !== null):
					tagTARGET = getTag(nodeTARGET, 'style');
					tagUPDATE = tagTARGET.slice(0, -1) + ' ' + argTAG + ';"';
					htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
					break;
				case (nodeTARGET.match(/class/g) !== null):
					tagTARGET = getTag(nodeTARGET, 'class');
					tagUPDATE = tagTARGET + ' style="' + argTAG + ';"';
					htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
					break;
				default:
					tagTARGET = nodeTARGET.substring(0, nodeTARGET.indexOf('>') + 1);
					tagUPDATE = tagTARGET.slice(0, -1) + ' style="' + argTAG + ';">';
					htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
			}
			// remove mce style data tags
			htmlUPDATE = clrMCE(htmlUPDATE);
			mceNODE.remove();
		} else {
			// partical node
			htmlUPDATE = '<span style="' + argTAG + '">';
			htmlUPDATE += textSELECTED;
			htmlUPDATE += '</span>';
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
				case ('style'):
					idxLT = argTARGET.indexOf('style');
					break;
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
	editor.addButton('apply_txt_weight', {
		type: 'splitbutton',
		title: 'Text Weight',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjYgMTAuNzljLjk3LS42NyAxLjY1LTEuNzcgMS42NS0yLjc5IDAtMi4yNi0xLjc1LTQtNC00SDd2MTRoNy4wNGMyLjA5IDAgMy43MS0xLjcgMy43MS0zLjc5IDAtMS41Mi0uODYtMi44Mi0yLjE1LTMuNDJ6TTEwIDYuNWgzYy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTN2LTN6bTMuNSA5SDEwdi0zaDMuNWMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41eiIvPjwvc3ZnPg==',
		onclick: function () {
			setTag('font-weight:400');
		},
		menu: [{
				icon: false,
				text: '100\xa0-\xa0Thin',
				onclick: function () {
					setTag('font-weight:100');
				}
			},
			{
				icon: false,
				text: '200\xa0-\xa0Xtra Light',
				onclick: function () {
					setTag('font-weight:200');
				}
			},
			{
				icon: false,
				text: '300\xa0-\xa0Light',
				onclick: function () {
					setTag('font-weight:300');
				}
			},
			{
				icon: false,
				text: '400\xa0-\xa0Normal',
				onclick: function () {
					setTag('font-weight:400');
				}
			},
			{
				icon: false,
				text: '500\xa0-\xa0Medium',
				onclick: function () {
					setTag('font-weight:500');
				}
			},
			{
				icon: false,
				text: '600\xa0-\xa0Semi Bold',
				onclick: function () {
					setTag('font-weight:600');
				}
			},
			{
				icon: false,
				text: '700\xa0-\xa0Bold',
				onclick: function () {
					setTag('font-weight:700');
				}
			},
			{
				icon: false,
				text: '800\xa0-\xa0Xtra Bold',
				onclick: function () {
					setTag('font-weight:700');
				}
			},
			{
				icon: false,
				text: '900\xa0-\xa0Black',
				onclick: function () {
					setTag('font-weight:900');
				}
			}
		]
	});
});
/*
 * EOF: apply-text-weight / plugin.js / 29200901
 */
