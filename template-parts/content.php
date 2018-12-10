<?php
/**
 * The default template for displaying content
 *
 * @package xidipity
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="post-content-wrapper post-content-wrapper-archive">
		<?php xidipity_post_thumbnail(); ?>
		<div class="entry-data-wrapper entry-data-wrapper-archive">
			<div class="entry-header-wrapper entry-header-wrapper-archive">
				<?php if ( 'post' == get_post_type() ) : // For Posts ?>
				<div class="entry-meta entry-meta-header-before">
					<ul class="hz-list">
						<li><?php xidipity_post_first_category(); ?></li>
						<?php if ( is_sticky() && is_home() && ! is_paged() ) : ?>
						<li>
							<span class="post-label post-label-featured">
								<i class="is-sticky material-icons" style="vertical-align: sub; font-size: 120%;">star_border</i><span class="screen-reader-text"><?php esc_html_e( 'Featured', 'xidipity' ); ?></span>
							</span>
						</li>
						<?php endif; ?>
					</ul>
				</div><!-- .entry-meta -->
				<?php endif; ?>
				<header class="entry-header">
					<?php the_title( '<h1 class="entry-title"><a href="' . esc_url( apply_filters( 'xidipity_the_permalink', get_permalink() ) ) . '" rel="bookmark">', '</a></h1>' ); ?>
				</header><!-- .entry-header -->
				<?php if ( 'post' == get_post_type() ) : // For Posts ?>
				<div class="entry-meta entry-meta-header-after">
					<ul class="hz-list">
						<li><?php xidipity_posted_on(); ?></li>
						<li><?php xidipity_posted_by(); ?></li>
					</ul>
				</div><!-- .entry-meta -->
				<?php endif; ?>
			</div><!-- .entry-header-wrapper -->
			<?php if ( xidipity_has_excerpt() ) : ?>
			<div class="entry-summary">
				<?php the_excerpt(); ?>
			</div><!-- .entry-summary -->
			<?php endif; ?>
      <table class="rm-tbl" border="1">
        <tbody>
          <tr>
            <td style="color: var(--fg-pri-300); width: 50px; padding: 5px 0 5px 0; text-align: center; font-size: 1.2rem;"><i class="far fa-comment-alt"></i></td>
            <td style="width: 100%; vertical-align: middle; font-size: 0.875rem; padding-left: 10px;"><a href="<?php echo esc_url( get_permalink() ); ?>"><?php esc_html_e( 'Read more&nbsp;&#8230;', 'xidipity' ); ?></a></td>
          </tr>
        </tbody>
      </table><!-- .more-link-table -->
		</div><!-- .entry-data-wrapper -->
	</div><!-- .post-content-wrapper -->
</article><!-- #post-## -->
