import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BuildingStaffsService } from "src/app/services/building-staffs.service";
import { CompanyService } from "src/app/services/company.service";
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

@Component({
  selector: "app-staffs",
  templateUrl: "staffs.component.html",
})
export class BuildingStaffsComponent implements OnInit {
  staffs:any;
  name = 'Angular';
  modelDate = '';
  year = new FormControl('2024');
  month = new FormControl((new Date().getMonth() + 1).toString());
  constructor(private buildingStaffsService: BuildingStaffsService) {}

  ngOnInit() {
    this.buildingStaffsService.getBuildingStaffsSalary(this.concatMonth()).subscribe(staffs => this.staffs = staffs);
  }

  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };     
    container.setViewMode('month');
   }

   onSearch(){
    this.buildingStaffsService.getBuildingStaffsSalary(this.concatMonth()).subscribe(staffs => this.staffs = staffs);
   }

   concatMonth(): string {
    return this.year.value + '-' +this.month.value;
   }
}
