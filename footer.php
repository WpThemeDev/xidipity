<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package xidipity
 */
?>
	</div><!-- #content -->
	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<div class="site-info-inside">
				<div class="credits">
					<?php do_action( 'xidipity_credits' ); ?>
				</div><!-- .credits -->
			</div><!-- .site-info-inside -->
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page .site-wrapper -->
<?php wp_footer(); ?>
</body>
</html>
