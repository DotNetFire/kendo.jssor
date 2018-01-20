/**
 * @file    typings\jssor\index.d.ts.
 *
 * @brief   Typescript definitions for Jssor slider
 */

//#region --[ classes ]--

/*~ Write your module's methods and properties in this class */

/**
 * Jssor slider class definition
 * @class   $JssorSlider$
 *
 * @brief   Jssor slider class definition.
 *
 * @author  Administrator
 * @date    20.01.2018
 */

declare class $JssorSlider$ {

    /**
     * Constructor of $JssorSlider$
     * @fn  constructor(container: string, options: IJssorOptions)
     *
     * @summary Constructor of $JssorSlider$
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @param   {string}    container   Id of the dome element represention the Jssor slider.
     * @param   {IJssorOptions} options Options for Jssor slider.
     */

    constructor(container: string, options: IJssorOptions);

    /**
     * Start auto play if the slider is currently paused
     * @fn  $Play(): void
     *
     * @brief   Start auto play if the slider is currently paused
     *
     * @author  Administrator
     * @date    19.01.2018
     */

    $Play(): void;

    /**
     * Pause the slider, prevent it from auto playing
     * @fn  $Pause(): void
     *
     * @brief   Pause the slider, prevent it from auto playing
     *
     * @author  Administrator
     * @date    19.01.2018
     */

    $Pause(): void;

    /**
     * Play slider to position 'slideIndex' within a period calculated base on 'slideDuration'
     * @fn  $PlayTo(slideIndex: number, slideDuration?: number): void
     *
     * @brief   Play slider to position 'slideIndex' within a period calculated base on
     *          'slideDuration'
     *
     * @author  Administrator
     * @date    17.01.2018
     *
     * @param   {number}    slideIndex      Zero-based index of the slide.
     * @param   {number}    slideDuration   (Optional) Time in milliseconds to slide to target
     *                                      position.
     */

    $PlayTo(slideIndex: number, slideDuration?: number): void;

    /**
     * Go to the specifed slide immediately with no play
     * @fn  $GoTo(slideIndex): void
     *
     * @brief   Go to the specifed slide immediately with no play
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @param   {number}    slideIndex  Zero-based index of the slide.
     */

    $GoTo(slideIndex: number): void;

    /**
     *  Play the slider to next slide
     * @fn  $Next(): void
     *
     * @brief   Play the slider to next slide
     *
     * @author  Administrator
     * @date    19.01.2018
     */

    $Next(): void;

    /**
     * Play the slider to previous slide
     * @fn  $Prev(): void
     *
     * @brief   Play the slider to previous slide
     *
     * @author  Administrator
     * @date    19.01.2018
     */

    $Prev(): void;

    /**
     * Scale the slider to exact size
     * @fn  $ScaleSize(width:number, height:number, blending?: number): void
     *
     * @brief   Scale the slider to exact size
     *
     * @author  Administrator
     * @date    19.01.2018
     *
     * @param   {number}    width       New width of slider container.
     * @param   {number}    height      New height of slider container.
     * @param   {number}    blending    (Optional) blending.
     */

    $ScaleSize(width:number, height:number, blending?: number): void;

    /**
     * Get scaled width the slider currently displays
     * @fn  $ScaleWidth(): number
     *
     * @brief   Get scaled width the slider currently displays
     *
     * @author  Administrator
     * @date    19.01.2018
     *
     * @return  {number}    Scaled width of slider container.
     */

    $ScaleWidth(): number;

    /**
     * Scale the slider to new width and keep aspect ratio
     * @fn  $ScaleWidth(width: number): void
     *
     * @brief   Scale the slider to new width and keep aspect ratio
     *
     * @author  Administrator
     * @date    19.01.2018
     *
     * @param   {number}    width   New width of slider container.
     */

    $ScaleWidth(width: number): void;

    /**
     * Get scaled height the slider currently displays
     * @fn  $ScaleHeight(): number
     *
     * @brief   Get scaled height the slider currently displays
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {number}   Current height of slider container.
     */

    $ScaleHeight(): number;

