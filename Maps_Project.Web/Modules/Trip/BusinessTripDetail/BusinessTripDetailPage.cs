using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Maps_Project.Trip.Pages;

[PageAuthorize(typeof(BusinessTripDetailRow))]
public class BusinessTripDetailPage : Controller
{
    [Route("Trip/BusinessTripDetail")]
    public ActionResult Index()
    {
        return this.GridPage("@/Trip/BusinessTripDetail/BusinessTripDetailPage",
            BusinessTripDetailRow.Fields.PageTitle());
    }
}