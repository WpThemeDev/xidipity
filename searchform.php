<?php
/*
*        file: searchform.php
*       build: 90325.1
* description: Template for displaying search forms.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<div class="search-frm-container">' . "\n";
echo '<form role="search" method="get" class="search-frm" action="' . esc_url( home_url( '/' ) ) . '">' . "\n";
echo '<label>' . "\n";
echo '<span class="screen-reader-text">' . esc_html_x( 'Search for:', 'label', 'xidipity' ) . '</span>' . "\n";
echo '<input type="search" class="search-fld" placeholder="' . esc_attr_x( 'Search &hellip;', 'placeholder', 'xidipity' ); ?>" value="<?php echo get_search_query(); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label', 'xidipity' ) . '" />' . "\n";
echo '</label>' . "\n";
echo '<button type="submit" class="search-sub"><span class="screen-reader-text">' . esc_html_x( 'Search', 'submit button', 'xidipity' ) . '</span><i class="fas fa-search"></i></button>' . "\n";
echo '</form>' . "\n";
echo '</div>' . "\n";
/*  # eof
searchform.php
-------------------------------------*/
?>
