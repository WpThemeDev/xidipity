/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-color plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_color', function (editor, url) {
	'use strict';
	// selection object
	var selectionObject = {
		html: '', // selection as html
		icon: function () {
			var htmlValue = '';
			if (!isEmpty(this.outerHtml)) {
				var regExp = new RegExp(/<i.*?class.*?i>|<span.*?"material-icons">.*?>|<img.*\/>/, 'is');
				if (!isEmpty(this.outerHtml.match(regExp))) {
					switch (true) {
						case (!isEmpty(this.outerHtml.match(/<img.*\/>/))):
							htmlValue = getRegExpValue(this.outerHtml, '\\[caption.*caption\\]', 'is');
							if (isEmpty(htmlValue)) {
								htmlValue = getRegExpValue(this.outerHtml, '<img.*\/>', 'is');
							}
							break;
						case (!isEmpty(this.outerHtml.match(/"material-icons"/))):
							htmlValue = getRegExpValue(this.outerHtml, '<span.*"material-icons".*span>', 'is');
							break;
						default:
							htmlValue = getRegExpValue(this.outerHtml, '<span.*?><i.*?><\/span>|<i.*?i>', 'is');
					}
				}
			}
			return htmlValue;
		}, // icon tag
		innerHtml: '', // expanded selection as html
		innerText: '', // expanded selection as text
		innerTextKey: function () {
			var htmlValue = this.innerText;
			if (!isEmpty(htmlValue)) {
				var whiteSpace = new RegExp(/\s/, 'g');
				htmlValue = this.innerText.replace(whiteSpace, '')
			}
			return htmlValue;
		}, // inner text without whitespace
		node: undefined, //	node object
		parentNode: undefined, //	node object
		nodeName: '', // node name
		parentNodeName: '', // node name
		outerHtml: '', // full selection will tags as html
		prefixTag: function () {
			var htmlValue = '';
			if (!isEmpty(this.purgeOuterHtml())) {
				htmlValue = getRegExpValue(this.purgeOuterHtml(), '^<(p|h[1-6]|div|li|span).*?>|^<(em|i|kbd|s|strong|sub|sup|u)>').replace(/\sdata-mce-style.+"/, '');
			}
			return htmlValue;
		}, // prefix tag with any classes/styles
		suffixTag: function () {
			var htmlValue = '';
			if (!isEmpty(this.purgeOuterHtml())) {
				htmlValue = getRegExpValue(this.purgeOuterHtml(), '<\/(p|h[1-6]|div|li|span|em|i|kbd|s|strong|sub|sup|u)>$');
			}
			return htmlValue;
		}, // suffix tag
		text: '', // selection as plain text
		textKey: function () {
			var htmlValue = this.text;
			if (!isEmpty(htmlValue)) {
				var whiteSpace = new RegExp(/\s/, 'g');
				htmlValue = this.text.replace(whiteSpace, '')
			}
			return htmlValue;
		}, // text without whitespace
		purgeInnerHtml: function () {
			var htmlValue = this.innerHtml;
			if (!isEmpty(htmlValue)) {
				var mceCodeExp = new RegExp(/\sdata-mce-style.+"/, 'ig');
				var tmpValue = htmlValue.replace(mceCodeExp, '');
				htmlValue = tmpValue;
			}
			return htmlValue;
		},
		purgeOuterHtml: function () {
			var htmlValue = this.outerHtml;
			if (!isEmpty(htmlValue)) {
				var mceCodeExp = new RegExp(/\sdata-mce-style.+"/, 'ig');
				var tmpValue = htmlValue.replace(mceCodeExp, '');
				htmlValue = tmpValue;
			}
			return htmlValue;
		}
	};
	function setStyle(argTag) {
		if (argTag === undefined || argTag === null) {
			argTag = '';
		}
		// selection object
		var selObj = Object.create(selectionObject);
		// selection html node
		selObj.node = editor.selection.getNode();
		// get selection node name
		selObj.nodeName = selObj.node.nodeName.toLowerCase();
		// selection content
		selObj.text = editor.selection.getContent({
			format: 'text'
		});
		selObj.html = editor.selection.getContent({
			format: 'html'
		});
		var isMultiLine = true;
		if (selObj.nodeName !== 'body') {
			selObj.innerHtml = selObj.node.innerHTML;
			selObj.innerText = getRawHtml(selObj.innerHtml);
			selObj.outerHtml = editor.dom.getOuterHTML(selObj.node);
			// count end tags of p,h?,div
			isMultiLine = (!selObj.purgeOuterHtml().match(/<\/h[1-6]|\/p>|\/div|\/li>/gi) ? 0 : selObj.purgeOuterHtml().match(/<\/h[1-6]|\/p>|\/div|\/li>/gi).length) > 1;
		}
		var coreTagsExp = new RegExp(/div|h[1-6]|li|p|td/, 'is');
		var newHtml;
		var newTag;
		var preTag;
		var pstTag;
		switch (true) {
			case (isMultiLine):
				//alert('* mark #1 *');
				var crCharExp = new RegExp(/(\r\n|\n|\r)/, 'gm');
				var tagListExp = new RegExp(/(<\/(div|h[1-6]|li|p)>)(<(div|h[1-6]|li|p).*?>)/, 'gm');
				// strip cr/lf
				var tmpValue = selObj.html.replace(crCharExp, '');
				// remove ol/ul
				if (!isEmpty(selObj.nodeName.match(/ol|ul/))) {
					var noHeaders = tmpValue.replace(/^<(ol|ul)>/, '').replace(/<\/(ol|ul)>$/, '');
					tmpValue = noHeaders;
				}
				// delimited ',' string
				var delimitedList = tmpValue.replace(tagListExp, '$1,$3');
				// create array from delimited string
				var selectArray = delimitedList.split(',');
				var lastRecord = getLastArrayValue(selectArray);
				var idxObj;
				var idx = 0;
				newHtml = '';
				// loop through array
				for (; selectArray[idx];) {
					// if > good array values, exit
					if (idx > lastRecord) {
						newHtml += '<p>&nbsp;</p>';
						break;
					}
					// save array item to selection object
					idxObj = textToObj(selectArray[idx]);
					newTag = getNewTag(idxObj.prefixTag(), argTag);
					preTag = getRegExpValue(selectArray[idx], '^<(div|h[1-6]|li|p).*?>', 'is');
					pstTag = getRegExpValue(selectArray[idx], '<\/(div|h[1-6]|li|p)>$', 'is');
					newHtml += preTag + idxObj.purgeOuterHtml().replace(idxObj.prefixTag(), newTag) + pstTag;
					// release object
					idxObj = undefined;
					// increment counter
					idx++;
				}
				break;
			case (selObj.nodeName == 'span'):
				//alert('* mark #2 *');
				// lessor tags (ie. <u>)
				newTag = getNewTag(selObj.prefixTag(), argTag);
				newHtml = selObj.purgeOuterHtml().replace(selObj.prefixTag(), newTag);
				break;
			case (isEmpty(selObj.nodeName.match(coreTagsExp))):
				//alert('* mark #3 *');
				// lessor tags (ie. <u>)
				var rollbackHtml = editor.dom.getOuterHTML(selObj.node);
				selObj.parentNode = editor.dom.getParent(selObj.node, 'div,h1,h2,h3,h4,h5,h6,li,p,span');
				selObj.parentNodeName = selObj.parentNode.nodeName.toLowerCase();
				selObj.outerHtml = editor.dom.getOuterHTML(selObj.parentNode);
				var pairedTags = getRegExpValue(selObj.purgeOuterHtml(), '<span.*?><\\b(em|i|kbd|s|strong|sub|sup|u)\\b>', 'is');
				if (isEmpty(pairedTags)) {
					//alert('* mark #3.1 *');
					selObj.parentNode = undefined;
					selObj.parentNodeName = '';
					selObj.outerHtml = '<span>' + rollbackHtml + '</span>';
				}
				newTag = getNewTag(selObj.prefixTag(), argTag);
				newHtml = selObj.purgeOuterHtml().replace(selObj.prefixTag(), newTag);
				break;
			default:
				//alert('* default #1 *');
				// create new span
				if (selObj.textKey() !== selObj.innerTextKey() || !isEmpty(selObj.nodeName.match(/li|td/gi))) {
					//alert('* default #1.1 *');
					newHtml = '<span style="' + argTag + '">' + selObj.html + '</span>';
				} else {
					//alert('* default #1.2 *');
					var sourceText = selObj.purgeOuterHtml();
					preTag = getRegExpValue(sourceText, '^<(div|h[1-6]|li|p).*?>', 'is');
					pstTag = getRegExpValue(sourceText, '<\/(div|h[1-6]|li|p)>$', 'is');
					if (isEmpty(preTag)) {
						selObj.outerHtml = '<span>' + sourceText + '</span>';						
					} else {
						selObj.outerHtml = '<span>' + selObj.purgeInnerHtml() + '</span>';						
					}
					newTag = getNewTag(selObj.prefixTag(), argTag);
					newHtml = preTag + selObj.purgeOuterHtml().replace(selObj.prefixTag(), newTag) + pstTag;					
				}
		}
		if (!isEmpty(newHtml)) {
			editor.selection.setContent(newHtml);
			editor.focus();
			editor.undoManager.add();				
		}
		return;
	}
	// move html to selection object
	function textToObj(argText) {
		if (argText === undefined || argText === null) {
			argText = '';
		}
		var textObj = Object.create(selectionObject);
		if (!isEmpty(argText)) {
			textObj.text = getRawHtml(argText);
			textObj.innerText = textObj.text;
			textObj.html = argText.replace(/^<(div|h[1-6]|li|p).*?>/, '').replace(/<\/(div|h[1-6]|li|p)>$/, '');
			textObj.innerHtml = textObj.html;
			var prePair = getRegExpValue(argText, '^<(div|h[1-6]|li|p).*?><(span)', 'is', 2);
			var pstPair = getRegExpValue(argText, '<\/(span)><\/(div|h[1-6]|li|p)>$', 'is', 1);
			if (prePair == 'span' && pstPair == 'span') {
				// save exiting span
				textObj.nodeName = 'span';
				textObj.outerHtml = getRegExpValue(argText, '>(<span.+span>)<', 'is', 1);
			} else {
				// create new span
				textObj.nodeName = getRegExpValue(argText, '^<(div|h[1-6]|li|p).*?>', 'is', 1);
				textObj.outerHtml = '<span>' + textObj.html + '</span>';
			}
		}
		return textObj;
	}
	// build new tags
	function getNewTag(argHtml, argTag) {
		// argHtml = source html
		// argTag = target html
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		if (argTag === undefined || argTag === null) {
			argTag = '';
		}
		var htmlValue = '';
		var keyValue;
		var oldTag;
		var preTidy;
		var pstTidy;
		var tagId;
		switch (true) {
			case (isEmpty(argHtml) || isEmpty(argTag)):
				tagId = '';
				break;
			case (!isEmpty(argTag.match(/;/))):
				tagId = 'style';
				break;
			default:
				tagId = 'class';
		}
		switch (tagId) {
			case ('class'):
				keyValue = getRegExpValue(argTag, '^(.*?)(-|\\+)', 'is', 1);
				switch (true) {
					case (!isEmpty(argHtml.match(keyValue))):
						oldTag = getRegExpValue(argHtml, '(' + keyValue + '.*?)(\\s|")', 'is', 1);
						preTidy = getRegExpValue(argHtml, 'class.+"(.*?)"', 'is', 1);
						pstTidy = tidyElements(preTidy.replace(oldTag, argTag));
						htmlValue = tidyTag(argHtml.replace(preTidy, pstTidy));
						break;
					case (!isEmpty(argHtml.match(/class/))):
						preTidy = getRegExpValue(argHtml, 'class.+"(.+)"', 'is', 1);
						pstTidy = tidyElements(preTidy + ' ' + argTag);
						htmlValue = tidyTag(argHtml.replace(preTidy, pstTidy));
						break;
					default:
						htmlValue = tidyTag(argHtml.replace(/>$/, ' class="') + argTag + '">');
				}
				break;
			case ('style'):
				keyValue = getRegExpValue(argTag, '^(.*?)\\s', 'is', 1);
				switch (true) {
					case (!isEmpty(argHtml.match(keyValue))):
						oldTag = getRegExpValue(argHtml, keyValue + '.*?;', 'is');
						preTidy = getRegExpValue(argHtml, 'style.+"(.*?)"', 'is', 1);
						pstTidy = tidyElements(preTidy.replace(oldTag, argTag));
						htmlValue = tidyTag(argHtml.replace(preTidy, pstTidy));
						break;
					case (!isEmpty(argHtml.match(/style/))):
						preTidy = getRegExpValue(argHtml, 'style.*?"(.*?)"', 'is', 1);
						pstTidy = tidyElements(preTidy + ' ' + argTag);
						htmlValue = tidyTag(argHtml.replace(preTidy, pstTidy));
						break;
					default:
						htmlValue = tidyTag(argHtml.replace(/>$/, ' style="') + argTag + '">');
				}
		}
		return htmlValue;
	}
	// display message
	function displayMessage(argMessage) {
		// argMessage = message
		if (argMessage === undefined || argMessage === null) {
			argMessage = '';
		}
		if (!isEmpty(argMessage)) {
			alert(argMessage);
		}
		return;
	}
	// get regular expression value
	function getRegExpValue(argValue, argRegExp, argRegExpScope, argIdx) {
		// argValue = value to evaluate
		// argRegExp = regular expression
		// argRegExpScope = regular expression scope
		// argIdx = match array index
		if (argValue === undefined || argValue === null) {
			argValue = '';
		}
		if (argRegExp === undefined || argRegExp === null) {
			argRegExp = '';
		}
		if (argRegExpScope === undefined || argRegExpScope === null) {
			argRegExpScope = 'g';
		}
		if (argIdx === undefined || argIdx === null) {
			argIdx = 0;
		}
		var htmlValue = '';
		if (!isEmpty(argValue) && !isEmpty(argRegExp)) {
			if (isEmpty(argRegExpScope.match(/g|m|i|x|X|s|u|U|A|j|D/g))) {
				argRegExpScope = 'g';
			}
			var regExp = new RegExp(argRegExp, argRegExpScope);
			if (!isEmpty(argValue.match(regExp))) {
				htmlValue = argValue.match(regExp)[argIdx];
			}
		}
		return htmlValue;
	}
	// return icon element
	function getIcon(argHtml) {
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		var htmlValue = '';
		if (!isEmpty(argHtml)) {
			var regExp = new RegExp(/<i.*?class.*?i>|<span.*?"material-icons">.*?>|<img.*\/>/, 'is');
			if (!isEmpty(argHtml.match(regExp))) {
				switch (true) {
					case (!isEmpty(argHtml.match(/<img.*\/>/))):
						htmlValue = getRegExpValue(argHtml, '\\[caption.*caption\\]', 'is');
						if (isEmpty(htmlValue)) {
							htmlValue = getRegExpValue(argHtml, '<img.*\/>', 'is');
						}
						break;
					case (!isEmpty(argHtml.match(/"material-icons"/))):
						htmlValue = getRegExpValue(argHtml, '<span.*"material-icons".*span>', 'is');
						break;
					default:
						htmlValue = getRegExpValue(argHtml, '<span.*?><i.*?><\/span>|<i.*?i>', 'is');
				}
			}
			return htmlValue;
		}
	}
	function validContent(argHtml) {
		// argHtml = HTML to validate
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		var htmlDIV = document.createElement('htmlDIV');
		htmlDIV.innerHTML = argHtml;
		// strip html to see what's left
		var htmlVAL = htmlDIV.textContent || htmlDIV.innerText || '';
		return (htmlVAL.length > 0);
	}
	function tidyTag(argTag) {
		// argTag = elements to order
		if (argTag === undefined || argTag === null) {
			argTag = '';
		}
		var htmlVAL = argTag;
		if (!isEmpty(argTag)) {
			var currentTag = argTag.match(/\s.*"/)[0].replace(/^\s/, '');
			var tagDELIM = currentTag.replace(/"\s/, '",');
			var arrTAG = tagDELIM.split(',');
			arrTAG.sort();
			var newTag = (arrTAG.join(' '));
			htmlVAL = argTag.replace(currentTag, newTag);
		}
		// return html
		return htmlVAL;
	}
	// organize class/style elements
	function tidyElements(argElements) {
		// argElements = html to tidy
		if (argElements === undefined || argElements === null) {
			argElements = '';
		}
		var tagId;
		var htmlValue = '';
		switch (true) {
			case (isEmpty(argElements)):
				tagId = '';
				break;
			case (!isEmpty(argElements.match(/;/))):
				tagId = 'style';
				break;
			default:
				tagId = 'class';
		}
		if (!isEmpty(argElements)) {
			var tidyArray;
			switch (tagId) {
				case ('class'):
					tidyArray = argElements.split(' ');
					break;
				case ('style'):
					tidyArray = argElements.replace(/;\s/, ';,').split(',');
					break;
			}
			tidyArray.sort();
			var sortedItems = (tidyArray.join(' '));
			htmlValue = argElements.replace(argElements, sortedItems);
		}
		return htmlValue;
	}
	function getLastArrayValue(argArray) {
		if (argArray === undefined || argArray === null) {
			argArray = [''];
		}
		var idxItem;
		// 0 based
		var idx = argArray.length - 1;
		for (; argArray[idx];) {
			// save array item to var
			idxItem = argArray[idx];
			if (validContent(idxItem)) {
				break;
			} else {
				idx--;
			}
		}
		if (idx < 1) {
			idx = argArray.length - 1;
		}
		return idx;
	}
	function isEmpty(argSTR) {
		return (!argSTR || 0 === argSTR.length);
	}
	function isReady() {
		var blnVAL = true;
		var selTXT = editor.selection.getContent({
			format: 'text'
		});
		if (isEmpty(selTXT)) {
			displayMessage('SYSTEM MESSAGE\nInvalid or missing text selection.');
			blnVAL = false;
		}
		return blnVAL;
	}
	// strip html
	function getRawHtml(argHtml) {
		// argHtml = HTML to process
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		var htmlValue = '';
		if (!isEmpty(argHtml)) {
			var iconTag = getIcon(argHtml);
			if (!isEmpty(iconTag)) {
				var tmpValue = argHtml.replace(iconTag, '');
				argHtml = tmpValue;
			}
			var htmlDIV = document.createElement('htmlDIV');
			htmlDIV.innerHTML = argHtml;
			htmlValue = htmlDIV.textContent || htmlDIV.innerText || '';
		}
		return htmlValue;
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
							setStyle('background-color: ' + hexCODE + ';');
						} else {
							setStyle('color: ' + hexCODE + ';');
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
 * EOF: apply-text-color / plugin.js / 30201101
 */
