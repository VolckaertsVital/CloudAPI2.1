import { Component, OnInit } from '@angular/core';
import { AirsoftGun } from '../classes/AirsoftGun';
import { Airsoft } from '../Services/Airsoft.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  air: AirsoftGun[];

  constructor(private _airsoft: Airsoft,private router: Router) { }

  ngOnInit() {
  }

  add() {

    /*this._airsoft.Post(this.air).subscribe((data: AirsoftGun) => {
      console.log(data);
      this.router.navigate(['/airsoft'])
    });*/
   
      
  }
  

}
