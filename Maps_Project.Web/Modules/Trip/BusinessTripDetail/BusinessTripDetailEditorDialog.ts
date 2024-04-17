import { BusinessTripDetailForm, BusinessTripDetailRow, BusinessTripDetailService } from '@/ServerTypes/Trip';
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { EditorDialogBase } from '../../_Ext/Editors/EditorDialogBase';
import * as L from 'leaflet';

@Decorators.registerClass('Maps_Project.Trip.BusinessTripDetailEditorDialog')



//// Define map options
//const mapOptions: L.MapOptions = {
//    center: [51.505, -0.09],
//    zoom: 13
//};


//const map = L.map('map', mapOptions);

//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


export class BusinessTripDetailEditorDialog extends EditorDialogBase<BusinessTripDetailRow> {
    protected getFormKey() { return BusinessTripDetailForm.formKey; }
    protected getRowDefinition() { return BusinessTripDetailRow; }
    protected getService() { return BusinessTripDetailService.baseUrl; }

    protected form = new BusinessTripDetailForm(this.idPrefix);
}