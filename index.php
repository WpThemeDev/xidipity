<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       index.php
 * Function:        display excerpt summary
 * Build:           200322
 * GitHub:          github.com/WpThemeDev/xidipity/
 * License URI:     www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           0.9
 * @link            developer.wordpress.org/themes/basics/
 *
 */

/*
***
    * set page options
***
*/
disp_menu('yes');

/*
***
    * pagination variables
***
*/
/*: current pagination number :*/
$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
/*: posts per page :*/
$wp_ppp = get_option('posts_per_page');

/*
***
    * filter out exclusions from active categories
***
*/
$category_ids = filter_categories('archive,featured category 1,featured category 2,featured category 3');

if (empty($category_ids))
{
    $cat_array = array(0);
}
else
{
    $cat_array = explode(',', $category_ids);
}

/*
***
    * setup & open database query
***
*/
$qry_prms = array(
    'category__in' => $cat_array,
    'order' => 'DESC',
    'orderby' => 'date',
    'perm' => 'readable',
    'paged' => $wp_paged,
    'post_type' => 'post',
    'posts_per_page' => $wp_ppp
);
$wp_data = new WP_Query($qry_prms);

/*
***
    * function: get_header
    * dsc: header code
    * ver: 200322
    * fnt: load header.php
    * ref: developer.wordpress.org/reference/functions/get_header/
***
*/
get_header();

/*
***/
echo '<!--  file:index.php -->' . "\n";
/***
*/
echo '<!--  htm:FLEX/ITEM 3 -->' . "\n";
echo '<div class="fxd:2 fxe:6 wd:100%">' . "\n";
echo '<!--  sec:FLEX/CONTAINER -->' . "\n";
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<div class="fx:c md)fx:r-rev fxa:1 fxb:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  sec:FLEX/ITEM -->' . "\n";
    echo '<div class="fxd:2 fxe:6 mar:bottom+0.5 md)mar:left+0.5 wd:100%">' . "\n";
}
else
{
    echo '<div class="fx:c md)fx:r fxa:1 fxb:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  sec:FLEX/ITEM -->' . "\n";
    echo '<div class="fxd:2 fxe:6 mar:bottom+0.5 md)mar:right+0.5 wd:100%">' . "\n";
}

