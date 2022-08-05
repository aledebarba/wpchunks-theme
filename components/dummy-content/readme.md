# WPChunk Component Model 

WPChunks provides a simple component system form *Wordpress*.
This folder contains the **php** component system structure and files necessary to run and embed the component inside a *Wordpress* page. 

    Component::P('dummy-content');
    or
    Component::php('dummy-content');

## Folder and files

The component default folder structure: 

    Wordpress ThemeFolder/ComponentFolder
		└── dummy-content
			├── readme.md (this file)
			└── src
				└── functions
					└── breakpoints.php (break points variables to style.php sass code)
				├── index.php (main plugin code)
				└── style.php (compiles sass code and embed to page)


####Observe that####
The style file **must** be a php file.
It contains **SCSS** compatible code, wich is compiled by Sass Php Compiler on server side and embeded to the page.
                             