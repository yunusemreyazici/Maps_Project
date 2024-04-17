using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Maps_Project.Trip.BusinessTripDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Maps_Project.Trip.BusinessTripDetailRow;

namespace Maps_Project.Trip;

public interface IBusinessTripDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessTripDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripDetailSaveHandler
{
    public BusinessTripDetailSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}