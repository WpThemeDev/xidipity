/**
 * WordPress Xidipity Theme
 * Tinymce add-template plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('add_template', function(editor) {
	'use strict';
	editor.addButton('add_template', {
		title: 'Add Template',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LXJlZ2lzdHJ5LWVkaXRvci01MDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGlkPSJyZWN0LTEiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uczgtcmVnaXN0cnktZWRpdG9yLTUwIj4KICAgICAgICAgICAgPGltYWdlIHg9IjEiIHk9IjEiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUFYTlNSMElBcnM0YzZRQUFBRVJsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUE2QUJBQU1BQUFBQkFBRUFBS0FDQUFRQUFBQUJBQUFBTXFBREFBUUFBQUFCQUFBQU1nQUFBQUIxeTYrckFBQURDMGxFUVZSb0JlMVl5Mm9WUVJDTjc1VUJVUVNEQ3U2Q1diaHhwYUltSW03MFIvUURBa0lncm5RbnJuVG5SK2hDMElVYTNRVmMrUU5SOFFIdUl6NlNjd0lOOTFhcTY5SE93Q3ltb0pqYlZlZWM2cDZlN3VtNU16UER0ZmZvMmxiUTMvVTlqTXNvY0I5K3BLRlFkQkFGMTFBaVJqa0YyRTg0QzIzQUw4SXpWam9ZdldhMHc5ajlRTXBINHpkaXEvQzk4SWhGQjFCd0VjMDA1Z0VZcFlDOHZrTHVSRUJSOHJ4MlFESUhXUVQ4TDl3cS9CMzVHNDZzeGRkeWpsd3VmUnp3cjNDdGtJejlBKzRSL0FCY000bjMycHBHVTR6UC9rdTRWMURtMzRCeldLa29jVjVia1dnTDNRWE5LMWJMWDFGSzFyQzF1Q0tSRDEwQWhidFNyWWdWZnc3ZUhxV2t4ZEZ5aWtRKzlCUVVUZHlMZlFMdldLV2N4NVg1aWt3dWZBYndkYmdVdDlwL2dPZWJ2MlpyU0ZqOHlkeGJpc2dYMXlSQS9xWjR6UTRoOFJETzNVanl0UFpLVGFnMXJoV3hZbDZkNndCOGcxc2FyNUhmQisvVXJJSmFMbEw4SkVEY1ZqWCtEOFRuSWlKWmpGYk1pa1gxZWNkWDRWd0xSWStQM1UxNEwxYUtSSy9aVGl5QzhBVk9mWjdCV28wdnpRV0xIQjFBd1ZsYXRkeFJKRzdCcyt2aU5EaTM0Uy9nbTNEMjRTcGN0ZExCNkZVVjZUREl1NzRNNTFlZnRnTStydFdLRHFEZ2Fqci9FNzhHOGhQNFozaXBVN3NTbzUwRVhLSVVoRTZuZGhacXNvYlhQaTk3RVAxYWs3d3UyeHNRKzVVVTVIcmJaZDdvWlg2WFFBY0JMbVpaeDJwL2tEVTVJMXhVVVZ1TEFwTzRaMG44T2VDNW93M08rSStMdGtOWnMzSkhqcUxsME5qQ2tYVmxtNCtMMVhHWjQrTTRaUkxndFVuMk1ESS9WYkRTdUpmVTVRWXhXN1NHc0d1VnZtVFh5VUVRcHc2Zjh1NTViUmIyTURKZk9tdGQrWktMdmhENThseVNZcktvMXliZnc4aThyRmxyOC9naHVXeC9oUFBBZVFtdXZ0VVJWNG1hV0ltMWNzanpqRWNWMXRtRWN6SHp3QmplWmtzSG8xZG9OdzJldklqTkE2VDl6MlZ5T1UwY1FNWmFPWmthYWV5UWRxMTA1eWNKNDBBbTc4WVFmbk5HZU55SVdqazB0bkNpTlVaY3l3R3diMDdtMDJKbkJsdTMwc0Z0MmVPdU5iUVZPYzdJT0NNOTNZSHgwZXJweGpiTGpqUFNmT3Q2SW5KR1dnNkFmWFBTUjVSdDlUekEwSlhaU3FrQUFBQUFTVVZPUks1Q1lJST0iPjwvaW1hZ2U+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlLW9wYWNpdHk9IjAuMDEiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjcmVjdC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
		onclick: function() {
			editor.windowManager.open({
				name: 'embed',
				title: 'Add Template',
				width: window.outerWidth * .5,
				minWidth: 320,
				height: window.outerHeight * .6,
				minHeight: 640,
				body: {
					id: "embed",
					type: "textbox",
					name: "mce_txt",
					multiline: !0,
					minWidth: window.innerWidth * .4,
					minHeight: window.innerHeight * .61,
					style: "direction: ltr; text-align: left; height: 100%; font-family: 'Roboto Mono', monospace; color: #212121; border: 1px solid #f5f5f5;"
				},
				onSubmit: function() {
					var html = document.getElementsByClassName("mce-textbox")[0].value.trim();
					editor.insertContent(html);
				}
			}, {});
		}
	});
});

/*
 * EOF: add-template / plugin.js / 27200615
 */
