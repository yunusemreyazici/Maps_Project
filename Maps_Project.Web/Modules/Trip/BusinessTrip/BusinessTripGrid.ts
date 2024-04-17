import { BusinessTripColumns, BusinessTripRow, BusinessTripService } from '@/ServerTypes/Trip';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { BusinessTripDialog } from './BusinessTripDialog';

@Decorators.registerClass('Maps_Project.Trip.BusinessTripGrid')
export class BusinessTripGrid extends EntityGrid<BusinessTripRow,any> {
    protected getColumnsKey() { return BusinessTripColumns.columnsKey; }
    protected getDialogType() { return BusinessTripDialog; }
    protected getRowDefinition() { return BusinessTripRow; }
    protected getService() { return BusinessTripService.baseUrl; }
}