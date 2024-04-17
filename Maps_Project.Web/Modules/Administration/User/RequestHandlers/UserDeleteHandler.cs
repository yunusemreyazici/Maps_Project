using Serenity.Extensions.Entities;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Maps_Project.Administration.UserRow;

namespace Maps_Project.Administration;
public interface IUserDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }
public class UserDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUserDeleteHandler
{
    public UserDeleteHandler(IRequestContext context)
         : base(context)
    {
    }

    protected override void OnBeforeDelete()
    {
        base.OnBeforeDelete();

        new SqlDelete(UserPreferenceRow.Fields.TableName)
            .Where(UserPreferenceRow.Fields.UserId == Row.UserId.Value)
            .Execute(Connection, ExpectedRows.Ignore);

        new SqlDelete(UserRoleRow.Fields.TableName)
            .Where(UserRoleRow.Fields.UserId == Row.UserId.Value)
            .Execute(Connection, ExpectedRows.Ignore);

        new SqlDelete(UserPermissionRow.Fields.TableName)
            .Where(UserPermissionRow.Fields.UserId == Row.UserId.Value)
            .Execute(Connection, ExpectedRows.Ignore);
    }
}