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

	function mnu_itm(num) {
		var mceNODE = editor.selection.getNode();
		var mceCONTENT = editor.selection.getContent({
			format: 'text'
		});
		var eIDX = 0;		//ending index
		var sIDX = 0;		//starting index
		var qFLAG = false;	//quote flag
		var curCLASS = '';	//current class
		var newCLASS = '';	//new class
		var curSTYLE = '';	//current style
		var newSTYLE = '';	//new style
		var curTAGs = '';	//current tags
		var newTAGs = '';	//new tags
		var oHTML = '';		//outerHTML
		switch (num) {
			case 1:
				newTAGs = '<u>';
				newTAGs += mceCONTENT;
				newTAGs += '</u>';
				editor.selection.setContent(newTAGs);
				editor.undoManager.add();
				break;
			case 2:
				newTAGs = '<s>';
				newTAGs += mceCONTENT;
				newTAGs += '</s>';
				editor.selection.setContent(newTAGs);
				editor.undoManager.add();
				break;
			case 3:
				newTAGs = '<sup>';
				newTAGs += mceCONTENT;
				newTAGs += '</sup>';
				editor.selection.setContent(newTAGs);
				editor.undoManager.add();
				break;
			case 4:
				newTAGs = '<sub>';
				newTAGs += mceCONTENT;
				newTAGs += '</sub>';
				editor.selection.setContent(newTAGs);
				editor.undoManager.add();
				break;
			case 5:
				// html
				oHTML = mceNODE.outerHTML;
				// is everything within the node selected
				if (mceCONTENT == mceNODE.innerHTML) {
					curTAGs = oHTML.substring(0, oHTML.indexOf('>') + 1);
					if (curTAGs.match(/class/g) !== null) {
						sIDX = curTAGs.indexOf('class');
						qFLAG = false;
						for (eIDX = sIDX; eIDX < curTAGs.length; eIDX++) {
							if (curTAGs.substring(eIDX, eIDX + 1) == '"') {
								if (qFLAG) {
									break;
								} else {
									qFLAG = true;
								}
							}
						}
						curCLASS = curTAGs.substring(sIDX, eIDX+1);
						newCLASS = curCLASS.slice(0,-1) + ' fnt:caps-small"';
						newTAGs = oHTML.replace(curCLASS, newCLASS);
					} else if (curTAGs.match(/style/g) !== null) {
						sIDX = curTAGs.indexOf('style');
						qFLAG = false;
						for (eIDX = sIDX; eIDX < curTAGs.length; eIDX++) {
							if (curTAGs.substring(eIDX, eIDX + 1) == '"') {
								if (qFLAG) {
									break;
								} else {
									qFLAG = true;
								}
							}
						}
						curSTYLE = curTAGs.substring(sIDX, eIDX-1);
						newSTYLE = ' fnt:caps-small" ' + curSTYLE;
						newTAGs = oHTML.replace(curSTYLE, newSTYLE);
					} else {
						newTAGs = curTAGs.slice(0, -1);
						newTAGs += ' class="fnt:caps-small">';
						newTAGs += mceCONTENT;
						newTAGs += oHTML.substring(oHTML.lastIndexOf('<'));
					}
					mceNODE.remove();
				} else {
					newTAGs += '<span class="fnt:caps-small">';
					newTAGs += mceCONTENT;
					newTAGs += '</span>';
				}
				editor.selection.setContent(newTAGs);
				editor.undoManager.add();
				break;
			case 6:
				newTAGs = '<kbd>';
				newTAGs += mceCONTENT;
				newTAGs += '</kbd>';
				editor.selection.setContent(newTAGs);
				editor.undoManager.add();
				break;
			case 7:
				// html
				oHTML = mceNODE.outerHTML;
				// is everything within the node selected
				if (mceCONTENT == mceNODE.innerHTML) {
					curTAGs = oHTML.substring(0, oHTML.indexOf('>') + 1);
					if (curTAGs.match(/class/g) !== null) {
						sIDX = curTAGs.indexOf('class');
						qFLAG = false;
						for (eIDX = sIDX; eIDX < curTAGs.length; eIDX++) {
							if (curTAGs.substring(eIDX, eIDX + 1) == '"') {
								if (qFLAG) {
									break;
								} else {
									qFLAG = true;
								}
							}
						}
						curCLASS = curTAGs.substring(sIDX, eIDX+1);
						newCLASS = curCLASS.slice(0,-1) + ' fnt:shadow-medium"';
						newTAGs = oHTML.replace(curCLASS, newCLASS);
					} else if (curTAGs.match(/style/g) !== null) {
						sIDX = curTAGs.indexOf('style');
						qFLAG = false;
						for (eIDX = sIDX; eIDX < curTAGs.length; eIDX++) {
							if (curTAGs.substring(eIDX, eIDX + 1) == '"') {
								if (qFLAG) {
									break;
								} else {
									qFLAG = true;
								}
							}
						}
						curSTYLE = curTAGs.substring(sIDX, eIDX-1);
						newSTYLE = ' fnt:shadow-medium" ' + curSTYLE;
						newTAGs = oHTML.replace(curSTYLE, newSTYLE);
					} else {
						newTAGs = curTAGs.slice(0, -1);
						newTAGs += ' class="fnt:shadow-medium">';
						newTAGs += mceCONTENT;
						newTAGs += oHTML.substring(oHTML.lastIndexOf('<'));
					}
					mceNODE.remove();
				} else {
					newTAGs += '<span class="fnt:shadow-medium">';
					newTAGs += mceCONTENT;
					newTAGs += '</span>';
				}
				editor.selection.setContent(newTAGs);
				editor.undoManager.add();
		}
	}
	editor.addButton('apply_txt_formats', {
		type: 'splitbutton',
		title: 'Text Formats',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
		onclick: function () {
			mnu_itm(1);
		},
		menu: [{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
				text: '\xa0Underline',
				onclick: function () {
					mnu_itm(1);
				},
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDE5aDR2LTNoLTR2M3pNNSA0djNoNXYzaDRWN2g1VjRINXpNMyAxNGgxOHYtMkgzdjJ6Ii8+PC9zdmc+',
				text: '\xa0Strike through',
				onclick: function () {
					mnu_itm(2);

				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiB4PSIwIiB5PSIwIi8+PHBhdGggZD0iTTIyLDdoLTJ2MWgzdjFoLTRWN2MwLTAuNTUsMC40NS0xLDEtMWgyVjVoLTNWNGgzYzAuNTUsMCwxLDAuNDUsMSwxdjFDMjMsNi41NSwyMi41NSw3LDIyLDd6IE01Ljg4LDIwaDIuNjZsMy40LTUuNDJoMC4xMiBsMy40LDUuNDJoMi42NmwtNC42NS03LjI3TDE3LjgxLDZoLTIuNjhsLTMuMDcsNC45OWgtMC4xMkw4Ljg1LDZINi4xOWw0LjMyLDYuNzNMNS44OCwyMHoiLz48L2c+PC9zdmc+',
				text: '\xa0Super script',
				onclick: function () {
					mnu_itm(3);
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBhdGggZD0iTTIyLDE4aC0ydjFoM3YxaC00di0yYzAtMC41NSwwLjQ1LTEsMS0xaDJ2LTFoLTN2LTFoM2MwLjU1LDAsMSwwLjQ1LDEsMXYxQzIzLDE3LjU1LDIyLjU1LDE4LDIyLDE4eiBNNS44OCwxOGgyLjY2IGwzLjQtNS40MmgwLjEybDMuNCw1LjQyaDIuNjZsLTQuNjUtNy4yN0wxNy44MSw0aC0yLjY4bC0zLjA3LDQuOTloLTAuMTJMOC44NSw0SDYuMTlsNC4zMiw2LjczTDUuODgsMTh6Ii8+PC9nPjwvc3ZnPg==',
				text: '\xa0Sub script',
				onclick: function () {
					mnu_itm(4);
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxnPjxwYXRoIGQ9Ik0yLjUsNHYzaDV2MTJoM1Y3aDVWNEgyLjV6IE0yMS41LDloLTl2M2gzdjdoM3YtN2gzVjl6Ii8+PC9nPjwvZz48L2c+PC9zdmc+',
				text: '\xa0Small Caps',
				onclick: function () {
					//editor.execCommand('mceReplaceContent', false, '<span class="fnt:caps-small">{$selection}</span>');
					mnu_itm(5);
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDd2NEg1LjgzbDMuNTgtMy41OUw4IDZsLTYgNiA2IDYgMS40MS0xLjQxTDUuODMgMTNIMjFWN3oiLz48L3N2Zz4=',
				text: '\xa0Keyboard',
				onclick: function () {
					mnu_itm(6);
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxwYXRoIGQ9Ik0yMCw2djE0SDZ2MmgxNGMxLjEsMCwyLTAuOSwyLTJWNkgyMHoiLz48cGF0aCBkPSJNMTYsMkg0QzIuOSwyLDIsMi45LDIsNHYxMmMwLDEuMSwwLjksMiwyLDJoMTJjMS4xLDAsMi0wLjksMi0yVjRDMTgsMi45LDE3LjEsMiwxNiwyeiBNOSwxNkg0di01aDVWMTZ6IE0xNiwxNmgtNXYtNWg1IFYxNnogTTE2LDlINFY0aDEyVjl6Ii8+PC9nPjwvZz48L3N2Zz4=',
				text: '\xa0Drop Shadow',
				onclick: function () {
					//editor.execCommand('mceReplaceContent', false, '<span class="fnt:shadow-medium">{$selection}</span>');
					mnu_itm(7);
				}
},
],
	});
});

/*
 * EOF: apply-text-format / plugin.js / 29200901
 */
