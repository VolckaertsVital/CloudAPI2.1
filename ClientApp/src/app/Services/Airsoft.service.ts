import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable()
export class Airsoft {
  constructor(private http: HttpClient) {
  }

  getAirsofts(): Observable<any> {
    return this.http.get('https://localhost:44332/api/Airsoft');
  }

  getId(): Observable<any> {
    let param1 = new HttpParams().set('id', "?")
    return this.http.get('https://localhost:44332/api/Airsoft', { params: param1 });
  }
}

