// ReSharper disable once DuplicateReferenceComment
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="kendo.jssor.ts" />


// ReSharper disable once InconsistentNaming
module kendo.data.binders.widget {

    // ReSharper disable InconsistentNaming
    var JSSOR: string = "jssor";
    var JSSORCHANGE: string = 'change';
    // ReSharper restore InconsistentNaming

    // ReSharper disable once InconsistentNaming
    // ReSharper disable once RedundantQualifier
    export class jssor extends kendo.data.Binder {
        

        // ReSharper disable once InconsistentNaming
        private _change: Function;
        private widget: kendo.ui.jssor.Jssor;

        constructor(widget: any, bindings: Bindings, options?: BinderOptions) {
            super(widget.element[0], bindings, options);
            this.widget = <kendo.ui.jssor.Jssor>widget;
        }

        // ReSharper disable once RedundantQualifier
        init(widget: any, bindings: Bindings, options?: BinderOptions) {

            // ReSharper disable once SuperCall
            // ReSharper disable once RedundantQualifier
            kendo.data.Binder.fn.init.call(this, widget.element[0], bindings, options);
            this.widget = <kendo.ui.jssor.Jssor>widget;
        }

        refresh() {
            var that = this;

            if (that.widget) {
                var value: IJssorOptions = that.bindings[JSSOR].get();
                if (value) {
                    that.widget.setJssorOptions(value, false);
                }
            }
        }

    }
}
