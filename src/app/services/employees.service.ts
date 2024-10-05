import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'http://localhost:3000/employees/in-out-frequency';

  constructor(public datepipe: DatePipe) { }

  getEmployeesInOutFrequency(day: string): Observable<any[]> {
    var date = new  Date (day);
    date.setDate(date.getDate() + 1);
    return from(fetch(`${this.apiUrl}?startDay=${day+'T00:00:00Z'}&endDay=${this.datepipe.transform(date, 'yyyy-MM-dd')}T00:00:00Z`).then(response => response.json())).pipe(
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
