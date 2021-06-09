import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

appUrl = "https://theitvibe.com/project/ihose/api/login";
page:any;
  email: any;
  password: any;
  res: any;
   constructor(public http: Http, public navCtrl: NavController, public storage: Storage,public loadingController: LoadingController,public alertController: AlertController) { }

  ngOnInit() {
  }
back(){
	
  	this.storage.get("goTo").then(val=>{
      if(val){
        this.page = val;
        this.navCtrl.navigateForward(''+this.page);
    }else{
    	this.navCtrl.navigateForward('/');
    }
        });
  
      
       //this.location.back();
  }
  async login(){
const loading = await this.loadingController.create({
    message: 'Checking...'
  });
  const alert = await this.alertController.create({
     message: 'Username and Password is wrong',
      buttons: ['OK']
    });

const usernamealrt = await this.alertController.create({
     message: 'Please enter email',
      buttons: ['OK']
    });


    const passalrt = await this.alertController.create({
     message: 'Please enter password',
      buttons: ['OK']
    });


 
var headers = new Headers();
	if(this.email == '' || this.email == null){
		 
		loading.dismiss();
		usernamealrt.present();
	}else if(this.password == '' || this.password == null){
	loading.dismiss();
	passalrt.present();
		
	}else{
	 await loading.present();
	var data ={
		"email": this.email,
		"password": this.password
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
		this.storage.set("userDetails", this.res);
		this.navCtrl.navigateForward('home');
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

}
