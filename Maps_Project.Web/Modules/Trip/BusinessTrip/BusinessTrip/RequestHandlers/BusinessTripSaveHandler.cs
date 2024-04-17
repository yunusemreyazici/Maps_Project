using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Maps_Project.Trip.BusinessTripRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Maps_Project.Trip.BusinessTripRow;

namespace Maps_Project.Trip;

public interface IBusinessTripSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessTripSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripSaveHandler
{
    public BusinessTripSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}