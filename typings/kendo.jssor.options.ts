/// <reference path="kendo.jssor.transitions.ts" />
"use strict";

module kendo.ui.jssor {
    import ITransitionGroupElement = ui.jssor.transition.ITransitionGroupElement;

    //#region --[ enums ]--

    export enum ShowType {
        Never = 0,
        MouseOver = 1,
        Always = 2
    }

    export enum BulletActionType {
        None = 0,
        Click = 1,
        MouseHover = 2,
        ClickOrMouseHover = Click + MouseHover
    }

    export enum LoopType {
        No = 0,
        Yes = 1,
        Rewind = 2
    }

    export enum PauseOnHoverType {
        NoPause = 0,
        PauseForDesktop = 1,
        PauseForTouch = 2,
        PauseForDesktopAndTouch = PauseForDesktop + PauseForTouch,
        FreezeForDesktop = 4,
        FreezeForTouch = 8,
        FreezeForDesktopAndTouch = FreezeForDesktop + FreezeForTouch
    }

    export enum DragOrientationType {
        NoDrag = 0,
        Horizontal = 1,
        Vertical = 2,
        Either = 3
    }

    export enum EaseType {
        Swing,
        Linear,
        InQuad,
        OutQuad,
        InOutQuad,
        InCubic,
        OutCubic,
        InOutCubic,
        InQuart,
        OutQuart,
        InOutQuart,
        InQuint,
        OutQuint,
        InOutQuint,
        InSine,
        OutSine,
        InOutSine,
        InExpo,
        OutExpo,
        InOutExpo,
        InCirc,
        OutCirc,
        InOutCirc,
        InElastic,
        OutElastic,
        InOutElastic,
        InBack,
        OutBack,
        InOutBack,
        InBounce,
        OutBounce,
        InOutBounce,
        GoBack,
        InWave,
        OutWave,
        OutJump,
        InJump,
        Early,
        Late
    }

    export enum AutoPlayType {
        /**
         * Disable auto play
         */
        No = 0,
        /**
         * Auto play continuously
         */
        Yes = 1,
        /**
         *  Auto play and stop at last slide
         */
        StopAtLastSlide = 2,
        /**
         * Auto play and stop when when user click on any slide
         */
        StopOnClick = 4,
        /**
         * Auto play and stop when user click arrow/ bullet / thumbnail navigator, drag slide, arrow key
         */
        StopOnUserNavigation = 8,
        /**
         * Auto play and stop on either user click or user navigation.
         */
        StopOnClickOrUserNavigation = StopOnClick + StopOnUserNavigation
    }

    export enum OrientationType {
        Horizontal = 1,
        Vertical = 2,
    }

    export enum AutocenterType {
        None = 0,
        Horizontal = 1,
        Vertical = 2,
    }

    export enum SlideFillmodeType {
        /**
         * Stretch main image to fill full area of slide.
         */
        Stretch = 0,
        /**
         * Scale main image and put it all inside at center of slide area.
         */
        Contain = 1,
        /**
         * Scale main image and let it cover full area of slide.
         */
        Cover = 2,
        /**
         * Keep original size of main image and put it at center of slide area.
         */
        ActualSize = 4,

        /**
         * Will use 'contain' for large image and 'actualSize' for small image.
         */
        ContainAndActual = 5
    }

    export enum ResponsiveScaleType {
        NoScale = 0,

        /**
         * Scale the slider to parent container width.
         */
        ParentWidth = 1,
        /**
         * Scale the slider to parent container height.
         */
        ParentHeight = 2,

        /**
         * Scale to window size (Flex Mode): Scale slider to browser window size.
         */
        WindowSizeFlex = 3,
        /**
         *  Scale to window size (Constrain Mode): Scale slider to browser window size, and prevent bullets/arrows from moving aside.
         */
        WindowSizeConstrain = 4,
        /**
         * Scale to parent size (Cover Mode): Scale the slider to parent container size.
         */
        ParentSizeCover = 5,
        /**
         * (Constrain Mode): Scale the slider to parent container size, and prevent bullets/arrows from moving aside.
         */
        ParentSizeConstrain = 6,
    }

    export enum TransitionsOrderType {
        Random = 0,
        Sequence = 1
    }

    //#endregion

    export interface IContainer {

        /**
         * Width of Outer Container.
         * Outer Container is the main container which respresents the whole slider, it contains Slides Container.
         * In addition, user can insert Bullet Navigator, Arrow Navigator, Thumbnail Navigator and Loading Screen into Outer Container if necessary.
         * [Required]
         */
        width?: number;

