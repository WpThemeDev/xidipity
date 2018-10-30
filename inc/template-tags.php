<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package xidipity
 */

if ( ! function_exists( 'xidipity_the_posts_pagination' ) ) :
/**
 * Display navigation to next/previous set of posts when applicable.
 *
 * @see https://codex.wordpress.org/Function_Reference/the_posts_pagination
 * @return void
 */
function xidipity_the_posts_pagination( $max_pg ) {

	// Previous/next posts navigation @since 4.1.0
	the_posts_pagination( array (
	  'mid_size'           => 1,
	  'total'              => $max_pg,
	  'prev_text'          => '<span class="screen-reader-text">' . esc_html__( 'Previous Page', 'xidipity' ) . '</span>',
	  'next_text'          => '<span class="screen-reader-text">' . esc_html__( 'Next Page', 'xidipity' ) . '</span>',
	 // 'before_page_number' => '<span class="meta-nav screen-reader-text">' . esc_html__( 'Page', 'xidipity' ) . ' </span>',
	) );

}
endif;

if ( ! function_exists( 'xidipity_the_post_navigation' ) ) :
/**
 * Previous/next post navigation.
 *
 * @see https://developer.wordpress.org/reference/functions/the_post_navigation/
 * @return void
 */
function xidipity_the_post_navigation() {

	// Previous/next post navigation @since 4.1.0.
	the_post_navigation( array (
		'next_text' => '<span class="meta-nav">' . esc_html__( 'Next', 'xidipity' ) . '</span> ' . '<span class="post-title">%title</span>',
		'prev_text' => '<span class="meta-nav">' . esc_html__( 'Prev', 'xidipity' ) . '</span> ' . '<span class="post-title">%title</span>',
	) );

}
endif;

if ( ! function_exists( 'xidipity_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function xidipity_posted_on() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_attr( get_the_modified_date( 'c' ) ),
		esc_html( get_the_modified_date() )
	);

	$posted_on = sprintf( '<span class="screen-reader-text">%1$s</span><a href="%2$s" rel="bookmark"> %3$s</a>',
		esc_html_x( 'Posted on', 'post date', 'xidipity' ),
		esc_url( get_permalink() ),
		$time_string
	);

	// Posted On HTML
	$html = '<span class="posted-on">' . $posted_on . '</span>'; // // WPCS: XSS OK.

	/**
	 * Filters the Posted On HTML.
	 *
	 * @param string $html Posted On HTML.
	 */
	$html = apply_filters( 'xidipity_posted_on_html', $html );

	echo $html; // WPCS: XSS OK.

}
endif;

if ( ! function_exists( 'xidipity_posted_by' ) ) :
/**
 * Prints author.
 */
function xidipity_posted_by() {

	// Global Post
	global $post;

	// We need to get author meta data from both inside/outside the loop.
	$post_author_id = get_post_field( 'post_author', $post->ID );

	// Byline
	$byline = sprintf(
		esc_html_x( 'by %s', 'post author', 'xidipity' ),
		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID', $post_author_id ) ) ) . '">' . esc_html( get_the_author_meta( 'display_name', $post_author_id ) ) . '</a></span>'
	);

	// Posted By HTML
	$html = '<span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

	/**
	 * Filters the Posted By HTML.
	 *
	 * @param string $html Posted By HTML.
	 */
	$html = apply_filters( 'xidipity_posted_by_html', $html );

	echo $html; // WPCS: XSS OK.

}
endif;

if ( ! function_exists( 'xidipity_post_first_category' ) ) :
/**
 * Prints first category for the current post.
 *
 * @return void
*/
function xidipity_post_first_category() {

  // SHOW YOAST PRIMARY CATEGORY, OR FIRST CATEGORY
  $category = get_the_category();
  $useCatLink = true;
  // If post has a category assigned.
  if ($category) {
      $category_display = '';
      $category_link = '';
      if (class_exists('WPSEO_Primary_Term')) {
          // Show the post's 'Primary' category, if this Yoast feature is available, & one is set
          $wpseo_primary_term = new WPSEO_Primary_Term('category', get_the_id());
          $wpseo_primary_term = $wpseo_primary_term->get_primary_term();
          $term = get_term($wpseo_primary_term);
          if (is_wp_error($term)) {
              // Default to first category (not Yoast) if an error is returned
              $category_display = $category[0]->name;
              $category_link = get_category_link($category[0]->term_id);
          } else {
              // Yoast Primary category
              $category_display = $term->name;
              $category_link = get_category_link($term->term_id);
          }
      } else {
          // Default, display the first category in WP's list of assigned categories
          $category_display = $category[0]->name;
          $category_link = get_category_link($category[0]->term_id);
      }
      // Display category
      if (!empty($category_display)) {
          if ($useCatLink == true && !empty($category_link)) {
              echo '<span class="post-category">';
              echo '<a href="' . $category_link . '">' . htmlspecialchars($category_display) . '</a>';
              echo '</span>';
          } else {
              echo '<span class="post-category">' . htmlspecialchars($category_display) . '</span>';
          }
      }
  }
}
endif;

if ( ! function_exists( 'xidipity_entry_footer' ) ) :
/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function xidipity_entry_footer() {

	// Hide category and tag text for pages.
	if ( 'post' === get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( esc_html__( ', ', 'xidipity' ) );
		if ( $categories_list && xidipity_categorized_blog() ) {
			printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'xidipity' ) . '</span>', $categories_list ); // WPCS: XSS OK.
		}

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', esc_html__( ', ', 'xidipity' ) );
		if ( $tags_list ) {
			printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'xidipity' ) . '</span>', $tags_list ); // WPCS: XSS OK.
		}
	}

	edit_post_link(
		sprintf(
			/* translators: %s: Name of current post */
			esc_html__( 'Edit %s', 'xidipity' ),
			the_title( '<span class="screen-reader-text">"', '"</span>', false )
		),
		'<span class="edit-link">',
		'</span>'
	);

}
endif;

