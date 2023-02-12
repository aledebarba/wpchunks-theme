<?php 

function addHysteriaCustomPostTypes() {

    // Projeto Post Type: holds the projects main informations to be displayed anywhere in website
    register_post_type( 'projeto', array(
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'author', 'thumbnail'),
        'rewrite' => array('slug' => 'projetos'),
        'has_archive' => true,
        'public' => true,
        'show_in_menu' => true,
        'show_ui' => true,
        'menu_position' => null,
        'labels' => array(
            'name'           => 'Projetos',
            'singular_name'  => 'Projeto',
            'menu_name'      => 'Projetos',
            'name_admin_bar' => 'Projeto',
            'add_new'        => 'Adicionar Novo Projeto',
            'add_new_item'   => 'Adicionar Novo Projeto',
            'new_item'       => 'Novo Projeto',
            'edit_item'      => 'Editar Projeto',
            'view_item'      => 'Ver Projeto',
            'all_items'      => 'Todos os Projetos',
            'search_items'   => 'Procurar Projetos',
            'not_found'      => 'Nenhum Projeto encontrado.',
            'not_found_in_trash' => 'Nenhum Projeto encontrado como item excluído.'
        ),
        'menu_icon' => 'dashicons-welcome-widgets-menus',
        'template' => array(
            array( 'wpchunks/wpc-cpt-projeto', array(
                'lock' => array(
                    'move' => true,
                    'remove' => true,
                )
            ) )
                ),
        'template_lock' => 'all'  
      ));

      // create a rest api endpoint for the custom post type
        add_action( 'rest_api_init', function () {
            register_rest_route('wpc/v3', '/projeto', [
                'methods' => 'GET',
                'callback' => 'wpc_projeto_callback'
            ]);
        });
        // create the callback function
        function wpc_projeto_callback() {
            $args = array(
                'post_type' => 'projeto',
                'posts_per_page' => -1,
                'orderby' => 'title',
                'order' => 'ASC'
            );
            $query = new WP_Query($args);
            $posts = $query->posts;
            $response = array();
            foreach ($posts as $post) {
                $response[] = array(
                    'id' => $post->ID,
                    'title' => $post->post_title,
                    'data' => parse_blocks($post->post_content)[0]['attrs']
                );
            };
            return $response;
        }

                    

      // Colaboradora Post Type: holds the information about the people who are part of the projects
        register_post_type( 'colaboradora', array(
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'excerpt', 'author', 'thumbnail'),
            'rewrite' => array('slug' => 'colaboradoras'),
            'has_archive' => true,
            'public' => true,
            'show_in_menu' => true,
            'show_ui' => true,
            'menu_position' => null,
            'labels' => array(
                'name'           => 'Colaboradoras',
                'singular_name'  => 'Colaboradora',
                'menu_name'      => 'Colaboradoras',
                'name_admin_bar' => 'Colaboradora',
                'add_new'        => 'Adicionar Nova Colaboradora',
                'add_new_item'   => 'Adicionar Nova Colaboradora',
                'new_item'       => 'Nova Colaboradora',
                'edit_item'      => 'Editar Colaboradora',
                'view_item'      => 'Ver Colaboradora',
                'all_items'      => 'Todas as Colaboradoras',
                'search_items'   => 'Procurar Colaboradoras',
                'not_found'      => 'Nenhuma Colaboradora encontrada.',
                'not_found_in_trash' => 'Nenhuma Colaboradora encontrada como item excluído.'
            ),
            'menu_icon' => 'dashicons-groups',
            'template' => array(
                array( 'wpchunks/wpc-cpt-colaboradora', array(
                    'lock' => array(
                        'move' => true,
                        'remove' => true,
                    )
                ) )
                    ),
            'template_lock' => 'all'  
        ));

    // Marcas Post Type: holds the information about the brands that are part of the projects
    register_post_type( 'brand', array(
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'author', 'thumbnail'),
        'rewrite' => array('slug' => 'marcas'),
        'has_archive' => true,
        'public' => true,
        'show_in_menu' => true,
        'show_ui' => true,
        'menu_position' => null,
        'menu_icon' => 'dashicons-store',
        'labels' => array(
            'name'           => 'Marcas',
            'singular_name'  => 'Marca',
            'menu_name'      => 'Marcas',
            'name_admin_bar' => 'Marca',
            'add_new'        => 'Adicionar Nova Marca',
            'add_new_item'   => 'Adicionar Nova Marca',
            'new_item'       => 'Nova Marca',
            'edit_item'      => 'Editar Marca',
            'view_item'      => 'Ver Marca',
            'all_items'      => 'Todas as Marcas',
            'search_items'   => 'Procurar Marcas',
            'not_found'      => 'Nenhuma Marca encontrada.',
            'not_found_in_trash' => 'Nenhuma Marca encontrada como item excluído.'
        ),
        'template' => array(
            array( 'wpchunks/wpc-cpt-brands', array(
                'lock' => array(
                    'move' => true,
                    'remove' => true,
                )
            ) )
                ),
        'template_lock' => 'all'        
    ));

    // social-media Post Type: holds the information about our social media accounts or websites links to be displayed anywhere in website
    register_post_type( 'social-media', array(
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'author', 'thumbnail'),
        'rewrite' => array('slug' => 'social-media'),
        'has_archive' => true,
        'public' => true,
        'show_in_menu' => true,
        'show_ui' => true,
        'menu_position' => null,
        'menu_icon' => 'dashicons-share',
        'labels' => array(
            'name'           => 'Social Media',
            'singular_name'  => 'Social Media',
            'menu_name'      => 'Social Media',
            'name_admin_bar' => 'Social Media',
            'add_new'        => 'Adicionar Novo Social Media',
            'add_new_item'   => 'Adicionar Novo Social Media',
            'new_item'       => 'Novo Social Media',
            'edit_item'      => 'Editar Social Media',
            'view_item'      => 'Ver Social Media',
            'all_items'      => 'Todos os Social Media',
            'search_items'   => 'Procurar Social Media',
            'not_found'      => 'Nenhum Social Media encontrado.',
            'not_found_in_trash' => 'Nenhum Social Media encontrado como item excluído.'
        ),
        'template' => array(
            array( 'wpchunks/wpc-cpt-social', array(
                'lock' => array(
                    'move' => true,
                    'remove' => true,
                )
            ) )
                ),
        'template_lock' => 'all'  
    ));
}

add_action( 'init', 'addHysteriaCustomPostTypes' );

?>