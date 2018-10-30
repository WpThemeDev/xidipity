<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package xidipity
 */

if ( ! xidipity_has_sidebar() ) {
	return;
}
?>
<div id="site-sidebar" class="<?php xidipity_layout_class( 'sidebar' ); ?>">
	<div id="secondary">
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</div><!-- .sidebar -->
</div><!-- .col-* columns of main sidebar -->
