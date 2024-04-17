using Serenity.Navigation;

[assembly: NavigationGroup("Maps_Project", "fa-home", Default = true)]

[assembly: NavigationSection("Maps_Project/Demo Modules",
    Include = new[] { "Northwind", "Basic Samples", "Advanced Samples", "UI Elements", "Theme Samples" })]

[assembly: NavigationSection("Maps_Project/Pro Features",
    Include = new[] { "Meeting", "Organization", "Work Log" })]

[assembly: NavigationGroup(9000, "Administration", icon: "fa-tools")]

[assembly: NavigationSection("Administration/General", Default = true)]

[assembly: NavigationSection("Administration/Localization",
    Include = new[] { "Administration/Languages", "Administration/Translations" })]

[assembly: NavigationSection("Administration/Security",
    Include = new[] { "Administration/Roles", "Administration/User Management" })]

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]