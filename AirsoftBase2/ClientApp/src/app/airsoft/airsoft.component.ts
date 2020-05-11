import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-airsoft',
  templateUrl: './airsoft.component.html',
  styleUrls: ['./airsoft.component.css']
})
export class AirsoftComponent{

  public airsofts: airsofts[];

  constructor(http: HttpClient) {
    http.get<airsofts[]>('https://localhost:44332/api/Airsoft')
      .subscribe(result => { this.airsofts = result; });
  }

}



interface airsofts{
  Brand: string;
  Type: string;
  Name: string;
  MagazineSize: number;
  FPS: number;
  Caliber: number;
  Joule: number;
  GearBox: string;
  Lenght: number;
  Weight: number;
  Battery: boolean;
  Description: string;
  Price: number;
}