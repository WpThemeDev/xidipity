<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       index.php
 * Function:        display excerpt summary
 * Build:           200415
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
    'post_status' => 'publish',
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
echo '<!--  fi:3/HTML -->' . "\n";
echo '<div class="fxd:3 fxe:2 fb:100%">' . "\n";
echo '<!--  fc:3/1/HTML -->' . "\n";

/*
***
    * align sidebar
***
*/
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:rw md)fx:r-rev fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:left+0.5">' . "\n";
}
else
{
    echo '<main class="fx:rw md)fx:r fxa:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '<section class="fxd:4 fxe:6 wd:0 fb:100% mar:bottom+0.5 md)mar:right+0.5">' . "\n";
}

if ($wp_data->have_posts())
{
    $cnt = 0;
    echo '<!--  fc:3/1/1/WRAPPER -->' . "\n";
    echo '<div class="fx:rw fxa:1 fxc:1">' . "\n";
    while ($wp_data->have_posts())
    {
        $wp_data->the_post();
        $cnt++;
        /*
        ***
            * featured image
        ***
        */
        $featured_img = get_the_post_thumbnail(null, 'FULL', array('class' => 'cnr:arch-small ht:auto wd:100%'));

        /*
        ***
            * category
        ***
        */
        if (is_sticky())
        {
            $post_catagory = dsp_sticky(xidipity_first_category());
        }
        else
        {
            $post_catagory = dsp_cat(xidipity_first_category());
        }

        /*
        ***
            * read more link
        ***
        */
        $rm_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));

        echo '<!--  fi:3/1/1/'. $cnt . '/ITEM -->' . "\n";
        echo '<div class="fxd:1 fxe:6 fb:100% md)fb:50% xl)fb:33% mar:bottom+0.5 md)pad:hrz+0.25">' . "\n";
        echo '<!--  fi:3/1/1/'. $cnt . '/SECTION -->' . "\n";
        echo '<section class="box:shadow bdr:solid-thin bdr:bas-200 bg:content dsp:block ht:min14">' . "\n";

        /*
        ***
            * featured image
        ***
        */
        if ($featured_img)
        {
            echo '<!--  fi:3/1/1/'. $cnt . '/SECTION/IMAGE -->' . "\n";
            echo '<div class="dsp:block pad:+0.25">' . "\n";
            echo $featured_img;
            echo '</div>' . "\n";
            echo '<!-- /fi:3/1/1/'. $cnt . '/SECTION/IMAGE -->' . "\n";
        }

        /*
        ***
            * excerpt
        ***
        */
        echo '<!--  fi:3/1/1/'. $cnt . '/SECTION/EXCERPT -->' . "\n";
        echo '<article class="dsp:block pad:+0.5">' . "\n";
        echo '<div>' . $post_catagory . '</div>' . "\n";
        echo '<div class="fnt:size-smaller">' . xidipity_posted_on() . '<span class="fg:wcag-grey6 pad:hrz+0.5">&bull;</span>' . xidipity_posted_by() . '</div>'  . "\n";
        the_title('<p class="pst:title">', '</p>');
        if (xidipity_has_excerpt())
        {
            the_excerpt();
            echo dsp_rm($rm_link) . "\n";
        }
        echo '</article>' . "\n";
        echo '<!-- /fi:3/1/1/'. $cnt . '/SECTION/EXCERPT -->' . "\n";
        echo '</section>' . "\n";
        echo '<!-- /fi:3/1/1/'. $cnt . '/SECTION -->' . "\n";
        echo '</div>' . "\n";
        echo '<!-- /fi:3/1/1/'. $cnt . '/ITEM -->' . "\n";
    }
    echo '</div>' . "\n";
    echo '<!-- /fc:3/1/1/WRAPPER -->' . "\n";

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
    $wp_posts = get_posts(
     array(
      'numberposts' => 1,
      'post_status' => 'any',
     )
    );

    echo '<!--  fc:NEW -->' . "\n";
    echo '<div class="fx:c sm)fx:r fxa:1 fxb:1 fxc:1 mar:vrt+0.5">' . "\n";
    echo '<!--  fi:LOGO -->' . "\n";
    echo '<div class="fxd:3 wd:100% pad:vrt+0.5 sm)wd:25%">' . "\n";
    echo '<img class="pad:hrz+2 wd:100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMTggMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+bm8tYmxvZ3M8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibm8tYmxvZ3MiIGZpbGw9IiMwMDNDOEYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy43LDkuMzUgTDE2LjcsMTAuMzUgTDE0LjY1LDguMyBMMTUuNjUsNy4zIEMxNS44Niw3LjA5IDE2LjIxLDcuMDkgMTYuNDIsNy4zIEwxNy43LDguNTggQzE3LjkxLDguNzkgMTcuOTEsOS4xNCAxNy43LDkuMzUgTTgsMTQuOTQgTDE0LjA2LDguODggTDE2LjExLDEwLjkzIEwxMC4wNiwxNyBMOCwxNyBMOCwxNC45NCBNOCwxMCBDMy41OCwxMCAwLDExLjc5IDAsMTQgTDAsMTYgTDYsMTYgTDYsMTQuMTEgTDEwLDEwLjExIEM5LjM0LDEwLjAzIDguNjcsMTAgOCwxMCBNOCwwIEM1Ljc5MDg2MSwwIDQsMS43OTA4NjEgNCw0IEM0LDYuMjA5MTM5IDUuNzkwODYxLDggOCw4IEMxMC4yMDkxMzksOCAxMiw2LjIwOTEzOSAxMiw0IEMxMiwxLjc5MDg2MSAxMC4yMDkxMzksMCA4LDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="Xidipity WordPress Theme New Blog Logo" />' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:LOGO -->' . "\n";
    echo '<!--  fi:MESSAGE -->' . "\n";
    echo '<div class="fxd:1 fxe:6 wd:100% sm)pad:+1 sm)wd:75%">' . "\n";
    if (is_home() && current_user_can('publish_posts') && empty($wp_posts))
    {
        echo '<h2>1st Post</h2>' . "\n";
        printf('<p>' . wp_kses(
        /* translators: 1: link to WP admin new post page. */
        __('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'xidipity') , array(
            'a' => array(
                'href' => array() ,
            ) ,
        )) . '</p>', esc_url(admin_url('post-new.php')));
    }
    else
    {
        echo '<h2>Welcome</h2>' . "\n";
        echo '<p>Are you ready to publish your first post? If so, please login.</p>' . "\n";
        echo '<p>&nbsp;</p>' . "\n";
        echo '<p>Need help?</p>' . "\n";
        echo '<p>Submit an email to: ' . '<a href="mailto:' . get_option('admin_email') . '?subject=' . get_option('blogname') . ' New User Question">' . get_option('blogname') . ' Support</a></p>' . "\n";
    }
    echo '</div>' . "\n";
    echo '<!-- /fi:MESSAGE -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:NEW -->' . "\n";
}
echo '</section>' . "\n";
echo '<!--  /fi:3/1/1/HTML -->' . "\n";

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
echo '</main>' . "\n";
echo '<!-- /fc:3/1/HTML -->' . "\n";
echo '</div>' . "\n";
echo '<!-- /fi:3/HTML -->' . "\n";

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
 * Build:   200415
 *
 */
?>
