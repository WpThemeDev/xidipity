<?php
/*
 *        file: x-archive.php
 *       build: 90321.1
 * description: Template for displaying posts assigned to archives category.
 *      github: https://github.com/WpThemeDev/xidipity
 *    comments:
 *
 * @package WordPress
 * @subpackage Xidipity
 * @since 5.0.0
 *
 ***/ ?>
<?php get_header(); ?>

<div class="content-area-container">
  <div id="primary" class="content-area <?php xidipity_layout_class( 'content' ); ?>">
    <header class="page-header">
        <?php
            the_archive_title( '<h1 class="page-title">', '</h1>' );
            echo '<div class="taxonomy-description">' . category_description( get_cat_ID( strtolower(get_the_archive_title()) ) ) . '</div>';
        ?>
    </header>
    <main id="main" class="site-main">
    <?php
      $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; // page #
      $sp  = count( get_option( 'sticky_posts' ) ); // # sticky posts
      $ppp = get_option( 'posts_per_page' ); // posts per page
      $pfp  = $ppp - $sp; // posts front page
      $cat = array(get_category_by_slug('archives')); // include categories
      $xcat = array(get_category_by_slug('sticky'));  // xclude categories
      $cnt_posts = wp_count_posts();
      $tot_posts = $cnt_posts->publish;
      $max_pg = $tot_posts / $ppp;
      
      if ( $paged == 1 ) {
        $args = array (
          'showposts' => $pfp,
          'category_name' => 'archives',
          'category__not_in' => array($xcat[0]->term_id),
          'paged' => $paged
        );
      } else {
        $args = array (
          'showposts' => $ppp,
          'category_name' => 'archives',
          'category__not_in' => array($xcat[0]->term_id),
          'paged' => $paged
        );
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
