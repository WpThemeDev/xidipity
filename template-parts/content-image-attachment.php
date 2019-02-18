<?php
/**
 * Template part for displaying single image attachment.
 *
 * build: 90218.1
 *
 * @package xidipity
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
  <div class="post-content-wrapper post-content-wrapper-single">
    <div class="entry-data-wrapper entry-data-wrapper-single">

      <?php
      // Retrieve attachment metadata.
      $metadata = wp_get_attachment_metadata();
      ?>

      <div class="entry-header-wrapper">
        <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
        <header class="entry-header">
          
          <p>&nbsp;</p>
          <!-- 90115.1 Template: annotation / image -->
          <div class="clearfix" style="background-color: var(--bg-bas-100); border-left: solid 4px var(--bg-bas-400); padding: 10px; width: 100%;">
              <div style="float: left; padding-right: 8px;"><i class="far fa-object-group" style="color: #c2185b; font-size: 1.2rem;">&#x200B;</i></div>
              <div style="display: inline; font-size: 0.85rem;"><?php echo esc_html($metadata['file']); ?><br />
              Dimensions: <?php echo esc_html( $metadata['width'] ); ?> &times; <?php echo esc_html( $metadata['height'] ); ?> <span style="text-transform: lowercase;">px</span>
              </div>
          </div>
          <!-- End Template -->
          <p>&nbsp;</p>
        </header><!-- .entry-header -->
      </div><!-- .entry-header-wrapper -->

      <div class="entry-content">
        <div class="entry-attachment">
          <div class="attachment">
            <?php xidipity_the_attached_image(); ?>
          </div><!-- .attachment -->

          <?php if ( has_excerpt() ) : ?>
          <div class="entry-caption">
            <?php the_excerpt(); ?>
          </div><!-- .entry-caption -->
          <?php endif; ?>
        </div><!-- .entry-attachment -->

        <?php the_content(); ?>

        <?php
          wp_link_pages( array(
            'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'xidipity' ) . '</span>',
            'after'       => '</div>',
            'link_before' => '<span>',
            'link_after'  => '</span>',
          ) );
        ?>
      </div><!-- .entry-content -->

      <?php if ( '' != get_edit_post_link() ) : ?>
      <footer class="entry-meta entry-meta-footer">
        <?php edit_post_link( esc_html__( 'Edit', 'xidipity' ), '<span class="edit-link">', '</span>' ); ?>
      </footer><!-- .entry-meta -->
      <?php endif; ?>

    </div><!-- .entry-data-wrapper -->
  </div><!-- .post-content-wrapper -->
</article><!-- #post-## -->
