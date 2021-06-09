import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
userData: any;
userDetails: any;
appUrl = "https://theitvibe.com/project/ihose/api/user";
appUpdate = "https://theitvibe.com/project/ihose/api/updateUserProfile";
page:any;
  email: any;
  photo: any;
  res: any;
  name: any;
  phone: any;
  userId: any;
  action:any;
  htmlYouWantToAdd:any;
  
  constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) {

this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        
        var headers = new Headers();
  //console.log(this.userDetails.user_id);
   this.http.post(this.appUrl+'/'+this.userDetails.user_id,{data:''}, { headers: headers })
	.subscribe(res => {
		
		this.res = res.json();
		
		 if(this.res.email !=''){

		this.userData =this.res;
		this.phone = this.userData.phone;
		this.name = this.userData.name;
			
		
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
  }
  async updateProfile(){
  const loading = await this.loadingController.create({
    message: 'Updating...'
  });
  
const namealrt = await this.alertController.create({
     message: 'Please enter name',
      buttons: ['OK']
    });


    const phonealrt = await this.alertController.create({
     message: 'Please enter phone',
      buttons: ['OK']
    });
    const erroralrt = await this.alertController.create({
     message: 'Sorry,something went wrong',
      buttons: ['OK']
    });
    const successalrt = await this.alertController.create({
     message: 'Profile update successful',
      buttons: ['OK']
    });

    var headers = new Headers();
    //headers.append("Accept", 'application/json');
	if(this.name == '' || this.name == null){
		 
		loading.dismiss();
		namealrt.present();
	}else if(this.phone == '' || this.phone == null){
	loading.dismiss();
	phonealrt.present();
		
	}else{
	await loading.present();
	var data ={
		"name": this.name,
		"userId": this.userDetails.user_id,
		"phone": this.phone,
		"action":'updateProfile'
		//"photo": this.photo
		
	}

	//let data = new FormData();
	//data.append('photo', this.photo);
	//data.append('name', this.name);
	//data.append('userId', this.userDetails.user_id);
	//data.append('phone', this.phone);
	//data.append('action', 'updateProfile');


	this.http.post(this.appUpdate, JSON.stringify(data), { headers: headers })
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
		if(this.res.status == 0){
		loading.dismiss();
		erroralrt.present();
		}else if(this.res.status == 1){
		this.htmlYouWantToAdd = this.name;
		//this.navCtrl.navigateForward('login');
		successalrt.present();
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



  
  fileLoad(event){
  //console.log(event);
  		this.photo = event.target.files[0];
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
}
