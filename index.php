<?php
/*
*        file: index.php
*       build: 90708.1
* description: Template for displaying posts.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
/* display page header     ------------
-- */
get_header();

// current pagination number

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

// sticky posts

$posts_sticky = get_option('sticky_posts');
$sticky_cnt = count($posts_sticky);

// posts published

$posts_cnt = wp_count_posts();
$posts_published = $posts_cnt->publish;

// posts archived

$args_archive = array(
    'category_name' => 'archive'
);
$query_archive = new WP_Query($args_archive);
$posts_archive = $query_archive->post_count;

// posts featured

$args_featured = array(
    'category_name' => 'post-featured'
);
$query_featured = new WP_Query($args_featured);
$posts_featured = $query_featured->post_count;

// posts spotlight

$args_spotlight = array(
    'category_name' => 'post-spotlight'
);
$query_spotlight = new WP_Query($args_spotlight);
$posts_spotlight = $query_spotlight->post_count;

// posts / page

$posts_page = get_option('posts_per_page');

// posts front page (not used)

$posts_fp = $posts_page - $sticky_cnt;

// number of pages (fractions to next whole number)

$pages_max = ceil(($posts_published - ($posts_archive + $posts_featured + $posts_spotlight + $sticky_cnt)) / $posts_page);

// post category slugs to exclude from blog page

$cat = array(
    get_category_by_slug('archive') ,
    get_category_by_slug('post-featured') ,
    get_category_by_slug('post-spotlight')
);
$cat0 = $cat[0]->term_id;
$cat1 = $cat[1]->term_id;
$cat2 = $cat[2]->term_id;

if (is_null($cat0)) {
    $cat0 = '';
}
else {
    $cat0 = '-' . $cat0;
}

if (is_null($cat1)) {
    $cat1 = '';
}
else {
    $cat1 = '-' . $cat1;
}

if (is_null($cat2)) {
    $cat2 = '';
}
else {
    $cat2 = '-' . $cat2;
}

echo '<!-- xwpt:90708.1/index.php           -->' . "\n";
//echo '<div class="content-area-container">' . "\n";
//echo '<div id="primary" class="' . rtrim('content-area ' . xidipity_layout_class('content')) . '">' . "\n";
echo '<main id="xwtFxRowItem" class="xwtFxRowItemOpts">' . "\n";
echo '<div id="xwtFxRowItems" class="xpost-wrapper xpost-wrapper-archive">' . "\n";
if ($paged == 1) {
    if ($sticky_cnt > 0) {
        $args = array(
            'post__in' => $posts_sticky,
            'posts_per_page' => $sticky_cnt,
            'cat' => array(
                $cat0,
                $cat1,
                $cat2
            ) ,
            'paged' => $paged
        );
        $wp_query = new WP_Query($args);
        if ($wp_query->have_posts()) {
            /* featured blog header    ------------
            values are pulled from blog-var.css
            -- */
            echo '<div class="xwtAddShadow xwtAddPadContent">' . "\n";
            echo '<h2><span class="xwtFeaturedTitle"></span></h2>' . "\n";
            // echo '<div class="taxonomy-description"><p class="xwtFeaturedDescrip"></p></div>' . "\n";
            echo '<div class="xwtFeaturedDescrip"></div>' . "\n";
            echo '</div>' . "\n";
            echo '<div id="post-wrapper" class="post-wrapper post-wrapper-archive">' . "\n";
            while ($wp_query->have_posts()) {
                $wp_query->the_post();
                get_template_part('template-parts/content', get_post_format());
            }
            echo '</div>' . "\n";
            xidipity_the_posts_pagination($pages_max);
        } else {
            get_template_part('template-parts/content', 'none');
        }
    }

    $args = array(
        'post__not_in' => $posts_sticky,
        'posts_per_page' => $posts_page,
        'cat' => array(
            $cat0,
            $cat1,
            $cat2
        ) ,
        'paged' => $paged
    );
    $wp_query = new WP_Query($args);
    if ($wp_query->have_posts()) {
        /* recent blog header      ------------
        values are pulled from blog-var.css
        -- */
        // echo '<div class="blg-pg-recent-wrapper">' . "\n";
        // echo '<h2><span class="blg-pg-recent-title"></span></h2>' . "\n";
        // echo '<div class="taxonomy-description"><p class="blg-pg-recent-descrip"></p></div>' . "\n";
        // echo '</div>' . "\n";
        // echo '<div id="post-wrapper" class="post-wrapper post-wrapper-archive">' . "\n";
        while ($wp_query->have_posts()) {
            $wp_query->the_post();
            get_template_part('template-parts/content', get_post_format());
        }
        // echo '</div>' . "\n";
        xidipity_the_posts_pagination($pages_max);
    } else {
        get_template_part('template-parts/content', 'none');
    }
}
else {
    $args = array(
        'post__not_in' => $posts_sticky,
        'posts_per_page' => $posts_page,
        'cat' => array(
            $cat0,
            $cat1,
            $cat2
        ) ,
        'paged' => $paged
    );
    $wp_query = new WP_Query($args);
    if ($wp_query->have_posts()) {
        /* recent blog header      ------------
        values are pulled from blog-var.css
        -- */
        echo '<div class="xwtAddShadow xwtAddPadContent">' . "\n";
        echo '<h2><span class="xwtRecentTitle"></span></h2>' . "\n";
        // echo '<div class="taxonomy-description"><p class="blg-pg-recent-descrip"></p></div>' . "\n";
            echo '<div class="xwtRecentDescrip"></div>' . "\n";
    echo '</div>' . "\n";
        echo '<div id="post-wrapper" class="post-wrapper post-wrapper-archive">' . "\n";
        while ($wp_query->have_posts()) {
            $wp_query->the_post();
            get_template_part('template-parts/content', get_post_format());
        }
        echo '</div>' . "\n";
        xidipity_the_posts_pagination($pages_max);
    } else {
        get_template_part('template-parts/content', 'none');
    }
}

echo '</div>' . "\n";
echo '</main>' . "\n";
// echo '</div>' . "\n";
echo '<!-- /xwpt:90708.1/index.php          -->' . "\n";
/* display sidebar         ------------
-- */
get_sidebar();
echo '</div>' . "\n";
/* reset post data         ------------
-- */
wp_reset_postdata();
/* display footer          ------------
-- */
get_footer();
/*  # eof
    index.php
-------------------------------------*/
?>
