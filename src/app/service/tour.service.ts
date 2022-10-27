import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../model/tour";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) {
  }

  getAllTour(): Observable<Tour[]> {
    return this.httpClient.get<Tour[]>(API_URL + "/tuors")
  }

  createTour(tour: Tour): Observable<Tour>{
    return this.httpClient.post<Tour>(API_URL+"/tuors/", tour)
  }

  getTour(id:number): Observable<Tour>{
    return this.httpClient.get<Tour>(API_URL+`/tuors/${id}`)
  }

  updateTour(id: number | undefined, tour: Tour): Observable<Tour>{
    return this.httpClient.put<Tour>(API_URL+`/tuors/${id}`,tour)
  }

  deleteTour(id:number):Observable<Tour>{
    return this.httpClient.delete<Tour>(API_URL+`/tuors/${id}`)
  }
}
