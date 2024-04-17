import { fieldsProxy } from "@serenity-is/corelib";

export interface BusinessTripDetailRow {
    Id?: number;
    BusinessTripId?: number;
    Latitude?: number;
    Longitude?: number;
    BusinessTripTitle?: string;
}

export abstract class BusinessTripDetailRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'Trip.BusinessTripDetail';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<BusinessTripDetailRow>();
}