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


// // Meta Box Class: DadosDoProjetoMetaBox
// // Get the field value: $metavalue = get_post_meta( $post_id, $field_id, true );
// class DadosDoProjetoMetaBox{

// 	private $screen = array(
// 		'projeto'                        
// 	);

// 	private $meta_fields = array(
//                 array(
//                     'label' => 'Resumo',
//                     'id' => 'resumo',
//                     'type' => 'text',
//                     'placeholder' => 'Descrição resumida do projeto'                    
//                 ),
    
//                 array(
//                     'label' => 'Descrição',
//                     'id' => 'desc',
//                     'placeholder' => 'Descrição completa do projeto',
//                     'type' => 'textarea',
//                 ),
    
//                 array(
//                     'label' => 'Url para video',
//                     'id' => 'video_url',
//                     'placeholder' => 'URL para video do projeto',
//                     'type' => 'url'                    
//                 ),
    
//                 array(
//                     'label' => 'Vimeo ID',
//                     'id' => 'vimeo_id',
//                     'type' => 'text',
//                     'placeholder' => 'ID do video no VIMEO',
//                 ),
    
//                 array(
//                     'label' => 'Youtube ID',
//                     'id' => 'youtube_id',
//                     'type' => 'text',
//                     'placeholder' => 'ID do video no Youtube',
//                 ),
    
//                 array(
//                   'label' => 'Origem do video (selecione de onde o Wordpress deve carregar o vídeo)',
//                   'id' => 'video_origin',
//                   'default' => 'youtube',
//                   'type' => 'radio',
//                   'options' => array(
//                     'youtube' => 'Youtube',
//                     'vimeo' => 'Vimeo',
//                     'gallery' => 'Galeria de Mídia do Wordpress',
//                     'url' => 'URL'
//                 )
//               ),
  
//               array(
//                   'label' => 'Selecionar / Enviar Imagem',
//                   'id' => 'project_image',
//                   'type' => 'media',
//                   'media-type' => 'image',
//                   'returnvalue' => 'id'
//               ),

//               array(
//                   'label' => 'Selecionar / Enviar Imagem',
//                   'id' => 'project_image',
//                   'type' => 'media',
//                   'media-type' => 'video',
//                   'returnvalue' => 'id'
//               ),
    
//                 array(
//                     'label' => 'Escrito por',
//                     'id' => 'writer',
//                     'type' => 'text',
//                     'placeholder' => 'Ada Lovelace',
//                 ),
    
//                 array(
//                     'label' => 'Dirigido por',
//                     'id' => 'director',
//                     'type' => 'text',
//                     'placeholder' => 'Agnès Varda',
//                 ),
    
//                 array(
//                     'label' => 'Criado por',
//                     'id' => 'creator',
//                     'type' => 'text',
//                     'placeholder' => 'Frances Marion',
//                 )

// 	);

// 	public function __construct() {
// 		add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ) );
//     add_action( 'admin_footer', array( $this, 'media_fields' ) );
// 		add_action( 'save_post', array( $this, 'save_fields' ) );
// 	}

// 	public function add_meta_boxes() {
// 		foreach ( $this->screen as $single_screen ) {
// 			add_meta_box(
// 				'DadosDoProjeto',
// 				__( 'DadosDoProjeto', 'textdomain' ),
// 				array( $this, 'meta_box_callback' ),
// 				$single_screen,
// 				'advanced',
// 				'default'
// 			);
// 		}
// 	}

// 	public function meta_box_callback( $post ) {
// 		wp_nonce_field( 'DadosDoProjeto_data', 'DadosDoProjeto_nonce' );
//     echo 'Informações complementares para o banco de dados de projetos.';
// 		$this->field_generator( $post );
// 	}

//   public function media_fields() { ?>
//     <script>
//       jQuery(document).ready(function ($) {
//         if (typeof wp.media !== 'undefined') {
//           var _custom_media = true,
//             _orig_send_attachment = wp.media.editor.send.attachment;
//           $('.new-media').click(function (e) {
//             var send_attachment_bkp = wp.media.editor.send.attachment;
//             var button = $(this);
//             var id = button.attr('id').replace('_button', '');
//             _custom_media = true;
//             wp.media.editor.send.attachment = function (props, attachment) {
//               if (_custom_media) {
//                 if ($('input#' + id).data('return') == 'url') {
//                   $('input#' + id).val(attachment.url);
//                 } else {
//                   $('input#' + id).val(attachment.id);
//                 }
//                 $('div#preview' + id).css('background-image', 'url(' + attachment.url + ')');
//               } else {
//                 return _orig_send_attachment.apply(this, [props, attachment]);
//               };
//             }
//             wp.media.editor.open(button);
//             return false;
//           });
//           $('.add_media').on('click', function () {
//             _custom_media = false;
//           });
//           $('.remove-media').on('click', function () {
//             var parent = $(this).parents('td');
//             parent.find('input[type="text"]').val('');
//             parent.find('div').css('background-image', 'url()');
//           });
//         }
//       });
//       <!-- /script>
//   /*<?php 

