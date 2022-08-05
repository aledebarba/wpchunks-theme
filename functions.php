<?php 
    require_once( get_template_directory() . '/chunks/engine/embed_module.php');

    register_nav_menus(
        array(
        'topmenu' => __( 'Top Menu' ),
        'footermenu' => __( 'Footer Menu' )
        )
    );
?>