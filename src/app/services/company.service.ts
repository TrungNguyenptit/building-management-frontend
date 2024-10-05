import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies/bill';

  constructor() { }

  getCompanyBill(): Observable<any[]> {
    return from(fetch(this.apiUrl).then(response => response.json())).pipe(
      map(data => {
        // Process data if needed
        return data;
      }),
      catchError(error => {
        // Handle the error and rethrow or return a fallback value
        throw new Error('Error fetching companies: ' + error.message);
      })
    );
  }

}
