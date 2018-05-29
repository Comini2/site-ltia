import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JsonService {

  loadedJsons = new Map();
  
  constructor(private httpClient : HttpClient) { }

  public getJSON(url : string, callback : (data) => void) {
    if(this.loadedJsons.get(url) != undefined)
      callback(this.loadedJsons.get(url));
    this.httpClient.get(url).subscribe(
      res => {
        this.loadedJsons.set(url, res);
        callback(res);
      }
    ),
      err => {
        console.log(err);
      }
  }

  public getJSONObject(url: string, index, callback : (data) => void) : any{
    if(this.loadedJsons.get(url) === undefined){
      this.httpClient.get(url).subscribe(
        res => {
          this.loadedJsons.set(url, res);
          callback(res[index]);
        }
      ),
      err => {
        console.log(err);
      }
    }
    else
      callback(this.loadedJsons.get(url)[index]);
  }
}
