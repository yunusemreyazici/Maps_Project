import { fieldsProxy } from "@serenity-is/corelib";
import { BusinessTripDetailRow } from "./BusinessTripDetailRow";

export interface BusinessTripRow {
    Id?: number;
    Title?: string;
    Description?: string;
    DetailList?: BusinessTripDetailRow[];
}

export abstract class BusinessTripRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'Trip.BusinessTrip';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<BusinessTripRow>();
}