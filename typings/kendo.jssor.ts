/// <reference path="jquery/jquery.d.ts" />
// ReSharper disable once DuplicateReferenceComment
/// <reference path="kendo/kendo.all.d.ts" />
/// <reference path="kendo/kendo.missing.d.ts" />
/// <reference path="jssor/index.d.ts" />
/// <reference path="kendo.jssor.options.ts" />
//Hell
"use strict";

// ReSharper disable once InconsistentNaming
module kendo.ui.jssor {

    // ReSharper disable InconsistentNaming
    var DATABINDING = "dataBinding",
        DATABOUND = "dataBound",
        CHANGE = "change",
        PROGRESS = 'progress',
        ERROR = 'error',
        // ReSharper disable once UnusedLocals
        NS = '.kendoJssor';
    // ReSharper restore InconsistentNaming


    //#region --[ widget options ]--
    export interface IKendoJssorOptions {
        name: string;

        /**
         * 
         */
        jssor?: IJssorTheme;


        //widget options
        // ReSharper disable once RedundantQualifier
        dataSource?: any | any[] | kendo.data.DataSource;
        autoBind: boolean;

        /**
         * The field of the data item that provides the image url of a slide.
         * The widget will filter the data source based on this field.
         */
        dataImageField?: string;

        /**
         * The field of the data item that provides the thumbnail url of a slide.
         * The widget will filter the data source based on this field.
         */
        dataThumbnailField?: string;
        dataCaptionField?: string;
        dataDescriptionField?: string;
        dataContentHtmlField?: string;
        dataTargetUrlField?: string;
    }

    /**
     * 
     * @param {Element} element
     * @param {IKendoJssorOptions} options?
     */
    export class KendoJssorOptions implements IKendoJssorOptions {
        public name: string = "Jssor";

        jssor: IJssorTheme = undefined;

        // ReSharper disable once RedundantQualifier
        public dataSource?: any | any | kendo.data.DataSource;
        public autoBind: boolean = true;

        public dataImageField?: string = "image";
        public dataThumbnailField?: string = "thumbnail";
        public dataCaptionField?: string = "caption";
        public dataDescriptionField?: string = "description";
        public dataContentHtmlField?: string;
        public dataTargetUrlField?: string;
    }

    //#endregion

    //#region --[ kendo Jssor widget ]--

    // ReSharper disable once RedundantQualifier
    export class Jssor extends kendo.ui.DataBoundWidget {
        //#region --[ fields ]--

        private slider: $JssorSlider$;
        private styleElement: JQuery;
        private sliderElement: JQuery;

        // ReSharper disable once RedundantQualifier
        private jssorOptions: kendo.data.ObservableObject = undefined;


        // ReSharper disable InconsistentNaming
        private _dataSourceBound: boolean;
        private _jssorOptionsBound: boolean;
        private _refreshHandler: Function;
        private _progressHandler: Function;
        private _errorHandler: Function;
        // ReSharper restore InconsistentNaming

        //#endregion

        //#region --[ ctor ]--

        constructor(element: Element, options?: IKendoJssorOptions) {
            super(element, $.extend(true, new KendoJssorOptions(), options));

            //#region --[ bind methods to instance ]--

            this.getOptions = this.getOptions.bind(this);
            this.setOptions = this.setOptions.bind(this);
            this.clearOptions = this.clearOptions.bind(this);
            this.fixOptions = this.fixOptions.bind(this);

            this.setJssorOptions = this.setJssorOptions.bind(this);
            this._unbindJssorOptions = this._unbindJssorOptions.bind(this);
            this._bindJssorOptions = this._bindJssorOptions.bind(this);

            this.initResponsiveScale = this.initResponsiveScale.bind(this);
            this.responsiveScaleSlider = this.responsiveScaleSlider.bind(this);
            this.renderSlices = this.renderSlices.bind(this);
            this.renderSliceTemplate = this.renderSliceTemplate.bind(this);
            this.renderThumbnailNavigation = this.renderThumbnailNavigation.bind(this);
            this.renderArrowNavigation = this.renderArrowNavigation.bind(this);
            this.renderBulletNavigation = this.renderBulletNavigation.bind(this);
            this.renderNavigationCss = this.renderNavigationCss.bind(this);
            this.renderNavigation = this.renderNavigation.bind(this);
            this.render = this.render.bind(this);
            this.unrender = this.unrender.bind(this);
            this.renderContainer = this.renderContainer.bind(this);
            this.items = this.items.bind(this);
            this.dataItem = this.dataItem.bind(this);
            this.refresh = this.refresh.bind(this);
            this.setDataSource = this.setDataSource.bind(this);

            this._unbindDataSource = this._unbindDataSource.bind(this);
            this._dataSource = this._dataSource.bind(this);
            this._progress = this._progress.bind(this);
            this._error = this._error.bind(this);
            this._initEventHandler = this._initEventHandler.bind(this);

            this.play = this.play.bind(this);
            this.isPlaying = this.isPlaying.bind(this);
            this.pause = this.pause.bind(this);
            this.goTo = this.goTo.bind(this);
            this.playTo = this.playTo.bind(this);
            this.next = this.next.bind(this);
            this.prev = this.prev.bind(this);
            this.scaleSize = this.scaleSize.bind(this);
            this.scaleWidth = this.scaleWidth.bind(this);
            this.scaleHeight = this.scaleHeight.bind(this);
            this.getScaledWidth = this.getScaledWidth.bind(this);
            this.getScaledHeight = this.getScaledHeight.bind(this);

            //#endregion

            $(element).data("kendoJssor", this);

            this.events.push(DATABINDING);
            this.events.push(DATABOUND);
            this.events.push(CHANGE);

            this._initEventHandler();
            this._dataSource();

        }


