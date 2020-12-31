/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-style plugin
 *
 * ###:  plugin.js
 * bld:  30201101
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('app_txt_style', function (editor) {
	'use strict';
	// selection object
	var selectionObject = {
		html: '', // selection as html
		icon: function () {
			var htmlValue = '';
			if (!isEmpty(this.outerHtml)) {
				var regExp = new RegExp(/<i.*?i>|"material-icons"|<img.*\/>/, 'is');
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
		node: undefined, //	node object
		nodeName: '', // node name
		outerHtml: '', // full selection will tags as html
		preTag: function () {
			return getRegExpValue(this.outerHtml, '^<(p|h[1-6]|div|li|span).*?>|^<(em|i|kbd|s|strong|sub|sup|u)>').replace(/\sdata-mce-style.+"/, '');
		}, // prefix tag with any classes/styles
		sufTag: function () {
			return getRegExpValue(this.outerHtml, '<\/(p|h[1-6]|div|li|span|em|i|kbd|s|strong|sub|sup|u)>$');
		}, // suffix tag
		text: '', // selection as plain text
		purgeInnerHtml: function () {
			var htmlValue = this.innerHtml;
			if (!isEmpty(this.innerHtml)) {
				var regExp = new RegExp(/<i.*?i>|"material-icons"|<img.*\/>/, 'is');
				if (!isEmpty(this.innerHtml.match(regExp))) {
					var htmlIcon = '';
					switch (true) {
						case (!isEmpty(this.innerHtml.match(/<img.*\/>/))):
							htmlIcon = getRegExpValue(this.innerHtml, '\\[caption.*caption\\]', 'is');
							if (isEmpty(htmlIcon)) {
								htmlIcon = getRegExpValue(this.innerHtml, '<img.*\/>', 'is');
							}
							break;
						case (!isEmpty(this.innerHtml.match(/"material-icons"/))):
							htmlIcon = getRegExpValue(this.innerHtml, '<span.*"material-icons".*span>', 'is');
							break;
						default:
							htmlIcon = getRegExpValue(this.innerHtml, '<span.*?><i.*?><\/span>|<i.*?i>', 'is');
					}
					if (!isEmpty(htmlIcon)) {
						htmlValue = this.innerHtml.replace(htmlIcon, '');
					}
				}
			}
			return htmlValue.replace(/\sdata-mce-style.+"/, '');
		},
		purgeOuterHtml: function () {
			var htmlValue = this.outerHtml;
			if (!isEmpty(this.outerHtml)) {
				var regExp = new RegExp(/<i.*?i>|"material-icons"|<img.*\/>/, 'is');
				if (!isEmpty(this.outerHtml.match(regExp))) {
					var htmlIcon = '';
					switch (true) {
						case (!isEmpty(this.outerHtml.match(/<img.*\/>/))):
							htmlIcon = getRegExpValue(this.outerHtml, '\\[caption.*caption\\]', 'is');
							if (isEmpty(htmlIcon)) {
								htmlIcon = getRegExpValue(this.outerHtml, '<img.*\/>', 'is');
							}
							break;
						case (!isEmpty(this.outerHtml.match(/"material-icons"/))):
							htmlIcon = getRegExpValue(this.outerHtml, '<span.*"material-icons".*span>', 'is');
							break;
						default:
							htmlIcon = getRegExpValue(this.outerHtml, '<span.*?><i.*?><\/span>|<i.*?i>', 'is');
					}
					if (!isEmpty(htmlIcon)) {
						htmlValue = this.outerHtml.replace(htmlIcon, '');
					}
				}
			}
			return htmlValue.replace(/\sdata-mce-style.+"/, '');
		}
	};
	function getSource() {
		// selection object
		var sourceSelObj = selectionObject;
		// selection html node
		sourceSelObj.node = editor.selection.getNode();
		// get selection node name
		sourceSelObj.nodeName = sourceSelObj.node.nodeName.toLowerCase();
		// selection content
		sourceSelObj.text = editor.selection.getContent({
			format: 'text'
		});
		sourceSelObj.html = editor.selection.getContent({
			format: 'html'
		});
		// if wrapped in a span, set new node
		var regExp = new RegExp(/\b(em|i|kbd|s|strong|sub|sup|u)\b/, 'is');
		if (!isEmpty(sourceSelObj.nodeName.match(regExp))) {
			// select parent node
			var tmpNODE;
			tmpNODE = editor.dom.getParent(sourceSelObj.node, 'span');
			if (!isEmpty(tmpNODE)) {
				sourceSelObj.node = tmpNODE;
				// get new node name
				sourceSelObj.nodeName = sourceSelObj.node.nodeName.toLowerCase();
			}
		}
		regExp = new RegExp(/\sdata-mce-style.+"/, 's');
		sourceSelObj.innerHtml = sourceSelObj.node.innerHTML;
		sourceSelObj.innerText = getRawHtml(sourceSelObj.innerHtml);
		sourceSelObj.outerHtml = editor.dom.getOuterHTML(sourceSelObj.node);
		switch (true) {
			case (sourceSelObj.nodeName == 'body'):
				displayMessage('SYSTEM MESSAGE\nInvalid or too broad of a selection.');
				break;
			case (isEmpty(sourceSelObj.purgeOuterHtml().match(/class|style|span|<em>|<i>|<kbd>|<s>|<strong>|<sub>|<sup>|<u>/))):
				displayMessage('SYSTEM MESSAGE\nSelection missing style elements.');
				break;
			default:
				sessionStorage.setItem('soureOuterHtml', sourceSelObj.purgeOuterHtml());
				editor.selection.collapse();
		}
		return;
	}
	function setTarget() {
		// selection object
		var targetSelObj = selectionObject;
		// selection html node
		targetSelObj.node = editor.selection.getNode();
		// get selection node name
		targetSelObj.nodeName = targetSelObj.node.nodeName.toLowerCase();
		// selection content
		targetSelObj.text = editor.selection.getContent({
			format: 'text'
		});
		targetSelObj.html = editor.selection.getContent({
			format: 'html'
		});
		var isMultiLine = true;
		if (targetSelObj.nodeName !== 'body') {
			var tmpValue = '';
			// if wrapped in a span, set new node
			var regExp = new RegExp(/\b(em|i|kbd|s|strong|sub|sup|u)\b/, 'is');
			if (!isEmpty(targetSelObj.nodeName.match(regExp))) {
				// select parent node
				var tmpNODE;
				tmpNODE = editor.dom.getParent(targetSelObj.node, 'span');
				if (!isEmpty(tmpNODE)) {
					targetSelObj.node = tmpNODE;
					// get new node name
					targetSelObj.nodeName = targetSelObj.node.nodeName.toLowerCase();
				}
			}
			regExp = new RegExp(/\sdata-mce-style.+"/, 's');
			targetSelObj.innerHtml = targetSelObj.node.innerHTML;
			targetSelObj.innerText = getRawHtml(targetSelObj.innerHtml);
			targetSelObj.outerHtml = editor.dom.getOuterHTML(targetSelObj.node);
			// count end tags of p,h?,div
			isMultiLine = (!targetSelObj.purgeOuterHtml().match(/<\/h[1-6]|\/p>|\/div|\/li>/gi) ? 0 : targetSelObj.purgeOuterHtml().match(/<\/h[1-6]|\/p>|\/div|\/li>/gi).length) > 1;
		}
		var newHtml = '';
		var newTag;
		switch (true) {
			case (isMultiLine):
				// multi paragraph
				// 1. strip carrage returns
				regExp = new RegExp(/(\r\n|\n|\r)/, 'gm');
				tmpValue = targetSelObj.html.replace(regExp, '');
				// 2. delimit tags with comma
				regExp = new RegExp(/(<\/(div|h[1-6]|p)>)(<(div|h[1-6]|p)>)/, 'gm');
				var delimitedInput = tmpValue.replace(/(<\/(div|h[1-6]|p)>)(<(div|h[1-6]|p)>)/g, '$1,$3');
				// 3. add to array
				var idxSelObj = selectionObject;
				var selectArray = delimitedInput.split(',');
				var lastRecord = lastRec(selectArray);
				var idx = 0;
				// 4. loop through array
				for (;selectArray[idx];) {
					if (idx > lastRecord) {
						newHtml += '<p>&nbsp;</p>';
						break;
					}
					idxSelObj.outerHtml = selectArray[idx];
					newTag = getNewTag(sessionStorage.getItem('soureOuterHtml'), idxSelObj.purgeOuterHtml());
					newHtml += idxSelObj.purgeOuterHtml().replace(idxSelObj.preTag(), newTag[0]).replace(idxSelObj.sufTag(), newTag[1]);
					idx++;
				}
				break;
			case (targetSelObj.text !== targetSelObj.innerText):
				newTag = getNewTag(sessionStorage.getItem('soureOuterHtml'), targetSelObj.html);
				if (newTag[2] == 0) {
					displayMessage('SYSTEM MESSAGE\nStyle could not be duplicated.');
				} else {
					newHtml = newTag[0] + targetSelObj.html + newTag[1];
				}
				break;
			default:
				newHtml='';
				newTag = getNewTag(sessionStorage.getItem('soureOuterHtml'), targetSelObj.purgeOuterHtml());
				if (newTag[2] == 0) {
					displayMessage('SYSTEM MESSAGE\nStyle could not be duplicated.');
				} else {
					newHtml = targetSelObj.purgeOuterHtml().replace(targetSelObj.preTag(), newTag[0]).replace(targetSelObj.sufTag(), newTag[1]);
				}
		}
		// save new html
		if (!isEmpty(newHtml)) {
			editor.selection.setContent(newHtml);
			editor.focus();
			editor.undoManager.add();				
		}
		sessionStorage.setItem('soureOuterHtml', '');
		return;
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
	// get element value
	function getElement(argHtml, argElement) {
		// argHtml = html
		// argElement = element (style/class/tag)
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		if (argElement === undefined || argElement === null) {
			argElement = '';
		}
		var htmlValue = '';
		if (!isEmpty(argHtml) && !isEmpty(argElement.match(/class|style|tag/))) {
			var regExp;
			var tmpValue;
			if (argElement == 'tag') {
				tmpValue = getRegExpValue(argHtml, '<em>|<i>|<kbd>|<s>|<strong>|<sub>|<sup>|<u>');
				if (!isEmpty(tmpValue)) {
					htmlValue = tmpValue.replace('<', '').replace('>', '');
				}
			} else if (argElement == 'class' || argElement == 'style') {
				tmpValue = getRegExpValue(argHtml, argElement + '.*?".*?"');
				if (!isEmpty(tmpValue)) {
					regExp = new RegExp(argElement);
					htmlValue = tmpValue.replace(regExp, '').replace(/=/, '').replace(/"/g, '');
				}
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
			var regExp = new RegExp(/<i.*?i>|"material-icons"|<img.*\/>/, 'is');
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
	// strip html to check for content
	function hasContent(argHtml) {
		// argHtml = HTML to validate
		if (argHtml === undefined || argHtml === null) {
			argHtml = '';
		}
		var htmlDIV = document.createElement('htmlDIV');
		htmlDIV.innerHTML = argHtml;
		// strip html to see what's left
		var htmlValue = htmlDIV.textContent || htmlDIV.innerText || '';
		return (htmlValue.length > 0);
	}
	// check for '' or null
	function isEmpty(argSTR) {
		return (!argSTR || 0 === argSTR.length);
	}
	// check for selection
	function isReady() {
		var blnValue = true;
		var selectedText = editor.selection.getContent({
			format: 'text'
		});
		if (isEmpty(selectedText)) {
			displayMessage('SYSTEM MESSAGE\nInvalid or missing text selection.');
			blnValue = false;
			sessionStorage.setItem('soureOuterHtml', '');
		}
		return blnValue;
	}
	// find last "good" array value
	function lastRec(argArray) {
		if (argArray === undefined || argArray === null) {
			argArray = [''];
		}
		var idxItem;
		// 0 based
		var idx = argArray.length - 1;
		for (;argArray[idx];) {
			// save array item to var
			idxItem = argArray[idx];
			if (hasContent(idxItem)) {
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
	// build new tags
	function getNewTag(argSource, argTarget) {
		// argSource = source html
		// argTarget = target html
		if (argSource === undefined || argSource === null) {
			argSource = '';
		}
		if (argTarget === undefined || argTarget === null) {
			argTarget = '';
		}
		var selectArray = new Array(3);
		selectArray[2] = 0;
		if (isEmpty(argSource.match(/class|style|<em>|<i>|<kbd>|<s>|<strong>|<sub>|<sup>|<u>/))) {
			argSource = '';
			argTarget = '';
		}
		var tmpValue;
		var regExp;
		if (!isEmpty(argSource) && !isEmpty(argTarget)) {
			regExp = new RegExp(/<span.*?><i.*?><\/span>|<i.*?i>/, 'is');
			// remove/discard icon from source
			if (!isEmpty(argSource.match(/<i.*?i>/))) {
				tmpValue = argSource.replace(regExp, '');
				argSource = tmpValue;
			}
			// remove/save icon from target
			var iconTag = getIcon(argTarget);
			if (!isEmpty(iconTag)) {
				tmpValue = argTarget.replace(iconTag, '');
				argTarget = tmpValue;
			}
			// vars
			var targetPrefix;
			var targetSuffix;
			var newPrefix;
			var newSuffix;
			var sourceClass = getElement(argSource, 'class');
			var sourceStyle = getElement(argSource, 'style');
			var sourceTag = getElement(argSource, 'tag');
			targetPrefix = getRegExpValue(argTarget, '(^<p.*?span.*?>|^<h[1-6].*?span.*?>|^<li.*?span.*?>|^<div.*?span.*?>)|(^<p.*?>|^<h[1-6].*?|^<li.*?>|^<div.*?>)');
			targetSuffix = getRegExpValue(argTarget, '(<\/span.*?\/p.*?>$|<\/span.*?\/h[1-6].*?>$|<\/span.*?\/li.*?>$)|(<\/span.*?\/div.*?>$)|(<\/p>$)|(<\/h[1-6]>$)|(<\/li>$)|(<\/div.*?>$)');
			// alignment
			var alnEXP = new RegExp(/(aln:txt-)(lt|ct|rt|jt|bi|hi|pi)/, 'g');
			if (isEmpty(targetPrefix)) {
				// x alignment on paragraph fragment
				selectArray[2] = 1;
				tmpValue = sourceClass.replace(alnEXP, '').trim();
				sourceClass = tmpValue;
				switch (true) {
					// has class & style
					case (!isEmpty(sourceClass) && !isEmpty(sourceStyle)):
						selectArray[2] = 1.1;
						newPrefix = iconTag + '<span class="' + sourceClass + '" style="' + sourceStyle + '">';
						newSuffix = '</span>';
						break;
						// has class & no style
					case (!isEmpty(sourceClass)):
						selectArray[2] = 1.2;
						newPrefix = iconTag + '<span class="' + sourceClass + '">';
						newSuffix = '</span>';
						break;
						// has style & no class
					case (!isEmpty(sourceStyle)):
						selectArray[2] = 1.3;
						newPrefix = iconTag + '<span style="' + sourceStyle + '">';
						newSuffix = '</span>';
						break;
					default:
						selectArray[2] = 1.4;
						newPrefix = iconTag;
						newSuffix = '';
						selectArray[2] = 0;
				}
				if (!isEmpty(sourceTag)) {
					tmpValue = newPrefix;
					newPrefix = tmpValue + '<' + sourceTag + '>';
					tmpValue = newSuffix;
					newSuffix = '</' + sourceTag + '>' + tmpValue;
					selectArray[2] = 1.5;
				}
			} else {
				selectArray[2] = 2;
				switch (true) {
					// alignment & color style
					case (!isEmpty(sourceClass.match(alnEXP)) && !isEmpty(sourceStyle.match(/color:.*?;/))):
						selectArray[2] = 2.1;
						newPrefix = '<p class="' + sourceClass + '">' + iconTag + '<span style="' + sourceStyle + '">';
						newSuffix = '</span></p>';
						break;
						// alignment & some other style
					case (!isEmpty(sourceClass.match(alnEXP)) && !isEmpty(sourceStyle)):
						selectArray[2] = 2.2;
						newPrefix = '<p class="' + sourceClass + '" style="' + sourceStyle + '">' + iconTag;
						newSuffix = '</p>';
						break;
						// alignment & no style
					case (!isEmpty(sourceClass.match(alnEXP))):
						selectArray[2] = 2.3;
						newPrefix = '<p class="' + sourceClass + '">' + iconTag;
						newSuffix = '</p>';
						break;
						// class & style
					case (!isEmpty(sourceClass) && !isEmpty(sourceStyle)):
						selectArray[2] = 2.4;
						newPrefix = targetPrefix + iconTag + '<span class="' + sourceClass + '" style="' + sourceStyle + '">';
						newSuffix = '</span>' + targetSuffix;
						break;
						// class & no style
					case (!isEmpty(sourceClass)):
						selectArray[2] = 2.5;
						tmpValue = targetPrefix.replace(/>/, '');
						newPrefix = iconTag + tmpValue + ' class="' + sourceClass + '">';
						newSuffix = targetSuffix;
						break;
						// color style
					case (!isEmpty(sourceStyle.match(/color:.*?;/))):
						selectArray[2] = 2.6;
						newPrefix = targetPrefix + iconTag + '<span style="' + sourceStyle + '">';
						newSuffix = '</span>' + targetSuffix;
						break;
						// style & no class
					case (!isEmpty(sourceStyle)):
						selectArray[2] = 2.7;
						tmpValue = targetPrefix.replace(/>/, '');
						newPrefix = iconTag + tmpValue + ' style="' + sourceStyle + '">';
						newSuffix = targetSuffix;
						break;
						// none of the above
					default:
						selectArray[2] = 2.8;
						newPrefix = iconTag;
						newSuffix = '';
						selectArray[2] = 0;
				}
				if (!isEmpty(sourceTag)) {
					if (isEmpty(newPrefix)) {
						tmpValue = targetPrefix;
					} else {
						tmpValue = newPrefix;
					}
					newPrefix = tmpValue + '<' + sourceTag + '>';
					if (isEmpty(newSuffix)) {
						tmpValue = targetSuffix;
					} else {
						tmpValue = newSuffix;
					}
					newSuffix = '</' + sourceTag + '>' + tmpValue;
					selectArray[2] = 2;
				}
			}
			selectArray[0] = newPrefix;
			selectArray[1] = newSuffix;
		}
		return selectArray;
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
	editor.addButton('app_txt_style', {
		title: 'Duplicate Style',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4IDRWM2MwLS41NS0uNDUtMS0xLTFINWMtLjU1IDAtMSAuNDUtMSAxdjRjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xVjZoMXY0SDl2MTFjMCAuNTUuNDUgMSAxIDFoMmMuNTUgMCAxLS40NSAxLTF2LTloOFY0aC0zeiIvPjwvc3ZnPg==',
		onclick: function () {
			if (sessionStorage.getItem('soureOuterHtml') == null) {
				sessionStorage.setItem('soureOuterHtml', '');
			}
			if (isEmpty(sessionStorage.getItem('soureOuterHtml'))) {
				if (isReady()) {
					getSource();
				}
			} else {
				if (isReady()) {
					if (isEmpty(sessionStorage.getItem('soureOuterHtml'))) {
						displayMessage('SYSTEM MESSAGE\nInvalid or missing style elements.');
					} else {
						setTarget();
					}
				}
			}
		}
	});
});
/*
 * EOF: apply-text-style / plugin.js / 30201101
 */
