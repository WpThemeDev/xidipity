/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-alignment plugin
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_align', function(editor) {
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
					if (nodeTARGET.match(/margin-left:/g) == null) {
						switch (true) {
							case (nodeTARGET.match(/style/g) !== null):
								tagTARGET = getTag(nodeTARGET, 'style');
								tagUPDATE = tagTARGET.slice(0, -1) + ' margin-left:2rem;"';
								htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
								break;
							case (nodeTARGET.match(/class/g) !== null):
								tagTARGET = getTag(nodeTARGET, 'class');
								tagUPDATE = tagTARGET + ' style="margin-left:2rem;"';
								htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
								break;
							default:
								tagTARGET = nodeTARGET.substring(0, nodeTARGET.indexOf('>') + 1);
								tagUPDATE = tagTARGET.slice(0, -1) + ' style="margin-left:2rem;">';
								htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
						}						
					} else {
						tagTARGET = nodeTARGET.substring(nodeTARGET.indexOf('margin-left:'),nodeTARGET.indexOf('rem',idxLT)+3);
						var idxLT = tagTARGET.indexOf('margin-left:')+12;
						var idxRT = tagTARGET.indexOf('rem',idxLT);
						var numTARGET = tagTARGET.substring(idxLT,idxRT);
						var numUPDATE = Number(tagTARGET.substring(idxLT,idxRT))+2;
						tagUPDATE = tagTARGET.replace(numTARGET,numUPDATE.toString())
						htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
					}
					break;
				case (nodeTARGET.match(/class/g) !== null):
					tagTARGET = getTag(nodeTARGET, 'class');
					tagUPDATE = tagTARGET.slice(0, -1) + ' ' + argTAG + '"';
					htmlUPDATE = htmlNODE.replace(tagTARGET, tagUPDATE);
					break;
				default:
					tagTARGET = nodeTARGET.substring(0, nodeTARGET.indexOf('>') + 1);
					tagUPDATE = tagTARGET.slice(0, -1) + ' class="' + argTAG + '">';
					var htmlTEMP = htmlNODE.replace(tagTARGET, tagUPDATE);
					htmlUPDATE = htmlTEMP;
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
	editor.addButton('apply_txt_align', {
		type: 'splitbutton',
		title: 'Align Text',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMTV2MmgxMHYtMkg3em0tNCA2aDE4di0ySDN2MnptMC04aDE4di0ySDN2MnptNC02djJoMTBWN0g3ek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
		onclick: function () {
			setTag('aln:txt-ct');
		},
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1IDE1SDN2MmgxMnYtMnptMC04SDN2MmgxMlY3ek0zIDEzaDE4di0ySDN2MnptMCA4aDE4di0ySDN2MnpNMyAzdjJoMThWM0gzeiIvPjwvc3ZnPg==',
			text: '\xa0Align left',
			onclick: function() {
				setTag('aln:txt-lt');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMTV2MmgxMHYtMkg3em0tNCA2aDE4di0ySDN2MnptMC04aDE4di0ySDN2MnptNC02djJoMTBWN0g3ek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align Center',
			onclick: function() {
				setTag('aln:txt-ct');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMjFoMTh2LTJIM3Yyem02LTRoMTJ2LTJIOXYyem0tNi00aDE4di0ySDN2MnptNi00aDEyVjdIOXYyek0zIDN2MmgxOFYzSDN6Ii8+PC9zdmc+',
			text: '\xa0Align Right',
			onclick: function() {
				setTag('aln:txt-rt');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMjFoMTh2LTJIM3Yyem0wLTRoMTh2LTJIM3Yyem0wLTRoMTh2LTJIM3Yyem0wLTRoMThWN0gzdjJ6bTAtNnYyaDE4VjNIM3oiLz48L3N2Zz4=',
			text: '\xa0Justify',
			onclick: function() {
				setTag('aln:txt-jt');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSAxMCAxMy41IEwgMTAgMTguNSBMIDEyIDE4LjUgTCAxMiA3LjUgTCAxNCA3LjUgTCAxNCAxOC41IEwgMTYgMTguNSBMIDE2IDcuNSBMIDE4IDcuNSBMIDE4IDUuNSBMIDEwIDUuNSBDIDcuNzkgNS41IDYgNy4yOSA2IDkuNSBDIDYgMTEuNzEgNy43OSAxMy41IDEwIDEzLjUgWiIvPgo8L3N2Zz4=',
			text: '\xa0Indent',
			onclick: function() {
				setTag('<p>~</p>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTB2NWgyVjRoMnYxMWgyVjRoMlYySDlDNi43OSAyIDUgMy43OSA1IDZzMS43OSA0IDQgNHptMTIgOGwtNC00djNINXYyaDEydjNsNC00eiIvPjwvc3ZnPg==',
			text: '\xa0Hanging Indent',
			onclick: function() {
				setTag('idt:hang');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDEwdjVoMlY0aDJ2MTFoMlY0aDJWMmgtOEM3Ljc5IDIgNiAzLjc5IDYgNnMxLjc5IDQgNCA0em0tMiA3di0zbC00IDQgNCA0di0zaDEydi0ySDh6Ii8+PC9zdmc+',
			text: '\xa0Paragraph Indent',
			onclick: function() {
				setTag('idt:para');
			}
		}],
	});
});

/*
 * EOF: apply-text-alignment / plugin.js / 29200901
 */