        // ReSharper disable once InconsistentNaming
        private _initEventHandler() {
            this._refreshHandler = $.proxy(this.refresh, this);
            this._progressHandler = $.proxy(this._progress, this);
            this._errorHandler = $.proxy(this._error, this);
        }

        //#endregion

        /**
         * @fn  public static getJsonFile(url: string): any
         *
         * @brief   Gets JSON file
         *
         * @author  Administrator
         * @date    19.01.2018
         *
         * @param   {string}    url URL of the document.
         *
         * @return  {any}   The JSON file.
         */

        public static getJsonFile(url: string): any {
            var result: any;
            $.ajax({
                url: url,
                dataType: 'json',
                data: {},
                async: false,
                success(json: any) {
                    result = json;
                }
            });
            return result;
        }


        //#region --[ options ]--

        public getOptions(): IKendoJssorOptions {
            return this.options;
        }

        public clearOptions(): void {
            this.options = new KendoJssorOptions();
        }

        /**
         * @fn  public setOptions(options: Object)
         *
         * @brief   Sets the options
         *
         * @author  Administrator
         * @date    19.01.2018
         *
         * @param   {Object}    options Options for controlling the operation.
         *
         * @return  .
         */

        public setOptions(options: Object) {
            var newoptions = $.extend(true, new KendoJssorOptions(), options);
            super.setOptions(newoptions);
            this.fixOptions();
            this.refresh();
        }

        private fixOptions(): void {

            var o = <IKendoJssorOptions>this.options;

            // make jssor options usable
            if (this.jssorOptions) {
                o.jssor = $.extend(true, defaults.jssorOptions(), this.jssorOptions);
            } else if (o.jssor) {
                o.jssor = $.extend(true, defaults.jssorOptions(), o.jssor);
            }

            var j = o.jssor;
            if (j) {
                if (!j.slideContainer.width) {
                    j.slideContainer.width = j.container.width;
                }
                if (!j.slideContainer.height) {
                    j.slideContainer.height = j.container.height;
                }

                if (!j.id) {
                    j.id = this.element.attr("id");
                }

                if (j.bulletNavigation) {
                    if (j.bulletNavigation.templateFile) {
                        var bt = Jssor.getJsonFile(j.bulletNavigation.templateFile);
                        j.bulletNavigation = $.extend(true, bt, j.bulletNavigation);
                    }
                    j.bulletNavigation = $.extend(true, defaults.bullet(), j.bulletNavigation);
                }


                if (j.arrowNavigation) {
                    if (j.arrowNavigation.templateFile) {
                        var at = Jssor.getJsonFile(j.arrowNavigation.templateFile);
                        j.arrowNavigation = $.extend(true, at, j.arrowNavigation);
                    }
                    j.arrowNavigation = $.extend(true, defaults.arrow(), j.arrowNavigation);
                }

                if (j.thumbnailNavigation) {
                    if (j.thumbnailNavigation.templateFile) {
                        var tt = Jssor.getJsonFile(j.thumbnailNavigation.templateFile);
                        j.thumbnailNavigation = $.extend(true, tt, j.thumbnailNavigation);
                    }
                    j.thumbnailNavigation = $.extend(true, defaults.thumbnail(), j.thumbnailNavigation);
                    if (this.notSet(j.thumbnailNavigation.width)) {
                        j.thumbnailNavigation.width = j.container.width;
                    }
                    if (this.notSet(j.thumbnailNavigation.height)) {
                        j.thumbnailNavigation.height = j.container.height;
                    }

                    if (this.notSet(j.thumbnailNavigation.top) && this.notSet(j.thumbnailNavigation.bottom)) {
                        j.thumbnailNavigation.bottom = 0;
                    }
                    if (this.notSet(j.thumbnailNavigation.left) && this.notSet(j.thumbnailNavigation.right)) {
                        j.thumbnailNavigation.right = 0;
                    }
                }
            }
        }

        private static mapEasing(easeType: EaseType): Function {
            switch (easeType) {
                case EaseType.Swing:
                    return $Jease$.$Swing;
                case EaseType.Linear:
                    return $Jease$.$Linear;
                case EaseType.InQuad:
                    return $Jease$.$InQuad;
                case EaseType.OutQuad:
                    return $Jease$.$OutQuad;
                case EaseType.InOutQuad:
                    return $Jease$.$InOutQuad;
                case EaseType.InCubic:
                    return $Jease$.$InCubic;
                case EaseType.OutCubic:
                    return $Jease$.$OutCubic;
                case EaseType.InOutCubic:
                    return $Jease$.$InOutCubic;
                case EaseType.InQuart:
                    return $Jease$.$InQuart;
                case EaseType.OutQuart:
                    return $Jease$.$OutQuart;
                case EaseType.InOutQuart:
                    return $Jease$.$InOutQuart;
                case EaseType.InQuint:
                    return $Jease$.$InQuint;
                case EaseType.OutQuint:
                    return $Jease$.$OutQuint;
                case EaseType.InOutQuint:
                    return $Jease$.$InOutQuint;
                case EaseType.InSine:
                    return $Jease$.$InSine;
                case EaseType.OutSine:
                    return $Jease$.$OutSine;
                case EaseType.InOutSine:
                    return $Jease$.$InOutSine;
                case EaseType.InExpo:
                    return $Jease$.$InExpo;
                case EaseType.OutExpo:
                    return $Jease$.$OutExpo;
                case EaseType.InOutExpo:
                    return $Jease$.$InOutExpo;
                case EaseType.InCirc:
                    return $Jease$.$InCirc;
                case EaseType.OutCirc:
                    return $Jease$.$OutCirc;
                case EaseType.InOutCirc:
                    return $Jease$.$InOutCirc;
                case EaseType.InElastic:
                    return $Jease$.$InElastic;
                case EaseType.OutElastic:
                    return $Jease$.$OutElastic;
                case EaseType.InOutElastic:
                    return $Jease$.$InOutElastic;
                case EaseType.InBack:
                    return $Jease$.$InBack;
                case EaseType.OutBack:
                    return $Jease$.$OutBack;
                case EaseType.InOutBack:
                    return $Jease$.$InOutBack;
                case EaseType.InBounce:
                    return $Jease$.$InBounce;
                case EaseType.OutBounce:
                    return $Jease$.$OutBounce;
                case EaseType.InOutBounce:
                    return $Jease$.$InOutBounce;
                case EaseType.GoBack:
                    return $Jease$.$GoBack;
                case EaseType.InWave:
                    return $Jease$.$InWave;
                case EaseType.OutWave:
                    return $Jease$.$OutWave;
                case EaseType.OutJump:
                    return $Jease$.$OutJump;
                case EaseType.InJump:
                    return $Jease$.$InJump;
                case EaseType.Early:
                    return $Jease$.$Early;
                case EaseType.Late:
                    return $Jease$.$Late;
                default:
                    return null;
            }
        }


