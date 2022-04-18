import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   appUrl =host+"registration";
  email: any;
  pass: any;
  res: any;
  name: any;
  phone: any;
  confirmPassword: any;
  address: any;
page:any;
  constructor(public http: Http, public navCtrl: NavController, public storage: Storage,public loadingController: LoadingController,public alertController: AlertController) { }

  ngOnInit() {
  }
back(){
	
  	this.storage.get("goTo").then(val=>{
      if(val){
        this.page = val;
        this.navCtrl.navigateForward(''+this.page);
    }else{
    	this.navCtrl.navigateForward('/home');
    }
        });
  
      
       //this.location.back();
  }
async register(){
    const loading = await this.loadingController.create({
    message: 'Checking...'
  });
  const alert = await this.alertController.create({
     message: 'Username and Password is wrong',
      buttons: ['OK']
    });

const namealrt = await this.alertController.create({
     message: 'Please enter name',
      buttons: ['OK']
    });


    const passalrt = await this.alertController.create({
     message: 'Please enter password',
      buttons: ['OK']
    });
    const emailalrt = await this.alertController.create({
     message: 'Please enter email',
      buttons: ['OK']
    });
const conpassalrt = await this.alertController.create({
     message: 'Please enter confirm password',
      buttons: ['OK']
    });
    const phonealrt = await this.alertController.create({
     message: 'Please enter phone no',
      buttons: ['OK']
    });
const addressalrt = await this.alertController.create({
     message: 'Please enter address',
      buttons: ['OK']
    });
  
  var headers = new Headers();
	if(this.name == '' || this.name == null){
		 
		loading.dismiss();
		namealrt.present();
	}else if(this.phone == '' || this.phone == null){
	loading.dismiss();
	phonealrt.present();
		
	}else if(this.email == '' || this.email == null){
	loading.dismiss();
	emailalrt.present();
		
	}else if(this.pass == '' || this.pass == null){
	loading.dismiss();
	passalrt.present();
		
	}else if(this.confirmPassword == '' || this.confirmPassword == null){
	loading.dismiss();
	conpassalrt.present();
		
	}
 //  else if(this.address == '' || this.address == null){
	// loading.dismiss();
	// addressalrt.present();
		
	// }
  else{
	await loading.present();
	var data ={
		"name": this.name,
		"email": this.email,
		"phone": this.phone,
		"address": this.address,
		"pass": this.pass,
		"confirmPassword": this.confirmPassword,
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
		
		this.navCtrl.navigateForward('login');
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
    onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
  
}
