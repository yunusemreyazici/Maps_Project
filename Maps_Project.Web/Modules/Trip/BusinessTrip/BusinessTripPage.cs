using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Maps_Project.Trip.Pages;

[PageAuthorize(typeof(BusinessTripRow))]
public class BusinessTripPage : Controller
{
    [Route("Trip/BusinessTrip")]
    public ActionResult Index()
    {
        return this.GridPage("@/Trip/BusinessTrip/BusinessTripPage",
            BusinessTripRow.Fields.PageTitle());
    }
}