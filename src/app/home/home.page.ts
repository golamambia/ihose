import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imag_path=image_path;
appUrl = host+"getHose";
appUrl_product = host+"getProduct";
  img_url=image_path+'product/';

data_list:any;
  res:any;
 page:any;
 product_list:any;
  userDetails: any;
  editid: any;
 item_qty:any;
  usa_user: any;
  menu_list:any;
  cart_data:any =[];
  userCart:any;
  abc:any;
  cartTotal:any;
  cartcount:any=0;
  search_key: any;
  public cart = [];
  mainMenuId:any;
  loader_val:any = true;
  pageNo = 1;
  dataMenu: any =[];
  limit = 9;
  count: any = 0;
  standard:any='';
  size:any='';
  name:any='';
  pressure:any='';
  part_type:any='';
  description:any='';
  assembly_name:any='';
  mk_name:any ='';
  part_no:any ='';
  model_no:any='';
  sub:any;
   constructor(public http: Http, public navCtrl: NavController, 
     public storage: Storage,public loadingController: LoadingController,
     public alertController: AlertController) { }

storePage(page){
  this.storage.set("goTo", page);
     
  }
 ngOnInit() {

 	//this.listing(); 
  }
 async listing1(){
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
ionViewWillEnter(){
    // this.storage.remove("userCart");
     this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        this.cart_data = val;
       // console.log(val);


      }
        });
     this.getCartItemCount();
     this.listing();

     }
  async listing(){
  //console.log(this.search_key);
  const loading = await this.loadingController.create({
    message: ''
  });
  //await loading.present();
  this.loader_val = true;
    this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        var data ={
        "userId": this.userDetails.user_id,
        
  }
  }
        });
         var headers = new Headers();
  //console.log(this.userDetails.user_id);
  if (!this.mainMenuId) {
    this.mainMenuId=0;
  }
  if (!this.search_key) {
    this.search_key='';
  }
    var dataPar ={
         "name":this.name,
    "standard":this.standard,
    "size":this.size,
    "pressure":this.pressure,
    "assembly_name":this.assembly_name,
    "part_type":this.part_type,
    "description":this.description,
    "search": this.search_key,
    "mk_name":this.mk_name,
    "part_no": this.part_no,
    "model_no": this.model_no,
        
  }
  
   this.http.post(this.appUrl_product,dataPar)
  .subscribe(res => {
    this.res = res.json();
   // console.log(this.res);
     if(this.res && this.res.menu_list){
// loading.dismiss();
this.loader_val = false;
    this.menu_list =this.res.menu_list;
    if(this.menu_list && this.menu_list.length > 0){
      this.dataMenu = [];
      for (let i = 0; i < this.limit; i++) {
        if(this.menu_list[i]){
          this.dataMenu.push(this.menu_list[i]);
        }
     }
    }else{
      this.dataMenu = [];
    }
    //console.log(this.dataMenu);
    for (let pro of this.menu_list) {
    for (let p of this.cart_data) {
            
            if (p.hp_id == pro.hp_id) {
              pro.quantity =p.quantity;
                           
              //break;
            }
          }
        }
    
    }else{
    //alert("Server error");
    // loading.dismiss();
    this.loader_val = false;
    }
  }, (err) => {
    //console.log(err);
    // loading.dismiss();
    this.loader_val = false;
  });
    
  }
      getCartItemCount() {
    this.count=0;
    this.storage.get("userCart").then(val=>{
      if(val){
       for (let p of this.cart_data) {
            
            if (p.quantity >0) {
              this.count += 1;

            }
          }
this.cartTotal=this.count;
this.cartcount = this.count;
      }else{
this.cartTotal=this.count;
      }
        });

  }

}
