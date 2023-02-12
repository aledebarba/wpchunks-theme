<?php 
    require_once( get_template_directory() . '/inc/php/@components-engine/embed_module.php');
    require_once( get_template_directory() . '/inc/blocks/theme-blocks.php');
    include get_template_directory() . '/inc/php/theme-custom-post-types.php';

    // enqueue admin-style.css for the admin area
    function admin_style() {
        wp_enqueue_style('admin-styles', get_template_directory_uri().'/admin-style.css');
    }
    add_action('admin_enqueue_scripts', 'admin_style', 99);     

    // NOTE: Create more user roles (hysteria theme custom code)
    function update_user_roles() {
        //if ( get_option( 'custom_roles_version' ) < 4 ) {
        
            $adv_editor = get_role( 'editor' )->capabilities;
            
            $adv_editor['edit_others_posts'] = true;            
            $adv_editor['edit_pages'] = true;            

            add_role( 'advanced', __( 'Avançado' ), $adv_editor );
                
            update_option( 'custom_roles_version', 4 );
      //  }
    }

    add_action('init', 'update_user_roles' );

    // Removes from admin menu
    add_action( 'admin_menu', 'my_remove_admin_menus' );
    function my_remove_admin_menus() {
        remove_menu_page( 'edit-comments.php' );
    }
    // Removes from post and pages
    add_action('init', 'remove_comment_support', 100);

    function remove_comment_support() {
        remove_post_type_support( 'post', 'comments' );
        remove_post_type_support( 'page', 'comments' );
    }
    // Removes from admin bar
    function mytheme_admin_bar_render() {
        global $wp_admin_bar;
        $wp_admin_bar->remove_menu('comments');
    }
    add_action( 'wp_before_admin_bar_render', 'mytheme_admin_bar_render' );
?>