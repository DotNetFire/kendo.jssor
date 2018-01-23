# kendo.jssor

**Jssor Image Slider for Kendo UI Framework**

kendo.jssor is a custom Kendo widget to render slideshows / sliders /galleries or carousels with Jssor slider. The project was realized in Typescript, source code is included. In contrast to the static design of the Jssor slider kendo.jssor allows the dynamic binding of images and slider options. Please note that the Jssor slider does not provide any methods or mechanisms for dynamically adding slides or changing options. For this reason, the Jssor control is destroyed and rebuilt with every change.

## Demo
[http://kendo.jssor.dotnetfire.net/](http://kendo.jssor.dotnetfire.net/)

## Features

Feature description in progress...

:heavy_check_mark: Implemented features

:x: Features in Progress

| Feature | Status | Notes |
| :----- | :---: | :----------- |
| Jssor typescript definition | :heavy_check_mark: | This project contains a typescript definition file for Jssor slider. The [Definition file](typings/jssor/index.d.ts) is located in the folder [typings/jssor/](typings/jssor/). Definitions for the Jssor event methods are still missing. Please write an issue for further missing definitions... |
| Typescript | :heavy_check_mark: | kendo.jssor ist writen in typescript. The typescript source files are located in folder [typings/](typings/). |
| Databinding | :heavy_check_mark: |  Local or remote data binding for image data with automatic refresh when the data source changes (add remove image). 
| MVVM | :heavy_check_mark: | Model View ViewModel (MVVM) databinding. Allows binding of image data and slider options. |
| Slides | :heavy_check_mark: | Binding of image url, thumbnail url, caption, description and content (static / fixed HTML). The field names of the data item can be set by options |
| Skins | :heavy_check_mark: | Navigation and loading screen skins can be set via widget options. |
| JSON templates | :heavy_check_mark: | Loading of templates for navigation (arrow, bullet, thumbnail) and loading screen from JSON files (currently only synchronous loading when refreshing the widget). Default settings from the template can be overridden with the widget options. |
| Events | :x: | Currently allows the widget events change, dataBinding and dataBound. No Jssor events yet (e.g. $ EVT_CLICK, $ EVT_DRAG_START, ...)  |
| Slide layers | :x: | At the moment kendo.jssor does not allow slide layers and animations. |
| Unit Tests | :x: | No unit tests yet ... |
| ... | | |

## License

### Commercial license

If you want to use kendo.jssor to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. To purchase a kendo.jssor Commercial License send an email to [kendojssor@eiselt.com](mailto:kendojssor@eiselt.com).

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use kendo.jssor under the terms of the GPLv3.

## Usage
Documentation in progress...

### Header:
``` html
    <script type="text/javascript" src="scripts/jssor/jssor.slider.min.js"></script>
    <script type="text/javascript" src="scripts/kendo/kendo.ui.core.min.js"></script>
    <script type="text/javascript" src="scripts/jssor/kendo.jssor.all.min.js"></script>
```

### JQuery Syntax
#### Html:
``` html
<div id="jssorDiv"></div>
```
#### Javascript:
``` js
var images = [ 
    { "image": "images/021.jpg", "thumbnail": "images/021-s200x100.jpg", "caption": "Image 021", "description": "Image 021 description" },
    { "image": "images/022.jpg", "thumbnail": "images/022-s200x100.jpg", "caption": "Image 022", "description": "Image 022 description" },
    { "image": "images/023.jpg", "thumbnail": "images/023-s200x100.jpg", "caption": "Image 023", "description": "Image 023 description" } ];

var options = {
    dataSource: images,
    autoBind: true,
    jssor: {
                id: "jssor1",
                center: true,
                lazyLoading: true,
                numImages2Preload: 2,
                autoPlay: kendo.ui.jssor.AutoPlayType.Yes,
                autoPlaySteps: 1,
                loop: kendo.ui.jssor.LoopType.Yes,
                startSlide: 1,
                pauseOnHover: kendo.ui.jssor.PauseOnHoverType.PauseForDesktopAndTouch,
                dragOrientation: kendo.ui.jssor.DragOrientationType.Either,
                minDragOffsetToSlide: 3,
                keyboardNavigation: true,
                keyboardNavigationSteps: 1,
                container: { width: 980, height: 340 },
                slideContainer: { x: 0, y: 0 }
        }
    };
    $("#jssorDiv").kendoJssor(options);
```
    
### MVVM
#### Html:
``` html
<div
    id="jssorDiv"
    data-role="jssor"
    data-bind="source: imagedata, jssor: jssorOptions"
    data-auto-bind="true"></div>
```
#### Javascript:
``` js

var viewModel = kendo.observable({
    isVisible: true,
    imagedata: [ 
        { "image": "images/021.jpg", "thumbnail": "images/021-s200x100.jpg", "caption": "Image 021", "description": "Image 021 description" },
        { "image": "images/022.jpg", "thumbnail": "images/022-s200x100.jpg", "caption": "Image 022", "description": "Image 022 description" },
        { "image": "images/023.jpg", "thumbnail": "images/023-s200x100.jpg", "caption": "Image 023", "description": "Image 023 description" }
    ],
    jssorOptions: {
        id: "jssor1",
        center: true,
        lazyLoading: true,
        numImages2Preload: 2,
        autoPlay: kendo.ui.jssor.AutoPlayType.Yes,
        autoPlaySteps: 1,
        loop: kendo.ui.jssor.LoopType.Yes,
        startSlide: 1,
        pauseOnHover: kendo.ui.jssor.PauseOnHoverType.PauseForDesktopAndTouch,
        dragOrientation: kendo.ui.jssor.DragOrientationType.Either,
        minDragOffsetToSlide: 3,
        keyboardNavigation: true,
        keyboardNavigationSteps: 1,
        container: { width: 980, height: 340 },
        slideContainer: { x: 0, y: 0 }
    }
});
kendo.bind($("#jssorDiv"), viewModel);
```

## Related
[Jssor Slider](https://www.jssor.com/)<br/>
[Kendo UI Core](https://github.com/telerik/kendo-ui-core)

