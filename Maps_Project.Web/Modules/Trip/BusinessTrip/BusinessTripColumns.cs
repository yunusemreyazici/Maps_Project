using Serenity.ComponentModel;
using System.ComponentModel;

namespace Maps_Project.Trip.Columns;

[ColumnsScript("Trip.BusinessTrip")]
[BasedOnRow(typeof(BusinessTripRow), CheckNames = true)]
public class BusinessTripColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string Description { get; set; }
}