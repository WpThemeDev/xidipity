/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-size plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_size', function(editor) {
	'use strict';
	editor.addButton('apply_txt_size', {
		type: 'splitbutton',
		title: 'Font Size',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LXRleHQtaGVpZ2h0LTUwPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgaWQ9InJlY3QtMSI+PC9yZWN0PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb25zOC10ZXh0LWhlaWdodC01MCI+CiAgICAgICAgICAgIDxpbWFnZSB4PSIxIiB5PSIxIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFBWE5TUjBJQXJzNGM2UUFBQUVSbFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBNkFCQUFNQUFBQUJBQUVBQUtBQ0FBUUFBQUFCQUFBQU1xQURBQVFBQUFBQkFBQUFNZ0FBQUFCMXk2K3JBQUFCaVVsRVFWUm9CZTFaeTA0RE1Rd3MvQU1JL3Y5TDRORHlLRDJVQTUvVGVzVE9LcldTYnVYVUFjUllzcHhzNG5FOGp2YmdyRllTTVNBR3hJQVkrR0VHM2l6K1liQytYSkR6dmUzNU1OMmFZcndvbzVOZ3ZITUh1N1BGdlNuM2Z0bjQ4WndEMXJoNXRHMmR5eWZCY3kwbXc0MmpiUzBSWEtIUGlWeGFuSXRqMk9ZMUc1MEE0OW1aVHFTc0JOaC9NT1ZldjFhOVpxK0ZBeDJ6N2VZa2hlL0orM1NPa25XZUF6dkthdUVIMVMwRTk3WVhHTW41UHhSakVCdkpZTTlNeEExWEFoYmdOZW5Cck9IaEcyTTFzVzlibm4vdHV4TDViUlZUUlZTUkpBWjB0WktJRGNPcUltSHFraHhWa1NSaXc3Q3FTSmk2SkVkVkpJbllNS3dxRXFZdXlWRVZTU0kyREt1S2hLbExjbFJGa29nRjdMT3BiOUQ1Y0dqUXJVMmYvRUprenU2ZnR4R3Mwb2Z2TkplMFROSG03UmFmQU9lOXdMVkdOYkg5R2hyYzNVSndiN3VCRGFCc1ZQTXBBWEU0THF2VkhjOG53SGszOEFSUXNrOXNXRDQxWEN2Ty9HWlJCc0g0bXVLVFdYeXRpZ1N2dmFmTWJmNElZTU1IeWVBdnRqUEZsWk9JQVRId254azRBcUVLS29OVEMzRk1BQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgICAgICA8dXNlIHN0cm9rZS1vcGFjaXR5PSIwLjAxIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeGxpbms6aHJlZj0iI3JlY3QtMSI+PC91c2U+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
		menu: [{
			icon: false,
			text: '•\xa05x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-5x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa04x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-4x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa03x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-3x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa02x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-2x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0x Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Large',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-large">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa01½ Default',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-medium">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Default',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-size-medium">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Small',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-small">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0x Small',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-x-small">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa02x Small',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-2x-small">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Larger',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-larger">{$selection}</span>');
			}
		}, {
			icon: false,
			text: '•\xa0Smaller',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="fnt:size-smaller">{$selection}</span>');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-size / plugin.js / 27200615
 */
