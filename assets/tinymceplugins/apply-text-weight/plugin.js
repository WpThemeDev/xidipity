/**
 * WordPress Xidipity Theme
 * Tinymce apply-text-weight plugin 
 *
 * ###:  plugin.js
 * bld:  27200615
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
tinymce.PluginManager.add('apply_txt_weight', function(editor) {
	'use strict';
	editor.addButton('apply_txt_weight', {
		type: 'splitbutton',
		title: 'Font Weight',
		icon: false,
		image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbnM4LWJvbGQtNTA8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBpZD0icmVjdC0xIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbnM4LWJvbGQtNTAiPgogICAgICAgICAgICA8aW1hZ2UgeD0iMSIgeT0iMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFNcUFEQUFRQUFBQUJBQUFBTWdBQUFBQjF5NityQUFBQzkwbEVRVlJvQmUyWno4dE5RUmpIcjkrbHZIcWpKRCt5VTVJU2lpZ2JLMExFU2haV3N2SVBTTW5Ham9WU2t0MnJySkFOS2JKQUlZa29paWdwUHdvaCtlM3oxVDNkZWQ5ejVqeHo3ajNublZtY3A3NmQ1enp6bkpudmQrN01uRGx6TzUzVzJoNW9lNkNzQnlhVUZYYkxGbkE5Qm9ZQ2NxMlVQeVI4QWwvQlovQUVQQVczZ2VLTjJsNXEvOXN3ZmxEL0ZiQWJUQVNOMkQ1cWJWcUlXLzlEMmx0VFZVbGo2cXNTY2ZLWDRsOERPNTJZNmFZb1JLU25nVE5ndVc1Q0xGVWg0ajRabkFTVGRHTlp5a0xFZlNYWWFJbFF1VlRYWlMrb1NNdXJ6MlpRTUJ1RUxQbHVIZHU1dWVnRyt2VkRWNjNoZ0FZMFRCYURBK0FqY0Zjcm4vK0F2RnFzVGlFdW9TWGM2Q1hvRTVERjM3a1ArZnlZYytReHBJNzZpRG54V2ZoVG5QdENONllRRWJwYXlDb2ZMSnQ3LzdOakN3blpYNzJINmUrOHR0R1IyRUxtajZaVGVIZS9NRG9tR0Z2SXRqRjhpbTR2RkFYN2lUVzFhbWt2OVF0a3ExUFJWU3ZXekJEU2RiNFFGOUhnc05Ib1ZNcVhnVjFnaTVHcjR2MGdaQjRGVk5YcGhQNGlSVDA2U094Z0VMdHVVcDIvU0pWMnJWeUpPR3dsdWVVaE84dFZQTERKZldnYy9OWGRObTV5MWE5YWk4VWFXaEp3SHVqYnhMVFl5NjlGY0NzSko2d2tsZGM1UjdUZTZ4Q2h6TFJuMHNxbWxjdGE0Yko2OXVDY0JaZXpRTC9YMEtFVlNrdzhOQkkyZ0RzZ1pHVzdSOTdBMW9TUWpKVGVLNWRBaUpnVjJVTkYxOWh6UkVOUjUyYm1wcENjMHBVenRoQjE3a3R3VjQ1aCtuNzNXZ3BDUk82WmwyR3ZvSFNubklxUW56MitYcTkwODVpS2tJVmUrcjJDN3owMzc2VWdaQTYwMXVXcDVTSnZjaEVuRUZ1SXRoK25nWG00UU00amgzZk9qU1ZFQWphREd5RG9KSkU4L2UzZ3RUcTNLT2RveFpxMDA4bVpCK1lDdlF4RFRjTktMMDZ2MVNsa3ZiZVZ3UXVPVUVYeWs5MlNlWXVFNDFaU3JEbGk4Y3JLbitQc0FEcWtLTFdVaFdqSHErSDZ1bFJCdHpCRklWL2dkZ2lzQmErNlBNMUx5R1RYRm5zOFRJZmFJK0FVZUZ1MXdSQWgxNmxVeDVaRFZTdjM1SDhqcnY5R1BnRE5BUTBoZldCSlNHdHREN1E5MFBaQWVRLzhBMFBLSFBNSWFzUnpBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgICAgICA8dXNlIHN0cm9rZS1vcGFjaXR5PSIwLjAxIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgeGxpbms6aHJlZj0iI3JlY3QtMSI+PC91c2U+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
		onclick: function() {
			editor.formatter.toggle('wgt400');
		},
		menu: [{
				icon: false,
				text: '•\xa0Thin',
				onclick: function() {
					editor.formatter.toggle('wgt100');
				}
			},
			{
				icon: false,
				text: '•\xa0Xtra Light',
				onclick: function() {
					editor.formatter.toggle('wgt200');
				}
			},
			{
				icon: false,
				text: '•\xa0Light',
				onclick: function() {
					editor.formatter.toggle('wgt300');
				}
			},
			{
				icon: false,
				text: '•\xa0Normal',
				onclick: function() {
					editor.formatter.toggle('wgt400');
				}
			},
			{
				icon: false,
				text: '•\xa0Medium',
				onclick: function() {
					editor.formatter.toggle('wgt500');
				}
			},
			{
				icon: false,
				text: '•\xa0Semi Bold',
				onclick: function() {
					editor.formatter.toggle('wgt600');
				}
			},
			{
				icon: false,
				text: '•\xa0Bold',
				onclick: function() {
					editor.formatter.toggle('wgt700');
				}
			},
			{
				icon: false,
				text: '•\xa0Xtra Bold',
				onclick: function() {
					editor.formatter.toggle('wgt800');
				}
			},
			{
				icon: false,
				text: '•\xa0Black',
				onclick: function() {
					editor.formatter.toggle('wgt900');
				}
			}
		]
	});
});

/*
 * EOF: apply-text-weight / plugin.js / 27200615
 */
