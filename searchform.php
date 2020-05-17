<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying searchform (widget)
    *
    * ###:  searchform.php
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

echo '<!-- xwpt:90708.1/searchform.php      -->' . "\n";
echo '<div class="search-frm-container">' . "\n";
echo '<form role="search" method="get" class="search-frm" action="' . esc_url( home_url( '/' ) ) . '">' . "\n";
echo '<label>' . "\n";
echo '<span class="screen-reader-text">' . esc_html_x( 'Search for:', 'label', 'xidipity' ) . '</span>' . "\n";
echo '<input type="search" class="search-fld" placeholder="' . esc_attr_x( 'Search &hellip;', 'placeholder', 'xidipity' ); ?>" value="<?php echo get_search_query(); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label', 'xidipity' ) . '" />' . "\n";
echo '</label>' . "\n";
echo '<button type="submit" class="search-sub"><span class="screen-reader-text">' . esc_html_x( 'Search', 'submit button', 'xidipity' ) . '</span><i class="fas fa-search"></i></button>' . "\n";
echo '</form>' . "\n";
echo '</div>' . "\n";
echo '<!-- /xwpt:90708.1/searchform.php     -->' . "\n";

/*
 * EOF: searchform.php / 24200520
 */
?>
