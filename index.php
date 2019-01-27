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
 * build: 90127.1
 *
 * @package xidipity
 */

get_header(); ?>

    <div class="content-area-container">
      <div id="primary" class="content-area <?php xidipity_layout_class( 'content' ); ?>">
        <main id="main" class="site-main">
        <?php
          // current pagination number
          $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

          // sticky posts
          $posts_sticky  = get_option( 'sticky_posts' );
          $sticky_cnt  = count( $posts_sticky );

          // posts published
          $posts_cnt = wp_count_posts();
          $posts_published = $posts_cnt->publish;

          // posts archived
          $args_archive = array('category_name' => 'archive');
          $query_archive = new WP_Query( $args_archive );
          $posts_archive = $query_archive->post_count;

          // posts featured
          $args_featured = array('category_name' => 'post-featured');
          $query_featured = new WP_Query( $args_featured );
          $posts_featured = $query_featured->post_count;

          // posts / page
          $posts_page = get_option( 'posts_per_page' );

          // posts front page (not used)
          $posts_fp = $posts_page - $sticky_cnt;

          // number of pages (fractions to next whole number)
          $pages_max = ceil(($posts_published - $posts_archive - $sticky_cnt) / $posts_page);

          // post category slugs to exclude from blog page
          $cat = array( get_category_by_slug('archive'), get_category_by_slug('post-featured'), get_category_by_slug('post-hidden') );
          $cat0 = $cat[0]->term_id;
          $cat1 = $cat[1]->term_id;
          $cat2 = $cat[2]->term_id;
          
          if (is_null($cat0)) {$cat0 = '';} else {$cat0 = '-' . $cat0;}
          if (is_null($cat1)) {$cat1 = '';} else {$cat1 = '-' . $cat1;}
          if (is_null($cat2)) {$cat2 = '';} else {$cat2 = '-' . $cat2;}

          if ($paged == 1 ) {
            
              if ( $sticky_cnt > 0 ) {
            
                $args = array (
                  'post__in' => $posts_sticky,
                  'posts_per_page' => $sticky_cnt,
                  'cat' => array($cat0,$cat1,$cat2),
                  'paged' => $paged
                );
  
                $wp_query = new WP_Query( $args );
                if ( $wp_query->have_posts() ) : ?>
                  <p>&nbsp;</p>
                  <!-- 90117.1 Template: miscellaneous / speciality / header / h2 -->
                  <div class="clearfix blg-pg-hd-wrapper">
                      <div class="blg-pg-hd-icon"><i class="fas fa-comment-alt">​</i></div>
                      <div class="blg-pg-hd-text">featured posts</div>
                  </div>
                  <!-- End Template -->
                  <p>&nbsp;</p>
                  <div id="post-wrapper" class="post-wrapper post-wrapper-archive">
                  <?php
                    while ( $wp_query->have_posts() ) : $wp_query->the_post();
                      get_template_part( 'template-parts/content', get_post_format() );
                    endwhile; ?>
                  </div><!-- .post-wrapper -->
                  <?php
                  xidipity_the_posts_pagination( $pages_max );
                else :
                  get_template_part( 'template-parts/content', 'none' );
                endif;

              }

              $args = array (
                'post__not_in' => $posts_sticky,
                'posts_per_page' => $posts_page,
                'cat' => array($cat0,$cat1,$cat2),
                'paged' => $paged
              );
              

              $wp_query = new WP_Query( $args );
              if ( $wp_query->have_posts() ) : ?>
                <p>&nbsp;</p>
                <!-- 90117.1 Template: miscellaneous / speciality / header / h2 -->
                <div class="clearfix blg-pg-hd-wrapper">
                    <div class="blg-pg-hd-icon"><i class="fas fa-book-reader">​</i></div>
                    <div class="blg-pg-hd-text">recent posts</div>
                </div>
                <!-- End Template -->
                <p>&nbsp;</p>
                <div id="post-wrapper" class="post-wrapper post-wrapper-archive">
                <?php
                  while ( $wp_query->have_posts() ) : $wp_query->the_post();
                    get_template_part( 'template-parts/content', get_post_format() );
                  endwhile; ?>
                </div><!-- .post-wrapper -->
                <?php
                xidipity_the_posts_pagination( $pages_max );
              else :
                get_template_part( 'template-parts/content', 'none' );
              endif;

          } else {

              $args = array (
                'post__not_in' => $posts_sticky,
                'posts_per_page' => $posts_page,
                'cat' => array($cat0,$cat1,$cat2),
                'paged' => $paged
              );

              $wp_query = new WP_Query( $args );
              if ( $wp_query->have_posts() ) : ?>
                <p>&nbsp;</p>
                <!-- 90117.1 Template: miscellaneous / speciality / header / h2 -->
                <div class="clearfix blg-pg-hd-wrapper">
                    <div class="blg-pg-hd-icon"><i class="fas fa-book-reader">​</i></div>
                    <div class="blg-pg-hd-text">recent posts</div>
                </div>
                <!-- End Template -->
                <p>&nbsp;</p>
                <div id="post-wrapper" class="post-wrapper post-wrapper-archive">
                <?php
                  while ( $wp_query->have_posts() ) : $wp_query->the_post();
                    get_template_part( 'template-parts/content', get_post_format() );
                  endwhile; ?>
                </div><!-- .post-wrapper -->
                <?php
                xidipity_the_posts_pagination( $pages_max );
              else :
                get_template_part( 'template-parts/content', 'none' );
              endif;
          }
        
        ?>
        </main><!-- #main -->
      </div><!-- #primary -->
      <?php get_sidebar(); ?>
    </div><!-- # column wrapper -->

<?php
// Restore original Post Data
wp_reset_postdata();
get_footer(); ?>