        private convertOptions(options: IKendoJssorOptions): IJssorOptions {
            var result: IJssorOptions = {};

            var jssor = options.jssor;

            if (!this.notSet(jssor.autoPlay)) {
                result.$AutoPlay = jssor.autoPlay;
            }
            if (!this.notSet(jssor.autoPlaySteps)) {
                result.$AutoPlaySteps = jssor.autoPlaySteps;
            }
            if (!this.notSet(jssor.loop)) {
                result.$Loop = jssor.loop;
            }
            if (!this.notSet(jssor.startSlide)) {
                result.$StartIndex = jssor.startSlide;
            }
            if (!this.notSet(jssor.pauseOnHover)) {
                result.$PauseOnHover = jssor.pauseOnHover;
            }
            if (!this.notSet(jssor.dragOrientation)) {
                result.$DragOrientation = jssor.dragOrientation;
            }
            if (!this.notSet(jssor.minDragOffsetToSlide)) {
                result.$MinDragOffsetToSlide = jssor.minDragOffsetToSlide;
            }
            if (!this.notSet(jssor.keyboardNavigation)) {
                result.$ArrowKeyNavigation = jssor.keyboardNavigationSteps ? jssor.keyboardNavigationSteps : 1;
            } else {
                result.$ArrowKeyNavigation = 0;
            }

            if (!this.notSet(jssor.slide.width)) {
                result.$SlideWidth = jssor.slide.width;
            }
            if (!this.notSet(jssor.slide.height)) {
                result.$SlideHeight = jssor.slide.height;
            }
            if (!this.notSet(jssor.slide.columns)) {
                result.$Cols = jssor.slide.columns;
            }
            if (!this.notSet(jssor.slide.spacing)) {
                result.$SlideSpacing = jssor.slide.spacing;
            }
            if (!this.notSet(jssor.slide.align)) {
                result.$Align = jssor.slide.align;
            }
            if (!this.notSet(jssor.slide.orientation)) {
                result.$PlayOrientation = jssor.slide.orientation;
            }
            if (!this.notSet(jssor.slide.fillmode)) {
                result.$FillMode = jssor.slide.fillmode;
            }
            if (!this.notSet(jssor.idle)) {
                result.$Idle = jssor.idle;
            }
            if (!this.notSet(jssor.duration)) {
                result.$SlideDuration = jssor.duration;
            }
            if (!this.notSet(jssor.ease)) {
                result.$SlideEasing = Jssor.mapEasing(jssor.ease);
            }
            if (!this.notSet(jssor.lazyLoading)) {
                result.$LazyLoading = jssor.numImages2Preload ? jssor.numImages2Preload : 1;
            }

            var s: ISlideshow = jssor.slideshow;
            if (!this.notSet(s) && s.enabled) {

                var transitions: IJssorTransition[] = [];
                if (s.transitions.length > 0) {
                    s.transitions.forEach(v => {
                        eval(`window["$$$$t"] = ${v.transition};`);
                        transitions.push(window["$$$$t"]);
                    });
                    window["$$$$t"] = undefined;
                }
                result.$SlideshowOptions = {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: transitions,
                    $TransitionsOrder: s.order,
                    $ShowLink: s.showLink
                };
            }

            var a = jssor.arrowNavigation;
            if (!this.notSet(a)) {
                result.$ArrowNavigatorOptions = {
                    $Class: $JssorArrowNavigator$,
                    $ChanceToShow: a.show
                }
                if (a.steps) {
                    result.$ArrowNavigatorOptions.$Steps = a.steps;
                }
            }

            var b = jssor.bulletNavigation;
            if (!this.notSet(b)) {
                result.$BulletNavigatorOptions = {
                    $Class: $JssorBulletNavigator$,
                    $ChanceToShow: b.show
                };
                if (b.spacingX) {
                    result.$BulletNavigatorOptions.$SpacingX = b.spacingX;
                }
                if (b.spacingY) {
                    result.$BulletNavigatorOptions.$SpacingY = b.spacingY;
                }
                if (b.steps) {
                    result.$BulletNavigatorOptions.$Steps = b.steps;
                }
                if (b.rows) {
                    result.$BulletNavigatorOptions.$Rows = b.rows;
                }
                if (b.orientation) {
                    result.$BulletNavigatorOptions.$Orientation = b.orientation;
                }
                if (b.action) {
                    result.$BulletNavigatorOptions.$ActionMode = b.action;
                }
            }

            var t = jssor.thumbnailNavigation;
            if (!this.notSet(t)) {
                result.$ThumbnailNavigatorOptions = {
                    $Class: $JssorThumbnailNavigator$,
                    $ChanceToShow: t.show
                };

                if (!this.notSet(t.spacingX)) {
                    result.$ThumbnailNavigatorOptions.$SpacingX = t.spacingX;
                }
                if (!this.notSet(t.spacingY)) {
                    result.$ThumbnailNavigatorOptions.$SpacingY = t.spacingY;
                }
                if (!this.notSet(t.rows)) {
                    result.$ThumbnailNavigatorOptions.$Rows = t.rows;
                }
                if (!this.notSet(t.orientation)) {
                    result.$ThumbnailNavigatorOptions.$Orientation = t.orientation;
                }
                if (!this.notSet(t.action)) {
                    result.$ThumbnailNavigatorOptions.$ActionMode = t.action;
                }
                result.$ThumbnailNavigatorOptions.$Loop = t.loop ? 1 : 0;
                if (!this.notSet(t.align)) {
                    result.$ThumbnailNavigatorOptions.$Align = t.align;
                }
                result.$ThumbnailNavigatorOptions.$NoDrag = this.notSet(t.noDrag) ? false : t.noDrag;
            }

            return result;
        }

