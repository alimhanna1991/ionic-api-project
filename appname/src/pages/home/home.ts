import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordpressPage } from '../wordpress/wordpress';
import { MysqlPage } from '../mysql/mysql';
import { ApiProvider } from '../../providers/apiporvider/apiporvider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ) {
  
  }
  wordpress(){
    this.navCtrl.push(WordpressPage);
  }
  mysql(){
    this.navCtrl.push(MysqlPage);
  }
}
