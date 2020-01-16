<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       single.php
 * Function:        display blog post
 * Build:           200115-1
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            https://developer.wordpress.org/themes/basics/
 *
 */

/*
    system variables
*/
global $wp_query;
/* current pagination number */
$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
/* posts per page */
$wp_ppp = get_option('posts_per_page');
/*
    local variables
*/
$v_cat = '';
$v_cur_page = 0;
$v_meta_list = '';
$v_pages = 0;
/*
    display header
*/
get_header();
echo '<!-- xwpt: 90927.1a/single/php              -->' . "\n";
echo '<!-- xwpt: flexbox/page/container/item-3    -->' . "\n";
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:pg-ct-itm-sbl">' . "\n";
}
else
{
    echo '<main class="fx:pg-ct-itm-sbr">' . "\n";
}
if ($wp_query->have_posts()) {
    the_post();
    echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
    echo '<div class="fx:cn-ct">' . "\n";
    /*
        system variables
    */
    $wp_author = __(get_the_author_meta('nickname'));
    $wp_author_id = get_the_author_meta('ID');
    $wp_post_date = get_the_date();
    $wp_tags = get_the_tags();
    echo '<!-- xwpt: 90927.1a/content-post/php        -->' . "\n";
    echo '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
    echo '<article class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% fx:shadow">' . "\n";
    echo '<div class="pad:left-1">' . "\n";
    $v_meta_list .= $wp_post_date . ',' . 'Author -' . ',' . '<a href="' . get_author_posts_url( $wp_author_id, $wp_author ) . '">' . $wp_author . '</a>';
    echo xidipity_metalinks(explode(',', $v_meta_list));
    /*
        content title
    */
    echo '<header class="fx:cn-itm-hd">' . "\n";
    the_title('<h1 class="fx:cn-itm-ti">', '</h1>');
    echo '</header>' . "\n";
    /*
        yoast breadcrumbs
    */
    if ( function_exists('yoast_breadcrumb') ) {
      yoast_breadcrumb( '<p id="breadcrumbs" class="seo-pst-breadcrumbs">','</p>' );
    }
    echo '</div>' . "\n";
    /*
        content
    */
    echo '<div class="fx:cn-itm-wrapper pad:1">' . "\n";
    the_content();
    echo '</div>' . "\n";
    /*
        meta footer
    */
    echo '<div class="pad:left-1 fnt:size-smaller prt(dsp:none)">' . "\n";
    $v_meta_list = '';
    /*: edit :*/
    if (get_edit_post_link())
    {
        $v_meta_list .= xidipity_icon_edit() . ',';
        $v_meta_list .= '<a href="' . get_edit_post_link() . '">Edit</a>' . ',';
        $v_meta_list .= '&nbsp;,';
    }
    /*: category :*/
    $v_cat = xidipity_first_category();
    if (!empty($v_cat))
    {
        $v_meta_list .=  xidipity_icon_cat() . ',';
        $v_meta_list .=  $v_cat . ',';
        $v_meta_list .= '&nbsp;,';
    }
    /*: tags :*/
    if ($wp_tags)
    {
        $v_meta_list .=  xidipity_icon_tags() . ',';
        if ( $wp_tags ) {
            foreach( $wp_tags as $wp_tag ) {
                $v_meta_list .= $wp_tag->name . ', ';
            }
        }
    }
    if (!empty($v_meta_list))
    {
        echo xidipity_metalinks(explode(',', $v_meta_list));
    }
    echo '</div>' . "\n";
    echo '</article>' . "\n";
    echo '<!-- /xwpt: 90927.1a/content-post/php       -->' . "\n";

    /*
        pagination
    */
    $v_pages = $wp_query->max_num_pages;
    if ($v_pages > 1)
    {
        echo '<!-- xwpt: 90927.1a/single/php/pagination   -->' . "\n";
        $v_cur_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$v_cur_page,'pages'=>$v_pages)) . "\n";
        echo '<!-- /xwpt: 90927.1a/single/php/pagination  -->' . "\n";
    }
    /*
        author
    */
    if ('' !== get_the_author_meta('description'))
    {
        /*
            system variables
        */
        $wp_author = __(get_the_author_meta('nickname'));
        $wp_author_id = get_the_author_meta('ID');
        $wp_bio = get_the_author_meta('description');
        $wp_permalink = esc_url(get_avatar_url(get_the_author_meta('user_email') , 64));
        /*
            local variables
        */
        $v_biography  = '';
        $v_biography .= '<h5>About: <a href="' . get_author_posts_url( $wp_author_id, $wp_author ) . '">' . $wp_author . '</a></h5>';
        $v_biography .= '<p>' . $wp_bio . '</p>';
        $v_img = '<img class="xwd:100%" src="' . $wp_permalink . '" alt="Xidipity Avatar" />';
        $v_meta_list = '';
        echo '<!-- xwpt: 90927.1a/biography/php           -->' . "\n";
        echo '<!-- xwpt: flexbox/content/container        -->' . "\n";
        echo '<!-- xwpt: flexbox/content/container/item   -->' . "\n";
        echo '<div class="fx:cn-ct-itm fx:cn-ct-opt fx:basis-100% pad:1 fx:shadow prt(dsp:none)">' . "\n";
        echo '<div class="fx:cn-ct-bio">' . "\n";
        echo '<div class="fx:ct-bio-itm">' . $v_img . '</div>';
        echo '<div class="fx:ct-bio-itm pad:left-0.5">' . $v_biography . '</div>';
        echo '</div>' . "\n";
        echo '</div>' . "\n";
        echo '<!-- /xwpt: 90927.1a/biography/php          -->' . "\n";
    }
    /*
        comments
    */
    if (comments_open() || '0' != get_comments_number())
    {
        comments_template();
    }
    
}
else
{
    err_msg('no available posts');
    echo '<div class="fx:cn-ct">' . "\n";
    get_template_part('template-parts/content', 'none');
    echo '</div>' . "\n";
}
echo '</main>' . "\n";
echo '<!-- /xwpt: 90927.1a/single/php             -->' . "\n";
/*
    display sidebar
*/
get_sidebar();
echo '</div>' . "\n";
/*
    reset post data
*/
wp_reset_postdata();
/*
    display footer
*/
get_footer();

/*
 * EOF:     single.php
 * Build:   200115-1
 *
 */
?>
