import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const CALLBACK = ( media ) => console.log( media );

/*
 * @param {array} ALLOWED_MEDIA_TYPES - Array of allowed media types. Default: ['images']
 * @param {function} setMedia - Callback function to return user choice
 * @return user selected media url
 *
 */

export function MediaGalleyButton( { ALLOWED_MEDIA_TYPES=["images"], setMedia } ) {
	if ( ! setMedia ) {
		setMedia = CALLBACK;
		console.error ("setMedia callback function is required, in absence of callback function, console.log will be used")
	}

	
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) => setMedia( media ) }
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ mediaId }
				render={ ( { open } ) => (
					<Button onClick={ open }>Selecionar da Galeria</Button>
				) }
			/>
		</MediaUploadCheck>
	);
}