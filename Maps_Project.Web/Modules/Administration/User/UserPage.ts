import { initFullHeightGridPage } from "@serenity-is/corelib"
import { UserGrid } from "./UserGrid";

export default function pageInit() {
    initFullHeightGridPage(new UserGrid($('#GridDiv')).element);
}