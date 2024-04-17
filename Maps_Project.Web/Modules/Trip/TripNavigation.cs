using Serenity.Navigation;
using MyPages = Maps_Project.Trip.Pages;

[assembly: NavigationLink(int.MaxValue, "Trip/Business Trip", typeof(MyPages.BusinessTripPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Trip/Business Trip Detail", typeof(MyPages.BusinessTripDetailPage), icon: null)]