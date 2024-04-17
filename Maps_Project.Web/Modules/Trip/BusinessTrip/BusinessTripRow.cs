using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Maps_Project.Trip;

[ConnectionKey("Default"), Module("Trip"), TableName("BusinessTrip")]
[DisplayName("Business Trip"), InstanceName("Business Trip"), GenerateFields]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed partial class BusinessTripRow : Row<BusinessTripRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Title"), Size(50), QuickSearch, NameProperty]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("Description"), Size(50)]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }


    [DisplayName("Business Trip Detail"), MasterDetailRelation(foreignKey:"BusinessTripId")]
    public List< BusinessTripDetailRow> DetailList { get => fields.DetailList[this]; set => fields.DetailList[this] = value; }
}