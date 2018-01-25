"use strict";

// ReSharper disable once InconsistentNaming
module kendo.ui.jssor.transition {

    export enum TransitionGroupType {
        Fade = 0,
        Twins = 1,
        Rotate = 2,
        Zoom = 3,
        Collapse = 4,
        Expand = 5,
        Float = 6,
        Fly = 7,
        Stripe = 8,
        Parabola = 9,
        SwingInside = 10,
        DodgeDanceInside = 11,
        DodgePetInside = 12,
        DodgeInside = 13,
        FlutterInside = 14,
        Compound = 15,
        WaveOut = 16,
        WaveIn = 17,
        JumpOut = 18,
        JumpIn = 19,
        Stone = 20
    }
    export interface ITrandsitionGroupElement {
        name: string;
        group: TransitionGroupType;
        transition: string;
    }
}

