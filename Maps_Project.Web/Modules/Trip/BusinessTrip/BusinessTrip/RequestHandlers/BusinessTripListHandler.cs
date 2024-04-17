using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Maps_Project.Trip.BusinessTripRow>;
using MyRow = Maps_Project.Trip.BusinessTripRow;

namespace Maps_Project.Trip;

public interface IBusinessTripListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessTripListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripListHandler
{
    public BusinessTripListHandler(IRequestContext context)
            : base(context)
    {
    }
}