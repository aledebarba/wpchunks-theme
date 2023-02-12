# WPChunk Component Model 

WPChunks provides a simple component system form *Wordpress*.
This folder contains the **javascript** component system structure and files necessary to run and embed the component inside a *Wordpress* page. 

To execute the component from a Wordpress page, use the command:

    Component::J('scroll-trigger');
    or
    Component::js('scroll-trigger');

To execute the component from Wordpress content, use the shortcode:

    [componentjs 'scroll-trigger'];

## Folder and files

The component default folder structure: 

	Wordpress ThemeFolder/ComponentFolder
		└── scroll-trigger
			├── readme.md
			└── src
				└── functions
					└── breakpoints.php
				├── index.js
				└── style.php
