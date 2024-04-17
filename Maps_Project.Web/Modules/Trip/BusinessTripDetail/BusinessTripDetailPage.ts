import { initFullHeightGridPage } from "@serenity-is/corelib"
import { BusinessTripDetailGrid } from "./BusinessTripDetailGrid";

export default function pageInit() {
    initFullHeightGridPage(new BusinessTripDetailGrid($('#GridDiv')).element);
}