        //#endregion

        //#region --[ jssor options ]--

        public setJssorOptions(joptions: any, doRefresh: boolean = true) {
            this._bindJssorOptions(joptions);
            if (doRefresh) {
                this.refresh();
            }
        }

        // ReSharper disable once InconsistentNaming
        private _unbindJssorOptions() {
            if (this.jssorOptions && this._jssorOptionsBound) {
                this.jssorOptions.unbind(CHANGE, this._refreshHandler);
            }
            this._jssorOptionsBound = false;
        }

        // ReSharper disable once InconsistentNaming
        private _bindJssorOptions(joptions: any) {
            if (this.jssorOptions && this._jssorOptionsBound) {
                this._unbindJssorOptions();
            }
            this.jssorOptions = undefined;

            if (joptions) {
                // ReSharper disable once RedundantQualifier
                if (!(joptions instanceof kendo.data.ObservableObject)) {
                    // ReSharper disable once RedundantQualifier
                    this.jssorOptions = new kendo.data.ObservableObject(joptions);
                } else {
                    // ReSharper disable once RedundantQualifier
                    this.jssorOptions = <kendo.data.ObservableObject>joptions;
                }

                this.jssorOptions.bind(CHANGE, this._refreshHandler);
                this._jssorOptionsBound = true;
            }

        }

        //#endregion

        //#region --[ responsive ]--

        private initResponsiveScale(): void {
            var j = <IJssorTheme>this.options.jssor;

            $(window).unbind("load", this.responsiveScaleSlider);
            $(window).unbind("resize", this.responsiveScaleSlider);
            $(window).unbind("orientationchange", this.responsiveScaleSlider);

            if (j.responsive && j.responsive.scaleTo !== ResponsiveScaleType.NoScale) {
                this.responsiveScaleSlider();
                $(window).bind("load", this.responsiveScaleSlider);
                $(window).bind("resize", this.responsiveScaleSlider);
                $(window).bind("orientationchange", this.responsiveScaleSlider);
            }
        }

        //TODO: private ??
        public responsiveScaleSlider(): void {
            var r = (<IJssorTheme>this.options.jssor).responsive;
            var el = this.element[0];
            var sel = this.sliderElement[0];
            var p = el.parentElement;
            if (r && p && this.slider) {
                if (p.clientWidth) {
                    var oW: number = this.slider.$OriginalWidth();
                    var oH: number = this.slider.$OriginalHeight();
                    var w: number = p.clientWidth || oW;
                    var h: number = p.clientHeight || oH;
                    var eW: number = Math.min(r.maxWidth || w, w);
                    var eH: number = Math.min(r.maxHeight || h, h);
                    var b: number = r.blending ? r.blending : 1;
                    switch (r.scaleTo) {
                        case ResponsiveScaleType.ParentWidth:
                            this.slider.$ScaleWidth(Math.min(r.maxWidth || w, w));
                            sel.style.top = sel.style.left = "0";
                            break;
                        case ResponsiveScaleType.ParentHeight:
                            this.slider.$ScaleHeight(Math.min(r.maxHeight || h, h));
                            sel.style.top = sel.style.left = "0";
                            break;
                        case ResponsiveScaleType.ParentSizeCover: //TODO
                        case ResponsiveScaleType.WindowSizeFlex:
                            this.slider.$ScaleSize(eW, eH, b);
                            sel.style.top = `${(h - eH) / 2}px`;
                            sel.style.left = `${(w - eW) / 2}px`;
                            break;
                        case ResponsiveScaleType.ParentSizeConstrain: //TODO
                        case ResponsiveScaleType.WindowSizeConstrain:
                            //constrain bullets, arrows inside slider area, it's optional, remove it if not necessary
                            if (b >= 0 && b < 1) {
                                var wR = eW / oW;
                                var hR = eH / oH;
                                var maxScaleRatio = Math.max(wR, hR);
                                var minScaleRatio = Math.min(wR, hR);

                                maxScaleRatio = Math.min(maxScaleRatio / minScaleRatio, 1 / (1 - b)) * minScaleRatio;
                                eW = Math.min(eW, oW * maxScaleRatio);
                                eH = Math.min(eH, oH * maxScaleRatio);
                            }
                            this.slider.$ScaleSize(eW, eH, b);
                            sel.style.top = `${(h - eH) / 2}px`;
                            sel.style.left = `${(w - eW) / 2}px`;
                            break;
                    }
                } else {
                    window.setTimeout(this.responsiveScaleSlider, 30);
                }

            }
        }

