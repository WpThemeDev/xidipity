/**
 * WordPress Xidipity Theme
 * Tinymce add-video plugin
 *
 * ###:  plugin.js
 * bld:  210526-1
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
tinymce.PluginManager.add('add_video', function (editor, url) {
	'use strict';
	var videoObject = {
		ar: function () {
			var htmlValue = '';
			switch (document.getElementById('ar_tag').selectedIndex) {
				case (1):
					htmlValue = 'ar:1x1';
					break;
				case (2):
					htmlValue = 'ar:3x2';
					break;
				case (3):
					htmlValue = 'ar:4x3';
					break;
				case (4):
					htmlValue = 'ar:7x5';
					break;
				case (5):
					htmlValue = 'ar:16x9';
					break;
				case (6):
					htmlValue = 'ar:16x10';
					break;
				case (7):
					htmlValue = 'ar:17x9';
					break;
				case (8):
					htmlValue = 'ar:21x9';
					break;
				default:
					htmlValue = 'ar:16x9';
			}
			return htmlValue;
		}, // aspect ratio 
		brand: function () {
			var htmlValue = document.getElementById("id_tag").value;
			var brandIdx = document.getElementById('brand_tag').selectedIndex;
			switch (true) {
				case (!isEmpty(htmlValue.match(/vimeo/))):
					htmlValue = 'vimeo';
					break;
				case (!isEmpty(htmlValue.match(/video/))):
					htmlValue = 'html5';
					break;
				case (!isEmpty(htmlValue.match(/youtube/))):
					htmlValue = 'youtube';
					break;
				case (brandIdx == 1):
					htmlValue = 'vimeo';
					break;
				default:
					htmlValue = 'youtube';
			}
			return htmlValue;
		}, // brand
		id: function () {
			var idValue = document.getElementById("id_tag").value;
			switch (true) {
				case (!isEmpty(idValue.match(/vimeo/))):
					idValue = getRegExpValue(idValue,'vimeo.com\/(.+)','is',1);
					break;
				case (!isEmpty(idValue.match(/video/))):
					idValue = getRegExpValue(idValue,'\/(?!.*\/)(.+)','is',1);
					break;
				case (!isEmpty(idValue.match(/youtube/))):
					idValue = getRegExpValue(idValue,'=(.*?)(&|$)','is',1);
					break;
			}
			return idValue;
		}, // video id
		html: function () {
			var htmlValue = '';
			var videoHtml;
			if (!isEmpty(this.id())) {
				switch (this.brand()) {
					case ('vimeo'):
						videoHtml = '<!--  TMPL:VIDEO/VIMEO --><div class="bdr:so-2x bdr:bas+2 bkg:content cnr:arch-sm wd:100% web[dsp:none]"><div class="#AR#"><div class="ar:content fx:rw fxa:3 fxb:3 fxc:3"><div class="aln:txt-ct fnt:wgt+1 fnt:siz-lg-1x sm)fnt:siz-lg-2x fx:break">Vimeo Video</div><div class="aln:txt-ct fnt:wgt+1 fx:break">ID: #ID#</div><div class="aln:txt-ct fnt:siz-lg-5x sm)fnt:siz-lg-6x fx:break"><i class="icon:video_solid"></i></div></div></div></div><div class="mce[dsp:none]"><div class="ar:container #AR#"><iframe src="https://player.vimeo.com/video/#ID#" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></div><!-- /TMPL:VIDEO/VIMEO -->';
						htmlValue = videoHtml.replace(/#AR#/g, this.ar()).replace(/#ID#/g, this.id());
						break;
					case ('html5'):
						var videoLink = document.getElementById("id_tag").value;
						videoHtml = '<!--  TMPL:VIDEO/HTML5 --><div class="bdr:so-2x bdr:bas+2 bkg:content cnr:arch-sm wd:100% web[dsp:none]"><div class="#AR#"><div class="ar:content fx:rw fxa:3 fxb:3 fxc:3"><div class="aln:txt-ct fnt:wgt+1 fnt:siz-lg-1x sm)fnt:siz-lg-2x fx:break">HTML5 Video</div><div class="aln:txt-ct fnt:wgt+1 fx:break">ID: #ID#</div><div class="aln:txt-ct fnt:siz-lg-5x sm)fnt:siz-lg-6x fx:break"><i class="icon:video_solid"></i></div></div></div></div><div class="mce[dsp:none]"><div class="ar:container #AR#"><video class="ht:auto wd:100%" autoplay="false" preload="auto" loop="loop" muted="false" controls="controls" width="300" height="150"><source src="#LINK#" type="video/mp4" alt="Xidipity HTML5 Video" /></video></div></div><!-- /TMPL:VIDEO/HTML5 -->';
						htmlValue = videoHtml.replace(/#AR#/g, this.ar()).replace(/#ID#/g, this.id()).replace(/#LINK#/g, videoLink);
						break;
					default:
						videoHtml = '<!--  TMPL:VIDEO/YOUTUBE --><div class="bdr:so-2x bdr:bas+2 bkg:content cnr:arch-sm wd:100% web[dsp:none]"><div class="#AR#"><div class="ar:content fx:rw fxa:3 fxb:3 fxc:3"><div class="aln:txt-ct fnt:wgt+1 fnt:siz-lg-1x sm)fnt:siz-lg-2x fx:break">Youtube Video</div><div class="aln:txt-ct fnt:wgt+1 fx:break">ID: #ID#</div><div class="aln:txt-ct fnt:siz-lg-5x sm)fnt:siz-lg-6x fx:break"><i class="icon:video_solid"></i></div></div></div></div><div class="mce[dsp:none]"><div class="ar:container #AR#"><iframe src="https://www.youtube.com/embed/#ID#" frameborder="0" allowfullscreen autoplay=1></iframe></div></div><!-- /TMPL:VIDEO/YOUTUBE -->';
						htmlValue = videoHtml.replace(/#AR#/g, this.ar()).replace(/#ID#/g, this.id());
				}
			}
			return htmlValue;
		} // video html
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
	function isEmpty(argSTR) {
		return (!argSTR || 0 === argSTR.length);
	}
	editor.addButton('add_video', {
		title: 'Add Video',
		icon: false,
		image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjEgM0gzYy0xLjExIDAtMiAuODktMiAydjEyYzAgMS4xLjg5IDIgMiAyaDV2Mmg4di0yaDVjMS4xIDAgMS45OS0uOSAxLjk5LTJMMjMgNWMwLTEuMTEtLjktMi0yLTJ6bTAgMTRIM1Y1aDE4djEyem0tNS02bC03IDRWN3oiLz48L3N2Zz4=',
		onclick: function () {
			editor.windowManager.open({
				title: 'Add Video',
				body: [{
					type: "container",
					html: '<form method="post" style="font-family:sans-serif;font-size:16px;width:300px;"><table><tbody><tr><td style="vertical-align: middle;">Video ID/Link:&nbsp;</td><td><input type="text" id="id_tag" name="id_tag" value="" style="font-family:monospace; border: 1px solid #e9e7e4; width:100%;"></td></tr><tr><td colspan="2">&nbsp;</td></tr><tr><td style="vertical-align: middle;">Aspect Ratio:&nbsp;</td><td><select id="ar_tag" style="border:1px solid #e9e7e4;"><option>default&nbsp;</option><option>1x1</option><option>3x2</option><option>4x3</option><option>7x5</option><option>16x9</option><option>16x10</option><option>17x9</option><option>21x9</option></select></td></tr><tr><td colspan="2">&nbsp;</td></tr><tr><td style="vertical-align: middle;">Source:&nbsp;</td><td><select id="brand_tag" style="border:1px solid #e9e7e4;"><option>You Tube&nbsp;</option><option>Vimeo</option><option>Html5</option></select></td></tr></tbody></table></form>'
					}],
				onSubmit: function () {
					// video object
					var videoObj = Object.create(videoObject);
					if (!isEmpty(videoObj.html())) {
						//alert(videoObj.html());
						editor.execCommand('mceInsertContent', false, videoObj.html());
					}
				}
			});
			console.clear();
			document.getElementById('id_tag').focus();
		}
	});
});
/*
 * EOF: add-video / plugin.js / 210526-1
 */
