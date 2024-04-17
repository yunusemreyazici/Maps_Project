import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { BusinessTripDetailRow } from "./BusinessTripDetailRow";

export interface BusinessTripDetailColumns {
    Id: Column<BusinessTripDetailRow>;
    BusinessTripTitle: Column<BusinessTripDetailRow>;
    Longitude: Column<BusinessTripDetailRow>;
    Latitude: Column<BusinessTripDetailRow>;
}

export class BusinessTripDetailColumns extends ColumnsBase<BusinessTripDetailRow> {
    static readonly columnsKey = 'Trip.BusinessTripDetail';
    static readonly Fields = fieldsProxy<BusinessTripDetailColumns>();
}