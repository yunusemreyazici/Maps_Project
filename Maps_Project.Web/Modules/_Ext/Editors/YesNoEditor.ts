import { Decorators, Select2Editor, text } from "@serenity-is/corelib"

@Decorators.registerEditor('_Ext.YesNoEditor')
export class YesNoEditor extends Select2Editor<any, any> {
    public getEditValue(property, target) { target[property.name] = this.valueAsBoolean; }
    public setEditValue(source, property) { this.valueAsBoolean = source[property.name]; }

    constructor(container: JQuery) {
        super(container, null);

        this.addOption("1", text('Dialogs.YesButton'));
        this.addOption("0", text('Dialogs.NoButton'));
    }

    public get valueAsBoolean(): boolean {
        let val = this.get_value();
        if (val == "1") return true
        else if (val == "0") return false
        else return null
    }

    public set valueAsBoolean(val: boolean) {
        if (val == true) this.set_value("1");
        else if (val == false) this.set_value("0");
        else this.set_value(null);
    }

}
