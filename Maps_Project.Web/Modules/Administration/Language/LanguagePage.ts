import { initFullHeightGridPage } from "@serenity-is/corelib"
import { LanguageGrid } from "./LanguageGrid";

export default function pageInit() {
    initFullHeightGridPage(new LanguageGrid($('#GridDiv')).element);
}