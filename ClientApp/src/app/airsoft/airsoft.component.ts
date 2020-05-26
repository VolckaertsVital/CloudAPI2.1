import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirsoftGun } from '../classes/AirsoftGun';
import { Airsoft } from '../Services/Airsoft.service';

@Component({
  selector: 'app-airsoft',
  templateUrl: './airsoft.component.html',
  styleUrls: ['./airsoft.component.css']
})
export class AirsoftComponent{
  

  airsofts: AirsoftGun[];

  constructor(private _airsoft: Airsoft) {
    
  }

  ngOnInit() {
    this._airsoft.getAirsofts().subscribe(
      data => {
        this.airsofts = data; console.log(this.airsofts);
      }
    );

  }

  
}


