using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Maps_Project.Trip.BusinessTripDetailRow;

namespace Maps_Project.Trip;

public interface IBusinessTripDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessTripDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripDetailDeleteHandler
{
    public BusinessTripDetailDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}