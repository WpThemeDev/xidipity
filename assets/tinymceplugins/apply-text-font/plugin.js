/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_font', function (editor) {
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
				for (; selectArray[idx];) {
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
	editor.addButton('apply_txt_font', {
		type: 'splitbutton',
		title: 'Fonts',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+aWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQ8L3RpdGxlPgogIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogIDxnIGlkPSLwn5SNLVN5c3RlbS1JY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8ZyBpZD0iaWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgIDxwYXRoIGQ9Ik0xNC40MzgxLDUuODk2MDU5NzggQzE0LjgwNzE5LDUuODk2MjIxOTkgMTUuMTQyNDIyLDYuMDk5MTEwOCAxNS4zMTU4NTY1LDYuNDE3NjEwOSBMMTUuMzY3NSw2LjUyNzk0IEwyMC43MTA2LDIwLjAyMzQgTDIxLjAwODYsMjAuMDIzNCBDMjEuNTYwOSwyMC4wMjM0IDIyLjAwODYsMjAuNDcxMSAyMi4wMDg2LDIxLjAyMzQgQzIyLjAwODYsMjEuNTM2MjUgMjEuNjIyNTczLDIxLjk1OTAzODUgMjEuMTI1MjIzOSwyMi4wMTY4MjAzIEwyMS4wMDg2LDIyLjAyMzU1IEwxNy45OTk5LDIyLjAyMzMgQzE3LjQ0NzcsMjIuMDIzMyAxNywyMS41NzU2IDE3LDIxLjAyMzMgQzE3LDIwLjUxMDQ1IDE3LjM4NjAyNywyMC4wODc3OTA4IDE3Ljg4MzM3NjEsMjAuMDMwMDI3NSBMMTgsMjAuMDIzMyBMMTguNTU5NSwyMC4wMjMzIEwxNy43NTg0LDE3Ljk5OTkgTDExLjEwNTgsMTcuOTk5OSBMMTAuMzAyNiwyMC4wMjMzIEwxMSwyMC4wMjMzIEMxMS41NTIzLDIwLjAyMzMgMTIsMjAuNDcxIDEyLDIxLjAyMzMgQzEyLDIxLjUzNjE1IDExLjYxMzk3MywyMS45NTg4MDkyIDExLjExNjYyMzksMjIuMDE2NTcyNSBMMTEsMjIuMDIzMyBMOCwyMi4wMjMzIEM3LjQ0NzcyLDIyLjAyMzMgNywyMS41NzU2IDcsMjEuMDIzMyBDNywyMC41MTA0NSA3LjM4NjAzNTY2LDIwLjA4Nzc5MDggNy44ODMzNzc5LDIwLjAzMDAyNzUgTDgsMjAuMDIzMyBMOC4xNTA4MSwyMC4wMjMzIEwxMy41MDgyLDYuNTI3MTEgQzEzLjY1OTUsNi4xNDYwMSAxNC4wMjgxLDUuODk1ODcgMTQuNDM4MSw1Ljg5NjA1OTc4IFogTTE0LjQzNjUsOS42MDk1IEwxMS44OTk3LDE1Ljk5OTkgTDE2Ljk2NjYsMTUuOTk5OSBMMTQuNDM2NSw5LjYwOTUgWiBNNy4wMDA1NywyIEM3LjQyMTA3LDIgNy43OTY2NCwyLjI2MzEgNy45NDAzMywyLjY1ODI5IEwxMC44MjIsMTAuNTgzOSBMOS43MTEyOCwxMy4zODIgTDkuMjA4OCwxMiBMNC43OTE0NywxMiBMMy45Mzk4MSwxNC4zNDE4IEMzLjc1MTA1LDE0Ljg2MDggMy4xNzcyNywxNS4xMjg1IDIuNjU4MjUsMTQuOTM5OCBDMi4xMzkyMiwxNC43NTEgMS44NzE0OSwxNC4xNzcyIDIuMDYwMjUsMTMuNjU4MiBMNi4wNjA3NSwyLjY1ODIyIEM2LjIwNDQ3LDIuMjYzMDQgNi41ODAwNiwyIDcuMDAwNTcsMiBaIE03LjAwMDQxLDUuOTI2MTggTDUuNTE4ODMsMTAgTDguNDgxNjIsMTAgTDcuMDAwNDEsNS45MjYxOCBaIiBpZD0i8J+OqC1Db2xvciIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+',
		onclick: function () {
			if (isReady()) {
				setClass('fnt:family-serif');
			}
		},
		menu: [{
			icon: false,
			text: '•\xa0Sans',
			onclick: function () {
				if (isReady()) {
					setClass('fnt:family-sans');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Serif',
			onclick: function () {
				if (isReady()) {
					setClass('fnt:family-serif');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Mono',
			onclick: function () {
				if (isReady()) {
					setClass('fnt:family-mono');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Cursive',
			onclick: function () {
				if (isReady()) {
					setClass('fnt:family-cursive');
				}
			}
		}, {
			icon: false,
			text: '•\xa0Fantasy',
			onclick: function () {
				if (isReady()) {
					setClass('fnt:family-fantasy');
				}
			}
		}, ],
	});
});
/*
 * EOF: apply-text-font / plugin.js / 30201101
 */
