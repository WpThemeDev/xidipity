<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   sidebar.php
 *  build:  90920.1d
 *  descrp: sidebar (Flexbox column)
 *  ref:    https://github.com/WpThemeDev/xidipity
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
/*
    get page options
*/
echo '<!-- xwpt: 90915.1a/sidebar/php             -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-4    -->' . "\n";
/*
    logic check
*/
if (disp_sidebar() == 'no')
{
    echo '<div class="fx:pg-ct-itm-sbr disp:none">' . "\n";
}
else
{
    if (align_sidebar() == 'left')
    {
        echo '<main class="fx:pg-ct-itm-sbl">' . "\n";
    }
    else
    {
        echo '<main class="fx:pg-ct-itm-sbr">' . "\n";
    }
}
echo '<!-- xwpt: flexbox/sidebar/container        -->' . "\n";
echo '<div class="fx:sb-ct">' . "\n";
dynamic_sidebar( 'sidebar-1' );
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90915.1a/sidebar/php            -->' . "\n";
/*
    eof: sidebar.php
*/
?>
