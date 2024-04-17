using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Maps_Project.Trip.BusinessTripRow>;
using MyRow = Maps_Project.Trip.BusinessTripRow;

namespace Maps_Project.Trip;

public interface IBusinessTripRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessTripRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripRetrieveHandler
{
    public BusinessTripRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}