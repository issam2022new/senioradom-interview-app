import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GPSPoint } from '../model/gpspoint.model';
import { GpsPointService } from '../services/gps-point.service';

@Component({
  selector: 'sa-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
  private myForm: FormGroup;
  gpsPoints: GPSPoint[];
  loading: boolean = true;
  errorMEssage;
  firstId:number;
  secondId:number;
  distanceLessThan10: boolean = false;
  
  subscription: Subscription;

  constructor(private gpsPointService: GpsPointService) { }

  ngOnInit() {
    this.getGPSPointList();
    this.myForm = new FormGroup({
      firstPoint: new FormControl('', Validators.required),
      secondPoint: new FormControl('', Validators.required)
    });
  }

  getGPSPointList(){
    this.loading = true
    this.subscription = this.gpsPointService
      .getListGPSPoints().
      subscribe((data) => {
        console.log(data);
        this.gpsPoints = data;
        this.loading = true;
      },
        (error) => {
          this.loading = false;
          this.errorMEssage = error;
          console.log(error)
        },
        () => {
          this.loading = false;
        }
      )
  }


  calculate(){
    console.log(this.myForm.get('firstPoint').value);
    this.firstId = this.myForm.get('firstPoint').value;
    this.secondId = this.myForm.get('secondPoint').value;


    this.gpsPointService
        .calculateDistance(this.firstId,this.secondId)
        .subscribe((data)=>{
          console.log(data)
          this.distanceLessThan10 = data;
        })
  }

}
