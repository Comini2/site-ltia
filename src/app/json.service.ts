import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JsonService {
  
  constructor(private httpClient : HttpClient) { }

  public getJSON(url : string, callback : (data) => void) {
    this.httpClient.get(url).subscribe(
      res => {
        callback(res);
      }
    ),
      err => {
        console.log(err);
      }
  }
}