        /**
         * Height of Outer Container.
         * [Required]
         */
        height: number;

        /**
         * Background color of Outer Container.
         * [Optional]
         */
        bgColor?: string;

        /**
         * Background Image of the outer container.
         * [Optional]
         */
        bgImageUrl?: string;
    }

    export interface ISlideContainer {

        /**
         * x offset to Outer Container
         * Default value is 0
         * [Optional]
         */
        x?: number;

        /**
         * y offset to Outer Container
         * Default value is 0
         *  [Optional]
         */
        y?: number;

        /**
         * Width of Slides Container.
         * All slides are placed in Slides Container.
         * If the width of Slides Container is larger than Slide width, it will display multiple slides in the Slides Container.
         * Default value is width of Outer Container
         *  [Optional]
         */
        width?: number;

        /**
         * Height of Slides Container.
         * Default value is height of Outer Container
         *  [Optional]
         */
        height?: number;
    }

    export interface ISlide {

        /**
         * Width of every slide.
         * Default value is width of Slide Container
         * [Optional]
         */
        width?: number;

        /**
         * Height of every slide.
         * Default value is height of Slide Container
         * [Optional]
         */
        height?: number;

        /**
         * If size of Slides Container is not specified, this value specifies number of slides to
         * display in the Slides Container.
         * JSSOR: $Cols
         * Default value is 1
         * [Optional]
         */
        columns?: number;

        /**
         * spacing (in pixel) between slides.
         * JSSOR: $SlideSpacing
         * Default value is 0
         * [Optional]
         */
        spacing?: number;

        /**
         * Offset position (in pixel) to align current slide in Slides Container,
         * if this option is not specified, current slide will align to center of Slides Container.
         * JSSOR: $Align
         * Default value is undefined
         * [Optional]
         */

        align?: number;

        /**
         * Orientation to arrange slides, default value is 'horizontal'.
         * This option also indicates 'orientaiton' to play (if 'Auto Play' is enabled).
         * JSSOR: $PlayOrientation
         * Default value is OrientationType.Horizontal
         * [Optional]
         */
        orientation?: OrientationType;

        /**
         * The way to fill main image in each slide, default value is 'stretch'.
         * JSSOR: $FillMode
         * Default value is SlideFillmodeType.Stretch
         * [Optional]
         */
        fillmode?: SlideFillmodeType;

    }

    export interface IResponsiveScale {
        /**
         * Specifies the way to scale the slider while window resizing.
         * [Required]
         */
        scaleTo: ResponsiveScaleType;

        /**
         * Specifies a maximum bleeding value to limit slider content from bleeding too much outside window (or its parent container), default value is 12.8%.
         * 0%: no content will bleed outside, the slider will be all inside window (or its parent container).
         * 100%: allow up to 100% to bleed outside, the slider will cover full area of window (or its parent container)
         * 10%: allow up to 10% to bleed outside
         * [Optional]
         */
        blending?: number;

        /**
         * Specifies width limit to prevent slider from scaling too large. Default value is slider original width.
         * [Optional]
         */
        maxWidth?: number;
        /**
         * Specifies height limit to prevent slider from scaling too large. Default value is slider original height.
         * [Optional]
         */
        maxHeight?: number;

    }

    export interface ITemplateBase {
        id?: string;
        templateFile?: string;
        name?: string;
        note?: string;
        css?: string[];
    }

    //#region --[ loading ]--

    export interface ILoading extends ITemplateBase {

        /**
         * class attribute for loading control
         */
        cssClass: string;

        /**
         * Height of loading image
         * [Required]
         */
        itemWidth: number;

        /**
         * Width of  loading image
         * [Required]
         */
        itemHeight: number;

        /**
         * Background color of loading image
         */
        bgColor?: string;

        /**
         * Svg to render
         * [Required]
         */
        svg: string;

    }

    //#endregion

    //#region --[ arrow navigation ]--

    export interface IArrow {

        /**
         * class attribute for arrow container
         */
        cssClass: string;

        /**
         * Svg to render
         * [Required]
         */
        svg: string;

        /**
         * Horizontal offset from top in pixel
         * [Required]
         */
        horizontalOffset: number;

        /**
         * Vertical offset from right in pixel
         * [Required]
         */
        verticalOffset: number;
    }

    export interface IArrowTheme extends ITemplateBase {

