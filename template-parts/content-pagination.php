<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying pagination controls
 *
 * ###:  template-parts/content-pagination.php
 * bld:  28200801
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
$args = array(
	'base' => get_pagenum_link(1) . '%_%',
	'format' => '/page/%#%/',
	'total' => $wp_total ,
	'current' => $wp_paged ,
	'show_all' => false,
	'end_size' => 1,
	'mid_size' => 2,
	'prev_next' => true,
	'prev_text' => '<b><</b>',
	'next_text' => '<b>></b>',
	'type' => 'plain',
	'add_args' => false,
	'add_fragment' => '',
	'before_page_number' => '',
	'after_page_number' => ''
);	
echo '<cmt name="begin">TEMPLATE-PARTS/PAGINATION/PHP</cmt>' . "\n";
echo '<div class="fx:r fxa:4 fxb:6 fxc:3">' . "\n";
echo paginate_links($args);
echo '</div>' . "\n";
echo '<cmt name="end">TEMPLATE-PARTS/PAGINATION/PHP</cmt>' . "\n";
/*
 * EOF: template-parts/content-pagination.php / 28200801
*/
?>
