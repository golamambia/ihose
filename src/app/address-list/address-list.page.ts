import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage implements OnInit {
appUrl = host+"getAddress";
deleteUrl = host+"deleteAddressUser";
	res:any;
	userDetails: any;
	editid: any;
  usa_address: any;
  usa_doorno: any;
  usa_landmark: any;
  usa_user: any;
  address_list:any;
  menu_list:any;
  cart_data:any =[];
  userCart:any;
  abc:any;
  cartTotal:any;
  cartTotalAmount:any=0;
  cartcount:any;
  count: any = 0;
  public cart = [];
public cartdata = [];
   constructor(public http: Http,
     public navCtrl: NavController,
     public storage: Storage,
     public loadingController: LoadingController,
     public alertController: AlertController,
     private location: Location
     ) { 
  
  }

  listing(){
  	this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        var data ={
				"userId": this.userDetails.user_id,
				
	}
         var headers = new Headers();
  //console.log(this.userDetails.user_id);
   this.http.post(this.appUrl+'/'+this.userDetails.user_id,{data:''})
	.subscribe(res => {
		this.res = res.json();
		///console.log(this.res);
		 if(this.res){

		this.address_list =this.res;
		
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

  ionViewWillEnter(){
  	
  	 	this.listing();
       this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        //this.cart_data = val;
        //console.log(val);

      }
        });
       this.getCartItemCount();
  }
ionViewDidEnter(){
  //  this.storage.clear();
    this.listing();
  
    
  }
  ngOnInit() {

  }
  back(){

      //this.location.back();
      this.navCtrl.navigateForward('sidebar');
  }
  getCartItemCount() {
    //let count=0;
    this.cartdata=[];
    this.cartTotalAmount=0;
    this.count=0;
    this.storage.get("userCart").then(val=>{
      if(val){
       for (let p of this.userCart) {
            
            if (p.quantity >0) {
              this.count += 1;
              this.cartTotalAmount +=p.menu_price*p.quantity;
              this.cartdata.push(p);
            }
          }
          this.cart_data =this.cartdata;
this.cartTotal=this.count;
this.cartcount = this.count;
this.menu_list =this.cartdata;
//console.log(this.cartdata);
      }else{
this.cartTotal=this.count;
this.menu_list =this.cartdata;
      }
        });

  }
  gotoAddAddress(){
  	this.navCtrl.navigateForward('address-add');
  }
  edit(id){
	
		this.navCtrl.navigateForward('/address-update?edit='+id);
		
	}
	async delete(id){
	const loading = await this.loadingController.create({
    message: 'Saving...'
  });
const successalrt = await this.alertController.create({
     message: 'Address successfully delete',
      buttons: ['OK']
    });
	const fail = await this.alertController.create({
     message: 'Something went wrong',
      buttons: ['OK']
    });

		const alert = await this.alertController.create({
     
      message: 'Are you sure to delete',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            //console.log('Confirm Okay');
            if(id){
            	var headers = new Headers();
            	var data ={
		
		"usa_user":this.userDetails.user_id,
		"editid":id,
		
	}
		 this.http.post(this.deleteUrl,data, { headers: headers })
	.subscribe(res => {
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.status == 0){
		 	fail.present();
		loading.dismiss();
		
		}else if(this.res.status == 1){
		successalrt.present();
		//this.constructor();
		//this.navCtrl.navigateForward('address-list');
		loading.dismiss();
			this.listing();
		}else{
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		//loading.dismiss();
	});
		}
          }
        }
      ]
    });

    await alert.present();
		
	}

}
