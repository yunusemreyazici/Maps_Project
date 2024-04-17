//import { page } from '@serenity-is/corelib';
//import { BusinessTripGrid } from './BusinessTripGrid';

//export default () => gridPageInit(BusinessTripGrid);


import { initFullHeightGridPage } from "@serenity-is/corelib"
import { BusinessTripGrid } from "./BusinessTripGrid";

export default function pageInit() {
    initFullHeightGridPage(new BusinessTripGrid($('#GridDiv')).element);
}