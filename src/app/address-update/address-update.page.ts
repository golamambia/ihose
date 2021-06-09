import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.page.html',
  styleUrls: ['./address-update.page.scss'],
})
export class AddressUpdatePage implements OnInit {
	appUrl = "https://theitvibe.com/project/ihose/api/getAddressUser";
	updateUrl = "https://theitvibe.com/project/ihose/api/updateAddress";
res:any;
	userDetails: any;
  usa_address: any;
  usa_doorno: any;
  usa_landmark: any;
  usa_user: any;
  address_list:any;
  params:any;
  edit_id:any;
  constructor(public http: Http,
  	public navCtrl: NavController,
  	public storage: Storage,
  	public loadingController: LoadingController,
  	public alertController: AlertController,
  	public route: ActivatedRoute,
    private location: Location
  	) { 
  	this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        
        var headers = new Headers();
  //console.log(this.userDetails.user_id);
   this.http.post(this.appUrl+'/'+this.edit_id,{data:''}, { headers: headers })
	.subscribe(res => {
		
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.usa_address !=''){

		this.address_list =this.res;
		this.usa_address = this.address_list.usa_address;
		this.usa_doorno = this.address_list.usa_doorno;
		this.usa_landmark = this.address_list.usa_landmark;	
		
		}else{
		alert("Server error");
		//loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		//loading.dismiss();
	});
      }
    });


   }
  

  ngOnInit() {
  	  this.route.queryParams.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.edit_id=params.edit;;
    //console.log(this.edit_id);
  }
});
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
     message: 'Address successfully updated',
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
		//"usa_user":this.userDetails.user_id,
		"edit_id":this.edit_id,
		
	}

	this.http.post(this.updateUrl, data, { headers: headers })
	.subscribe(res => {
		console.log(res.json());
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
		
		this.navCtrl.navigateForward('address-list');
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

  		this.location.back();
  }

}
