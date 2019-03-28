<?php
/*
*        file: biography.php
*       build: 90327.1
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
echo '<div class="post-navigation">' . "\n";
echo '<div class="content-area-container">' . "\n";
echo '<div id="primary" class="content-area ' . xidipity_layout_class('content') . '">' . "\n";
echo '<main id="main" class="site-main">' . "\n";
echo '<div id="post-wrapper" class="post-wrapper post-wrapper-single">' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '<!-- 90224.1 Template: miscellaneous / speciality / header / h4 -->' . "\n";
echo '<div style="display: table; font-family: var(--font-sans); width: 100%;">' . "\n";
$avatar = esc_url(get_avatar_url(get_the_author_meta('user_email') , 64));
echo '<div style="background-color: var(--sys-content-bg-color); border-right: solid 3px var(--fg-sec-100); display: table-cell; padding: 8px 10px 0 10px; width: 84px; vertical-align: middle;"><img src="' . $avatar . '" class="rounded-full" alt="avatar" /></div>' . "\n";
echo '<div style="background-color: var(--sys-content-bg-color); color: var(--fg-bas-900); display: table-cell; padding-left: 15px; width: calc(100% - 84px); vertical-align: top;"><h5>About: ' . get_the_author_meta('nickname') . '</h5><p class="text-sm">' . get_the_author_meta('description') . '</p></div>' . "\n";
echo '</div>' . "\n";
echo '<!-- End Template -->' . "\n";
echo '<p>&nbsp;</p>' . "\n";
echo '</div>' . "\n";
echo '</main>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '</div>' . "\n";
echo '<p>&nbsp;</p>' . "\n";
/*  # eof
biography.php
-------------------------------------*/
?>
