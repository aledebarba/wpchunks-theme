import { Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

export function MediaGalleryButton( { setMedia, media } ) {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) => {
					setMedia( media )
				}}
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ media }
				render={ ( { open } ) => (
					<Button variant="primary" onClick={ open }>Selecionar Imagem</Button>
				) }
			/>
		</MediaUploadCheck>
	);
}