<?php
/**
 * The template for displaying search forms.
 *
 * @package xidipity
 */
?>

<div class="search-frm-container">
  <form role="search" method="get" class="search-frm" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  	<label>
  		<span class="screen-reader-text"><?php echo esc_html_x( 'Search for:', 'label', 'xidipity' ); ?></span>
  		<input type="search" class="search-fld" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'xidipity' ); ?>" value="<?php echo get_search_query(); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label', 'xidipity' ); ?>" />
  	</label>
  	<button type="submit" class="search-sub"><span class="screen-reader-text"><?php echo esc_html_x( 'Search', 'submit button', 'xidipity' ); ?></span><i class="fas fa-search"></i></button>
  </form>
</div>