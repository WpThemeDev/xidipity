<?php
/*
*        file: content-none.php
*       build: 90331.1
* description: The template for displaying search forms.
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<section class="no-results not-found">' . "\n";
echo '<header class="page-header">' . "\n";
echo '<h1 class="page-title"><i class="fas fa-search-minus fg-pri-300 pr-4"></i>Search Results</h1>' . "\n";
echo '</header>' . "\n";
echo '<div class="page-content">' . "\n";

if (is_home() && current_user_can('publish_posts')) {
    echo '<p>' . printf(wp_kses(__('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'xidipity') , array(
        'a' => array(
        'href' => array()
        )
    )) , esc_url(admin_url('post-new.php'))) . '</p>' . "\n";
}
elseif (is_search()) {
    $message = wpautop('Sorry, but nothing matched your search terms.') . "\n";
    echo __($message) . "\n";
}
else {
    $message = wpautop('The item selected was not found. If it is a category the most likely reasons are:<ul><li>no posts are assigned to it,</li><li>it is assigned to a media item.</li></ul>') . "\n";
    echo __($message) . "\n";
}

echo '</div>' . "\n";
echo '</section>' . "\n";
/*  # eof
content-none.php
-------------------------------------*/
?>