        //#endregion

        //#region --[ render ]--
        private unrender(): void {
            this.element.empty();
        }

        private render(): void {

            this.renderContainer();
            this.renderLoading();
            this.renderSlices();
            this.renderNavigation();

            // build or rebuild jssor class
            var jOptions = this.convertOptions(this.options);
            this.slider = new $JssorSlider$(this.sliderElement.attr("id"), jOptions);
            this.element.css("visibility", "visible");
            this.initResponsiveScale();
        }

        //#region --[ render container ]--

        private renderContainer(): void {
            var j = <IJssorTheme>this.options.jssor;

            this.styleElement = $(`<style id='${j.id}-style' type='text/css'> </style>`);
            //this.styleElement.insertBefore(this.element);
            this.element.append(this.styleElement);

            var center = j.center ? "margin:0 auto;" : "";
            var bgColor = j.container.bgColor ? `background-color:${j.container.bgColor};` : "";

            this.sliderElement = $(`
<div id="${j.id}-container" style="${center}position:relative;top:0;left:0;width:${j.container.width}px;height:${
                j.container.height}px;overflow:hidden; ${bgColor}"></div>`);

            this.element.append(this.sliderElement);
        }

        //#endregion
        // 
        //#region --[ render slices ]--

        private renderSlices(): void {

            var o = (<IJssorTheme>this.options.jssor).slideContainer;
            var slices =
                $(`<div u="slides" style="cursor:default;position:relative;top:${o.y}px;left:${o.x}px;width:${o.width
                    }px;height:${o.height}px;overflow:hidden;"></div>`);

            //build slide an apply template
            var template = this.renderSliceTemplate();

            //bind data to slices:
            var view: any[] = <any[]><any>this.dataSource.view();
            var html = kendo.render(template, view);
            slices.html(html);
            this.sliderElement.append("\n");
            this.sliderElement.append(slices);
        }

        private renderSliceTemplate(): (data: any) => string {
            var o = <IKendoJssorOptions>this.options;
            var j = <IJssorTheme>this.options.jssor;
            var imgSrc: string = j.lazyLoading ? " src2" : " src";

            var aOpen: string = "";
            var aClose: string = "";
            if (o.dataTargetUrlField) {
                aOpen = `<a href='#= data.${o.dataTargetUrlField}#' >`;
                aClose = "</a>";
            }

            var content: string = "";
            if (o.dataContentHtmlField) {
                content = `
#= data.${o.dataContentHtmlField}#`;
            }
            var thumbnail: string = "";
            if (j.thumbnailNavigation) {
                thumbnail = !this.notSet(j.thumbnailNavigation.itemHtml)
                    ? "\n" +
                    kendo.format(kendo.template(j.thumbnailNavigation.itemHtml)(j),
                        `#= data.${o.dataThumbnailField}#`,
                        `#= data.${o.dataCaptionField}#`,
                        `#= data.${o.dataDescriptionField}#`)
                    : "";
            }

            var dataUid: string = ` ${kendo.attr("uid")}="#= data.uid #"`;
            var templateStr = `
<div>${aOpen}<img data-u="image"${dataUid}${imgSrc}="#= data.${o.dataImageField}#" />${aClose}${thumbnail}${content
                }</div>`;
            return kendo.template(templateStr);

        }

        //#endregion

        //#region --[ render loading ]--

        private renderLoading(): void {
            var j = <IJssorTheme>this.options.jssor;
            var l = j.loading;

            if (l) {
                this.renderNavigationCss(l);

                var lClass: string = l.cssClass ? `class="${kendo.template(l.cssClass)(j)}"` : "";
                var bSvg: string = l.svg ? kendo.template(l.svg)(j) : "";
                var bgColor: string = l.bgColor ? `background-color:${l.bgColor};` : "";
                var zindex: string = (j.debugLoading) ? "z-index:255;" : "";
                var datau: string = `loading${(j.debugLoading) ? "D" : ""}`;
                //TODO: Always bottom / right ???
                var wh: string = (j.debugLoading) ? "bottom:0px;right:0px;" : "width:100%;height:100%;";

                var template: string = `
    <div data-u="${datau}" ${lClass} style="position:absolute;top:0px;left:0px;${wh}text-align:center;${bgColor}${
                    zindex}">
        ${bSvg}
    </div>`;
                this.sliderElement.append(template);
            }
        }

        //#endregion

        //#region --[ render navigation templates ]--

