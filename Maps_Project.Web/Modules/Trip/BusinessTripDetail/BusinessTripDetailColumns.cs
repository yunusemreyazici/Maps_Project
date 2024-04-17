using Serenity.ComponentModel;
using System.ComponentModel;
using System.IO;

namespace Maps_Project.Trip.Columns;

[ColumnsScript("Trip.BusinessTripDetail")]
[BasedOnRow(typeof(BusinessTripDetailRow), CheckNames = true)]
public class BusinessTripDetailColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string BusinessTripTitle { get; set; }
    public decimal Longitude { get; set; }
    public decimal Latitude { get; set; }

}