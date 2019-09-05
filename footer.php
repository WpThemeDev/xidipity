<?php
/*
*        file: footer.php
*       build: 90903.1a
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
echo '<!-- xwpt: 90903.1a/footer/php              -->' . "\n";
if (on_list($wp_tmpl,'naked,no-sidebar'))
{
    echo '<footer class="fx:nspg-footer fnt:size-smaller mar:vert-0.75 txt:center">' . "\n";
}
else
{
    echo '<footer class="fx:pg-item fnt:size-smaller mar:vert-0.75 txt:center">' . "\n";
}
do_action( 'xidipity_credits' );
echo '</footer>' . "\n";
echo '<!-- /xwpt: 90903.1a/footer/php             -->' . "\n";
echo '</div>' . "\n";
/*: wordpress code :*/
wp_footer();
echo '</body>' . "\n";
echo '</html>' . "\n";
/*
    eof: footer.php
*/
?>
