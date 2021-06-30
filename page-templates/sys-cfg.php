<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * Template Name: sys-cfg
 *
 * File Name:       sys-cfg.php
 * Function:        permit the updating of theme parameters
 * Build:           210630-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           1.1
 * @link            developer.wordpress.org/themes/basics/
 *
 */
/*
 *** set page options
*/
xty('mnu-dsp', 'yes');
global $wp;
$_SESSION['xtyURL'] = home_url( $wp->request );
if (!isset($_SESSION['xtyStat'])) {
	$_SESSION['xtyStat'] = 'Although inputs are reviewed when submitted, the values are not strictly evaluated. It is important to consider your choices carefully as the possibility does exist invalid inputs will prevent the system from loading which will result in the reinstallation of the theme to correct the problem. Apply the desired changes and then press Submit.';
}
/*
 *** developer.wordpress.org/reference/functions/get_header/
*/
get_header();
/*
 *** add default content
*/
$content = get_the_content();
if (empty($content)) {
    $dft_content = array(
        'ID' => get_the_ID(),
        'post_content' => '<h2><i class="icon:doc_cog_solid fnt:siz-lg-4x mar:rt+0.5"></i>​Sys-Cfg Template</h2>
<p>Welcome to the system configuration template. The purpose of this template is to permit changing core operating parameters of the theme as documented in the knowledge base. If desired, notes on the applied changes may be kept here.</p>
<p>&nbsp;</p>'
    );
    wp_update_post( $dft_content );
}
/*
 ***/
