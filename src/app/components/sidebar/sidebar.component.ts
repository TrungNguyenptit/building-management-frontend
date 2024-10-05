import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/companies",
    title: "Companies bill",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/employees",
    title: "Employees in-out frequency",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/building-staffs",
    title: "Building staffs month salary",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  //   {
  //     path: "/dashboard",
  //     title: "Companies bill",
  //     rtlTitle: "لوحة القيادة",
  //     icon: "icon-chart-pie-36",
  //     class: ""
  //   },
  //   {
  //     path: "/icons",
  //     title: "Employees in-out frequency",
  //     rtlTitle: "الرموز",
  //     icon: "icon-atom",
  //     class: ""
  //   },
  //   {
  //     path: "/maps",
  //     title: "Building staffs month salary",
  //     rtlTitle: "خرائط",
  //     icon: "icon-pin",
  //     class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
