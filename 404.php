<?php 
/** 
* Template Name: 404 Page
*
* @package base_theme
**/ 
wp_head();
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<div class="error-page">
	<div class="container text-center">
		<div class="content">
			<img class="pb-5" src="<?php echo get_home_url(); ?>/wp-content/uploads/2022/06/login-logo.png" alt="">
			<h2 class="title-1">404 Error</h2>
			<h2 class="title-2">Oops!. That page can&rsquo;t be found</h2>
			<h4 class="title-3 pb-4">It looks like nothing was found at this location.</h4>
			<div class="button-wrapper">
					<a class="btn btn-type-1" href="<?php echo get_home_url(); ?>" title="Go to Home">Go to Home</a>
			</div>
		</div>
	</div>
</div>