import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { CompaniesComponent } from "../../pages/companies/companies.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { EmployeesComponent } from "src/app/pages/employees/employees.component";
import { BuildingStaffsComponent } from "src/app/pages/building-staffs/staffs.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "companies", component: CompaniesComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "building-staffs", component: BuildingStaffsComponent },
  // { path: "rtl", component: RtlComponent }
];
