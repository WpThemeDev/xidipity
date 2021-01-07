/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-format plugin
 *
 * ###:  plugin.js
 * bld:  31201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_formats', function (editor) {
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
	function setEmphasis(argTag) {
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
		var underlineTagExp = new RegExp(/<strong>/, 'ig');
		var strongTagExp = new RegExp(/(<strong>|<\/strong>)/, 'gi');
		var newHtml;
		var tagHtml;
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
				// new selection object
				var idxObj = Object.create(selectionObject);
				// create array from delimited string
				var selectArray = delimitedList.split(',');
				var lastRecord = getLastArrayValue(selectArray);
				var idx = 0;
				newHtml = '';
				for (;selectArray[idx];) {
					if (idx > lastRecord) {
						newHtml += '<p>&nbsp;</p>';
						break;
					}
					idxObj.outerHtml = selectArray[idx];
					if (!isEmpty(idxObj.purgeOuterHtml().match(/<strong>/g)) && argTag == 'u') {
						// if there are any strong tags, remove them
						tmpValue = idxObj.purgeOuterHtml().replace(strongTagExp,'');
					} else {
						tmpValue = idxObj.purgeOuterHtml();
					}
					newHtml += tmpValue.replace(idxObj.prefixTag(),idxObj.prefixTag() + '<' + argTag + '>').replace(idxObj.suffixTag(),'</' + argTag + '>' + idxObj.suffixTag());
					idx++;
				}
				break;
			case (!isEmpty(selObj.html.match(/<strong>/g)) && argTag == 'u'):
				//alert('* mark #2 *');
				// if there are any underline tags, remove them
				newHtml = '<' + argTag + '>' + selObj.html.replace(strongTagExp,'') + '</' + argTag + '>';
				break;
			default:
				//alert('* default *');
				newHtml = '<' + argTag + '>' + selObj.html + '</' + argTag + '>';
		}
		if (!isEmpty(newHtml)) {
			editor.selection.setContent(newHtml);
			editor.focus();
			editor.undoManager.add();				
		}
		return;
	}
	function setClass(argTag) {
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
				// new selection object
				var idxObj = Object.create(selectionObject);
				// create array from delimited string
				var selectArray = delimitedList.split(',');
				var lastRecord = getLastArrayValue(selectArray);
				var idx = 0;
				newHtml = '';
				// loop through array
				for (;selectArray[idx];) {
					// if > good array values, exit
					if (idx > lastRecord) {
						newHtml += '<p>&nbsp;</p>';
						break;
					}
					// save array item to object
					idxObj.outerHtml = selectArray[idx];
					newTag = getNewTag(idxObj.prefixTag(), argTag);
					tmpValue = idxObj.purgeOuterHtml().replace(idxObj.prefixTag(), newTag);
					newHtml += tmpValue;
					// increment counter
					idx++;
				}
				break;
			case (isEmpty(selObj.nodeName.match(coreTagsExp))):
				// lessor tags (ie. <u>)
				//alert('* mark #2 *');
				var rollbackHtml = editor.dom.getOuterHTML(selObj.node);
				selObj.parentNode = editor.dom.getParent(selObj.node, 'div,h1,h2,h3,h4,h5,h6,li,p,span');
				selObj.parentNodeName = selObj.parentNode.nodeName.toLowerCase();
				selObj.outerHtml = editor.dom.getOuterHTML(selObj.parentNode);
				var pairedTags = getRegExpValue(selObj.purgeOuterHtml(), '<span.*?><\\b(em|i|kbd|s|strong|sub|sup|u)\\b>', 'is');
				if (isEmpty(pairedTags)) {
					//alert('* mark #2.1 *');
					selObj.parentNode = undefined;
					selObj.parentNodeName = '';
					selObj.outerHtml = '<span>' + rollbackHtml + '</span>';
				}
				newTag = getNewTag(selObj.prefixTag(), argTag);
				newHtml = selObj.purgeOuterHtml().replace(selObj.prefixTag(), newTag);
				break;
			default:
				// core tags (ie. <p>)
				//alert('* default *');
				selObj.innerHtml = selObj.node.innerHTML;
				selObj.innerText = getRawHtml(selObj.innerHtml);
				selObj.outerHtml = editor.dom.getOuterHTML(selObj.node);
				if (selObj.textKey() !== selObj.innerTextKey() || !isEmpty(selObj.nodeName.match(/li|td/gi))) {
					//alert('** default.1 **');
					// fragment
					selObj.nodeName = 'span';
					selObj.outerHtml = '<span>' + selObj.html + '</span>';
				}
				newTag = getNewTag(selObj.prefixTag(), argTag);
				newHtml = selObj.purgeOuterHtml().replace(selObj.prefixTag(), newTag);
		}
		if (!isEmpty(newHtml)) {
			editor.selection.setContent(newHtml);
			editor.focus();
			editor.undoManager.add();				
		}
		return;
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
	// remove tag pair (ie. <i>)
	function xTags(argHtml, argTag) {
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		if (argTag === undefined || argTag === null) {
			argTag = '';
		}
		var htmlValue = argHtml;
		if (!isEmpty(argHtml) && !isEmpty(argTag)) {
			var preTagExp = new RegExp('<' + argTag + '>', 'ig');
			var sufTagExp = new RegExp('</' + argTag + '>', 'ig');
			if (!isEmpty(argHtml.match(preTagExp))) {
				htmlValue = argHtml.replace(preTagExp, '').replace(sufTagExp, '');
			}
		}
		return htmlValue;
	}
	editor.addButton('apply_txt_formats', {
		type: 'splitbutton',
		title: 'Text Formats',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
		onclick: function () {
			if (isReady()) {
				setEmphasis('u');
			}
		},
		menu: [{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3YzMuMzEgMCA2LTIuNjkgNi02VjNoLTIuNXY4YzAgMS45My0xLjU3IDMuNS0zLjUgMy41UzguNSAxMi45MyA4LjUgMTFWM0g2djhjMCAzLjMxIDIuNjkgNiA2IDZ6bS03IDJ2MmgxNHYtMkg1eiIvPjwvc3ZnPg==',
				text: '\xa0Underline',
				onclick: function () {
					if (isReady()) {
						setEmphasis('u');
					}
				},
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDE5aDR2LTNoLTR2M3pNNSA0djNoNXYzaDRWN2g1VjRINXpNMyAxNGgxOHYtMkgzdjJ6Ii8+PC9zdmc+',
				text: '\xa0Strike through',
				onclick: function () {
					if (isReady()) {
						setEmphasis('s');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiB4PSIwIiB5PSIwIi8+PHBhdGggZD0iTTIyLDdoLTJ2MWgzdjFoLTRWN2MwLTAuNTUsMC40NS0xLDEtMWgyVjVoLTNWNGgzYzAuNTUsMCwxLDAuNDUsMSwxdjFDMjMsNi41NSwyMi41NSw3LDIyLDd6IE01Ljg4LDIwaDIuNjZsMy40LTUuNDJoMC4xMiBsMy40LDUuNDJoMi42NmwtNC42NS03LjI3TDE3LjgxLDZoLTIuNjhsLTMuMDcsNC45OWgtMC4xMkw4Ljg1LDZINi4xOWw0LjMyLDYuNzNMNS44OCwyMHoiLz48L2c+PC9zdmc+',
				text: '\xa0Super script',
				onclick: function () {
					if (isReady()) {
						setEmphasis('sup');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBhdGggZD0iTTIyLDE4aC0ydjFoM3YxaC00di0yYzAtMC41NSwwLjQ1LTEsMS0xaDJ2LTFoLTN2LTFoM2MwLjU1LDAsMSwwLjQ1LDEsMXYxQzIzLDE3LjU1LDIyLjU1LDE4LDIyLDE4eiBNNS44OCwxOGgyLjY2IGwzLjQtNS40MmgwLjEybDMuNCw1LjQyaDIuNjZsLTQuNjUtNy4yN0wxNy44MSw0aC0yLjY4bC0zLjA3LDQuOTloLTAuMTJMOC44NSw0SDYuMTlsNC4zMiw2LjczTDUuODgsMTh6Ii8+PC9nPjwvc3ZnPg==',
				text: '\xa0Sub script',
				onclick: function () {
					if (isReady()) {
						setEmphasis('sub');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Y2FwaXRhbGl6ZTwvdGl0bGU+CiAgICA8ZyBpZD0iY2FwaXRhbGl6ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzUwNEU0QiIgeD0iNSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iMTgiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5IiBmaWxsPSIjNTA0RTRCIiB4PSIxNSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iMTgiIHJ4PSIzIj48L3JlY3Q+CiAgICA8L2c+Cjwvc3ZnPg==',
				text: '\xa0Upper Case',
				onclick: function () {
					var selHtml = editor.selection.getContent({
						format: 'html'
					});
					var upHtml = selHtml.toUpperCase().replace(/(<.+?>)/g, function(tag) { return tag.toLowerCase(); });
					editor.selection.setContent(upHtml);
					editor.focus();
					editor.undoManager.add();				
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Y2FwaXRhbGl6ZTwvdGl0bGU+CiAgICA8ZyBpZD0iY2FwaXRhbGl6ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzUwNEU0QiIgeD0iNSIgeT0iMTMiIHdpZHRoPSI2IiBoZWlnaHQ9IjkiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5IiBmaWxsPSIjNTA0RTRCIiB4PSIxNSIgeT0iMTMiIHdpZHRoPSI2IiBoZWlnaHQ9IjkiIHJ4PSIzIj48L3JlY3Q+CiAgICA8L2c+Cjwvc3ZnPg==',
				text: '\xa0Lower Case',
				onclick: function () {
					var selHtml = editor.selection.getContent({
						format: 'html'
					});
					editor.selection.setContent(selHtml.toLowerCase());
					editor.focus();
					editor.undoManager.add();				
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Y2FwaXRhbGl6ZTwvdGl0bGU+CiAgICA8ZyBpZD0iY2FwaXRhbGl6ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzUwNEU0QiIgeD0iNSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iMTgiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5IiBmaWxsPSIjNTA0RTRCIiB4PSIxNSIgeT0iMTMiIHdpZHRoPSI2IiBoZWlnaHQ9IjkiIHJ4PSIzIj48L3JlY3Q+CiAgICA8L2c+Cjwvc3ZnPg==',
				text: '\xa0Capitalize',
				onclick: function () {
					var selHtml = editor.selection.getContent({
						format: 'html'
					});
					var rstHtml = selHtml.toLowerCase();
					selHtml = rstHtml.replace(/\b([a-zA-Z])/g, function(arg) { return arg.toUpperCase(); });
					rstHtml = selHtml.replace(/(<.+?>)/g, function(tag) { return tag.toLowerCase(); });
					editor.selection.setContent(rstHtml);
					editor.focus();
					editor.undoManager.add();				
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+c21hbGxfY2FwczwvdGl0bGU+CiAgICA8ZyBpZD0ic21hbGxfY2FwcyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgc3Ryb2tlPSIjNTA0RTRCIiBzdHJva2Utd2lkdGg9IjQiIGN4PSIxMyIgY3k9IjEzIiByPSI5Ij48L2NpcmNsZT4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjNTA0RTRCIiBjeD0iMTkiIGN5PSIxMyIgcj0iNSI+PC9jaXJjbGU+CiAgICA8L2c+Cjwvc3ZnPg==',
				text: '\xa0Small Caps',
				onclick: function () {
					setClass('trn:caps-sm');
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDd2NEg1LjgzbDMuNTgtMy41OUw4IDZsLTYgNiA2IDYgMS40MS0xLjQxTDUuODMgMTNIMjFWN3oiLz48L3N2Zz4=',
				text: '\xa0Keyboard',
				onclick: function () {
					if (isReady()) {
						setEmphasis('kbd');
					}
				}
},
			{
				icon: true,
				image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PC9nPjxnPjxnPjxwYXRoIGQ9Ik0yMCw2djE0SDZ2MmgxNGMxLjEsMCwyLTAuOSwyLTJWNkgyMHoiLz48cGF0aCBkPSJNMTYsMkg0QzIuOSwyLDIsMi45LDIsNHYxMmMwLDEuMSwwLjksMiwyLDJoMTJjMS4xLDAsMi0wLjksMi0yVjRDMTgsMi45LDE3LjEsMiwxNiwyeiBNOSwxNkg0di01aDVWMTZ6IE0xNiwxNmgtNXYtNWg1IFYxNnogTTE2LDlINFY0aDEyVjl6Ii8+PC9nPjwvZz48L3N2Zz4=',
				text: '\xa0Drop Shadow',
				onclick: function () {
					setClass('trn:shadow-md');
				}
},
],
	});
});
/*
 * EOF: apply-text-format / plugin.js / 31201101
 */
