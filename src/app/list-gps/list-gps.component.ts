import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GPSPoint } from '../model/gpspoint.model';
import { GpsPointService } from '../services/gps-point.service';

@Component({
  selector: 'sa-list-gps',
  templateUrl: './list-gps.component.html',
  styleUrls: ['./list-gps.component.css']
})
export class ListGpsComponent implements OnInit, OnDestroy {

  gpsPoints: GPSPoint[] ;
  loading:boolean = true;
  errorMEssage ;
  deleted = false;

  subscription: Subscription;
  constructor(private gpsPointService:GpsPointService) { }

  ngOnInit() {
    this.loading = true
    this.subscription=this.gpsPointService
                      .getListGPSPoints().
                      subscribe((data)=>{
                        this.gpsPoints=data;
                        this.loading = true;
                      },
                      (error) =>{
                        this.loading= false;
                          this.errorMEssage = error.erreur.message;
                      },
                      () =>{
                          this.loading= false;
                      }
                      )
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  delete(id:number){
    console.log(id)
    this.gpsPointService.deleteGPSPoint(id)
    .subscribe(()=>{
      console.log("deleted");
      this.deleted = true;
      this.gpsPointService.
          getListGPSPoints()
          .subscribe((dt)=>{
            this.gpsPoints=dt;
          })
    },
    (error)=>{
      this.errorMEssage = error;
      this.deleted = false;
    }
    )
  }



}
