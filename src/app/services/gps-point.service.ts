import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GPSPoint } from '../model/gpspoint.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GpsPointService {

  public HOST:string = "http://localhost:8080/testAPP/v1/api/gpsPoints";

  constructor(private http:HttpClient) { }
  getListGPSPoints():Observable<GPSPoint[]>{
      return this.http.get<any>(this.HOST);

    }

    createGPSPoint(point:GPSPoint): Observable<GPSPoint>{
      return this.http.post<any>(this.HOST,point);
    }

    deleteGPSPoint(id:number):Observable<any>{
      return this.http.delete<any>(`${this.HOST}/${id}`);
    }

    calculateDistance( firstId:number, secondId:number):Observable<boolean>{
      return this.http.get<any>(`${this.HOST}/distance/${firstId}/${secondId}`)
    }

    
}
