<?php 
/**
 * Target sintax;
 * 
 * Import::function('functionName')->from('path-to-component-file');
 * @example
 * Import::component('hambugerMenu')->from('components/hambuger-menu');                    // no file name = index 
 * Import::component('responsiveVideo')->from('components/react-videos/full-width.jsx');   // last name = file name where to find the function 
 * Import::component('wpMenu')->from('utilities/wp-menu/wp-menu.php');                     // if file is php try to find the function
 * Import::component('wpFooterMenu')->from('utilities/wp-menu/wp-menu.php');               // 
 * Import::component('fontAwesome')->fromPlugin('font-awesome-chunk/font-awesome');        //  
 * Import::component('newsTicker')->fromPlugin('news-package/news-ticker');
 * Import::component('newsColumn')->fromPlugin('news-package/news-column');                // Various components at same plugin
 */
class Component { 
    // PHP components -------------------------------------------------------
    public static function php($name, $params) {
        global $components_core_options; 
        $componentName = $name."/src/index.php";
        $componentRoot = get_stylesheet_directory()."/".$components_core_options->getRoot()."/".$name."/src/";  
        $componentPath = $componentRoot."index.php";
        $componentStyles = $componentRoot."index.scss";   
        
        if ( isset( $components_core_options->components[$name] ) ) {
            include( $componentPath );
            return true;
        } else {
            $components_core_options->setComponent($name, $componentPath);
        }
        if( file_exists($componentStyles) ) { 
            sassFile("index.scss", $name, $componentRoot); 
        }
        if ( file_exists($componentPath) ) {
            include ( $componentPath );
        } else { // show error
            Component::error("Could not find PHP component: $name");
        }
    }

    public static function jsbundle($name, $params=[], $deps = [], $infooter = true, $app = false) {
        global $components_core_options;
        $components_core_options->componentStore[$name]['instance'] += 1;
        
        $entryPointName = "index";
        $path           = $components_core_options->getBuildPath($name, $entryPointName.".js");
        $pathJSX        = $components_core_options->getBuildPath($name, $entryPointName.".jsx");

        $url            = $components_core_options->getBuildUrl($name, $entryPointName.".js");
        $urlJSX         = $components_core_options->getBuildUrl($name, $entryPointName.".jsx");

        $handle         = "wpchunk-".$name; // ex. wpchunk-hello-world
        $globalVars     = str_replace("-", "_", $handle); // ex: wpchunk_hello_world 
        $componentPath  = $path;
        $stylePath      = $components_core_options->getBuildPath($name, $entryPointName.".css");
        $styleUrl       = $components_core_options->getBuildUrl($name, $entryPointName.".css");
        $styleHandle    = "wpchunk-$name-styles";
        $ver            = uniqid();
        $instance       = $components_core_options->componentStore[$name]['instance'];
        
        if($app) {
            $path       = $components_core_options->componentStore[$name]['path']."/build/_app.js";
            $pathJSX    = $components_core_options->componentStore[$name]['path']."/build/_app.jsx.js";
            $url        = $components_core_options->componentStore[$name]['url']."/build/_app.js";
            $urlJSX     = $components_core_options->componentStore[$name]['url']."/build/_app.jsx.js";
            $stylePath  = $components_core_options->componentStore[$name]['path']."/build/_app.css";
            $styleUrl   = $components_core_options->componentStore[$name]['url']."/build/_app.css";
        }
        
        if ( file_exists($path) === false && file_exists($pathJSX) === false ) {
            
            $errMsg = <<<INFO
            <h3>Could not find a component to mount.</h3>
            <pre> 
                Origin: $name
                Path: $path
                URL: $url            
                styleUrl: $styleUrl
                stylePath: $stylePath
            </pre>
            INFO;  
            // show error and thow exception
            Component::error(errMsg, true);

        } else if ( file_exists($path) === false ) {

            $path = $pathJSX;
            $url = $urlJSX;

        }
        
        // mount js code
        $params     = json_encode($params);
        $paramsVar  = str_replace("-", "_", $name);
        $nonce      = wp_create_nonce( $name.$instance );
        $adminUrl   = admin_url('admin-ajax.php');
        $themeUrl   = get_stylesheet_directory_uri();
        
        $html_pre_data = html_code_for_react_app($name, $params);
        $html = <<<HTML
            <div class="wpchunk-$name" 
                    data-wpchunk="$name" 
                    wpchunk-$name="true" 
                    data-instance="$instance"                    
            >       
            </div>
            $html_pre_data          
        HTML;
        
        $jsCode     = <<<JAVASCRIPT
            {$paramsVar}[{$instance}] = {
                'url'       : {admin: "$adminUrl", theme: "$themeUrl"},                    
                'ajaxNonce' : "$nonce",
                'params'    : $params
            };          
            
        JAVASCRIPT; 
        echo $html;
        
        if ( wp_script_is( $handle, 'enqueued' ) == false ) {
            $components_core_options->setComponent($name, $componentPath);                
            add_action("wp_enqueue_scripts", function() use ($handle, $url, $deps, $ver, $infooter, $styleHandle, $styleUrl, $stylePath, $globalVars, $params) {
                wp_register_script( $handle, $url, $deps, $ver, $infooter );
                wp_enqueue_script( $handle );
                if (file_exists($stylePath)) {
                    wp_register_style( $styleHandle, $styleUrl, [], $ver, "screen" );
                    wp_enqueue_style( $styleHandle );
                }
            }, 1);      
            do_action("wp_enqueue_scripts");    
            // init global params array
            $jsCode = "var $paramsVar = [];".$jsCode;                
        }
        wp_add_inline_script( $handle, $jsCode, 'before' );
    }
    