/**
 * Returns true if a blog has more than 1 category.
 *
 * @return bool
 */
function xidipity_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'xidipity_categories' ) ) ) {
		// Create an array of all the categories that are attached to posts.
		$all_the_cool_cats = get_categories( array (
			'fields'     => 'ids',
			'hide_empty' => 1,

			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'xidipity_categories', $all_the_cool_cats );
	}

	if ( $all_the_cool_cats > 1 ) {
		// This blog has more than 1 category so xidipity_categorized_blog should return true.
		return true;
	} else {
		// This blog has only 1 category so xidipity_categorized_blog should return false.
		return false;
	}
}

/**
 * Flush out the transients used in xidipity_categorized_blog.
 */
function xidipity_category_transient_flusher() {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	// Like, beat it. Dig?
	delete_transient( 'xidipity_categories' );
}
add_action( 'edit_category', 'xidipity_category_transient_flusher' );
add_action( 'save_post',     'xidipity_category_transient_flusher' );

if ( ! function_exists( 'xidipity_post_thumbnail' ) ) :
/**
 * Display an optional post thumbnail.
 *
 * Wraps the post thumbnail in an anchor element.
 *
 * @return void
*/
function xidipity_post_thumbnail() {

	// Post Thumbnail HTML
	$html = '';

	// Get Post Thumbnail
	$post_thumbnail = get_the_post_thumbnail( null, 'xidipity-featured', array( 'class' => 'img-featured img-responsive' ) );

	// Validation
	if ( ! empty( $post_thumbnail ) ) {

		// Post Thumbnail HTML
		$html = sprintf( '<div class="entry-image-wrapper entry-image-wrapper-archive"><figure class="post-thumbnail post-thumbnail-archive"><a href="%1$s">%2$s</a></figure></div>',
			esc_attr( esc_url( get_the_permalink() ) ),
			$post_thumbnail
		);
	}

	/**
	 * Filters the Post Thumbnail HTML.
	 *
	 * @param string $html Post Thumbnail HTML.
	 */
	$html = apply_filters( 'xidipity_post_thumbnail_html', $html );

	// Print HTML
	if ( ! empty( $html ) ) {
		echo $html; // WPCS: XSS OK.
	}

}
endif;

if ( ! function_exists( 'xidipity_the_custom_logo' ) ) :
/**
 * Displays the optional custom logo.
 *
 * Does nothing if the custom logo is not available.
 */
function xidipity_the_custom_logo() {
	if ( function_exists( 'the_custom_logo' ) ) {
		the_custom_logo();
	}
}
endif;

/**
 * A helper conditional function.
 * Theme has Excerpt or Not
 *
 * https://codex.wordpress.org/Function_Reference/get_the_excerpt
 * This function must be used within The Loop.
 *
 * @return bool
 */
function xidipity_has_excerpt() {

	// Post Excerpt
	$post_excerpt = get_the_excerpt();

	/**
	 * Filters the Post has excerpt.
	 *
	 * @param bool
	 */
	return apply_filters( 'xidipity_has_excerpt', ! empty ( $post_excerpt ) );

}

/**
 * A helper conditional function.
 * Theme has Sidebar or Not
 *
 * @return bool
 */
function xidipity_has_sidebar() {

	/**
	 * Filters the theme has active sidebar.
	 *
	 * @param bool
	 */
	return apply_filters( 'xidipity_has_sidebar', is_active_sidebar( 'sidebar-1' ) );

}

/**
 * Display the layout classes.
 *
 * @param string $section - Name of the section to retrieve the classes
 * @return void
 */
function xidipity_layout_class( $section = 'content' ) {

	// Sidebar Position
	$sidebar_position = xidipity_mod( 'xidipity_sidebar_position' );
	if ( ! xidipity_has_sidebar() ) {
		$sidebar_position = 'no';
	}

	// Layout Skeleton
	$layout_skeleton = array(
		'content' => array(
			'content' => '',
		),

		'content-sidebar' => array(
			'content' => '',
			'sidebar' => 'sidebar-widget-area',
		),

		'sidebar-content' => array(
			'content' => '',
			'sidebar' => 'sidebar-widget-area',
		),

		'sidebar-content-rtl' => array(
			'content' => '',
			'sidebar' => 'sidebar-widget-area',
		),
	);

	// Layout Classes
	switch( $sidebar_position ) {

		case 'no':
		$layout_classes = $layout_skeleton['content']['content'];
		break;

		case 'left':
			$layout_classes = ( 'sidebar' === $section )? $layout_skeleton['sidebar-content']['sidebar'] : $layout_skeleton['sidebar-content']['content'];
			if ( is_rtl() ) {
				$layout_classes = ( 'sidebar' === $section )? $layout_skeleton['sidebar-content-rtl']['sidebar'] : $layout_skeleton['sidebar-content-rtl']['content'];
			}
		break;

		case 'right':
		default:
		$layout_classes = ( 'sidebar' === $section )? $layout_skeleton['content-sidebar']['sidebar'] : $layout_skeleton['content-sidebar']['content'];

	}

	echo esc_attr( $layout_classes );

}
