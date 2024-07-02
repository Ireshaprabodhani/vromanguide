<?php
/**
 * Enqueue scripts and styles.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 * @package base_theme
 */

 //Enqueue theme styles
 function base_theme_style(){

     wp_register_style('theme', get_template_directory_uri() . '/css/theme.css', array(), false, 'all');
     wp_enqueue_style('theme');

     wp_register_style('remixicon', get_template_directory_uri() . './node_modules/remixicon/fonts/remixicon.css', array(), false, 'all');
     wp_enqueue_style('remixicon');

     wp_register_style('animatecss', get_template_directory_uri() . '/assets/animate-css/animate.min.css', array(), false, 'all');
     wp_enqueue_style('animatecss');

     wp_register_style('slickcdntheme', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css', array(), false, 'all');
     wp_enqueue_style('slickcdntheme');

     wp_register_style('slickcdn', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css', array(), false, 'all');
     wp_enqueue_style('slickcdn');

     wp_register_style('remixiconcdn', 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css', array(), false, 'all');
     wp_enqueue_style('remixiconcdn');

     wp_register_style('datatablecdn', 'https://cdn.datatables.net/v/dt/dt-1.13.1/datatables.min.css', array(), false, 'all');
     wp_enqueue_style('datatablecdn');

     wp_register_style('select2css', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css', array(), false, 'all');
     wp_enqueue_style('select2css');

     wp_register_style('lightboxcss', 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.css', array(), false, 'all');
     wp_enqueue_style('lightboxcss');

 }
 add_action('wp_enqueue_scripts','base_theme_style');


//Enqueue theme scripts
 function base_theme_scripts(){

    wp_enqueue_script('jquery');

     wp_register_script('theme', get_template_directory_uri() . '/js/theme.js','jquery',false,true);
     wp_enqueue_script('theme');

    //  wp_register_script('boostrapbundle', get_template_directory_uri() . '/js/bootstrap.bundle.min.js','jquery',false,true);
    //  wp_enqueue_script('boostrapbundle');

     wp_register_script('slickcdnjs', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js','jquery',false,true);
     wp_enqueue_script('slickcdnjs');


     wp_register_script('datatablecdnjs', 'https://cdn.datatables.net/v/dt/dt-1.13.1/datatables.min.js','jquery',false,true);
     wp_enqueue_script('datatablecdnjs');

     wp_register_script('select2cdnjs', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js','jquery',false,true);
     wp_enqueue_script('select2cdnjs');

     wp_register_script('lightboxjs', 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js','jquery',false,true);
     wp_enqueue_script('lightboxjs');

     wp_register_script('isotopejs', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js','jquery',false,true);
     wp_enqueue_script('isotopejs');

     wp_register_script('chartjs', 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.umd.js','jquery',false,true);
     wp_enqueue_script('chartjs');

     wp_register_script('sweetalert2', 'https://cdn.jsdelivr.net/npm/sweetalert2@11','jquery',false,true);
     wp_enqueue_script('sweetalert2');
    //  wp_register_script('boostrap', get_template_directory_uri() . '/js/bootstrap.min.js','jquery',false,true);
    //  wp_enqueue_script('boostrap');
 }
 add_action('wp_enqueue_scripts', 'base_theme_scripts');