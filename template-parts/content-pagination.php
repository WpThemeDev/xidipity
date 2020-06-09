<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying pagination controls
    *
    * ###:  content-pagination.php
    * bld:  27200615
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

/*
***/
echo '<!--  file:content-pagination.php -->' . "\n";
/***
*/

$total_pages = $wp_data->max_num_pages;
if ($total_pages > 1)
{
    echo '<!--  ct:PAGINATION -->' . "\n";
    $current_page = max(1, get_query_var('paged'));
    $args = array(
        'base'               => get_pagenum_link(1) . '%_%',
        'format'             => '/page/%#%',
        'total'              => abs($total_pages),
        'current'            => abs($current_page),
        'show_all'           => false,
        'end_size'           => 1,
        'mid_size'           => 2,
        'prev_next'          => true,
        'prev_text'          => '<i class="fas fa-chevron-left"></i>',
        'next_text'          => '<i class="fas fa-chevron-right"></i>',
        'type'               => 'plain',
        'add_args'           => false,
        'add_fragment'       => '',
        'before_page_number' => '',
        'after_page_number'  => ''
    );
    echo '<div class="fx:r fxa:4 fxb:6 fxc:1 bkg:bas+5 cnr:arch-small mar:vrt+0.5 pad:+0.5">' . "\n";
    echo paginate_links($args);
    echo '</div>' . "\n";
    echo '<!-- /ct:PAGINATION -->' . "\n";
}

/*
 * EOF: content-pagination.php / 27200615
 */
?>
