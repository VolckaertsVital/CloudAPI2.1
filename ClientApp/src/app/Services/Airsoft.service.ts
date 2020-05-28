import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { AirsoftGun } from '../classes/AirsoftGun';
import { Jwt } from '../classes/Jwt';

@Injectable()
export class Airsoft {
  constructor(private http: HttpClient) {
  }
  private listairsoft: AirsoftGun[];
  private _jwt: Jwt;

  getAirsofts(): Observable<any> {
    return this.http.get('https://localhost:44332/api/Airsoft');
  }

  getId(id) {
    return this.http.get('https://localhost:44332/api/Airsoft/' + id, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZiOGNhNWI3ZDhkOWE1YzZjNjc4ODA3MWU4NjZjNmM0MGYzZmMxZjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTQyMTM0ODgxNTU3LTJscXVodjVhbDNiYnM3N2luOTJlanMyYnM4ODZtMG1uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTQyMTM0ODgxNTU3LTJscXVodjVhbDNiYnM3N2luOTJlanMyYnM4ODZtMG1uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzNzQxOTY5MzYyNzUyMDE4MzQxIiwiZW1haWwiOiJ2aXRhbHZAc2t5bmV0LmJlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJsazZqOUNUN1FYNVFRVTBBODFpZjFBIiwibmFtZSI6IlZpdGFsIFZvbGNrYWVydHMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1FSWUycFhPdUYyOC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNsbXI2cWtsM2N1YVNLZUFGdWRwUHR0dklMU0NRL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJWaXRhbCIsImZhbWlseV9uYW1lIjoiVm9sY2thZXJ0cyIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNTkwNjk0MDI2LCJleHAiOjE1OTA2OTc2MjYsImp0aSI6IjgyMzdkZDEzYjBiMjhhYzgwZmNhYTcxMzkwZmNkMDA0YWNhNThmZWMifQ.E7DYaO2hFY3hDGcFFSNAD6VkQqxKo-o8abO24881koOWCl1V4ypTzjjgZgkt4Ljn486rimxaGI_pu3MdJfYVGvylY06uubp3gmhkY2zLCI0xBihvlnMNz2PP9XffaoSO6BqAzcY1whIrqotphRW4qLGuSwK_OaVe1OwKcTohBz2oiU9O4ylH6RX8W6ZGliPeJPGjwX9KSDo758cZ2E6pLaNtfa9wENfriUIkG-gHy3QdnJxPIV_9OEOB8ldEQ5wnlm53Io71gTPBfRpNNfgn5s-joWiPjgcTOVGTMrVRsVM22OLObgqifGC_UGohRf4vEYuOi5owY3G8MqAW8LlBng'
       
      })
    });

    console.log(this._jwt);
  }

  deleteId(id) {
    return this.http.delete('https://localhost:44332/api/Airsoft/' + id);
  }

  Post(airsoft: AirsoftGun) {
    if (airsoft.Id === null) {
      return this.http.post <AirsoftGun>('https://localhost:44332/api/Airsoft/', airsoft,
        {
          headers: new HttpHeaders({
            'content-Type': 'application/json'
          })
        });
    }
    else {
      const foundIndex = this.listairsoft.findIndex(e => e.Id === airsoft.Id);
      this.listairsoft[foundIndex] = airsoft;
    }
  }
}

