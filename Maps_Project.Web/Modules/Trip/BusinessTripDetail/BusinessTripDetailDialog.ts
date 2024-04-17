import { BusinessTripDetailForm, BusinessTripDetailRow, BusinessTripDetailService } from '@/ServerTypes/Trip';
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import * as L from 'leaflet';

@Decorators.registerClass('Maps_Project.Trip.businesstripdetail')
export class BusinessTripDetailDialog extends EntityDialog<BusinessTripDetailRow, any> {
    protected getFormKey() { return BusinessTripDetailForm.formKey; }
    protected getRowDefinition() { return BusinessTripDetailRow; }
    protected getService() { return BusinessTripDetailService.baseUrl; }

    protected form = new BusinessTripDetailForm(this.idPrefix);
     afterLoadEntity() {
        // Find the Latitude field element
        const LatitudeField = document.getElementsByClassName("Latitude")[0];

        // Create a new div element for the map
        const mapDiv = document.createElement('div');
        mapDiv.id = 'map';

        // Insert the map div after the Latitude field
        if (LatitudeField.nextSibling) {
            LatitudeField.parentNode.insertBefore(mapDiv, LatitudeField.nextSibling);
        } else {
            LatitudeField.parentNode.appendChild(mapDiv);
        }

        // Define map options
        const mapOptions: L.MapOptions = {
            center: [51.505, -0.09],
            zoom: 200
        };

        // Create a map instance
        const map = L.map('map', mapOptions);

        // Add a tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }
    
}