//   public function select_image_from_library() {
//     // Enqueue the WordPress media library API and jQuery
//     wp_enqueue_media();
    
//     // Add a click event handler to the select button
//     ?>
//     <script>
//       document.addEventListener('DOMContentLoaded', function(){
//         const selectionButtons = document.querySelectorAll("[select-media]")
//         if( selectionButtons )  { 
//           selectionButtons.forEach( selButton => { 
//             selButton.addEventListener("click", function(e) {
//               e.preventDefault();
//               const button = e.target;
//               const mediaType = button.getAttribute('select-media');
            
//               // Open the media library modal window
//               var frame = wp.media({
//                 title: 'Select or Upload Media',
//                 multiple: false,
//                 library: {
//                   type: mediaType
//                 },
//                 button: {
//                   text: 'Confirmar arquivo'
//                 }
//               });
            
//               // When an image is selected, display it in the specified element
//               frame.on('select', function() {
//                 var attachment = frame.state().get('selection').first().toJSON();
//                 let el = button.nextSibling;
//                 while (el) {
//                   if (el.tagName === 'INPUT') {
//                     el.value = attachment.url;
//                   }
//                   if (el.tagName === 'IMG') {
//                     el.src = attachment.url;
//                     el.style.display = 'block';
//                   }
//                   if (el.tagName === 'VIDEO') {
//                     el.src = attachment.url;
//                     el.style.display = 'block';
//                   }
//                   el = el.nextSibling;
//                 }
//                 // close frame
//                 frame
//               }); // frame.on('select')        
              
//               // Open the modal window
//               frame.open();              
//           })
//         }) //forEach
//         } // if selectionButtons
              
//         // clear media
//         Array.from( document.querySelectorAll("[clear-media]") ).forEach( element => { 
//           element.addEventListener("click", function(e) {
//             e.preventDefault();
//             let el = e.target.nextSibling;
//             while (el) {
//               if (el.tagName === 'INPUT') {
//                 el.value = '';
//               }
//               if (el.tagName === 'IMG') {
//                 el.src = '';
//                 el.style.display = 'none';
//               }
//               if (el.tagName === 'VIDEO') {
//                 el.src = '';
//                 el.style.display = 'none';
//               }
//               el = el.nextSibling;
//             }
//           });
//         }) // array from [clear media]
//     }); // DOMContentLoaded
//     </script>
//     <?php
//   }



// 	public function field_generator( $post ) {
// 		$output = '';
// 		foreach ( $this->meta_fields as $meta_field ) {
// 			$label = '<label for="' . $meta_field['id'] . '">' . $meta_field['label'] . '</label>';
// 			$meta_value = get_post_meta( $post->ID, $meta_field['id'], true );
// 			if ( empty( $meta_value ) ) {
// 				if ( isset( $meta_field['default'] ) ) {
// 					$meta_value = $meta_field['default'];
// 				}
// 			}
//       switch ($meta_field['type']) {
//         case 'media':
          
//           $meta_url = '';
//           if ($meta_value) {
//             if ($meta_field['returnvalue'] == 'url') {
//               $meta_url = $meta_value;
//             } else {
//               $meta_url = wp_get_attachment_url($meta_value);
//             }
//           }

//           $this->select_image_from_library();

//           $buttonAttribute = $meta_field['media-type'] === 'image' 
//             ? 'select-media="image"' 
//             : 'select-media="video"';

//           $mediaElement = $meta_field['media-type'] === 'image' 
//             ? '<img   class="selected-image" src="'.$meta_value.'" alt="Selected Image" id="'.$meta_field['id'].'" style="display: '.($meta_value != "" ? 'block' : 'none').';">' 
//             : '<video class="selected-video" src="'.$meta_value.'" alt="Selected Video" controls id="'.$meta_field['id'].'"  style="display: '.($meta_value != "" ? 'block' : 'none').';" ></video>';
          
