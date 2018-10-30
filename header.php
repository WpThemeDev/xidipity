<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
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
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'xidipity' ); ?></a>
	<header id="masthead" class="site-header">
	  <div class="header-banner">
			<?php
			// the_custom_logo();
      $custom_logo_id = get_theme_mod( 'custom_logo' );
      $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
      if ( has_custom_logo() ) {
              echo '<a href="' . esc_url( home_url( '/' ) ) . '" rel="home"><img class="header-logo" src="' . esc_url( $logo[0] ) . '" alt="' . get_bloginfo( 'name' ) . '"></a>';
      }
			if ( is_front_page() && is_home() ) : ?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php else : ?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php
			endif;
			$description = get_bloginfo( 'description', 'display' );
			if ( $description || is_customize_preview() ) : ?>
				<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
			<?php
			endif; ?>
	  </div>
	  <!-- .header-banner -->
    <?php
    $page = get_page_by_path( 'table-of-contents' );
    // Result
    if ( $page ) {
      echo '<div class="toc-menu">';
      if ( $page->ID == get_queried_object_id() ) {
        echo '<a class="toc-btn" href="' . home_url('/') . '"><i class="fas fa-bars"></i></a>';
      } else {
        echo '<a class="toc-btn" href="' . get_permalink( $page->ID ) . '"><i class="fas fa-bars"></i></a>';
      }
      echo '</div>';
    } else {
		  echo '<nav id="site-navigation" class="main-navigation">';
		  echo '<input type="checkbox" id="menu-toggle">';
		  echo '<label for="menu-toggle"><i class="fas fa-bars"></i></label>';
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'menu_id'        => 'primary-menu',
			) );
    	echo '</nav><!-- #site-navigation -->';
    }
    wp_reset_postdata();
    ?>
	 	</header><!-- #masthead -->
	<div id="content" class="site-content">
