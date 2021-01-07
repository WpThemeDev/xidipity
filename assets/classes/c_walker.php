<?php
/**
 * WordPress Xidipity Theme
 * Format category list
 *
 * ###:  c_walker.php
 * bld:  30201115
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2018-2021 John Baer
 *
 */
if (!class_exists('c_walker'))
{
	class c_walker extends Walker
	{
		public $tree_type = 'category';
		public $db_fields = array(
			'parent' => 'parent',
			'id' => 'term_id'
		);
		public function start_lvl(&$output, $depth = 0, $args = array())
		{
			$output .= '<ul class="' . $args['class'] . '">' . "\n";
		}
		public function end_lvl(&$output, $depth = 0, $args = array())
		{
			$output .= '</ul>' . "\n";
		}
		public function start_el(&$output, $category, $depth = 0, $args = array() , $current_object_id = 0)
		{
			$output .= '<li>' . $args['link_before'] . $category->name . "\n";
		}
		public function end_el(&$output, $category, $depth = 0, $args = array())
		{
			$output .= $args['link_after'] . '</li>' . "\n";
		}
	}
}

/*
 * EOF: c_walker.php / 30201115
*/
?>