//           $input = <<<HTML
//           <style>
//             [select-media="image"],
//             [select-media="video"],
//             [clear-media] {
//               border-radius: 4px;
//               outline: none;
//               border: none;
//               box-shadow: 0 0 15px 0px #eee8, 0 0 5px 0px #0004;
//             }

//             .media-selection-buttons {
//               display: grid;
//               position: relative;
//               grid-template-columns: 150px 150px;
//               grid-template-rows: 48px auto;
//               grid-gap: 10px;
//               grid-template-areas:
//                 "select remove"
//                 "media media";
//             }
//             button[select-media] {
//               grid-area: select;
//             }
//             button[clear-media],
//             button[clear-media]:not( [clear-media=""] ) {
//               grid-area: remove;
//             }
//             .media-selection-buttons img,
//             .media-selection-buttons video {
//               grid-area: media;
//               width: 100%;              
//               object-fit: cover;
//             }
//           </style>
//           <div class="media-selection-container">
//             <div class="media-selection-buttons">
//               <button $buttonAttribute>Selecionar / Enviar</button>
//               <button clear-media>Remover</button>
//               $mediaElement              
//               <input  id="{$meta_field['id']}" type="hidden" class="selected-image" name="{$meta_field['id']}" value="$meta_value">
//             </div>
//           </div>
//           HTML;
//           break;


//         case 'radio':
//           $input = '<fieldset>';
//           $input .= '<legend class="screen-reader-text">' . $meta_field['label'] . '</legend>';
//           $i = 0;
//           foreach ($meta_field['options'] as $key => $value) {
//             $meta_field_value = !is_numeric($key) ? $key : $value;
//             $input .= sprintf(
//               '<label><input %s id=" %s" name="%s" type="radio" value="%s"> %s</label>%s',
//               $meta_value === $meta_field_value ? 'checked' : '',
//               $meta_field['id'],
//               $meta_field['id'],
//               $meta_field_value,
//               $value,
//               $i < count($meta_field['options']) - 1 ? '<br>' : ''
//             );
//             $i++;
//           }
//           $input .= '</fieldset>';
//           break;

//         case 'textarea':
//           $input = sprintf(
//             '<textarea id="%s" name="%s" rows="5" style="width: 100&#37;">%s</textarea>',
//             $meta_field['id'],
//             $meta_field['id'],
//             $meta_value
//           );
//           break;

//         default:
//           $input = sprintf(
//             '<input %s id="%s" name="%s" type="%s" value="%s" placeholder="%s">',
//             $meta_field['type'] !== 'color' ? 'style="width: 100%"' : '',
//             $meta_field['id'],
//             $meta_field['id'],
//             $meta_field['type'],
//             $meta_value,
//             $meta_field['placeholder']
//           );
//       }
//       $output .= $this->format_rows($label, $input);
//     }
// 		echo '<table class="form-table"><tbody>' . $output . '</tbody></table>';
// 	}

// 	public function format_rows( $label, $input ) {
// 		return '<tr><th>'.$label.'</th><td>'.$input.'</td></tr>';
// 	}

// 	public function save_fields( $post_id ) {
// 		if ( ! isset( $_POST['DadosDoProjeto_nonce'] ) )
// 			return $post_id;
// 		$nonce = $_POST['DadosDoProjeto_nonce'];
// 		if ( !wp_verify_nonce( $nonce, 'DadosDoProjeto_data' ) )
// 			return $post_id;
// 		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
// 			return $post_id;
// 		foreach ( $this->meta_fields as $meta_field ) {
// 			if ( isset( $_POST[ $meta_field['id'] ] ) ) {
// 				switch ( $meta_field['type'] ) {
// 					case 'email':
// 						$_POST[ $meta_field['id'] ] = sanitize_email( $_POST[ $meta_field['id'] ] );
// 						break;
// 					case 'text':
// 						$_POST[ $meta_field['id'] ] = sanitize_text_field( $_POST[ $meta_field['id'] ] );
// 						break;
// 				}
// 				update_post_meta( $post_id, $meta_field['id'], $_POST[ $meta_field['id'] ] );
// 			} else if ( $meta_field['type'] === 'checkbox' ) {
// 				update_post_meta( $post_id, $meta_field['id'], '0' );
// 			}
// 		}
// 	}
// }

// if (class_exists('DadosDoProjetoMetabox')) {
// 	new DadosDoProjetoMetabox;
//   };