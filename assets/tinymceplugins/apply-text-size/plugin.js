/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-size plugin
 *
 * ###:  plugin.js
 * bld:  29200901
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_size', function(editor) {
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
	editor.addButton('apply_txt_size', {
		type: 'splitbutton',
		title: 'Text Size',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0gNi4wMzUgMTQgTCA4LjQzNSA3LjcgTCAxMC44MzUgMTQgTSA3LjQzNSA1IEwgMS45MzUgMTkgTCA0LjEzNSAxOSBMIDUuMjM1IDE2IEwgMTEuNDM1IDE2IEwgMTIuNTM1IDE5IEwgMTQuNzM1IDE5IEwgOS40MzUgNSBMIDcuNDM1IDUgWiIvPgogIDxwYXRoIGQ9Ik0gMTguNzUgNy41NDUgTCAyMS4wNCA5LjgzNSBMIDIyLjA1OSA4LjgxNSBMIDE4Ljc1IDUuNSBMIDE1LjQzNSA4LjgxNSBMIDE2LjQ2IDkuODM1IEwgMTguNzUgNy41NDUgWiBNIDE4Ljc1IDE2LjQ1NSBMIDE2LjQ2IDE0LjE2NSBMIDE1LjQ0MiAxNS4xODUgTCAxOC43NSAxOC41IEwgMjIuMDY1IDE1LjE4NSBMIDIxLjA0IDE0LjE2NSBMIDE4Ljc1IDE2LjQ1NSBaIi8+Cjwvc3ZnPg==',
		onclick: function () {
			setTag('fnt:siz+1');
		},
		menu: [{
			icon: false,
			text: '+\xa06',
			onclick: function() {
				setTag('fnt:siz-lg-5x');
			}
		}, {
			icon: false,
			text: '+\xa05',
			onclick: function() {
				setTag('fnt:siz-lg-4x');
			}
		}, {
			icon: false,
			text: '+\xa04',
			onclick: function() {
				setTag('fnt:siz-lg-3x');
			}
		}, {
			icon: false,
			text: '+\xa03',
			onclick: function() {
				setTag('fnt:siz-lg-2x');
			}
		}, {
			icon: false,
			text: '+\xa02',
			onclick: function() {
				setTag('fnt:siz-lg-1x');
			}
		}, {
			icon: false,
			text: '+\xa01',
			onclick: function() {
				setTag('fnt:siz-lg');
			}
		}, {
			icon: false,
			text: '+\xa0½',
			onclick: function() {
				setTag('fnt:siz-md-1x');
			}
		}, {
			icon: true,
			text: 'Default',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkuNiwxNEwxMiw3LjdMMTQuNCwxNE0xMSw1TDUuNSwxOUg3LjdMOC44LDE2SDE1TDE2LjEsMTlIMTguM0wxMyw1SDExWiIgLz48L3N2Zz4=',
			onclick: function() {
				setTag('fnt:siz-md');
			}
		}, {
			icon: false,
			text: '-\xa01',
			onclick: function() {
				setTag('fnt:siz-sm');
			}
		}, {
			icon: false,
			text: '-\xa02',
			onclick: function() {
				setTag('fnt:siz-sm-1x');
			}
		}, {
			icon: false,
			text: '-\xa03',
			onclick: function() {
				setTag('fnt:siz-sm-2x');
			}
		}, {
			icon: true,
			text: 'Larger',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsN0wxMywxMi4wN0wxNC40MSwxMy41TDE3LDEwLjlWMTdIMTlWMTAuOUwyMS41OSwxMy41TDIzLDEyLjA3TDE4LDdaIiAvPjwvc3ZnPg==',
			onclick: function() {
				setTag('fnt:siz+1');
			}
		}, {
			icon: true,
			text: 'Smaller',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsMTdMMjMsMTEuOTNMMjEuNTksMTAuNUwxOSwxMy4xVjdIMTdWMTMuMUwxNC40MSwxMC41TDEzLDExLjkzTDE4LDE3WiIgLz48L3N2Zz4=',
			onclick: function() {
				setTag('fnt:siz-1');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-size / plugin.js / 29200901
 */
