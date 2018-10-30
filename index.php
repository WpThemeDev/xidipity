<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package xidipity
 */

get_header(); ?>

    <div class="content-area-container">
      <div id="primary" class="content-area <?php xidipity_layout_class( 'content' ); ?>">
        <main id="main" class="site-main">
        <?php
          $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; // page #
          $sp  = count( get_option( 'sticky_posts' ) ); // # sticky posts
          $ppp = get_option( 'posts_per_page' ); // posts per page
          $pfp  = $ppp - $sp; // posts front page
          $cat = array(get_category_by_slug('archive'),get_category_by_slug('sticky')); // xclude categories
          $cnt_posts = wp_count_posts();
          $tot_posts = $cnt_posts->publish;
          $max_pg = $tot_posts / $ppp;
          
//          echo 'Page # ' . $paged;
//          echo ' | Sticky Posts: ' . $sp;
//          echo ' | Posts / page: ' . $ppp;
//          echo ' | Total posts: ' . $tot_posts;
          
          if ($paged == 1 ) {
            if ( empty($cat[0]) ) {
              $args = array (
                'showposts' => $pfp,
                'paged' => $paged
              );
            } else {
              $args = array (
                'showposts' => $pfp,
                'category__not_in' => array($cat[0]->term_id,$cat[1]->term_id),
                'paged' => $paged
              );
            }
          } else {
            if ( empty($cat[0]) ) {
              $args = array (
                'showposts' => $ppp,
                'paged' => $paged
              );
            } else {
              $args = array (
                'showposts' => $ppp,
                'category__not_in' => array($cat[0]->term_id,$cat[1]->term_id),
                'paged' => $paged
              );
            }
          }

          $wp_query = new WP_Query( $args );
          if ( $wp_query->have_posts() ) : ?>
            <div id="post-wrapper" class="post-wrapper post-wrapper-archive">
            <?php
              while ( $wp_query->have_posts() ) : $wp_query->the_post();
                get_template_part( 'template-parts/content', get_post_format() );
              endwhile; ?>
            </div><!-- .post-wrapper -->
            <?php
            xidipity_the_posts_pagination( $max_pg );
          else :
            get_template_part( 'template-parts/content', 'none' );
          endif; ?>
        </main><!-- #main -->
      </div><!-- #primary -->
      <?php get_sidebar(); ?>
    </div><!-- # column wrapper -->

<?php
// Restore original Post Data
wp_reset_postdata();
get_footer(); ?>
