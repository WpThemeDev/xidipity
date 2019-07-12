<?php
/*
*        file: footer.php
*       build: 90708.1
* description: The template for displaying the footer
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
// closing div from header
echo '</div>' . "\n";
echo '<!-- xwpt:90708.1/footer.php          -->' . "\n";
echo '<footer id="xwtBkFoot" class="xwtBkFootOpts">' . "\n";
//echo '<div class="xwtBkFootInfo">' . "\n";
// echo '<div class="site-info-inside">' . "\n";
// echo '<div class="credits">' . "\n";
do_action( 'xidipity_credits' );
// echo '</div>' . "\n";
// echo '</div>' . "\n";
//echo '</div>' . "\n";
echo '</footer>' . "\n";
echo '<!-- /xwpt:90708.1/footer.php         -->' . "\n";
// echo '</div>' . "\n";
wp_footer();
echo '</body>' . "\n";
echo '</html>' . "\n";

/*  # eof
footer.php
-------------------------------------*/
?>