        private renderArrowNavigation(): void {
            var j = <IJssorTheme>this.options.jssor;
            var a = j.arrowNavigation;

            if (a) {

                this.renderNavigationCss(a);

                var dAutocenter: string = "";
                var dItemScale: string = "";
                var dPositionScaleLeft = "";
                var dPositionScaleRight = "";
                if (a.autoCenter) {
                    dAutocenter = ` data-autocenter="${a.autoCenter}"`;
                }
                if (a.itemScale) {
                    dItemScale = ` data-scale="${a.itemScale}"`;
                }
                if (a.positionScale) {
                    dPositionScaleLeft = ` data-scale-left="${a.positionScale}"`;
                    dPositionScaleRight = ` data-scale-right="${a.positionScale}"`;
                }
                var lClass: string = a.leftArrow.cssClass ? `class="${kendo.template(a.leftArrow.cssClass)(j)}"` : "";
                var rClass: string = a.leftArrow.cssClass ? `class="${kendo.template(a.rightArrow.cssClass)(j)}"` : "";

                var lSvg = a.leftArrow.svg ? kendo.template(a.leftArrow.svg)(j) : "";
                var rSvg = a.rightArrow.svg ? kendo.template(a.rightArrow.svg)(j) : "";

                var lArrow: string = `
<div data-u="arrowleft" ${lClass} style="width:${a.itemWidth}px;height:${a.itemHeight}px;top:${
                    a.leftArrow.verticalOffset}px;left:${a.leftArrow.horizontalOffset}px;"${dAutocenter}${dItemScale}${
                    dPositionScaleLeft}>
    ${lSvg}
</div>`;
                var rArrow: string = `
<div data-u="arrowright" ${rClass} style="width:${a.itemWidth}px;height:${a.itemHeight}px;top:${
                    a.rightArrow.verticalOffset}px;right:${a.rightArrow.horizontalOffset}px;"${dAutocenter}${dItemScale
                    }${dPositionScaleRight}>
    ${rSvg}
</div>`;

                this.sliderElement.append(lArrow);
                this.sliderElement.append(rArrow);
            }
        }

        private renderBulletNavigation(): void {

            var j = <IJssorTheme>this.options.jssor;
            var b = j.bulletNavigation;

            if (b) {
                this.renderNavigationCss(b);

                var dAutocenter: string = "";
                var dItemScale: string = "";
                var dPositionScale: string = "";
                if (b.autoCenter) {
                    dAutocenter = ` data-autocenter="${b.autoCenter}"`;
                }
                if (b.itemScale) {
                    dItemScale = ` data-scale="${b.itemScale}"`;
                }
                if (b.positionScale) {
                    dPositionScale = ` data-scale-right="${b.positionScale}"`;
                }

                var fontsize = b.fontSize ? `font-size:${b.fontSize}px;` : "";
                var lineHeight = b.lineHeight ? `line-height:${b.lineHeight}px;` : "";

                var bClass: string = b.cssClass ? `class="${kendo.template(b.cssClass)(j)}"` : "";
                var bSvg: string = b.svg ? kendo.template(b.svg)(j) : "";

                var bullet = `
    <div data-u="navigator" ${bClass} style="position:absolute;bottom:${b.verticalOffset}px;right:${b.horizontalOffset
                    }px;"${dAutocenter}${dItemScale}${dPositionScale}>
        <div data-u="prototype" class="i" style="width:${b.itemWidth}px;height:${b.itemHeight}px;${fontsize}${
                    lineHeight}">
            ${bSvg}
        </div>
    </div>`;

                this.sliderElement.append(bullet);
            }
        }

        private renderThumbnailNavigation(): void {

            var j = <IJssorTheme>this.options.jssor;
            var t = j.thumbnailNavigation;

            if (t) {
                this.renderNavigationCss(t);
                var tClass: string = t.cssClass ? `class="${kendo.template(t.cssClass)(j)}"` : "";

                var bgColor = t.bgColor ? `background-color:${t.bgColor};` : "";

                var width = !this.notSet(t.width) ? `width:${t.width}px;` : "";
                var height = !this.notSet(t.height) ? `height:${t.height}px;` : "";
                var top = !this.notSet(t.top) ? `top:${t.top}px;` : "";
                var bottom = !this.notSet(t.bottom) ? `bottom:${t.bottom}px;` : "";
                var left = !this.notSet(t.left) ? `left:${t.left}px;` : "";
                var right = !this.notSet(t.right) ? `right:${t.right}px;` : "";
                var autocenter = !this.notSet(t.autoCenter) ? ` data-autocenter="${t.autoCenter}"` : "";

                var dPositionScale = "";
                if (!this.notSet(t.positionScale)) {
                    var scaleWhere: string[] = [];
                    var autocentertype: AutocenterType = (t.autoCenter !== undefined && t.autoCenter !== null)
                        ? t.autoCenter
                        : AutocenterType.None;
                    switch (autocentertype) {
                        case AutocenterType.None:
                            if (top) {
                                scaleWhere.push("top");
                            } else if (bottom) {
                                scaleWhere.push("bottom");
                            }
                            if (left) {
                                scaleWhere.push("left");
                            } else if (right) {
                                scaleWhere.push("right");
                            }
                            break;
                        case AutocenterType.Vertical:
                            if (top) {
                                scaleWhere.push("top");
                            } else if (bottom) {
                                scaleWhere.push("bottom");
                            }
                            break;
                        case AutocenterType.Horizontal:
                            if (left) {
                                scaleWhere.push("left");
                            } else if (right) {
                                scaleWhere.push("right");
                            }
                            break;
                    }
                    scaleWhere.forEach(v => {
                        dPositionScale += ` data-scale-${v}="${t.positionScale}"`;
                    });
                }
                var itemWidth = t.itemWidth !== undefined && t.itemWidth !== null ? `width:${t.itemWidth}px;` : "";
                var itemHeight = t.itemHeight !== undefined && t.itemHeight !== null ? `height:${t.itemHeight}px;` : "";

                var tSvg: string = t.svg ? kendo.template(t.svg)(j) : "";


                var thumbnail = `
<div data-u="thumbnavigator" ${tClass} style="position:absolute;${left}${right}${top}${bottom}${width}${height}${
                    bgColor}"${autocenter}${dPositionScale}>
    <div data-u='slides'>
        <div data-u="prototype" class="p" style="${itemWidth}${itemHeight}">
            <div data-u="thumbnailtemplate" class="t"></div>
            ${tSvg}
        </div>
    </div>
</div>`;
                this.sliderElement.append(thumbnail);
            }
        }

