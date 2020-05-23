<?php
/**
    * WordPress Xidipity Theme
    * The template for displaying blog post
    *
    * ###:  single.php
    * bld:  24200520
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

if ($wp_query->have_posts())
{
    the_post();
    echo '<!--  fc:LAYOUT -->' . "\n";
    echo '<div class="fx:rw fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
    echo '<!--  fi:1/TITLE -->' . "\n";
    echo '<div class="fxd:2 fxe:6 mar:top+1 wd:100%">' . "\n";
    echo '<!--  fc:WRAPPER -->' . "\n";
    echo '<div class="fx:r fxa:1 fxc:1">' . "\n";
    echo '<!--  ct:TEXT -->' . "\n";
    echo '<div class="aln:text-left dsp:block">' . "\n";
    the_title('<div class="pg:title">', '</div>');
    echo '</div>' . "\n";
    echo '<!-- /ct:TEXT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:WRAPPER -->' . "\n";
    echo '<div class="bg:bas+2 ln mar:bottom+1">&#8203;</div>' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:1/TITLE -->' . "\n";
    echo '<!--  fi:2/BLOG -->' . "\n";
    echo '<div class="fxd:2 fxe:6 wd:100%">' . "\n";
    echo '<!--  fc:WRAPPER -->' . "\n";
    echo '<div class="fx:c-rev md)fx:r fxa:1 fxb:1 fxc:1 wd:100%">' . "\n";
    echo '<!--  fi:1/STATS -->' . "\n";
    echo '<div class="bg:content fxd:2 fxe:6 wd:100% md)wd:15%">' . "\n";
    echo '<!--  ct:TEXT -->' . "\n";
    echo '<div class="bg:bas+5 cnr:arch-small mar:bottom+1 pad:+0.5 dsp:block ht:min10">' . "\n";
    echo '<table class="bdr:space+0.25 bdr:hidden cols:auto">' . "\n";
    
    $first_cat_link = xidipity_first_category();
    $first_cat_name = xidipity_first_category('name');
    $categories = get_the_category();
    echo '<tr class="led:wide"><td class="aln:text-center bg:bas+3 cnr:arch-small wd:2">' . dsp_cat_icon($first_cat) . '</td><td><p>' . $first_cat_link . '</p>' . "\n";
    if ( count( $categories ) > 1 ) 
    {
        echo '<ul class="fnt:size-smaller">' . "\n";
        foreach( $categories as $category ) 
        {
            if ($category->name !== $first_cat_name)
            {
                echo '<li><a href="' . esc_url( get_category_link( $category->term_id ) ) . '" alt="' . get_bloginfo('name') .  ' '  . $category->name . '">' . esc_html( $category->name ) . '</a></li>' . "\n";        
            }
        }
        echo '</ul>' . "\n";        
    }
    echo '</td></tr>' . "\n";
    echo '<tr class="led:wide"><td class="aln:text-center bg:bas+3 cnr:arch-small wd:2">' . xidipity_icon_author() . '</td><td><a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . get_the_author_meta("display_name") . '</a></td></tr>' . "\n";
    echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas+3 cnr:arch-small wd:2">' . dsp_date() . '</td><td>' . xidipity_date('pub') . '</td></tr>' . "\n";
    if (cnt_tags() > 0)
    {
        echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas+3 cnr:arch-small wd:2">' . xidipity_icon_tag() . '</td><td>' . dsp_tags() . '</td></tr>' . "\n";
    }
    if (comments_open() || get_comments_number() > 0)
    {
        if (get_comments_number() == 0)
        {
            echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas+3 cnr:arch-small wd:2">' . xidipity_icon_comment() . '</td><td><a href="' . get_permalink() . '#respond">Comments</a></td></tr>' . "\n";
        }
        else
        {
            echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas+3 cnr:arch-small wd:2">' . xidipity_icon_comments() . '</td><td><a href="' . get_permalink() . '#respond">(' . get_comments_number() . ') Comments</a></td></tr>' . "\n";
        }
    }
    else
    {
        echo '<tr class="fnt:size-smaller led:wide"><td class="aln:text-center bg:bas+3 cnr:arch-small wd:2">' .  xidipity_icon_x_comments() . '</td><td>Comments</td></tr>' . "\n";
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
        * function: the_content wrapper
        * descript: display page content
        * ref: developer.wordpress.org/reference/functions/the_content/
    ***
    */
    dsp_content();

    echo '</div>' . "\n";
    echo '<!-- /ct:TEXT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!--  fi:2/CONTENT -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:WRAPPER -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fi:2/BLOG -->' . "\n";
    echo '</div>' . "\n";
    echo '<!-- /fc:LAYOUT -->' . "\n";

    /*
    ***
        * comments
    ***
    */
    if (comments_open() || get_comments_number() > 0)
    {
        echo '<div class="bg:bas+2 ln mar:vrt+0.5">&#8203;</div>' . "\n";
        //echo '<h2 id="respond">Comments</h2>' . "\n";
        if (!post_password_required())
        {
            get_template_part('template-parts/content', 'comments');
        }
    }

    echo '<div class="bg:bas+2 ln mar:vrt+0.25">&#8203;</div>' . "\n";

    /*
    ***
        * page footer
    ***
    */
    $footer_items = '';
    /*: edit :*/
    if (get_edit_post_link())
    {
        $footer_items .= dsp_edit(get_edit_post_link()) . '|';
    }
    if (xidipity_date('mod') !== xidipity_date('pub'))
    {
        /*: modified date :*/
        $footer_items .= dsp_modified(xidipity_date('mod')) . '|';        
    }
    else
    {
        /*: current date :*/
        $footer_items .= dsp_today(xidipity_date()) . '|';        
    }
    echo '<!--  ct:FOOTER -->' . "\n";
    echo '<footer class="pad:left+0.5 fnt:size-smaller prt[dsp:none]">' . "\n";
    echo xidipity_metalinks(explode('|', $footer_items)) . "\n";
    echo '</footer>' . "\n";
    echo '<!-- /ct:FOOTER -->' . "\n";
}
else
{
    get_template_part('template-parts/content', 'none');
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
 * EOF: single.php / 24200520
 */
?>
