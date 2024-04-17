using Newtonsoft.Json;

namespace Maps_Project.Administration;
public class UserPermissionUpdateRequest : ServiceRequest
{
    public int? UserID { get; set; }
    [JsonProperty(Required = Required.AllowNull)]
    public string Module { get; set; }
    [JsonProperty(Required = Required.AllowNull)]
    public string Submodule { get; set; }
    public List<UserPermissionRow> Permissions { get; set; }
}