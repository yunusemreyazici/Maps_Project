using Serenity.ComponentModel;
using System.IO;

namespace Maps_Project.Trip.Forms;

[FormScript("Trip.BusinessTripDetail")]
[BasedOnRow(typeof(BusinessTripDetailRow), CheckNames = true)]
public class BusinessTripDetailForm
{
    [HalfWidth]
    public decimal Longitude { get; set; }

    [HalfWidth]
    public decimal Latitude { get; set; }




}