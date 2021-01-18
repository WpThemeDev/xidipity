<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying page footer
 *
 * ###:  footer.php
 * bld:  01210115
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
echo '<!-- xty:footer/php -->' . "\n";
echo '<div class="fxd:1 fxe:2 fb:100%">' . "\n";
if (xty('ftr-aln') == 'left')
{
	echo '<footer class="fx:r fxa:1 fxc:3 ht:min6 fb:100%">' . "\n";
	echo '<div class="aln:txt-lt dsp:blk fnt:siz-1">' . "\n";
}
elseif (xty('ftr-aln') == 'right')
{
	echo '<footer class="fx:r fxa:2 fxc:3 ht:min6 fb:100%">' . "\n";
	echo '<div class="aln:txt-rt dsp:blk fnt:siz-1">' . "\n";
}
else
{
	echo '<footer class="fx:r fxa:3 fxc:3 ht:min6 fb:100%">' . "\n";
	echo '<div class="aln:txt-ct dsp:blk fnt:siz-1">' . "\n";
}
echo '<p>' . blog_copyright() . '</p>';
echo '<p><a href="https://xidipity.com/">Xidipity Theme</a> &sdot; Powered by <a href="https://wordpress.org">WordPress</a>';
echo '</div>' . "\n";
echo '</footer>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xty:footer/php -->' . "\n";
/*
 ***
 * close htm/flex/container here / open in header
 ***
*/
echo '</div>' . "\n";
echo '<!-- /xty:page -->' . "\n";
/*
 *** ref: developer.wordpress.org/reference/functions/wp_footer/
*/
wp_footer();
echo '</body>' . "\n";
echo '</html>' . "\n";
/*
 * EOF: footer.php / 01210115
*/
?>
