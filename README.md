# kendo.jssor

[![Version](https://img.shields.io/badge/Version-2018.1-green.svg)](VERSION)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JWFGDHPAKW6NL)

**Jssor Image Slider for Kendo UI Framework**

kendo.jssor is a custom Kendo widget to render slideshows / sliders /galleries or carousels with Jssor slider. The project was realized in Typescript, source code is included. In contrast to the static design of the Jssor slider kendo.jssor allows the dynamic binding of images and slider options. Please note that the Jssor slider does not provide any methods or mechanisms for dynamically adding slides or changing options. For this reason, the Jssor control is destroyed and rebuilt with every change.

## Demo
[http://kendo.jssor.dotnetfire.net/](http://kendo.jssor.dotnetfire.net/)

## Features

Feature description in progress...

| Feature | Status | Notes |
| :----- | :---: | :----------- |
| Jssor typescript definition | :heavy_check_mark: | This project contains a typescript definition file for Jssor slider. The [Definition file](typings/jssor/index.d.ts) is located in the folder [typings/jssor/](typings/jssor/). Definitions for the Jssor event methods are still missing. Please write an issue for further missing definitions... |
| Typescript definition | :heavy_check_mark: | kendo.jssor ist writen in typescript. The typescript source files are located in folder [typings/](typings/). |
| Databinding / Dynamic loading | :heavy_check_mark: |  Local or remote data binding for image data with automatic refresh when the data source changes (add remove image). Allows dynamic slides loading and option changes while slider is running. |
| MVVM support | :heavy_check_mark: | Model View ViewModel (MVVM) databinding. Allows binding of image data and slider options. |
| Image slides | :heavy_check_mark: | Binding of image url, thumbnail url, caption, description and content (static / fixed HTML). The field names of the data item can be set by options |
| Navigation skins | :heavy_check_mark: | Navigation and loading screen skins can be set via widget options. |
| JSON templates for skins | :heavy_check_mark: | Loading of templates for navigation (arrow, bullet, thumbnail) and loading screen from JSON files (currently only synchronous loading when refreshing the widget). Default settings from the template can be overridden with the widget options. |
| Jssor 27.0 | :heavy_plus_sign: | Upgrade to Jssor 27.0 and usage / implemenation of new function ($AppendSlides(), $RemoveSlides(), $ReloadSlides(), $Destroy()) for slide operations and databinding. |
| kendo & Jssor events | :heavy_plus_sign: | Currently allows the widget events "change", "dataBinding" and "dataBound". No Jssor events yet (e.g. "$ EVT_CLICK", "$EVT_DRAG_START", ...)  |
| Documentation | :heavy_plus_sign: | Class and interface documenation for typescript |
| Slide layers | :o: | At the moment kendo.jssor does not allow slide layers and animations. |
| Unit tests | :x: | No unit tests yet ... |


Legend:

| Icon | Description | Icon | Description | 
| :---: | :--- | :---: | :--- |
| :heavy_check_mark: | Implemented | :heavy_plus_sign: | In progress | 
| :o: | Planed | :x: | Missing (not yet planed?) |

## License

### Commercial license

If you want to use kendo.jssor to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. 

There is no fixed license fee. Depending on factors such as time savings, the size of your development team or project revenues, please decide for yourself which license fee you consider to be appropriate. Please use the donate button below to make your payment. 

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JWFGDHPAKW6NL)

For questions send an email to [kendojssor@eiselt.com](mailto:kendojssor@eiselt.com).

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use kendo.jssor under the terms of the GPLv3.

## Usage
Documentation in progress...

### Header:
``` html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/jssor/jssor.slider.min.js"></script>
    <script type="text/javascript" src="scripts/kendo/kendo.ui.core.min.js"></script>
    <script type="text/javascript" src="scripts/jssor/kendo.jssor.all.min.js"></script>
```

### JQuery Syntax
[Demo](http://kendo.jssor.dotnetfire.net/demos/slides-only-min-options-jquery.html)
#### Html:
Your slider-&quot;&lt;div /&gt;&quot; only needs an id...
``` html
<div id="jssorDiv"></div>
```
#### Javascript:
For the minimum slider definition, you must specify an array of images as data source and the height and width of your slider container. 
``` js
var images = [ 
    { "image": "images/021.jpg" },
    { "image": "images/022.jpg" },
    { "image": "images/023.jpg" } ];

var options = {
    dataSource: images,
    autoBind: true,
    jssor: {
        container: { width: 980, height: 380 },
        }
    };
$("#jssorDiv").kendoJssor(options);
```
    
### MVVM

[Demo](http://kendo.jssor.dotnetfire.net/demos/slides-only-min-options-mvvm.html)

#### Html:
The data role for kendo.jssor is "jssor". Please note that the &quot;&lt;div /&gt;&quot;-element MUST have an id, because the Jssor Slider must be initialized with an element id. Use the "data-bind" attribute to assign imagedata (source: ...) and options (jssor: ...) fields of your ViewModel.
``` html
<div
    id="jssorDiv"
    data-role="jssor"
    data-bind="source: imagedata, jssor: jssorOptions"
    data-auto-bind="true"></div>
```
#### Javascript:
You need a ViewModel that contains the image data and the options. Bind the ViewModel with kendo.bind(...) to the jssor-&quot;&lt;div /&gt;&quot; or to a higher-level HTML element, such as document.body.
``` js
var viewModel = kendo.observable({
    isVisible: true,
    imagedata: [ 
        { "image": "images/021.jpg" },
        { "image": "images/022.jpg" },
        { "image": "images/023.jpg" }
    ],
    jssorOptions: {
        container: { width: 980, height: 380 }
    }
});
kendo.bind($("#jssorDiv"), viewModel);
```

### Navigation templates

#### Define with options:

[Demo](http://kendo.jssor.dotnetfire.net/demos/navigation-templates-inline.html)

``` js
    var jssoroptions = {
        dataSource: imagedata,
        autoBind: true,
        jssor: {
            container: { width: 980, height: 380 },
            bulletNavigation: {
                id: "jssorb032",
                cssClass: "#= id #-#= bulletNavigation.id #",
                name: "bullet skin 032 white",
                note: "",
                css: [
                    ".#= id #-#= bulletNavigation.id # {position:absolute;}",
                    ".#= id #-#= bulletNavigation.id # .i {position:absolute;cursor:pointer;}",
                    ".#= id #-#= bulletNavigation.id # .i .b {fill:\\#fff;fill-opacity:0.7;stroke:\\#000;stroke-width:1200;stroke-miterlimit:10;stroke-opacity:0.25;}",
                    ".#= id #-#= bulletNavigation.id # .i:hover .b {fill:\\#000;fill-opacity:.6;stroke:\\#fff;stroke-opacity:.35;}",
                    ".#= id #-#= bulletNavigation.id # .iav .b {fill:\\#000;fill-opacity:1;stroke:\\#fff;stroke-opacity:.35;}",
                    ".#= id #-#= bulletNavigation.id # .i.idn {opacity:.3;}"
                ],
                show: kendo.ui.jssor.ShowType.Always,
                itemWidth: 16, itemHeight: 16,
                horizontalOffset: 12, verticalOffset: 12,
                autoCenter: kendo.ui.jssor.AutocenterType.Horizontal,
                itemScale: 0.5, positionScale: 0.75,
                orientation: kendo.ui.jssor.OrientationType.Horizontal,
                svg: "<svg viewBox='0 0 16000 16000' style='position:absolute;top:0;left:0;width:100%;height:100%;'><circle class='b' cx='8000' cy='8000' r='5800' /></svg>"
            }
        }
    }
```

#### Load from URL:

[Demo](http://kendo.jssor.dotnetfire.net/demos/navigation-templates-inline.html)

You can load navigation templates from a file and override the default settings.

``` js
    var jssoroptions = {
        dataSource: imagedata,
        autoBind: true,
        jssor: {
            container: { width: 980, height: 380 },
            arrowNavigation: {
                // Arrow template from file:
                templateFile: "scripts/jssor/templates/arrow/arrow-skin-051-white.json",
                // Override default values:
                show: kendo.ui.jssor.ShowType.MouseOver, // <== Default is Always
                itemWidth: 70, // <== Default is 55
                itemHeight: 70 // <== Default is 55
            },
            bulletNavigation: {
                // Bullet template from file:
                templateFile: "scripts/jssor/templates/bullet/bullet-skin-031-black.json",
                // Override default values:
                itemWidth: 24, // <== Default is 16
                itemHeight: 24 // <== Default is 16
            }
        }
    }
```
### Slideshow with transitions

[Demo](http://kendo.jssor.dotnetfire.net/demos/slideshow-with-transitions.html)

``` js
var jssoroptions = {
        dataSource: imagedata,
        autoBind: true,
        jssor: {
            container: { width: 980, height: 380 },
            "slideshow": {
                enabled: true,
                order: kendo.ui.jssor.TransitionsOrderType.Random,
                showLink: false,
                transitions: [
                    {
                        name: "Fly Right Random",
                        transition: "{ $Duration: 500, x: 1, $Delay: 40, $Cols: 10, $Rows: 5, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 }"
                    },
                    {
                        name: "Dominoes Stripe",
                        transition: "{ $Duration: 1600, y: -1, $Delay: 40, $Cols: 24, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: $Jease$.$OutJump, $Round: { $Top: 1.5 } }"
                    }
                ]
            }
        }
    };
```

## Related
[Jssor Slider (Homepage)](https://www.jssor.com/)<br/>
[Jssor Slider (GitHub)](https://github.com/jssor/slider)<br/>
[Kendo UI Core](https://github.com/telerik/kendo-ui-core)

## Donate

kendo.jssor is open source, but it costs time and money to write and support it. Financial contributions enable the ongoing open source development of kendo.jssor. If you find this software useful and if you think you saved time, please consider making a donation. It will help me to add additional features and to invest time in documentation and support.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JWFGDHPAKW6NL)
