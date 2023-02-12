export const _app = {
	pages: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset
			.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset
			.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.pages;
	},
	params: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset
			.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset
			.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.params[ 0 ];
	},
	adminUrl: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset
			.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset
			.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.adminUrl;
	},
	themeUrl: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset
			.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset
			.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.themeUrl;
	},
	primaryMenu: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset
			.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset
			.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.primaryMenu;
	},
};

export const Styles = ( { css } ) => <style>{ css }</style>;

export function getWPChunkElementName() {
	const getCurrentScript = () => {
		if ( document.currentScript && document.currentScript.src !== '' )
			return document.currentScript.src;
		var scripts = document.getElementsByTagName( 'script' ),
			str = scripts[ scripts.length - 1 ].src;
		if ( str !== '' ) return str;
		return new Error().stack.match( /(https?:[^:]*)/ )[ 0 ];
	};

	const getCurrentScriptPath = () => {
		var script = getCurrentScript(),
			path = script.substring( 0, script.lastIndexOf( '/' ) );
		return path;
	};

	const pathElements = getCurrentScriptPath().split( '/' );

	return 'wpchunk-' + pathElements[ pathElements.length - 2 ];
}

export function getWPChunkElementAttr() {
	return `[${ getWPChunkElementName() }]`;
}
