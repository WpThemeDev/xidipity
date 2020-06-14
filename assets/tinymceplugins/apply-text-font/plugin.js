/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_font', function(editor) {
	'use strict';
	editor.addButton('apply_txt_font', {
		type: 'splitbutton',
		title: 'Fonts',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LWEtNTA8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBpZD0icmVjdC0xIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbnM4LWEtNTAiPgogICAgICAgICAgICA8aW1hZ2UgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFNcUFEQUFRQUFBQUJBQUFBTWdBQUFBQjF5NityQUFBREFFbEVRVlJvQmUxWlBXZ1ZRUkJPb3NhZjRCOFNCQlVrRURCWW1GaG9sVlJKb2E4eDJFUUxKUmF4TWFsTXBZMVdTYVdOVm5iYW1DNDIwU3JCUWl1dEhnZ0JVWVJISUlvK05QNmlVYjhoNzVKbGM3c3p1emYzVHVFdExMZTNPL045Mzh6cy9YRk5UWTNXeU1CL2tZRjlVRmxCLzhOMHNpRmJ0ZGFpaHJRQ2RBR0gvUUpNc2hrVzJCVm1VZ1l6VjQxay9VVmhLaG5pN29BZ2ttQ09NSmppWmMydGRWYk11bVlZNDdQbW5jT29HWml2MFpOTVM0OXY0RU8rLzB6cmd4S3BlTnV1VnlNS3JhMlZaWXRrOGRYSXdTckdSb3dXMGUxTVM4L2Z3WGZUS2xxQmcxS0dJSkpnVDJiVnI3RzFOTGFHQmthbVhHeUQ5eEpUa1d0WXA1NWtQKzM0R2V0dDZJVzFNMkJPRTJiT0hZSk5wOEJ1cUxBb1FQeUFFZmpNRUVkak0wQjdQRzNZMW5XNEcyemZHWEdYRFVVMHRzV2I1eit3dnNld3I5dndJaU5zR2VzSEREWDAydjZMOFJreDdPczJuR05FemFZb29UbXpDdlk0elNjRlJtOHFOcnVVY1Z1OGVXNVhVVSt4QTJtY0VlVGE3NkhYbFlOZWIvbzVFNGp2RGhSeXA5TlRuSUxVeFFSQlc4WDNUSkE4ZXc2bjhLcFBYV2NDK1lSMWV1SzdtdlJ0d09Xdk5qOFBKUE1DdGNkM0JVejNHSXlYV00vMWcrczRJNENDa3J6SmxnUTR4MkNUVzdzSlpMc0M1dmxickV1K0xTVGZNRGZ5aW9KZStTdE1JTGNDeUc4eldBdFkzeENBSnpZZFlJak55bWlOKzZYcVFqNnNpdmo0VWVmY2pNeFVDNmpJUjNCdWtWUkZXaEc2eSt5U0FDcmI3QURlQ1FtbU5CRDFFa3ZFMVd6VXVMY0Q4Q3U2MWdVY2l2TU4zRHRyUVRrUGtvcWNodmRXSjBMK0MzU05uTktnZVFRUVh4YWZLSkFRaG8vallWYU9kZ0Q4WkVndVpTV0IveWpEUVJyMlp1RVp5NXVnSms2U01BbzJ1ajJGcDYva005SEk2eDFwKy9pNG9yZndRUUQvWnNEUHJkY1RQWE9lNFNJdEhUSG9WeGxndWkzU0EwdXIwVzMrQzdxdktsZGl5TW9NNlAwWVVNWm5pdUVNL29IYXpRQlMxbFR1N1ZaZ2d3TGVvQitva3d6Z0I2elRpNlIyYXdYZ2UzVGY5cG9JSVgzRmdOMEpBUXUwSld4ZklLUk4zQjdEMGdWRzFlZ1JJNFViSG9WTEZkM0ZUOW9hclpHQmVtWGdMd1o3ZFRqeTdzb1RBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgICAgICA8dXNlIHN0cm9rZS1vcGFjaXR5PSIwLjAxIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeGxpbms6aHJlZj0iI3JlY3QtMSI+PC91c2U+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
		menu: [{
			icon: false,
			text: '•\xa0Sans',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-sans">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Serif',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-serif">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Mono',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-mono">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Cursive',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-cursive">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Condensed',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-condensed">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Fancy',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:family-fancy">{$selection}</span>');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-font / plugin.js / 27200615
 */
