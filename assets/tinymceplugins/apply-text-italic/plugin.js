/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-italic plugin 
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_italic', function(editor) {
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
			if (argTAG.match(/~/g) !== null) {
				htmlUPDATE = htmlNODE.substring(0,htmlNODE.indexOf('>')+1);
				htmlUPDATE += argTAG.substring(0,argTAG.indexOf('~'));
				htmlUPDATE += textHTML; // include any embeded html
				htmlUPDATE += argTAG.substring(argTAG.indexOf('~')+1);
				htmlUPDATE += htmlNODE.substring(htmlNODE.lastIndexOf('<'));

			} else {
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
	editor.addButton('apply_txt_italic', {
		type: 'splitbutton',
		title: 'Italic',
		shortcut: 'Ctr+I',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6Ii8+PC9zdmc+',
		onclick: function() {
			setTag('<i>~</i>');
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDR2M2gyLjIxbC0zLjQyIDhINnYzaDh2LTNoLTIuMjFsMy40Mi04SDE4VjR6Ii8+PC9zdmc+',
			text: '\xa0Italic',
			onclick: function() {
				setTag('<i>~</i>');
			}
		}, {
			icon: true,
			text: '\xa0Emphasis',
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjYgMTAuNzljLjk3LS42NyAxLjY1LTEuNzcgMS42NS0yLjc5IDAtMi4yNi0xLjc1LTQtNC00SDd2MTRoNy4wNGMyLjA5IDAgMy43MS0xLjcgMy43MS0zLjc5IDAtMS41Mi0uODYtMi44Mi0yLjE1LTMuNDJ6TTEwIDYuNWgzYy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTN2LTN6bTMuNSA5SDEwdi0zaDMuNWMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41eiIvPjwvc3ZnPg==',
			onclick: function() {
				setTag('<em>~</em>');

			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUgMTd2MmgxNHYtMkg1em00LjUtNC4yaDVsLjkgMi4yaDIuMUwxMi43NSA0aC0xLjVMNi41IDE1aDIuMWwuOS0yLjJ6TTEyIDUuOThMMTMuODcgMTFoLTMuNzRMMTIgNS45OHoiLz48L3N2Zz4=',
			text: '\xa0Strong',
			onclick: function() {
				setTag('<strong>~</strong>');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-italic / plugin.js / 29200901
 */
