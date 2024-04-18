import { BusinessTripDetailForm, BusinessTripDetailRow, BusinessTripDetailService } from '@/ServerTypes/Trip';
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import * as L from  'leaflet';
import { LatLngExpression } from 'leaflet';

@Decorators.registerClass('Maps_Project.Trip.businesstripdetail')
export class BusinessTripDetailDialog extends EntityDialog<BusinessTripDetailRow, any> {
    protected getFormKey() { return BusinessTripDetailForm.formKey; }
    protected getRowDefinition() { return BusinessTripDetailRow; }
    protected getService() { return BusinessTripDetailService.baseUrl; }

    protected form = new BusinessTripDetailForm(this.idPrefix);

    afterLoadEntity() {
        super.afterLoadEntity();

        this.setupMap();
    }

    private setupMap() {
        const LatitudeField = document.getElementsByClassName("Latitude")[0];
     
        // Create and insert the map div
        const mapDiv = document.createElement('div');
        mapDiv.id = 'map';
        mapDiv.style.height = '400px'; // Set the height of the map
        mapDiv.style.width = '100%'; // Set the width of the map

        if (LatitudeField.nextSibling) {
            LatitudeField.parentNode.insertBefore(mapDiv, LatitudeField.nextSibling);
        } else {
            LatitudeField.parentNode.appendChild(mapDiv);
        }

        // Optionally, use data from the loaded entity
        const center: LatLngExpression = [this.entity.Latitude || 51.505, this.entity.Longitude || -0.09];

        // Initialize the map
        const map = L.map('map', {
            center: center,
            zoom: 13
        });

        // Add a tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
}
