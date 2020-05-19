import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-airsoft',
  templateUrl: './airsoft.component.html',
  styleUrls: ['./airsoft.component.css']
})
export class AirsoftComponent{
  

  public airsofts: airsoftGun[] = [];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.GetAirsoft();
    console.log("onInit" + this.airsofts);
  }

  public GetAirsoft() {
    return this.http.get<airsoftGun[]>('https://localhost:44332/api/Airsoft').subscribe(result => { this.airsofts = result; console.log(this.airsofts); });
    
  }
}


interface airsoftGun{
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
