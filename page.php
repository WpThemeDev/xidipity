<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package xidipity
 */

get_header(); ?>

    <div class="content-area-container">
			<div id="primary" class="content-area <?php xidipity_layout_class( 'content' ); ?>">
				<main id="main" class="site-main">
					<div id="post-wrapper" class="post-wrapper post-wrapper-single">
          <?php
          //  $wp_query is global
				  if ( $wp_query->have_posts() ) {
					  while ( $wp_query->have_posts() ) : the_post();
						  get_template_part( 'template-parts/content', 'page' );
							// If comments are open or we have at least one comment, load up the comment template
							if ( comments_open() || '0' != get_comments_number() ) :
								comments_template();
							endif;
					  endwhile; // end of the loop.
				  }
					?>
					</div><!-- .post-wrapper -->
				</main><!-- #main -->
			</div><!-- #primary -->
			<?php get_sidebar(); ?>
		</div><!-- # column wrapper -->

<?php
// Restore original Post Data
wp_reset_postdata();
get_footer(); ?>