        private renderNavigationCss(nav: ITemplateBase): void {
            var that = this;
            if (nav) {
                if (nav.css) {
                    this.styleElement.append("\n");
                    nav.css.forEach((v) => {
                        that.styleElement.append(kendo.template(v)(this.options.jssor) + "\n");
                    });
                }
            }
        }

        private renderNavigation(): void {
            this.renderThumbnailNavigation();
            this.renderBulletNavigation();
            this.renderArrowNavigation();
        };

        //#endregion

        //#endregion

        //#region --[ wdget implementations ]--

        /**
         *  Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
         * @fn  public items(): JQuery
         *
         * @brief   Obtains an Array of the DOM elements, which correspond to the data items from the
         *          Kendo UI DataSource view.
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @return  {JQuery}    The currently rendered slider items (<div> elements as JQuery).
         */

        public items(): JQuery {
            return !this.notSet(this.sliderElement)
                ? this.sliderElement.children("div[u='slides']").children()
                : $([]);
        }

        /**
         * Returns the data item at the specified index. If the index is not specified, the current index will be used.
         * @fn  public dataItem(index: number | JQuery | Element): kendo.data.ObservableObject
         *
         * @brief   Returns the data item at the specified index. If the index is not specified, the current index will be used.
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @param   {number | JQuery | Element} index   Zero-based index of the.
         *
         * @return  {kendo.data.ObservableObject}   Data item for index, Element or current index (if index is undefined)
         */

        public dataItem(
            // ReSharper disable once RedundantQualifier
            index: number | JQuery | Element): kendo.data.ObservableObject {

            // ReSharper disable once RedundantQualifier
            var dataItem: kendo.data.ObservableObject = null;

            if (!this.notSet(index)) {
                if (typeof index !== "number") {
                    var attr: string = kendo.attr("uid");
                    var element: JQuery = $(index);
                    var uid = $(element).closest(`[${attr}]`).attr(attr);
                    dataItem = this.dataSource.getByUid(uid);
                } else {
                    dataItem = this.dataSource.at(index);
                }
            } else if (index === undefined && !this.notSet(this.slider)) {
                dataItem = this.dataSource.at(this.slider.$CurrentIndex());
            }
            return dataItem;
        }

        /**
         * Refresh the slider by destroying and recreation of Jssor slider and element content
         * @fn  public refresh(): void
         *
         * @brief   Refresh the slider by destroying and recreation of Jssor slider and element content
         *
         * @author  Administrator
         * @date    20.01.2018
         */

        public refresh(): void {
            this.fixOptions();
            if (this.options.jssor) {

                // trigger the dataBinding event
                this.trigger(DATABINDING);

                // mutate the DOM (AKA build the widget UI)
                this.unrender();
                this.render();

                // trigger the dataBound event
                this.trigger(DATABOUND);
            }
        };

        //#endregion

        //#region --[ datasource ]--

        /**
         * Sets the dataSource of an existing Jssor slider and rebinds it.
         * @fn  public setDataSource(dataSource: any): void
         *
         * @brief   Sets the dataSource of an existing Jssor slider and rebinds it.
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @param   {any}   dataSource  New data source to use.
         */

        public setDataSource(dataSource: any): void {
            // ReSharper restore RedundantQualifier
            this.options.dataSource = dataSource;
            this._dataSource();
        }

        // ReSharper disable once InconsistentNaming
        private _unbindDataSource(): void {
            try {
                if (this.dataSource) {
                    this.dataSource
                        .unbind(CHANGE, this._refreshHandler)
                        .unbind(PROGRESS, this._progressHandler)
                        .unbind(ERROR, this._errorHandler);
                }
            } catch (e) {
                console.log(e);
            }
            this._dataSourceBound = false;
        }

        // ReSharper disable once InconsistentNaming
        private _dataSource(): void {
            var o = <IKendoJssorOptions>this.options;

            // if the DataSource is defined and the _refreshHandler is wired up, unbind because
            // we need to rebuild the DataSource
            if (this.dataSource) {
                if (this._dataSourceBound) {
                    this._unbindDataSource();
                }
                this.dataSource = undefined;
            }

            //if (o.dataSource) {
            // returns the datasource OR creates one if using array or configuration object
            // ReSharper disable once RedundantQualifier
            this.dataSource = kendo.data.DataSource.create(o.dataSource);
            //this.dataSource.add(o.dataSource);
            // bind to the change event to refresh the widget
            this.dataSource
                .bind(CHANGE, this._refreshHandler)
                .bind(PROGRESS, this._progressHandler)
                .bind(ERROR, this._errorHandler);
            this._dataSourceBound = true;
            //}

            if (this.dataSource && o.autoBind) {
                this.dataSource.fetch();
            }

        }

        // ReSharper disable once InconsistentNaming
        private _progress(): void {
            progress(this.element, true);
        }

        // ReSharper disable once InconsistentNaming
        private _error() {
            progress(this.element, false);
        }

        /**
         * Prepares the Jssor slider for safe removal from DOM. Detaches all event handlers and
         * removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any
         * child Kendo widgets. This method does not remove the Slider element from DOM.
         * 
         * @fn  public destroy()
         *
         * @brief   Prepares the Jssor slider for safe removal from DOM. Detaches all event handlers and
         *          removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any
         *          child Kendo widgets. This method does not remove the Slider element from DOM.
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @return  .
         */

        public destroy() {
            Widget.fn.destroy.call(this);
            this._unbindDataSource();
            //this.element.off(NS);
            kendo.destroy(this.element);
        }

        private notSet(value: any): boolean {
            return value === null || value === undefined;
        }
/*
        TODO: value binding???
        value(): string;
        value(value: string): void;
*/
        //#endregion


