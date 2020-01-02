<?php
/*
 *  Xidipity WordPress Theme
 *
 *  file:   sidebar.php
 *  build:  200102.1a
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
    if (XWT_SIDEBAR_ALIGN == 'left')
    {
        echo '<div class="fx:pg-ct-itm-sbl disp:none">' . "\n";
    }
    else
    {
        echo '<div class="fx:pg-ct-itm-sbr disp:none">' . "\n";
    }
}
else
{
    if (XWT_SIDEBAR_ALIGN == 'left')
    {
        echo '<div class="fx:pg-ct-itm-sbl">' . "\n";
    }
    else
    {
        echo '<div class="fx:pg-ct-itm-sbr">' . "\n";
    }
}
echo '<!-- xwpt: flexbox/sidebar/container        -->' . "\n";
echo '<div class="fx:sb-ct fx:sb-ct-opt">' . "\n";
/*: hook for print.css to hide sidebar :*/
echo '<div id="sidebar">' . "\n";
dynamic_sidebar( 'sidebar-1' );
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt: 90915.1a/sidebar/php            -->' . "\n";
/*
    eof: sidebar.php
*/
?>
