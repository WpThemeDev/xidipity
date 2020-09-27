/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-style plugin
 *
 * ###:  plugin.js
 * bld:  30201001
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('app_txt_style', function (editor) {
	'use strict';

	function getTxt() {
		// validate selected contents
		var textHTML = editor.selection.getContent({
			format: 'text'
		});
		if (textHTML == '') {
			alert('Source text NOT selected.');
			sessionStorage.setItem('srcOUTER','');
			sessionStorage.setItem('srcINNER','');
		} else {
			var mceNODE = editor.selection.getNode();
			var mceNAME = mceNODE.nodeName.toLowerCase();
			var innerNODE = clrMCE(mceNODE.innerHTML);
			// use parent if node is 1 of the following
			if (mceNAME.match(/i|u|s|sup|sub|kbd|em|strong/g) !== null) {
				var mcePARENT = mceNODE.parentNode;
				mceNODE = mcePARENT;
			}		
			var outerNODE = clrMCE(mceNODE.outerHTML);
			sessionStorage.setItem('srcOUTER',outerNODE);
			sessionStorage.setItem('srcINNER',innerNODE);
		}
		return;
	}

	function setTxt() {
		// validate selected contents
		var textHTML = editor.selection.getContent({
			format: 'text'
		});
		if (textHTML == '') {
			alert('Target text NOT selected.');
			sessionStorage.setItem('srcOUTER','');
			sessionStorage.setItem('srcINNER','');

		} else {
			var srcNODE = sessionStorage.getItem('srcOUTER');
			var srcTEXT = sessionStorage.getItem('srcINNER');
			var mceNODE = editor.selection.getNode();
			var mceNAME = mceNODE.nodeName.toLowerCase();
			// use parent if node is 1 of the following
			if (mceNAME.match(/i|u|s|sup|sub|kbd|em|strong/g) !== null) {
				var mcePARENT = mceNODE.parentNode;
				mceNODE = mcePARENT;
			}		
			var tarTEXT = clrMCE(mceNODE.innerHTML);
			var htmlUPDATE = srcNODE.replace(srcTEXT, tarTEXT);
			mceNODE.remove();
			editor.selection.setContent(htmlUPDATE);
			editor.undoManager.add();
			sessionStorage.setItem('srcOUTER','');
			sessionStorage.setItem('srcINNER','');
		}
		return;
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

	editor.addButton('app_txt_style', {
		title: 'Copy Text Style',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4IDRWM2MwLS41NS0uNDUtMS0xLTFINWMtLjU1IDAtMSAuNDUtMSAxdjRjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xVjZoMXY0SDl2MTFjMCAuNTUuNDUgMSAxIDFoMmMuNTUgMCAxLS40NSAxLTF2LTloOFY0aC0zeiIvPjwvc3ZnPg==',
		onclick: function () {
			if (sessionStorage.getItem('srcOUTER') == null) {
				sessionStorage.setItem('srcOUTER','');
				sessionStorage.setItem('srcINNER','');
			}
			if (sessionStorage.getItem('srcOUTER') == '') {
				getTxt();
			} else {
				setTxt();
			}
		}
	});
});

/*
 * EOF: apply-text-style / plugin.js / 30201001
 */
