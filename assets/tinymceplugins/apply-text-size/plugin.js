/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-size plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_size', function(editor) {
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
				for (;selectArray[idx];) {
					// if > good array values, exit
					if (idx > lastRecord) {
						newHtml += '<p>&nbsp;</p>';
						break;
					}
					// save array item to object
					idxObj.outerHtml = selectArray[idx];
					newTag = getNewTag(idxObj.purgeOuterHtml(), argTag, 'class');
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
				newTag = getNewTag(selObj.purgeOuterHtml(), argTag, 'class');
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
				newTag = getNewTag(selObj.purgeOuterHtml(), argTag, 'class');
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
	function getNewTag(argHtml, argTag, argElement) {
		// argHtml = source html
		// argTag = target html
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		if (argTag === undefined || argTag === null) {
			argTag = '';
		}
		if (argElement === undefined || argElement === null) {
			argElement = '';
		}
		var curTag;
		var htmlValue;
		var keyExp;
		var keyValue;
		var tagHtml;
		var tmpValue1;
		var tmpValue2;
		switch (true) {
			case (argElement.toLowerCase() == 'class'):
				// pull key
				keyValue = getRegExpValue(argTag, '^(.*?)-|^(.*?)\+', 'is').replace(/.$/, '');
				// pull tag
				tagHtml = getRegExpValue(argHtml, '^<(.|\n)*?>', 'is');
				if (isEmpty(tagHtml.match(/class/))) {
					tmpValue1 = tagHtml.match(/^<p.*?>|^<h[1-6].*?>|<span.*?>|^<div.*?>|^<li.*?>/)[0].replace(/>$/, '') + ' class="' + argTag + '">';
					htmlValue = tidyTag(tmpValue1);
				} else {
					keyExp = new RegExp(keyValue, 'is');
					if (isEmpty(tagHtml.match(keyExp))) {
						tmpValue2 = getRegExpValue(tagHtml, 'class(.*?)".*?"', 'is').replace(/"$/, '') + ' ' + argTag + '"';
						tmpValue1 = tidyElements(tmpValue2, 'class');
						htmlValue = tagHtml.replace(/class(.*?)".*?"/, tmpValue1);
					} else {
						keyExp = RegExp('(' + keyValue + ')(.*?)"');
						curTag = tagHtml.match(keyExp)[0].replace(/"/, '');
						htmlValue = tagHtml.replace(curTag, argTag);
					}
				}
				break;
			case (argElement.toLowerCase() == 'style'):
				// pull key
				keyValue = getRegExpValue(argTag, '^(.*?)-|^(.*?)\+', 'is').replace(/.$/, '');
				// pull tag
				tagHtml = getRegExpValue(argHtml, '^<(.|\n)*?>', 'is');
				if (isEmpty(tagHtml.match(/style/))) {
					tmpValue1 = tagHtml.match(/^<p.*?>|^<h[1-6].*?>|<span.*?>|^<div.*?>|^<li.*?>/)[0].replace(/>$/, '') + ' style="' + argTag + '">';
					htmlValue = tidyTag(tmpValue1);
				} else {
					keyExp = new RegExp(keyValue, 'is');
					if (isEmpty(tagHtml.match(keyExp))) {
						tmpValue2 = getRegExpValue(tagHtml, 'class(.*?)".*?"', 'is').replace(/"$/, '') + ' ' + argTag + '"';
						//tmpValue1 = tidyStyle(tmpValue2);
						tmpValue1 = tidyElements(tmpValue2, 'style');
						htmlValue = tagHtml.replace(/class(.*?)".*?"/, tmpValue1);
					} else {
						keyExp = RegExp('(' + keyValue + ')(.*?)"');
						curTag = tagHtml.match(keyExp)[0].replace(/"/, '');
						htmlValue = tagHtml.replace(curTag, argTag);
					}
				}
				break;
			default:
				htmlValue = '';
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
	function getRegExpValue(argValue, argRegExp, argRegExpScope) {
		// argValue = value to evaluate
		// argRegExp = regular expression
		// argRegExpScope = regular expression scope
		if (argValue === undefined || argValue === null) {
			argValue = '';
		}
		if (argRegExp === undefined || argRegExp === null) {
			argRegExp = '';
		}
		if (argRegExpScope === undefined || argRegExpScope === null) {
			argRegExpScope = 'g';
		}
		var htmlValue = '';
		if (!isEmpty(argValue) && !isEmpty(argRegExp)) {
			if (isEmpty(argRegExpScope.match(/g|m|i|x|X|s|u|U|A|j|D/g))) {
				argRegExpScope = 'g';
			}
			var regExp = new RegExp(argRegExp, argRegExpScope);
			if (!isEmpty(argValue.match(regExp))) {
				htmlValue = argValue.match(regExp)[0];
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
	function tidyElements(argHtml, argGroup) {
		// argHtml = html to tidy
		// argGroup = element group (ie. class/style)
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		if (argGroup === undefined || argGroup === null) {
			argGroup = 'style';
		}
		var htmlValue = '';
		// class="fnt:wgt-500 fnt:family-serif"
		if (!isEmpty(argHtml) && !isEmpty(argGroup.match(/class|style/i))) {
			var tidyArray;
			var tidyItems = argHtml.match(/"(.+)"/)[1];
			switch (argGroup.toLowerCase()) {
				case ('class'):
					tidyArray = tidyItems.split(' ');
					break;
				case ('style'):
					tidyArray = tidyItems.replace(/;\s/, ';,').split(',');
					break;
			}
			tidyArray.sort();
			var sortedItems = (tidyArray.join(' '));
			htmlValue = argHtml.replace(tidyItems, sortedItems);
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
	editor.addButton('apply_txt_size', {
		type: 'splitbutton',
		title: 'Text Size',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0gNi4wMzUgMTQgTCA4LjQzNSA3LjcgTCAxMC44MzUgMTQgTSA3LjQzNSA1IEwgMS45MzUgMTkgTCA0LjEzNSAxOSBMIDUuMjM1IDE2IEwgMTEuNDM1IDE2IEwgMTIuNTM1IDE5IEwgMTQuNzM1IDE5IEwgOS40MzUgNSBMIDcuNDM1IDUgWiIvPgogIDxwYXRoIGQ9Ik0gMTguNzUgNy41NDUgTCAyMS4wNCA5LjgzNSBMIDIyLjA1OSA4LjgxNSBMIDE4Ljc1IDUuNSBMIDE1LjQzNSA4LjgxNSBMIDE2LjQ2IDkuODM1IEwgMTguNzUgNy41NDUgWiBNIDE4Ljc1IDE2LjQ1NSBMIDE2LjQ2IDE0LjE2NSBMIDE1LjQ0MiAxNS4xODUgTCAxOC43NSAxOC41IEwgMjIuMDY1IDE1LjE4NSBMIDIxLjA0IDE0LjE2NSBMIDE4Ljc1IDE2LjQ1NSBaIi8+Cjwvc3ZnPg==',
		onclick: function () {
			if (isReady()) {
				setClass('fnt:siz+1');
			}
		},
		menu: [{
			icon: false,
			text: '+\xa06',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-5x')
				}
			}
		}, {
			icon: false,
			text: '+\xa05',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-5x');
				}
			}
		}, {
			icon: false,
			text: '+\xa04',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-3x');
				}
			}
		}, {
			icon: false,
			text: '+\xa03',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-2x');
				}
			}
		}, {
			icon: false,
			text: '+\xa02',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg-1x');
				}
			}
		}, {
			icon: false,
			text: '+\xa01',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-lg');
				}
			}
		}, {
			icon: false,
			text: '+\xa0½',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-md-1x');
				}
			}
		}, {
			icon: true,
			text: 'Default',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkuNiwxNEwxMiw3LjdMMTQuNCwxNE0xMSw1TDUuNSwxOUg3LjdMOC44LDE2SDE1TDE2LjEsMTlIMTguM0wxMyw1SDExWiIgLz48L3N2Zz4=',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-md');
				}
			}
		}, {
			icon: false,
			text: '-\xa01',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-sm');
				}
			}
		}, {
			icon: false,
			text: '-\xa02',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-sm-1x');
				}
			}
		}, {
			icon: false,
			text: '-\xa03',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-sm-2x');
				}
			}
		}, {
			icon: true,
			text: 'Larger',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsN0wxMywxMi4wN0wxNC40MSwxMy41TDE3LDEwLjlWMTdIMTlWMTAuOUwyMS41OSwxMy41TDIzLDEyLjA3TDE4LDdaIiAvPjwvc3ZnPg==',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz+1');
				}
			}
		}, {
			icon: true,
			text: 'Smaller',
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTUuMTIsMTRMNy41LDcuNjdMOS44NywxNE02LjUsNUwxLDE5SDMuMjVMNC4zNywxNkgxMC42MkwxMS43NSwxOUgxNEw4LjUsNUg2LjVNMTgsMTdMMjMsMTEuOTNMMjEuNTksMTAuNUwxOSwxMy4xVjdIMTdWMTMuMUwxNC40MSwxMC41TDEzLDExLjkzTDE4LDE3WiIgLz48L3N2Zz4=',
			onclick: function() {
				if (isReady()) {
					setClass('fnt:siz-1');
				}
			}
		}, ],
	});
});
/*
 * EOF: apply-text-size / plugin.js / 30201101
 */