    /**
     * Scale the slider to new height and keep aspect ratio
     * @fn  $ScaleHeight(height: number): void
     *
     * @brief   Scale the slider to new height and keep aspect ratio
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @param   {number}    height  New height of slider container.
     */

    $ScaleHeight(height: number): void;

    /**
     * Get original width of the slider
     * @fn  $OriginalWidth(): number
     *
     * @brief   Get original width of the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {number}    Original width of the slider.
     */

    $OriginalWidth(): number;

    /**
     * Get original height of the slider
     * @fn  $OriginalHeight(): number
     *
     * @brief   Get original height of the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {number}    Original height of the slider.
     */

    $OriginalHeight(): number;

    /**
     * Reset slideshow transitions for the slider
     * @fn  $SetSlideshowTransitions(transitions: IJssorTransition[]): void
     *
     * @brief   Reset slideshow transitions for the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @param   {IJssorTransition[]}    transitions Array of transitions for slideshow.
     */

    $SetSlideshowTransitions(transitions: IJssorTransition[]): void;

    /**
     * Reset caption transitions for the slider
     * @fn  $SetCaptionTransitions(transitions: IJssorTransition[]): void
     *
     * @brief   Reset caption transitions for the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @param   {IJssorTransition[]}    transitions Array of transitions for caption.
     */

    $SetCaptionTransitions(transitions: IJssorTransition[]): void;

    /**
     * Get slides count of the slider
     * @fn  $SlidesCount(): number
     *
     * @brief   Get slides count of the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {number}   Number of slides in slider.
     */

    $SlidesCount(): number;

    /**
     * Get current slide index of the slider
     * @fn  $CurrentIndex(): number
     *
     * @brief   Get current slide index of the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {number}    Current slide index.
     */

    $CurrentIndex(): number;

    /**
     * @fn  $AutoPlay(): boolean
     *
     * @brief   Get auto play status of the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {boolean}   True if playing, false if not.
     */

    $AutoPlay(): boolean;

    /**
     * Set auto play type and start playing
     * @fn  $AutoPlay(value: number): void
     *
     * @brief   Set auto play type and start playing
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @param   {number}    value   Auto play type, values can be 0: no auto play, 1, continuously,
     *                              2: stop at last slide, 4: stop on click, 8: stop on user
     *                              navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
     */

    $AutoPlay(value: number): void;

    /**
     * Get drag status of the slider
     * @fn  $IsDragging(): boolean
     *
     * @brief   Get drag status of the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {boolean}   True if dragging, false if not.
     */

    $IsDragging(): boolean;

    /**
     * Get left &lt;--&gt; right sliding status of the slider
     * @fn  $IsSliding(): boolean
     *
     * @brief   Get left &lt;--&gt; right sliding status of the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {boolean}   True if sliding, false if not.
     */

    $IsSliding(): boolean;

    /**
     * Get mouse over status of the slider
     * @fn  $IsMouseOver(): boolean
     *
     * @brief   Get mouse over status of the slider
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {boolean}   True if mouse over, false if not.
     */

    $IsMouseOver(): boolean;

    /**
     *  Get last drag status
     * @fn  $LastDragSucceeded(): number
     *
     * @brief   Get last drag status
     *
     * @author  Administrator
     * @date    20.01.2018
     *
     * @return  {number}   Drag status, 0 if failed, drag offset if succeded.
     */

    $LastDragSucceeded(): number;
}

declare class $JssorArrowNavigator$ { }
declare class $JssorBulletNavigator$ { }
declare class $JssorThumbnailNavigator$ { }
declare class $JssorSlideshowRunner$ { }

/**
 * Jssor class that contains funtions for slideshow formations. The functions are used
 * by slideshow transitions.
 * @class   $JssorSlideshowFormations$
 *
 * @brief   Jssor class that contains funtions for slideshow formations. The functions are used
 *          by slideshow transitions.
 *
 * @author  Administrator
 * @date    20.01.2018
 */

