<?php 

function create_projetos_post_type() {
  $labels = array(
    'name' => _x('Projetos', 'hys-text-domain'),
    'singular_name' => _x('Projeto', 'hys-text-domain'),
    'add_new' => _x('Adicionar Novo', 'hys-text-domain'),
    'add_new_item' => _x('Adicionar Novo Projeto', 'hys-text-domain'),
    'edit_item' => _x('Editar Projeto', 'hys-text-domain'),
    'new_item' => _x('Novo Projeto', 'hys-text-domain'),
    'view_item' => _x('Ver Projeto', 'hys-text-domain'),
    'view_items' => _x('Ver Projetos', 'hys-text-domain'),
    'search_items' => _x('Pesquisar Projetos', 'hys-text-domain'),
    'not_found' => _x('Nenhum projeto encontrado', 'hys-text-domain'),
    'not_found_in_trash' => _x('Nenhum projeto encontrado na lixeira', 'hys-text-domain'),
    'parent_item_colon' => _x('Projeto Pai:', 'hys-text-domain'),
    'all_items' => _x('Todos os Projetos', 'hys-text-domain'),
    'archives' => _x('Arquivos de Projetos', 'hys-text-domain'),
    'attributes' => _x('Atributos do Projeto', 'hys-text-domain'),
    'insert_into_item' => _x('Inserir no Projeto', 'hys-text-domain'),
    'uploaded_to_this_item' => _x('Enviado para este projeto', 'hys-text-domain'),
    'featured_image' => _x('Imagem destacada', 'hys-text-domain'),
    'set_featured_image' => _x('Definir imagem destacada', 'hys-text-domain'),
    'remove_featured_image' => _x('Remover imagem destacada', 'hys-text-domain'),
    'use_featured_image' => _x('Usar como imagem destacada', 'hys-text-domain'),
    'menu_name' => _x('Projetos', 'hys-text-domain'),
    'filter_items_list' => _x('Filtrar lista de projetos', 'hys-text-domain'),
    'items_list_navigation' => _x('Navegação da lista de projetos', 'hys-text-domain'),
    'items_list' => _x('Lista de projetos', 'hys-text-domain'),
    'item_published' => _x('Projeto publicado', 'hys-text-domain'),
    'item_published_privately' => _x('Projeto publicado privadamente', 'hys-text-domain'),
    'item_reverted_to_draft' => _x('Projeto revertido para rascunho', 'hys-text-domain'),
    'item_scheduled' => _x('Projeto agendado', 'hys-text-domain'),
    'item_updated' => _x('Projeto atualizado', 'hys-text-domain')
  );


  $args = array(
      'label' => __( 'Projeto', 'hys-text-domain' ),
      'description' => __( 'Informações essenciais dos projetos mostrados no website.', 'hys-text-domain' ),
      'labels' => $labels,
      'menu_icon' => 'dashicons-admin-settings',
      'supports' => array('title', 'excerpt', 'thumbnail', 'page-attributes'),
      'taxonomies' => array(),
      'hierarchical' => false,
      'exclude_from_search' => false,
      'publicly_queryable' => true,
      'has_archive' => true,
      'public' => true,
      'show_ui' => true,
      'show_in_menu' => true,
      'show_in_admin_bar' => true,
      'can_export' => true,
      'show_in_nav_menus' => true,
      'menu_position' => 5,
      'capability_type' => 'post',
      'show_in_rest' => true,'rest_base' => '/v1/projetos',
      'rest_controller_class' => 'Projeto',
      'query_var' => 'is'
  );
  register_post_type( 'projeto', $args );
}

add_action('init', 'create_projetos_post_type');

