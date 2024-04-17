using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Maps_Project.Trip.BusinessTripDetailRow>;
using MyRow = Maps_Project.Trip.BusinessTripDetailRow;

namespace Maps_Project.Trip;

public interface IBusinessTripDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessTripDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripDetailRetrieveHandler
{
    public BusinessTripDetailRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}