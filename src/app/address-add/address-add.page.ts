import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.page.html',
  styleUrls: ['./address-add.page.scss'],
})
export class AddressAddPage implements OnInit {
appUrl = host+"saveAddress";
	res:any;
	userDetails: any;
  usa_address: any;
  usa_doorno: any;
  usa_landmark: any;
  usa_user: any;
 
  constructor(public http: Http, public navCtrl: NavController, public storage: Storage,public loadingController: LoadingController,public alertController: AlertController) { 
this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
    }
        });
  }

  ngOnInit() {
  }

async saveAddress(){
const loading = await this.loadingController.create({
    message: 'Saving...'
  });
const alert = await this.alertController.create({
     message: 'Something is wrong',
      buttons: ['OK']
    });
const addrsalert = await this.alertController.create({
     message: 'Please enter address',
      buttons: ['OK']
    });


    const dooralert = await this.alertController.create({
     message: 'Please enter door/flat no',
      buttons: ['OK']
    });
    const landalert = await this.alertController.create({
     message: 'Please enter landmark',
      buttons: ['OK']
    });
    const successalrt = await this.alertController.create({
     message: 'Address successfully saved',
      buttons: ['OK']
    });
var headers = new Headers();
if(this.usa_address == '' || this.usa_address == null){
		 
		loading.dismiss();
		addrsalert.present();
	}else if(this.usa_doorno == '' || this.usa_doorno == null){
	loading.dismiss();
	dooralert.present();
		
	}else if(this.usa_landmark == '' || this.usa_landmark == null){
	loading.dismiss();
	landalert.present();
		
	}else{

	await loading.present();
	var data ={
		"usa_address": this.usa_address,
		"usa_doorno": this.usa_doorno,
		"usa_landmark": this.usa_landmark,
		"usa_user":this.userDetails.user_id,
		
	}

	this.http.post(this.appUrl, data, { headers: headers })
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
		if(this.res.status == 0){
		loading.dismiss();
		this.alertController.create({
      
      message: this.res.msg,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
		
		}else if(this.res.status == 1){
		successalrt.present();
		this.navCtrl.back();
		//this.navCtrl.navigateForward('address-list');
		loading.dismiss();
		}else{
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		loading.dismiss();
	});

	}



}

back(){

  		//this.navCtrl.navigateForward('address-list');
  		this.navCtrl.back();
  }

}
