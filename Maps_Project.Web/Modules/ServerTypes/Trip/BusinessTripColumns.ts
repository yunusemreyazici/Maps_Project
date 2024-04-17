import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { BusinessTripRow } from "./BusinessTripRow";

export interface BusinessTripColumns {
    Id: Column<BusinessTripRow>;
    Title: Column<BusinessTripRow>;
    Description: Column<BusinessTripRow>;
}

export class BusinessTripColumns extends ColumnsBase<BusinessTripRow> {
    static readonly columnsKey = 'Trip.BusinessTrip';
    static readonly Fields = fieldsProxy<BusinessTripColumns>();
}