        //#region --[ Jsssor functions ]--

        /**
         * Start auto play if the slider is currently paused
         *
         * @fn  public play(playType?: AutoPlayType): void
         *
         * @brief   Start auto play if the slider is currently paused
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @param   {AutoPlayType}  playType    (Optional) Type of auto play.
         */

        public play(playType?: AutoPlayType): void {
            if (this.slider) {
                if (this.notSet(playType)) {
                    this.slider.$Play();
                } else {
                    this.slider.$AutoPlay(playType);
                }
            }
        }

        /**
         * Get auto play status of the slider
         *
         * @fn  public isPlaying(): boolean
         *
         * @brief  Get auto play status of the slider
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @return  {boolean}   True if playing, false if not.
         */

        public isPlaying(): boolean {
            if (this.slider) {
                return this.slider.$AutoPlay();
            }
            return false;
        }

        /**
         * Pause the slider, prevent it from auto playing
         *
         * @fn  public pause() : void
         *
         * @brief   Pause the slider, prevent it from auto playing
         *
         * @author  Administrator
         * @date    19.01.2018
         */

        public pause(): void {
            if (this.slider) {
                this.slider.$Pause();
            }
        }

        /**
         * lay slider to position "slideIndex" within a period calculated base on "slideDuration"
         *
         * @fn  public playTo(slideIndex: number, slideDuration?: number): void
         *
         * @brief   Play slider to position "slideIndex" within a period calculated base on
         *          "slideDuration"
         *
         * @author  Administrator
         * @date    19.01.2018
         *
         * @param   {number}    slideIndex      Zero-based index of the slide.
         * @param   {number}    slideDuration   (Optional) Time in milliseconds to slide to target
         *                                      position.
         */

        public playTo(slideIndex: number, slideDuration?: number): void {
            if (this.slider) {
                this.slider.$PlayTo(slideIndex, slideDuration);
            }
        }

        /**
         *  Go to the specifed slide immediately with no play
         *
         * @fn  public goTo(slideIndex: number): void
         *
         * @brief   Go to the specifed slide immediately with no play
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @param   {number}    slideIndex  Zero-based index of the slide.
         */

        public goTo(slideIndex: number): void {
            if (this.slider) {
                this.slider.$GoTo(slideIndex);
            }
        }

        /**
         * Play the slider to next slide
         *
         * @fn  public next(): void
         *
         * @brief   Play the slider to next slide
         *
         * @author  Administrator
         * @date    20.01.2018
         */

        public next(): void {
            if (this.slider) {
                this.slider.$Next();
            }
        }

        /**
         * Play the slider to previous slide
         *
         * @fn  public prev(): void
         *
         * @brief   Play the slider to previous slide
         *
         * @author  Administrator
         * @date    20.01.2018
         */

        public prev(): void {
            if (this.slider) {
                this.slider.$Prev();
            }
        }

        /**
         * Scale the slider to exact size
         *
         * @fn  public scaleSize(width: number, height: number, blending?: number): void
         *
         * @brief   Scale the slider to exact size
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @param   {number}    width       new width of slider container.
         * @param   {number}    height      new height of slider container.
         * @param   {number}    blending    (Optional) blending.
         */

        public scaleSize(width: number, height: number, blending?: number): void {
            if (this.slider) {
                this.slider.$ScaleSize(width, height, blending);
            }
        }

        /**
         * Scale the slider to new width and keep aspect ratio
         *
         * @fn  public scaleWidth(width: number): void
         *
         * @brief   Scale the slider to new width and keep aspect ratio
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @param   {number}    width   New width of slider container.
         */

        public scaleWidth(width: number): void {
            if (this.slider) {
                this.slider.$ScaleWidth(width);
            }
        }

        /**
         * Scale the slider to new height and keep aspect ratio
         * 
         * @fn  public scaleHeight(height: number): void
         *
         * @brief   Scale the slider to new height and keep aspect ratio
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @param   {number}    height  New height of slider container.
         */

        public scaleHeight(height: number): void {
            if (this.slider) {
                this.slider.$ScaleHeight(height);
            }
        }

        /**
         * Get scaled width the slider currently displays
         *
         * @fn  public getScaledWidth(): number
         *
         * @brief   Get scaled width the slider currently displays
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @return  {number}    Scaled width of slider container, return undefined if jssor slider is not
         *          initialized.
         */

        public getScaledWidth(): number {
            if (this.slider) {
                return this.slider.$ScaleWidth();
            }
            return undefined;
        }

        /**
         * Get scaled height the slider currently displays
         *
         * @fn  public getScaledHeight(): number
         *
         * @brief   Get scaled height the slider currently displays
         *
         * @author  Administrator
         * @date    20.01.2018
         *
         * @return  {number}    Scaled height of slider container, return undefined if jssor slider is
         *          not initialized.
         */

        public getScaledHeight(): number {
            if (this.slider) {
                return this.slider.$ScaleHeight();
            }
            return undefined;
        }

        //#endregion
    }

    //#endregion

    //#region --[ register to kendo ]--
    // Create an alias of the prototype (required by kendo.ui.plugin)
    Jssor.fn = Jssor.prototype;


    Jssor.fn.options = new KendoJssorOptions();
    Jssor.fn.jssorOptions = defaults.jssorOptions;
    // ReSharper disable once RedundantQualifier
    kendo.ui.plugin(Jssor);

    //#endregion
}

//#region --[ JQuery ]--

// ReSharper disable once InconsistentNaming
interface JQuery { 
    kendoJssor(options?: kendo.ui.jssor.IKendoJssorOptions): JQuery;
}

//#endregion
