/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-font plugin
 *
 * ###:  plugin.js
 * bld:  28200715
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
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+aWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQ8L3RpdGxlPgogIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogIDxnIGlkPSLwn5SNLVN5c3RlbS1JY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8ZyBpZD0iaWNfZmx1ZW50X3RleHRfZm9udF8yNF9maWxsZWQiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgIDxwYXRoIGQ9Ik0xNC40MzgxLDUuODk2MDU5NzggQzE0LjgwNzE5LDUuODk2MjIxOTkgMTUuMTQyNDIyLDYuMDk5MTEwOCAxNS4zMTU4NTY1LDYuNDE3NjEwOSBMMTUuMzY3NSw2LjUyNzk0IEwyMC43MTA2LDIwLjAyMzQgTDIxLjAwODYsMjAuMDIzNCBDMjEuNTYwOSwyMC4wMjM0IDIyLjAwODYsMjAuNDcxMSAyMi4wMDg2LDIxLjAyMzQgQzIyLjAwODYsMjEuNTM2MjUgMjEuNjIyNTczLDIxLjk1OTAzODUgMjEuMTI1MjIzOSwyMi4wMTY4MjAzIEwyMS4wMDg2LDIyLjAyMzU1IEwxNy45OTk5LDIyLjAyMzMgQzE3LjQ0NzcsMjIuMDIzMyAxNywyMS41NzU2IDE3LDIxLjAyMzMgQzE3LDIwLjUxMDQ1IDE3LjM4NjAyNywyMC4wODc3OTA4IDE3Ljg4MzM3NjEsMjAuMDMwMDI3NSBMMTgsMjAuMDIzMyBMMTguNTU5NSwyMC4wMjMzIEwxNy43NTg0LDE3Ljk5OTkgTDExLjEwNTgsMTcuOTk5OSBMMTAuMzAyNiwyMC4wMjMzIEwxMSwyMC4wMjMzIEMxMS41NTIzLDIwLjAyMzMgMTIsMjAuNDcxIDEyLDIxLjAyMzMgQzEyLDIxLjUzNjE1IDExLjYxMzk3MywyMS45NTg4MDkyIDExLjExNjYyMzksMjIuMDE2NTcyNSBMMTEsMjIuMDIzMyBMOCwyMi4wMjMzIEM3LjQ0NzcyLDIyLjAyMzMgNywyMS41NzU2IDcsMjEuMDIzMyBDNywyMC41MTA0NSA3LjM4NjAzNTY2LDIwLjA4Nzc5MDggNy44ODMzNzc5LDIwLjAzMDAyNzUgTDgsMjAuMDIzMyBMOC4xNTA4MSwyMC4wMjMzIEwxMy41MDgyLDYuNTI3MTEgQzEzLjY1OTUsNi4xNDYwMSAxNC4wMjgxLDUuODk1ODcgMTQuNDM4MSw1Ljg5NjA1OTc4IFogTTE0LjQzNjUsOS42MDk1IEwxMS44OTk3LDE1Ljk5OTkgTDE2Ljk2NjYsMTUuOTk5OSBMMTQuNDM2NSw5LjYwOTUgWiBNNy4wMDA1NywyIEM3LjQyMTA3LDIgNy43OTY2NCwyLjI2MzEgNy45NDAzMywyLjY1ODI5IEwxMC44MjIsMTAuNTgzOSBMOS43MTEyOCwxMy4zODIgTDkuMjA4OCwxMiBMNC43OTE0NywxMiBMMy45Mzk4MSwxNC4zNDE4IEMzLjc1MTA1LDE0Ljg2MDggMy4xNzcyNywxNS4xMjg1IDIuNjU4MjUsMTQuOTM5OCBDMi4xMzkyMiwxNC43NTEgMS44NzE0OSwxNC4xNzcyIDIuMDYwMjUsMTMuNjU4MiBMNi4wNjA3NSwyLjY1ODIyIEM2LjIwNDQ3LDIuMjYzMDQgNi41ODAwNiwyIDcuMDAwNTcsMiBaIE03LjAwMDQxLDUuOTI2MTggTDUuNTE4ODMsMTAgTDguNDgxNjIsMTAgTDcuMDAwNDEsNS45MjYxOCBaIiBpZD0i8J+OqC1Db2xvciIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+',
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
 * EOF: apply-text-font / plugin.js / 28200715
 */
