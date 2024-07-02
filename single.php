<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package base_theme
 */

get_header();
?>

<div class="main-content home">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php the_content(); ?>
    <?php endwhile; else: ?>
    <p class="text-center"><?php _e('Sorry, there are no posts.'); ?></p>
    <?php endif; ?>
    
</div>


<?php
get_footer();