if ($wp_data->have_posts())
{

    echo '<!--  sec:FLEX/EXCERPT/CONTAINER -->' . "\n";
    echo '<div class="fx:c md)fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";

    while ($wp_data->have_posts()) {
        /*
        ***
            * function: the_post
            * dsc: post content
            * ver: 200322
            * fnt: iterate the post index in the loop.
            * ref: developer.wordpress.org/reference/functions/the_post/
        ***
        */
        $wp_data->the_post();

        echo '<!--  sec:FLEX/EXCERPT/ITEM -->' . "\n";
        echo '<div class="fxd:2 fxe:6 mar:bottom+0.5 md)pad:hrz+0.25 wd:100% md)wd:1/2 xl)wd:1/3">' . "\n";
        echo '<!--  sec:EXCERPT/BLOCK -->' . "\n";
        echo '<section class="box:shadow bdr:solid-thin bdr:bas-200 bg:content dsp:block  ht:min14">' . "\n";
        echo '<!--  sec:EXCERPT/IMG -->' . "\n";
        echo '<div class="dsp:block pad:+0.25">' . "\n";
        /*
        ***
            * featured image
        ***
        */
        $wp_img = get_the_post_thumbnail(null, 'FULL', array('class' => 'cnr:arch-small ht:auto wd:100%'));
        if ($wp_img)
        {
            echo $wp_img;
        }
        echo '</div>' . "\n";
        echo '<!-- /sec:EXCERPT/IMG -->' . "\n";
        echo '<!--  sec:EXCERPT/CONTENT -->' . "\n";
        echo '<article class="dsp:block pad:+0.5">' . "\n";
        if ('post' == get_post_type())
        {
            if (is_sticky())
            {
                $v_post_cat = dsp_sticky(xidipity_first_category());
            }
            else
            {
                $v_post_cat = dsp_cat(xidipity_first_category());
            }
            echo '<div>' . $v_post_cat . '</div>' . "\n";
        }
        if ('post' == get_post_type())
        {
            echo '<div class="fnt:size-smaller">' . xidipity_posted_on() . '<span class="fg:wcag-grey6 pad:hrz+0.5">&bull;</span>' . xidipity_posted_by() . '</div>'  . "\n";
        }

        /*
        ***
            * function: the_title
            * dsc: post title
            * ver: 200322
            * fnt: Display title
            * ref: developer.wordpress.org/reference/functions/the_title/
        ***
        */
        the_title('<p class="pst:title">', '</p>');

        /*
        ***
            * function: the_excerpt
            * dsc: page title
            * ver: 200322
            * fnt: Display excerpt
            * ref: developer.wordpress.org/reference/functions/the_excerpt/
        ***
        */
        if (xidipity_has_excerpt())
        {
            the_excerpt();
        }

        /*
        ***
            * read more link
        ***
        */
        $v_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));
        echo dsp_rm($v_link) . "\n";
        echo '</article>' . "\n";
        echo '<!-- /sec:EXCERPT/CONTENT -->' . "\n";
        echo '</section>' . "\n";
        echo '<!-- /sec:EXCERPT/BLOCK -->' . "\n";
        echo '</div>' . "\n";
        echo '<!-- /sec:FLEX/EXCERPT/ITEM -->' . "\n";
    }
    echo '</div>' . "\n";
    echo '<!-- /sec:FLEX/EXCERPT/CONTAINER -->' . "\n";

    /*
    ***
        * function: pagination
        * dsc: display pagination
        * ver: 200322
        * fnt: display pagination if paged & number of
        *      records exceeds limit/page
        * ref:
    ***
    */
    $total_pages = $wp_data->max_num_pages;
    if ($total_pages > 1)
    {
        echo '<!--  xwpt: 190927/php/page/pagination      -->' . "\n";
        $current_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$current_page,'pages'=>$total_pages)) . "\n";
        echo '<!-- /xwpt: 190927/php/page/pagination      -->' . "\n";
    }
}
else
{
    echo '<!--  sec:FLEX/EXCERPT/ITEM -->' . "\n";
    echo '<div class="fx:c md)fx:r fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
    echo '<!--  sec:EXCERPT/BLOCK -->' . "\n";
    echo '<section class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
    get_template_part('template-parts/content', 'none');
    echo '</section>' . "\n";
    echo '<!--  sec:EXCERPT/BLOCK -->' . "\n";
    echo '</div>' . "\n";
    echo '<!--  sec:FLEX/EXCERPT/ITEM -->' . "\n";
}
echo '</div>' . "\n";
echo '<!--  sec:FLEX/ITEM -->' . "\n";

/*
***
    * function: get_sidebar
    * dsc: sidebar code
    * ver: 200322
    * fnt: load sidebar.php
    * ref: developer.wordpress.org/reference/functions/get_sidebar/
***
*/
get_sidebar();
echo '</div>' . "\n";
echo '<!--  sec:FLEX/CONTAINER -->' . "\n";
echo '</div>' . "\n";
echo '<!--  htm:FLEX/ITEM 3 -->' . "\n";

/*
***
    * function: get_footer
    * dsc: footer code
    * ver: 200322
    * fnt: load footer.php
    * ref: developer.wordpress.org/reference/functions/get_footer/
***
*/
get_footer();

/*
***
    * function: wp_reset_postdata
    * dsc: database code
    * ver: 200322
    * fnt: reset database query
    * ref: developer.wordpress.org/reference/functions/wp_reset_postdata/
***
*/
wp_reset_postdata();

/*
 * EOF:     index.php
 * Build:   200322
 *
 */
?>
