import { Component, Inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { freeapi } from '../Services/freeapi.service';
import { posts } from '../classes/posts';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

  listPosts: posts[];

  constructor(private _freeApi: freeapi) {
  }

  ngOnInit() {
    this._freeApi.getposts().subscribe(
      data => {
        this.listPosts = data; console.log(this.listPosts);
      }
    );

  }
}

  


