<?php
/**
 * WordPress Xidipity Theme
 * The template for displaying content footer
 *
 * ###:  content-footer.php
 * bld:  28200715
 * src:  github.com/WpThemeDev/xidipity/
 * (C)   2019-2020 John Baer
 *
 */
/*: current user :*/
$current_user = xty_user();
$data_item = array();
if (!empty($current_user))
{
	$data_item['ico_1'] = '<i class="icon:user_solid"></i>';
	$data_item['txt_1'] = __($current_user);
	$data_item['raw_1'] = '<div class="txt:bas pad:hrz+0.5">&#65372;</div>';
}
/*: today's date :*/
$data_item['ico_2'] = '<i class="icon:calendar_today_outline"></i>';
$data_item['txt_2'] = xty_date();
echo '<cmt name="begin">TEMPLATE-PARTS/CONTENT-FOOTER/PHP</cmt>' . "\n";
echo '<div class="mar:vrt+0.25">' . "\n";
echo '<div class="bkg:bas+2 ln"></div>' . "\n";
echo xty_dsp_meta($data_item) . "\n";
echo '</div>' . "\n";
echo '<cmt name="end">TEMPLATE-PARTS/CONTENT-FOOTER/PHP</cmt>' . "\n";
/*
 * EOF: content-footer.php / 27200615
*/
?>