        /**
         * Specifies the way to display arrows, default value is Always.
         * Always:     Always diaplsy arrow items.
         * Mouse Over: Displays arrow items while 'mouse hovering' on the slider.
         * Never:      Don't display arrow items.
         * JSSOR: $ChanceToShow
         * Default value is ShowType.Always
         */
        show?: ShowType;

        /**
         * Autocenter vertical or horzontal; none for no autocenter
         * Default value is none
         */
        autoCenter?: AutocenterType;

        /**
         * Steps to go for every click, default value is 1.
         */
        steps?: number;

        /**
         * Height of arrow svg
         * [Required]
         */
        itemWidth: number;

        /**
         * Width of arrow svg
         * [Required]
         */
        itemHeight: number;

        /**
         * A numeric value from 0 to 1 indicates ratio to scale size of the element while slider is scaling, default value is 1.
         * 1: Scale at the same ratio of the slider.
         * 0: Don't scale.
         * 0.3, 0.5, 0.7 etc.: Scale at intermediate ratio.
         * 
         */
        itemScale?: number;

        /**
         * A numeric value from 0 to 1 indicates ratio to scale position of the element while slider is scaling, default value is 1.
         * 1: Scale at the same ratio of the slider.
         * 0: Don't scale.
         * 0.3, 0.5, 0.7 etc.: Scale at intermediate ratio.
         */
        positionScale?: number;

        /**
         * Arrow definition for left arrow
         * [Required]
         */
        leftArrow: IArrow;

        /**
         * Arrow definition for right arrow
         * [Required]
         */
        rightArrow: IArrow;

    }

    //#endregion

    //#region --[ bullet navigation ]--

    export interface IBulletTheme extends ITemplateBase {

        /**
         * class attribute for bullet container
         */
        cssClass: string;

        /**
         * Specifies the way to display arrows, default value is Always.
         * Always:     Always diaplsy arrow items.
         * Mouse Over: Displays arrow items while 'mouse hovering' on the slider.
         * Never:      Don't display arrow items.
         * JSSOR: $ChanceToShow
         * Default value is ShowType.Always
         */
        show?: ShowType;

        /**
         * Autocenter vertical or horzontal; none for no autocenter
         * Default value is none
         */
        autoCenter?: AutocenterType;

        /**
         * Height of bullet svg
         */
        itemWidth: number;

        /**
         * Width of bullet svg
         */
        itemHeight: number;

        /**
         * A numeric value from 0 to 1 indicates ratio to scale size of the element while slider is scaling, default value is 1.
         * 1: Scale at the same ratio of the slider.
         * 0: Don't scale.
         * 0.3, 0.5, 0.7 etc.: Scale at intermediate ratio.
         * 
         */
        itemScale?: number;

        /**
         * A numeric value from 0 to 1 indicates ratio to scale position of the element while slider is scaling, default value is 1.
         * 1: Scale at the same ratio of the slider.
         * 0: Don't scale.
         * 0.3, 0.5, 0.7 etc.: Scale at intermediate ratio.
         */
        positionScale?: number;

        /**
         * Horizontal space between each item in pixel
         * Default value is 10
         * JSSOR: $SpacingX
         * [Optional]
         */
        spacingX?: number;

        /**
         * Vertical space between each item in pixel
         * Default value is 10
         * JSSOR: $SpacingY
         * [Optional]
         */
        spacingY?: number;

        /**
         * Rows to arrange bullets
         * Default value is 1
         * JSSOR: $Rows
         * [Optional]
         */
        rows?: number;

        /**
         * Steps to go for each navigation request
         * Default value is 1
         * JSSOR: $Steps
         * [Optional]
         */
        steps?: number;

        /**
         * The orientation of the navigator
         * Default value is OrientationType.Horizontal
         * JSSOR: $Orientation
         * [Optional]
         */
        orientation?: OrientationType;

        /**
         * Horizontal offset from bottom in pixel
         * [Required]
         */
        horizontalOffset: number;

        /**
         * Vertical offset from right in pixel
         * [Required]
         */
        verticalOffset: number;

        /**
         * Specifies the way to trigger navigation
         * BulletActionType.Click: Triggers navigation by click on each bullet item.
         * BulletActionType.MouseOver: Triggers navigation by 'mouse hovering' on each bullet item.
         * Default value is BulletActionType.Click
         * JSSOR: $ActionMode
         * [Optional]
         */
        action?: BulletActionType;

        /**
         * Font size for numbered bullets, default value is undefined.
         * [Optional]
         */
        fontSize?: string;

