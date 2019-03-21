<?php
/*
 *        file: 404.php
 *       build: 90321.1
 * description: Template for displaying 404 image.
 *      github: https://github.com/WpThemeDev/xidipity
 *    comments:
 *
 * @package WordPress
 * @subpackage Xidipity
 * @since 5.0.0
 *
 ***/ ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset=" <?php bloginfo( 'charset' ); ?> ">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div id="page" class="pl-4">
        <a class="skip-link screen-reader-text" href="#content">
            <?php esc_html_e( 'Skip to content', 'xidipity' ); ?>
        </a>
        <header id="masthead" class="site-header">
            <div class="entry-header-wrapper">
                <p class="site-title">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                        <?php bloginfo( 'name' ); ?>
                    </a>
                </p>
                <p class="site-description mb-4">
                    <?php bloginfo( 'description' ); ?>
                </p>
            </div>
        </header>
        <div id="content" class="site-content">
            <h1><i class="fas fa-search-minus fg-pri-300 pr-4"></i><?php _e( '404 Error', 'xidipity' ); ?></h1>
            <h5 class="fg-bas-700"><?php _e( 'Unable to locate requested page.', 'xidipity' ); ?></h5>
        </div>
    </div>
</body>
