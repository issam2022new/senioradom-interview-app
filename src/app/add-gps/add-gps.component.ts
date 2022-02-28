import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GPSPoint } from '../model/gpspoint.model';
import { GpsPointService } from '../services/gps-point.service';

@Component({
  selector: 'sa-add-gps',
  templateUrl: './add-gps.component.html',
  styleUrls: ['./add-gps.component.css']
})
export class AddGpsComponent implements OnInit {
  private myForm:FormGroup;
  private loading = false;
  private success=false;
  private errorMessage = false;


  constructor(private gpsPointService:GpsPointService) { }
  private gpsPoint: GPSPoint = new GPSPoint();

  ngOnInit() {
    this.myForm=new FormGroup({
      latitude:new FormControl('',Validators.required),
      longitude: new FormControl('', Validators.required)
    });
  }

  submit(){
    this.loading=true;
    this.gpsPoint.latitude = this.myForm.get('latitude').value;
    this.gpsPoint.longitude = this.myForm.get('longitude').value;
    this.gpsPointService
        .createGPSPoint(this.gpsPoint)
        .subscribe((data) =>{
          console.log(data);
          this.success=true;
          this.loading=false;
        },
        (erreur) =>{
          console.log(erreur);
          this.success = false;
          this.loading = false;
          this.errorMessage=erreur;
        },
        ()=>{}
        );

  }

}
