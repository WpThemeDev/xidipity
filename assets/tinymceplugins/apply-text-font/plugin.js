/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  210614-1
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_font', function (editor) {
	'use strict';
	//
	// error object
	//
	var _js = {
		hd: 'ERROR',
		ms: null,
		ln: null,
		display: function () {
			editor.windowManager.alert(this.hd + ' #' + this.ln + ' - ' + this.ms);
			this.hd = 'ERROR';
			this.ms = null;
			this.ln = null;
		},
		hasError: function () {
			return (this.ms !== null);
		}
	}
	//
	// document object
	//
	var oDoc = {
		blkContent: function () {
			//
			// multi line block content
			//
			var retValue = this.blkContentCache;
			//
			if (!_js.hasError()) {
				try {
					if (this.lineCnt < 2) {
						throw new Error('Multi line content must contain more than 1 line.');
					}
					if (isNull(retValue)) {
						//
						console.log('  OBJ > blkContent - New');
						//
						var htmlTable;
						switch (true) {
							case (this.mceNodeName() == 'body'):
								// body content
								this.blkContentCache = this.mceHtml().replace(/<.\d><\/.\d>|<.><\/.>|<.{1,3}><\/.{1,3}>|<.>\u00a0<\/.>/g, '');
								break;
							case (!isEmpty(this.mceHtml().match(/(^<table)|(table>$)/g))):
								// multi line full table
								htmlTable = this.mceHtml().replace(/(\s*)(\r\n|\n|\r)(\s*)/g, '');
								htmlTable = htmlTable.replace(/(<(table|tbody|thead|tr).*?>|<\/(table|tbody|thead|tr)>)/g, '');
								htmlTable = htmlTable.replace(/(<\/th>)<|(<\/td>)</g, '$1$2\n<');
								this.blkContentCache = htmlTable;
								break;
							case (!isEmpty(this.mceNodeName().match(/ul|ol/i))):
								// multi line list
								var listHtml = this.mceHtml().replace(/(<li.*?>.*?<\/li>)|[\S\s]/gm, '$1');
								listHtml = listHtml.replace(/(\r\n|\n|\r)/gm, '');
								this.blkContentCache = listHtml.replace(/<\/li><li/, '<\/li>\n<li');
								break;
							case (this.mceNodeName() == 'th'):
								// multi line table header
								htmlTable = this.mceHtml().replace(/(<th.*?>.*?<\/th>)|[\S\s]/gm, '$1');
								htmlTable = htmlTable.replace(/(\r\n|\n|\r)/gm, '');
								this.blkContentCache = htmlTable.replace(/></, '>\n<');
								break;
							case (this.mceNodeName() == 'td'):
								// multi line table cell
								htmlTable = this.mceHtml().replace(/(<td.*?>.*?<\/td>)|[\S\s]/gm, '$1');
								htmlTable = htmlTable.replace(/(\r\n|\n|\r)/gm, '');
								this.blkContentCache = htmlTable.replace(/></, '>\n<');
								break;
							default:
								// multi line, remove empty tags ie. <p></p> / <p>&nbsp;</p>
								this.blkContentCache = this.mceHtml().replace(/<.\d><\/.\d>|<.><\/.>|<.{1,3}><\/.{1,3}>|<.>\u00a0<\/.>/g, '');
								break;
						}
						//
						retValue = this.blkContentCache;
						//
					} else {
						//
						console.log('  OBJ > blkContent - Cache');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '95';
				}
			}
			//
			return retValue;
		},
		blkContentCache: null,
		datAction: '',
		datAttribute: '',
		datBgColor: function () {
			//
			// data background color
			//
			var retValue = this.datBgColorCache;
			//
			if (!_js.hasError()) {
				var datElements = '';
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > datBgColor - New');
						//
						if (isEmpty(this.datElements.match(/;/))) {
							// class elements
							datElements = this.datElements.replace(/\s+/g, ' ').trim();
							this.datBgColorCache = getRegExpValue(datElements, 'bkg:.*?(\\s|$)');
						} else {
							// style elements
							datElements = this.datElements.replace(/:/g, ': ').replace(/;/g, '; ');
							datElements = datElements.replace(/\s+/g, ' ').trim();
							this.datBgColorCache = getRegExpValue(datElements, 'background-color:.*?;');
						}
						//
						retValue = this.datBgColorCache;
						//
					} else {
						//
						console.log(' OBJ > datBgColor - Cache');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '137';
				}
			}
			//
			return retValue;
		},
		datBgColorCache: null,
		datElements: '',
		datFgColor: function () {
			//
			// data foreground color
			//
			var retValue = this.datFgColorCache;
			//
			if (!_js.hasError()) {
				var datElements = '';
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > datFgColor - New');
						//
						if (isEmpty(this.datElements.match(/;/))) {
							// class elements
							datElements = this.datElements.replace(/\s+/g, ' ').trim();
							this.datFgColorCache = getRegExpValue(datElements, 'txt:.*?(\\s|$)');
						} else {
							// style elements
							datElements = this.datElements.replace(/:/g, ': ').replace(/;/g, '; ');
							datElements = datElements.replace(/\s+/g, ' ').trim();
							this.datFgColorCache = getRegExpValue(datElements, '(?<!-)color:.*?;');
						}
						//
						retValue = this.datFgColorCache;
						//
					} else {
						//
						console.log(' OBJ > datFgColor - Cache');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '178';
				}
			}
			//
			return retValue;
		},
		datFgColorCache: null,
		hasDatColor: function () {
			//
			// datElements contains color element
			//
			var retValue = false;
			//
			if (!_js.hasError()) {
				//
				console.log(' OBJ > hasDatColor');
				//
				try {
					//
					retValue = (!isEmpty(this.datBgColor()) || !isEmpty(this.datFgColor()));
					//
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '201';
				}
			}
			//
			return retValue;
		},
		fullHtml: function () {
			//
			// display complete html with tags
			//
			var retValue = this.fullHtmlCache;
			//
			if (!_js.hasError()) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > fullHtml - New');
						//
						var domNode = this.mceNode;
						var domNodeName = this.mceNodeName();
						var enOuterHtml = this.outerHtml();
						switch (true) {
							case (domNodeName == 'body'):
								// body
								this.fullHtmlRaw = this.mceHtml(true);
								this.fullHtmlCache = regEncode(this.fullHtmlRaw);
								break;
							case (isEmpty(enOuterHtml.match(/<(div|h[1-6]|li|p(?!a)|td|th).*?>/g))):
								// marker ie. <u>, etc
								var nodeExp = new RegExp('div|h[1-6]|li|p(?!a)|td|th', 'i');
								while (isEmpty(domNodeName.match(nodeExp))) {
									if (isNull(domNode.previousSibling)) {
										domNode = domNode.parentNode;
									} else {
										domNode = domNode.previousSibling;
									}
									domNodeName = domNode.nodeName.toLowerCase();
								}
								this.fullHtmlRaw = this.proMceTags(domNode.outerHTML);
								this.fullHtmlCache = regEncode(this.fullHtmlRaw);
								break;
							default:
								// everything else
								this.fullHtmlRaw = this.outerHtml(true);
								this.fullHtmlCache = enOuterHtml;
						}
						//
						retValue = this.fullHtmlCache;
						//
					} else {
						//
						console.log(' OBJ > fullHtml - Cache');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '257';
				}
			}
			//
			return retValue;
		},
		fullHtmlCache: null,
		fullHtmlRaw: null,
		initNode: function (nodeArg1) {
			//
			// init doc object
			//
			var retValue = this.initNodeCache;
			//
			if (!_js.hasError()) {
				//
				console.log(' OBJ > initNode');
				//
				try {
					if (nodeArg1 === undefined || nodeArg1 === null) {
						throw new Error('Missing required argument.'); // editor node
					}
					// set node
					this.mceNode = nodeArg1;
					//
					// reset properties
					this.blkContentCache = null;
					this.datBgColorCache = null;
					this.datElements = '';
					this.datFgColorCache = null;
					this.fullHtmlCache = null;
					this.fullHtmlRaw = null;
					this.innerHtmlCache = null;
					this.isFragmentCache = null;
					this.mceHtmlCache = null;
					this.mceNodeNameCache = null;
					this.mceTextCache = null;
					this.outerHtmlCache = null;
					//
					// set flags
					this.hasMark = false;
					this.hasMarkPair = false;
					//
					// variables
					var fullHtml;
					var mrkExp = new RegExp('<(em|i|kbd|strong|sub|sup|s\b|u)>' + this.mceHtml() + '<\/(em|i|kbd|strong|sub|sup|s\b|u)>', 'g');
					switch (true) {
						case (this.mceNodeName() == 'span'):
							fullHtml = this.proMceTags(this.mceNode.parentNode.outerHTML);
							if (!isEmpty(fullHtml.match(/^<(p|h[1-6]|div|li|td|th).*?><span.*?>.*?<\/span><\/(p|h[1-6]|div|li|td|th).*?>/i))) {
								this.mceNode = this.mceNode.parentNode;
							}
							break;
						case (!isEmpty(this.fullHtml().match(mrkExp))):
							this.hasMark = true;
							fullHtml = this.proMceTags(this.mceNode.parentNode.outerHTML);
							this.hasMarkPair = !isEmpty(fullHtml.match(/^<(p|h[1-6]|div|li|td|th).*?><(em|i|kbd|s|strong|sub|sup|u)>/));
							break;
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '318';
				}
			}
			//
			return;
		},
		innerHtml: function () {
			//
			// cleaned inner html
			//
			var retValue = this.innerHtmlCache;
			//
			if (!_js.hasError()) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > innerHtml - New');
						//
						if (this.mceNodeName() == 'body') {
							this.innerHtmlCache = regEncode(this.mceHtml());
						} else {
							this.innerHtmlCache = regEncode(this.proMceTags(this.mceNode.innerHTML));
						}
						//
						retValue = this.innerHtmlCache;
						//
					} else {
						//
						console.log(' OBJ > innerHtml - Cache');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '351';
				}
			}
			//
			return retValue;
		},
		innerHtmlCache: null,
		isFragment: function () {
			//
			// less than full content between tags
			//
			var retValue = this.isFragmentCache;
			//
			if (!_js.hasError()) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > isFragment - New');
						//
						if (this.lineCnt == 1) {
							var mceHtml = noHtmlTags(this.mceHtml());
							var outerHtml = noHtmlTags(this.outerHtml());
							var fullHtml = noHtmlTags(this.fullHtml());
							this.isFragmentCache = (mceHtml !== outerHtml || outerHtml !== fullHtml);
						} else {
							this.isFragmentCache = false;
						}
						//
						var retValue = this.isFragmentCache;
						//
					} else {
						//
						console.log(' OBJ > isFragment - Cache');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '388';
				}
			}
			return retValue;
		},
		isFragmentCache: null,
		hasMark: false,
		hasMarkPair: false,
		lineCnt: 0, // number of nodes
		mceHtml: function (blnArg1) {
			//
			// editor selection as html
			//	- blnArg1: raw version flag / do not update cache
			//
			var retValue = this.mceHtmlCache;
			//
			if (!_js.hasError()) {
				if (blnArg1 === undefined || blnArg1 === null || typeof blnArg1 !== 'boolean') {
					blnArg1 = false;
				}
				try {
					switch (true) {
						case (isNull(retValue) && !blnArg1):
							//
							console.log(' OBJ > mceHtml - Encoded');
							//
							this.mceHtmlCache = regEncode(editor.selection.getContent({
								format: 'html'
							}));
							//
							retValue = this.mceHtmlCache;
							//
							break;
						case (blnArg1):
							//
							console.log(' OBJ > mceHtml - Raw');
							//
							retValue = editor.selection.getContent({
								format: 'html'
							});
							//
							break;
						default:
							//
							console.log(' OBJ > mceHtml - Cache');
							//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '437';
				}
			}
			//
			return retValue;
		},
		mceHtmlCache: null,
		mceNode: undefined, //	selection node
		mceNodeName: function () {
			//
			// html node name
			//
			var retValue = this.mceNodeNameCache;
			//
			if (!_js.hasError()) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > mceNodeName - New');
						//
						this.mceNodeNameCache = this.mceNode.nodeName.toLowerCase();
						//
						retValue = this.mceNodeNameCache;
						//
					} else {
						//
						console.log(' OBJ > mceNodeName - Cache');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '468';
				}
			}
			//
			return retValue;
		},
		mceNodeNameCache: null,
		mceText: function () {
			//
			// html node name
			//
			var retValue = this.mceTextCache;
			//
			if (!_js.hasError()) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > mceText - New');
						//
						this.mceTextCache = editor.selection.getContent({
							format: 'text'
						});
						//
						retValue = this.mceTextCache;
						//
					} else {
						//
						console.log(' OBJ > mceText - Cache');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '500';
				}
			}
			//
			return retValue;
		},
		mceTextCache: null,
		outerHtml: function (blnArg1) {
			//
			// html node name
			//	- blnArg1: raw version flag / do not update cache
			//
			var retValue = this.outerHtmlCache;
			//
			if (!_js.hasError()) {
				if (blnArg1 === undefined || blnArg1 === null || typeof blnArg1 !== 'boolean') {
					blnArg1 = false;
				}
				try {
					switch (true) {
						case (isNull(retValue) && !blnArg1):
							//
							console.log(' OBJ > outerHtml - Encoded');
							//
							if (this.mceNodeName() == 'body') {
								this.outerHtmlCache = regEncode(this.mceHtml());
							} else {
								this.outerHtmlCache = regEncode(this.proMceTags(editor.dom.getOuterHTML(this.mceNode)));
							}							
							//
							retValue = this.outerHtmlCache;
							//
							break;
						case (blnArg1):
							//
							console.log(' OBJ > outerHtml - Raw');
							//
							if (this.mceNodeName() == 'body') {
								retValue = this.mceHtml();
							} else {
								retValue = this.proMceTags(editor.dom.getOuterHTML(this.mceNode));
							}
							break;
						default:
							//
							console.log(' OBJ > outerHtml - Cache');
							//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '550';
				}
			}
			//
			return retValue;
		},
		outerHtmlCache: null,
		proAddMark: function () {
			//
			// add mark to selected content
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log(' OBJ > proAddMark');
				//
				try {
					var mrkExp;
					if (!isEmpty(this.fullHtml().match(/<(em|i|strong)>/)) && !isEmpty(this.datElements.match(/<(em|i|strong)>/))) {
						console.log('     - Mark -');
						var mceTag = getRegExpValue(this.fullHtml(), '<(em|i|kbd|strong|sub|sup|s\b|u)>', 's', 1);
						var mrkTag = getRegExpValue(this.datElements, '^<(.*?)>', 's', 1);
						mrkExp = new RegExp('(<|<\/)' + mceTag + '(>)', 'g');						
						//
						retValue = this.fullHtml().replace(mrkExp, '$1' + mrkTag + '$2');
						//
					} else {
						console.log('     - Mark -');
						var preTag = this.datElements.substring(0, this.datElements.indexOf(','));
						var pstTag = this.datElements.substring(this.datElements.indexOf(',') + 1);
						mrkExp = new RegExp('(' + this.mceHtml().trim() + ')', 'g');						
						//
						retValue = this.fullHtml().replace(mrkExp, preTag + '$1' + pstTag);
						//						
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '588';
				}
			}
			//
			return retValue;
		},
		proBldClassElements: function (strArg1, strArg2) {
			//
			// build class elements process
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log(' OBJ > proBldClassElements');
				console.log('     - strArg1: ' + strArg1);
				console.log('     - strArg2: ' + strArg2);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string') {
						throw new Error('Required argument/s missing.');
					}
					var datArrayData = strArg2.replace(/:\s+/g, ':').replace(/\s+/g, '*');
					var datArray = datArrayData.split('*');
					var datArrayItem;
					var datExp;
					var idx = 0;
					for (; datArray[idx];) {
						datArrayItem = (datArray[idx].substring(0, datArray[idx].indexOf(':') + 1)).trim();
						switch (true) {
							case (!isEmpty(datArrayItem.match(/txt:|bkg:/g))):
								// txt:/bkg: in the element syntax
								datArrayItem = (datArrayItem.substring(0, datArrayItem.indexOf(':') + 1));
								datExp = new RegExp('(' + datArrayItem + '.*?)(\\s|$)', 'g');
								break;
							case (!isEmpty(datArrayItem.match(/-|\+/g))):
								// - / + in the element syntax
								datArrayItem = datArrayItem.replace(/(-|\+).*$/, '');
								datExp = new RegExp(datArrayItem + '*?[\\s\\S]*?\\s|' + datArrayItem + '*?[\\s\\S]*?$', 'g');
								break;
							case (!isEmpty(datArrayItem.match(/fnt:(sans|serif|mono|cursive|fantasy)/g))):
								// element is a font
								datExp = new RegExp(/(fnt:sans|fnt:serif|fnt:mono|fnt:cursive|fnt:fantasy)(\s|$)/, 'g');
								break;
							default:
								// element is a single word
								datArrayItem = (datArrayItem.substring(0, datArrayItem.indexOf(':') + 1));
								datExp = new RegExp(datArrayItem + '...(?!(-|\\+)).*?(\\s|$)', 'g');
						}
						strArg1 = strArg1.replace(datExp, '').trim();
						idx++;
					}
					//
					retValue = this.proSrtElements(strArg1 + ' ' + strArg2);
					//
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '645';
				}
			}
			//
			return retValue;
		},
		proBldStyleElements: function (strArg1, strArg2) {
			//
			// build style elements process
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log(' OBJ > proBldStyleElements');
				console.log('     - strArg1: ' + strArg1);
				console.log('     - strArg1: ' + strArg2);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string') {
						throw new Error('Required argument/s missing.');
					}
					var datArrayData = strArg2.replace(/:\s+/g, ':').replace(/\s+/g, '*');
					var datArray = datArrayData.split('*');
					var datArrayItem;
					var datExp;
					var idx = 0;
					for (; datArray[idx];) {
						datArrayItem = (datArray[idx].substring(0, datArray[idx].indexOf(':') + 1)).trim();
						datExp = new RegExp('(?<!-)' + datArrayItem + '.*?;', 'g');
						//
						strArg1 = strArg1.replace(datExp, '').trim();
						idx++;
					}
					//
					retValue = this.proSrtElements(strArg1 + ' ' + strArg2);
					//
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '684';
				}
			}
			//
			return retValue;
		},
		proColorElements: function () {
			//
			// process color elements
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log(' OBJ > proColorElements');
				//
				try {
					if (!this.hasDatColor()) {
						throw new Error('Missing required color data elements.');
					}
					if (this.isFragment()) {
						throw new Error('Content incorrectly identifid as a fragment.');
					}
					var newAttr;
					if (!isEmpty(this.datElements.match(/;/))) {
						newAttr = 'style';
					} else {
						newAttr = 'class';
					}
					var datElements = (this.datBgColor() + ' ' + this.datFgColor()).trim();
					var mceTag = getRegExpValue(this.outerHtml(), '^<span.*?>', 's');
					if (isEmpty(mceTag)) {
						mceTag = getRegExpValue(this.innerHtml(), '^<span.*?>', 's');
					}
					if (isEmpty(mceTag)) {
						mceTag = getRegExpValue(this.fullHtml(), '^<(p|h[1-6]|div|li|td|th).*?>', 's');
					}
					//
					var mceElements = getRegExpValue(mceTag, newAttr + '.*?"(.*?)"', 's', 1);
					var newElements = '';
					var newTag = '';
					var newUpdate = this.fullHtml();
					if (this.datAction !== 'replace') {
						//
						console.log('     - Mark -');
						//
						var spanKey = new RegExp('<span.*?>' + this.mceHtml() + '<\/span>', 'g');
						switch (true) {
							case (isEmpty(newUpdate.match(spanKey))):
								//
								console.log('     - Mark -');
								//
								//var newHtml = '<span ' + newAttr + '="' + this.proSrtElements(this.datElements) + '">' + this.mceHtml() + '</span>';
								var newHtml = '<span ' + newAttr + '="' + this.proSrtElements(datElements) + '">' + this.mceHtml() + '</span>';
								//
								retValue = newUpdate.replace(this.mceHtml(), newHtml);
								//
								break;
							case (isEmpty(mceTag.match(newAttr))):
								//
								console.log('     - Mark -');
								//
								newTag = mceTag.replace('>', ' ' + newAttr + '="' + datElements + '">');
								newTag = this.proOrderClassStyle(newTag);
								if (!isEmpty(newTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
									newTag = this.proJoinElements(newTag, newAttr);
								}
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							default:
								//
								console.log('     - Mark -');
								//
								var purgeList = this.proSrtElements(mceElements);
								var purgedElements = this.proPurgeElements(purgeList, datElements);
								newElements = this.proSrtElements(purgedElements + ' ' + datElements);
								newTag = mceTag.replace(mceElements, newElements);
								newTag = this.proOrderClassStyle(newTag);
								if (!isEmpty(newTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
									newTag = this.proJoinElements(newTag, newAttr);
								}
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
						}
					} else {
						//
						console.log('     - Mark -');
						//
						var spanKey = new RegExp(newAttr + '.*?"(.*?)"', 'g');
						switch (true) {
							case (isEmpty(mceTag.match(spanKey)) && this.lineCnt == 1):
								throw new Error('The tag does not have ' + newAttr + ' elements to replace.');
							case (isEmpty(mceTag.match(spanKey))):
								//
								console.log('     - Mark -');
								//
								retValue = newUpdate;
								//
								break;
							default:
								//
								console.log('     - Mark -');
								//
								mceElements = getRegExpValue(mceTag, newAttr + '.*?"(.*?)"', 'i', 1);
								newTag = mceTag.replace(mceElements, datElements);
								newTag = this.proOrderClassStyle(newTag);
								if (!isEmpty(newTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
									newTag = this.proJoinElements(newTag, newAttr);
								}
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
						}
						//
					}
					//
					// purge color element/s from datElements
					//
					var purgeItems = datElements;
					var purgeList = this.proSrtElements(this.datElements);
					this.datElements = this.proPurgeElements(purgeList, purgeItems);
					//
					this.datBgColorCache = null;
					this.datFgColorCache = null;
					//
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '814';
				}
			}
			//
			return retValue;
		},
		proFragment: function () {
			//
			// process html fragment
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log(' OBJ > proFragment');
				//
				try {
					//
					if (!this.isFragment()) {
						throw new Error('Content must be less than a full sentence/line.');
					}
					//
					// derive attribute from data
					//
					var newAttr;
					if (!isEmpty(this.datElements.match(/;/))) {
						newAttr = 'style';
					} else {
						newAttr = 'class';
					}
					//
					console.log('    - Mark -');
					//
					var datElements = this.proSrtElements(this.datElements)
					var expKey = '<span.*?>' + this.mceHtml() + '</span>';
					var spanTag = getRegExpValue(this.outerHtml(), expKey, 'g');
					var mceElement = getRegExpValue(spanTag, '(class|style).*?"(.*?)"', 'i');
					var newElement = newAttr + '="' + datElements + '"';
					var newUpdate = this.fullHtml();
					//
					if (!isEmpty(spanTag)) {
						//
						// content fragment has span tag
						//
						if (this.datAction == 'replace') {
							//
							console.log('    - Mark -');
							//
							// replace action
							//
							retValue = newUpdate.replace(mceElement, newElement);
							//
						} else {
							//
							// apply/blend action
							//
							var bldElements;
							var newSpanTag;
							var classTag;
							var styleTag;
							switch (true) {
								case (newAttr == 'style' && isEmpty(spanTag.match(/style/))):
									//
									console.log('    - Mark -');
									//
									// existing element is class, new is style
									//
									classTag = getRegExpValue(spanTag, 'class.*?".*?"', 'i');
									newSpanTag = spanTag.replace(classTag, (classTag + ' style="' + datElements + '"'));
									//
									// on sucess, resolve any dups
									//
									if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
										newSpanTag = this.proJoinElements(newSpanTag, newAttr);
									}
									//
									retValue = newUpdate.replace(spanTag, newSpanTag);
									//
									break;
								case (newAttr == 'style'):
									//
									console.log('      - Mark -');
									//
									mceElement = getRegExpValue(spanTag, '(class|style).*?"(.*?)"', 'i', 2);
									bldElements = this.proBldStyleElements(mceElement, datElements);
									newSpanTag = spanTag.replace(mceElement, bldElements);
									if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
										newSpanTag = this.proJoinElements(newSpanTag, newAttr);
									}
									//
									retValue = newUpdate.replace(spanTag, newSpanTag);
									//
									break;
								case (newAttr == 'class' && isEmpty(spanTag.match(/class/))):
									//
									console.log('    - Mark -');
									//
									styleTag = getRegExpValue(spanTag, 'style.*?".*?"', 'i');
									newSpanTag = spanTag.replace(styleTag, ('class="' + datElements + '" ' + styleTag));
									if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
										newSpanTag = this.proJoinElements(newSpanTag, newAttr);
									}
									//
									retValue = newUpdate.replace(spanTag, newSpanTag);
									//
									break;
								case (newAttr == 'class'):
									//
									console.log('    - Mark -');
									//
									mceElement = getRegExpValue(spanTag, '(class|style).*?"(.*?)"', 'i', 2);
									bldElements = this.proBldClassElements(mceElement, datElements);
									newSpanTag = spanTag.replace(mceElement, bldElements);
									if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
										newSpanTag = this.proJoinElements(newSpanTag, newAttr);
									}
									//
									retValue = newUpdate.replace(spanTag, newSpanTag);
									//
									break;
							}
						}
					} else {
						switch (true) {
							case (this.datAction == 'replace' && this.lineCnt == 1):
								throw new Error('The selection is NOT bound by a tag containing color elements.');
							case (this.datAction == 'replace'):
								//
								// skip in multi line
								//
								console.log('    - Mark -');
								//
								break;
							default:
								//
								console.log('     - Mark -');
								//
								var newHtml = '<span ' + newAttr + '="' + datElements + '">' + this.mceHtml() + '</span>';
								//
								var htmlExp;
								htmlExp = new RegExp('(>|\\b)' + (this.mceHtml()).trim() + '(<|\\b)', 'gi');
								newUpdate = regDecode(newUpdate);
								//
								console.log(' - newUpdate: ' + newUpdate);
								console.log(' -    htmExp: ' + htmlExp);
								console.log(' -   newHtml: ' + newHtml);
								//
								retValue = newUpdate.replace(htmlExp, '$1' + newHtml + '$2');
								//
								console.log(' -  retValue: ' + newHtml);
								//
						}
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '969';
				}
			}
			//
			return retValue;
		},
		proJoinElements: function (strArg1, strArg2) {
			//
			// join elements
			//	- strArg1: tag containing mixed elements (class & style)
			//	- strArg2: element to keep (class|style)
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log(' OBJ > proJoinElements');
				console.log('     - strArg1: ' + strArg1);
				console.log('     - strArg2: ' + strArg2);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string') {
						throw new Error('Required argument/s missing.');
					}
					var bgClassColor = getRegExpValue(strArg1, '(bkg.*?)(\\s|")', 's', 1);
					var fgClassColor = getRegExpValue(strArg1, '(txt.*?)(\\s|")', 's', 1);
					var bgStyleColor = getRegExpValue(strArg1, 'background-color:\\s(.*?)(\\s|")', 's', 1);
					var fgStyleColor = getRegExpValue(strArg1, '(\\s|")color:\\s(.*?)(\\s|")', 's', 2);
					var newElements = '';
					if (strArg2 == 'class') {
						//
						console.log('     - Mark -');
						//
						var styleElements = getRegExpValue(strArg1, 'style="(.*?)"', 's', 1);
						var styleBgElement = getRegExpValue(strArg1, 'background-color.*?;', 's');
						var styleFgElement = getRegExpValue(strArg1, '(?<!-)color:.*?;', 's');
						newElements = styleElements;
						if (!isEmpty(bgClassColor) && !isEmpty(bgStyleColor)) {
							newElements = newElements.replace(styleBgElement, '').replace(/\s+/g, ' ').trim();
						}
						if (!isEmpty(fgClassColor) && !isEmpty(fgStyleColor)) {
							newElements = newElements.replace(styleFgElement, '').replace(/\s+/g, ' ').trim();
						}
						retValue = strArg1.replace(styleElements, newElements);
						//
						retValue = retValue.replace(/\sstyle=""/, '');
						//
					} else {
						//
						console.log('    - Mark -');
						//
						var classElements = getRegExpValue(strArg1, 'class="(.*?)"', 's', 1);
						var classBgElement = getRegExpValue(strArg1, '(bkg:.*?)(\\s|")', 's', 1);
						var classFgElement = getRegExpValue(strArg1, '(txt:.*?)(\\s|")', 's', 1);
						newElements = classElements;
						if (!isEmpty(bgClassColor) && !isEmpty(bgStyleColor)) {
							newElements = newElements.replace(classBgElement, '').replace(/\s+/g, ' ').trim();
						}
						if (!isEmpty(fgClassColor) && !isEmpty(fgStyleColor)) {
							newElements = newElements.replace(classFgElement, '').replace(/\s+/g, ' ').trim();
						}
						retValue = strArg1.replace(classElements, newElements);
						//
						retValue = retValue.replace(/\sclass=""/, '');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '1037';
				}
			}
			//
			return retValue;
		},
		proMceTags: function (strArg1) {
			//
			// parce html for mce tags
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log('OBJ > proMceTags');
				console.log('    - strArg1: ' + strArg1);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
						throw new Error('Required argument/s missing.');
					}
					if (!isEmpty(strArg1.match(/-mce-/g))) {
						var expMceTags = new RegExp(/.data-mce-style.*?".*?"|<br data-mce-bogus.*?".*?">/, 'g');
						//
						retValue = strArg1.replace(expMceTags, '');
						//
					} else {
						//
						retValue = strArg1;
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '1070';
				}
			}
			//
			return retValue;
		},
		proOrderClassStyle: function (strArg1) {
			//
			// order elements as class="" style=""
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log('OBJ > proOrderClassStyle');
				console.log('    - strArg1: ' + strArg1);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
						throw new Error('Required argument/s missing.');
					}
					//
					retValue = strArg1;
					//
					var tagElements = getRegExpValue(strArg1, '^<.*?>', 'i');
					var cntElements = 0;
					if (!isEmpty(tagElements.match(/(class|style).*?"(.*?)"/g))) {
						cntElements = tagElements.match(/(class|style).*?"(.*?)"/g).length;
					}
					if (cntElements == 2) {
						if (tagElements.indexOf('class') > tagElements.indexOf('style')) {
							var tagClass = getRegExpValue(tagElements, 'class.*?(".*?")', 'i');
							var tagStyle = getRegExpValue(tagElements, 'style.*?(".*?")', 'i');
							var tagElementsUpdate = tagElements.replace(tagClass, '###2###').replace(tagStyle, '###1###');
							tagElementsUpdate = tagElementsUpdate.replace('###1###', tagClass).replace('###2###', tagStyle);
							//
							retValue = strArg1.replace(tagElements, tagElementsUpdate);
							//
						}
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '1112';
				}
			}
			//
			return retValue;
		},
		proPurgeElements: function (strArg1, strArg2) {
			//
			// removed selected items from strArg1
			//	- strArg1: existing elements
			//  - strArg2: new elements (new replaces existing on core match)
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log('OBJ > proPurgeElements');
				console.log('    - strArg1: ' + strArg1);
				console.log('    - strArg2: ' + strArg2);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string') {
						throw new Error('Required argument/s missing.');
					}
					var datItem;
					var idx = 0;
					var itmArray = strToArray(strArg2);
					var itmExp;
					var itmKey;
					for (; itmArray[idx];) {
						datItem = itmArray[idx];
						itmKey = datItem.substring(0, datItem.indexOf(':') + 1);
						if (isEmpty(datItem.match(/;/))) {
							itmExp = new RegExp(itmKey + '.*?(\\s|$)', 'g');
						} else {
							if (itmKey == 'color:') {
								itmExp = new RegExp('(?<!-)' + itmKey + '.*?\\s.*?(\\s|$)', 'g');
							} else {
								itmExp = new RegExp(itmKey + '.*?\\s.*?(\\s|$)', 'g');
							}
						}
						strArg1 = strArg1.replace(itmExp, '');
						idx++;
					}
					//
					retValue = strArg1;
					//
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '1161';
				}
			}
			//
			return retValue;
		},
		proSrtElements: function (strArg1) {
			//
			// sort style elements provided as argument
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log('OBJ > proSrtElements');
				console.log('    - strArg1: ' + strArg1);
				//
				try {
					//
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
						throw new Error('Required argument missing.');
					}
					var cboArray = strToArray(strArg1);
					cboArray.sort();
					var uniArray = cboArray.filter(function onlyUnique(value, index, self) {
						return self.indexOf(value) === index;
					});
					//
					retValue = (uniArray.join(' ')).trim();
					//
					if (!isEmpty(retValue.match(/;/))) {
						//
						retValue = retValue.replace(/:(\S)/g, ': $1');
						//
					}
				} catch (e) {
					_js.ms = e.message;
					_js.ln = '1198';
				}
			}
			//
			return retValue;
		},
		proStdElements: function () {
			//
			// process standard elements
			//
			var retValue = '';
			//
			if (!_js.hasError()) {
				//
				console.log('OBJ > proStdElements');
				//
				try {
					if (this.isFragment()) {
						throw new Error('Content identifid as a fragment and can not be processed.');
					}
					var newAttr;
					if (!isEmpty(this.datElements.match(/;/))) {
						newAttr = 'style';
					} else {
						newAttr = 'class';
					}
					var datElements = this.datElements.trim();
					var mceTag = getRegExpValue(this.fullHtml(), '^<(p|h[1-6]|div|li|td|th).*?>', 's');
					var mceElements = getRegExpValue(mceTag, newAttr + '.*?"(.*?)"', 's', 1);
					var newElements;
					var newTag;
					var newUpdate = this.fullHtml();
					if (this.datAction !== 'replace') {
						//
						console.log('    - Mark -');
						//
						if (isEmpty(mceTag.match(newAttr))) {
							newTag = mceTag.replace('>', ' ' + newAttr + '="' + datElements + '">');
						} else {
							var proList = this.proPurgeElements(mceElements, datElements) + ' ' + datElements;
							newElements = this.proSrtElements(proList);
							newTag = mceTag.replace(mceElements, newElements);
						}
						//
						newTag = this.proOrderClassStyle(newTag);
						//
						retValue = newUpdate.replace(mceTag, newTag);
						//
					} else {
						//
						console.log('    - Mark -');
						//
						switch (true) {
							case (isEmpty(mceTag.match(/(class|style).*?"(.*?)"/i)) && this.lineCnt == 1):
								throw new Error('The tag does not have elements to replace.');
							case (isEmpty(mceTag.match(newAttr)) && this.lineCnt == 1):
								throw new Error('The tag does not have ' + newAttr + ' elements to replace.');
							case (isEmpty(mceTag.match(/(class|style).*?"(.*?)"/i))):
								// skip
								break;
							case (isEmpty(mceTag.match(newAttr))):
								// skip
								break;
							default:
								mceElements = getRegExpValue(mceTag, newAttr + '.*?"(.*?)"', 'i', 1);
								newElements = this.proSrtElements(this.datElements);
								newTag = mceTag.replace(mceElements, newElements);
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
						}
						//
					}
				} catch (e) {
					_js.hd = 'MESSAGE';
					_js.ms = e.message;
					_js.ln = '1275';
				}
			}
			//
			return retValue;
		}
	};
	function getRegExpValue(strArg1, strArg2, strArg3, numArg4) {
		//
		// Return RegExp value
		//	strArg1 - content
		//	strArg2	- expression
		//	strArg3 - scope
		//	numArg4	- group
		//
		var retValue = '';
		//
		if (!_js.hasError()) {
			//
			console.log('FN  > getRegExpValue');
			console.log('    - strArg1: ' + strArg1);
			console.log('    - strArg2: ' + strArg2);
			console.log('    - strArg3: ' + strArg3);
			console.log('    - numArg4: ' + numArg4);
			//
			try {
				if (strArg1 !== undefined || strArg1 !== null || typeof strArg1 === 'string' || strArg1.trim() !== '') {
					if (strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string' || strArg2.trim() == '') {
						throw new Error('Missing required argument/s.'); // regular expression
					}
					if (strArg3 === undefined || strArg3 === null || typeof strArg3 !== 'string') {
						strArg3 = ''; // regular expression scope
					}
					if (numArg4 === undefined || numArg4 === null || typeof numArg4 !== 'number') {
						numArg4 = 0; // group #
					}
					if (isEmpty(strArg3.match(/g|m|i|x|X|s|u|U|A|j|D/g))) {
						numArg4 = 0;
						strArg3 = 'g';
					}
					if (numArg4 > 0 && strArg3 == 'g') {
						strArg3 = 'i';
					}
					var regExp = new RegExp(strArg2, strArg3);
					if (!isEmpty(strArg1.match(regExp))) {
						//
						retValue = strArg1.match(regExp)[numArg4];
						//
					}
				}
				//
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '1328';
			}
		}
		//
		return retValue;
	}
	function regDecode(strArg1) {
		//
		// decode brackets, parentheses, &nbsp; for regex
		//
		var retValue = '';
		//
		if (!_js.hasError()) {
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg1.trim() == '') {
					throw new Error('Missing required argument.');
				}
				var decodeVal = strArg1;
				if (!isEmpty(strArg1.match(/~#A0~/))) {
					decodeVal = decodeVal.replace(/~#A0~/g, '&nbsp;');
				}
				if (!isEmpty(strArg1.match(/#5B~/))) {
					decodeVal = decodeVal.replace(/#5B~/g, '[');
				}
				if (!isEmpty(strArg1.match(/~#5D/))) {
					decodeVal = decodeVal.replace(/~#5D/g, ']');
				}
				if (!isEmpty(strArg1.match(/#28~/))) {
					decodeVal = decodeVal.replace(/#28~/g, '(');
				}
				if (!isEmpty(strArg1.match(/~#29/))) {
					decodeVal = decodeVal.replace(/~#29/g, ')');
				}
				retValue = decodeVal;
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '1364';
			}
		}
		//
		return retValue;
	}
	function regEncode(strArg1) {
		//
		// encode brackets, parentheses, &nbsp; for regex
		//
		var retValue = '';
		//
		if (!_js.hasError()) {
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg1.trim() == '') {
					throw new Error('Missing required argument.');
				}
				var encodeVal = strArg1;
				if (!isEmpty(strArg1.match(/[\u00A0]|\&nbsp;/))) {
					encodeVal = encodeVal.replace(/[\u00A0]|\&nbsp;/g, '~#A0~');
				}
				if (!isEmpty(strArg1.match(/\[/))) {
					encodeVal = encodeVal.replace('[', '#5B~');
				}
				if (!isEmpty(strArg1.match(/\]/))) {
					encodeVal = encodeVal.replace(']', '~#5D');
				}
				if (!isEmpty(strArg1.match(/\(/))) {
					encodeVal = encodeVal.replace('(', '#28~');
				}
				if (!isEmpty(strArg1.match(/\)/))) {
					encodeVal = encodeVal.replace(')', '~#29');
				}
				retValue = encodeVal;
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '1400';
			}
		}
		//
		return retValue;
	}
	function noHtmlTags(strArg1) {
		//
		// strip html from arg
		//
		var retValue = '';
		//
		if (!_js.hasError()) {
			//
			console.log('FN  > noHtmlTags');
			console.log('    - strArg1: ' + strArg1);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg1 == '') {
					throw new Error('Missing required argument.'); // value to evaluate
				}
				//
				retValue = strArg1.replace(/(<([^>]+)>)/ig, '');
				//
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '1426';
			}
		}
		//
		return retValue;
	}
	function isEmpty(strArg1) {
		//
		// check for empty string
		//
		return (!strArg1 || 0 === strArg1.length);
	}
	function isNull(strArg1) {
		//
		// check for null
		//
		return (strArg1 === null);
	}
	function mceReady() {
		//
		// validate content is selected
		//
		var retValue = false;
		try {
			//
			console.log('FN  > mceReady');
			//
			if (isEmpty(editor.selection.getContent({
					format: 'text'
				}))) {
				throw new Error('Content to modify is not selected.');
			}
			//
			retValue = true;
			//
		} catch (e) {
			_js.hd = 'MESSAGE';
			_js.ms = e.message;
			_js.ln = '1464';
		}
		//
		return retValue;
	}
	function padNum(numArg1, numArg2) {
		switch (true) {
			case (numArg1 === undefined || numArg1 === null || typeof numArg1 !== 'number'):
				rtnValue = '0';
				break;
			case (numArg2 === undefined || numArg2 === null || typeof numArg2 !== 'number'):
				rtnValue = numArg1.toString();
				break;
			default:
				var strNum = numArg1.toString();
				var rtnValue = strNum;
				if (strNum.length < numArg2) {
					var pad = '0'.repeat(numArg2);
					rtnValue = (pad + strNum).slice(-numArg2);
				}
		}
		return rtnValue;
	}
	function randomID(numArg1) {
		//
		// generate / return radom ID string
		// 	numArg1 - length of ID
		//
		if (numArg1 === undefined || numArg1 === null || typeof numArg1 !== 'number' || numArg1 < 1 || numArg1 > 20) {
			numArg1 = 5;
		}
		//
		return (Math.random().toString(26) + "000000000").substr(4, numArg1);
	}
	function strToArray(strArg1, expArg2) {
		//
		// load string items into array
		//	strArg1 - string list
		//	expArg2 - regular expression to split list
		//
		var retValue = '';
		//
		if (!_js.hasError()) {
			//
			console.log('FN  > strToArray');
			console.log('    - strArg1: ' + strArg1);
			console.log('    - expArg2: ' + expArg2);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
					throw new Error('Missing required argument.');
				}
				if (expArg2 === undefined || expArg2 === null || typeof expArg2 !== 'string') {
					expArg2 = '\\s+';
				}
				var expArray = new RegExp(expArg2, 'g');
				var datArrayData = strArg1.trim().replace(expArray, '*');
				datArrayData = datArrayData.replace(/:\*/g, ': ').trim();
				//
				retValue = datArrayData.split('*');
				//
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '1527';
			}
		}
		//
		return retValue;
	}
	function strToNode(strArg1) {
		//
		// build node from html string
		//	strArg1 - full html string
		//
		var retValue = '';
		//
		if (!_js.hasError()) {
			//
			console.log('FN  > strToNode');
			console.log('    - strArg1: ' + strArg1);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
					throw new Error('Missing required argument.');
				}
				var blkTag = getRegExpValue(strArg1, '^<(div|h[1-6]|li|p|td|th).*?>', 'i');
				if (isEmpty(blkTag)) {
					throw new Error('Invalid HTML argument.');
				}
				var blkTagName = getRegExpValue(strArg1, '^<(div|h[1-6]|li|p|td|th).*?>', 'i', 1);
				var blkNode = document.createElement(blkTagName);
				var blkAttr;
				if (!isEmpty(blkTag.match(/id/i))) {
					blkAttr = document.createAttribute('id');
					blkAttr.value = getRegExpValue(blkTag, 'id.*?"(.*?)"', 'i', 1);
					blkNode.setAttributeNode(blkAttr);
				}
				if (!isEmpty(blkTag.match(/style/))) {
					blkAttr = document.createAttribute('style');
					blkAttr.value = getRegExpValue(blkTag, 'style.*?"(.*?)"', 'i', 1);
					blkNode.setAttributeNode(blkAttr);
				}
				if (!isEmpty(blkTag.match(/class/))) {
					blkAttr = document.createAttribute('class');
					blkAttr.value = getRegExpValue(blkTag, 'class.*?"(.*?)"', 'i', 1);
					blkNode.setAttributeNode(blkAttr);
				}
				var blkEndTag = new RegExp('<\/' + blkTagName + '>$', 'g');
				blkNode.innerHtml = strArg1.replace(blkTag, '').replace(blkEndTag, '');
				//
				retValue = blkNode;
				//
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '1578';
			}
		}
		//
		return retValue;
	}
	function stripOuterTags(strArg1) {
		//
		// strip html outer tags
		// 	strArg1 - html string
		//
		var retValue = '';
		//
		if (!_js.hasError()) {
			//
			console.log('FN  > stripOuterTags');
			console.log('    - strArg1: ' + strArg1);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
					throw new Error('Missing required argument.');
				}
				//
				retValue = strArg1.replace(/^<(p|h[1-6]|div|li|td|th).*?>|<\/(p|h[1-6]|div|li|td|th)>/g, '');
				//
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '1605';
			}
		}
		//
		return retValue;
	}
	function matchCnt(arrArg1) {
		//
		// check for null
		//
		var retValue;
		if (arrArg1 === undefined || arrArg1 === null || !Array.isArray(arrArg1)) {
			retValue = 0;
		} else {
			retValue = arrArg1.length;
		}
		return retValue;
	}
	function frmInit() {
		//
		// init object
		//
		console.log(' ');
		console.log('FN  > frmInit');
		console.log(' ');
		//
		var edSelect = editor.selection.getContent({
			format: 'html'
		});
		oDoc.lineCnt = 1;
		// count selected end tags
		if (!isEmpty(edSelect.match(/<\/(?!ol|span|table|thead|tbody|tfoot|tr|ul|em|i|kbd|strong|sub|sup|s\b|u).*?>/g))) {
			oDoc.lineCnt = edSelect.match(/<\/(?!ol|span|table|thead|tbody|tfoot|tr|ul|em|i|kbd|strong|sub|sup|s\b|u).*?>/g).length;
		}
		oDoc.initNode(editor.selection.getNode());
		//
		return;
	}
	//
	// controlling function
	//
	function frmSubmit() {
		//
		// process request
		//
		console.log(' ');
		console.log('FN  > frmSubmit');
		console.log(' ');
		//
		// copy doc to var, expose all &nbsp;
		//
		var htmlDoc = editor.getContent().replace(/[\u00A0]/g, '&nbsp;');
		try {
			// validate selection
			//
			var decodeFullHtml = '';
			var decodeUpdateHtml = '';
			var fullHtml;
			var htmlUpdate = '';
			//
			if (matchCnt(oDoc.datElements.match(/:/g)) !== matchCnt(oDoc.datElements.match(/;/g)) && matchCnt(oDoc.datElements.match(/;/g)) > 0) {
				_js.hd = 'MESSAGE';
				throw new Error('A mixture of class and style input data detected.');
			} else if (isEmpty(oDoc.datElements)) {
				_js.hd = 'MESSAGE';
				throw new Error('Missing input data.');
			} else if (oDoc.datAttribute == 'class' && !isEmpty(oDoc.datElements.match(/;/g))) {
				_js.hd = 'MESSAGE';
				throw new Error('The selected element is class, but the input is formatted as a style.');
			} else if (oDoc.datAttribute == 'style' && isEmpty(oDoc.datElements.match(/;/g))) {
				_js.hd = 'MESSAGE';
				throw new Error('The selected element is style, but the input is formatted as a class.');
			}
			if (oDoc.lineCnt == 1) {
				//
				console.log('*** * Process Single Line * ***');
				//
				fullHtml = oDoc.fullHtml();
				//
				switch (true) {
					case (_js.hasError()):
						//
						// error
						//
						break;
					case (!isEmpty(oDoc.datElements.match(/<(em|i|kbd|strong|sub|sup|s\b|u)>/))):
						console.log('     - Mark -');
						htmlUpdate = oDoc.proAddMark();
						break;
					case (oDoc.isFragment()):
						console.log('    - Mark -');
						htmlUpdate = regDecode(oDoc.proFragment());
						break;
					case (oDoc.hasDatColor()):
						console.log('    - Mark -');
						htmlUpdate = oDoc.proColorElements();
						if (!isEmpty(oDoc.datElements) && !_js.hasError()) {
							oDoc.fullHtmlCache = htmlUpdate;
							htmlUpdate = regDecode(oDoc.proStdElements());
						} else {
							htmlUpdate = regDecode(htmlUpdate);
						}
						break;
					default:
						console.log('    - Mark -');
						htmlUpdate = regDecode(oDoc.proStdElements());
				}
				//
				if (!_js.hasError()) {
					//
					decodeFullHtml = regDecode(fullHtml);
					decodeUpdateHtml = regDecode(htmlUpdate);
					//
					console.log('SRC > ' + decodeFullHtml);
					console.log('UPD > ' + decodeUpdateHtml);
					//
					// write content back
					//
					htmlDoc = htmlDoc.replace(decodeFullHtml, decodeUpdateHtml);
					//
					try {
						//
						console.log('    - Single Line Complete -');
						//
						editor.setContent(htmlDoc);
						editor.undoManager.add();
					} catch (e) {
						_js.ms = e.message;
						_js.ln = '1733';
					}
				}
			} else {
				//
				console.log('*** * Process Multi Line * ***');
				//
				// load block content into array
				var blkArray = strToArray(oDoc.blkContent(), '(\\s*)(\\r\\n|\\n|\\r)(\\s*)');
				var blkNode;
				var blkHtmlItem;
				var datActionCache = oDoc.datAction;
				var datAttributeCache = oDoc.datAttribute;
				var datElementsCache = oDoc.datElements;
				var idx = 0;
				for (; blkArray[idx];) {
					blkHtmlItem = blkArray[idx];
					switch (true) {
						case (_js.hasError()):
							// error
							idx = 9999;
							break;
						case (!isEmpty(blkHtmlItem.match(/<.{1,3}><\/.{1,3}>/))):
							// skip tags with no content ie <p></p>
							break;
						case (!isEmpty(blkHtmlItem.match(/<.?ul|ol>/))):
							// skip ordered/unordered list
							break;
						case (!isEmpty(blkHtmlItem.match(/^<\/.*?>/))):
							// skip end tags </?>
							break;
						case (isEmpty(blkHtmlItem.match(/(class|style).*?"(.*?)"/i)) && datActionCache == 'replace'):
							// skip replace with empty doc element
							break;
						case (!isEmpty(blkHtmlItem.match(/<(table|tbody|thead|tfoot|tr)/))):
							// skip all table elements but th & td
							break;
						default:
							fullHtml = blkHtmlItem;
							blkNode = strToNode(blkHtmlItem);
							oDoc.initNode(blkNode, 'm');
							oDoc.datElements = datElementsCache;
							oDoc.fullHtmlCache = blkHtmlItem;
							oDoc.mceHtmlCache = stripOuterTags(blkHtmlItem);
							oDoc.innerHtmlCache = oDoc.mceHtmlCache;
							switch (true) {
								case (!isEmpty(oDoc.datElements.match(/<(em|i|kbd|strong|sub|sup|s\b|u)>/))):
									htmlUpdate = oDoc.proAddMark();
									break;
								case (oDoc.hasDatColor()):
									htmlUpdate = oDoc.proColorElements();
									if (!isEmpty(oDoc.datElements) && !_js.hasError()) {
										oDoc.fullHtmlCache = htmlUpdate;
										htmlUpdate = regDecode(oDoc.proStdElements());
									} else {
										htmlUpdate = regDecode(htmlUpdate);
									}
									break;
								default:
									htmlUpdate = oDoc.proStdElements();
							}
					}
					if (!_js.hasError() && !isEmpty(htmlUpdate)) {
						//
						decodeFullHtml = regDecode(fullHtml);
						decodeUpdateHtml = regDecode(htmlUpdate);
						//
						console.log(padNum(idx, 3) + ' > IDX');
						console.log('SRC > ' + decodeFullHtml);
						console.log('UPD > ' + decodeUpdateHtml);
						//
						// write content back
						//
						htmlDoc = htmlDoc.replace(decodeFullHtml, decodeUpdateHtml);
						//
					}
					//
					idx++;
					//
				}
				//
				// write content back
				//
				if (!_js.hasError()) {
					//
					try {
						editor.setContent(htmlDoc);
						editor.undoManager.add();
						//
						console.log('    - Multi Line Complete -');
						//
					} catch (e) {
						_js.ms = e.message;
						_js.ln = '1826';
					}
				}
			}
		} catch (e) {
			_js.ms = e.message;
			_js.ln = '1832';
		}
		if (_js.hasError()) {
			//
			_js.display();
			//
		}
		editor.focus();
		return;
	}
	//
	// button
	//
	editor.addButton('apply_txt_font', {
		type: 'splitbutton',
		title: 'Fonts',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkuMTcgMTUuNWg1LjY0bDEuMTQgM2gyLjA5bC01LjExLTEzaC0xLjg2bC01LjExIDEzaDIuMDlsMS4xMi0zek0xMiA3Ljk4bDIuMDcgNS41Mkg5LjkzTDEyIDcuOTh6TTIwIDJINGMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0wIDE4SDRWNGgxNnYxNnoiLz48L3N2Zz4=',
		onclick: function () {
			if (!mceReady()) {
				_js.display();
				editor.focus();				
			} else {
				console.clear();
				frmInit();		
				oDoc.datElements = 'fnt:serif';
				oDoc.datAction = 'blend';
				oDoc.datAttribute = 'class';
				//
				frmSubmit();
				//
			}
		},
		menu: [{
			icon: false,
			text: '•\xa0Sans',
			onclick: function () {
				if (!mceReady()) {
					_js.display();
					editor.focus();				
				} else {
					console.clear();
					frmInit();		
					oDoc.datElements = 'fnt:sans';
					oDoc.datAction = 'blend';
					oDoc.datAttribute = 'class';
					//
					frmSubmit();
					//
				}
			}
		}, {
			icon: false,
			text: '•\xa0Serif',
			onclick: function () {
				if (!mceReady()) {
					_js.display();
					editor.focus();				
				} else {
					console.clear();
					frmInit();		
					oDoc.datElements = 'fnt:serif';
					oDoc.datAction = 'blend';
					oDoc.datAttribute = 'class';
					//
					frmSubmit();
					//
				}
			}
		}, {
			icon: false,
			text: '•\xa0Mono',
			onclick: function () {
				if (!mceReady()) {
					_js.display();
					editor.focus();				
				} else {
					console.clear();
					frmInit();		
					oDoc.datElements = 'fnt:mono';
					oDoc.datAction = 'blend';
					oDoc.datAttribute = 'class';
					//
					frmSubmit();
					//
				}
			}
		}, {
			icon: false,
			text: '•\xa0Cursive',
			onclick: function () {
				if (!mceReady()) {
					_js.display();
					editor.focus();				
				} else {
					console.clear();
					frmInit();		
					oDoc.datElements = 'fnt:cursive';
					oDoc.datAction = 'blend';
					oDoc.datAttribute = 'class';
					//
					frmSubmit();
					//
				}
			}
		}, {
			icon: false,
			text: '•\xa0Fantasy',
			onclick: function () {
				if (!mceReady()) {
					_js.display();
					editor.focus();				
				} else {
					console.clear();
					frmInit();		
					oDoc.datElements = 'fnt:fantasy';
					oDoc.datAction = 'blend';
					oDoc.datAttribute = 'class';
					//
					frmSubmit();
					//
				}
			}
		}, ],
	});
});
/*
 * EOF: apply-text-font / plugin.js / 210614-1
 */
