using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Maps_Project.Trip.BusinessTripDetailRow>;
using MyRow = Maps_Project.Trip.BusinessTripDetailRow;

namespace Maps_Project.Trip;

public interface IBusinessTripDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessTripDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripDetailListHandler
{
    public BusinessTripDetailListHandler(IRequestContext context)
            : base(context)
    {
    }
}