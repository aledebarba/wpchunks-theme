<?php 

$blocked_cpt_domain = "custom";
$blocked_cpt_name   = "wpc-cpt-projeto";

add_action( 'init', function(){
    register_post_type( 'projeto', array(
        'menu_icon'     => 'dashicons-welcome-widgets-menus',
        'show_in_rest'  => true,
        'supports'      => array('title', 'editor', 'excerpt', 'author', 'thumbnail'),
        'rewrite'       => array('slug' => 'projetos'),
        'has_archive'   => true,
        'public'        => true,
        'show_in_menu'  => true,
        'show_ui'       => true,
        'menu_position' => null,
        'labels'        => array(
            'name'              => 'Projetos',
            'singular_name'     => 'Projeto',
            'menu_name'         => 'Projetos',
            'name_admin_bar'    => 'Projeto',
            'add_new'           => 'Adicionar Novo Projeto',
            'add_new_item'      => 'Adicionar Novo Projeto',
            'new_item'          => 'Novo Projeto',
            'edit_item'         => 'Editar Projeto',
            'view_item'         => 'Ver Projeto',
            'all_items'         => 'Todos os Projetos',
            'search_items'      => 'Procurar Projetos',
            'not_found'         => 'Nenhum Projeto encontrado.',
            'not_found_in_trash'=> 'Nenhum Projeto encontrado como item excluído.'
        ),
        'template' => array(
            array( "$blocked_cpt_domain/$blocked_cpt_name", array(
                'lock' => array(
                    'move' => true,
                    'remove' => true,
                )
            ) )
                ),
        'template_lock' => 'all'  
      ));
}, 10, 3);

?>