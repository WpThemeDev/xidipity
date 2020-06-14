/**
 * WordPress Xidipity Theme
 * Tinymce add-misc-opts plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_misc_opts', function(editor) {
	'use strict';
	editor.addButton('add_misc_opts', {
		type: 'splitbutton',
		title: 'Block Quote',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LXF1b3RlLWxlZnQtNTA8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBpZD0icmVjdC0xIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbnM4LXF1b3RlLWxlZnQtNTAiPgogICAgICAgICAgICA8aW1hZ2UgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFNcUFEQUFRQUFBQUJBQUFBTWdBQUFBQjF5NityQUFBQmFrbEVRVlJvQmUxVnNZcENNUkRVcXdRN2k4TkcwRjhRcklUN0JSc3J2L0I2UDhMQ0gxQXNyYlMxdWtKMHRnanVpWEVUSHd0NzNpd3N4bVR6Wm5ibUphL1ZZbEFCS3ZBdkZHaFhkamxHL1F6NWhld2pCOGd1c3ZZNTJQSTBYSENFNUJ5NVFWNHlpZW5HNFlvekFyMFZNdGRBbW0vYWhTdk9GT3dPQlUxSU0wM0NGVWZPd0E4eUtXNzl2dHFJSzg0UXJJNFZUYnpxaUN1T0hMaVNNM0h2RUxaVmhUdU8zRTczSkIvOTM2TnVnZXhWMGI4VnUrS0lTcyt1Mk5UUURuV2ZOMDdWSTNjYytRZ2xzcm5mTTJvbTFkUi9iM0RCK1ZBWThzVzJZb21DdFZWa3JMdmc2RWJrS3JUaTJ5b29XSGZIMllKRTdwVks4Nk1Db2xhSk84NnBvSkdPeGJKZzNRVkhicEFVb3JvVnV0NnF6YTI3NE9nemtnUCtFL05hNFJLbGFwclN6OWI3WEhEZXhoRTJvdCtWQ0dNNkVzRUZ6WUdPYURVaWpPbElCQmMwQnpxaTFZZ3dwaU1SWE5BYzZJaFdJOEtZamtSd1FYT2dJMW9OanFrQUZhQUNWSUFLVUlFZ0Nsd0JocWptNUMxNlgxNEFBQUFBU1VWT1JLNUNZSUk9Ij48L2ltYWdlPgogICAgICAgICAgICA8dXNlIHN0cm9rZS1vcGFjaXR5PSIwLjAxIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeGxpbms6aHJlZj0iI3JlY3QtMSI+PC91c2U+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNSAxN2gzbDItNFY3SDR2NmgzbC0yIDR6bTEwIDBoM2wyLTRWN2gtNnY2aDNsLTIgNHoiLz48L3N2Zz4=',
			text: '\xa0Block Quote',
			onclick: function() {
				editor.execCommand('mceBlockQuote');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMyA1aDJWM2MtMS4xIDAtMiAuOS0yIDJ6bTAgOGgydi0ySDN2MnptNCA4aDJ2LTJIN3Yyek0zIDloMlY3SDN2MnptMTAtNmgtMnYyaDJWM3ptNiAwdjJoMmMwLTEuMS0uOS0yLTItMnpNNSAyMXYtMkgzYzAgMS4xLjkgMiAyIDJ6bS0yLTRoMnYtMkgzdjJ6TTkgM0g3djJoMlYzem0yIDE4aDJ2LTJoLTJ2MnptOC04aDJ2LTJoLTJ2MnptMCA4YzEuMSAwIDItLjkgMi0yaC0ydjJ6bTAtMTJoMlY3aC0ydjJ6bTAgOGgydi0yaC0ydjJ6bS00IDRoMnYtMmgtMnYyem0wLTE2aDJWM2gtMnYyek03IDE3aDEwVjdIN3YxMHptMi04aDZ2Nkg5Vjl6Ii8+PC9zdmc+',
			text: '\xa0Frame Content',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<!--  xwp:EDITOR/CONTENT/FRAME --><table class="frame"><tr><td>{$selection}</td></tr></table><!-- /xwp:EDITOR/CONTENT/FRAME -->');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<!--  xwp:EDITOR/CONTENT/FRAME --><table class="frame"><tr><td id="' + uniqueID + '">&nbsp;</td></tr></table><!-- /xwp:EDITOR/CONTENT/FRAME -->';
					editor.insertContent(html);
					var newTag = dom.select('td#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik05LjQgMTYuNkw0LjggMTJsNC42LTQuNkw4IDZsLTYgNiA2IDYgMS40LTEuNHptNS4yIDBsNC42LTQuNi00LjYtNC42TDE2IDZsNiA2LTYgNi0xLjQtMS40eiIvPjwvc3ZnPg==',
			text: '\xa0Code',
			onclick: function() {
				var seltxt = editor.selection.getContent({
					format: 'text'
				});
				if (seltxt.length > 0) {
					editor.execCommand('mceReplaceContent', false, '<code>{$selection}</code>');
				} else {
					var dom = editor.dom;
					var uniqueID = dom.uniqueId();
					var html = '<code id="' + uniqueID + '">&nbsp;</code>';
					editor.insertContent(html);
					var newTag = dom.select('code#' + uniqueID)[0];
					editor.selection.setCursorLocation(newTag);
				}
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zIDE4aDEydi0ySDN2MnpNMyA2djJoMThWNkgzem0wIDdoMTh2LTJIM3YyeiIvPjwvc3ZnPg==',
			text: '\xa0Insert Excerpt',
			onclick: function() {
				var dom = editor.dom;
				var uniqueID = dom.uniqueId();
				var html = '<!--  xwp:EDITOR/EXCERPT --><table class="bdr:collapse mar:top-0 mar:bottom+0.5 wd:100% web[dsp:none]"><tr><td class="bdr:solid-thin bdr:bas-300 bkg:tint-bas+1 cnr:arch-small fnt:size-small pad:+0.5" id="' + uniqueID + '"></td><td class="mce[dsp:none]"><!--more--></td></tr></table><!-- /xwp:EDITOR/EXCERPT -->';
				editor.insertContent(html);
				var newExcerpt = dom.select('td#' + uniqueID)[0];
				editor.selection.setCursorLocation(newExcerpt);
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDguNDFMMTYuNTkgMTMgMTggMTEuNTlsLTYtNi02IDZMNy40MSAxMyAxMiA4LjQxek02IDE4aDEydi0ySDZ2MnoiLz48L3N2Zz4=',
			text: '\xa0Acronym',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<abbr>{$selection}</abbr>');
			}
		}],
	});
});

/*
 * EOF: add-misc-opts / plugin.js / 27200615
 */
