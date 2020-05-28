import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirsoftGun } from '../classes/AirsoftGun';
import { Airsoft } from '../Services/Airsoft.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']

})
export class DetailsComponent{

  airsofts: any;
  id: any;
  constructor(private _airsoft: Airsoft, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this._airsoft.getId(this.id).subscribe(
      data => {
        this.airsofts = data;
        console.log(data);
      }
    );

  }

}




