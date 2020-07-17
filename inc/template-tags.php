<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       inc/template-tags.php
 * Function:        extended functinality
 * Build:           28200715
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            https://codex.wordpress.org/Template_Tags
 *
 *
 * SVG icon sizes
 *  h1      - svg:h1
 *  h2      - svg:h2
 *  h3      - svg:h3
 *  h4      - svg:h4
 *  h5      - svg:h5
 *  h6      - svg:h6
 *  large   - svg:large
 *  medium  - svg:medium (default font size)
 *  small   - svg:small
 *
 *  src: https://materialdesignicons.com/
 *
*/
/*
 ***
 * ico: xidipity_icon_wp
 * dsc: wordpress
 * ver: 200501
 * fnt: return wp icon
 * ref: materialdesignicons.com
 ***
*/
if (!function_exists('xidipity_icon_wp'))
{
	function xidipity_icon_wp($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M3.42,12C3.42,10.76 3.69,9.58 4.16,8.5L8.26,19.72C5.39,18.33 3.42,15.4 3.42,12M17.79,11.57C17.79,12.3 17.5,13.15 17.14,14.34L16.28,17.2L13.18,8L14.16,7.9C14.63,7.84 14.57,7.16 14.11,7.19C14.11,7.19 12.72,7.3 11.82,7.3L9.56,7.19C9.1,7.16 9.05,7.87 9.5,7.9L10.41,8L11.75,11.64L9.87,17.27L6.74,8L7.73,7.9C8.19,7.84 8.13,7.16 7.67,7.19C7.67,7.19 6.28,7.3 5.38,7.3L4.83,7.29C6.37,4.96 9,3.42 12,3.42C14.23,3.42 16.27,4.28 17.79,5.67H17.68C16.84,5.67 16.24,6.4 16.24,7.19C16.24,7.9 16.65,8.5 17.08,9.2C17.41,9.77 17.79,10.5 17.79,11.57M12.15,12.75L14.79,19.97L14.85,20.09C13.96,20.41 13,20.58 12,20.58C11.16,20.58 10.35,20.46 9.58,20.23L12.15,12.75M19.53,7.88C20.2,9.11 20.58,10.5 20.58,12C20.58,15.16 18.86,17.93 16.31,19.41L18.93,11.84C19.42,10.62 19.59,9.64 19.59,8.77L19.53,7.88M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,21.54C17.26,21.54 21.54,17.26 21.54,12C21.54,6.74 17.26,2.46 12,2.46C6.74,2.46 2.46,6.74 2.46,12C2.46,17.26 6.74,21.54 12,21.54Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M3.42,12C3.42,10.76 3.69,9.58 4.16,8.5L8.26,19.72C5.39,18.33 3.42,15.4 3.42,12M17.79,11.57C17.79,12.3 17.5,13.15 17.14,14.34L16.28,17.2L13.18,8L14.16,7.9C14.63,7.84 14.57,7.16 14.11,7.19C14.11,7.19 12.72,7.3 11.82,7.3L9.56,7.19C9.1,7.16 9.05,7.87 9.5,7.9L10.41,8L11.75,11.64L9.87,17.27L6.74,8L7.73,7.9C8.19,7.84 8.13,7.16 7.67,7.19C7.67,7.19 6.28,7.3 5.38,7.3L4.83,7.29C6.37,4.96 9,3.42 12,3.42C14.23,3.42 16.27,4.28 17.79,5.67H17.68C16.84,5.67 16.24,6.4 16.24,7.19C16.24,7.9 16.65,8.5 17.08,9.2C17.41,9.77 17.79,10.5 17.79,11.57M12.15,12.75L14.79,19.97L14.85,20.09C13.96,20.41 13,20.58 12,20.58C11.16,20.58 10.35,20.46 9.58,20.23L12.15,12.75M19.53,7.88C20.2,9.11 20.58,10.5 20.58,12C20.58,15.16 18.86,17.93 16.31,19.41L18.93,11.84C19.42,10.62 19.59,9.64 19.59,8.77L19.53,7.88M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,21.54C17.26,21.54 21.54,17.26 21.54,12C21.54,6.74 17.26,2.46 12,2.46C6.74,2.46 2.46,6.74 2.46,12C2.46,17.26 6.74,21.54 12,21.54Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_logo
 * dsc: logo
 * ver: 200501
 * fnt: return logo icon
 * ref: materialdesignicons.com
 ***
*/
if (!function_exists('xidipity_icon_logo'))
{
	function xidipity_icon_logo($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M6.40309373,6.50336667 C5.44723562,6.77353981 4.68706632,7.49930754 4.3729474,8.44163846 L0,21.5600119 L0.688590388,22.2486023 L7.72496228,15.2122304 C7.58480671,14.9187943 7.49996338,14.5944209 7.49996338,14.2475476 C7.49996338,13.0048974 8.50730221,11.9975586 9.74995239,11.9975586 C10.9926026,11.9975586 11.9999414,13.0048974 11.9999414,14.2475476 C11.9999414,15.4901978 10.9926026,16.4975366 9.74995239,16.4975366 C9.40307909,16.4975366 9.07870567,16.4126933 8.7852696,16.2725377 L1.74889771,23.3089096 L2.4374881,23.9975 L15.5558615,19.6245526 C16.4981925,19.3104337 17.2239602,18.5502644 17.4941333,17.5944063 L19.4999048,10.4975659 L13.4999341,4.49759521 L6.40309373,6.50336667 Z M23.3408235,3.47431896 L20.523181,0.656676469 C19.6442791,-0.22222549 18.2188173,-0.22222549 17.3399153,0.656676469 L14.689147,3.30744478 L20.6900552,9.30835297 L23.3408235,6.65758467 C24.2197255,5.77868271 24.2197255,4.35368967 23.3408235,3.47431896 L23.3408235,3.47431896 Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M6.40309373,6.50336667 C5.44723562,6.77353981 4.68706632,7.49930754 4.3729474,8.44163846 L0,21.5600119 L0.688590388,22.2486023 L7.72496228,15.2122304 C7.58480671,14.9187943 7.49996338,14.5944209 7.49996338,14.2475476 C7.49996338,13.0048974 8.50730221,11.9975586 9.74995239,11.9975586 C10.9926026,11.9975586 11.9999414,13.0048974 11.9999414,14.2475476 C11.9999414,15.4901978 10.9926026,16.4975366 9.74995239,16.4975366 C9.40307909,16.4975366 9.07870567,16.4126933 8.7852696,16.2725377 L1.74889771,23.3089096 L2.4374881,23.9975 L15.5558615,19.6245526 C16.4981925,19.3104337 17.2239602,18.5502644 17.4941333,17.5944063 L19.4999048,10.4975659 L13.4999341,4.49759521 L6.40309373,6.50336667 Z M23.3408235,3.47431896 L20.523181,0.656676469 C19.6442791,-0.22222549 18.2188173,-0.22222549 17.3399153,0.656676469 L14.689147,3.30744478 L20.6900552,9.30835297 L23.3408235,6.65758467 C24.2197255,5.77868271 24.2197255,4.35368967 23.3408235,3.47431896 L23.3408235,3.47431896 Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_modified
 * dsc: modified
 * ver: 200429
 * fnt: return modified icon
 * ref: materialdesignicons.com
 ***
*/
if (!function_exists('xidipity_icon_modified'))
{
	function xidipity_icon_modified($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2C2.89 2 2 2.89 2 4V20A2 2 0 0 0 4 22H12.41A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 18 9.3V8L12 2H4M11 3.5L16.5 9H11V3.5M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12V17L18.61 19.16L19.36 17.94L16.5 16.25V12H15Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2C2.89 2 2 2.89 2 4V20A2 2 0 0 0 4 22H12.41A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 18 9.3V8L12 2H4M11 3.5L16.5 9H11V3.5M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12V17L18.61 19.16L19.36 17.94L16.5 16.25V12H15Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_archive
 * dsc: archive
 * ver: 200429
 * fnt: return archive icon
 * ref: materialdesignicons.com
 ***
*/
if (!function_exists('xidipity_icon_archive'))
{
	function xidipity_icon_archive($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_today
 * dsc: today calendar
 * ver: 200429
 * fnt: return today calendar icon
 * ref: materialdesignicons.com
 ***
*/
if (!function_exists('xidipity_icon_today'))
{
	function xidipity_icon_today($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: deprecate xidipity_icon_comment
 * dsc: post comment
 * ver: 200429
 * fnt: return post comment icon
 * ref:
 ***
*/
if (!function_exists('xidipity_icon_comment'))
{
	function xidipity_icon_comment($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_comments
 * dsc: post comments
 * ver: 200429
 * fnt: return post comments icon
 * ref:
 ***
*/
if (!function_exists('xidipity_icon_comments'))
{
	function xidipity_icon_comments($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_x_comments
 * dsc: post comments closed
 * ver: 200422
 * fnt: return post comments closed icon
 * ref:
 ***
*/
if (!function_exists('xidipity_icon_x_comments'))
{
	function xidipity_icon_x_comments($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M9.41,6L8,7.41L10.59,10L8,12.59L9.41,14L12,11.41L14.59,14L16,12.59L13.41,10L16,7.41L14.59,6L12,8.59L9.41,6Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M9.41,6L8,7.41L10.59,10L8,12.59L9.41,14L12,11.41L14.59,14L16,12.59L13.41,10L16,7.41L14.59,6L12,8.59L9.41,6Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_tag
 * dsc: post tag
 * ver: 200422
 * fnt: return post tag icon
 * ref:
 ***
*/
if (!function_exists('xidipity_icon_tag'))
{
	function xidipity_icon_tag($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_author
 * dsc: post author
 * ver: 200422
 * fnt: return author icon
 * ref: materialdesignicons.com/
 ***
*/
if (!function_exists('xidipity_icon_author'))
{
	function xidipity_icon_author($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_sticky
 * dsc: sticky post
 * ver: 200422
 * fnt: return sticky icon
 * ref: materialdesignicons.com/
 ***
*/
if (!function_exists('xidipity_icon_sticky'))
{
	function xidipity_icon_sticky($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21M12,15H7V17H12M17,7H7V9H17" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21M12,15H7V17H12M17,7H7V9H17" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_bm
 * dsc: bookmark
 * ver: 200422
 * fnt: return bookmark icon
 * ref: materialdesignicons.com/
 ***
*/
if (!function_exists('xidipity_icon_bm'))
{
	function xidipity_icon_bm($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_uncategorized
 * dsc: uncategorized
 * ver: 200429
 * fnt: return uncategorized icon
 * ref: materialdesignicons.com/
 ***
*/
if (!function_exists('xidipity_icon_uncategorized'))
{
	function xidipity_icon_uncategorized($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M22,17V19H14V17H22M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M22,17V19H14V17H22M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_edit
 * dsc: edit icon
 * ver: 200429
 * fnt: return sized edit icon
 * ref: materialdesignicons.com/
 ***
*/
if (!function_exists('xidipity_icon_edit'))
{
	function xidipity_icon_edit($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_next
 * dsc: next icon
 * ver: 200429
 * fnt: return sized next icon
 * ref: materialdesignicons.com/
 ***
*/
if (!function_exists('xidipity_icon_next'))
{
	function xidipity_icon_next($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M20,3H5A2,2 0 0,0 3,5V11H7V9L11,12L7,15V13H3V19A2,2 0 0,0 5,21H20A2,2 0 0,0 22,19V5A2,2 0 0,0 20,3M17,17H13V15H17V17M20,13H13V11H20V13M20,9H13V7H20V9M3,13H0V11H3V13Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M20,3H5A2,2 0 0,0 3,5V11H7V9L11,12L7,15V13H3V19A2,2 0 0,0 5,21H20A2,2 0 0,0 22,19V5A2,2 0 0,0 20,3M17,17H13V15H17V17M20,13H13V11H20V13M20,9H13V7H20V9M3,13H0V11H3V13Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*
 ***
 * ico: xidipity_icon_prev
 * dsc: previous icon
 * ver: 200429
 * fnt: return sized previous icon
 * ref: materialdesignicons.com/
 ***
*/
if (!function_exists('xidipity_icon_prev'))
{
	function xidipity_icon_prev($arg = '')
	{
		$size = strtolower($arg);
		$ret_val = '<svg class="svg:medium" viewBox="0 0 24 24"><path fill="currentColor" d="M4,21H19A2,2 0 0,0 21,19V13H17V15L13,12L17,9V11H21V5A2,2 0 0,0 19,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21M4,15H8V17H4V15M4,11H11V13H4V11M4,7H11V9H4V7M21,11H24V13H21V11Z" /></svg>';
		if (!empty($size))
		{
			$sizes = 'h1,h2,h3,h4,h5,h6,large,small';
			if (has_match($sizes, $size))
			{
				$ret_val = '<svg class="svg:' . $size . '" viewBox="0 0 24 24"><path fill="currentColor" d="M4,21H19A2,2 0 0,0 21,19V13H17V15L13,12L17,9V11H21V5A2,2 0 0,0 19,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21M4,15H8V17H4V15M4,11H11V13H4V11M4,7H11V9H4V7M21,11H24V13H21V11Z" /></svg>';
			}
		}
		return $ret_val;
	}
}
/*  # deprecated xidipity_metalinks
    # 90828.1a
    # return table of metadata links
**/
if (!function_exists('deprecated_xidipity_metalinks'))
{
	function deprecated_xidipity_metalinks($atts = array())
	{
		/*: variables   :*/
		$html_retval = '';
		$v_cnt = count($atts);
		/*: go / no go  :*/
		if ($v_cnt > 0)
		{
			$html_retval .= '<table class="bdr:collapse">';
			$html_retval .= '<tbody>';
			$html_retval .= '<tr>';
			foreach ($atts as $att)
			{
				if (!empty(trim($att)))
				{
					$html_retval .= '<td class="aln:text-left aln:middle">' . trim($att) . '</td>';
				}
			}
			$html_retval .= '</tr>';
			$html_retval .= '</tbody>';
			$html_retval .= '</table>';
		}
		/*: return html :*/
		return $html_retval;
	}
}
/*  # xty_dsp_meta
    # 28200715
    # return html row of meta items
**/
if (!function_exists('xty_dsp_meta'))
{
	function xty_dsp_meta($items = array())
	{
		$html_retval = '';
		if (count($items) > 0)
		{
			$html_retval .= '<div class="fx:rw fxa:1 fxb:1 fxc:3">';
			foreach ($items as $key => $item)
			{
				$key_type = substr($key, 0, 3);
				switch ($key_type)
				{
					case 'raw':
						$html_retval .= $item;
					break;
					case 'txt':
						$html_retval .= '<div class="fnt:size-2x-small">' . $item . '</div>';
					break;
					case 'div':
						$html_retval .= '<div class="txt:bas dsp:none sm)dsp:block pad:hrz+0.5">' . $item . '</div>';
					break;
					default:
						$html_retval .= '<div class="fx:r fxa:1 fxb:1 fxc:3 ht:2"><div class="fnt:size-x-medium pad:right+0.5">' . $item . '</div></div>';
				}
			}
			$html_retval .= '</div>';
		}
		return $html_retval;
	}
}
/*  # xty_metalinks
    # 28200715
    # return html of links
**/
if (!function_exists('xty_metalinks'))
{
	function xty_metalinks($items = array())
	{
		$html_retval = '<div class="fx:rw fxa:1 fxb:1 fxc:3">';
		foreach ($items as $item)
		{
			if (has_match('div', $item))
			{
				$html_retval .= $item;
			}
			else
			{
				$html_retval .= '<div>' . $item . '</div>';
			}
		}
		$html_retval .= '</div>';
		return $html_retval;
	}
}
/*  # xty_date
    # 28200715
    # return current date string
**/
if (!function_exists('xty_date'))
{
	function xty_date()
	{
		return current_time(get_option('date_format'));
	}
}
/*  # xty_comment_cnt
    # 28200715
    # return number of comments
**/
if (!function_exists('xty_comment_cnt'))
{
	function xty_comment_cnt()
	{
		$html_retval = 0;
		if (comments_open())
		{
			$html_retval = get_comments_number();
		}
		return $html_retval;
	}
}
/*  # xty_dsp_content
    # 28200715
    # display content
**/
if (!function_exists('xty_dsp_content'))
{
	function xty_dsp_content()
	{
		remove_filter('the_content', 'wpautop');
		the_content();
		return;
	}
}
/*  # xty_published
    # 28200715
    # return date array
**/
if (!function_exists('xty_published'))
{
	function xty_published()
	{
		return array(
			"date" => get_the_date(get_option('date_format')) ,
			"revision" => get_the_modified_time(get_option('date_format'))
		);
	}
}
/*  # xty_support_agent
    # 28200715
    # return support agent message
**/
if (!function_exists('xty_support_agent'))
{
	function xty_support_agent($msg = '')
	{
		return '<div class="mar:vrt+1"><div class="fx:r fxa:1 fxc:3 bdr:left-solid-thick bdr:pri-2 bkg:tint-bas-1 cnr:arch-small"><div class="fnt:size-7x-large pad:hrz+0.5"><i class="icon:support_agent_solid"></i></div><div class="pad:right+0.5 pad:vrt+0.5 txt:bas-3"><p class="fnt:family-serif fnt:size-2x-large sm)fnt:size-3x-large fnt:weight-medium wd:100%">' . get_bloginfo('name') . ' Support</p><p>' . $msg . '</p><div class="mar:vrt+0.5 pad:vrt+0.5"><!--  28200715:BUTTON --><button class="aln:text-center fnt:size-x-small sm)fnt-size-medium" onclick="javascript:history.back()">Previous page</button><!-- /28200715:BUTTON --></div></div></div></div>' . "\n";
	}
}
/*  # xty_author
    # 28200715
    # return post author
**/
if (!function_exists('xty_author'))
{
	function xty_author()
	{
		// Global Post
		global $post;
		$author = esc_html(get_the_author_meta('display_name', $post_author_id));
		if (empty($author))
		{
			$author = esc_html(get_the_author_meta('nickname', $post_author_id));
		}
		$post_author_id = get_post_field('post_author', $post->ID);
		return '<a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID', $post_author_id))) . '">' . $author . '</a>';
	}
}
/*  # xty_user
    # 28200715
    # return post author
**/
if (!function_exists('xty_user'))
{
	function xty_user()
	{
		if (is_user_logged_in())
		{
			$user_name = get_user_meta(get_current_user_id() , 'display_name', true);
			if (empty($user_name))
			{
				$user_name = get_user_meta(get_current_user_id() , 'nickname', true);
			}
		}
		else
		{
			$user_name = '';
		}
		return $user_name;
	}
}
/*  # xty_tags
    # 28200715
    # return post author
**/
if (!function_exists('xty_tags'))
{
	function xty_tags($arg = 0)
	{
		$html_val = '';
		$wp_tags = get_the_tags($arg);
		if (is_array($wp_tags))
		{
			$cnt = 1;
			$last_tag = count($wp_tags);
			foreach ($wp_tags as $wp_tag)
			{
				$html_val .= $wp_tag->name;
				if ($cnt++ < $last_tag)
				{
					$html_val .= ',';
				}
			}
		}
		return $html_val;
	}
}
/*  # xty_readmore
    # 28200715
    # return html read more link
**/
if (!function_exists('xty_readmore'))
{
	function xty_readmore($arg = '')
	{
		if (empty($arg))
		{
			$html_retval = '<div class="fnt:size-medium mar:vrt+0.5"><span class="fnt:size-large pad:right+0.25"><i class="icon:comment_outline"></i></span>Additional information not available.</div>';
		}
		else
		{
			$html_retval = '<div class="fnt:size-medium mar:vrt+0.5"><span class="fnt:size-large pad:right+0.5"><i class="icon:book_open_solid"></i></span><a href="' . $arg . '" >Read more &hellip;</a></div>';
		}
		return $html_retval;
	}
}
/*  # deprecate xidipity_posted_by
    # 90904.1a
    # core wp function
    # return posted author
**/
if (!function_exists('xidipity_posted_by'))
{
	/**
	 * Prints author.
	 */
	function xidipity_posted_by()
	{
		// Global Post
		global $post;
		// We need to get author meta data from both inside/outside the loop.
		$post_author_id = get_post_field('post_author', $post->ID);
		// Byline
		$byline = sprintf(esc_html_x('Author -  %s', 'post author', 'xidipity') , '<span class="author vcard"><a class="url fn n" style="max-height:68px;max-width:68px;" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID', $post_author_id))) . '">' . esc_html(get_the_author_meta('nickname', $post_author_id)) . '</a></span>');
		// Posted By HTML
		$html = '<span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.
		
		/**
		 * Filters the Posted By HTML.
		 *
		 * @param string $html Posted By HTML.
		 */
		$html = apply_filters('xidipity_posted_by_html', $html);
		// echo $html; // WPCS: XSS OK.
		return $html; // WPCS: XSS OK.
		
	}
}
/*  # xty_category_icon
    # 28200715
    # return category icon
**/
if (!function_exists('xty_category_icon'))
{
	function xty_category_icon($arg = '')
	{
		// system
		$category = trim(get_cat_name(get_option('default_category')));
		$html_retval = '<i class="icon:category_solid"></i>';
		if (is_sticky())
		{
			$html_retval = '<i class="icon:category_sticky_solid"></i>';
		}
		elseif (has_match($arg, $category))
		{
			$html_retval = '<i class="icon:category_solid"></i>';
		}
		elseif (has_match(strtolower($arg) , 'archive'))
		{
			$html_retval = '<i class="icon:category_archive_solid"></i>';
		}
		else
		{
			$html_retval = '<i class="icon:category_outline"></i>';
		}
		// return html
		return $html_retval;
	}
}
/*  # xty_category
    # 28200715
    # return category
**/
if (!function_exists('xty_category'))
{
	function xty_category($arg = '')
	{
		/*
		          show yoast primary category, or first category
		*/
		$category = get_the_category();
		$useCatLink = true;
		$html_retval = '';
		/*
		          if post has a category assigned
		*/
		if ($category)
		{
			$category_display = '';
			$category_link = '';
			if (class_exists('WPSEO_Primary_Term'))
			{
				/*
				                show the post's 'primary' category, if this yoast feature
				                is available, & one is set
				*/
				$wpseo_primary_term = new WPSEO_Primary_Term('category', get_the_id());
				$wpseo_primary_term = $wpseo_primary_term->get_primary_term();
				$term = get_term($wpseo_primary_term);
				if (is_wp_error($term))
				{
					/*
					                   default to first category (not yoast) if an error is returned
					*/
					$category_display = $category[0]->name;
					$category_link = get_category_link($category[0]->term_id);
				}
				else
				{
					/*
					                   yoast primary category
					*/
					$category_display = $term->name;
					$category_link = get_category_link($term->term_id);
				}
			}
			else
			{
				/*
				                default, display the first category in wp's list of assigned categories
				*/
				$category_display = $category[0]->name;
				$category_link = get_category_link($category[0]->term_id);
			}
			/*
			             return category
			*/
			if (!empty($category_display))
			{
				if ($useCatLink == true && !empty($category_link) && empty($arg))
				{
					$html_retval .= '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
				}
				else
				{
					$html_retval = htmlspecialchars($category_display);
				}
			}
			/*: return html :*/
			return $html_retval;
		}
	}
}
/*  # deprecate
    # 90728.1
    # return html
**/
if (!function_exists('xidipity_first_category'))
{
	function xidipity_first_category($arg = '')
	{
		/*
		          show yoast primary category, or first category
		*/
		$category = get_the_category();
		$useCatLink = true;
		$html_retval = '';
		/*
		          if post has a category assigned
		*/
		if ($category)
		{
			$category_display = '';
			$category_link = '';
			if (class_exists('WPSEO_Primary_Term'))
			{
				/*
				                show the post's 'primary' category, if this yoast feature
				                is available, & one is set
				*/
				$wpseo_primary_term = new WPSEO_Primary_Term('category', get_the_id());
				$wpseo_primary_term = $wpseo_primary_term->get_primary_term();
				$term = get_term($wpseo_primary_term);
				if (is_wp_error($term))
				{
					/*
					                   default to first category (not yoast) if an error is returned
					*/
					$category_display = $category[0]->name;
					$category_link = get_category_link($category[0]->term_id);
				}
				else
				{
					/*
					                   yoast primary category
					*/
					$category_display = $term->name;
					$category_link = get_category_link($term->term_id);
				}
			}
			else
			{
				/*
				                default, display the first category in wp's list of assigned categories
				*/
				$category_display = $category[0]->name;
				$category_link = get_category_link($category[0]->term_id);
			}
			/*
			             return category
			*/
			if (!empty($category_display))
			{
				if ($useCatLink == true && !empty($category_link) && empty($arg))
				{
					$html_retval .= '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
				}
				else
				{
					$html_retval = htmlspecialchars($category_display);
				}
			}
			/*: return html :*/
			return $html_retval;
		}
	}
}
/*  # custom logo
    # 90904.1a
    # core wordpress process
**/
if (!function_exists('xidipity_the_custom_logo'))
{
	/**
	 * Displays the optional custom logo.
	 *
	 * Does nothing if the custom logo is not available.
	 */
	function xidipity_the_custom_logo()
	{
		if (function_exists('the_custom_logo'))
		{
			the_custom_logo();
		}
	}
}
/*  # does excerpt exist
    # 90904.1a
    # core wordpress process
    # returns bool
**/
function xidipity_has_excerpt()
{
	// Post Excerpt
	$post_excerpt = get_the_excerpt();
	/**
	 * Filters the Post has excerpt.
	 *
	 * @param bool
	 */
	return apply_filters('xidipity_has_excerpt', !empty($post_excerpt));
}
/*
 * EOF:     inc/template-tags.php
 * Build:   28200715
 *
*/
?>
