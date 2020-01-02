<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   footer.php
 *  build:  200107.1a
 *  descrp: Display site footer
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
 ****/
echo '<!-- xwpt: 90920.1d/footer/php              -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-5    -->' . "\n";
/*
    footer management
*/
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<footer class="fx:pg-ct-itm-sbl fnt:size-smaller">' . "\n";
    echo '<div class="fx:area-ct-' . XWT_FTR_ALIGN . ' mar:vert-0.75">' . "\n";
    echo '<div class="fx:area-itm-' . XWT_FTR_ALIGN .  '">' . "\n";
}
else
{
    echo '<footer class="fx:pg-ct-itm-sbr fnt:size-smaller">' . "\n";
    echo '<div class="fx:area-ct-' . XWT_FTR_ALIGN . ' mar:vert-0.75">' . "\n";
    echo '<div class="fx:area-itm-' . XWT_FTR_ALIGN .  '">' . "\n";
}
echo '<p>' . blog_copyright() . '</p>';
echo '<p><a href="' . get_site_url() . '">Xidipity Theme</a> &sdot; Powered by <a href="https://wordpress.org">WordPress</a>';
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</footer>' . "\n";
echo '<!-- /xwpt: 90920.1d/footer/php             -->' . "\n";
/*: wordpress code :*/
wp_footer();
echo '</body>' . "\n";
echo '</html>' . "\n";
/*
    eof: footer.php
*/
?>
