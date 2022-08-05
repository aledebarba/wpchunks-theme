<?php 
Import::component('helloWorld')->from('hello-react');

wp_head(); 

$menuTerm   = wp_get_nav_menu_object('main');
$menuItems  = wp_get_nav_menu_items($menuTerm->term_id);
$menuItems  = array_map( function($item) {
    return [$item->title, $item->url];
}, $menuItems);?>

<h1><?php the_title(); ?></h1>
<p><?php the_content();?></p>
<?php helloWorld(); ?>

<?php wp_footer(); ?>