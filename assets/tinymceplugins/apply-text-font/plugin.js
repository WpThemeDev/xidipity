/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_font', function(editor) {
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
					tagUPDATE = tagTARGET + ' class="' + argTAG + '"';
					htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
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
			htmlUPDATE = '<span class="' + argTAG + '">';
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
	editor.addButton('apply_txt_font', {
		type: 'splitbutton',
		title: 'Fonts',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+aWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQ8L3RpdGxlPgogIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogIDxnIGlkPSLwn5SNLVN5c3RlbS1JY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8ZyBpZD0iaWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgIDxwYXRoIGQ9Ik0xNC40MzgxLDUuODk2MDU5NzggQzE0LjgwNzE5LDUuODk2MjIxOTkgMTUuMTQyNDIyLDYuMDk5MTEwOCAxNS4zMTU4NTY1LDYuNDE3NjEwOSBMMTUuMzY3NSw2LjUyNzk0IEwyMC43MTA2LDIwLjAyMzQgTDIxLjAwODYsMjAuMDIzNCBDMjEuNTYwOSwyMC4wMjM0IDIyLjAwODYsMjAuNDcxMSAyMi4wMDg2LDIxLjAyMzQgQzIyLjAwODYsMjEuNTM2MjUgMjEuNjIyNTczLDIxLjk1OTAzODUgMjEuMTI1MjIzOSwyMi4wMTY4MjAzIEwyMS4wMDg2LDIyLjAyMzU1IEwxNy45OTk5LDIyLjAyMzMgQzE3LjQ0NzcsMjIuMDIzMyAxNywyMS41NzU2IDE3LDIxLjAyMzMgQzE3LDIwLjUxMDQ1IDE3LjM4NjAyNywyMC4wODc3OTA4IDE3Ljg4MzM3NjEsMjAuMDMwMDI3NSBMMTgsMjAuMDIzMyBMMTguNTU5NSwyMC4wMjMzIEwxNy43NTg0LDE3Ljk5OTkgTDExLjEwNTgsMTcuOTk5OSBMMTAuMzAyNiwyMC4wMjMzIEwxMSwyMC4wMjMzIEMxMS41NTIzLDIwLjAyMzMgMTIsMjAuNDcxIDEyLDIxLjAyMzMgQzEyLDIxLjUzNjE1IDExLjYxMzk3MywyMS45NTg4MDkyIDExLjExNjYyMzksMjIuMDE2NTcyNSBMMTEsMjIuMDIzMyBMOCwyMi4wMjMzIEM3LjQ0NzcyLDIyLjAyMzMgNywyMS41NzU2IDcsMjEuMDIzMyBDNywyMC41MTA0NSA3LjM4NjAzNTY2LDIwLjA4Nzc5MDggNy44ODMzNzc5LDIwLjAzMDAyNzUgTDgsMjAuMDIzMyBMOC4xNTA4MSwyMC4wMjMzIEwxMy41MDgyLDYuNTI3MTEgQzEzLjY1OTUsNi4xNDYwMSAxNC4wMjgxLDUuODk1ODcgMTQuNDM4MSw1Ljg5NjA1OTc4IFogTTE0LjQzNjUsOS42MDk1IEwxMS44OTk3LDE1Ljk5OTkgTDE2Ljk2NjYsMTUuOTk5OSBMMTQuNDM2NSw5LjYwOTUgWiBNNy4wMDA1NywyIEM3LjQyMTA3LDIgNy43OTY2NCwyLjI2MzEgNy45NDAzMywyLjY1ODI5IEwxMC44MjIsMTAuNTgzOSBMOS43MTEyOCwxMy4zODIgTDkuMjA4OCwxMiBMNC43OTE0NywxMiBMMy45Mzk4MSwxNC4zNDE4IEMzLjc1MTA1LDE0Ljg2MDggMy4xNzcyNywxNS4xMjg1IDIuNjU4MjUsMTQuOTM5OCBDMi4xMzkyMiwxNC43NTEgMS44NzE0OSwxNC4xNzcyIDIuMDYwMjUsMTMuNjU4MiBMNi4wNjA3NSwyLjY1ODIyIEM2LjIwNDQ3LDIuMjYzMDQgNi41ODAwNiwyIDcuMDAwNTcsMiBaIE03LjAwMDQxLDUuOTI2MTggTDUuNTE4ODMsMTAgTDguNDgxNjIsMTAgTDcuMDAwNDEsNS45MjYxOCBaIiBpZD0i8J+OqC1Db2xvciIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+',
		onclick: function () {
			setTag('fnt:family-serif');
		},
		menu: [{
			icon: false,
			text: '•\xa0Sans',
			onclick: function() {
				setTag('fnt:family-sans');
			}
		}, {
			icon: false,
			text: '•\xa0Serif',
			onclick: function() {
				setTag('fnt:family-serif');
			}
		}, {
			icon: false,
			text: '•\xa0Mono',
			onclick: function() {
				setTag('fnt:family-mono');
			}
		}, {
			icon: false,
			text: '•\xa0Cursive',
			onclick: function() {
				setTag('fnt:family-cursive');
			}
		}, {
			icon: false,
			text: '•\xa0Condensed',
			onclick: function() {
				setTag('fnt:family-condensed');
			}
		}, {
			icon: false,
			text: '•\xa0Fantasy',
			onclick: function() {
				setTag('fnt:family-fantasy');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-font / plugin.js / 29200901
 */
