import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the MysqlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mysql',
  templateUrl: 'mysql.html',
})
export class MysqlPage {
  @ViewChild("username") username;
  @ViewChild("password") password;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MysqlPage');
  }
  signIn() {

    //// check to confirm the username and password fields are filled

    if (this.username.value == "") {
        console.log("username empty");
    } else

    if (this.password.value == "") {
      console.log("password empty");
    } else {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({
        headers:headers
      });

      let data = {
        username: this.username.value,
        password: this.password.value
      };
        this.http.post('path/to/login.php/file', data, options)
          .map(res => res.json())
          .subscribe(res => {
            console.log(res)
          
            if (res == "Your Login success") {
              console.log("succcess");
            } else {
              console.log("username or password wrong");
            }
          });
     
    }

  }

}
