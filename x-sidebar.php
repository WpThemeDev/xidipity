<?php
/**
 * Template Name: No Sidebar
 *
 * The template for displaying pages without the sidebar
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Xidipity
 * @since Xidipity 1.0
 */

get_header(); ?>
    <div class="content-area-container">
			<div id="primary" class="content-area no-sidebar">
				<main id="main" class="site-main">
					<div id="post-wrapper" class="post-wrapper post-wrapper-single">
					<?php /* Start the Loop */ ?>
					<?php while ( have_posts() ) : the_post(); ?>
						<?php get_template_part( 'template-parts/content', 'single' ); ?>
						<?php
						if ( '' !== get_the_author_meta( 'description' ) ) {
							get_template_part( 'template-parts/biography' );
						}
						?>
						<?php xidipity_the_post_navigation(); ?>
						<?php
							// If comments are open or we have at least one comment, load up the comment template
							if ( comments_open() || '0' != get_comments_number() ) :
								comments_template();
							endif;
						?>
					<?php endwhile; // end of the loop. ?>
					</div><!-- .post-wrapper -->
				</main><!-- #main -->
			</div><!-- # column wrapper -->
		</div><!-- .row -->
<?php get_footer(); ?>
