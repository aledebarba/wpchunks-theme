<?php 
if( ! defined ( 'ABSPATH' ) ) exit;
class CreateWPCBlock {
    
    private $name;

    function __construct( $name ) {
        $this->name = $name;
        add_action('init', array($this, 'adminAssets'));
        $this->wpc_data();
    }

    function wpc_data() {
        add_action( 'rest_api_init', function () {
            register_rest_route('wpc/v1', '/'.$this->name, [
                'methods' => 'GET',
                'callback' => [$this, 'wpc_data_callback']
            ]);
        });
    }

    function wpc_data_callback( $attributes ) {
        $data = '{ "data": "none"}';
        echo json_encode($attributes);
        return $data;
    }

    function adminAssets() {
        wp_register_style(
            'wpchunk-block-type-style-'.$this->name,
            get_stylesheet_directory_uri().'/inc/blocks/'.$this->name.'/build/index.css'
        );
        wp_register_script(
            'wpchunk-block-type-'.$this->name,
            get_stylesheet_directory_uri().'/inc/blocks/'.$this->name.'/build/index.js',
            array('wp-blocks', 'wp-element', 'wp-editor')                
        );
        register_block_type("wpchunks/".$this->name, [
            'editor_script' => 'wpchunk-block-type-'.$this->name,
            'editor_style' => 'wpchunk-block-type-style-'.$this->name,
            'render_callback' => [
                $this,
                'theHTML'
            ]
        ]);
    }

    function theHTML( $attributes ) { 
        
        $data = json_encode($attributes);
        $res = <<<HTML
            <pre class='data-{$this->name}'>$data</pre>
        HTML;
        return $res;

    }
}

// Adiciona a categoria de blocos customizada  "Hysteria"
add_filter( 'block_categories_all', 'hysteria_block_category', 10, 2);
function hysteria_block_category( $categories, $post ) {	
	array_unshift( $categories, array(
		'slug'	=> 'hysteria',
		'title' => 'Hysteria'
	) );
	return $categories;
}

// $testBlock       = new CreateWPCBlock('wp-chunk-page-options');
// $flipScreenBlock = new CreateWPCBlock('wp-chunk-flip-screen');
// $cptBrands       = new CreateWPCBlock('wpc-cpt-brands');
$cptProjeto      = new CreateWPCBlock('wpc-cpt-projeto');
// $cptSocial       = new CreateWPCBlock('wpc-cpt-social');
// $cptColaboradora = new CreateWPCBlock('wpc-cpt-colaboradora');

?>