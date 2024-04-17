using Serenity.Navigation;
using MyPages = _Ext.DevTools.Pages;

[assembly: NavigationMenu(int.MaxValue, "DevTools", icon: "fa-code")]
[assembly: NavigationLink(int.MaxValue, "DevTools/Enum Exproler", typeof(MyPages.EnumExprolerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DevTools/Compare Entity to DB", typeof(MyPages.CompareEntityToDBController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DevTools/Generate Migrations from Entity", typeof(MyPages.GenerateMigrationFromEntityController), icon: null)]
