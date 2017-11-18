import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-overview',
  templateUrl: 'profile-overview.html',
})
export class ProfileOverviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  triggerEvaluation() {
    this.navCtrl.push('LanguageEvaluationPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileOverviewPage');
  }

}
