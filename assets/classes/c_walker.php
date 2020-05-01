<?php
/**
 *  name: c_walker
 *  build: 200501
 *  description: category walker extension to support font awesome icons
 *  doc: developer.wordpress.org/reference/classes/walker/
 *
 */
if ( ! class_exists( 'c_walker' ) )
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
            $output .= '<li><a href="' . get_category_link( $category->term_id ) . '">' . $args['link_before'] . $category->name . "\n";
        }
        public function end_el(&$output, $category, $depth = 0, $args = array())
        {
            $output .= $args['link_after'] . '</a></li>' . "\n";
        }
    }
}

/*
 * EOF:     c_walker.php
 * Build:   200501
 *
 */
?>
