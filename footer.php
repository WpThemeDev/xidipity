<?php

/*
 *  Xidipity WordPress Theme
 *
 *  file:   footer.php
 *  build:  90920.1d
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
if (align_sidebar() == 'left')
{
    echo '<footer class="fx:pg-ct-itm-sbl fnt:size-smaller fx:align-ct-itm-5 mar:vert-0.75">' . "\n";
}
else
{
    echo '<footer class="fx:pg-ct-itm-sbr fnt:size-smaller fx:align-ct-itm-5 mar:vert-0.75">' . "\n";
}
do_action( 'xidipity_credits' );
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
