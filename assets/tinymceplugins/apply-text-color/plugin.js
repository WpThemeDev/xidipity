/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-color plugin
 *
 * ###:  plugin.js
 * bld:  210614-1
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_color', function (editor) {
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
	//	SPECIFIC FUNCTIONS TO THIS PLUGIN	-----------------------------------
	//
	function namedColor(strArg1) {
		var retValue = '';
		if (strArg1 !== undefined || strArg1 !== null || typeof strArg1 === 'string' || strArg1.trim() !== '') {
			//
			strArg1 = strArg1.toLowerCase();
			//
			console.log('FN  > namedColor');
			console.log('    - strArg1: ' + strArg1);
			//
			try {
				var colorArray = [{
					'color': 'aliceblue',
					'hex': '#f0f8ff'
				}, {
					'color': 'antiquewhite',
					'hex': '#faebd7'
				}, {
					'color': 'aqua',
					'hex': '#00ffff'
				}, {
					'color': 'aquamarine',
					'hex': '#7fffd4'
				}, {
					'color': 'azure',
					'hex': '#f0ffff'
				}, {
					'color': 'beige',
					'hex': '#f5f5dc'
				}, {
					'color': 'bisque',
					'hex': '#ffe4c4'
				}, {
					'color': 'black',
					'hex': '#000000'
				}, {
					'color': 'blanchedalmond',
					'hex': '#ffebcd'
				}, {
					'color': 'blue',
					'hex': '#0000ff'
				}, {
					'color': 'blueviolet',
					'hex': '#8a2be2'
				}, {
					'color': 'brown',
					'hex': '#a52a2a'
				}, {
					'color': 'burlywood',
					'hex': '#deb887'
				}, {
					'color': 'cadetblue',
					'hex': '#5f9ea0'
				}, {
					'color': 'chartreuse',
					'hex': '#7fff00'
				}, {
					'color': 'chocolate',
					'hex': '#d2691e'
				}, {
					'color': 'coral',
					'hex': '#ff7f50'
				}, {
					'color': 'cornflowerblue',
					'hex': '#6495ed'
				}, {
					'color': 'cornsilk',
					'hex': '#fff8dc'
				}, {
					'color': 'crimson',
					'hex': '#dc143c'
				}, {
					'color': 'cyan',
					'hex': '#00ffff'
				}, {
					'color': 'darkblue',
					'hex': '#00008b'
				}, {
					'color': 'darkcyan',
					'hex': '#008b8b'
				}, {
					'color': 'darkgoldenrod',
					'hex': '#b8860b'
				}, {
					'color': 'darkgray',
					'hex': '#a9a9a9'
				}, {
					'color': 'darkgreen',
					'hex': '#006400'
				}, {
					'color': 'darkgrey',
					'hex': '#a9a9a9'
				}, {
					'color': 'darkkhaki',
					'hex': '#bdb76b'
				}, {
					'color': 'darkmagenta',
					'hex': '#8b008b'
				}, {
					'color': 'darkolivegreen',
					'hex': '#556b2f'
				}, {
					'color': 'darkorange',
					'hex': '#ff8c00'
				}, {
					'color': 'darkorchid',
					'hex': '#9932cc'
				}, {
					'color': 'darkred',
					'hex': '#8b0000'
				}, {
					'color': 'darksalmon',
					'hex': '#e9967a'
				}, {
					'color': 'darkseagreen',
					'hex': '#8fbc8f'
				}, {
					'color': 'darkslateblue',
					'hex': '#483d8b'
				}, {
					'color': 'darkslategray',
					'hex': '#2f4f4f'
				}, {
					'color': 'darkslategrey',
					'hex': '#2f4f4f'
				}, {
					'color': 'darkturquoise',
					'hex': '#00ced1'
				}, {
					'color': 'darkviolet',
					'hex': '#9400d3'
				}, {
					'color': 'deeppink',
					'hex': '#ff1493'
				}, {
					'color': 'deepskyblue',
					'hex': '#00bfff'
				}, {
					'color': 'dimgray',
					'hex': '#696969'
				}, {
					'color': 'dimgrey',
					'hex': '#696969'
				}, {
					'color': 'dodgerblue',
					'hex': '#1e90ff'
				}, {
					'color': 'firebrick',
					'hex': '#b22222'
				}, {
					'color': 'floralwhite',
					'hex': '#fffaf0'
				}, {
					'color': 'forestgreen',
					'hex': '#228b22'
				}, {
					'color': 'fuchsia',
					'hex': '#ff00ff'
				}, {
					'color': 'gainsboro',
					'hex': '#dcdcdc'
				}, {
					'color': 'ghostwhite',
					'hex': '#f8f8ff'
				}, {
					'color': 'gold',
					'hex': '#ffd700'
				}, {
					'color': 'goldenrod',
					'hex': '#daa520'
				}, {
					'color': 'gray',
					'hex': '#808080'
				}, {
					'color': 'green',
					'hex': '#008000'
				}, {
					'color': 'greenyellow',
					'hex': '#adff2f'
				}, {
					'color': 'grey',
					'hex': '#808080'
				}, {
					'color': 'honeydew',
					'hex': '#f0fff0'
				}, {
					'color': 'hotpink',
					'hex': '#ff69b4'
				}, {
					'color': 'indianred',
					'hex': '#cd5c5c'
				}, {
					'color': 'indigo',
					'hex': '#4b0082'
				}, {
					'color': 'ivory',
					'hex': '#fffff0'
				}, {
					'color': 'khaki',
					'hex': '#f0e68c'
				}, {
					'color': 'lavender',
					'hex': '#e6e6fa'
				}, {
					'color': 'lavenderblush',
					'hex': '#fff0f5'
				}, {
					'color': 'lawngreen',
					'hex': '#7cfc00'
				}, {
					'color': 'lemonchiffon',
					'hex': '#fffacd'
				}, {
					'color': 'lightblue',
					'hex': '#add8e6'
				}, {
					'color': 'lightcoral',
					'hex': '#f08080'
				}, {
					'color': 'lightcyan',
					'hex': '#e0ffff'
				}, {
					'color': 'lightgoldenrodyellow',
					'hex': '#fafad2'
				}, {
					'color': 'lightgray',
					'hex': '#d3d3d3'
				}, {
					'color': 'lightgreen',
					'hex': '#90ee90'
				}, {
					'color': 'lightgrey',
					'hex': '#d3d3d3'
				}, {
					'color': 'lightpink',
					'hex': '#ffb6c1'
				}, {
					'color': 'lightsalmon',
					'hex': '#ffa07a'
				}, {
					'color': 'lightseagreen',
					'hex': '#20b2aa'
				}, {
					'color': 'lightskyblue',
					'hex': '#87cefa'
				}, {
					'color': 'lightslategray',
					'hex': '#778899'
				}, {
					'color': 'lightslategrey',
					'hex': '#778899'
				}, {
					'color': 'lightsteelblue',
					'hex': '#b0c4de'
				}, {
					'color': 'lightyellow',
					'hex': '#ffffe0'
				}, {
					'color': 'lime',
					'hex': '#00ff00'
				}, {
					'color': 'limegreen',
					'hex': '#32cd32'
				}, {
					'color': 'linen',
					'hex': '#faf0e6'
				}, {
					'color': 'magenta',
					'hex': '#ff00ff'
				}, {
					'color': 'maroon',
					'hex': '#800000'
				}, {
					'color': 'mediumaquamarine',
					'hex': '#66cdaa'
				}, {
					'color': 'mediumblue',
					'hex': '#0000cd'
				}, {
					'color': 'mediumorchid',
					'hex': '#ba55d3'
				}, {
					'color': 'mediumpurple',
					'hex': '#9370db'
				}, {
					'color': 'mediumseagreen',
					'hex': '#3cb371'
				}, {
					'color': 'mediumslateblue',
					'hex': '#7b68ee'
				}, {
					'color': 'mediumspringgreen',
					'hex': '#00fa9a'
				}, {
					'color': 'mediumturquoise',
					'hex': '#48d1cc'
				}, {
					'color': 'mediumvioletred',
					'hex': '#c71585'
				}, {
					'color': 'midnightblue',
					'hex': '#191970'
				}, {
					'color': 'mintcream',
					'hex': '#f5fffa'
				}, {
					'color': 'mistyrose',
					'hex': '#ffe4e1'
				}, {
					'color': 'moccasin',
					'hex': '#ffe4b5'
				}, {
					'color': 'navajowhite',
					'hex': '#ffdead'
				}, {
					'color': 'navy',
					'hex': '#000080'
				}, {
					'color': 'oldlace',
					'hex': '#fdf5e6'
				}, {
					'color': 'olive',
					'hex': '#808000'
				}, {
					'color': 'olivedrab',
					'hex': '#6b8e23'
				}, {
					'color': 'orange',
					'hex': '#ffa500'
				}, {
					'color': 'orangered',
					'hex': '#ff4500'
				}, {
					'color': 'orchid',
					'hex': '#da70d6'
				}, {
					'color': 'palegoldenrod',
					'hex': '#eee8aa'
				}, {
					'color': 'palegreen',
					'hex': '#98fb98'
				}, {
					'color': 'paleturquoise',
					'hex': '#afeeee'
				}, {
					'color': 'palevioletred',
					'hex': '#db7093'
				}, {
					'color': 'papayawhip',
					'hex': '#ffefd5'
				}, {
					'color': 'peachpuff',
					'hex': '#ffdab9'
				}, {
					'color': 'peru',
					'hex': '#cd853f'
				}, {
					'color': 'pink',
					'hex': '#ffc0cb'
				}, {
					'color': 'plum',
					'hex': '#dda0dd'
				}, {
					'color': 'powderblue',
					'hex': '#b0e0e6'
				}, {
					'color': 'purple',
					'hex': '#800080'
				}, {
					'color': 'rebeccapurple',
					'hex': '#663399'
				}, {
					'color': 'red',
					'hex': '#ff0000'
				}, {
					'color': 'rosybrown',
					'hex': '#bc8f8f'
				}, {
					'color': 'royalblue',
					'hex': '#4169e1'
				}, {
					'color': 'saddlebrown',
					'hex': '#8b4513'
				}, {
					'color': 'salmon',
					'hex': '#fa8072'
				}, {
					'color': 'sandybrown',
					'hex': '#f4a460'
				}, {
					'color': 'seagreen',
					'hex': '#2e8b57'
				}, {
					'color': 'seashell',
					'hex': '#fff5ee'
				}, {
					'color': 'sienna',
					'hex': '#a0522d'
				}, {
					'color': 'silver',
					'hex': '#c0c0c0'
				}, {
					'color': 'skyblue',
					'hex': '#87ceeb'
				}, {
					'color': 'slateblue',
					'hex': '#6a5acd'
				}, {
					'color': 'slategray',
					'hex': '#708090'
				}, {
					'color': 'slategrey',
					'hex': '#708090'
				}, {
					'color': 'snow',
					'hex': '#fffafa'
				}, {
					'color': 'springgreen',
					'hex': '#00ff7f'
				}, {
					'color': 'steelblue',
					'hex': '#4682b4'
				}, {
					'color': 'tan',
					'hex': '#d2b48c'
				}, {
					'color': 'teal',
					'hex': '#008080'
				}, {
					'color': 'thistle',
					'hex': '#d8bfd8'
				}, {
					'color': 'tomato',
					'hex': '#ff6347'
				}, {
					'color': 'turquoise',
					'hex': '#40e0d0'
				}, {
					'color': 'violet',
					'hex': '#ee82ee'
				}, {
					'color': 'wheat',
					'hex': '#f5deb3'
				}, {
					'color': 'white',
					'hex': '#ffffff'
				}, {
					'color': 'whitesmoke',
					'hex': '#f5f5f5'
				}, {
					'color': 'yellow',
					'hex': '#ffff00'
				}, {
					'color': 'yellowgreen',
					'hex': '#9acd32'
				}];
				var idx = 0;
				for (; colorArray[idx];) {
					if (colorArray[idx]['color'] == strArg1) {
						retValue = colorArray[idx]['hex'];
						break;
					}
					idx++
				}
			} catch (e) {
				_js.ms = e.message;
				_js.ln = '2310';
			}
		}
		//
		return retValue;
		//
	}
	//
	//	-----------------------------------------------------------------------
	//
	// button
	//
	editor.addButton('apply_txt_color', {
		title: 'Apply Color',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OS43ODUgNDg5Ljc4NTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSA0Ni4wNTMgMS45NDkgTCA0Ni4wNTMgMS45NDkgQyA0My42MjYgLTAuNDgyIDM3LjI4MiAxLjkyNCAzMS44ODQgNy4zMjEgTCAzMS44ODQgNy4zMjEgTCAzMS44ODEgNy4zMjEgQyAzMC45ODkgOC4yMTUgMzAuMTc5IDkuMTMzIDI5LjQ2MiAxMC4wNTcgQyAyOC41NTcgMTUuMjExIDI2LjMwMSAxOC44NjUgMjMuNjYgMTguODY1IEwgMjMuNjYgMTguODY5IEMgMjIuODA0IDE4Ljg2OSAyMS45OSAxOC40ODcgMjEuMjUgMTcuNzk3IEwgMjEuMjQ2IDE3Ljc5NyBMIDE5LjI5MSAxNS44NDMgQyAxOC4xODYgMTQuNzM3IDE2LjM5MyAxNC43MzcgMTUuMjg1IDE1Ljg0MyBMIDcuNjg4IDIzLjQzNiBMIDcuMjkyIDIzLjgzNyBMIDEuODI5IDI5LjI5NiBDIDAuNzI0IDMwLjQwMSAwLjcyNCAzMi4xOTUgMS44MjkgMzMuMzAxIEwgMTQuNjk5IDQ2LjE3MSBDIDE1LjgwNSA0Ny4yNzYgMTcuNTk5IDQ3LjI3NiAxOC43MDUgNDYuMTcxIEwgMjQuMTY2IDQwLjcwOCBMIDI0LjU2NiA0MC4zMTIgTCAzMi4xNiAzMi43MTcgQyAzMy4yNjUgMzEuNjExIDMzLjI2NSAyOS44MTcgMzIuMTYgMjguNzExIEwgMzAuMjAzIDI2Ljc1NSBMIDMwLjIwNSAyNi43NSBDIDI5LjUxMyAyNi4wMTIgMjkuMTM2IDI1LjE5NiAyOS4xMzYgMjQuMzQzIEwgMjkuMTM2IDI0LjM0MyBDIDI5LjEzNiAyNC4zNDMgMjkuMTM2IDI0LjM0MyAyOS4xMzYgMjQuMzQzIEMgMjkuMTM2IDIxLjcgMzIuNzg5IDE5LjQ0MyAzNy45NDQgMTguNTM5IEMgMzguODY3IDE3LjgyNCAzOS43ODUgMTcuMDExIDQwLjY4IDE2LjEyIEwgNDAuNjc3IDE2LjExNyBMIDQwLjY4IDE2LjEyIEMgNDYuMDc4IDEwLjcxOSA0OC40ODMgNC4zNzUgNDYuMDUzIDEuOTQ5IFogTSAyNC4zMjIgMzcuNjY5IEwgMjQuMzIzIDM3LjY3MSBMIDE5LjA0NiA0Mi45NDcgTCAxOS4wNDYgNDIuOTQ3IEwgMTcuNjY2IDQ0LjMyNyBDIDE3LjEwMyA0NC44OSAxNi4xOSA0NC44OSAxNS42MjcgNDQuMzI3IEwgMy42NzIgMzIuMzczIEMgMy4xMSAzMS44MSAzLjExIDMwLjg5OCAzLjY3MiAzMC4zMzYgTCA1LjA1MiAyOC45NTYgTCA1LjA1MiAyOC45NTYgTCAxMC4yNSAyMy43NTggTCAxMC4yNSAyMy43NTggQyAxMS41MTkgMjIuNDg5IDEzLjE2NiAyMi4wODQgMTMuOTMzIDIyLjg1MyBDIDE0LjcwMSAyMy42MjIgMTQuMzExIDI1LjI4NSAxMy4wNDcgMjYuNTUxIEwgMTMuMDQ3IDI2LjU1MSBDIDExLjc3OSAyNy44MTcgMTEuMzkzIDI5LjQ4IDEyLjE2MyAzMC4yNDggQyAxMi45MjUgMzEuMDE3IDE0LjU4MSAzMC42MTkgMTUuOTI2IDI5LjI3OCBMIDE1LjkyOSAyOS4yNzggQyAxNy4xODMgMjguMDcxIDE4Ljc3OSAyNy42OTkgMTkuNTMxIDI4LjQ1MSBDIDIwLjI4MSAyOS4yMDQgMTkuOTI0IDMwLjgxNCAxOC43MiAzMi4wNzEgTCAxOC43MjQgMzIuMDc1IEMgMTcuMzgyIDMzLjQxOSAxNi45OTQgMzUuMDgxIDE3Ljc2IDM1Ljg1MiBDIDE4LjUyNyAzNi42MTUgMjAuMTgzIDM2LjIyMSAyMS40NTIgMzQuOTU0IEwgMjEuNTI2IDM0Ljg3NyBMIDIxLjUyNyAzNC44NzcgQyAyMi43ODYgMzMuNjcgMjQuMzc4IDMzLjI5OSAyNS4xMzQgMzQuMDUzIEMgMjUuODgzIDM0LjgwNSAyNS41MjUgMzYuNDE1IDI0LjMyMiAzNy42NjkgWiBNIDI5LjU0NSAzMC40MTMgQyAzMC4xMDggMzAuOTc3IDMwLjEwOCAzMS44ODkgMjkuNTQ1IDMyLjQ1MyBMIDI3LjkyMSAzNC4wNzIgTCAxMy45MjkgMjAuMDc5IEwgMTUuNTQ3IDE4LjQ1NiBDIDE2LjExNiAxNy44OTIgMTcuMDI1IDE3Ljg5MiAxNy41ODkgMTguNDU2IEwgMjkuNTQ1IDMwLjQxMyBaIE0gMzkuNDc5IDguNTI0IEMgMzguNTk3IDcuNjM1IDM4LjU5NyA2LjIwNSAzOS40NzkgNS4zMjMgQyA0MC4zNjUgNC40NCA0MS43OTYgNC40NCA0Mi42NzggNS4zMjMgQyA0My41NjEgNi4yMDUgNDMuNTYxIDcuNjM1IDQyLjY3OCA4LjUyNCBDIDQxLjc5NiA5LjQwNyA0MC4zNjUgOS40MDcgMzkuNDc5IDguNTI0IFoiIHN0eWxlPSIiLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KPC9zdmc+',
		onClick: function () {
			if (!mceReady()) {
				_js.display();
				editor.focus();
			} else {
				editor.windowManager.open({
					title: 'Color Tool',
					body: [{
						type: 'container',
						html: '<table style="border-collapse: collapse; table-layout:fixed; width:400px;"><tbody><tr><td><button id="#282726" style="background-color:#282726; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#504e4b" style="background-color:#504e4b; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#797571" style="background-color:#797571; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#a19c96" style="background-color:#a19c96; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#c9c3bc" style="background-color:#c9c3bc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#d4cfc9" style="background-color:#d4cfc9; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#dfdbd7" style="background-color:#dfdbd7; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#e9e7e4" style="background-color:#e9e7e4; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#f4f3f2" style="background-color:#f4f3f2; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#faf9f8" style="background-color:#faf9f8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr><td><button id="#980000" style="background-color:#980000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ff0000" style="background-color:#ff0000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ff9900" style="background-color:#ff9900; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ffff00" style="background-color:#ffff00; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#00ff00" style="background-color:#00ff00; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#00ffff" style="background-color:#00ffff; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#4a86e8" style="background-color:#4a86e8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#0000ff" style="background-color:#0000ff; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#9900ff" style="background-color:#9900ff; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ff00ff" style="background-color:#ff00ff; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr><td><button id="#e6b8af" style="background-color:#e6b8af; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#f4cccc" style="background-color:#f4cccc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#fce5cd" style="background-color:#fce5cd; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#fff2cc" style="background-color:#fff2cc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#d9ead3" style="background-color:#d9ead3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#d0e0e3" style="background-color:#d0e0e3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#c9daf8" style="background-color:#c9daf8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#cfe2f3" style="background-color:#cfe2f3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#d9d2e9" style="background-color:#d9d2e9; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ead1dc" style="background-color:#ead1dc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr><td><button id="#dd7e6b" style="background-color:#dd7e6b; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ea9999" style="background-color:#ea9999; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#f9cb9c" style="background-color:#f9cb9c; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ffe599" style="background-color:#ffe599; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#b6d7a8" style="background-color:#b6d7a8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#a2c4c9" style="background-color:#a2c4c9; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#a4c2f4" style="background-color:#a4c2f4; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#9fc5e8" style="background-color:#9fc5e8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#b4a7d6" style="background-color:#b4a7d6; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#d5a6bd" style="background-color:#d5a6bd; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr><td><button id="#cc4125" style="background-color:#cc4125; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#e06666" style="background-color:#e06666; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#f6b26b" style="background-color:#f6b26b; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ffd966" style="background-color:#ffd966; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#93c47d" style="background-color:#93c47d; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#76a5af" style="background-color:#76a5af; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#6d9eeb" style="background-color:#6d9eeb; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#6fa8dc" style="background-color:#6fa8dc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#8e7cc3" style="background-color:#8e7cc3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#c27ba0" style="background-color:#c27ba0; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr><td><button id="#a61c00" style="background-color:#a61c00; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#cc0000" style="background-color:#cc0000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#e69138" style="background-color:#e69138; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#f1c232" style="background-color:#f1c232; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#6aa84f" style="background-color:#6aa84f; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#45818e" style="background-color:#45818e; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#3c78d8" style="background-color:#3c78d8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#3d85c6" style="background-color:#3d85c6; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#674ea7" style="background-color:#674ea7; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#a64d79" style="background-color:#a64d79; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr><td><button id="#85200c" style="background-color:#85200c; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#990000" style="background-color:#990000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#b45f06" style="background-color:#b45f06; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#bf9000" style="background-color:#bf9000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#38761d" style="background-color:#38761d; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#134f5c" style="background-color:#134f5c; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#1155cc" style="background-color:#1155cc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#0b5394" style="background-color:#0b5394; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#351c75" style="background-color:#351c75; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#741b47" style="background-color:#741b47; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr><td><button id="#5b0f00" style="background-color:#5b0f00; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#660000" style="background-color:#660000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#783f04" style="background-color:#783f04; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#7f6000" style="background-color:#7f6000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#274e13" style="background-color:#274e13; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#0c343d" style="background-color:#0c343d; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#1c4587" style="background-color:#1c4587; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#073763" style="background-color:#073763; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#20124d" style="background-color:#20124d; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#4c1130" style="background-color:#4c1130; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr><td><button id="#000000" style="background-color:#000000; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#ffffff" style="background-color:#ffffff; border:solid 1px #c9c3bc; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#006682" style="background-color:#006682; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#007fa3" style="background-color:#007fa3; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#3399b5" style="background-color:#3399b5; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#66b2c8" style="background-color:#66b2c8; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#c03613" style="background-color:#c03613; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#f04318" style="background-color:#f04318; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#f36946" style="background-color:#f36946; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td><td><button id="#f68e74" style="background-color:#f68e74; border-radius: 50%; cursor:pointer; margin:2px; height:25px; width:25px;" type="button">&nbsp;</button></td></tr><tr style="height:80px;"><td style="vertical-align:middle;" colspan="1"><button id="swatch_id" style="background-color:#ffffff; border: 1px solid #c9c3bc; border-radius: 10%; height:30px; width:30px;" type="button">&nbsp;</button></td><td style="vertical-align:middle;" colspan="5"><input type="text" id="input_id" name="ico_tag" value="" style="font-family:monospace; border: 1px solid #c9c3bc; width:90%;"></td><td style="padding-left: 6px; vertical-align:middle;" colspan="4"><input type="checkbox" id="checkbox_id" name="background_color" value=""><label for="checkbox_id">Background color</label></tr><tr style="height:20px;"><td style="font-size: 75%; vertical-align:middle;" colspan="10"><a href="https://doc.xidipity.com/reference/palette/named-colors/" target="_blank" rel="noopener noreferrer">Named colors</a></td></tr></tbody></table>'
					}],
					onClick: function (event) {
						//
						console.log('     - onClick Event -');
						//
						var evtSrc = event.target.id;
						//
						console.log('***** evtSrc: ' + evtSrc);
						//
						if (!isEmpty(evtSrc)) {
							try {
								var frmSwatch = document.getElementById('swatch_id');
								var frmHexInput = document.getElementById('input_id');
								if (isNull(frmHexInput.value)) {
									frmHexInput.value
								}
								switch (evtSrc) {
									case ('swatch_id'):
										//
										console.log('Swatch clicked');
										var frmHexValue = frmHexInput.value.toLowerCase().trim();
										if (!isEmpty(frmHexValue) && isEmpty(frmHexValue.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i))) {
											oDoc.datElements = namedColor(frmHexInput.value);
											console.log('***** datElements: ' + oDoc.datElements);
											if (isEmpty(oDoc.datElements)) {
												frmSwatch.style.backgroundColor = '#ffffff';
												alert('ALERT #2330\nInvalid named color.');
											} else {
												frmSwatch.style.backgroundColor = frmHexValue;
											}
										}
										break;
									case ('checkbox_id'):
										//
										console.log('Checkbox clicked');
										break;
									case ('input_id'):
										//
										console.log('Input clicked');
										break;
									default:
										//
										console.log('Grid clicked');
										//
										frmHexInput.value = evtSrc;
										frmSwatch.style.backgroundColor = evtSrc;
										oDoc.datElements = evtSrc;
										break;
								}
							} catch (e) {
								//
								console.log('     - onError Event -');
								//
								_js.ms = e.message;
								_js.ln = '2390';
								_js.display();
							}							
						}
					},
					onSubmit: function () {
						//
						var frmHexValue = oDoc.datElements;
						//
						if (isEmpty(frmHexValue)) {
							try {
								var frmHexInput = document.getElementById('input_id');							
								frmHexValue = frmHexInput.value.toLowerCase().trim();
								if (!isEmpty(frmHexValue) && isEmpty(frmHexValue.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i))) {
									oDoc.datElements = namedColor(frmHexInput.value);
									frmHexValue = oDoc.datElements;
									if (isEmpty(frmHexValue)) {
										throw new Error('Invalid named color.');
									}
								}								
							} catch(e) {
								//
								console.log('     - onError Submit-');
								//
								_js.ms = e.message;
								_js.ln = '2415';
								_js.display();
							}
						}
						if (!isEmpty(frmHexValue)) {
							//
							console.log('     - onSubmit -');
							//
							try {
								//
								frmInit();
								//
								var frmBkgColor = document.getElementById('checkbox_id');
								//
								if (frmBkgColor.checked) {
									oDoc.datElements = 'background-color: ' + frmHexValue + ';';
								} else {
									oDoc.datElements = 'color: ' + frmHexValue + ';';
								}
								oDoc.datAction = 'blend';
								oDoc.datAttribute = 'style';
								//
								frmSubmit();
								//
							} catch (e) {
								//
								console.log('     - onError Submit-');
								//
								_js.ms = e.message;
								_js.ln = '2444';
								_js.display();
							}
						}
					},
				});
			}
		}
	});
});
/*
 * EOF: apply-text-color / plugin.js / 210614-1
 */
