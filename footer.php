<?php
/*
*        file: footer.php
*       build: 90915.1a
* description: The template for displaying the footer
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
/*
    get page template
*/
$wp_tmpl = page_tmpl();
echo '<!-- xwpt: 90915.1a/footer/php              -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-5    -->' . "\n";
echo '<footer class="fx:pg-ct-itm fnt:size-smaller fx:align-ct-itm-2 mar:vert-0.75">' . "\n";
do_action( 'xidipity_credits' );
echo '</footer>' . "\n";
echo '<!-- /xwpt: 90915.1a/footer/php             -->' . "\n";
/*: wordpress code :*/
wp_footer();
echo '</body>' . "\n";
echo '</html>' . "\n";
/*
    eof: footer.php
*/
?>
