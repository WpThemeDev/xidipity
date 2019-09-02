<?php
/*
*        file: footer.php
*       build: 90828.1a
* description: The template for displaying the footer
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<!-- xwpt: 90828.1a/footer/php              -->' . "\n";
$wp_tmpl = get_option('current_page_template');
if (abs(strpos('#,naked,no-sidebar', $wp_tmpl)) > 0)
{
    echo '<footer class="fx:nspg-footer fnt:size-smaller mar:vert-0.75 txt:center">' . "\n";
}
else
{
    echo '<footer class="fx:pg-item fnt:size-smaller mar:vert-0.75 txt:center">' . "\n";
}
do_action( 'xidipity_credits' );
echo '</footer>' . "\n";
echo '<!-- /xwpt: 90828.1a/footer/php             -->' . "\n";
echo '</div>' . "\n";
/*: wordpress code :*/
wp_footer();
echo '</body>' . "\n";
echo '</html>' . "\n";
/*
    eof: footer.php
*/
?>
