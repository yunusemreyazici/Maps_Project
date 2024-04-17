using Microsoft.AspNetCore.DataProtection;
using Newtonsoft.Json;

namespace Maps_Project.Administration;
public class UserListRequest : ListRequest
{
    [JsonIgnore]
    internal IDataProtector DataProtector;
    [JsonIgnore]
    internal byte[] ClientHash;
}
