import { initFullHeightGridPage } from "@serenity-is/corelib";
import { TranslationGrid } from "@serenity-is/pro.extensions";

export default function pageInit() {
    initFullHeightGridPage(new TranslationGrid($('#GridDiv')).element);
}