import { Component, OnInit } from "@angular/core";
import { CompanyService } from "src/app/services/company.service";

@Component({
  selector: "app-companies",
  templateUrl: "companies.component.html"
})
export class CompaniesComponent implements OnInit {
  bills:any;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanyBill().subscribe(bills => this.bills = bills);
  }
}
