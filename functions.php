<?php 
    require_once( get_template_directory() . '/components/@components-engine/embed_module.php');
    require_once( get_template_directory() . '/inc/blocks/theme-blocks.php');

    register_nav_menus(
        array(
        'topmenu' => __( 'Top Menu' ),
        'footermenu' => __( 'Footer Menu' )
        )
    );

    // enqueue admin-style.css for the admin area
    function admin_style() {
        wp_enqueue_style('admin-styles', get_template_directory_uri().'/admin-style.css');
    }
    add_action('admin_enqueue_scripts', 'admin_style', 99);     

?>