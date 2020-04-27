<?php
/*
 * WordPress Xidipity Theme PHP File
 *
 * Template Name: Post Catalog
 *
 * File Name:       post-catalog.php
 * Function:        display list of of posts
 * Build:           200429
 * GitHub:          https://github.com/WpThemeDev/xidipity/
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package         xidipity
 * @author          John Baer
 * @copyright       2019-2020 John Baer
 * @license         GPL-3.0-or-later
 * @version         1.0
 * @since           1.0
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
echo '<!--  file:post-catalog.php -->' . "\n";
/***
*/

/*
***
    * add default content
***
*/
$content = get_the_content();
if (empty($content))
{
    $dft_content = array(
        'ID'           => get_the_ID(),
        'post_content' => '<h3><i class="fas fa-bookmark fg:sec-dark">&#8203;</i><span class="pad:left+0.5">Post Catalog Template</span></h3><p>&nbsp;</p><p>The purpose of this template is to display in table format a list of all blog posts. The editor content is not exposed to the web but provides an opportunity to note or document the use of the template. To hide the page from the public, set the <a href="https://wordpress.org/support/article/content-visibility/">visibility to private</a>.</p>'
    );
    wp_update_post( $dft_content );
}

/*
***
    * setup post query
***
*/
$qry_prms = array(
    'orderby' => 'date',
    'order'   => 'DESC',
    'perm' => 'readable',
    'post_type' => 'post',
    'post_status' => 'any',
    'posts_per_page' => -1
);
$wp_data = new WP_Query($qry_prms);

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
echo '<!--  ct:ARTICLE -->' . "\n";
echo '<article class="box:shadow bg:content fg:content dsp:block pad:hrz+1 ht:min10 wd:100%">' . "\n";

if ($wp_data->have_posts())
{
    /*
    ***
        * page title
    ***
    */
    echo '<!--  ct:HEADER -->' . "\n";
    echo '<header class="mar:top+1 wd:100%">' . "\n";
    the_title('<div class="pg:title">', '</div>');
    echo '<div class="bg:bas-300 ln mar:bottom+0.75">&#8203;</div>' . "\n";
    echo '</header>' . "\n";
    echo '<!-- /ct:HEADER -->' . "\n";

    echo '<!--  ct:BODY -->' . "\n";
    echo '<div class="scr:auto">' . "\n";
    echo '<table class="cols:fixed bdr:space+0.25">' . "\n";
    echo '<thead class="fnt:size-small sm)fnt:size-medium">' . "\n";
    echo '<tr>' . "\n";
    echo '<th class="aln:text-left grd:tint-bright wd:4">ID</th>' . "\n";
    echo '<th class="aln:text-left grd:tint-bright wd:19">Title</th>' . "\n";
    echo '<th class="aln:text-left grd:tint-bright wd:3">Status</th>' . "\n";
    echo '<th class="aln:text-left grd:tint-bright wd:9">Date</th>' . "\n";
    echo '<th class="aln:text-left grd:tint-bright wd:19">Author</th>' . "\n";
    echo '</tr>' . "\n";
    echo '</thead>' . "\n";
    echo '<tbody class="fnt:family-mono fnt:size-x-small sm)fnt:size-small tr:stripe-tint-bright">' . "\n";

    /*
    ***
        * display posts
    ***
    */
    while ($wp_data->have_posts())
    {
        $wp_data->the_post();
        echo '<tr>' . "\n";
        echo '<td>' . get_the_ID() . '</td>' . "\n";
        echo '<td>' . get_the_title() . '</td>' . "\n";
        echo '<td>' . get_post_status() . '</td>' . "\n";
        echo '<td>' . get_the_date(get_option('date_format')) . '</td>' . "\n";
        echo '<td>' . get_the_author_meta('display_name') . '</td>' . "\n";
        echo '</tr>' . "\n";
    }

    echo '</tbody>' . "\n";
    echo '</table>' . "\n";
    echo '<div class="aln:text-center fg:wcag-grey6 fnt:size-x-small sm)fnt:size-small md)dsp:none wd:100%"><i class="fas fa-caret-left"></i><span class="pad:hrz+0.5">scroll</span><i class="fas fa-caret-right"></i></div>' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /ct:BODY -->' . "\n";

    echo '<div class="bg:bas-300 ln mar:vrt+0.25">&#8203;</div>' . "\n";

    /*
    ***
        * page footer
    ***
    */
    $footer_items = '';
    /*: edit :*/
    if (get_edit_post_link())
    {
        $footer_items .= dsp_edit('<a href="' . get_edit_post_link()) . '">Edit</a>' . '|';
    }
    /*: modified date :*/
    $footer_items .= dsp_date(get_the_modified_time(get_option('date_format'))) . '|';
    echo '<!--  ct:FOOTER -->' . "\n";
    echo '<footer class="pad:left+0.5 fnt:size-smaller prt[dsp:none]">' . "\n";
    echo xidipity_metalinks(explode('|', $footer_items)) . "\n";
    echo '</footer>' . "\n";
    echo '<!-- /ct:FOOTER -->' . "\n";
}

echo '</article>' . "\n";
echo '<!--  ct:ARTICLE -->' . "\n";
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
 * EOF:     post-catalog.php
 * Build:   200429
 *
 */
?>
