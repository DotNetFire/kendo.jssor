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