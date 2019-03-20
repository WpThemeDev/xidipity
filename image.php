<?php
/**
 * The template for displaying image attachments
 *
 * build: 90319.1
 *
 * @package xidipity
 */
?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
  <div class="container">
    <div class="row">
      <section id="primary" class="content-area <?php xidipity_layout_class( 'content' ); ?>">
        <main id="main" class="site-main">
          <div id="post-wrapper" class="post-wrapper post-wrapper-single">
            <?php /* Start the Loop */ ?>
            <?php while ( have_posts() ) : the_post(); ?>

              <?php get_template_part( 'template-parts/content', 'image-attachment' ); ?>

              <nav id="image-navigation" class="navigation image-navigation">
                <div class="nav-links">
                  <div class="nav-previous">
                    <div class="meta-nav"><?php previous_image_link('thumbnail'); ?></div>
                    <div class="fg-bas-600">previous</div>
                  </div>
                  <div class="nav-next">
                    <div class="meta-nav"><?php next_image_link('thumbnail'); ?></div>
                    <div class="fg-bas-600">next</div>
                  </div>
                </div>
              </nav>

              <?php
                // If comments are open or we have at least one comment, load up the comment template
                if ( comments_open() || '0' != get_comments_number() ) :
                  comments_template();
                endif;
              ?>
            <?php endwhile; // end of the loop. ?>
          </div><!-- .post-wrapper -->
        </main><!-- #main -->
      </section><!-- #primary -->
    </div><!-- .row -->
  <!-- .container -->
  <?php get_footer(); ?>