        /**
         * Font line height for numbered bullets, default value is undefined.
         * [Optional]
         */
        lineHeight?: string;

        /**
         * Svg to render
         * [Required]
         */
        svg: string;

    }

    //#endregion

    //#region --[ thumbnail navigation ]--

    export interface IThumbnailTheme extends ITemplateBase {

        /**
         * class attribute for bullet container
         */
        cssClass: string;

        /**
         * Width of thumbnail container
         * [Required]
         */
        width?: number;

        /**
         * Height of thumbnail container
         * [Required]
         */
        height?: number;

        /**
         * Autocenter vertical or horzontal; none for no autocenter
         * Default value is none
         */
        autoCenter?: AutocenterType;

        /**
         * Top offset to slider container
         * Default value is undefined
         * [Optional]
         */
        top?: number;

        /**
         * Left offset to slider container
         * Default value is undefined
         * [Optional]
         */
        left?: number;

        /**
         * Bottom offset to slider container
         * Default value is 0
         * [Optional]
         */
        bottom?: number;

        /**
         * Right offset to slider container
         * Default value is 0
         * [Optional]
         */
        right?: number;

        /**
         * Background color of Thumbnail Container.
         * [Optional]
         */
        bgColor?: string;

        /**
         * Width of each thumbnail item
         * [Required]
         */
        itemWidth: number;

        /**
         * Height of each thumbnail item
         * [Required]
         */
        itemHeight: number;

        /**
         * Horizontal space between each item in pixel
         * Default value is 0
         * JSSOR: $SpacingX
         * [Optional]
         */
        spacingX?: number;

        /**
         * Vertical space between each item in pixel
         * Default value is 0
         * JSSOR: $SpacingY
         * [Optional]
         */
        spacingY?: number;

        /**
         * Rows to arrange thumbnail
         * Default value is 1
         * JSSOR: $Rows
         * [Optional]
         */
        rows?: number;

        /**
         * The orientation of the navigator
         * Default value is OrientationType.Horizontal
         * JSSOR: $Orientation
         * [Optional]
         */
        orientation?: OrientationType;

        /**
         * Offset position (in pixel) to align the active thumbnail item in the carousel.
         * Note that if this option is not specified, it will align the active thumbnail item to the center of carousel.
         * Default value is undefined
         */
        align?: number;

        /**
         * Specifies the way to trigger navigation
         * Click: Triggers navigation by click on each bullet item.
         * MouseOver: Triggers navigation by 'mouse hovering' on each bullet item.
         * Default value is BulletActionType.Click
         * JSSOR: $ActionMode
         * [Optional]
         */
        action?: BulletActionType; //TODO???????????????????

        /**
         * Specifies the way to display arrows, default value is Always.
         * Always:     Always diaplsy arrow items.
         * Mouse Over: Displays arrow items while 'mouse hovering' on the slider.
         * Never:      Don't display arrow items.
         * JSSOR: $ChanceToShow
         * Default value is ShowType.Always
         */
        show?: ShowType;

        /**
         * A numeric value from 0 to 1 indicates ratio to scale position of the element while slider is scaling, default value is 1.
         * 1: Scale at the same ratio of the slider.
         * 0: Don't scale.
         * 0.3, 0.5, 0.7 etc.: Scale at intermediate ratio.
         */
        positionScale?: number;

        /**
         * Enables loop of the thumbnail carousel or not
         * default value is true
         * JSSOR:  $Loop
         * [Optional]
         */
        loop?: boolean;

        /**
         * Determines whether to disable drag swipe feature for the thumbnail carousel or not.
         * Default value is false
         * JSSOR: $NoDrag
         */
        noDrag?: boolean;

        /**
         * Html to render for each thumbnail item
         */
        itemHtml?: string;

        /**
         * Svg to display within thumbnail item
         * [Optional]
         */
        svg?: string;
    }

    //#endregion

    //#region --[ slideshow ]--

    export interface ISlideshow {

        enabled: boolean;

        /**
        * An array of slideshow transitions to play slideshow
        */
        transitions: ITransitionGroupElement[];

        /**
        * The way to choose transition to play slideshow:
        * Sequence: Play transitions in sequence
        * Random: Randomly choose transitions
        * Default value is Random
        */
        order: TransitionsOrderType;

        /**
        * Whether to bring slide link on top of the slider when slideshow is running
        * default value is false
        */
        showLink: boolean;
    }

    //#endregion

    export interface IJssorTheme {

