<?php
/**
    * WordPress Xidipity Theme
    * Format category list
    *
    * ###:  c_walker.php
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
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
            if ($category->count > 0) {
                $output .= '<li><a href="' . get_category_link( $category->term_id ) . '">' . $args['link_before'] . $category->name . "\n";
            }
            else
            {
                $output .= '<li>' . $args['link_before'] . $category->name . "\n";
            }
        }
        public function end_el(&$output, $category, $depth = 0, $args = array())
        {
            if ($category->count > 0) {
                $output .= $args['link_after'] . '</a></li>' . "\n";                
            }
            else
            {
                $output .= $args['link_after'] . '</li>' . "\n";
            }
        }
    }
}

/*
 * EOF: c_walker.php / 24200520
 */
?>
