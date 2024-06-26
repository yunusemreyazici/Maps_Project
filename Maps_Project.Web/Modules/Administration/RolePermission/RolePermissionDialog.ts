import { RolePermissionService, UserPermissionRow } from "@/ServerTypes/Administration";
import { TemplatedDialog, format, getRemoteData, localText, notifySuccess } from "@serenity-is/corelib";
import { PermissionCheckEditor } from "../UserPermission/PermissionCheckEditor";

export class RolePermissionDialog extends TemplatedDialog<RolePermissionDialogOptions> {

    private permissions: PermissionCheckEditor;

    constructor(opt: RolePermissionDialogOptions) {
        super(opt);

        this.permissions = new PermissionCheckEditor(this.byId('Permissions'), {
            showRevoke: false
        });

        RolePermissionService.List({
            RoleID: this.options.roleID,
            Module: null,
            Submodule: null
        }, response => {
            this.permissions.value = response.Entities.map(x => (<UserPermissionRow>{ PermissionKey: x }));
        });

        this.permissions.implicitPermissions = getRemoteData('Administration.ImplicitPermissions');
    }

    protected getDialogOptions(): JQueryUI.DialogOptions {
        let opt = super.getDialogOptions();

        opt.buttons = [
            {
                text: localText('Dialogs.OkButton'),
                click: e => {
                    RolePermissionService.Update({
                        RoleID: this.options.roleID,
                        Permissions: this.permissions.value.map(x => x.PermissionKey),
                        Module: null,
                        Submodule: null
                    }, response => {
                        this.dialogClose();
                        window.setTimeout(() => notifySuccess(localText('Site.RolePermissionDialog.SaveSuccess')), 0);
                    });
                }
            }, {
                text: localText('Dialogs.CancelButton'),
                click: () => this.dialogClose()
            }];

        opt.title = format(localText('Site.RolePermissionDialog.DialogTitle'),
            this.options.title);

        return opt;
    }

    protected getTemplate(): string {
        return '<div id="~_Permissions"></div>';
    }
}

export interface RolePermissionDialogOptions {
    roleID?: number;
    title?: string;
}