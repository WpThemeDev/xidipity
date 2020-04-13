<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * File Name:       single.php
 * Function:        display blog post
 * Build:           200322
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
***
    * set page options
***
*/
disp_menu('yes');

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
echo '<!--  file:single.php -->' . "\n";
/***

*/
echo '<!--  fi:3/HTML -->' . "\n";
echo '<div class="fxd:2 fxe:6 wd:100%">' . "\n";
echo '<!--  fc:MAIN -->' . "\n";
if (XWT_SIDEBAR_ALIGN == 'left')
{
    echo '<main class="fx:c md)fx:r-rev fxa:1 fxb:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:1/SECTION -->' . "\n";
    echo '<section class="fxd:2 fxe:6 mar:bottom+0.5 md)mar:left+0.5 wd:100%">' . "\n";
}
else
{
    echo '<main class="fx:c md)fx:r fxa:1 fxb:1 fxc:1 sm)mar:hrz+0.5">' . "\n";
    echo '<!--  fi:1/SECTION -->' . "\n";
    echo '<section class="fxd:2 fxe:6 mar:bottom+0.5 md)mar:right+0.5 wd:100%">' . "\n";
}

/*
***
    * create block for content
***
*/
echo '<!--  ct:ARTICLE -->' . "\n";
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";

if ($wp_query->have_posts())
{
    echo '<!--  fc:LAYOUT -->' . "\n";
    echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";

    echo '<!--  fi:1/CATEGORY -->' . "\n";
    echo '<div class="fxd:2 fxe:6 wd:100%">' . "\n";
    echo '<!--  fc:WRAPPER -->' . "\n";
    echo '<div class="fx:r fxa:1 fxc:3 ht:min3">' . "\n";
    echo '<!--  ct:TEXT -->' . "\n";
    echo '<div class="aln:text-left dsp:block">' . "\n";
    if ('post' == get_post_type())
    {
        if (is_sticky())
        {
            echo '<div>' . dsp_sticky(xidipity_first_category()) . '</div>' . "\n";
        }
        else
        {
            echo '<div>' . dsp_cat(xidipity_first_category()) . '</div>' . "\n";
        }
    }
    //echo '<div>' . xidipity_first_category() . '</div>' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /ct:TEXT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:WRAPPER -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:1/CATEGORY -->' . "\n";

    echo '<!--  fi:2/TITLE -->' . "\n";
    echo '<div class="fxd:2 fxe:6 wd:100%">' . "\n";
    echo '<!--  fc:WRAPPER -->' . "\n";
    echo '<div class="fx:r fxa:1 fxc:1 ht:min5">' . "\n";
    echo '<!--  ct:TEXT -->' . "\n";
    echo '<div class="aln:text-left dsp:block">' . "\n";
    the_title('<h1>', '</h1>');
    echo '</div>' . "\n";
    echo '<!-- /ct:TEXT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:WRAPPER -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:2/TITLE -->' . "\n";

    echo '<!--  fi:3/BLOG -->' . "\n";
    echo '<div class="fxd:2 fxe:6 wd:100%">' . "\n";
    echo '<!--  fc:WRAPPER -->' . "\n";
    echo '<div class="fx:c-rev md)fx:r fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
    echo '<!--  fi:1/STATS -->' . "\n";
    echo '<div class="bg:content fxd:2 fxe:6 wd:100% md)wd:15%">' . "\n";
    echo '<!--  ct:TEXT -->' . "\n";
    echo '<div class="bg:bas-050 cnr:arch-small mar:bottom+1 pad:+0.5 dsp:block ht:min10">' . "\n";
    echo '<table class="bdr:space+0.25 bdr:hidden cols:auto">' . "\n";
    echo '<tr class="led:wide"><td class="aln:text-center bg:bas-200 cnr:arch-small wd:2"><i class="fas fa-user-edit"></i></td><td><a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . get_the_author_meta("display_name") . '</a></td></tr>' . "\n";
    echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas-200 cnr:arch-small wd:2"><i class="fas fa-calendar-alt"></i></td><td>' . get_the_modified_time(get_option('date_format')) . '</td></tr>' . "\n";
    if (cnt_tags() > 0)
    {
        echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas-200 cnr:arch-small wd:2"><i class="fas fa-tags"></i></td><td>' . dsp_tags() . '</td></tr>' . "\n";
    }
    if (comments_open() || get_comments_number() > 0)
    {
        if (get_comments_number() == 0)
        {
            echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas-200 cnr:arch-small wd:2"><i class="fas fa-comments"></i></td><td><a href="' . get_permalink() . '#respond">Comments</a></td></tr>' . "\n";
        }
        else
        {
            echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas-200 cnr:arch-small wd:2"><i class="fas fa-comments"></i></td><td><a href="' . get_permalink() . '#respond">(' . get_comments_number() . ') Comments</a></td></tr>' . "\n";
        }
    }
    else
    {
        echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas-200 cnr:arch-small wd:2"><i class="fas fa-comment-slash"></i></td><td>Comments</td></tr>' . "\n";
    }
    echo '</table>' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /ct:TEXT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:1/STATS -->' . "\n";
    echo '<!--  fi:2/CONTENT -->' . "\n";
    echo '<div class="bg:content fxd:3 fxe:6 wd:100% md)wd:80% md)mar:left+0.25">' . "\n";
    echo '<!--  ct:TEXT -->' . "\n";
    echo '<div class="aln:text-left dsp:block md)pad:left+0.5 ht:min10">' . "\n";

    /*
    ***
        * yoast breadcrumbs plugin
    ***
    */
    if ( !is_front_page() && !is_home() )
    {
        if (function_exists('yoast_breadcrumb'))
        {
            yoast_breadcrumb('<div id="breadcrumbs" class="seo-pst-breadcrumbs">', '</div>');
        }
    }

    /*
    ***
        * function: the_content
        * dsc: post content
        * ver: 200322
        * fnt: Display the post content.
        * ref: developer.wordpress.org/reference/functions/the_content/
    ***
    */
    the_content();
    echo '</div>' . "\n";
    echo '<!-- /ct:TEXT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!--  fi:2/CONTENT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:WRAPPER -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:3/BLOG -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:LAYOUT -->' . "\n";

    /*
    ***
        * comments
    ***
    */
    if (comments_open() || get_comments_number() > 0)
    {
        echo '<h2 id="respond">Comments</h2>' . "\n";
        if (!post_password_required())
        {
            get_template_part('template-parts/content', 'comments');
        }
    }

    /*
    ***
        * page footer
    ***
    */
    /*: edit :*/
    if (get_edit_post_link())
    {
        $footer_items = dsp_edit(get_edit_post_link()) . '|';
        echo '<!--  ct:FOOTER -->' . "\n";
        echo '<footer class="pad:left+1 fnt:size-smaller prt[dsp:none]">' . "\n";
        echo xidipity_metalinks(explode('|', $footer_items)) . "\n";
        echo '</footer>' . "\n";
        echo '<!-- /ct:FOOTER -->' . "\n";
    }
}
else
{
    get_template_part('template-parts/content', 'none');
}
echo '</article>' . "\n";
echo '<!--  ct:ARTICLE -->' . "\n";
echo '</section>' . "\n";
echo '<!-- /fi:1/SECTION -->' . "\n";

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
echo '<!-- /fc:MAIN -->' . "\n";
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
 * EOF:     single.php
 * Build:   200322
 *
 */
?>
