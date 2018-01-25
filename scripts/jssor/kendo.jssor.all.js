"use strict";
// ReSharper disable once InconsistentNaming
var kendo;
(function (kendo) {
    var ui;
    (function (ui) {
        var jssor;
        (function (jssor) {
            var transition;
            (function (transition) {
                var TransitionGroupType;
                (function (TransitionGroupType) {
                    TransitionGroupType[TransitionGroupType["Fade"] = 0] = "Fade";
                    TransitionGroupType[TransitionGroupType["Twins"] = 1] = "Twins";
                    TransitionGroupType[TransitionGroupType["Rotate"] = 2] = "Rotate";
                    TransitionGroupType[TransitionGroupType["Zoom"] = 3] = "Zoom";
                    TransitionGroupType[TransitionGroupType["Collapse"] = 4] = "Collapse";
                    TransitionGroupType[TransitionGroupType["Expand"] = 5] = "Expand";
                    TransitionGroupType[TransitionGroupType["Float"] = 6] = "Float";
                    TransitionGroupType[TransitionGroupType["Fly"] = 7] = "Fly";
                    TransitionGroupType[TransitionGroupType["Stripe"] = 8] = "Stripe";
                    TransitionGroupType[TransitionGroupType["Parabola"] = 9] = "Parabola";
                    TransitionGroupType[TransitionGroupType["SwingInside"] = 10] = "SwingInside";
                    TransitionGroupType[TransitionGroupType["DodgeDanceInside"] = 11] = "DodgeDanceInside";
                    TransitionGroupType[TransitionGroupType["DodgePetInside"] = 12] = "DodgePetInside";
                    TransitionGroupType[TransitionGroupType["DodgeInside"] = 13] = "DodgeInside";
                    TransitionGroupType[TransitionGroupType["FlutterInside"] = 14] = "FlutterInside";
                    TransitionGroupType[TransitionGroupType["Compound"] = 15] = "Compound";
                    TransitionGroupType[TransitionGroupType["WaveOut"] = 16] = "WaveOut";
                    TransitionGroupType[TransitionGroupType["WaveIn"] = 17] = "WaveIn";
                    TransitionGroupType[TransitionGroupType["JumpOut"] = 18] = "JumpOut";
                    TransitionGroupType[TransitionGroupType["JumpIn"] = 19] = "JumpIn";
                    TransitionGroupType[TransitionGroupType["Stone"] = 20] = "Stone";
                })(TransitionGroupType = transition.TransitionGroupType || (transition.TransitionGroupType = {}));
            })(transition = jssor.transition || (jssor.transition = {}));
        })(jssor = ui.jssor || (ui.jssor = {}));
    })(ui = kendo.ui || (kendo.ui = {}));
})(kendo || (kendo = {}));
//# sourceMappingURL=kendo.jssor.transitions.js.map
/// <reference path="./jquery/jquery.d.ts" />
/// <reference path="./kendo.jssor.transitions.ts" />
"use strict";
var kendo;
(function (kendo) {
    var ui;
    (function (ui) {
        var jssor;
        (function (jssor) {
            //#region --[ enums ]--
            var ShowType;
            (function (ShowType) {
                ShowType[ShowType["Never"] = 0] = "Never";
                ShowType[ShowType["MouseOver"] = 1] = "MouseOver";
                ShowType[ShowType["Always"] = 2] = "Always";
            })(ShowType = jssor.ShowType || (jssor.ShowType = {}));
            var BulletActionType;
            (function (BulletActionType) {
                BulletActionType[BulletActionType["None"] = 0] = "None";
                BulletActionType[BulletActionType["Click"] = 1] = "Click";
                BulletActionType[BulletActionType["MouseHover"] = 2] = "MouseHover";
                BulletActionType[BulletActionType["ClickOrMouseHover"] = 3] = "ClickOrMouseHover";
            })(BulletActionType = jssor.BulletActionType || (jssor.BulletActionType = {}));
            var LoopType;
            (function (LoopType) {
                LoopType[LoopType["No"] = 0] = "No";
                LoopType[LoopType["Yes"] = 1] = "Yes";
                LoopType[LoopType["Rewind"] = 2] = "Rewind";
            })(LoopType = jssor.LoopType || (jssor.LoopType = {}));
            var PauseOnHoverType;
            (function (PauseOnHoverType) {
                PauseOnHoverType[PauseOnHoverType["NoPause"] = 0] = "NoPause";
                PauseOnHoverType[PauseOnHoverType["PauseForDesktop"] = 1] = "PauseForDesktop";
                PauseOnHoverType[PauseOnHoverType["PauseForTouch"] = 2] = "PauseForTouch";
                PauseOnHoverType[PauseOnHoverType["PauseForDesktopAndTouch"] = 3] = "PauseForDesktopAndTouch";
                PauseOnHoverType[PauseOnHoverType["FreezeForDesktop"] = 4] = "FreezeForDesktop";
                PauseOnHoverType[PauseOnHoverType["FreezeForTouch"] = 8] = "FreezeForTouch";
                PauseOnHoverType[PauseOnHoverType["FreezeForDesktopAndTouch"] = 12] = "FreezeForDesktopAndTouch";
            })(PauseOnHoverType = jssor.PauseOnHoverType || (jssor.PauseOnHoverType = {}));
            var DragOrientationType;
            (function (DragOrientationType) {
                DragOrientationType[DragOrientationType["NoDrag"] = 0] = "NoDrag";
                DragOrientationType[DragOrientationType["Horizontal"] = 1] = "Horizontal";
                DragOrientationType[DragOrientationType["Vertical"] = 2] = "Vertical";
                DragOrientationType[DragOrientationType["Either"] = 3] = "Either";
            })(DragOrientationType = jssor.DragOrientationType || (jssor.DragOrientationType = {}));
            var EaseType;
            (function (EaseType) {
                EaseType[EaseType["Swing"] = 0] = "Swing";
                EaseType[EaseType["Linear"] = 1] = "Linear";
                EaseType[EaseType["InQuad"] = 2] = "InQuad";
                EaseType[EaseType["OutQuad"] = 3] = "OutQuad";
                EaseType[EaseType["InOutQuad"] = 4] = "InOutQuad";
                EaseType[EaseType["InCubic"] = 5] = "InCubic";
                EaseType[EaseType["OutCubic"] = 6] = "OutCubic";
                EaseType[EaseType["InOutCubic"] = 7] = "InOutCubic";
                EaseType[EaseType["InQuart"] = 8] = "InQuart";
                EaseType[EaseType["OutQuart"] = 9] = "OutQuart";
                EaseType[EaseType["InOutQuart"] = 10] = "InOutQuart";
                EaseType[EaseType["InQuint"] = 11] = "InQuint";
                EaseType[EaseType["OutQuint"] = 12] = "OutQuint";
                EaseType[EaseType["InOutQuint"] = 13] = "InOutQuint";
                EaseType[EaseType["InSine"] = 14] = "InSine";
                EaseType[EaseType["OutSine"] = 15] = "OutSine";
                EaseType[EaseType["InOutSine"] = 16] = "InOutSine";
                EaseType[EaseType["InExpo"] = 17] = "InExpo";
                EaseType[EaseType["OutExpo"] = 18] = "OutExpo";
                EaseType[EaseType["InOutExpo"] = 19] = "InOutExpo";
                EaseType[EaseType["InCirc"] = 20] = "InCirc";
                EaseType[EaseType["OutCirc"] = 21] = "OutCirc";
                EaseType[EaseType["InOutCirc"] = 22] = "InOutCirc";
                EaseType[EaseType["InElastic"] = 23] = "InElastic";
                EaseType[EaseType["OutElastic"] = 24] = "OutElastic";
                EaseType[EaseType["InOutElastic"] = 25] = "InOutElastic";
                EaseType[EaseType["InBack"] = 26] = "InBack";
                EaseType[EaseType["OutBack"] = 27] = "OutBack";
                EaseType[EaseType["InOutBack"] = 28] = "InOutBack";
                EaseType[EaseType["InBounce"] = 29] = "InBounce";
                EaseType[EaseType["OutBounce"] = 30] = "OutBounce";
                EaseType[EaseType["InOutBounce"] = 31] = "InOutBounce";
                EaseType[EaseType["GoBack"] = 32] = "GoBack";
                EaseType[EaseType["InWave"] = 33] = "InWave";
                EaseType[EaseType["OutWave"] = 34] = "OutWave";
                EaseType[EaseType["OutJump"] = 35] = "OutJump";
                EaseType[EaseType["InJump"] = 36] = "InJump";
                EaseType[EaseType["Early"] = 37] = "Early";
                EaseType[EaseType["Late"] = 38] = "Late";
            })(EaseType = jssor.EaseType || (jssor.EaseType = {}));
            var AutoPlayType;
            (function (AutoPlayType) {
                /**
                 * Disable auto play
                 */
                AutoPlayType[AutoPlayType["No"] = 0] = "No";
                /**
                 * Auto play continuously
                 */
                AutoPlayType[AutoPlayType["Yes"] = 1] = "Yes";
                /**
                 *  Auto play and stop at last slide
                 */
                AutoPlayType[AutoPlayType["StopAtLastSlide"] = 2] = "StopAtLastSlide";
                /**
                 * Auto play and stop when when user click on any slide
                 */
                AutoPlayType[AutoPlayType["StopOnClick"] = 4] = "StopOnClick";
                /**
                 * Auto play and stop when user click arrow/ bullet / thumbnail navigator, drag slide, arrow key
                 */
                AutoPlayType[AutoPlayType["StopOnUserNavigation"] = 8] = "StopOnUserNavigation";
                /**
                 * Auto play and stop on either user click or user navigation.
                 */
                AutoPlayType[AutoPlayType["StopOnClickOrUserNavigation"] = 12] = "StopOnClickOrUserNavigation";
            })(AutoPlayType = jssor.AutoPlayType || (jssor.AutoPlayType = {}));
            var OrientationType;
            (function (OrientationType) {
                OrientationType[OrientationType["Horizontal"] = 1] = "Horizontal";
                OrientationType[OrientationType["Vertical"] = 2] = "Vertical";
            })(OrientationType = jssor.OrientationType || (jssor.OrientationType = {}));
            var AutocenterType;
            (function (AutocenterType) {
                AutocenterType[AutocenterType["None"] = 0] = "None";
                AutocenterType[AutocenterType["Horizontal"] = 1] = "Horizontal";
                AutocenterType[AutocenterType["Vertical"] = 2] = "Vertical";
            })(AutocenterType = jssor.AutocenterType || (jssor.AutocenterType = {}));
            var SlideFillmodeType;
            (function (SlideFillmodeType) {
                /**
                 * Stretch main image to fill full area of slide.
                 */
                SlideFillmodeType[SlideFillmodeType["Stretch"] = 0] = "Stretch";
                /**
                 * Scale main image and put it all inside at center of slide area.
                 */
                SlideFillmodeType[SlideFillmodeType["Contain"] = 1] = "Contain";
                /**
                 * Scale main image and let it cover full area of slide.
                 */
                SlideFillmodeType[SlideFillmodeType["Cover"] = 2] = "Cover";
                /**
                 * Keep original size of main image and put it at center of slide area.
                 */
                SlideFillmodeType[SlideFillmodeType["ActualSize"] = 4] = "ActualSize";
                /**
                 * Will use 'contain' for large image and 'actualSize' for small image.
                 */
                SlideFillmodeType[SlideFillmodeType["ContainAndActual"] = 5] = "ContainAndActual";
            })(SlideFillmodeType = jssor.SlideFillmodeType || (jssor.SlideFillmodeType = {}));
            var ResponsiveScaleType;
            (function (ResponsiveScaleType) {
                ResponsiveScaleType[ResponsiveScaleType["NoScale"] = 0] = "NoScale";
                /**
                 * Scale the slider to parent container width.
                 */
                ResponsiveScaleType[ResponsiveScaleType["ParentWidth"] = 1] = "ParentWidth";
                /**
                 * Scale the slider to parent container height.
                 */
                ResponsiveScaleType[ResponsiveScaleType["ParentHeight"] = 2] = "ParentHeight";
                /**
                 * Scale to window size (Flex Mode): Scale slider to browser window size.
                 */
                ResponsiveScaleType[ResponsiveScaleType["WindowSizeFlex"] = 3] = "WindowSizeFlex";
                /**
                 *  Scale to window size (Constrain Mode): Scale slider to browser window size, and prevent bullets/arrows from moving aside.
                 */
                ResponsiveScaleType[ResponsiveScaleType["WindowSizeConstrain"] = 4] = "WindowSizeConstrain";
                /**
                 * Scale to parent size (Cover Mode): Scale the slider to parent container size.
                 */
                ResponsiveScaleType[ResponsiveScaleType["ParentSizeCover"] = 5] = "ParentSizeCover";
                /**
                 * (Constrain Mode): Scale the slider to parent container size, and prevent bullets/arrows from moving aside.
                 */
                ResponsiveScaleType[ResponsiveScaleType["ParentSizeConstrain"] = 6] = "ParentSizeConstrain";
            })(ResponsiveScaleType = jssor.ResponsiveScaleType || (jssor.ResponsiveScaleType = {}));
            var TransitionsOrderType;
            (function (TransitionsOrderType) {
                TransitionsOrderType[TransitionsOrderType["Random"] = 0] = "Random";
                TransitionsOrderType[TransitionsOrderType["Sequence"] = 1] = "Sequence";
            })(TransitionsOrderType = jssor.TransitionsOrderType || (jssor.TransitionsOrderType = {}));
            // ReSharper disable once InconsistentNaming
            var defaults = /** @class */ (function () {
                function defaults() {
                }
                defaults.jssorOptions = function () {
                    var x = {
                        id: "",
                        autoPlay: AutoPlayType.Yes,
                        center: true,
                        autoPlaySteps: 1,
                        loop: LoopType.Yes,
                        startSlide: 1,
                        pauseOnHover: PauseOnHoverType.PauseForDesktop,
                        dragOrientation: DragOrientationType.Horizontal,
                        minDragOffsetToSlide: 20,
                        keyboardNavigation: true,
                        keyboardNavigationSteps: 1,
                        duration: 500,
                        idle: 3000,
                        ease: EaseType.Swing,
                        lazyLoading: true,
                        numImages2Preload: 1,
                        container: {
                            width: 980,
                            height: 380
                        },
                        slideContainer: {
                            x: 0,
                            y: 0,
                        },
                        slide: {
                            spacing: 0,
                            align: 0,
                            columns: 1,
                            orientation: OrientationType.Horizontal,
                            fillmode: SlideFillmodeType.Cover,
                        },
                        responsive: {
                            scaleTo: ResponsiveScaleType.NoScale,
                            blending: 12.8
                        },
                    };
                    return $.extend(true, {}, x);
                };
                defaults.arrow = function () {
                    var a = {
                        id: "",
                        name: "",
                        note: "",
                        show: ShowType.Always,
                        itemWidth: 50,
                        itemHeight: 50,
                        itemScale: 1,
                        positionScale: 1,
                        autoCenter: AutocenterType.Vertical,
                        css: [],
                        leftArrow: {
                            cssClass: "#= id #-#= arrowNavigation.id #",
                            svg: "",
                            horizontalOffset: 30,
                            verticalOffset: 30,
                        },
                        rightArrow: {
                            cssClass: "#= id #-#= arrowNavigation.id #",
                            svg: "",
                            horizontalOffset: 30,
                            verticalOffset: 30
                        }
                    };
                    return $.extend(true, {}, a);
                };
                defaults.bullet = function () {
                    var b = {
                        id: "",
                        cssClass: "#= id #-#= arrowNavigation.id #",
                        name: "",
                        note: "",
                        css: [],
                        show: ShowType.Always,
                        itemWidth: 16,
                        itemHeight: 16,
                        horizontalOffset: 12,
                        verticalOffset: 12,
                        svg: ""
                    };
                    return $.extend(true, {}, b);
                };
                defaults.thumbnail = function () {
                    var t = {
                        id: "",
                        cssClass: "#= id #-#= arrowNavigation.id #",
                        name: "",
                        note: "",
                        css: [],
                        show: ShowType.Always,
                        itemWidth: 200,
                        itemHeight: 100,
                    };
                    return $.extend(true, {}, t);
                };
                defaults.responsive = {
                    maxWidth: 2000,
                    maxHeight: 1000,
                    blending: 0.28,
                    scaleTo: kendo.ui.jssor.ResponsiveScaleType.WindowSizeFlex
                };
                return defaults;
            }());
            jssor.defaults = defaults;
        })(jssor = ui.jssor || (ui.jssor = {}));
    })(ui = kendo.ui || (kendo.ui = {}));
})(kendo || (kendo = {}));
//# sourceMappingURL=kendo.jssor.options.js.map
/// <reference path="jquery/jquery.d.ts" />
// ReSharper disable once DuplicateReferenceComment
/// <reference path="kendo/kendo.all.d.ts" />
/// <reference path="kendo/kendo.missing.d.ts" />
/// <reference path="jssor/index.d.ts" />
/// <reference path="kendo.jssor.options.ts" />
//Hell
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ReSharper disable once InconsistentNaming
var kendo;
(function (kendo) {
    var ui;
    (function (ui) {
        var jssor;
        (function (jssor_1) {
            // ReSharper disable InconsistentNaming
            var DATABINDING = "dataBinding", DATABOUND = "dataBound", CHANGE = "change", PROGRESS = 'progress', ERROR = 'error', 
            // ReSharper disable once UnusedLocals
            NS = '.kendoJssor';
            /**
             *
             * @param {Element} element
             * @param {IKendoJssorOptions} options?
             */
            var KendoJssorOptions = /** @class */ (function () {
                function KendoJssorOptions() {
                    this.name = "Jssor";
                    this.jssor = undefined;
                    this.autoBind = true;
                    this.dataImageField = "image";
                    this.dataThumbnailField = "thumbnail";
                    this.dataCaptionField = "caption";
                    this.dataDescriptionField = "description";
                }
                return KendoJssorOptions;
            }());
            jssor_1.KendoJssorOptions = KendoJssorOptions;
            //#endregion
            //#region --[ kendo Jssor widget ]--
            // ReSharper disable once RedundantQualifier
            var Jssor = /** @class */ (function (_super) {
                __extends(Jssor, _super);
                // ReSharper restore InconsistentNaming
                //#endregion
                //#region --[ ctor ]--
                function Jssor(element, options) {
                    var _this = _super.call(this, element, $.extend(true, new KendoJssorOptions(), options)) || this;
                    // ReSharper disable once RedundantQualifier
                    _this.jssorOptions = undefined;
                    //#region --[ bind methods to instance ]--
                    _this.getOptions = _this.getOptions.bind(_this);
                    _this.setOptions = _this.setOptions.bind(_this);
                    _this.clearOptions = _this.clearOptions.bind(_this);
                    _this.fixOptions = _this.fixOptions.bind(_this);
                    _this.setJssorOptions = _this.setJssorOptions.bind(_this);
                    _this._unbindJssorOptions = _this._unbindJssorOptions.bind(_this);
                    _this._bindJssorOptions = _this._bindJssorOptions.bind(_this);
                    _this.initResponsiveScale = _this.initResponsiveScale.bind(_this);
                    _this.responsiveScaleSlider = _this.responsiveScaleSlider.bind(_this);
                    _this.renderSlices = _this.renderSlices.bind(_this);
                    _this.renderSliceTemplate = _this.renderSliceTemplate.bind(_this);
                    _this.renderThumbnailNavigation = _this.renderThumbnailNavigation.bind(_this);
                    _this.renderArrowNavigation = _this.renderArrowNavigation.bind(_this);
                    _this.renderBulletNavigation = _this.renderBulletNavigation.bind(_this);
                    _this.renderNavigationCss = _this.renderNavigationCss.bind(_this);
                    _this.renderNavigation = _this.renderNavigation.bind(_this);
                    _this.render = _this.render.bind(_this);
                    _this.unrender = _this.unrender.bind(_this);
                    _this.renderContainer = _this.renderContainer.bind(_this);
                    _this.items = _this.items.bind(_this);
                    _this.dataItem = _this.dataItem.bind(_this);
                    _this.refresh = _this.refresh.bind(_this);
                    _this.setDataSource = _this.setDataSource.bind(_this);
                    _this._unbindDataSource = _this._unbindDataSource.bind(_this);
                    _this._dataSource = _this._dataSource.bind(_this);
                    _this._progress = _this._progress.bind(_this);
                    _this._error = _this._error.bind(_this);
                    _this._initEventHandler = _this._initEventHandler.bind(_this);
                    _this.play = _this.play.bind(_this);
                    _this.isPlaying = _this.isPlaying.bind(_this);
                    _this.pause = _this.pause.bind(_this);
                    _this.goTo = _this.goTo.bind(_this);
                    _this.playTo = _this.playTo.bind(_this);
                    _this.next = _this.next.bind(_this);
                    _this.prev = _this.prev.bind(_this);
                    _this.scaleSize = _this.scaleSize.bind(_this);
                    _this.scaleWidth = _this.scaleWidth.bind(_this);
                    _this.scaleHeight = _this.scaleHeight.bind(_this);
                    _this.getScaledWidth = _this.getScaledWidth.bind(_this);
                    _this.getScaledHeight = _this.getScaledHeight.bind(_this);
                    //#endregion
                    $(element).data("kendoJssor", _this);
                    _this.events.push(DATABINDING);
                    _this.events.push(DATABOUND);
                    _this.events.push(CHANGE);
                    _this._initEventHandler();
                    _this._dataSource();
                    return _this;
                }
                // ReSharper disable once InconsistentNaming
                Jssor.prototype._initEventHandler = function () {
                    this._refreshHandler = $.proxy(this.refresh, this);
                    this._progressHandler = $.proxy(this._progress, this);
                    this._errorHandler = $.proxy(this._error, this);
                };
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
                Jssor.getJsonFile = function (url) {
                    var result;
                    $.ajax({
                        url: url,
                        dataType: 'json',
                        data: {},
                        async: false,
                        success: function (json) {
                            result = json;
                        }
                    });
                    return result;
                };
                //#region --[ options ]--
                Jssor.prototype.getOptions = function () {
                    return this.options;
                };
                Jssor.prototype.clearOptions = function () {
                    this.options = new KendoJssorOptions();
                };
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
                Jssor.prototype.setOptions = function (options) {
                    var newoptions = $.extend(true, new KendoJssorOptions(), options);
                    _super.prototype.setOptions.call(this, newoptions);
                    this.fixOptions();
                    this.refresh();
                };
                Jssor.prototype.fixOptions = function () {
                    var o = this.options;
                    // make jssor options usable
                    if (this.jssorOptions) {
                        o.jssor = $.extend(true, jssor_1.defaults.jssorOptions(), this.jssorOptions);
                    }
                    else if (o.jssor) {
                        o.jssor = $.extend(true, jssor_1.defaults.jssorOptions(), o.jssor);
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
                            j.bulletNavigation = $.extend(true, jssor_1.defaults.bullet(), j.bulletNavigation);
                        }
                        if (j.arrowNavigation) {
                            if (j.arrowNavigation.templateFile) {
                                var at = Jssor.getJsonFile(j.arrowNavigation.templateFile);
                                j.arrowNavigation = $.extend(true, at, j.arrowNavigation);
                            }
                            j.arrowNavigation = $.extend(true, jssor_1.defaults.arrow(), j.arrowNavigation);
                        }
                        if (j.thumbnailNavigation) {
                            if (j.thumbnailNavigation.templateFile) {
                                var tt = Jssor.getJsonFile(j.thumbnailNavigation.templateFile);
                                j.thumbnailNavigation = $.extend(true, tt, j.thumbnailNavigation);
                            }
                            j.thumbnailNavigation = $.extend(true, jssor_1.defaults.thumbnail(), j.thumbnailNavigation);
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
                };
                Jssor.mapEasing = function (easeType) {
                    switch (easeType) {
                        case jssor_1.EaseType.Swing:
                            return $Jease$.$Swing;
                        case jssor_1.EaseType.Linear:
                            return $Jease$.$Linear;
                        case jssor_1.EaseType.InQuad:
                            return $Jease$.$InQuad;
                        case jssor_1.EaseType.OutQuad:
                            return $Jease$.$OutQuad;
                        case jssor_1.EaseType.InOutQuad:
                            return $Jease$.$InOutQuad;
                        case jssor_1.EaseType.InCubic:
                            return $Jease$.$InCubic;
                        case jssor_1.EaseType.OutCubic:
                            return $Jease$.$OutCubic;
                        case jssor_1.EaseType.InOutCubic:
                            return $Jease$.$InOutCubic;
                        case jssor_1.EaseType.InQuart:
                            return $Jease$.$InQuart;
                        case jssor_1.EaseType.OutQuart:
                            return $Jease$.$OutQuart;
                        case jssor_1.EaseType.InOutQuart:
                            return $Jease$.$InOutQuart;
                        case jssor_1.EaseType.InQuint:
                            return $Jease$.$InQuint;
                        case jssor_1.EaseType.OutQuint:
                            return $Jease$.$OutQuint;
                        case jssor_1.EaseType.InOutQuint:
                            return $Jease$.$InOutQuint;
                        case jssor_1.EaseType.InSine:
                            return $Jease$.$InSine;
                        case jssor_1.EaseType.OutSine:
                            return $Jease$.$OutSine;
                        case jssor_1.EaseType.InOutSine:
                            return $Jease$.$InOutSine;
                        case jssor_1.EaseType.InExpo:
                            return $Jease$.$InExpo;
                        case jssor_1.EaseType.OutExpo:
                            return $Jease$.$OutExpo;
                        case jssor_1.EaseType.InOutExpo:
                            return $Jease$.$InOutExpo;
                        case jssor_1.EaseType.InCirc:
                            return $Jease$.$InCirc;
                        case jssor_1.EaseType.OutCirc:
                            return $Jease$.$OutCirc;
                        case jssor_1.EaseType.InOutCirc:
                            return $Jease$.$InOutCirc;
                        case jssor_1.EaseType.InElastic:
                            return $Jease$.$InElastic;
                        case jssor_1.EaseType.OutElastic:
                            return $Jease$.$OutElastic;
                        case jssor_1.EaseType.InOutElastic:
                            return $Jease$.$InOutElastic;
                        case jssor_1.EaseType.InBack:
                            return $Jease$.$InBack;
                        case jssor_1.EaseType.OutBack:
                            return $Jease$.$OutBack;
                        case jssor_1.EaseType.InOutBack:
                            return $Jease$.$InOutBack;
                        case jssor_1.EaseType.InBounce:
                            return $Jease$.$InBounce;
                        case jssor_1.EaseType.OutBounce:
                            return $Jease$.$OutBounce;
                        case jssor_1.EaseType.InOutBounce:
                            return $Jease$.$InOutBounce;
                        case jssor_1.EaseType.GoBack:
                            return $Jease$.$GoBack;
                        case jssor_1.EaseType.InWave:
                            return $Jease$.$InWave;
                        case jssor_1.EaseType.OutWave:
                            return $Jease$.$OutWave;
                        case jssor_1.EaseType.OutJump:
                            return $Jease$.$OutJump;
                        case jssor_1.EaseType.InJump:
                            return $Jease$.$InJump;
                        case jssor_1.EaseType.Early:
                            return $Jease$.$Early;
                        case jssor_1.EaseType.Late:
                            return $Jease$.$Late;
                        default:
                            return null;
                    }
                };
                Jssor.prototype.convertOptions = function (options) {
                    var result = {};
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
                    }
                    else {
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
                    var s = jssor.slideshow;
                    if (!this.notSet(s) && s.enabled) {
                        var transitions = [];
                        if (s.transitions.length > 0) {
                            s.transitions.forEach(function (v) {
                                eval("window[\"$$$$t\"] = " + v.transition + ";");
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
                        };
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
                };
                //#endregion
                //#region --[ jssor options ]--
                Jssor.prototype.setJssorOptions = function (joptions, doRefresh) {
                    if (doRefresh === void 0) { doRefresh = true; }
                    this._bindJssorOptions(joptions);
                    if (doRefresh) {
                        this.refresh();
                    }
                };
                // ReSharper disable once InconsistentNaming
                Jssor.prototype._unbindJssorOptions = function () {
                    if (this.jssorOptions && this._jssorOptionsBound) {
                        this.jssorOptions.unbind(CHANGE, this._refreshHandler);
                    }
                    this._jssorOptionsBound = false;
                };
                // ReSharper disable once InconsistentNaming
                Jssor.prototype._bindJssorOptions = function (joptions) {
                    if (this.jssorOptions && this._jssorOptionsBound) {
                        this._unbindJssorOptions();
                    }
                    this.jssorOptions = undefined;
                    if (joptions) {
                        // ReSharper disable once RedundantQualifier
                        if (!(joptions instanceof kendo.data.ObservableObject)) {
                            // ReSharper disable once RedundantQualifier
                            this.jssorOptions = new kendo.data.ObservableObject(joptions);
                        }
                        else {
                            // ReSharper disable once RedundantQualifier
                            this.jssorOptions = joptions;
                        }
                        this.jssorOptions.bind(CHANGE, this._refreshHandler);
                        this._jssorOptionsBound = true;
                    }
                };
                //#endregion
                //#region --[ responsive ]--
                Jssor.prototype.initResponsiveScale = function () {
                    var j = this.options.jssor;
                    $(window).unbind("load", this.responsiveScaleSlider);
                    $(window).unbind("resize", this.responsiveScaleSlider);
                    $(window).unbind("orientationchange", this.responsiveScaleSlider);
                    if (j.responsive && j.responsive.scaleTo !== jssor_1.ResponsiveScaleType.NoScale) {
                        this.responsiveScaleSlider();
                        $(window).bind("load", this.responsiveScaleSlider);
                        $(window).bind("resize", this.responsiveScaleSlider);
                        $(window).bind("orientationchange", this.responsiveScaleSlider);
                    }
                };
                //TODO: private ??
                Jssor.prototype.responsiveScaleSlider = function () {
                    var r = this.options.jssor.responsive;
                    var el = this.element[0];
                    var sel = this.sliderElement[0];
                    var p = el.parentElement;
                    if (r && p && this.slider) {
                        if (p.clientWidth) {
                            var oW = this.slider.$OriginalWidth();
                            var oH = this.slider.$OriginalHeight();
                            var w = p.clientWidth || oW;
                            var h = p.clientHeight || oH;
                            var eW = Math.min(r.maxWidth || w, w);
                            var eH = Math.min(r.maxHeight || h, h);
                            var b = r.blending ? r.blending : 1;
                            switch (r.scaleTo) {
                                case jssor_1.ResponsiveScaleType.ParentWidth:
                                    this.slider.$ScaleWidth(Math.min(r.maxWidth || w, w));
                                    sel.style.top = sel.style.left = "0";
                                    break;
                                case jssor_1.ResponsiveScaleType.ParentHeight:
                                    this.slider.$ScaleHeight(Math.min(r.maxHeight || h, h));
                                    sel.style.top = sel.style.left = "0";
                                    break;
                                case jssor_1.ResponsiveScaleType.ParentSizeCover: //TODO
                                case jssor_1.ResponsiveScaleType.WindowSizeFlex:
                                    this.slider.$ScaleSize(eW, eH, b);
                                    sel.style.top = (h - eH) / 2 + "px";
                                    sel.style.left = (w - eW) / 2 + "px";
                                    break;
                                case jssor_1.ResponsiveScaleType.ParentSizeConstrain: //TODO
                                case jssor_1.ResponsiveScaleType.WindowSizeConstrain:
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
                                    sel.style.top = (h - eH) / 2 + "px";
                                    sel.style.left = (w - eW) / 2 + "px";
                                    break;
                            }
                        }
                        else {
                            window.setTimeout(this.responsiveScaleSlider, 30);
                        }
                    }
                };
                //#endregion
                //#region --[ render ]--
                Jssor.prototype.unrender = function () {
                    this.element.empty();
                };
                Jssor.prototype.render = function () {
                    this.renderContainer();
                    this.renderLoading();
                    this.renderSlices();
                    this.renderNavigation();
                    // build or rebuild jssor class
                    var jOptions = this.convertOptions(this.options);
                    this.slider = new $JssorSlider$(this.sliderElement.attr("id"), jOptions);
                    this.element.css("visibility", "visible");
                    this.initResponsiveScale();
                };
                //#region --[ render container ]--
                Jssor.prototype.renderContainer = function () {
                    var j = this.options.jssor;
                    this.styleElement = $("<style id='" + j.id + "-style' type='text/css'> </style>");
                    //this.styleElement.insertBefore(this.element);
                    this.element.append(this.styleElement);
                    var center = j.center ? "margin:0 auto;" : "";
                    var bgColor = j.container.bgColor ? "background-color:" + j.container.bgColor + ";" : "";
                    this.sliderElement = $("\n<div id=\"" + j.id + "-container\" style=\"" + center + "position:relative;top:0;left:0;width:" + j.container.width + "px;height:" + j.container.height + "px;overflow:hidden; " + bgColor + "\"></div>");
                    this.element.append(this.sliderElement);
                };
                //#endregion
                // 
                //#region --[ render slices ]--
                Jssor.prototype.renderSlices = function () {
                    var o = this.options.jssor.slideContainer;
                    var slices = $("<div u=\"slides\" style=\"cursor:default;position:relative;top:" + o.y + "px;left:" + o.x + "px;width:" + o.width + "px;height:" + o.height + "px;overflow:hidden;\"></div>");
                    //build slide an apply template
                    var template = this.renderSliceTemplate();
                    //bind data to slices:
                    var view = this.dataSource.view();
                    var html = kendo.render(template, view);
                    slices.html(html);
                    this.sliderElement.append("\n");
                    this.sliderElement.append(slices);
                };
                Jssor.prototype.renderSliceTemplate = function () {
                    var o = this.options;
                    var j = this.options.jssor;
                    var imgSrc = j.lazyLoading ? " src2" : " src";
                    var aOpen = "";
                    var aClose = "";
                    if (o.dataTargetUrlField) {
                        aOpen = "<a href='#= data." + o.dataTargetUrlField + "#' >";
                        aClose = "</a>";
                    }
                    var content = "";
                    if (o.dataContentHtmlField) {
                        content = "\n#= data." + o.dataContentHtmlField + "#";
                    }
                    var thumbnail = "";
                    if (j.thumbnailNavigation) {
                        thumbnail = !this.notSet(j.thumbnailNavigation.itemHtml)
                            ? "\n" +
                                kendo.format(kendo.template(j.thumbnailNavigation.itemHtml)(j), "#= data." + o.dataThumbnailField + "#", "#= data." + o.dataCaptionField + "#", "#= data." + o.dataDescriptionField + "#")
                            : "";
                    }
                    var dataUid = " " + kendo.attr("uid") + "=\"#= data.uid #\"";
                    var templateStr = "\n<div>" + aOpen + "<img data-u=\"image\"" + dataUid + imgSrc + "=\"#= data." + o.dataImageField + "#\" />" + aClose + thumbnail + content + "</div>";
                    return kendo.template(templateStr);
                };
                //#endregion
                //#region --[ render loading ]--
                Jssor.prototype.renderLoading = function () {
                    var j = this.options.jssor;
                    var l = j.loading;
                    if (l) {
                        this.renderNavigationCss(l);
                        var lClass = l.cssClass ? "class=\"" + kendo.template(l.cssClass)(j) + "\"" : "";
                        var bSvg = l.svg ? kendo.template(l.svg)(j) : "";
                        var bgColor = l.bgColor ? "background-color:" + l.bgColor + ";" : "";
                        var zindex = (j.debugLoading) ? "z-index:255;" : "";
                        var datau = "loading" + ((j.debugLoading) ? "D" : "");
                        //TODO: Always bottom / right ???
                        var wh = (j.debugLoading) ? "bottom:0px;right:0px;" : "width:100%;height:100%;";
                        var template = "\n    <div data-u=\"" + datau + "\" " + lClass + " style=\"position:absolute;top:0px;left:0px;" + wh + "text-align:center;" + bgColor + zindex + "\">\n        " + bSvg + "\n    </div>";
                        this.sliderElement.append(template);
                    }
                };
                //#endregion
                //#region --[ render navigation templates ]--
                Jssor.prototype.renderArrowNavigation = function () {
                    var j = this.options.jssor;
                    var a = j.arrowNavigation;
                    if (a) {
                        this.renderNavigationCss(a);
                        var dAutocenter = "";
                        var dItemScale = "";
                        var dPositionScaleLeft = "";
                        var dPositionScaleRight = "";
                        if (a.autoCenter) {
                            dAutocenter = " data-autocenter=\"" + a.autoCenter + "\"";
                        }
                        if (a.itemScale) {
                            dItemScale = " data-scale=\"" + a.itemScale + "\"";
                        }
                        if (a.positionScale) {
                            dPositionScaleLeft = " data-scale-left=\"" + a.positionScale + "\"";
                            dPositionScaleRight = " data-scale-right=\"" + a.positionScale + "\"";
                        }
                        var lClass = a.leftArrow.cssClass ? "class=\"" + kendo.template(a.leftArrow.cssClass)(j) + "\"" : "";
                        var rClass = a.leftArrow.cssClass ? "class=\"" + kendo.template(a.rightArrow.cssClass)(j) + "\"" : "";
                        var lSvg = a.leftArrow.svg ? kendo.template(a.leftArrow.svg)(j) : "";
                        var rSvg = a.rightArrow.svg ? kendo.template(a.rightArrow.svg)(j) : "";
                        var lArrow = "\n<div data-u=\"arrowleft\" " + lClass + " style=\"width:" + a.itemWidth + "px;height:" + a.itemHeight + "px;top:" + a.leftArrow.verticalOffset + "px;left:" + a.leftArrow.horizontalOffset + "px;\"" + dAutocenter + dItemScale + dPositionScaleLeft + ">\n    " + lSvg + "\n</div>";
                        var rArrow = "\n<div data-u=\"arrowright\" " + rClass + " style=\"width:" + a.itemWidth + "px;height:" + a.itemHeight + "px;top:" + a.rightArrow.verticalOffset + "px;right:" + a.rightArrow.horizontalOffset + "px;\"" + dAutocenter + dItemScale + dPositionScaleRight + ">\n    " + rSvg + "\n</div>";
                        this.sliderElement.append(lArrow);
                        this.sliderElement.append(rArrow);
                    }
                };
                Jssor.prototype.renderBulletNavigation = function () {
                    var j = this.options.jssor;
                    var b = j.bulletNavigation;
                    if (b) {
                        this.renderNavigationCss(b);
                        var dAutocenter = "";
                        var dItemScale = "";
                        var dPositionScale = "";
                        if (b.autoCenter) {
                            dAutocenter = " data-autocenter=\"" + b.autoCenter + "\"";
                        }
                        if (b.itemScale) {
                            dItemScale = " data-scale=\"" + b.itemScale + "\"";
                        }
                        if (b.positionScale) {
                            dPositionScale = " data-scale-right=\"" + b.positionScale + "\"";
                        }
                        var fontsize = b.fontSize ? "font-size:" + b.fontSize + "px;" : "";
                        var lineHeight = b.lineHeight ? "line-height:" + b.lineHeight + "px;" : "";
                        var bClass = b.cssClass ? "class=\"" + kendo.template(b.cssClass)(j) + "\"" : "";
                        var bSvg = b.svg ? kendo.template(b.svg)(j) : "";
                        var bullet = "\n    <div data-u=\"navigator\" " + bClass + " style=\"position:absolute;bottom:" + b.verticalOffset + "px;right:" + b.horizontalOffset + "px;\"" + dAutocenter + dItemScale + dPositionScale + ">\n        <div data-u=\"prototype\" class=\"i\" style=\"width:" + b.itemWidth + "px;height:" + b.itemHeight + "px;" + fontsize + lineHeight + "\">\n            " + bSvg + "\n        </div>\n    </div>";
                        this.sliderElement.append(bullet);
                    }
                };
                Jssor.prototype.renderThumbnailNavigation = function () {
                    var j = this.options.jssor;
                    var t = j.thumbnailNavigation;
                    if (t) {
                        this.renderNavigationCss(t);
                        var tClass = t.cssClass ? "class=\"" + kendo.template(t.cssClass)(j) + "\"" : "";
                        var bgColor = t.bgColor ? "background-color:" + t.bgColor + ";" : "";
                        var width = !this.notSet(t.width) ? "width:" + t.width + "px;" : "";
                        var height = !this.notSet(t.height) ? "height:" + t.height + "px;" : "";
                        var top = !this.notSet(t.top) ? "top:" + t.top + "px;" : "";
                        var bottom = !this.notSet(t.bottom) ? "bottom:" + t.bottom + "px;" : "";
                        var left = !this.notSet(t.left) ? "left:" + t.left + "px;" : "";
                        var right = !this.notSet(t.right) ? "right:" + t.right + "px;" : "";
                        var autocenter = !this.notSet(t.autoCenter) ? " data-autocenter=\"" + t.autoCenter + "\"" : "";
                        var dPositionScale = "";
                        if (!this.notSet(t.positionScale)) {
                            var scaleWhere = [];
                            var autocentertype = (t.autoCenter !== undefined && t.autoCenter !== null)
                                ? t.autoCenter
                                : jssor_1.AutocenterType.None;
                            switch (autocentertype) {
                                case jssor_1.AutocenterType.None:
                                    if (top) {
                                        scaleWhere.push("top");
                                    }
                                    else if (bottom) {
                                        scaleWhere.push("bottom");
                                    }
                                    if (left) {
                                        scaleWhere.push("left");
                                    }
                                    else if (right) {
                                        scaleWhere.push("right");
                                    }
                                    break;
                                case jssor_1.AutocenterType.Vertical:
                                    if (top) {
                                        scaleWhere.push("top");
                                    }
                                    else if (bottom) {
                                        scaleWhere.push("bottom");
                                    }
                                    break;
                                case jssor_1.AutocenterType.Horizontal:
                                    if (left) {
                                        scaleWhere.push("left");
                                    }
                                    else if (right) {
                                        scaleWhere.push("right");
                                    }
                                    break;
                            }
                            scaleWhere.forEach(function (v) {
                                dPositionScale += " data-scale-" + v + "=\"" + t.positionScale + "\"";
                            });
                        }
                        var itemWidth = t.itemWidth !== undefined && t.itemWidth !== null ? "width:" + t.itemWidth + "px;" : "";
                        var itemHeight = t.itemHeight !== undefined && t.itemHeight !== null ? "height:" + t.itemHeight + "px;" : "";
                        var tSvg = t.svg ? kendo.template(t.svg)(j) : "";
                        var thumbnail = "\n<div data-u=\"thumbnavigator\" " + tClass + " style=\"position:absolute;" + left + right + top + bottom + width + height + bgColor + "\"" + autocenter + dPositionScale + ">\n    <div data-u='slides'>\n        <div data-u=\"prototype\" class=\"p\" style=\"" + itemWidth + itemHeight + "\">\n            <div data-u=\"thumbnailtemplate\" class=\"t\"></div>\n            " + tSvg + "\n        </div>\n    </div>\n</div>";
                        this.sliderElement.append(thumbnail);
                    }
                };
                Jssor.prototype.renderNavigationCss = function (nav) {
                    var _this = this;
                    var that = this;
                    if (nav) {
                        if (nav.css) {
                            this.styleElement.append("\n");
                            nav.css.forEach(function (v) {
                                that.styleElement.append(kendo.template(v)(_this.options.jssor) + "\n");
                            });
                        }
                    }
                };
                Jssor.prototype.renderNavigation = function () {
                    this.renderThumbnailNavigation();
                    this.renderBulletNavigation();
                    this.renderArrowNavigation();
                };
                ;
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
                Jssor.prototype.items = function () {
                    return !this.notSet(this.sliderElement)
                        ? this.sliderElement.children("div[u='slides']").children()
                        : $([]);
                };
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
                Jssor.prototype.dataItem = function (
                    // ReSharper disable once RedundantQualifier
                    index) {
                    // ReSharper disable once RedundantQualifier
                    var dataItem = null;
                    if (!this.notSet(index)) {
                        if (typeof index !== "number") {
                            var attr = kendo.attr("uid");
                            var element = $(index);
                            var uid = $(element).closest("[" + attr + "]").attr(attr);
                            dataItem = this.dataSource.getByUid(uid);
                        }
                        else {
                            dataItem = this.dataSource.at(index);
                        }
                    }
                    else if (index === undefined && !this.notSet(this.slider)) {
                        dataItem = this.dataSource.at(this.slider.$CurrentIndex());
                    }
                    return dataItem;
                };
                /**
                 * Refresh the slider by destroying and recreation of Jssor slider and element content
                 * @fn  public refresh(): void
                 *
                 * @brief   Refresh the slider by destroying and recreation of Jssor slider and element content
                 *
                 * @author  Administrator
                 * @date    20.01.2018
                 */
                Jssor.prototype.refresh = function () {
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
                ;
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
                Jssor.prototype.setDataSource = function (dataSource) {
                    // ReSharper restore RedundantQualifier
                    this.options.dataSource = dataSource;
                    this._dataSource();
                };
                // ReSharper disable once InconsistentNaming
                Jssor.prototype._unbindDataSource = function () {
                    try {
                        if (this.dataSource) {
                            this.dataSource
                                .unbind(CHANGE, this._refreshHandler)
                                .unbind(PROGRESS, this._progressHandler)
                                .unbind(ERROR, this._errorHandler);
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                    this._dataSourceBound = false;
                };
                // ReSharper disable once InconsistentNaming
                Jssor.prototype._dataSource = function () {
                    var o = this.options;
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
                };
                // ReSharper disable once InconsistentNaming
                Jssor.prototype._progress = function () {
                    ui.progress(this.element, true);
                };
                // ReSharper disable once InconsistentNaming
                Jssor.prototype._error = function () {
                    ui.progress(this.element, false);
                };
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
                Jssor.prototype.destroy = function () {
                    ui.Widget.fn.destroy.call(this);
                    this._unbindDataSource();
                    //this.element.off(NS);
                    kendo.destroy(this.element);
                };
                Jssor.prototype.notSet = function (value) {
                    return value === null || value === undefined;
                };
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
                Jssor.prototype.play = function (playType) {
                    if (this.slider) {
                        if (this.notSet(playType)) {
                            this.slider.$Play();
                        }
                        else {
                            this.slider.$AutoPlay(playType);
                        }
                    }
                };
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
                Jssor.prototype.isPlaying = function () {
                    if (this.slider) {
                        return this.slider.$AutoPlay();
                    }
                    return false;
                };
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
                Jssor.prototype.pause = function () {
                    if (this.slider) {
                        this.slider.$Pause();
                    }
                };
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
                Jssor.prototype.playTo = function (slideIndex, slideDuration) {
                    if (this.slider) {
                        this.slider.$PlayTo(slideIndex, slideDuration);
                    }
                };
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
                Jssor.prototype.goTo = function (slideIndex) {
                    if (this.slider) {
                        this.slider.$GoTo(slideIndex);
                    }
                };
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
                Jssor.prototype.next = function () {
                    if (this.slider) {
                        this.slider.$Next();
                    }
                };
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
                Jssor.prototype.prev = function () {
                    if (this.slider) {
                        this.slider.$Prev();
                    }
                };
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
                Jssor.prototype.scaleSize = function (width, height, blending) {
                    if (this.slider) {
                        this.slider.$ScaleSize(width, height, blending);
                    }
                };
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
                Jssor.prototype.scaleWidth = function (width) {
                    if (this.slider) {
                        this.slider.$ScaleWidth(width);
                    }
                };
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
                Jssor.prototype.scaleHeight = function (height) {
                    if (this.slider) {
                        this.slider.$ScaleHeight(height);
                    }
                };
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
                Jssor.prototype.getScaledWidth = function () {
                    if (this.slider) {
                        return this.slider.$ScaleWidth();
                    }
                    return undefined;
                };
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
                Jssor.prototype.getScaledHeight = function () {
                    if (this.slider) {
                        return this.slider.$ScaleHeight();
                    }
                    return undefined;
                };
                return Jssor;
            }(kendo.ui.DataBoundWidget));
            jssor_1.Jssor = Jssor;
            //#endregion
            //#region --[ register to kendo ]--
            // Create an alias of the prototype (required by kendo.ui.plugin)
            Jssor.fn = Jssor.prototype;
            Jssor.fn.options = new KendoJssorOptions();
            Jssor.fn.jssorOptions = jssor_1.defaults.jssorOptions;
            // ReSharper disable once RedundantQualifier
            kendo.ui.plugin(Jssor);
            //#endregion
        })(jssor = ui.jssor || (ui.jssor = {}));
    })(ui = kendo.ui || (kendo.ui = {}));
})(kendo || (kendo = {}));
//# sourceMappingURL=kendo.jssor.js.map
// ReSharper disable once DuplicateReferenceComment
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="kendo.jssor.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ReSharper disable once InconsistentNaming
var kendo;
(function (kendo) {
    var data;
    (function (data) {
        var binders;
        (function (binders) {
            var widget;
            (function (widget_1) {
                // ReSharper disable InconsistentNaming
                var JSSOR = "jssor";
                var JSSORCHANGE = 'change';
                // ReSharper restore InconsistentNaming
                // ReSharper disable once InconsistentNaming
                // ReSharper disable once RedundantQualifier
                var jssor = /** @class */ (function (_super) {
                    __extends(jssor, _super);
                    function jssor(widget, bindings, options) {
                        var _this = _super.call(this, widget.element[0], bindings, options) || this;
                        _this.widget = widget;
                        return _this;
                    }
                    // ReSharper disable once RedundantQualifier
                    jssor.prototype.init = function (widget, bindings, options) {
                        // ReSharper disable once SuperCall
                        // ReSharper disable once RedundantQualifier
                        kendo.data.Binder.fn.init.call(this, widget.element[0], bindings, options);
                        this.widget = widget;
                    };
                    jssor.prototype.refresh = function () {
                        var that = this;
                        if (that.widget) {
                            var value = that.bindings[JSSOR].get();
                            if (value) {
                                that.widget.setJssorOptions(value, false);
                            }
                        }
                    };
                    return jssor;
                }(kendo.data.Binder));
                widget_1.jssor = jssor;
            })(widget = binders.widget || (binders.widget = {}));
        })(binders = data.binders || (data.binders = {}));
    })(data = kendo.data || (kendo.data = {}));
})(kendo || (kendo = {}));
//# sourceMappingURL=kendo.jssor.binders.js.map