        id?:string;

        /**
         * Auto play or not, default value is [No]
         * JSSOR: $AutoPlay
        */
        autoPlay: AutoPlayType;

        center?: boolean;

        /**
         * An integer value indicates steps to go for each 'auto play' navigation request, default value is 1.
         * Possible value can be 1, 2, -1, -2 ...
         * Note that this optionworks only when Auto Play is enabled and Slideshow is disabled.
         * JSSOR: $AutoPlaySteps
         * [Optional]
         */
        autoPlaySteps?: number;

        /**
         * Index of a slide indicates which slide will display at the beginning.
         * Default value is 1, which means the first slide will display at the beginning.
         * For example, to display the 4th slide at the beginning, this option value should be 4.
         * JSSOR: $StartIndex
         * [Optional]
         */
        startSlide?: number;

        /**
         * Enable loop of carousel (when drag or click on arrow) or not, default value is [Yes].
         * [Yes] loop carousel infinitely.
         * [No] disable loop, it will stop at first slide and last slide.
         * Rewind means disable loop, it will rollback to first slide when it requests for next slide on last slide.
         * JSSOR: $Loop
         * [Optional]
         */
        loop?: LoopType;

        /**
         * Whether to pause when mouse over if a slider is auto playing,
         * Default value is PauseOnHoverType.PauseForDesktop
         * JSSOR: $PauseOnHover
         * [Optional]
        */
        pauseOnHover?: PauseOnHoverType;

        /**
         * The orientation to drag slide, default value is DragOrientationType.Horizontal.
         * JSSOR: $DragOrientation
         * [Optional]
         */
        dragOrientation?: DragOrientationType,

        /**
         * The minimum drag offset (in pixel) to trigger navigation request, default value is 20.
         * JSSOR: $MinDragOffsetToSlide
         * [Optional]
         */
        minDragOffsetToSlide?: number,

        /**
         * If this option is enabled, it will trigger navigation requst when keyboard is
         * pressed on 'left' or 'right' arrow key.
         * Default value is true
         * [Optional]
         */
        keyboardNavigation?: boolean;

        /**
         * Steps to go for each navigation request by pressing arrow key, default value is 1.
         * JSSOR: $ArrowKeyNavigation
         * [Optional]
         */
        keyboardNavigationSteps? : number;

        /**
         * Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing
         * Default value is 3000
         * JSSOR: $Idle
         * [Optional]
         */
        idle?: number;

        /**
         * The duration (in milliseconds) to complete sliding left <-> right effect through a slide,
         * default value is 500.
         * Duration to complete sliding left <-> right effect through multiple slides will be calculated base on this option.
         * JSSOR: $SlideDuration
         * [Optional]
         */
        duration?: number;

        /**
         * The 'ease' to play sliding left <-> right animation on slide, default value is 'OutQuad'
         * 'ease' means variation of speed to complete an animation. This option specifies 'ease' for sliding left <-> right animation.
         * JSSOR: $SlideEasing
         * [Optional]
         */
        ease?: EaseType;

        /**
         * load slides lacy
         * JSSOR: $LazyLoading
         * [Optional]
         */
        lazyLoading?: boolean;

        /**
         * Number of images to preload if lazyLoading is true
         * Default value is 1
         * JSSOR: $LazyLoading
         * [Optional]
         */
        numImages2Preload?: number;

        container: IContainer;
        slideContainer: ISlideContainer;
        slide?: ISlide;
        responsive?: IResponsiveScale;

        debugLoading?: boolean;
        loading?: ILoading;

        slideshow?: ISlideshow;

        arrowNavigation?: IArrowTheme;
        bulletNavigation?: IBulletTheme;
        thumbnailNavigation?: IThumbnailTheme;
    }

    // ReSharper disable once InconsistentNaming
    export class defaults {

        public static jssorOptions: (() => IJssorTheme) = () => {
            var x: IJssorTheme = {
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

        public static arrow: (() => IArrowTheme) = () => {
            var a =
            {
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

        }
        public static bullet: (() => IBulletTheme) = () => {
            var b: IBulletTheme = {
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
        }

        public static thumbnail: (() => IThumbnailTheme) = () => {
            var t: IThumbnailTheme = {
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
        }

        public static responsive: IResponsiveScale = {
            maxWidth: 2000,
            maxHeight: 1000,
            blending: 0.28,
            scaleTo: kendo.ui.jssor.ResponsiveScaleType.WindowSizeFlex
        }
    }

}

