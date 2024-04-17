import { DecimalEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface BusinessTripDetailForm {
    Longitude: DecimalEditor;
    Latitude: DecimalEditor;
}

export class BusinessTripDetailForm extends PrefixedContext {
    static readonly formKey = 'Trip.BusinessTripDetail';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessTripDetailForm.init)  {
            BusinessTripDetailForm.init = true;

            var w0 = DecimalEditor;

            initFormType(BusinessTripDetailForm, [
                'Longitude', w0,
                'Latitude', w0
            ]);
        }
    }
}