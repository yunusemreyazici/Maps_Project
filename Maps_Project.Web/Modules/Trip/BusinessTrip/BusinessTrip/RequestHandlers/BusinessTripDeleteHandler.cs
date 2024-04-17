using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Maps_Project.Trip.BusinessTripRow;

namespace Maps_Project.Trip;

public interface IBusinessTripDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessTripDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripDeleteHandler
{
    public BusinessTripDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}