import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiporviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  // add your website URL
  private API_URL:string ='http://yourwebsite.com/wp-json/wp/v2/';
  constructor(public http: HttpClient) {
    console.log('Hello ApiporviderProvider Provider');
  }
  get(querry:string=''){
    return this.http.get(this.API_URL +querry);
  }
}
