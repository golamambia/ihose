import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
appUrl = "https://theitvibe.com/project/ihose/api/getHose";

res:any;
data_list:any;

   constructor(public http: Http, public navCtrl: NavController, public storage: Storage,public loadingController: LoadingController,public alertController: AlertController) { }

storePage(page){
  this.storage.set("goTo", page);
     
  }
 ngOnInit() {

 	this.listing(); 
  }
 async listing(){
           const loading = await this.loadingController.create({
    message: ''
  }); 
           await loading.present();
   this.http.get(this.appUrl)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
   // console.log(this.res);
     if(this.res){
loading.dismiss();
 this.data_list =this.res;
   //this.loading.hide();
     
    }else{
    alert("Server error");
   loading.dismiss();
    
    }
  }, (err) => {
   loading.dismiss();
    console.log(err);
    
  });
    
  }
goTo(id){
//console.log(id);
if(id==4){
	this.navCtrl.navigateForward('/hose-page/'+id);
}else if(id==7){
this.navCtrl.navigateForward('/automotive/'+id);
}else{
this.navCtrl.navigateForward('/earth-moving/'+id);
}

}

}