    public static function P($name, ...$params) { // sugar for php
        Component::php($name, $params);
    }

    // Javascript components -------------------------------------------------
    public static function JS($name, $deps = [], $infooter = true) {
        global $components_core_options;
        $path           = $components_core_options->getBuildPath($name, "index.js");
        $url            = $components_core_options->getBuildUrl ($name, "index.js");
        $handle         = "wpchunk-".$name; // ex. wpchunk-hello-world
        $globalVars     = str_replace("-", "_", $handle); // ex: wpchunk_hello_world 
        $componentPath  = $path;
        $stylePath      = $components_core_options->getBuildPath($name, "index.css");
        $styleUrl       = $components_core_options->getBuildUrl($name, "index.css");
        $styleHandle    = "wpchunk-$name-styles";
        $ver            = uniqid();
        $deps           = [];
        $infooter       = true;
        $instance       = $components_core_options->componentStore[$name]['instance'];
        
        if ( file_exists($path) ) {
            //output entry point html element
            echo "<div class='$name' wpchunk-$name='true'></div>";
            //register script
            add_action("wp_enqueue_scripts", function() use ($handle, $url, $deps, $ver, $infooter, $stylePath, $styleHandle, $instance) {
                wp_register_script( $handle, $url, $deps, $ver, $infooter );
                wp_enqueue_script( $handle );
            }, 100);
            do_action("wp_enqueue_scripts");
        } else {
            Component::error("Could not find Javascript component: $name");
        }
    }

