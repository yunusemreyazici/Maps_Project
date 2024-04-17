import { RoleRow, UserColumns, UserRow, UserService } from "@/ServerTypes/Administration";
import { Decorators, EntityGrid, Lookup, resolveUrl } from "@serenity-is/corelib";
import { UserDialog } from "./UserDialog";

@Decorators.registerClass()
export class UserGrid extends EntityGrid<UserRow, any> {
    protected getColumnsKey() { return UserColumns.columnsKey; }
    protected getDialogType() { return UserDialog; }
    protected getIdProperty() { return UserRow.idProperty; }
    protected getIsActiveProperty() { return UserRow.isActiveProperty; }
    protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
    protected getService() { return UserService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected override getDefaultSortBy() {
        return [UserRow.Fields.Username];
    }

    protected override createIncludeDeletedButton() {
    }

    protected override getColumns() {
        let columns = new UserColumns(super.getColumns());

        let impersonationToken = columns.ImpersonationToken;
        if (impersonationToken) {
            impersonationToken.format = ctx => {
                if (!ctx.value)
                    return "";

                return `<a target="_blank" href="${resolveUrl('~/Account/ImpersonateAs?token=')}${ctx.value}">`
                    + `<i class="fa fa-user-secret text-blue"></i></a>`;
            }
        }

        var roles = columns.Roles;
        if (roles) {
            var rolesLookup: Lookup<RoleRow>;
            RoleRow.getLookupAsync().then(lookup => {
                rolesLookup = lookup;
                this.slickGrid.invalidate();
            });

            roles.format = ctx => {
                if (!rolesLookup)
                    return `<i class="fa fa-spinner"></i>`;

                var roleList = (ctx.value || []).map((x: number) => (rolesLookup.itemById[x] || {}).RoleName || "");
                roleList.sort();
                return roleList.join(", ");
            };
        }

        return columns.valueOf();
    }
}
