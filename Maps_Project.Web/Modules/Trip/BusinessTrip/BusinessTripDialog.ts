import { BusinessTripForm, BusinessTripRow, BusinessTripService } from '@/ServerTypes/Trip';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Maps_Project.Trip.BusinessTripDialog')
export class BusinessTripDialog extends EntityDialog<BusinessTripRow, any> {
    protected getFormKey() { return BusinessTripForm.formKey; }
    protected getRowDefinition() { return BusinessTripRow; }
    protected getService() { return BusinessTripService.baseUrl; }

    protected form = new BusinessTripForm(this.idPrefix);
   


}