    public static function javascript($name, $params = [], $deps = [], $infooter = true) {
        global $components_core_options;
        $components_core_options->componentStore[$name]['instance'] += 1;
        
        $path           = $components_core_options->getSrcPath($name, "index.js");
        $url            = $components_core_options->getSrcUrl ($name, "index.js");
        $handle         = "wpchunk-".$name; // ex. wpchunk-hello-world
        $globalVars     = str_replace("-", "_", $handle); // ex: wpchunk_hello_world 
        $componentPath  = $path;
        $stylePath      = $components_core_options->getSrcPath($name, "index.scss");
        $styleUrl       = $components_core_options->getSrcUrl($name, "index.scss");
        $styleHandle    = "wpchunk-$name-styles";
        $ver            = uniqid();
        $deps           = [];
        $infooter       = true;
        $instance       = $components_core_options->componentStore[$name]['instance'];
        
        if ( file_exists($path) ) {
            $html = <<<HTML
                <div class="wpchunk-$name" 
                     data-wpchunk="$name" 
                     wpchunk-$name="true" 
                     data-instance="$instance"                    
                ></div>
            HTML;
            // mount js code
            $params     = json_encode($params);
            $paramsVar  = str_replace("-", "_", $name);
            $nonce      = wp_create_nonce( $name.$instance );
            $adminUrl   = admin_url('admin-ajax.php');            
            $themeUrl   = get_stylesheet_directory_uri();
            $jsCode     = <<<JAVASCRIPT
                {$paramsVar}[{$instance}] = {
                    'url'       : {admin: "$adminUrl", theme: "$themeUrl"},                    
                    'ajaxNonce' : "$nonce",
                    'params'    : $params
                };          
            JAVASCRIPT; 
            echo $html;

            if ( wp_script_is( $handle, 'enqueued' ) == false ) {
                $components_core_options->setComponent($name, $componentPath);   
                $componentRoot = get_stylesheet_directory()."/".$components_core_options->getRoot()."/".$name."/src/";              
                add_action("wp_enqueue_scripts", function() use ($handle, $url, $deps, $ver, $infooter, $styleHandle, $styleUrl, $stylePath, $globalVars, $params, $componentRoot) {
                    wp_register_script( $handle, $url, $deps, $ver, $infooter );
                    wp_enqueue_script( $handle );                    
                }, 1);      
                do_action("wp_enqueue_scripts");   
                if (file_exists($stylePath)) {
                    sassFile("index.scss", $name, $componentRoot); 
                } 
                // init global params array
                $jsCode = "var $paramsVar = [];".$jsCode;
            }
            wp_add_inline_script( $handle, $jsCode, 'before' );
        } else {
            Component::error("Could not find component: $name");
        }        
    }

    // React components -------------------------------------------------------
    public static function react($name, $params) {
        global $components_core_options;
        $path           = $components_core_options->getBuildPath($name, "index.js");
        $url            = $components_core_options->getBuildUrl ($name, "index.js");
        $handle         = "wpchunk-".$name; // ex. wpchunk-hello-world
        $globalVars     = str_replace("-", "_", $handle); // ex: wpchunk_hello_world 
        $componentPath  = $path;
        $stylePath      = $components_core_options->getBuildPath($name, "index.css");
        $styleUrl       = $components_core_options->getBuildUrl($name, "index.css");
        $styleHandle    = "wpchunk-$name-styles";
        $ver            = uniqid();
        $deps           = ['wp-element', 'wp-editor'];
        $infooter       = true;
        $instance       = $components_core_options->componentStore[$name]['instance'];
        
        if ( file_exists($componentPath) ) {            
            $html = <<<HTML
                <div class="wpchunk-$name" 
                     data-wpchunk="$name" 
                     wpchunk-$name="true" 
                     data-instance="$instance"                    
                ></div>
            HTML;
            // mount js code
            $params     = json_encode($params);
            $paramsVar  = str_replace("-", "_", $name);
            $nonce      = wp_create_nonce( $name.$instance );
            $adminUrl   = admin_url('admin-ajax.php');
            $themeUrl   = get_stylesheet_directory_uri();
            $jsCode     = <<<JAVASCRIPT
                {$paramsVar}[{$instance}] = {
                    'url'       : {admin: "$adminUrl", theme: "$themeUrl"},
                    'ajaxNonce' : "$nonce",
                    'params'    : $params
                };          
            JAVASCRIPT; 
            echo $html;
            
            if ( wp_script_is( $handle, 'enqueued' ) == false ) {
                $components_core_options->setComponent($name, $componentPath);                
                add_action("wp_enqueue_scripts", function() use ($handle, $url, $deps, $ver, $infooter, $styleHandle, $styleUrl, $stylePath, $globalVars, $params) {
                    wp_register_script( $handle, $url, $deps, $ver, $infooter );
                    wp_enqueue_script( $handle );
                    if (file_exists($stylePath)) {
                        wp_register_style( $styleHandle, $styleUrl, [], $ver, "screen" );
                        wp_enqueue_style( $styleHandle );
                    }
                }, 1);      
                do_action("wp_enqueue_scripts");    
                // init global params array
                $jsCode = "var $paramsVar = [];".$jsCode;
            }
            wp_add_inline_script( $handle, $jsCode, 'before' );
        } else {
            Component::error("Could not find React component: $name");
        }
    }