declare class $JssorSlideshowFormations$ {
    static $FormationStraightStairs: (a: number) => number;
    static $FormationSwirl: (a: number) => number;
    static $FormationZigZag: (a: number) => number;
    static $FormationStraight: (a: number) => number;
    static $FormationRectangleCross: (a: number) => number;
    static $FormationRectangle: (a: number) => number;
    static $FormationCross: (a: number) => number;
    static $FormationCircle: (a: number) => number;

}

/**
 * Jssor class that contains funtions for easing.
 * @class   $Jease$
 *
 * @brief   Jssor class that contains funtions for easing.
 *
 * @author  Administrator
 * @date    20.01.2018
 */

declare class $Jease$ {

    static $Swing: (a: number) => number;
    static $Linear: (a: number) => number;
    static $InQuad: (a: number) => number;
    static $OutQuad: (a: number) => number;
    static $InOutQuad: (a: number) => number;
    static $InCubic: (a: number) => number;
    static $OutCubic: (a: number) => number;
    static $InOutCubic: (a: number) => number;
    static $InQuart: (a: number) => number;
    static $OutQuart: (a: number) => number;
    static $InOutQuart: (a: number) => number;
    static $InQuint: (a: number) => number;
    static $OutQuint: (a: number) => number;
    static $InOutQuint: (a: number) => number;
    static $InSine: (a: number) => number;
    static $OutSine: (a: number) => number;
    static $InOutSine: (a: number) => number;
    static $InExpo: (a: number) => number;
    static $OutExpo: (a: number) => number;
    static $InOutExpo: (a: number) => number;
    static $InCirc: (a: number) => number;
    static $OutCirc: (a: number) => number;
    static $InOutCirc: (a: number) => number;
    static $InElastic: (a: number) => number;
    static $OutElastic: (a: number) => number;
    static $InOutElastic: (a: number) => number;
    static $InBack: (a: number) => number;
    static $OutBack: (a: number) => number;
    static $InOutBack: (a: number) => number;
    static $InBounce: (a: number) => number;
    static $OutBounce: (a: number) => number;
    static $InOutBounce: (a: number) => number;
    static $GoBack: (a: number) => number;
    static $InWave: (a: number) => number;
    static $OutWave: (a: number) => number;
    static $OutJump: (a: number) => number;
    static $InJump: (a: number) => number;
    static $Early: (a: number) => number;
    static $Late: (a: number) => number;
}

//#endregion

//#region --[ options ]--

interface IJssorOptions {
    /**
    * The way to fill image in slide:
    *   0: stretch,
    *   1: contain (keep aspect ratio and put all inside slide),
    *   2: cover (keep aspect ratio and cover whole slide),
    *   4: actual size,
    *   5: contain for large image and actual size for small image,
    *   default value is 0.
    */
    $FillMode?: number;

    /**
    * For image with lazy loading format (<IMG src2="url" .../>), by default it will be loaded only when the slide comes.
    * But an integer value (maybe 1, 2 or 3) indicates that how far of nearby slides should be loaded immediately as well.
    * Default value is 1.
    */
    $LazyLoading?: number;

    /**
        * Index of a slide indicates which slide will display at the beginning.
        * Default value is 1, which means the first slide will display at the beginning.
        * For example, to display the 4th slide at the beginning, this option value should be 4.
    */
    $StartIndex?: number;

    /**
    * Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0.
    *   0: no auto play
    *   1: continuously
    *   2: stop at last slide
    *   4: stop on click
    *   8: stop on user navigation (click on arrow/bullet/thumbnail, swipe slide, press keyboard left, right arrow key)
    *   12: stop on click or user navigation
    */
    $AutoPlay?: number;

    /**
    * Steps to go for each auto play request.Possible value can be 1, 2, -1, -2 ...
    * Default value is 1
    */
    $AutoPlaySteps?: number;

    /**
    * Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1
    */
    $Loop?: number;

    /**
    * Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing
    * Default value is 3000
    */
    $Idle?: number;

    /**
    * Whether to pause when mouse over if a slider is auto playing,
    *     0: no pause
    *     1: pause for desktop
    *     2: pause for touch device
    *     3: pause for desktop and touch device
    *     4: freeze for desktop
    *     8: freeze for touch device
    *     12: freeze for desktop and touch device
    * Default value is 1
    */
    $PauseOnHover?: number;

