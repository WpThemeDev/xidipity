<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying page footer
 *
 * ###:  footer.php
 * bld:  28200715
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
echo '<cmt name="begin">FOOTER/PHP</cmt>' . "\n";
echo '<div class="fxd:1 fxe:2 fb:100%">' . "\n";
if (XTY_FTR_ALIGN == 'left')
{
	echo '<footer class="fx:r fxa:1 fxc:3 ht:min6 wd:100%">' . "\n";
	echo '<!--  ct:FOOTER -->' . "\n";
	echo '<div class="aln:text-left dsp:block fnt:size-smaller">' . "\n";
}
elseif (XTY_FTR_ALIGN == 'right')
{
	echo '<footer class="fx:r fxa:2 fxc:3 ht:min6 wd:100%">' . "\n";
	echo '<!--  ct:FOOTER -->' . "\n";
	echo '<div class="aln:text-right dsp:block fnt:size-smaller">' . "\n";
}
else
{
	echo '<footer class="fx:r fxa:3 fxc:3 ht:min6 wd:100%">' . "\n";
	echo '<!--  ct:FOOTER -->' . "\n";
	echo '<div class="aln:text-center dsp:block fnt:size-smaller">' . "\n";
}
echo '<p>' . blog_copyright() . '</p>';
echo '<p><a href="https://xidipity.com/">Xidipity Theme</a> &sdot; Powered by <a href="https://wordpress.org">WordPress</a>';
echo '</div>' . "\n";
echo '</footer>' . "\n";
echo '</div>' . "\n";
echo '<cmt name="end">FOOTER/PHP</cmt>' . "\n";
/*
 ***
 * close htm/flex/container here / open in header
 ***
*/
echo '</div>' . "\n";
echo '<cmt name="end">PAGE</cmt>' . "\n";
/*
 ***
 * function: wp_footer
 * dsc: wordpress footer
 * ver: 200415
 * fnt: add wordpress footer code
 * ref: developer.wordpress.org/reference/functions/wp_footer/
 ***
*/
wp_footer();
echo '</body>' . "\n";
echo '</html>' . "\n";
/*
 * EOF: footer.php / 28200715
*/
?>