    public static function error($message, $throw = false) {
        echo <<<HTML
            <div style="color: white; 
                font-size: 18px; font-weight: bold; font-family: sans-serif;
                padding: 16px; margin: 8px 0px;
                background-color: #3d3d3d;
                border-left: 32px solid red;
                display: block; z-index: 100000;
                width: fit-content;
                ">
                $message
            </div>
        HTML;
        if ($throw) {
            throw new Exception($message);
            die();
        }
    }

    public static function create() { return new ComponentElement(); }
    
    public static function reactComponentCycle( $name, $params=[] ){
        global $components_core_options;
        $components_core_options->componentStore[$name]['instance'] += 1;
        $path = $components_core_options->componentStore[$name]['path'];
        Component::react($name, $params);
    }

    public static function javascriptComponentCycle( $name, $params=[] ){
        global $components_core_options;
        $components_core_options->componentStore[$name]['instance'] += 1;
        $path = $components_core_options->componentStore[$name]['path'];
        Component::JS($name, $params);
    }
}

function chunk($name, ...$params) {
    global $components_core_options;  

    if ( !$components_core_options->componentExist($name) ) {
        Component::error(<<<HTML
            Component
            <span style='
                font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace; 
                color: gold;'>
                $name
            </span>not found. Please create a new component first.
            HTML);
            throw new Exception('Component not found');
        return false;
    }

    $package = $components_core_options ->getPackageJson($name);
    
    if ( file_exists($package) ) {        
        $package = json_decode(file_get_contents($package));
        if (isset($package->wpchunk)) {
            $type = $package->wpchunk;
            if ($type == "react") {
                Component::reactComponentCycle($name, $params);
            } else if ($type == "vue") {
                Component::error("not supported yet");
            } else if ($type == "php") {
                Component::php($name, $params);
            } else if ($type == "javascript") {
                if( !isset($components_core_options->componentStore[$name])) {
                    $components_core_options->componentStore[$name] = ['instance' => 0];
                }
                Component::javascript($name, $params);
            } else if ($type == "jsbundle") {
                if( !isset($components_core_options->componentStore[$name])) {
                    $components_core_options->componentStore[$name] = ['instance' => 0];
                }
                Component::jsbundle($name, $params);
            } else {
                Component::error("Unknown component type: $type");
            }
        } else {
            Component::error("Could not find component type in package.json");
        }
    } else {
        Component::error("Could not find package.json");
    }    
}

function html_code_for_react_app( $name, $params=[] ) {
    global $components_core_options;  
    $path = $components_core_options->componentStore[$name]['path'];
    $adminUrl   = admin_url();
    $themeUrl   = get_stylesheet_directory_uri();
    $nonce      = wp_create_nonce( 'wp_rest' );
    $paramsVar  = "params_".$name."_".$components_core_options->componentStore[$name]['instance'];
    $instance   = $name."_".$components_core_options->componentStore[$name]['instance'];
    $wp_pages   = get_pages();
    
    $pages      = [];
    foreach ($wp_pages as $page) {
        $pages[] = [
            'id' => $page->post_title,
            'title' => $page->post_title,
            'slug' => $page->post_name,
        ];
    }

    $menu = wp_get_nav_menu_items('primary');
    $menu_primary = array_map(function($item) {
        $slug = '';
        if( $item->object == 'page' ) {
            $slug = get_page_uri($item->object_id);
        }
        return [
            'object' => $item->object,
            'object_id' => $item->object_id,
            'type' => $item->type,
            'type_label' => $item->type_label,
            'title' => $item->title,
            'url' => $item->url,
            'target' => $item->target,
            'slug' => $slug,
            'attr' => $item->attr_title,
        ];
    }, $menu);

    $data = [];
    $data['path'] = $path;
    $data['params'] = json_decode($params);
    $data['adminUrl'] = $adminUrl;
    $data['themeUrl'] = $themeUrl;
    $data['nonce'] = $nonce;
    $data['pages'] = $pages;
    $data['primaryMenu'] = $menu_primary;
    $data = json_encode($data, JSON_UNESCAPED_SLASHES);
    $data = htmlentities($data);
    $preId = $name;
    $preInstance = $components_core_options->componentStore[$name]['instance'];

    $htmlCode = <<<HTML
        <pre class="$preId" instance="$preInstance" style="display: none;">
            $data
        </pre>
    HTML;

    return $htmlCode;
}
?>