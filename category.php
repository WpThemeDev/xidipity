<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       category.php
 * Function:        display pages assigned to category
 * Build:           200422
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         2.0
 * @since           0.9
 * @link            https://developer.wordpress.org/themes/basics/
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
global $wp_query;
/*: current pagination number :*/
$wp_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
/*: posts per page :*/
$wp_ppp = get_option('posts_per_page');

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
echo '<!--  file:category.php -->' . "\n";
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

/*
***
    * create block for content
***
*/
echo '<!--  bk:ARTICLE -->' . "\n";
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
if (have_posts()) 
{
    $cnt = 0;
    
    /*
    ***
        * function: the_title
        * descript: display page title
        * ref: developer.wordpress.org/reference/functions/the_title/
    ***
    */
    echo '<!--  bk:HEADER -->' . "\n";
    echo '<header class="mar:top+1 wd:100%">' . "\n";
    echo '<div class="pg:title">Category: ' . post_category() . '</div>' . "\n";
    echo '<div class="bg:bas-300 ln mar:bottom+0.75 mce[dsp:none]">&#8203;</div>' . "\n";
    echo '</header>' . "\n";
    echo '<!-- /bk:HEADER -->' . "\n";

    while (have_posts())
    {
        the_post();
        $cnt++;
        
        /*
        ***
            * excerpt data elements
        ***
        */
        $wp_img = get_the_post_thumbnail(null, 'FULL', array(
            'class' => 'cnr:arch-small ht:auto wd:100%'
        ));
        $excerpt_category = '<div class="fnt:size-smaller">' . dsp_cat(post_category()) . '</div>';
        $excerpt_byline = '<div class="fnt:size-smaller">' . xidipity_posted_on() . '<span class="fg:wcag-grey6 pad:hrz+0.5">&bull;</span>' . xidipity_posted_by() . '</div>';
        /*
         ***
         * get post link for read more
         ***
        */
        $post_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));

        echo '<!--  bk:' . $cnt . '/PARAGRAPH -->' . "\n";
        echo '<div class="bg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";

        /*
        ***
            * function: the_excerpt
            * dsc: post excerpt
            * ver: 200322
            * fnt: display excerpt
            * ref: developer.wordpress.org/reference/functions/the_excerpt/
        ***
        */
        echo '<!--  fc:EXCERPT -->' . "\n";
        echo '<div class="fx:c md)fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
        if (!empty($wp_img))
        {
            echo '<!--  fi:1/EXCERPT  -->' . "\n";
            echo '<div class="fxd:2 fxe:6 wd:100% md)wd:1/3 xl)wd:1/4 ht:min10">' . "\n"; 
            echo '<!--  ex:IMAGE  -->' . "\n";
            echo '<div class="dsp:block pad:+1 ht:100%">' . "\n";
            echo $wp_img . "\n";
            echo '</div>' . "\n";
            echo '<!-- /ex:IMAGE  -->' . "\n";
            echo '</div>' . "\n";
            echo '<!-- /fi:1/EXCERPT  -->' . "\n";
            echo '<!--  fi:2/EXCERPT  -->' . "\n";
            echo '<div class="fxd:1 fxe:6 wd:100% md)wd:2/3 xl)wd:3/4 ht:min10">' . "\n";
        }
        else
        {
            echo '<!--  fi:1/EXCERPT  -->' . "\n";
            echo '<div class="fxd:1 fxe:6 wd:100% ht:min10">' . "\n";
        }
        echo '<!--  ex:TEXT  -->' . "\n";
        echo '<div class="dsp:block pad:+1 ht:100%">' . "\n";
        if (!empty($excerpt_category))
        {
            echo $excerpt_category . "\n";
        }
        if (!empty($excerpt_byline))
        {
            echo $excerpt_byline . "\n";
        }
        /* excerpt title */
        the_title('<div class="pg:title led:x-narrow">', '</div>');
        the_excerpt();
        echo dsp_rm($post_link) . "\n";

        echo '</div>' . "\n";
        echo '<!-- /ex:TEXT  -->' . "\n";
        echo '</div>' . "\n";
        if (empty($wp_img))
        {
            echo '<!-- /fi:1/EXCERPT  -->' . "\n";
        }
        else
        {
            echo '<!-- /fi:2/EXCERPT  -->' . "\n";
        }
        echo '</div>' . "\n";
        echo '<!-- /fc:EXCERPT -->' . "\n";
        echo '</div>' . "\n";
        echo '<!-- /bk:' . $cnt . '/PARAGRAPH -->' . "\n";
    }

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
    $total_pages = $wp_query->max_num_pages;
    if ($total_pages > 1)
    {
        echo '<!--  ct:PAGINATION -->' . "\n";
        $current_page = max(1, get_query_var('paged'));
        echo xidipity_paginate_links(array('page'=>$current_page,'pages'=>$total_pages)) . "\n";
        echo '<!-- /ct:PAGINATION -->' . "\n";
    }

    echo '<div class="bg:bas-300 ln mar:top+0.75 mce[dsp:none]">&#8203;</div>' . "\n";

    /*
    ***
        * page footer
    ***
    */
    /*: date :*/
    $footer_items = dsp_date(date(get_option('date_format'))) . '|';
    echo '<!--  bk:FOOTER -->' . "\n";
    echo '<footer class="pad:left+0.5 fnt:size-smaller prt[dsp:none]">' . "\n";
    echo xidipity_metalinks(explode('|', $footer_items)) . "\n";
    echo '</footer>' . "\n";
    echo '<!-- /bk:FOOTER -->' . "\n";
}
else
{
    echo '<!--  fc:3/1/HTML -->' . "\n";
    echo '<div class="fx:c sm)fx:r fxa:1 fxb:1 fxc:1 mar:vrt+1">' . "\n";
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '<div class="fxd:3 wd:100% pad:vrt+0.5 sm)wd:25%">' . "\n";
    echo xidipity_category_logo() . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:3/1/1/HTML -->' . "\n";
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '<div class="fxd:1 fxe:6 wd:100% sm)pad:+1 sm)wd:75%">' . "\n";
    echo '<h2>Category Error</h2>' . "\n";
    echo '<p>The category criteria did not return any documents.</p>' . "\n";
    echo '</div>' . "\n";
    echo '<!--  fi:3/1/1/HTML -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:3/1/HTML -->' . "\n";
}
echo '</article>' . "\n";
echo '<!--  bk:ARTICLE -->' . "\n";
echo '</section>' . "\n";
echo '<!-- /fi:3/1/1/HTML -->' . "\n";

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
 * EOF:     category.php
 * Build:   200422
 *
 */
?>
