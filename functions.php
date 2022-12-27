<?php 
    require_once( get_template_directory() . '/components/@components-engine/embed_module.php');
    //require_once( get_template_directory() . '/inc/php/create_projetos_post_type.php');

    register_nav_menus(
        array(
        'topmenu' => __( 'Top Menu' ),
        'footermenu' => __( 'Footer Menu' )
        )
    );
?>