<?php
/*
*        file: content-none.php
*       build: 90406.1
* description: The template for displaying search forms.
*      github: https://github.com/WpThemeDev/xidipity
*    comments: At this point the search as failed. Check to see if it is an
*              image category search by checking for the keyword "category"
*              in the url. If so, display media images by category.
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
/* ck for category in url  ------------
-- */
global $wp;
$url = add_query_arg(array() , $wp->request);
$url_items = explode("/", $url);

if (in_array("category", $url_items)) {
    $err = false;
    $slug = end($url_items);
    $cat_obj = get_category_by_slug($slug);
    $cat_id = $cat_obj->term_id;
    $category = get_cat_name($cat_id);
    $cat_descrip = category_description($cat_id);
    echo '<section class="no-results not-found">' . "\n";
    echo '<header class="page-header">' . "\n";
    echo '<h1 class="page-title">Category: ' . $category . '</h1>' . "\n";
    if (!empty($cat_descrip)) {
        echo '<div class="taxonomy-description">' . __($cat_descrip, 'xidipity') . '</div>' . "\n";
    }
    echo '</header>' . "\n";
    echo '<div class="page-content">' . "\n";
    if ($cat_id == 0) {
        $err = true;
    }
    else {
        /* query defaults          ------------
        -- */
        $orderby = 'date';
        $order = 'DESC';
        $max_col = 3;
        $qry = array(
            'post_type' => 'attachment',
            'post_mime_type' => 'image',
            'orderby' => $orderby,
            'order' => $order,
            'posts_per_page' => -1,
            'post_status' => 'inherit',
            'cat' => $cat_id
        );
        /* run query               ------------
        -- */
        $qry_rslt = new WP_Query($qry);
        if ($qry_rslt->have_posts()) {
            $new_row = true;
            $cur_col = 1;
            $html = '<!-- 900208.1 Template: general / table / responsive -->';
            $html.= '<table id="responsive">';
            $html.= '<tbody>';
            while ($qry_rslt->have_posts()) {
                $qry_rslt->the_post();
                $image = wp_get_attachment_image_src(get_the_ID() , 'full'); // Full sized image
                $thumb = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()) , 'thumbnail'); // Thumbnail size
                $img_id = get_post(get_post_thumbnail_id());
                if ($new_row) {
                    $html.= '<tr>';
                }

                $html.= '<td>';
                $html.= '<div><a href="' . get_attachment_link(get_post(get_post_thumbnail_id())) . '" target="_self"><img ' . $class . ' src="' . $image[0] . '"></a></div>';
                $html.= '<div class="img-caption align-center text-sm">' . $qry_rslt->post->post_excerpt . '</div>';
                $html.= '</td>';
                $cur_col++;
                $new_row = ($cur_col > $max_col);
                if ($new_row) {
                    $html.= '</tr>';
                    $cur_col = 1;
                }
            }

            /* finish row if needed    ------------
            -- */
            if (!$new_row) {
                while ($cur_col <= $max_col) {
                    $html.= '<td>&nbsp;</td>';
                    $cur_col++;
                    $new_row = ($cur_col > $max_col);
                }

                if ($new_row) {
                    $html.= '</tr>';
                }
            }

            $html.= '</tbody>';
            $html.= '</table>';
        }
        else {
            $err = true;
        }

        wp_reset_postdata();
    }

    /* display result          ------------
    -- */
    if ($err) {
        $message = wpautop('The category selected does not have any content or images associated with it.') . "\n";
        $html = __($message);
    }
    echo $html . "\n";
}
else {
    echo '<section class="no-results not-found">' . "\n";
    echo '<header class="page-header">' . "\n";
    echo '<h1 class="page-title"><i class="fas fa-search-minus fg-pri-300 pr-4"></i>Search Results</h1>' . "\n";
    echo '</header>' . "\n";
    echo '<div class="page-content">' . "\n";
    if (is_home() && current_user_can('publish_posts')) {
        echo '<p>' . printf(wp_kses(__('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'xidipity') , array(
            'a' => array(
                'href' => array()
            )
        )) , esc_url(admin_url('post-new.php'))) . '</p>' . "\n";
    }
    elseif (is_search()) {
        $message = wpautop('Sorry, but nothing matched your search terms.') . "\n";
        echo __($message) . "\n";
    }
    else {
        $message = wpautop('The item selected was not found. If the item is a category the most likely reasons are:<ul><li>no assigned posts,</li><li>media category.</li></ul>') . "\n";
        echo __($message) . "\n";
    }
}

echo '</div>' . "\n";
echo '</section>' . "\n";
/*  # eof
content-none.php
-------------------------------------*/
?>
