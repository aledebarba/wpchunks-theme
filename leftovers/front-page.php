<?php 
wp_head();
Import::component('Render')->from("new-theme-frontend");
   
//NOTE: Custom function to get social networks from theme options
function socialIcons($adminpage, $field) {
    $social = pods($adminpage)->field($field);
    $menu_social = [];
    foreach ($social as $key => $item) {
        $social_icon = pods('social', $item['ID'])->field('icone');
        $social_label = pods('social', $item['ID'])->field('title');
        $social_link = pods('social', $item['ID'])->field('url');
        $social_description = pods('social', $item['ID'])->field('detalhes');
        $menu_social[] = [
            $social_label => [ 
                'icon' => $social_icon,
                'link' => $social_link,
                'description' => $social_description,
                'title' => $social_label,
                ]
            ];
        }
    return $menu_social;
}

        
//NOTE: Custom function to get website custom settings
$settings = pods('administracao_do_site_hysteria');
$page_settings = [ 
    'pageTittle' => $settings->field('titulo_da_pagina'),
    'show_intro' => $settings->field('mostrar_intro'),
    'status' => $settings->field('status'),
    'slogaPosition' => $settings->field('sloganposition'),
    'socialMenu' => socialIcons('administracao_do_site_hysteria', 'social'),
    'socialIconsPosition' => $settings->field('social_icons_position'),
    'fixedFooter' => $settings->field('fixed_footer'),
    'socialFooter' => socialIcons('administracao_do_site_hysteria', 'social_footer'),
    'navstyle' => $settings->field('menustyle'),
    'seoDescription' =>  $settings->field('seo_description'),
    'seoKeywords' => $settings->field('seo_keywords'),
    'seoTitle' => $settings->field('seo_title'),
    'og:title' => $settings->field('og_title'),
    'og:description' =>  $settings->field('og_description'),
    'og:image' => $settings->field('og_image')['guid'],
    'og:image:alt' => $settings->field('og_image_alt'),
    'og:url' => $settings->field('og_url'),
    'og:site_name' => $settings->field('og_site_name'),
    'twitter:card' => $settings->field('twitter_card'),
    'twitter:site' =>  $settings->field('twitter_site'),
];

// Create page
 ?>

<body> <?php 
    Render( ['settings' => $page_settings] );
    wp_footer(); ?>
</body> 