echo '<!-- xty:page-template/theme-cfg/php -->' . "\n";
/***
*/
echo '<!-- xty:page/body -->' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bt+0.5">' . "\n";
echo '<article class="box:shadow bkg:content txt:content dsp:blk pad:hrz+1 ht:min10 wd:100%">' . "\n";
//the_post();
/*
 *** developer.wordpress.org/reference/functions/the_title/
*/
echo '<!-- xty:page/body/header -->' . "\n";
echo '<header class="mar:tp+1 wd:100%">' . "\n";
the_title('<div class="pg:title">', '</div>');
echo '<div class="bkg:bas+2 ln mar:bt+0.75"></div>' . "\n";
echo '</header>' . "\n";
echo '<!-- /xty:page/body/header -->' . "\n";
echo '<!-- xty:page/body/content -->' . "\n";
echo '<div class="bkg:content dsp:flw-rt ht:min10 mar:bt+0.5 wd:100%">' . "\n";
/*
 *** entry form
*/
echo '<form action="' . esc_url( admin_url("admin-post.php") ) . '?action=cfg_theme" method="post">'. "\n";
echo '<!--  TMPL:FIXED/COL -->'. "\n";
echo '<table class="cols:fixed-2" style="height: 10px;">'. "\n";
echo '<tbody>'. "\n";
echo '<tr style="height: 10px;">'. "\n";
echo '<td id="2e773" style="height: 10px; width: 646.5px;">' . "\n";
echo '<h4>Copyright</h4>' . "\n";
echo '<label for="copyrightholder">Holder:</label><br /><input type="text" id="copyrightholder" name="copyrightholder" style="width: 320px;" value="' . xty('copyrightholder') . '" />' . "\n";
echo '<p style="color: dimgrey; font-size: small;">individual/organization</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="copyrightyear1">From Year:</label><br /><input type="text" id="copyrightyear1" name="copyrightyear1" style="width: 100px;" value="' . xty('copyrightyear1') . '" />' . "\n";
echo '<p style="color: dimgrey; font-size: small;">year/default</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="copyrightyear2">To Year:</label><br /><input type="text" id="copyrightyear2" name="copyrightyear2" style="width: 100px;" value="' . xty('copyrightyear2') . '" />' . "\n";
echo '<p style="color: dimgrey; font-size: small;">year/default</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<h4>Header</h4>' . "\n";
echo '<label for="hdr-aln">Alignment:</label><br /><select name="hdr-aln" id="hdr-aln" style="width: 100px;">' . "\n";
if (xty('hdr-aln') == 'center') {
	echo '<option value="center" selected>Center</option>' . "\n";
} else {
	echo '<option value="center">Center</option>' . "\n";		
};
if (xty('hdr-aln') == 'left') {
	echo '<option value="left" selected>Left</option>' . "\n";
} else {
	echo '<option value="left">Left</option>' . "\n";
};
if (xty('hdr-aln') == 'right') {
	echo '<option value="right" selected>Right</option>' . "\n";
} else {
	echo '<option value="right">Right</option>' . "\n";
};
echo '</select>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="hdr-ht">Height:</label><br /><input type="text" id="hdr-ht" name="hdr-ht" style="width: 100px;" value="' . xty('hdr-ht') . '" />' . "\n";
echo '<p style="color: dimgrey; font-size: small;">px/rem</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="hdr-img">Wallpaper:</label><br /><textarea id="hdr-img" name="hdr-img" rows="2" style="font-family: monospace; width: 320px;">' . xty('hdr-img') . '</textarea>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">image URL/none</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="hdr-logo">Logo:</label><br /><textarea id="hdr-logo" name="hdr-logo" rows="2" style="font-family: monospace; width: 320px;">' . xty('hdr-logo') . '</textarea>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">image URL/none</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<h4>Menu</h4>' . "\n";
echo '<label for="mnu-dsp">Display:</label><br /><select name="mnu-dsp" id="mnu-dsp" style="width: 100px;">' . "\n";
if (xty('mnu-dsp') == 'yes') {
	echo '<option value="yes" selected>Yes</option>' . "\n";		
} else {
	echo '<option value="yes">Yes</option>' . "\n";		
}
if (xty('mnu-dsp') == 'no') {
	echo '<option value="no" selected>No</option>' . "\n";
} else {
	echo '<option value="no">No</option>' . "\n";
}
echo '</select>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="mnu-aln">Alignment:</label><br /><select name="mnu-aln" id="mnu-aln" style="width: 100px;">' . "\n";	
if (xty('mnu-aln') == 'center') {
	echo '<option value="center" selected>Center</option>' . "\n";
} else {
	echo '<option value="center">Center</option>' . "\n";		
};
if (xty('mnu-aln') == 'left') {
	echo '<option value="left" selected>Left</option>' . "\n";
} else {
	echo '<option value="left">Left</option>' . "\n";
};
if (xty('mnu-aln') == 'right') {
	echo '<option value="right" selected>Right</option>' . "\n";
} else {
	echo '<option value="right">Right</option>' . "\n";
};
echo '</select>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="mnu_width">Width:</label><br /><input type="text" id="mnu_width" name="mnu_width" style="width: 100px;" value="' . xty('mnu-wd') . '" />' . "\n";
echo '<p style="color: dimgrey; font-size: small;">50%-100% as percentage</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<h4>Sidebar</h4>' . "\n";
echo '<label for="sb-aln">Alignment:</label><br /><select name="sb-aln" id="sb-aln" style="width: 100px;">' . "\n";
if (xty('sb-aln') == 'left') {
	echo '<option value="left" selected>Left</option>' . "\n";
} else {
	echo '<option value="left">Left</option>' . "\n";
};
if (xty('sb-aln') == 'right') {
	echo '<option value="right" selected>Right</option>' . "\n";
} else {
	echo '<option value="right">Right</option>' . "\n";
};
echo '</select>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<h4>Footer</h4>' . "\n";
echo '<label for="ftr-aln">Alignment:</label><br /><select name="ftr-aln" id="ftr-aln" style="width: 100px;">' . "\n";
if (xty('ftr-aln') == 'center') {
	echo '<option value="center" selected>Center</option>' . "\n";
} else {
	echo '<option value="center">Center</option>' . "\n";		
};
if (xty('ftr-aln') == 'left') {
	echo '<option value="left" selected>Left</option>' . "\n";
} else {
	echo '<option value="left">Left</option>' . "\n";
};
if (xty('ftr-aln') == 'right') {
	echo '<option value="right" selected>Right</option>' . "\n";
} else {
	echo '<option value="right">Right</option>' . "\n";
};
echo '</select>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<h4>Miscellaneous</h4>' . "\n";
echo '<label for="emoji-dsp">Display Emoji&apos;s:</label><br /><select name="emoji-dsp" id="emoji-dsp" style="width: 100px;">' . "\n";
if (xty('emoji-dsp') == 'yes') {
	echo '<option value="yes" selected>Yes</option>' . "\n";
} else {
	echo '<option value="yes">Yes</option>' . "\n";
};
if (xty('emoji-dsp') == 'no') {
	echo '<option value="no" selected>No</option>' . "\n";
} else {
	echo '<option value="no">No</option>' . "\n";
};
echo '</select>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="fa-ver">Font Awesome Version:</label><br /><input type="text" id="fa-ver" name="fa-ver" style="width: 100px;" value="' . xty('fa-ver') . '" />' . "\n";
echo '<p style="color: dimgrey; font-size: small;"><a href="https://fontawesome.com/v5/changelog/latest" target="_blank" rel="noopener">get version</a></p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="fav-ico">Favorite Icon (URL):</label><br /><textarea id="fav-ico" name="fav-ico" rows="2" style="font-family: monospace; width: 320px;">' . xty('fav-ico') . '</textarea>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">image URL/default</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="msg">Default System Message:</label><br /><input type="text" id="msg" name="msg" style="width: 320px;" value="' . xty('msg') . '" />' . "\n";
echo '<p style="color: dimgrey; font-size: small;">message/default</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="seo">SEO Blog Name:</label><br /><input type="text" id="seo" name="seo" style="width: 320px;" value="' . xty('seo') . '" />' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<label for="fi_placement">Featured Image Placement:</label><br /><select name="fea-img" id="fea-img" style="width: 100px;">' . "\n";
if (xty('fea-img') == 'left') {
	echo '<option value="left" selected>Left</option>' . "\n";
} else {
	echo '<option value="left">Left</option>' . "\n";
};
if (xty('fea-img') == 'center') {
	echo '<option value="center" selected>Center</option>' . "\n";
} else {
	echo '<option value="center">Center</option>' . "\n";		
};
if (xty('fea-img') == 'right') {
	echo '<option value="right" selected>Right</option>' . "\n";
} else {
	echo '<option value="right">Right</option>' . "\n";
};
echo '</select>' . "\n";
echo '</td>' . "\n";
echo '<td style="height: 10px; width: 646.5px;">' . "\n";
echo '<h4>Google Fonts</h4>' . "\n";
preg_match('/family=(.*?)(:|&)/', xty('sans'), $matches);
$family = $matches[1];
$family = str_replace('+', ' ', $family);
echo '<label for="sans" class="fnt:siz-md-1x fnt:wgt-500">Sans: ' . $family . '</label><br /><textarea id="sans" name="sans" rows="8" style="font-family: monospace; width: 320px;">' . xty('sans') . '</textarea>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">Sample Text</p>' . "\n";
echo '<p class="fnt:siz-md fnt:sans wd:20">The quick fox jumped over the sleeping dog.</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
preg_match('/family=(.*?)(:|&)/', xty('serif'), $matches);
$family = $matches[1];
$family = str_replace('+', ' ', $family);
echo '<label for="serif" class="fnt:siz-md-1x fnt:wgt-500">Serif: ' . $family . '</label><br /><textarea id="serif" name="serif" rows="8" style="font-family: monospace; width: 320px;">' . xty('serif') . '</textarea>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">Sample Text</p>' . "\n";
echo '<p class="fnt:siz-md fnt:serif wd:20">The quick fox jumped over the sleeping dog.</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
preg_match('/family=(.*?)(:|&)/', xty('mono'), $matches);
$family = $matches[1];
$family = str_replace('+', ' ', $family);
echo '<label for="mono" class="fnt:siz-md-1x fnt:wgt-500">Monospaced: ' . $family . '</label><br /><textarea id="mono" name="mono" rows="8" style="font-family: monospace; width: 320px;">' . xty('mono') . '</textarea>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">Sample Text</p>' . "\n";
echo '<p class="fnt:siz-md fnt:mono wd:20">The quick fox jumped over the sleeping dog.</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
preg_match('/family=(.*?)(:|&)/', xty('cursive'), $matches);
$family = $matches[1];
$family = str_replace('+', ' ', $family);
echo '<label for="cursive" class="fnt:siz-md-1x fnt:wgt-500">Cursive: ' . $family . '</label><br /><textarea id="cursive" name="cursive" rows="8" style="font-family: monospace; width: 320px;">' . xty('cursive') . '</textarea>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">Sample Text</p>' . "\n";
echo '<p class="fnt:siz-md fnt:cursive wd:20">The quick fox jumped over the sleeping dog.</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
preg_match('/family=(.*?)(:|&)/', xty('fantasy'), $matches);
$family = $matches[1];
$family = str_replace('+', ' ', $family);
echo '<label for="fantasy" class="fnt:siz-md-1x fnt:wgt-500">Fantasy: ' . $family . '</label><br /><textarea id="fantasy" name="fantasy" rows="8" style="font-family: monospace; width: 320px;">' . xty('fantasy') . '</textarea>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">Sample Text</p>' . "\n";
echo '<p class="fnt:siz-md fnt:fantasy wd:20">The quick fox jumped over the sleeping dog.</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<p style="color: dimgrey; font-size: small;">​<i class="fas fa-external-link-alt mar:rt+0.25"> </i> ​<a href="https://fonts.google.com/" target="_blank" rel="noopener">More Fonts</a></p>' . "\n";
echo '</td>' . "\n";
echo '</tr>' . "\n";
echo '</tbody>' . "\n";
echo '</table>' . "\n";
echo '<!-- /TMPL:FIXED/COL -->' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<input type="hidden" name="back-url" value="' . home_url( $wp->request ) . '">' . "\n";
echo '<button type="submit" name="Submit" value="Submit">Submit</button>' . "\n";
// show status
echo '<p>&nbsp;</p>' . "\n";
echo '<!-- TMPL:ANNOTATION -->'  . "\n";
echo '<div class="bdr:bas-2 bdr:lt-so-3x bkg:tint-bas-1 cnr:arch-sm fx:r fxa:1 fxc:3 pad:hrz+1 pad:vrt+0.5">' . "\n";
echo '<div class="material-icons fnt:siz-lg-2x mar:rt+0.75 txt:sec-1">message</div>' . "\n";
echo '<div class="fnt:siz-sm-1x">' . "\n";
echo '<p>' . $_SESSION['xtyStat'] . '</p>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /TMPL:ANNOTATION -->' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<a style="font-size: small;" href="' . esc_url( admin_url("admin-post.php") ) . '?action=cfg_dft"><i class="material-icons-outlined mar:rt+0.25 fnt:siz-sm-1x"> settings_backup_restore </i>​Restore Defaults</a>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '</form>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xty:page/body/content -->' . "\n";
// remove session variable
unset($_SESSION['xtyStat']);

/*
 *** inc/templage-tags/xty_content_footer
*/
if (empty(xty_user()))
{
	echo xty_content_footer(array(
		'today',
		'print'
	));
}
else
{
	echo xty_content_footer(array(
		'user',
		'today',
		'print'
	));
}
echo '</article>' . "\n";
echo '</section>' . "\n";
/*
 *** SIDEBAR/PHP ***
*/
echo '<!-- xty:page/body/sidebar -->' . "\n";
get_sidebar();
echo '<!-- /xty:page/body/sidebar -->' . "\n";
echo '</main>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xty:page/body -->' . "\n";
/*
 *** developer.wordpress.org/reference/functions/get_footer/
*/
get_footer();
/*
 *** developer.wordpress.org/reference/functions/wp_reset_postdata/
*/
wp_reset_postdata();
	
/*
 * EOF:	theme-cfg.php / 210630-1
 */
?>
