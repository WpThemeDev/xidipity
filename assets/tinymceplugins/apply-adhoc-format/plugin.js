/**
 * WordPress Xidipity Theme
 * Tinymce apply-adhoc-format plugin
 *
 * ###:	plugin.js
 * bld:	210518-1
 * src:	github.com/WpThemeDev/xidipity/
 * (C)	https://doc.xidipity.com/license/
 *
 */
tinymce.PluginManager.add('app_adhoc_fmt', function (editor) {
	'use strict';
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
			if (!this.hasError) {
				var datElements = '';
				try {
					if (this.lineCnt < 2) {
						throw new Error('ERROR (#31)\nblkContent must contain more than 1 line.');
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
								//htmlTable = this.mceHtml().replace(/(\r\n|\n|\r)/gm, '');
								htmlTable = this.mceHtml().replace(/(\s*)(\r\n|\n|\r)(\s*)/g, '');
								//htmlTable = htmlTable.replace(/(<(table|tbody|thead|tr).*?>|<\/(table|tbody|thead|tr)>)/gm, '');
								htmlTable = htmlTable.replace(/(<(table|tbody|thead|tr).*?>|<\/(table|tbody|thead|tr)>)/g, '');
								//htmlTable = htmlTable.replace(/(<\/th>)<|(<\/td>)</g, '$1 $2\n<');
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
								// multi line
								// remove empty tags ie. <p></p> / <p>&nbsp;</p>
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log(' OBJ > hasDatColor');
				//
				try {
					//
					retValue = (!isEmpty(this.datBgColor()) || !isEmpty(this.datFgColor()));
					//
				} catch (e) {
					alert(e.message);
					this.hasError = true;
				}
			}
			//
			return retValue;
		},
		hasError: false, // error flag
		htmlFull: function () {
			//
			// display complete html with tags
			//
			var retValue = this.htmlFullCache;
			//
			if (!this.hasError) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > htmlFull - New');
						//
						var domNode = this.mceNode;
						var domNodeName = this.mceNodeName();
						var outerHtml = this.outerHTML();
						switch (true) {
							case (domNodeName == 'body'):
								// body
								this.htmlFullCache = this.mceHtml();
								break;
							case (isEmpty(outerHtml.match(/<(div|h[1-6]|li|p(?!a)|td|th).*?>/g))):
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
								this.htmlFullCache = this.proMceTags(domNode.outerHTML);
								break;
							default:
								// everything else
								this.htmlFullCache = this.outerHTML();
						}
						//
						retValue = this.htmlFullCache;
						//
					} else {
						//
						console.log(' OBJ > htmlFull - Cache');
						//
					}
				} catch (e) {
					alert(e.message);
					this.hasError = true;
				}
			}
			//
			return retValue;
		},
		htmlFullCache: null,
		initNode: function (nodeArg1) {
			//
			// init doc object
			//
			var retValue = this.initNodeCache;
			//
			if (!this.hasError) {
				//
				console.log(' OBJ > initNode');
				//
				try {
					if (nodeArg1 === undefined || nodeArg1 === null) {
						throw new Error('ERROR (#175)\nMissing required argument.'); // editor node
					}
					// set node
					this.mceNode = nodeArg1;
					//
					// reset properties
					this.blkContentCache = null;
					this.datBgColorCache = null;
					this.datElements = '';
					this.datFgColorCache = null;
					this.htmlFullCache = null;
					this.innerHTMLCache = null;
					this.isFragmentCache = null;
					this.mceHtmlCache = null;
					this.mceNodeNameCache = null;
					this.mceTextCache = null;
					this.outerHTMLCache = null;
					//
					// set flags
					this.hasError = false;
					this.hasMark = false;
					this.hasMarkPair = false;
					//
					// variables
					var htmlFull;
					var mrkExp = new RegExp('<(em|i|kbd|strong|sub|sup|s\b|u)>' + this.mceHtml() + '<\/(em|i|kbd|strong|sub|sup|s\b|u)>', 'g');
					switch (true) {
						case (this.mceNodeName() == 'span'):
							htmlFull = this.proMceTags(this.mceNode.parentNode.outerHTML);
							if (!isEmpty(htmlFull.match(/^<(p|h[1-6]|div|li|td|th).*?><span.*?>.*?<\/span><\/(p|h[1-6]|div|li|td|th).*?>/i))) {
								this.mceNode = this.mceNode.parentNode;
							}
							break;
						case (!isEmpty(this.htmlFull().match(mrkExp))):
							this.hasMark = true;
							htmlFull = this.proMceTags(this.mceNode.parentNode.outerHTML);
							this.hasMarkPair = !isEmpty(htmlFull.match(/^<(p|h[1-6]|div|li|td|th).*?><(em|i|kbd|s|strong|sub|sup|u)>/));
							break;
					}
				} catch (e) {
					alert(e.message);
					this.hasError = true;
				}
			}
			//
			return;
		},
		innerHTML: function () {
			//
			// cleaned inner html
			//
			var retValue = this.innerHTMLCache;
			//
			if (!this.hasError) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > innerHTML - New');
						//
						if (this.mceNodeName() == 'body') {
							this.innerHTMLCache = this.mceHtml();
						} else {
							this.innerHTMLCache = this.proMceTags(this.mceNode.innerHTML);
						}
						//
						retValue = this.innerHTMLCache;
						//
					} else {
						//
						console.log(' OBJ > innerHTML - Cache');
						//
					}
				} catch (e) {
					alert(e.message);
					this.hasError = true;
				}
			}
			//
			return retValue;
		},
		innerHTMLCache: null,
		isFragment: function () {
			//
			// less than full content between tags
			//
			var retValue = this.isFragmentCache;
			//
			if (!this.hasError) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > isFragment - New');
						//
						var mceHtml = getRawHtml(this.mceHtml());
						var outerHtml = getRawHtml(this.outerHTML());
						var fullHtml = getRawHtml(this.htmlFull());

						this.isFragmentCache = (mceHtml !== outerHtml || outerHtml !== fullHtml);
						var retValue = this.isFragmentCache;

					} else {
						//
						console.log(' OBJ > isFragment - Cache');
						//
					}
				} catch (e) {
					alert(e.message);
					this.hasError = true;
				}
			}
			return retValue;
		},
		isFragmentCache: null,
		hasMark: false,
		hasMarkPair: false,
		lineCnt: 0, // number of nodes
		mceHtml: function () {
			//
			// editor selection as html
			//
			var retValue = this.mceHtmlCache;
			//
			if (!this.hasError) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > mceHtml - New');
						//
						this.mceHtmlCache = editor.selection.getContent({
							format: 'html'
						});
						//
						retValue = this.mceHtmlCache;
						//
					} else {
						//
						console.log(' OBJ > mceHtml - Cache');
						//
					}
				} catch (e) {
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
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
					alert(e.message);
					this.hasError = true;
				}
			}
			//
			return retValue;
		},
		mceTextCache: null,
		outerHTML: function () {
			//
			// html node name
			//
			var retValue = this.outerHTMLCache;
			//
			if (!this.hasError) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > outerHTML - New');
						//
						if (this.mceNodeName() == 'body') {
							this.outerHTMLCache = this.mceHtml();
						} else {
							this.outerHTMLCache = this.proMceTags(editor.dom.getOuterHTML(this.mceNode));
						}
						//
						retValue = this.outerHTMLCache;
						//
					} else {
						//
						console.log(' OBJ > outerHTML - Cache');
						//
					}
				} catch (e) {
					alert(e.message);
					this.hasError = true;
				}
			}
			//
			return retValue;
		},
		outerHTMLCache: null,
		proBldClassElements: function (strArg1, strArg2) {
			//
			// build class elements process
			//
			var retValue = '';
			//
			if (!this.hasError) {
				//
				console.log(' OBJ > proBldClassElements');
				console.log('     - strArg1: ' + strArg1);
				console.log('     - strArg2: ' + strArg2);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string') {
						throw new Error('ERROR (#440)\nRequired argument/s missing.');
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log(' OBJ > proBldStyleElements');
				console.log('     - strArg1: ' + strArg1);
				console.log('     - strArg1: ' + strArg2);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string') {
						throw new Error('ERROR (#492)\nRequired argument/s missing.');
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log(' OBJ > proOrderClassStyle');
				console.log('     - strArg1: ' + strArg1);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
						throw new Error('ERROR (#526)\nRequired argument/s missing.');
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log(' OBJ > proColorElements');
				//
				try {
					if (!this.hasDatColor()) {
						throw new Error('ERROR (#564)\nMissing required color data elements.');
					}
					if (this.isFragment()) {
						throw new Error('ERROR (#567)\nContent incorrectly identifid as a fragment.');
					}
					var newAttr;
					if (!isEmpty(this.datElements.match(/;/))) {
						newAttr = 'style';
					} else {
						newAttr = 'class';
					}
					var bldElements;
					var datElements = (this.datBgColor() + ' ' + this.datFgColor()).trim();
					var htmlDoc = '';
					var htmlNew = '';
					var htmlContent = this.htmlFull();
					var spanExp = new RegExp('^<(p|h[1-6]|div|li|td|th).*?><span.*?>.*?<\/span><\/(p|h[1-6]|div|li|td|th)>', 'i');
					switch (true) {
						case (isEmpty(htmlContent.match(spanExp)) && this.datAction == 'replace' && this.lineCnt == 1):
							throw new Error('MESSAGE (#583)\nThe selection is NOT bound by a tag containing color elements.');
							break;
						case (isEmpty(htmlContent.match(spanExp)) && this.datAction == 'replace'):
							//
							// skip ...
							//
							break;
						case (!isEmpty(htmlContent.match(spanExp))):
							var cboTag = getRegExpValue(this.htmlFull(), '^<(p|h[1-6]|div|li|td|th).*?><span.*?>', 's');
							var newUpdate = this.htmlFull();
							var spanTag = getRegExpValue(cboTag, '<span.*?>', 's');
							if (this.datAction == 'replace') {
								var mceElement;
								var newElement;
								mceElement = getRegExpValue(spanTag, newAttr + '.*?"(.*?)"', 'i');
								newElement = newAttr + '="' + this.proSrtElements(this.datElements) + '"';
								var newTag = spanTag.replace(mceElement, newElement);
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceElement, newElement);
								//
							} else {
								var classTag;
								var mceElements;
								var newSpanTag;
								var styleTag;
								//
								htmlContent = this.htmlFull();
								switch (true) {
									case (newAttr == 'style' && isEmpty(spanTag.match(/style/))):
										classTag = getRegExpValue(spanTag, 'class.*?".*?"', 's');
										newSpanTag = spanTag.replace(classTag, (classTag + ' style="' + datElements + '"'));
										if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
											//
											newSpanTag = this.proJoinElements(newSpanTag, newAttr);
											//
										}
										//
										retValue = htmlContent.replace(spanTag, newSpanTag);
										//
										break;
									case (newAttr == 'style'):
										mceElements = getRegExpValue(spanTag, 'style.*?"(.*?)"', 's', 1);
										bldElements = this.proBldStyleElements(mceElements, datElements);
										newSpanTag = spanTag.replace(mceElements, bldElements);
										if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
											newSpanTag = this.proJoinElements(newSpanTag, newAttr);
										}
										//
										retValue = htmlContent.replace(spanTag, newSpanTag);
										//
										break;
									case (newAttr == 'class' && isEmpty(spanTag.match(/class/))):
										styleTag = getRegExpValue(spanTag, 'style.*?".*?"', 's');
										newSpanTag = spanTag.replace(styleTag, ('class="' + datElements + '" ' + styleTag));
										if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
											newSpanTag = this.proJoinElements(newSpanTag, newAttr);
										}
										//
										retValue = htmlContent.replace(spanTag, newSpanTag);
										//
										break;
									case (newAttr == 'class'):
										mceElements = getRegExpValue(spanTag, 'class.*?"(.*?)"', 's', 1);
										bldElements = this.proBldClassElements(mceElements, datElements);
										newSpanTag = spanTag.replace(mceElements, bldElements);
										if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
											newSpanTag = this.proJoinElements(newSpanTag, newAttr);
										}
										//
										retValue = htmlContent.replace(spanTag, newSpanTag);
										//
										break;
								}
							}
							break;
						default:
							htmlNew = '<span ' + newAttr + '="' + this.proSrtElements(this.datElements) + '">' + this.mceHtml() + '</span>';
							//
							retValue = htmlContent.replace(this.mceHtml(), htmlNew);
							//
					}
					//
					// purge color element/s from datElements
					//
					var purgeItems = datElements;
					var purgeList = this.proSrtElements(this.datElements);
					this.datElements = this.proPurgeElements(purgeList, purgeItems);
					this.datBgColorCache = null;
					this.datFgColorCache = null;
					//
				} catch (e) {
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log(' OBJ > proFragment');
				//
				try {
					//
					if (!this.isFragment()) {
						throw new Error('ERROR (#702)\nContent must be less than a full sentence/line.');
					}
					var newAttr;
					if (!isEmpty(this.datElements.match(/;/))) {
						newAttr = 'style';
					} else {
						newAttr = 'class';
					}
					var htmlNew = '';
					var newUpdate = this.htmlFull();
					var spanTag = getRegExpValue(this.outerHTML(), '^<span.*?>');
					if (!isEmpty(spanTag)) {
						if (this.datAction == 'replace') {
							htmlNew = '<span ' + newAttr + '="' + this.proSrtElements(this.datElements) + '">' + this.mceHtml() + '</span>';
							//
							retValue = newUpdate.replace(this.outerHTML(), htmlNew);
							//
						} else {
							var bldElements;
							var datElements = this.datElements;
							var mceElements;
							var newSpanTag;
							var classTag;
							var styleTag;
							switch (true) {
								case (newAttr == 'style' && isEmpty(spanTag.match(/style/))):
									styleTag = getRegExpValue(spanTag, 'class.*?".*?"', 's');
									newSpanTag = spanTag.replace(styleTag, (styleTag + ' style="' + datElements + '"'));
									if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
										newSpanTag = this.proJoinElements(newSpanTag, newAttr);
									}
									//
									retValue = newUpdate.replace(spanTag, newSpanTag);
									//
									break;
								case (newAttr == 'style'):
									mceElements = getRegExpValue(spanTag, 'style.*?"(.*?)"', 's', 1);
									bldElements = this.proBldStyleElements(mceElements, datElements);
									newSpanTag = spanTag.replace(mceElements, bldElements);
									if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
										newSpanTag = this.proJoinElements(newSpanTag, newAttr);
									}
									//
									retValue = newUpdate.replace(spanTag, newSpanTag);
									//
									break;
								case (newAttr == 'class' && isEmpty(spanTag.match(/class/))):
									styleTag = getRegExpValue(spanTag, 'style.*?".*?"', 's');
									newSpanTag = spanTag.replace(styleTag, ('class="' + datElements + '" ' + styleTag));
									if (!isEmpty(newSpanTag.match(/(class.*?".*?").*(style.*?".*?")/g))) {
										newSpanTag = this.proJoinElements(newSpanTag, newAttr);
									}
									//
									retValue = newUpdate.replace(spanTag, newSpanTag);
									//
									break;
								case (newAttr == 'class'):
									mceElements = getRegExpValue(spanTag, 'class.*?"(.*?)"', 's', 1);
									bldElements = this.proBldClassElements(mceElements, datElements);
									newSpanTag = spanTag.replace(mceElements, bldElements);
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
						htmlNew = '<span ' + newAttr + '="' + this.proSrtElements(this.datElements) + '">' + this.mceHtml() + '</span>';
						retValue = newUpdate.replace(this.mceHtml(), htmlNew);
					}
				} catch (e) {
					alert(e.message);
					this.hasError = true;
				}
			}
			//
			return retValue;
		},
		proJoinElements: function (strArg1, strArg2) {
			//
			// join elements
			//
			var retValue = '';
			//
			if (!this.hasError) {
				//
				console.log(' OBJ > proJoinElements');
				console.log('     - strArg1: ' + strArg1);
				console.log('     - strArg2: ' + strArg2);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string') {
						throw new Error('ERROR (#857)\nRequired argument/s missing.');
					}
					var bgClassColor = getRegExpValue(strArg1, '(bkg.*?)(\\s|")', 's', 1);
					var fgClassColor = getRegExpValue(strArg1, '(txt.*?)(\\s|")', 's', 1);
					var bgStyleColor = getRegExpValue(strArg1, 'background-color:\\s(.*?)(\\s|")', 's', 1);
					var fgStyleColor = getRegExpValue(strArg1, '(\\s|")color:\\s(.*?)(\\s|")', 's', 2);
					var newElements = '';
					if (strArg2 == 'class') {
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log(' OBJ > proMceTags');
				console.log('     - strArg1: ' + strArg1);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
						throw new Error('ERROR (#919)\nRequired argument/s missing.');
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log(' OBJ > proPurgeElements');
				console.log('     - strArg1: ' + strArg1);
				console.log('     - strArg2: ' + strArg2);
				//
				try {
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string') {
						throw new Error('ERROR (#919)\nRequired argument/s missing.');
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
							itmExp = new RegExp(itmKey + '.*?\\s.*?(\\s|$)', 'g');
						}
						strArg1 = strArg1.replace(itmExp, '');
						idx++;
					}
					//
					retValue = strArg1;
					//
				} catch (e) {
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log('OBJ > proSrtElements');
				console.log('    - strArg1: ' + strArg1);
				//
				try {
					//
					if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
						throw new Error('ERROR (#902)\nRequired argument missing.');
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
					alert(e.message);
					this.hasError = true;
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
			if (!this.hasError) {
				//
				console.log('OBJ > proStdElements');
				//
				try {
					if (this.isFragment()) {
						throw new Error('ERROR (#1041)\nContent identifid as a fragment and can not be processed.');
					}
					var newAttr;
					if (!isEmpty(this.datElements.match(/;/))) {
						newAttr = 'style';
					} else {
						newAttr = 'class';
					}
					var newUpdate = this.htmlFull();
					var mceTag = getRegExpValue(this.htmlFull(), '^<(p|h[1-6]|div|li|td|th).*?>');
					//
					console.log('@   > htmlFull: ' + this.htmlFull());
					//
					var mceElements = getRegExpValue(mceTag, '"(.*?)"', 's', 1);
					//
					console.log('@   > mceElements: ' + mceElements);
					//
					var newTag;
					if (this.datAction == 'replace') {
						switch (true) {
							case (isEmpty(mceTag.match(/(class|style).*?"(.*?)"/i)) && this.lineCnt == 1):
								throw new Error('MESSAGE (#1342)\nThe ' + mceTag + ' tag does not have elements to replace.');
							case (isEmpty(mceTag.match(/(class|style).*?"(.*?)"/i))):
								// skip
								break;
							default:
								var mceElement;
								var newElement;
								mceElement = getRegExpValue(mceTag, newAttr + '.*?"(.*?)"', 'i');
								newElement = newAttr + '="' + this.proSrtElements(this.datElements) + '"';
								newTag = mceTag.replace(mceElement, newElement);
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
						}
					} else {
						var bldElements;
						var datElements = this.datElements;
						var classTag;
						var styleTag;
						switch (true) {
							case (isEmpty(mceTag.match(/class|style/))):
								newTag = mceTag.replace('>', ' ' + newAttr + '="' + this.proSrtElements(this.datElements) + '">');
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							case (newAttr == 'style' && isEmpty(mceTag.match(/style/))):
								classTag = getRegExpValue(mceTag, 'class.*?".*?"', 's');
								newTag = mceTag.replace(classTag, (classTag + ' style="' + datElements + '"'));
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							case (newAttr == 'style'):
								mceElements = getRegExpValue(mceTag, 'style.*?"(.*?)"', 's', 1);
								bldElements = this.proBldStyleElements(mceElements, datElements);
								newTag = mceTag.replace(mceElements, bldElements);
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							case (newAttr == 'class' && isEmpty(mceTag.match(/class/))):
								styleTag = getRegExpValue(mceTag, 'style.*?".*?"', 's');
								newTag = mceTag.replace(styleTag, ('class="' + datElements + '" ' + styleTag));
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							case (newAttr == 'class'):
								mceElements = getRegExpValue(mceTag, 'class.*?"(.*?)"', 's', 1);
								bldElements = this.proBldClassElements(mceElements, datElements);
								newTag = mceTag.replace(mceElements, bldElements);
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
						}
					}
				} catch (e) {
					alert(e.message);
					this.hasError = true;
				}
			}
			//
			return retValue;
		},
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
		if (!oDoc.hasError) {
			//
			console.log('FN  > getRegExpValue');
			console.log('    - strArg1: ' + strArg1);
			console.log('    - strArg2: ' + strArg2);
			console.log('    - strArg3: ' + strArg3);
			console.log('    - numArg4: ' + numArg4);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg1.trim() == '') {
					throw new Error('ERROR (#1164)\nMissing required argument/s.'); // value to evaluate
				}
				if (strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string' || strArg2.trim() == '') {
					throw new Error('ERROR (#1167)\nMissing required argument/s.'); // regular expression
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
					retValue = strArg1.match(regExp)[numArg4];
				}
				//
			} catch (e) {
				alert(e.message);
				oDoc.hasError = true;
			}
		}
		//
		return retValue;
	}

	function getRawHtml(strArg1) {
		//
		// strip html from arg
		//
		var retValue = '';
		//
		if (!oDoc.hasError) {
			//
			console.log('FN  > getRawHtml');
			console.log('    - strArg1: ' + strArg1);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
					throw new Error('ERROR (#1237)\nMissing required argument.'); // value to evaluate
				}
				if (!isEmpty(strArg1)) {
					var htmlDIV = document.createElement('htmlDIV');
					htmlDIV.innerHTML = strArg1;
					retValue = htmlDIV.textContent || htmlDIV.innerText || '';
				}
			} catch (e) {
				alert(e.message);
				oDoc.hasError = true;
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

	function isReady() {
		//
		// validate content is selected
		//
		var retValue = false;
		try {
			//
			console.log('FN  > isReady');
			//
			if (isEmpty(editor.selection.getContent({
					format: 'text'
				}))) {
				throw new Error('MESSAGE (#1323)\nInvalid or missing selection.');
			}
			//
			retValue = true;
			//
		} catch (e) {
			alert(e.message);
		}
		//
		return retValue;
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
		if (!oDoc.hasError) {
			//
			console.log('FN  > strToArray');
			console.log('    - strArg1: ' + strArg1);
			console.log('    - expArg2: ' + expArg2);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
					throw new Error('ERROR (#1268)\nMissing required argument.');
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
				alert(e.message);
				oDoc.hasError = true;
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
		if (!oDoc.hasError) {
			//
			console.log('FN  > strToNode');
			console.log('    - strArg1: ' + strArg1);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
					throw new Error('ERROR (#1186)\nMissing required argument.');
				}
				var blkTag = getRegExpValue(strArg1, '^<(div|h[1-6]|li|p|td|th).*?>', 'i');
				if (isEmpty(blkTag)) {
					throw new Error('ERROR (#1190)\nInvalid HTML argument.');
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
				blkNode.innerHTML = strArg1.replace(blkTag, '').replace(blkEndTag, '');
				//
				retValue = blkNode;
				//
			} catch (e) {
				alert(e.message);
				oDoc.hasError = true;
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
		if (!oDoc.hasError) {
			//
			console.log('FN  > stripOuterTags');
			console.log('    - strArg1: ' + strArg1);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
					throw new Error('ERROR (#1650)\nMissing required argument.');
				}
				//
				retValue = strArg1.replace(/^<(p|h[1-6]|div|li|td|th).*?>|<\/(p|h[1-6]|div|li|td|th)>/g, '');
				//
			} catch (e) {
				alert(e.message);
				oDoc.hasError = true;
			}
		}
		//
		return retValue;
	}

	function formInit() {
		//
		// init object
		//
		console.log('FN  > formInit');
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
		var htmlDisplay = '';
		switch (true) {
			case (oDoc.hasError):
				// error, do nothing
				break;
			case (oDoc.lineCnt > 1):
				// multi line
				htmlDisplay = oDoc.blkContent();
				break;
			case (oDoc.isFragment()):
				// content fragment
				switch (true) {
					case (oDoc.mceNodeName() == 'span'):
						htmlDisplay = oDoc.proMceTags(oDoc.mceNode.parentNode.outerHTML);
						break;
					case (oDoc.hasMark):
						htmlDisplay = oDoc.outerHTML();
						break;
					default:
						htmlDisplay = oDoc.mceHtml();
				}
				break;
			case (oDoc.hasMark):
				// contains <i>, <u>, etc.
				htmlDisplay = oDoc.htmlFull();
				break;
			case (oDoc.mceHtml() == oDoc.innerHTML()):
				// full line
				htmlDisplay = oDoc.htmlFull();
				break;
			default:
				// other
				htmlDisplay = oDoc.outerHTML();
		}
		document.getElementById("ta_id").value = htmlDisplay;
		console.log('      * * *');
		return;
	}

	//
	// controlling function
	//
	function formSubmit() {
		//
		// process request
		//
		console.log('FN  > formSubmit');
		//
		oDoc.datAction = document.getElementById('act_id').options[document.getElementById('act_id').selectedIndex].text.toLowerCase();
		oDoc.datAttribute = document.getElementById('attr_id').options[document.getElementById('attr_id').selectedIndex].text.toLowerCase();
		oDoc.datElements = document.getElementById('prop_id').value.trim();

		try {
			// validate selection
			switch (true) {
				case (isEmpty(oDoc.datElements)):
					throw new Error('MESSAGE (#1468)\nMissing element class/style data.');
				case (oDoc.datAttribute == 'class' && !isEmpty(oDoc.datElements.match(/;/g))):
					throw new Error('MESSAGE (#1470)\nThe element says class, but the input is incorrectly formatted.');
				case (oDoc.datAttribute == 'style' && isEmpty(oDoc.datElements.match(/;/g))):
					throw new Error('MESSAGE (#1472)\nThe element says style, but the input is incorrectly formatted.');
				default:
					// check for mixed style & class elements
					if (!isEmpty(oDoc.datElements.match(/;/))) {
						if (oDoc.datElements.match(/:/g).length !== oDoc.datElements.match(/;/g).length) {
							throw new Error('MESSAGE (#1477)\nA mixture of class and style data elements detected.');
						}
					}
			}
			//
			var htmlDoc = editor.getContent();
			var htmlExp = '';
			var htmlFull;
			var htmlUpdate = '';
			//
			if (oDoc.lineCnt == 1) {
				//
				console.log('    # Process Single Line');
				//
				htmlFull = oDoc.htmlFull();

				switch (true) {
					case (oDoc.hasError):
						//
						// error
						//
						break;
					case (oDoc.isFragment()):
						htmlUpdate = oDoc.proFragment();
						break;
					case (oDoc.hasDatColor()):
						htmlUpdate = oDoc.proColorElements();

						if (!isEmpty(oDoc.datElements) && !oDoc.hasError) {
							htmlUpdate = oDoc.proStdElements();
						}
						break;
					default:
						htmlUpdate = oDoc.proStdElements();
				}
				//
				if (!oDoc.hasError) {
					htmlExp = new RegExp(htmlFull, 'g');
					htmlDoc = htmlDoc.replace(htmlExp, htmlUpdate);
					//
					console.log('RST > ' + htmlUpdate);
					//
				}
			} else {
				//
				console.log('    # Process Multi Line');
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
						case (oDoc.hasError):
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
							htmlFull = blkHtmlItem;
							blkNode = strToNode(blkHtmlItem);
							oDoc.initNode(blkNode, 'm');
							oDoc.datElements = datElementsCache;
							oDoc.htmlFullCache = blkHtmlItem;
							oDoc.mceHtmlCache = stripOuterTags(blkHtmlItem);
							oDoc.innerHTMLCache = oDoc.mceHtmlCache;
							switch (true) {
								case (oDoc.hasDatColor()):
									htmlUpdate = oDoc.proColorElements();
									if (!isEmpty(oDoc.datElements) && !oDoc.hasError) {
										htmlUpdate = oDoc.proStdElements();
									}
									break;
								default:
									htmlUpdate = oDoc.proStdElements();
							}
					}
					if (!oDoc.hasError && !isEmpty(htmlUpdate)) {
						htmlExp = new RegExp(htmlFull, 'g');
						htmlDoc = htmlDoc.replace(htmlExp, htmlUpdate);
						//
						console.log('RST > ' + htmlUpdate);
						//
					}
					//
					idx++;
					//
				}
			}
			//
			// write content back
			//
			if (!oDoc.hasError) {
				//
				try {
					console.log('    - Process Complete -');
					//
					editor.setContent(htmlDoc);
					editor.focus();
					editor.undoManager.add();
				} catch (e) {
					alert(e.message);
					oDoc.hasError = true;
				}
			}
		} catch (e) {
			alert(e.message);
			oDoc.hasError = true;
		}
		return;
	}

	//
	// button
	//
	editor.addButton('app_adhoc_fmt', {
		title: 'Ad Hoc Format',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYgMkM0Ljg5IDIgNCAyLjg5IDQgNFYyMEEyIDIgMCAwIDAgNiAyMkgxMi42OEE3IDcgMCAwIDEgMTIgMTlBNyA3IDAgMCAxIDE5IDEyQTcgNyAwIDAgMSAyMCAxMi4wOFY4TDE0IDJINk0xMyAzLjVMMTguNSA5SDEzVjMuNU0xOCAxNEMxNy44NyAxNCAxNy43NiAxNC4wOSAxNy43NCAxNC4yMUwxNy41NSAxNS41M0MxNy4yNSAxNS42NiAxNi45NiAxNS44MiAxNi43IDE2TDE1LjQ2IDE1LjVDMTUuMzUgMTUuNSAxNS4yMiAxNS41IDE1LjE1IDE1LjYzTDE0LjE1IDE3LjM2QzE0LjA5IDE3LjQ3IDE0LjExIDE3LjYgMTQuMjEgMTcuNjhMMTUuMjcgMTguNUMxNS4yNSAxOC42NyAxNS4yNCAxOC44MyAxNS4yNCAxOUMxNS4yNCAxOS4xNyAxNS4yNSAxOS4zMyAxNS4yNyAxOS41TDE0LjIxIDIwLjMyQzE0LjEyIDIwLjQgMTQuMDkgMjAuNTMgMTQuMTUgMjAuNjRMMTUuMTUgMjIuMzdDMTUuMjEgMjIuNSAxNS4zNCAyMi41IDE1LjQ2IDIyLjVMMTYuNyAyMkMxNi45NiAyMi4xOCAxNy4yNCAyMi4zNSAxNy41NSAyMi40N0wxNy43NCAyMy43OUMxNy43NiAyMy45MSAxNy44NiAyNCAxOCAyNEgyMEMyMC4xMSAyNCAyMC4yMiAyMy45MSAyMC4yNCAyMy43OUwyMC40MyAyMi40N0MyMC43MyAyMi4zNCAyMSAyMi4xOCAyMS4yNyAyMkwyMi41IDIyLjVDMjIuNjMgMjIuNSAyMi43NiAyMi41IDIyLjgzIDIyLjM3TDIzLjgzIDIwLjY0QzIzLjg5IDIwLjUzIDIzLjg2IDIwLjQgMjMuNzcgMjAuMzJMMjIuNyAxOS41QzIyLjcyIDE5LjMzIDIyLjc0IDE5LjE3IDIyLjc0IDE5QzIyLjc0IDE4LjgzIDIyLjczIDE4LjY3IDIyLjcgMTguNUwyMy43NiAxNy42OEMyMy44NSAxNy42IDIzLjg4IDE3LjQ3IDIzLjgyIDE3LjM2TDIyLjgyIDE1LjYzQzIyLjc2IDE1LjUgMjIuNjMgMTUuNSAyMi41IDE1LjVMMjEuMjcgMTZDMjEgMTUuODIgMjAuNzMgMTUuNjUgMjAuNDIgMTUuNTNMMjAuMjMgMTQuMjFDMjAuMjIgMTQuMDkgMjAuMTEgMTQgMjAgMTRIMThNMTkgMTcuNUMxOS44MyAxNy41IDIwLjUgMTguMTcgMjAuNSAxOUMyMC41IDE5LjgzIDE5LjgzIDIwLjUgMTkgMjAuNUMxOC4xNiAyMC41IDE3LjUgMTkuODMgMTcuNSAxOUMxNy41IDE4LjE3IDE4LjE3IDE3LjUgMTkgMTcuNVoiIC8+PC9zdmc+',
		onclick: function () {
			if (isReady()) {
				editor.windowManager.open({
					title: 'Ad Hoc Format',
					body: [{
						type: "container",
						html: '<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap" rel="stylesheet"><div style="min-width:360px;padding-bottom:8px;padding-top:8px;width:360px;"><form method="post" style="font-family:&#39Roboto&#39,sans-serif;font-size:16px;"><table style="width: 100%;"><tbody><tr style="height: 28px;"><td style="width: 100%;" colspan="2">Class/Style:</td></tr><tr><td style="padding-right:10px;width:100%;" colspan="2"><input type="text" id="prop_id" name="input_tag" value="" style="border:1px solid #cccccc;font-family:&#39Roboto Mono&#39,monospace;font-size:12px;padding:4px;width:100%;"></td></tr><tr style="font-size: 2px; height: 4px;"><td>&nbsp;</td></tr><tr style="height: 28px;"><td style="width: 100px;">Element</td><td>Action</td></tr><tr><td><select id="attr_id" style="border:1px solid #e9e7e4;width:120px;"><option>Style</option><option>Class</option></select></td><td><select id="act_id" style="border:1px solid #e9e7e4;width:120px;"><option>None</option></select></td></tr><tr style="font-size: 2px; height: 4px;"><td>&nbsp;</td></tr><tr style="height: 28px;"><td style="width:100%;" colspan="2">Selected HTML</td></tr><tr><td style="width:100%;" colspan="2"><textarea id="ta_id" name="txt_area" rows="6" value="" style="font-family:&#39Roboto Mono&#39,monospace;font-size:12px;width:100%;white-space: normal;">&nbsp;</textarea></td></tr></tbody></table></form></div>'
						}],
					onSubmit: function () {
						formSubmit();
					}
				});
				//
				// form load init
				//
				console.clear();

				formInit();
				
				if (!oDoc.hasError) {
					//
					console.log('*** MARK ***');
					//
					document.getElementById('prop_id').focus();
					var frmAttribute = document.getElementById('attr_id');
					// set attr to class if found in tag
					if (oDoc.lineCnt == 1 && !isEmpty(oDoc.htmlFull().match(/class/)) && isEmpty(oDoc.htmlFull().match(/style/))) {
						frmAttribute.selectedIndex = 1;
					}
					// update action based on element
					var frmAttributeData = document.getElementById('attr_id').value.toLowerCase();
					var frmElementData = document.getElementById("ta_id").value;
					var frmAction = document.getElementById('act_id');
					var frmActionCnt = frmAction.length;
					var htmlMce = oDoc.htmlFull();
					var optOne;
					
					switch (true) {
						case (isEmpty(htmlMce.match(/(class|style).*?"(.*?)"/g))):
							if (frmActionCnt > 1) {
								document.getElementById('act_id').remove(0);
							}
							document.getElementById('act_id')[0].text = 'Apply';
							break;
						case (!isEmpty(htmlMce.match(/(class).*?"(.*?)"/g))):
							frmAction[0].text = 'Blend';
							if (frmActionCnt < 2) {
								optOne = document.createElement('option');
								optOne.text = 'Replace';
								frmAction.add(optOne);
							}
							document.getElementById('attr_id').selectedIndex = '1';
							break;
						default:
							frmAction[0].text = 'Blend';
							if (frmActionCnt < 2) {
								optOne = document.createElement('option');
								optOne.text = 'Replace';
								frmAction.add(optOne);
							}
					}
				}
			}
		}
	});
});
/*
 * EOF: apply-adhoc-format / plugin.js / 210518-1
 */
