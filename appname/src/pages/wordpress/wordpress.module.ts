import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordpressPage } from './wordpress';

@NgModule({
  declarations: [
    WordpressPage,
  ],
  imports: [
    IonicPageModule.forChild(WordpressPage),
  ],
})
export class WordpressPageModule {}
