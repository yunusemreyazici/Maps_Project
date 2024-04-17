import { BusinessTripDetailEditor } from "@/Trip/BusinessTripDetail/BusinessTripDetailEditor";
import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface BusinessTripForm {
    Title: StringEditor;
    Description: StringEditor;
    DetailList: BusinessTripDetailEditor;
}

export class BusinessTripForm extends PrefixedContext {
    static readonly formKey = 'Trip.BusinessTrip';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessTripForm.init)  {
            BusinessTripForm.init = true;

            var w0 = StringEditor;
            var w1 = BusinessTripDetailEditor;

            initFormType(BusinessTripForm, [
                'Title', w0,
                'Description', w0,
                'DetailList', w1
            ]);
        }
    }
}