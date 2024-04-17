using MyRequest = Serenity.Services.SaveRequest<Maps_Project.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Maps_Project.Administration.LanguageRow;


namespace Maps_Project.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}