/**
 * WordPress Xidipity Theme
 * Tinymce add-icon plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_icon', function(editor, url) {
	'use strict';
	editor.addButton('add_icon', {
		title: 'Add Icon',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LXhsYXJnZS1pY29ucy01MDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGlkPSJyZWN0LTEiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uczgteGxhcmdlLWljb25zLTUwIj4KICAgICAgICAgICAgPGltYWdlIHg9IjEiIHk9IjEiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUFYTlNSMElBcnM0YzZRQUFBRVJsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUE2QUJBQU1BQUFBQkFBRUFBS0FDQUFRQUFBQUJBQUFBTXFBREFBUUFBQUFCQUFBQU1nQUFBQUIxeTYrckFBQUNSa2xFUVZSb0JlMVl1VW9FUVJEMWlnVE5GUTNGMU1DUE1GSVRZMy9CSXpEeEE4eEY5QnRFREl6VUw5RE1TQkRCU0F3VVFjVkFQTkQzbHEyMTZhMnU3dGxkaHRtaEc0cnVydVBWTlZNNzdNQkFYcmtDdVFKV0JRWWgvTFVVK2tVMjFDK0J4dUxNaWNRcVZMYThOaDBaQ1ZTT1E2REtxMjFBMWFZak9aR3FQWGU1STdrai94V1l4dkVJOU5ha1kreXpvSTRYUjVsUHFXRGpVTHdFWFlCR1U0Mmd4eVNlUWI1ZjhxWkFzZVhiOGQ0RzFtREdrQ0RuYjlDcFk3K2ZZQ01xN0lRV0RIbUhvbVRzbXEwS2FHQzBSQWM0K1lCTExhbDk0T1BrMjhyOTFUWnRTRVhYM1ZYQUdOWm1JSkFuOENkaXhwQmJpYndrMkxzSnlMbHdJc3R3OUFNU0FIOC9oeXoyaWNNWDI3ZVRPeCs3MkJKZGQxY0JRMER6RUx5RFhBRHR2QkVDYVBJNW5VSXYrMHpFbG1MTnA4NVV3RGhwSGdJZ1B2QUg5T1lVREpmRjZjUVhtKzhFaVoxSVNRSnFlc3grRUx6N2F3eU1LNUNtRytKZFE3L0lTUFo5V25mTnB4cWNDektNeXdsSU00N3g5bHlnSHA0MXYycUFycy9kRHBNUVo0c3VXSS9PZ3UzdVppSnJYU1pCUjQ4Z2F5VHpoM1VWZEFPNkEyMkRKa0hXY2hPUXM1bklOOUJFc1p2OUREaitTSllFYmhVZlgrQnhSQytBdEM5MExSWTFVTmczbG1iUUtXKzlpY25BVmtEc1FBcldQZlIyUUp5YXNqUTdGY3d5MEVCU2VCekpXeUN0QXluMm54SVU5amI5MEQrTjhoalFvRW9yR0pmMi9GVXA4T1JZY2lMSnBTcEpNWGVrcEVJbnU4a2RTUzVWU1lxMTZRaS9kNndsUDBDV1RpVmt0ZWxJNkJPbEVsVXVFa1J0T3BJVEtkTDJNblJyMDVFeWlwVjk1QXIwY3dYK0FFblJpeUYrKy9LL0FBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlLW9wYWNpdHk9IjAuMDEiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjcmVjdC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
		onclick: function() {
			editor.windowManager.open({
				name: 'icon',
				title: 'Embed Icon',
				width: window.outerWidth * .5,
				minWidth: 320,
				height: window.outerHeight * .2,
				minHeight: 160,
				body: {
					id: "embed",
					type: "textbox",
					name: "mce_txt",
					multiline: !0,
					minWidth: window.innerWidth * .4,
					minHeight: window.innerHeight * .15,
					style: "direction: ltr; text-align: left; height: 100%; font-family: 'Roboto Mono', monospace; color: #212121; border: 1px solid #f5f5f5;"
				},
				onSubmit: function() {
					var html = document.getElementsByClassName("mce-textbox")[0].value.trim();
					if (html.includes('fa-')) {
						html = html.replace('</i>', '&#8203;</i>');
					} else if (html.includes('<img')) {
						html = html.replace('<img', '<img class="dsp:inline-block"');
					}
					html = html.concat('&nbsp;');
					editor.insertContent(html);
				}
			}, {});
		}
	});
});

/*
 * EOF: add-icon / plugin.js / 27200615
 */
