<?php 
if( ! function_exists( 'wpc_create_block_category' ) ) {
	/**
	 * It creates the function that adds a new category to the block editor.
	 * 
	 * @param slug The slug for the category.
	 * @param title The title of the category.
	 * 
	 */
	function wpc_create_block_category( $slug, $title ) {

			/**
			 * It create the auxiliary function that the filter will use.
			 * 
			 * @param categories The array of categories.
			 * 
			 * @return array_of_categories with the new category as first element.
			 */
			function wpc_add_block_category( $categories ) {
				return array_merge(
					array(
						array(
							'slug' => $slug,
							'title' => $title,
						),
					),
					$categories
				);
			}
			add_filter( 'block_categories_all', 'wpc_add_block_category', 10, 2 );
	}
} 
?>