    /**
    * Steps to go for each navigation request by pressing arrow key, default value is 1.
    */
    $ArrowKeyNavigation?: number;

    /**
    * Specifies default duration for right to left animation in milliseconds, default value is 500
    */
    $SlideDuration?: number;

    /**
    * Specifies easing for right to left animation, default value is  $Jease$.$OutQuad
    */
    $SlideEasing?: Function;

    /**
    * Minimum drag offset to trigger slide, default value is 20
    */
    $MinDragOffsetToSlide?: number;

    /**
    * Width of every slide in pixels, default value is width of 'slides' container
    */
    $SlideWidth?: number;

    /**
    * Height of every slide in pixels, default value is height of 'slides' container
    */
    $SlideHeight?: number;

    /**
    * Space between each slide in pixels, default value is 0
    */
    $SlideSpacing?: number;

    /**
    * Offset position (in pixel) to align active slide in 'slides' container
    * (slideshow will be disabled if this value is not 0).
    * Default is auto center ?? 0
    */
    $Align?: number;

    /**
    * Number of slides to display is up to size of the Slides Container
    * Default is 1
    */
    $Cols?: number;

    /**
    * The way (0 parellel, 1 recursive, default value is 1) to search UI components
    * (slides container, loading screen, navigator container, arrow navigator container,
    * thumbnail navigator container etc).
    */
    // ReSharper disable once InconsistentNaming
    $UISearchMode?: number;

    /**
    * Orientation to play slide (for auto play, navigation), 1: horizental, 2: vertical
    */
    $PlayOrientation?: number;

    /**
    * Orientation to drag slide,
    * 0: no drag
    * 1: horizontal
    * 2: vertical
    * 3: either (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
    */
    $DragOrientation?: number;

    /**
    * Options to specify and enable navigator or not
    * Default value is null
    */
    $BulletNavigatorOptions?: IBulletNavigatorOptions;

    /**
    * Options to specify and enable arrow navigator or not
    */
    $ArrowNavigatorOptions?: IArrowNavigatorOptions;

    /**
    * Options to specify and enable thumbnail navigator or not
    */
    $ThumbnailNavigatorOptions?: IThumbnailNavigatorOptions;

    /**
    * Options to specify and enable slideshow or not
    */
    $SlideshowOptions?: ISlideshowOptions;
}

interface IBulletNavigatorOptions {
    /**
    * Class to create navigator instance
    * Default value is $JssorBulletNavigator$
    */
    $Class: $JssorBulletNavigator$;

    /**
    * 0: Never, 1: Mouse Over, 2: Always
    * Default value is 2
    */
    $ChanceToShow: number;

    /**
    * 0: None, 1: act by click, 2: act by mouse hover, 3: both,
    * Default value is 1
    */
    $ActionMode?: number;

    /**
    * Steps to go for each navigation request
    * Default value is 1
    */
    $Steps?: number;

    /**
    * Rows to arrange bullets
    * Default value is 1
    */
    $Rows?: number;

    /**
    * Horizontal space between each item in pixel
    * Default value is 10
    */
    $SpacingX?: number;

    /**
    * Vertical space between each item in pixel
    * Default value is 10
    */
    $SpacingY?: number;

    /**
    * The orientation of the navigator, 1 horizontal, 2 vertical
    * Default value is 1
    */
    $Orientation?: number;
}

interface IArrowNavigatorOptions {

    /**
    * Class to create arrow navigator instance
    * Default value is "$JssorArrowNavigator$"
    */
    $Class: $JssorArrowNavigator$;

    /**
    * 0: Never, 1: Mouse Over, 2: Always
    * Default value is 2
    */
    $ChanceToShow: number;

    /**
    * Steps to go for each navigation request
    * Default value is 1
    */
    $Steps?: number;
}

interface IThumbnailNavigatorOptions {

    /**
    * Class to create thumbnail navigator instance
    * Default value is $JssorThumbnailNavigator$
    */
    $Class: any;

    /**
    * 0: Never, 1: Mouse Over, 2: Always
    * Default value is 2
    */
    $ChanceToShow: number;

