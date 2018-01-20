/// <reference path="kendo.jssor.transitions.ts" />
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