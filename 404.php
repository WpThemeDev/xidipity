<?php
/**
 * Template for displaying 404 image.
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
  <div id="page" class="pl-4">
  	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'xidipity' ); ?></a>
  	<header id="masthead" class="site-header">
  	  <div class="entry-header-wrapper">
		    <p class="text-5xl"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
  			<p class="site-description text-left pt-3"><?php bloginfo( 'description' ); ?></p>
  	  </div>
   	</header><!-- #masthead -->
  	<div id="content" class="site-content">
  	  <h1>🤔&nbsp;404 Error</h1>
  	  <h6>Unable to locate requested page.</h6>
  	</div><!-- .post-content-wrapper -->
  </div>
</body>