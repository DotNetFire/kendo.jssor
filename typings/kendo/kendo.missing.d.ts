/// <reference path="kendo.all.d.ts" />

// ReSharper disable once InconsistentNaming
declare namespace kendo {
    function attr(value: string): string;
}

// ReSharper disable once InconsistentNaming
declare namespace kendo.ui {
    class DataBoundWidget extends Widget {
        dataSource: kendo.data.DataSource;
    }
}