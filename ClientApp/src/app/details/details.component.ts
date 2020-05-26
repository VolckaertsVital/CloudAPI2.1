import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirsoftGun } from '../classes/AirsoftGun';
import { Airsoft } from '../Services/Airsoft.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']

})
export class DetailsComponent{

  airsofts: AirsoftGun[];

  constructor(private _airsoft: Airsoft) {

  }

  ngOnInit() {
    this._airsoft.getId().subscribe(
      data => {
        this.airsofts = data; console.log(this.airsofts);
      }
    );

  }

}




