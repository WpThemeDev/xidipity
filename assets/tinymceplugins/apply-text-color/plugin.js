/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-color plugin
 *
 * ###:  plugin.js
 * bld:  210524-1
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_color', function (editor) {
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
						throw new Error('ERROR (#27)\nblkContent must contain more than 1 line.');
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
						var outerHtml = this.outerHtml();
						switch (true) {
							case (domNodeName == 'body'):
								// body
								this.htmlFullCache = regEncode(this.mceHtml());
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
								this.htmlFullCache = regEncode(this.proMceTags(domNode.outerHTML));
								break;
							default:
								// everything else
								this.htmlFullCache = regEncode(this.outerHtml());
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
						throw new Error('ERROR (#258)\nMissing required argument.'); // editor node
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
					this.outerHtmlCache = null;
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
							this.innerHTMLCache = regEncode(this.mceHtml());
						} else {
							this.innerHTMLCache = regEncode(this.proMceTags(this.mceNode.innerHTML));
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
						var outerHtml = getRawHtml(this.outerHtml());
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
						this.mceHtmlCache = regEncode(editor.selection.getContent({
							format: 'html'
						}));
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
		outerHtml: function () {
			//
			// html node name
			//
			var retValue = this.outerHtmlCache;
			//
			if (!this.hasError) {
				try {
					if (isNull(retValue)) {
						//
						console.log(' OBJ > outerHtml - New');
						//
						if (this.mceNodeName() == 'body') {
							this.outerHtmlCache = regEncode(this.mceHtml());
						} else {
							this.outerHtmlCache = regEncode(this.proMceTags(editor.dom.getOuterHTML(this.mceNode)));
						}
						//
						retValue = this.outerHtmlCache;
						//
					} else {
						//
						console.log(' OBJ > outerHtml - Cache');
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
		outerHtmlCache: null,
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
						throw new Error('ERROR (#517)\nRequired argument/s missing.');
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
						throw new Error('ERROR (#574)\nRequired argument/s missing.');
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
						throw new Error('ERROR (#611)\nMissing required color data elements.');
					}
					if (this.isFragment()) {
						throw new Error('ERROR (#614)\nContent incorrectly identifid as a fragment.');
					}
					var newAttr;
					if (!isEmpty(this.datElements.match(/;/))) {
						newAttr = 'style';
					} else {
						newAttr = 'class';
					}
					var bldElements;
					var datElements = (this.datBgColor() + ' ' + this.datFgColor()).trim();
					var htmlNew = '';
					var htmlContent = this.htmlFull();
					var spanExp = new RegExp('^<(p|h[1-6]|div|li|td|th).*?><span.*?>.*?<\/span><\/(p|h[1-6]|div|li|td|th)>', 'i');
					switch (true) {
						case (isEmpty(htmlContent.match(spanExp)) && this.datAction == 'replace' && this.lineCnt == 1):
							//
							throw new Error('MESSAGE (#630)\nThe selection is NOT bound by a tag containing color elements.');
							//
						case (isEmpty(htmlContent.match(spanExp)) && this.datAction == 'replace'):
							//
							// skip ...
							//
							console.log('    - Mark -');
							//
							break;
						case (!isEmpty(htmlContent.match(spanExp))):
							//
							console.log('    - Mark -');
							//
							var cboTag = getRegExpValue(this.htmlFull(), '^<(p|h[1-6]|div|li|td|th).*?><span.*?>', 's');
							var newUpdate = this.htmlFull();
							var spanTag = getRegExpValue(cboTag, '<span.*?>', 's');
							if (this.datAction == 'replace') {
								//
								console.log('    - Mark -');
								//
								var mceElement;
								var newElement;
								mceElement = getRegExpValue(spanTag, '(class|style).*?"(.*?)"', 'i');
								newElement = newAttr + '="' + this.proSrtElements(this.datElements) + '"';
								//
								retValue = newUpdate.replace(mceElement, newElement);
								//
							} else {
								//
								console.log('    - Mark -');
								//
								var classTag;
								var mceElements;
								var newSpanTag;
								var styleTag;
								//
								htmlContent = this.htmlFull();
								switch (true) {
									case (newAttr == 'style' && isEmpty(spanTag.match(/style/))):
										//
										console.log('    - Mark -');
										//
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
										//
										console.log('    - Mark -');
										//
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
										//
										console.log('    - Mark -');
										//
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
										//
										console.log('    - Mark -');
										//
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
							//
							console.log('    - Mark -');
							//
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
						throw new Error('ERROR (#766)\nContent must be less than a full sentence/line.');
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
					var newUpdate = this.htmlFull();
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
							throw new Error('MESSAGE (#878)\nThe selection is NOT bound by a tag containing color elements.');
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
							var htmlNew = '<span ' + newAttr + '="' + datElements + '">' + this.mceHtml() + '</span>';
							//
							var htmlExp;
							htmlExp = new RegExp('(>|\\b)' + (this.mceHtml()).trim() + '(<|\\b)','gi');
							newUpdate = regDecode(newUpdate);
							//
							retValue = newUpdate.replace(htmlExp, '$1' + htmlNew + '$2');
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
						throw new Error('ERROR (#922)\nRequired argument/s missing.');
					}
					var bgClassColor = getRegExpValue(strArg1, '(bkg.*?)(\\s|")', 's', 1);
					var fgClassColor = getRegExpValue(strArg1, '(txt.*?)(\\s|")', 's', 1);
					var bgStyleColor = getRegExpValue(strArg1, 'background-color:\\s(.*?)(\\s|")', 's', 1);
					var fgStyleColor = getRegExpValue(strArg1, '(\\s|")color:\\s(.*?)(\\s|")', 's', 2);
					var newElements = '';
					if (strArg2 == 'class') {
						//
						console.log('    - Mark -');
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
						throw new Error('ERROR (#987)\nRequired argument/s missing.');
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
						throw new Error('ERROR (#1020)\nRequired argument/s missing.');
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
						throw new Error('ERROR (#1065)\nRequired argument/s missing.');
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
						throw new Error('ERROR (#1108)\nRequired argument missing.');
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
						throw new Error('ERROR (#1143)\nContent identifid as a fragment and can not be processed.');
					}
					var newAttr;
					if (!isEmpty(this.datElements.match(/;/))) {
						newAttr = 'style';
					} else {
						newAttr = 'class';
					}
					var newUpdate = this.htmlFull();
					var mceTag = getRegExpValue(this.htmlFull(), '^<(p|h[1-6]|div|li|td|th).*?>');
					var mceElements = getRegExpValue(mceTag, '"(.*?)"', 's', 1);
					var newTag;
					if (this.datAction == 'replace') {
						//
						console.log('    - Mark -');
						//
						switch (true) {
							case (isEmpty(mceTag.match(/(class|style).*?"(.*?)"/i)) && this.lineCnt == 1):
								throw new Error('MESSAGE (#1161)\nThe ' + mceTag + ' tag does not have elements to replace.');
							case (isEmpty(mceTag.match(/(class|style).*?"(.*?)"/i))):
								// skip
								break;
							default:
								var mceElement;
								var newElement;
								mceElement = getRegExpValue(mceTag, '(class|style).*?"(.*?)"', 'i');
								newElement = newAttr + '="' + this.proSrtElements(this.datElements) + '"';
								newTag = mceTag.replace(mceElement, newElement);
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
						}
					} else {
						//
						console.log('    - Mark -');
						//
						var bldElements;
						var datElements = this.datElements;
						var classTag;
						var styleTag;
						switch (true) {
							case (isEmpty(mceTag.match(/class|style/))):
								//
								console.log('    - Mark -');
								//
								newTag = mceTag.replace('>', ' ' + newAttr + '="' + this.proSrtElements(this.datElements) + '">');
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							case (newAttr == 'style' && isEmpty(mceTag.match(/style/))):
								//
								console.log('    - Mark -');
								//
								classTag = getRegExpValue(mceTag, 'class.*?".*?"', 's');
								newTag = mceTag.replace(classTag, (classTag + ' style="' + datElements + '"'));
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							case (newAttr == 'style'):
								//
								console.log('    - Mark -');
								//
								mceElements = getRegExpValue(mceTag, 'style.*?"(.*?)"', 's', 1);
								bldElements = this.proBldStyleElements(mceElements, datElements);
								newTag = mceTag.replace(mceElements, bldElements);
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							case (newAttr == 'class' && isEmpty(mceTag.match(/class/))):
								//
								console.log('    - Mark -');
								//
								styleTag = getRegExpValue(mceTag, 'style.*?".*?"', 's');
								newTag = mceTag.replace(styleTag, ('class="' + datElements + '" ' + styleTag));
								newTag = this.proOrderClassStyle(newTag);
								//
								retValue = newUpdate.replace(mceTag, newTag);
								//
								break;
							case (newAttr == 'class'):
								//
								console.log('    - Mark -');
								//
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

	//
	//	SPECIFIC FUNCTIONS TO THIS PLUGIN	-----------------------------------
	//	
	function namedColor(strArg1) {

		var retValue = '';

		if (strArg1 !== undefined || strArg1 !== null || typeof strArg1 === 'string' || strArg1.trim() !== '') {
			//
			console.log('FN  > namedColor');
			console.log('    - strArg1: ' + strArg1);
			//
			try {
				var colorArray = [{
					'color': 'aliceblue',
					'hex': '#F0F8FF'
				}, {
					'color': 'antiquewhite',
					'hex': '#FAEBD7'
				}, {
					'color': 'aqua',
					'hex': '#00FFFF'
				}, {
					'color': 'aquamarine',
					'hex': '#7FFFD4'
				}, {
					'color': 'azure',
					'hex': '#F0FFFF'
				}, {
					'color': 'beige',
					'hex': '#F5F5DC'
				}, {
					'color': 'bisque',
					'hex': '#FFE4C4'
				}, {
					'color': 'black',
					'hex': '#000000'
				}, {
					'color': 'blanchedalmond',
					'hex': '#FFEBCD'
				}, {
					'color': 'blue',
					'hex': '#0000FF'
				}, {
					'color': 'blueviolet',
					'hex': '#8A2BE2'
				}, {
					'color': 'brown',
					'hex': '#A52A2A'
				}, {
					'color': 'burlywood',
					'hex': '#DEB887'
				}, {
					'color': 'cadetblue',
					'hex': '#5F9EA0'
				}, {
					'color': 'chartreuse',
					'hex': '#7FFF00'
				}, {
					'color': 'chocolate',
					'hex': '#D2691E'
				}, {
					'color': 'coral',
					'hex': '#FF7F50'
				}, {
					'color': 'cornflowerblue',
					'hex': '#6495ED'
				}, {
					'color': 'cornsilk',
					'hex': '#FFF8DC'
				}, {
					'color': 'crimson',
					'hex': '#DC143C'
				}, {
					'color': 'cyan',
					'hex': '#00FFFF'
				}, {
					'color': 'darkblue',
					'hex': '#00008B'
				}, {
					'color': 'darkcyan',
					'hex': '#008B8B'
				}, {
					'color': 'darkgoldenrod',
					'hex': '#B8860B'
				}, {
					'color': 'darkgray',
					'hex': '#A9A9A9'
				}, {
					'color': 'darkgreen',
					'hex': '#006400'
				}, {
					'color': 'darkgrey',
					'hex': '#A9A9A9'
				}, {
					'color': 'darkkhaki',
					'hex': '#BDB76B'
				}, {
					'color': 'darkmagenta',
					'hex': '#8B008B'
				}, {
					'color': 'darkolivegreen',
					'hex': '#556B2F'
				}, {
					'color': 'darkorange',
					'hex': '#FF8C00'
				}, {
					'color': 'darkorchid',
					'hex': '#9932CC'
				}, {
					'color': 'darkred',
					'hex': '#8B0000'
				}, {
					'color': 'darksalmon',
					'hex': '#E9967A'
				}, {
					'color': 'darkseagreen',
					'hex': '#8FBC8F'
				}, {
					'color': 'darkslateblue',
					'hex': '#483D8B'
				}, {
					'color': 'darkslategray',
					'hex': '#2F4F4F'
				}, {
					'color': 'darkslategrey',
					'hex': '#2F4F4F'
				}, {
					'color': 'darkturquoise',
					'hex': '#00CED1'
				}, {
					'color': 'darkviolet',
					'hex': '#9400D3'
				}, {
					'color': 'deeppink',
					'hex': '#FF1493'
				}, {
					'color': 'deepskyblue',
					'hex': '#00BFFF'
				}, {
					'color': 'dimgray',
					'hex': '#696969'
				}, {
					'color': 'dimgrey',
					'hex': '#696969'
				}, {
					'color': 'dodgerblue',
					'hex': '#1E90FF'
				}, {
					'color': 'firebrick',
					'hex': '#B22222'
				}, {
					'color': 'floralwhite',
					'hex': '#FFFAF0'
				}, {
					'color': 'forestgreen',
					'hex': '#228B22'
				}, {
					'color': 'fuchsia',
					'hex': '#FF00FF'
				}, {
					'color': 'gainsboro',
					'hex': '#DCDCDC'
				}, {
					'color': 'ghostwhite',
					'hex': '#F8F8FF'
				}, {
					'color': 'gold',
					'hex': '#FFD700'
				}, {
					'color': 'goldenrod',
					'hex': '#DAA520'
				}, {
					'color': 'gray',
					'hex': '#808080'
				}, {
					'color': 'green',
					'hex': '#008000'
				}, {
					'color': 'greenyellow',
					'hex': '#ADFF2F'
				}, {
					'color': 'grey',
					'hex': '#808080'
				}, {
					'color': 'honeydew',
					'hex': '#F0FFF0'
				}, {
					'color': 'hotpink',
					'hex': '#FF69B4'
				}, {
					'color': 'indianred',
					'hex': '#CD5C5C'
				}, {
					'color': 'indigo',
					'hex': '#4B0082'
				}, {
					'color': 'ivory',
					'hex': '#FFFFF0'
				}, {
					'color': 'khaki',
					'hex': '#F0E68C'
				}, {
					'color': 'lavender',
					'hex': '#E6E6FA'
				}, {
					'color': 'lavenderblush',
					'hex': '#FFF0F5'
				}, {
					'color': 'lawngreen',
					'hex': '#7CFC00'
				}, {
					'color': 'lemonchiffon',
					'hex': '#FFFACD'
				}, {
					'color': 'lightblue',
					'hex': '#ADD8E6'
				}, {
					'color': 'lightcoral',
					'hex': '#F08080'
				}, {
					'color': 'lightcyan',
					'hex': '#E0FFFF'
				}, {
					'color': 'lightgoldenrodyellow',
					'hex': '#FAFAD2'
				}, {
					'color': 'lightgray',
					'hex': '#D3D3D3'
				}, {
					'color': 'lightgreen',
					'hex': '#90EE90'
				}, {
					'color': 'lightgrey',
					'hex': '#D3D3D3'
				}, {
					'color': 'lightpink',
					'hex': '#FFB6C1'
				}, {
					'color': 'lightsalmon',
					'hex': '#FFA07A'
				}, {
					'color': 'lightseagreen',
					'hex': '#20B2AA'
				}, {
					'color': 'lightskyblue',
					'hex': '#87CEFA'
				}, {
					'color': 'lightslategray',
					'hex': '#778899'
				}, {
					'color': 'lightslategrey',
					'hex': '#778899'
				}, {
					'color': 'lightsteelblue',
					'hex': '#B0C4DE'
				}, {
					'color': 'lightyellow',
					'hex': '#FFFFE0'
				}, {
					'color': 'lime',
					'hex': '#00FF00'
				}, {
					'color': 'limegreen',
					'hex': '#32CD32'
				}, {
					'color': 'linen',
					'hex': '#FAF0E6'
				}, {
					'color': 'magenta',
					'hex': '#FF00FF'
				}, {
					'color': 'maroon',
					'hex': '#800000'
				}, {
					'color': 'mediumaquamarine',
					'hex': '#66CDAA'
				}, {
					'color': 'mediumblue',
					'hex': '#0000CD'
				}, {
					'color': 'mediumorchid',
					'hex': '#BA55D3'
				}, {
					'color': 'mediumpurple',
					'hex': '#9370DB'
				}, {
					'color': 'mediumseagreen',
					'hex': '#3CB371'
				}, {
					'color': 'mediumslateblue',
					'hex': '#7B68EE'
				}, {
					'color': 'mediumspringgreen',
					'hex': '#00FA9A'
				}, {
					'color': 'mediumturquoise',
					'hex': '#48D1CC'
				}, {
					'color': 'mediumvioletred',
					'hex': '#C71585'
				}, {
					'color': 'midnightblue',
					'hex': '#191970'
				}, {
					'color': 'mintcream',
					'hex': '#F5FFFA'
				}, {
					'color': 'mistyrose',
					'hex': '#FFE4E1'
				}, {
					'color': 'moccasin',
					'hex': '#FFE4B5'
				}, {
					'color': 'navajowhite',
					'hex': '#FFDEAD'
				}, {
					'color': 'navy',
					'hex': '#000080'
				}, {
					'color': 'oldlace',
					'hex': '#FDF5E6'
				}, {
					'color': 'olive',
					'hex': '#808000'
				}, {
					'color': 'olivedrab',
					'hex': '#6B8E23'
				}, {
					'color': 'orange',
					'hex': '#FFA500'
				}, {
					'color': 'orangered',
					'hex': '#FF4500'
				}, {
					'color': 'orchid',
					'hex': '#DA70D6'
				}, {
					'color': 'palegoldenrod',
					'hex': '#EEE8AA'
				}, {
					'color': 'palegreen',
					'hex': '#98FB98'
				}, {
					'color': 'paleturquoise',
					'hex': '#AFEEEE'
				}, {
					'color': 'palevioletred',
					'hex': '#DB7093'
				}, {
					'color': 'papayawhip',
					'hex': '#FFEFD5'
				}, {
					'color': 'peachpuff',
					'hex': '#FFDAB9'
				}, {
					'color': 'peru',
					'hex': '#CD853F'
				}, {
					'color': 'pink',
					'hex': '#FFC0CB'
				}, {
					'color': 'plum',
					'hex': '#DDA0DD'
				}, {
					'color': 'powderblue',
					'hex': '#B0E0E6'
				}, {
					'color': 'purple',
					'hex': '#800080'
				}, {
					'color': 'rebeccapurple',
					'hex': '#663399'
				}, {
					'color': 'red',
					'hex': '#FF0000'
				}, {
					'color': 'rosybrown',
					'hex': '#BC8F8F'
				}, {
					'color': 'royalblue',
					'hex': '#4169E1'
				}, {
					'color': 'saddlebrown',
					'hex': '#8B4513'
				}, {
					'color': 'salmon',
					'hex': '#FA8072'
				}, {
					'color': 'sandybrown',
					'hex': '#F4A460'
				}, {
					'color': 'seagreen',
					'hex': '#2E8B57'
				}, {
					'color': 'seashell',
					'hex': '#FFF5EE'
				}, {
					'color': 'sienna',
					'hex': '#A0522D'
				}, {
					'color': 'silver',
					'hex': '#C0C0C0'
				}, {
					'color': 'skyblue',
					'hex': '#87CEEB'
				}, {
					'color': 'slateblue',
					'hex': '#6A5ACD'
				}, {
					'color': 'slategray',
					'hex': '#708090'
				}, {
					'color': 'slategrey',
					'hex': '#708090'
				}, {
					'color': 'snow',
					'hex': '#FFFAFA'
				}, {
					'color': 'springgreen',
					'hex': '#00FF7F'
				}, {
					'color': 'steelblue',
					'hex': '#4682B4'
				}, {
					'color': 'tan',
					'hex': '#D2B48C'
				}, {
					'color': 'teal',
					'hex': '#008080'
				}, {
					'color': 'thistle',
					'hex': '#D8BFD8'
				}, {
					'color': 'tomato',
					'hex': '#FF6347'
				}, {
					'color': 'turquoise',
					'hex': '#40E0D0'
				}, {
					'color': 'violet',
					'hex': '#EE82EE'
				}, {
					'color': 'wheat',
					'hex': '#F5DEB3'
				}, {
					'color': 'white',
					'hex': '#FFFFFF'
				}, {
					'color': 'whitesmoke',
					'hex': '#F5F5F5'
				}, {
					'color': 'yellow',
					'hex': '#FFFF00'
				}, {
					'color': 'yellowgreen',
					'hex': '#9ACD32'
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
				oDoc.hasError = true;
				alert('MESSAGE (#1721)\nNamed color not found.');
			}
		}
		//
		return retValue;
		//
	}

	//
	//	-----------------------------------------------------------------------
	//
	
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
				if (strArg1 !== undefined || strArg1 !== null || typeof strArg1 === 'string' || strArg1.trim() !== '') {
					if (strArg2 === undefined || strArg2 === null || typeof strArg2 !== 'string' || strArg2.trim() == '') {
						throw new Error('ERROR (#1754)\nMissing required argument/s.'); // regular expression
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
				alert(e.message);
				oDoc.hasError = true;
			}
		}
		//
		return retValue;
	}

	function regDecode(strArg1) {
		//
		// decode brackets/parentheses for regex
		//
		var retValue = '';
		//
		if (!oDoc.hasError) {
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg1.trim() == '') {
					throw new Error('ERROR (#1795)\nMissing required argument.'); // value to evaluate
				}
				//
				retValue = strArg1.replace('#sb_','[').replace('_eb#',']').replace('#sp_','(').replace('_ep#',')');
				//
			} catch (e) {
				alert(e.message);
			}
		}
		//
		return retValue;
	}
		
	function regEncode(strArg1) {
		//
		// encode brackets/parentheses for regex
		//
		var retValue = '';
		//
		if (!oDoc.hasError) {
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string' || strArg1.trim() == '') {
					throw new Error('ERROR (#1817)\nMissing required argument.'); // value to evaluate
				}
				//
				retValue = strArg1.replace('[', '#sb_').replace(']', '_eb#').replace('(', '#sp_').replace(')', '_ep#');
				//
			} catch (e) {
				alert(e.message);
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
					throw new Error('ERROR (#1843)\nMissing required argument.'); // value to evaluate
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
				throw new Error('MESSAGE (#1885)\nInvalid or missing selection.');
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
		if (!oDoc.hasError) {
			//
			console.log('FN  > strToArray');
			console.log('    - strArg1: ' + strArg1);
			console.log('    - expArg2: ' + expArg2);
			//
			try {
				if (strArg1 === undefined || strArg1 === null || typeof strArg1 !== 'string') {
					throw new Error('ERROR (#1944)\nMissing required argument.');
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
					throw new Error('ERROR (#1978)\nMissing required argument.');
				}
				var blkTag = getRegExpValue(strArg1, '^<(div|h[1-6]|li|p|td|th).*?>', 'i');
				if (isEmpty(blkTag)) {
					throw new Error('ERROR (#1982)\nInvalid HTML argument.');
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
					throw new Error('ERROR (#2030)\nMissing required argument.');
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
		var htmlDoc = editor.getContent();

		try {
			// validate selection
			//
			var decodeFullHtml = '';
			var decodeUpdateHtml = '';
			var htmlFull;
			var htmlUpdate = '';
			//
			switch (true) {
				case (matchCnt(oDoc.datElements.match(/:/g)) !== matchCnt(oDoc.datElements.match(/;/g)) && matchCnt(oDoc.datElements.match(/;/g)) > 0):
					alert('MESSAGE (#1664)\nA mixture of class and style data elements detected.');
					break;
				case (isEmpty(oDoc.datElements)):
					alert('MESSAGE (#1667)\nMissing element class/style data.');
					break;
				case (oDoc.datAttribute == 'class' && !isEmpty(oDoc.datElements.match(/;/g))):
					alert('MESSAGE (#1670)\nThe element says class, but the input is incorrectly formatted.');
					break;
				case (oDoc.datAttribute == 'style' && isEmpty(oDoc.datElements.match(/;/g))):
					alert('MESSAGE (#1673)\nThe element says style, but the input is incorrectly formatted.');
					break;
				case (oDoc.lineCnt == 1):
					//
					console.log('    # Process Single Line #');
					//
					htmlFull = oDoc.htmlFull();
					//
					switch (true) {
						case (oDoc.hasError):
							//
							// error
							//
							break;
						case (oDoc.isFragment()):
							htmlUpdate = regDecode(oDoc.proFragment());
							break;
						case (oDoc.hasDatColor()):
							htmlUpdate = regDecode(oDoc.proColorElements());

							if (!isEmpty(oDoc.datElements) && !oDoc.hasError) {
								htmlUpdate = regDecode(oDoc.proStdElements());
							}
							break;
						default:
							htmlUpdate = regDecode(oDoc.proStdElements());
					}
					//
					if (!oDoc.hasError) {
						decodeFullHtml = regDecode(htmlFull);
						decodeUpdateHtml = regDecode(htmlUpdate);
						htmlDoc = htmlDoc.replace(decodeFullHtml, decodeUpdateHtml);
						//
						console.log('SRC > ' + decodeFullHtml);
						console.log('UPD > ' + decodeUpdateHtml);
						//
						// write content back
						//
						try {
							//
							console.log('    - Single Line Complete -');
							//
							editor.setContent(htmlDoc);
							editor.undoManager.add();
						} catch (e) {
							alert(e.message);
							oDoc.hasError = true;
						}
					}
					break;
				default:
					//
					console.log('    # Process Multi Line #');
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
							decodeFullHtml = regDecode(htmlFull);
							decodeUpdateHtml = regDecode(htmlUpdate);
							htmlDoc = htmlDoc.replace(decodeFullHtml, decodeUpdateHtml);
							//
							console.log(padNum(idx, 3) + ' > IDX');
							console.log('SRC > ' + decodeFullHtml);
							console.log('UPD > ' + decodeUpdateHtml);
						}
						//
						idx++;
						//
					}
					//
					// write content back
					//
					if (!oDoc.hasError) {
						//
						try {
							editor.setContent(htmlDoc);
							editor.undoManager.add();
							//
							console.log('    - Multi Line Complete -');
							//
						} catch (e) {
							alert(e.message);
							oDoc.hasError = true;
						}
					}
			}
		} catch (e) {
			alert(e.message);
			oDoc.hasError = true;
		}
		if (oDoc.hasError) {
			//
			console.log('    - Post Error Message -');
			//
			location.reload();
		}
		editor.focus();					
		return;
	}
	//
	// button
	//
	editor.addButton('apply_txt_color', {
		title: 'Apply Color',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OS43ODUgNDg5Ljc4NTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTSA0Ni4wNTMgMS45NDkgTCA0Ni4wNTMgMS45NDkgQyA0My42MjYgLTAuNDgyIDM3LjI4MiAxLjkyNCAzMS44ODQgNy4zMjEgTCAzMS44ODQgNy4zMjEgTCAzMS44ODEgNy4zMjEgQyAzMC45ODkgOC4yMTUgMzAuMTc5IDkuMTMzIDI5LjQ2MiAxMC4wNTcgQyAyOC41NTcgMTUuMjExIDI2LjMwMSAxOC44NjUgMjMuNjYgMTguODY1IEwgMjMuNjYgMTguODY5IEMgMjIuODA0IDE4Ljg2OSAyMS45OSAxOC40ODcgMjEuMjUgMTcuNzk3IEwgMjEuMjQ2IDE3Ljc5NyBMIDE5LjI5MSAxNS44NDMgQyAxOC4xODYgMTQuNzM3IDE2LjM5MyAxNC43MzcgMTUuMjg1IDE1Ljg0MyBMIDcuNjg4IDIzLjQzNiBMIDcuMjkyIDIzLjgzNyBMIDEuODI5IDI5LjI5NiBDIDAuNzI0IDMwLjQwMSAwLjcyNCAzMi4xOTUgMS44MjkgMzMuMzAxIEwgMTQuNjk5IDQ2LjE3MSBDIDE1LjgwNSA0Ny4yNzYgMTcuNTk5IDQ3LjI3NiAxOC43MDUgNDYuMTcxIEwgMjQuMTY2IDQwLjcwOCBMIDI0LjU2NiA0MC4zMTIgTCAzMi4xNiAzMi43MTcgQyAzMy4yNjUgMzEuNjExIDMzLjI2NSAyOS44MTcgMzIuMTYgMjguNzExIEwgMzAuMjAzIDI2Ljc1NSBMIDMwLjIwNSAyNi43NSBDIDI5LjUxMyAyNi4wMTIgMjkuMTM2IDI1LjE5NiAyOS4xMzYgMjQuMzQzIEwgMjkuMTM2IDI0LjM0MyBDIDI5LjEzNiAyNC4zNDMgMjkuMTM2IDI0LjM0MyAyOS4xMzYgMjQuMzQzIEMgMjkuMTM2IDIxLjcgMzIuNzg5IDE5LjQ0MyAzNy45NDQgMTguNTM5IEMgMzguODY3IDE3LjgyNCAzOS43ODUgMTcuMDExIDQwLjY4IDE2LjEyIEwgNDAuNjc3IDE2LjExNyBMIDQwLjY4IDE2LjEyIEMgNDYuMDc4IDEwLjcxOSA0OC40ODMgNC4zNzUgNDYuMDUzIDEuOTQ5IFogTSAyNC4zMjIgMzcuNjY5IEwgMjQuMzIzIDM3LjY3MSBMIDE5LjA0NiA0Mi45NDcgTCAxOS4wNDYgNDIuOTQ3IEwgMTcuNjY2IDQ0LjMyNyBDIDE3LjEwMyA0NC44OSAxNi4xOSA0NC44OSAxNS42MjcgNDQuMzI3IEwgMy42NzIgMzIuMzczIEMgMy4xMSAzMS44MSAzLjExIDMwLjg5OCAzLjY3MiAzMC4zMzYgTCA1LjA1MiAyOC45NTYgTCA1LjA1MiAyOC45NTYgTCAxMC4yNSAyMy43NTggTCAxMC4yNSAyMy43NTggQyAxMS41MTkgMjIuNDg5IDEzLjE2NiAyMi4wODQgMTMuOTMzIDIyLjg1MyBDIDE0LjcwMSAyMy42MjIgMTQuMzExIDI1LjI4NSAxMy4wNDcgMjYuNTUxIEwgMTMuMDQ3IDI2LjU1MSBDIDExLjc3OSAyNy44MTcgMTEuMzkzIDI5LjQ4IDEyLjE2MyAzMC4yNDggQyAxMi45MjUgMzEuMDE3IDE0LjU4MSAzMC42MTkgMTUuOTI2IDI5LjI3OCBMIDE1LjkyOSAyOS4yNzggQyAxNy4xODMgMjguMDcxIDE4Ljc3OSAyNy42OTkgMTkuNTMxIDI4LjQ1MSBDIDIwLjI4MSAyOS4yMDQgMTkuOTI0IDMwLjgxNCAxOC43MiAzMi4wNzEgTCAxOC43MjQgMzIuMDc1IEMgMTcuMzgyIDMzLjQxOSAxNi45OTQgMzUuMDgxIDE3Ljc2IDM1Ljg1MiBDIDE4LjUyNyAzNi42MTUgMjAuMTgzIDM2LjIyMSAyMS40NTIgMzQuOTU0IEwgMjEuNTI2IDM0Ljg3NyBMIDIxLjUyNyAzNC44NzcgQyAyMi43ODYgMzMuNjcgMjQuMzc4IDMzLjI5OSAyNS4xMzQgMzQuMDUzIEMgMjUuODgzIDM0LjgwNSAyNS41MjUgMzYuNDE1IDI0LjMyMiAzNy42NjkgWiBNIDI5LjU0NSAzMC40MTMgQyAzMC4xMDggMzAuOTc3IDMwLjEwOCAzMS44ODkgMjkuNTQ1IDMyLjQ1MyBMIDI3LjkyMSAzNC4wNzIgTCAxMy45MjkgMjAuMDc5IEwgMTUuNTQ3IDE4LjQ1NiBDIDE2LjExNiAxNy44OTIgMTcuMDI1IDE3Ljg5MiAxNy41ODkgMTguNDU2IEwgMjkuNTQ1IDMwLjQxMyBaIE0gMzkuNDc5IDguNTI0IEMgMzguNTk3IDcuNjM1IDM4LjU5NyA2LjIwNSAzOS40NzkgNS4zMjMgQyA0MC4zNjUgNC40NCA0MS43OTYgNC40NCA0Mi42NzggNS4zMjMgQyA0My41NjEgNi4yMDUgNDMuNTYxIDcuNjM1IDQyLjY3OCA4LjUyNCBDIDQxLjc5NiA5LjQwNyA0MC4zNjUgOS40MDcgMzkuNDc5IDguNTI0IFoiIHN0eWxlPSIiLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KPC9zdmc+',
		onClick: function () {
			if (isReady()) {
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
						if (!isEmpty(hex_val) && !isEmpty(hex_input)) {
							if (hex_val.substring(0, 1) == '#' && hex_val.length == 7) {
								hex_input.value = hex_val;
							}
							if (hex_input.value.substring(0, 1) == '#' && hex_input.value.length == 7) {
								swatch.style.backgroundColor = hex_input.value;
							} else {
								swatch.style.backgroundColor = '#ffffff';
							}							
						}						
					},
					onSubmit: function () {
						var hexCODE = document.getElementById("hex_id").value.trim();
						
						if (isEmpty(hexCODE.match(/^#[0-9a-f]{6}$/i))) {
							hexCODE = namedColor(hexCODE);
						}
						if (!isEmpty(hexCODE.match(/^#[0-9a-f]{6}$/i))) {							
							if (document.getElementById("bkg_id").checked) {
								oDoc.datElements = 'background-color: ' + hexCODE + ';';
							} else {
								oDoc.datElements = 'color: ' + hexCODE + ';';
							}
							oDoc.datAction = 'blend';
							oDoc.datAttribute = 'style';
							//
							formSubmit();
							//
						} else {
							alert('MESSAGE (#2283)\nSelect from grid, use a valid hex code,\nor named color.');
						}
					},
				});
				console.clear();
				document.getElementById('hex_id').focus();
				formInit();
			}
		}
	});
});
/*
 * EOF: apply-text-color / plugin.js / 210524-1
 */