    /**
    * Enable loop(circular) of carousel or not, 0: stop, 1: loop, default value is 1
    * Default value is 1
    */
    $Loop?: number;

    /**
    * 0: None, 1: act by click, 2: act by mouse hover, 3: both, default value is 1
    * Default value is 1
    */
    $ActionMode?: number;


    /**
    * Specify rows to arrange thumbnails
    * Default value is 1
    */
    $Rows?: number;

    /**
    * Horizontal space between each thumbnail in pixel
    * Default value is 0
    */
    $SpacingX?: number;

    /**
    * Vertical space between each thumbnail in pixel
    * Default value is 0
    */
    $SpacingY?: number;

    /**
    * The offset position to park active thumbnail
    * Default value is "auto"
    */
    $Align?: number;

    /**
    * Orientation to arrange thumbnails, 1: horizental, 2: vertical
    * Default value is 1
    */
    $Orientation?: number;

    /**
    * Disable drag or not
    * Default value is false
    */
    $NoDrag?: boolean;
}

interface ISlideshowOptions {

    /**
    * Class to create instance of slideshow
    * Default value is "$JssorSlideshowRunner$"
    */
    $Class: Function;

    /**
    * An array of slideshow transitions to play slideshow
    */
    $Transitions: IJssorTransition[];

    /**
    * The way to choose transition to play slideshow, 1: Sequence, 0: Random
    * Default value is 1
    */
    $TransitionsOrder?: number;

    /**
    * Whether to bring slide link on top of the slider when slideshow is running
    * default value is false
    */
    $ShowLink?: boolean;
}

//#endregion

//#region --[ transitions ]--

interface IJssorTransitionDuring {
    $Left?: number[];
    $Top?: number[];
    $Rotate?: number[];
    $Zoom?: number[];
    $Clip?: number[];
}

interface IJssorTransitionEasing {
    $Opacity?: ((a: number) => number);
    $Left?: ((a: number) => number);
    $Top?: ((a: number) => number);
    $Clip?: ((a: number) => number);
    $Rotate?: ((a: number) => number);
    $Zoom?: ((a: number) => number);
    $Fade?: ((a: number) => number);
}

interface IJssor$ChessMode {
    $Column?: number;
    $Row?: number;
}

interface IJssorTransitionRound {
    $Left?: number;
    $Top?: number;
    $Rotate?: number;
}

interface IJssorTransition {
    $Duration: number;
    $Opacity?: number;
    x?: number;
    y?: number;
    $Cols?: number;
    $Rows?: number;
    $SlideOut?: boolean;
    $Outside?: boolean;
    $Delay?: number;
    $Clip?: number;
    $Assembly?: number;
    $Formation?: ((a: number) => number);
    $Zoom?: number | number[];
    $Rotate?: number | number[];
    $Shift?: number;
    $ZIndex?: number;
    $During?: IJssorTransitionDuring;
    $Reverse?: boolean;
    $Move?: boolean;
    $ScaleClip?: number;
    $Easing?: ((a: number) => number) | IJssorTransitionEasing;
    $ChessMode?: IJssor$ChessMode;
    $Brother?: IJssorTransition;
    $Round?: IJssorTransitionRound;

}

//#endregion

//#region --[ templates ]--

interface ITemplateSettings {
    itemWidth: number;
    itemHeight: number;

    // bullet
    posRight?: number;
    posBottom?: number;

    // arrow
    poslLeft?: number;
    posrRight?: number;

    // bullet + arrow
    posAutoCenter: number;
    bhvScaleL: number;

    // bullet + arrow + thumbnail
    bhvScalePos: number;

    // thumbnail
    cntrWidth?: number,
    cntrAutoCenter?: number,
    itemOrientation?: number,

}

interface ITemplate {
    id: string;
    type: string;
    name: string;
    note?: string;
    css: string;
    html: string;
    itemHtml?: string;
    defaultValue: ITemplateSettings;
}

//#endregion

declare module "jssor" {
    export = $JssorSlider$;
}

/**
// End of typings\jssor\index.d.ts
 */

