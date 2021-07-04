import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-getstarted-page',
  templateUrl: './getstarted-page.page.html',
  styleUrls: ['./getstarted-page.page.scss'],
})
export class GetstartedPagePage implements OnInit {

 page:any;
 userDetails: any;
 get_started:any=0;
  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    private menu: MenuController,
    private navCtrl: NavController,
    public storage: Storage,
    private location: Location
  )  {
 
   }

  ngOnInit() {

  }
   ionViewWillEnter(){
      
    this.storage.get("get_started").then(val=>{
      if(val){
      	this.get_started=0;
      //	this.get_started=val;
      //  if(this.userDetails){
      //  this.navCtrl.navigateForward('/home');
      // }else{
      // 	this.navCtrl.navigateForward('/login');
      // }
      }else{
      	this.get_started=1;
      }
    })
  }
  

  goToscreen(){
  	 this.storage.set("get_started", 1);
  	this.navCtrl.navigateForward('/home');

  }

}
