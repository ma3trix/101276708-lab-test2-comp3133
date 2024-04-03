// src/app/services/space-x.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private readonly baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  // Method to fetch all SpaceX launches
  getAllLaunches(): Observable<any[]> {
    const url = `${this.baseUrl}/launches`;
    return this.http.get<any[]>(url);
  }

  // Method to fetch SpaceX launches by year
  getLaunchesByYear(year: string): Observable<any[]> {
    const url = `${this.baseUrl}/launches?launch_year=${year}`;
    return this.http.get<any[]>(url);
  }

  // Method to fetch details of a specific launch by flight number
  getLaunchDetails(flightNumber: string): Observable<any> {
    const url = `${this.baseUrl}/launches/${flightNumber}`;
    return this.http.get<any>(url);
  }
}
