<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying pages assigned to category
    *
    * ###:  category.php
    * bld:  27200615
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
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
echo '<article class="box:shadow bkg:content txt:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";
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
    $first_cat_name = xidipity_first_category('name');
    echo '<!--  bk:HEADER -->' . "\n";
    echo '<header class="mar:top+1 wd:100%">' . "\n";
    echo '<div class="pg:title">Category: ' . $first_cat_name . '</div>' . "\n";
    echo '<div class="bkg:bas+2 ln mar:bottom+0.75 mce[dsp:none]">&#8203;</div>' . "\n";
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
        $excerpt_category = '<div class="fnt:weight-bolder">' . dsp_cat($first_cat_name) . '</div>';
        $excerpt_byline = '<div class="fnt:size-smaller">' . xidipity_date('pub') . '<span class="txt:bas-1 pad:hrz+0.5">&bull;</span>' . xidipity_posted_by() . '</div>';
        /*
         ***
         * get post link for read more
         ***
        */
        $post_link = esc_url(apply_filters('xidipity_the_permalink', get_permalink()));

        echo '<!--  bk:' . $cnt . '/PARAGRAPH -->' . "\n";
        echo '<div class="bkg:content ht:min10 mar:bottom+0.5 wd:100%">' . "\n";

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
    if (function_exists('xidipity_paginate_links'))
    {
        $total_pages = $wp_query->max_num_pages;
        if ($total_pages > 1)
        {
            $current_page = max(1, get_query_var('paged'));
            echo '<div class="bkg:bas+2 ln mar:top+0.75">&#8203;</div>' . "\n";
            echo '<!--  pg:PAGINATION -->' . "\n";
            echo xidipity_paginate_links(array('page'=>$current_page,'pages'=>$total_pages)) . "\n";
            echo '<!-- /pg:PAGINATION -->' . "\n";
            echo '<div class="bkg:bas+2 ln mar:bottom+0.75">&#8203;</div>' . "\n";
        }
    }

    echo '<div class="bkg:bas+2 ln mar:vrt+0.25">&#8203;</div>' . "\n";

    /*
    ***
        * page footer
    ***
    */
    $footer_items = '';
    /*: modified date :*/
    $footer_items .= dsp_today(xidipity_date()) . '|';
    echo '<!--  ct:FOOTER -->' . "\n";
    echo '<footer class="pad:left+0.5 fnt:size-smaller prt[dsp:none]">' . "\n";
    echo xidipity_metalinks(explode('|', $footer_items)) . "\n";
    echo '</footer>' . "\n";
    echo '<!-- /ct:FOOTER -->' . "\n";
}
else
{
    echo '<!--  fc:CAT-ERR -->' . "\n";
    echo '<div class="fx:rw sm)fx:r fxa:1 fxb:1 fxc:1 bkg:bas+4 cnr:arch-small mar:vrt+0.5 pad:vrt+1">' . "\n";
    echo '<!--  fc:LOGO -->' . "\n";
    echo '<div class="fx:r fxa:3 fxb:1 fxc:3 wd:100% sm)wd:6">' . "\n";
    echo '<svg class="ht:5 wd:5" viewBox="0 0 24 24">
    <path fill="var(--hue-pri-dark)" d="M15,15.5A2.5,2.5 0 0,1 12.5,18A2.5,2.5 0 0,1 10,15.5V13.75A0.75,0.75 0 0,1 10.75,13A0.75,0.75 0 0,1 11.5,13.75V15.5A1,1 0 0,0 12.5,16.5A1,1 0 0,0 13.5,15.5V11.89C12.63,11.61 12,10.87 12,10C12,8.9 13,8 14.25,8C15.5,8 16.5,8.9 16.5,10C16.5,10.87 15.87,11.61 15,11.89V15.5M8.25,8C9.5,8 10.5,8.9 10.5,10C10.5,10.87 9.87,11.61 9,11.89V17.25A3.25,3.25 0 0,0 12.25,20.5A3.25,3.25 0 0,0 15.5,17.25V13.75A0.75,0.75 0 0,1 16.25,13A0.75,0.75 0 0,1 17,13.75V17.25A4.75,4.75 0 0,1 12.25,22A4.75,4.75 0 0,1 7.5,17.25V11.89C6.63,11.61 6,10.87 6,10C6,8.9 7,8 8.25,8M10.06,6.13L9.63,7.59C9.22,7.37 8.75,7.25 8.25,7.25C7.34,7.25 6.53,7.65 6.03,8.27L4.83,7.37C5.46,6.57 6.41,6 7.5,5.81V5.75A3.75,3.75 0 0,1 11.25,2A3.75,3.75 0 0,1 15,5.75V5.81C16.09,6 17.04,6.57 17.67,7.37L16.47,8.27C15.97,7.65 15.16,7.25 14.25,7.25C13.75,7.25 13.28,7.37 12.87,7.59L12.44,6.13C12.77,6 13.13,5.87 13.5,5.81V5.75C13.5,4.5 12.5,3.5 11.25,3.5C10,3.5 9,4.5 9,5.75V5.81C9.37,5.87 9.73,6 10.06,6.13M14.25,9.25C13.7,9.25 13.25,9.59 13.25,10C13.25,10.41 13.7,10.75 14.25,10.75C14.8,10.75 15.25,10.41 15.25,10C15.25,9.59 14.8,9.25 14.25,9.25M8.25,9.25C7.7,9.25 7.25,9.59 7.25,10C7.25,10.41 7.7,10.75 8.25,10.75C8.8,10.75 9.25,10.41 9.25,10C9.25,9.59 8.8,9.25 8.25,9.25Z" /></svg>' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:LOGO -->' . "\n";
    echo '<!--  fc:MESSAGE -->' . "\n";
    echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
    echo '<h2 class="aln:text-center sm)aln:text-left wd:100%">Category Error</h2>' . "\n";
    echo '<p class="aln:text-center sm)aln:text-left wd:100%">The specified category did not return any records.</p>' . "\n";
    echo '<!--  fc:BUTTON -->' . "\n";
    echo '<div class="fx:r fxa:3 sm)fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
    echo '<div class="aln:text-center sm)aln:text-left mar:top+1">' . "\n";
    echo '<button onclick="javascript:history.back()">Return to previous page</button>' . "\n";
    echo '</div>' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:BUTTON -->' . "\n";
    echo '</div>' . "\n";
    echo '<!--  fc:MESSAGE -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:CAT-ERR -->' . "\n";
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
 * EOF: category.php / 27200615
 */
?>
