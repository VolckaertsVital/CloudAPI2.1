import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{

  public airsofts: airsoft;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<airsoft>('https://localhost:44332/api/Airsoft')
      .subscribe(result => { this.airsofts = result; });
  }

}



interface airsoft {
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
