import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/apiporvider/apiporvider';

/**
 * Generated class for the WordpressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wordpress',
  templateUrl: 'wordpress.html',
})
export class WordpressPage {
  public post:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public api:ApiProvider
    ) {
      this.getPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordpressPage');
  }
  getPosts(){
    // enter the url of the instead of "JSON URL" ,example : posts/469?_embed
    this.api.get('JSON URL').subscribe((data)=>{
      this.post=data;
  
    })
  
  }
}
