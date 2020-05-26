import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

  @Injectable()
  export class freeapi
  {
    constructor(private http: HttpClient) {
    }

    getposts(): Observable<any> {
     // let param1 = new HttpParams().set()
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
  }

