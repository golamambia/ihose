import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-earth-moving',
  templateUrl: './earth-moving.page.html',
  styleUrls: ['./earth-moving.page.scss'],
})
export class EarthMovingPage implements OnInit {
appUrl_maker = "https://theitvibe.com/project/ihose/api/getMaker";
appUrl_model = "https://theitvibe.com/project/ihose/api/getModel";
appUrl_part = "https://theitvibe.com/project/ihose/api/getPartType";


  res:any;

data_list_maker:any;

partList:any;
id:any;
pro_id:any;
 private sub: any;
//standard:any='';
 standard:any='';
  size:any='';
  name:any='';
  pressure:any='';
  part_type:any='';
  description:any='';
  assembly_name:any='';
   productName:any ='';
desceList:any;
mk_name:any ='';
part_no:any ='';
model_no:any='';
modelList:any;
 count: any = 0;
   cart_data:any =[];
  userCart:any;
  cartTotal:any;
  cartcount:any=0;
 constructor(public http: Http,
  public navCtrl: NavController,
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public route: ActivatedRoute,
   ) { }
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
   }
  ngOnInit() {
  	      this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.id=params['id'];
   // console.log(this.id);
   //this.listing_standard();
   this.listing_size();
   this.listing_part();
    this.storePage('earth-moving/8');
   
  }
});
  }
  storePage(page){
  this.storage.set("goTo", page);
     
  }
  listing_size(){
   var data ={
    "id": this.id,
   
  }
           
   this.http.post(this.appUrl_maker, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.data_list_maker =this.res;
   //this.loading.hide();
     
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
    console.log(err);
    
  });
    
  }
  listing_part(){
   var data ={
    "id": this.id,
   
  }
           
   this.http.post(this.appUrl_part, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.partList =this.res;
   //this.loading.hide();
     
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
    console.log(err);
    
  });
    
  }
    getModel(id){
  //console.log(id);
  var data ={
    "id": id,
   
  }
           
   this.http.post(this.appUrl_model, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.modelList =this.res;
   //this.loading.hide();
     
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
    //console.log(err);
    
  });
}
  gotoProduct(){
    this.storage.set("goTo", 'earth-moving/8');
this.navCtrl.navigateForward('product?maker='+this.mk_name+'&part_no='+this.part_no+'&model_no='+this.model_no);
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
