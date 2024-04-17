using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace Maps_Project.AppServices;
public class UserAccessor : IUserAccessor, IImpersonator
{
    private readonly ImpersonatingUserAccessor impersonator;

    public UserAccessor(IHttpContextAccessor httpContextAccessor)
    {
        impersonator = new ImpersonatingUserAccessor(new HttpContextUserAccessor(httpContextAccessor),
            new HttpContextItemsAccessor(httpContextAccessor));
    }

    public ClaimsPrincipal User => impersonator.User;

    public void Impersonate(ClaimsPrincipal user)
    {
        impersonator.Impersonate(user);
    }

    public void UndoImpersonate()
    {
        impersonator.UndoImpersonate();
    }
}