<?php
if( class_exists( 'WPC_block_type' ) ) { return; }

class WPC_block_type {

    private $name;
    private $block_data = [];

    function __construct($name) {
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
        // get data from private $block_data
        $data = json_encode($this->block_data);
        return $data;
    }

    function adminAssets() {
        // wp_register_style(
        //     'wpchunk-block-type-style-'.$this->name,
        //     get_stylesheet_directory_uri().'/inc/blocks/'.$this->name.'/build/index.css'
        // );
        // wp_register_script(
        //     'wpchunk-block-type-'.$this->name,
        //     get_stylesheet_directory_uri().'/inc/blocks/'.$this->name.'/build/index.js',
        //     array('wp-blocks', 'wp-element', 'wp-editor')                
        // );
        register_block_type(__DIR__, [
            // 'editor_script'    => 'wpchunk-block-type-'.$this->name,
            // 'editor_style'     => 'wpchunk-block-type-style-'.$this->name,
            'render_callback'  => [
                $this,
                'theHTML'
            ]
        ]);
    }

    function theHTML( $attributes ) { 
        $this->block_data = $attributes;
        $data = json_encode($attributes);
        $res = <<<HTML
            <pre class='data-{$this->name}'>$data</pre>
        HTML;
        return $res;

    }
}

?>