<?php 
if( ! defined ( 'ABSPATH' ) ) exit;
class CreateWPCBlock {
    private $name;

    function __construct( $name ) {
        $this->name = $name;
        add_action('init', array($this, 'adminAssets'));
        add_action('rest_api_init', [$this, 'wpc_data'] );
    }

    function wpc_data() {
        register_rest_route('wpc/v1', '/'.$this->name, [
            'methods' => 'GET',
            'callback' => [$this, 'wpc_data_callback']
        ]);
    }

    function wpc_data_callback() {
        $data = '{ "data": "none"}';
        return $data;
    }

    function adminAssets() {
        wp_register_style(
            'wpchunk-block-type-style-'.$this->name,
            get_stylesheet_directory_uri().'/inc/blocks/'.$this->name.'/build/'.$this->name.'.css'
        );
        wp_register_script(
            'wpchunk-block-type-'.$this->name,
            get_stylesheet_directory_uri().'/inc/blocks/'.$this->name.'/build/'.$this->name.'.js',
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
        <pre class='flip-screen-data'>$data</pre>
        HTML;
        return $res;

    }
}

$testBlock = new CreateWPCBlock('wp-chunk-page-options');
$flipScreenBlock = new CreateWPCBlock('wp-chunk-flip-screen');

?>