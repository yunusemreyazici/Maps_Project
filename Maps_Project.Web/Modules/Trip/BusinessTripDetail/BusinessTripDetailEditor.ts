import { Decorators, extend } from "@serenity-is/corelib";
import { BusinessTripDetailColumns, BusinessTripDetailRow } from "../../ServerTypes/Trip";
import { GridEditorBase } from "../../_Ext/Editors/GridEditorBase";
import { BusinessTripDetailEditorDialog } from "./BusinessTripDetailEditorDialog";

@Decorators.registerEditor('Maps_Project.Trip.BusinessTripDetailEditor')
export class BusinessTripDetailEditor extends GridEditorBase<BusinessTripDetailRow> {
    protected getColumnsKey() { return BusinessTripDetailColumns.columnsKey; }
    protected getDialogType() { return BusinessTripDetailEditorDialog; }
    protected getLocalTextPrefix() { return BusinessTripDetailRow.localTextPrefix; }
    public tripID: number;
    constructor(container: JQuery) {
        super(container);
    }
}