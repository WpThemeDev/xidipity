<?php
/*
*        file: biography.php
*       build: 90712.1
* description: The template part for displaying an Author biography
*      github: https://github.com/WpThemeDev/xidipity
*    comments:
*   reference: https://developer.wordpress.org/reference/functions/get_the_author_meta/
*
* @package WordPress
* @subpackage Xidipity
* @since 5.0.0
*
***/
echo '<!-- xwpt:90712.1/biography.php       -->' . "\n";
//echo '<div class="post-navigation">' . "\n";
echo '<div id="xwtFxRowFullItem" class="xwtAddShadow">' . "\n";
//echo '<div class="content-area-container">' . "\n";
echo '<div class="xwtAddPadPost">' . "\n";
//echo '<div id="primary" class="content-area ' . xidipity_layout_class('content') . '">' . "\n";
echo '<main id="main" class="site-main">' . "\n";
// '<div id="post-wrapper" class="post-wrapper post-wrapper-single">' . "\n";
//echo '<p>&nbsp;</p>' . "\n";
$avatar = esc_url(get_avatar_url(get_the_author_meta('user_email') , 64));
echo '<div class="table w-full">' . "\n";
echo '<div class="table-row">' . "\n";
echo '<div class="table-cell text-left pr-3 xwtAvatar">' . "\n";
echo '<img class="h-auto w-full" src="' . $avatar . '" alt="Xidipity Theme Avatar" />' . "\n";
echo '</div>' . "\n";
echo '<div class="table-cell align-top">' . "\n";
echo '<h5>About: ' . get_the_author_meta('nickname') . '</h5>' . "\n";
echo '<p class="text-sm">' . get_the_author_meta('description') . '</p>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";//echo '<p>&nbsp;</p>' . "\n";
//echo '</div>' . "\n";
echo '</main>' . "\n";
//echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
//echo '<p>&nbsp;</p>' . "\n";
echo '<!-- /xwpt:90712.1/biography.php      -->' . "\n";
/*  # eof
biography.php
-------------------------------------*/
?>
