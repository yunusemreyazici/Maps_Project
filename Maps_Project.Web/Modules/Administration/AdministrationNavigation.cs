using Serenity.Navigation;
using Administration = Maps_Project.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-tools")]
[assembly: NavigationLink(9400, "Administration/Exception Log", typeof(Administration.UserPage), action: "ExceptionLog", icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9500, "Administration/Languages", typeof(Administration.LanguagePage), icon: "fa-comments")]
[assembly: NavigationLink(9600, "Administration/Translations", typeof(Administration.TranslationPage), icon: "fa-comment-o")]
[assembly: NavigationLink(9700, "Administration/Roles", typeof(Administration.RolePage), icon: "fa-lock")]
[assembly: NavigationLink(9800, "Administration/User Management", typeof(Administration.UserPage), icon: "fa-users")]