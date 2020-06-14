/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-color plugin
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_color', function(editor) {
	'use strict';
	editor.addButton('apply_txt_color', {
		type: 'splitbutton',
		title: 'Text Color',
		icon: true,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LXRleHQtY29sb3ItNTA8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBpZD0icmVjdC0xIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbnM4LXRleHQtY29sb3ItNTAiPgogICAgICAgICAgICA8aW1hZ2UgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFNcUFEQUFRQUFBQUJBQUFBTWdBQUFBQjF5NityQUFBQzRVbEVRVlJvQmUxWXo0dk5VUlIvakRDaHBNeUdlcVVNSzhtV0pLdFJva3hpOXhvMlZySzBvUHdEYk1TT1VzcHFNalVwWkNOUnNyQ2NORTF2RWpOcEZDRk5mbjgrOWRKNXV1ZmNlOSs5OTMyZit0NjZ2ZnM5NTNQTytkeHpmNzdiYU5TbHprQ2RnVG9EQ1JsNENOdmZTcDFLOE50WDA3MUtCMlRIOXVSbXRESzNRL2liQ1BBWmdnbHdVdzZ5RHE0L29jcnN1OW9mZ0JuT1NTUDNpQndIdVEwQkJEY0NjelFBVnhua01TSzdSc0FsZTFBWlMwL2diZEQvaXVqSVQyQ2JIcC9CNnB4VDZ6U2lyZ2lPM0dnd2Rpc0MzeGNvU2IxR2RVMGhTOWFHVGM1a0puZDJ6T2pFVytpK0d2cUR5ZEhoSUZjMlRobGtia04zejlBUHpKbXlDU1NYVWJVcHRCdTZjVVBQMGVKMlhIazVDd1phSjJZNjdOYmk5Nk9CTzlQQlZmcnowaUI0VVRDN1plQ2VDMXdsVFY3K3ROR2dmTHRnWlcwSXhPNFMyTDQzcnlLaTFwRi9zN3dLMkhjRy9uTGYyWGNDcnNidmtrSHNuSVBZZFFQL0hybzFEcHZpb2hNR0tWNC90amdZN0Rkc09MTEhIRGJGUmZjTlVvK1U2THpDekJ0MjA0cWRWeHh6TjVMT3R1SmpIblZJQ2tXN2pmYWMrSlpOTHVvUktSRHRIMmczVVJlRXJHanpBcnhyaXp4VmZyNG9jK0djb3poYnNDT3Y0THZYbVNKbytwc0hBRW5OdXM5K241OUdONktYUytORXQ0c2lYOFZqckFmdHo2aStqS2JxdnlCR3lILy92MW5rYVJ0VFRnTE16bWpsQmhRODJFSUtkNjlEQ3BDdk1Yekl1S25vazhYUDRFSExOcmRNYlR0MkJXNUNhUDNIZitJeXlpRWI5UVR1NWE1a0pZWUoyeGxLUEdheCt4NFg3b1FHRlRpZlRVdGdzelM1bGpoMXRHbkZjNldYc2hsRzMxRTF2NHZReGE1ams4Y1JJeGhKWERLdGJhVjFaNlB2dzdaNW5QWXU0RnJXS044UjU2NEwzZkw0bnV4Q0ozendjZUdiRWV4RmdtK2E4cnl3bm9zWW14ek1FckxZZWUvaFhIV1ZaUWl2dUJRUk1oNncxMUM1RmJ1S0Z0dUZyV1YxQnFyS0FPOVExcTVWVXRkRzdLZ0xwSlVrdmhpV0pPdno3YjJxaE94YVZnY0hSbGQzWkdDR29rT2tIcEgvZFVTZVZraWMyKzhiWC93L01EVGFCTlpMcVVJQUFBQUFTVVZPUks1Q1lJST0iPjwvaW1hZ2U+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlLW9wYWNpdHk9IjAuMDEiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjcmVjdC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
		menu: [{
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMjQgMjRIMFYwaDI0djI0eiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjgiLz48L3N2Zz4=' ,
			text: '\xa0Black',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:blk">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dG9vbGJhcl9jb2xvcl9ibGFjazwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0idG9vbGJhcl9jb2xvcl9ibGFjayI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjI0IDI0IDAgMjQgMCAwIDI0IDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzUyNTI1MiIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMTIiIGN5PSIxMiIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
			text: '\xa0Grey',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:bas-3">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dG9vbGJhcl9jb2xvcl9ibGFjazwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0idG9vbGJhcl9jb2xvcl9ibGFjayI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjI0IDI0IDAgMjQgMCAwIDI0IDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0RDMTQzQyIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMTIiIGN5PSIxMiIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
			text: '\xa0Red',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:red">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dG9vbGJhcl9jb2xvcl9ibGFjazwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0idG9vbGJhcl9jb2xvcl9ibGFjayI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjI0IDI0IDAgMjQgMCAwIDI0IDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwNDdBQiIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMTIiIGN5PSIxMiIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
			text: '\xa0Primary',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:pri">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dG9vbGJhcl9jb2xvcl9ibGFjazwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0idG9vbGJhcl9jb2xvcl9ibGFjayI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjI0IDI0IDAgMjQgMCAwIDI0IDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGNjIwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMTIiIGN5PSIxMiIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
			text: '\xa0Secondary',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:sec">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dG9vbGJhcl9jb2xvcl9ibGFjazwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0idG9vbGJhcl9jb2xvcl9ibGFjayI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjI0IDI0IDAgMjQgMCAwIDI0IDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwNjQwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMTIiIGN5PSIxMiIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
			text: '\xa0Green',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:green">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dG9vbGJhcl9jb2xvcl9ibGFjazwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0idG9vbGJhcl9jb2xvcl9ibGFjayI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjI0IDI0IDAgMjQgMCAwIDI0IDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzgwMDA4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMTIiIGN5PSIxMiIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
			text: '\xa0Purple',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:purple">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dG9vbGJhcl9jb2xvcl9ibGFjazwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0idG9vbGJhcl9jb2xvcl9ibGFjayI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjI0IDI0IDAgMjQgMCAwIDI0IDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwMDBGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMTIiIGN5PSIxMiIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
			text: '\xa0Blue',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:blue">{$selection}</span>');
			}
		}, {
			icon: true,
			image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjwvc3ZnPg==',
			text: '\xa0White',
			onclick: function() {
				editor.execCommand('mceReplaceContent', false, '<span class="txt:wht">{$selection}</span>');
			}
		}, ],
	});
});

/*
 * EOF: apply-text-color / plugin.js / 27200615
 */
