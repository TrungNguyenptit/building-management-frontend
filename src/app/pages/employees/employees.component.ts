import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CompanyService } from "src/app/services/company.service";
import { EmployeesService } from "src/app/services/employees.service";

@Component({
  selector: "app-employees",
  templateUrl: "employees.component.html"
})
export class EmployeesComponent implements OnInit {
  companies:any;
  day = new FormControl('');

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.day.valueChanges.subscribe(value => {
      console.log(value);
      this.employeesService.getEmployeesInOutFrequency(value).subscribe(companies => this.companies = companies);
    })
  }
}
