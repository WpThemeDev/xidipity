<?php
/**
 * The template for displaying category pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package xidipity
 */

get_header(); ?>

  <div class="content-area-container">
    <section id="primary" class="content-area <?php xidipity_layout_class( 'content' ); ?>">
      <main id="main" class="site-main">

      <?php if ( have_posts() ) : ?>

        <header class="page-header">
          <?php
            the_archive_title( '<h1 class="page-title">', '</h1>' );
            the_archive_description( '<div class="taxonomy-description">', '</div>' );
          ?>
        </header><!-- .page-header -->

        <div id="post-wrapper" class="post-wrapper post-wrapper-archive">
        <?php /* Start the Loop */ ?>
        <?php while ( have_posts() ) : the_post(); ?>

          <?php
            /* Include the Post-Format-specific template for the content.
             * If you want to override this in a child theme, then include a file
             * called content-___.php (where ___ is the Post Format name) and that will be used instead.
             */
            get_template_part( 'template-parts/content', get_post_format() );
          ?>

        <?php endwhile; ?>
        </div><!-- .post-wrapper -->

        <?php
        $ppp = get_option( 'posts_per_page' ); // posts per page
        $cnt_posts = wp_count_posts();
        $tot_posts = $cnt_posts->publish;
        $max_pg = $tot_posts / $ppp;

        xidipity_the_posts_pagination( $max_pg ); ?>

      <?php else : ?>

      <?php get_template_part( 'template-parts/content', 'none' ); ?>

      <?php endif; ?>

      </main><!-- #main -->
    </section><!-- #primary -->

    <?php get_sidebar(); ?>

  </div><!-- .container -->

<?php get_footer(); ?>
