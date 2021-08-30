import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-assembly-hose',
  templateUrl: './assembly-hose.page.html',
  styleUrls: ['./assembly-hose.page.scss'],
})
export class AssemblyHosePage implements OnInit {
  appUrl_standard = "https://theitvibe.com/project/ihose/api/getStandard";
  appUrl_size = "https://theitvibe.com/project/ihose/api/getSize";
appUrl_proname = "https://theitvibe.com/project/ihose/api/getProductName";
appUrl_pressure = "https://theitvibe.com/project/ihose/api/getPressure";
appUrl_part = "https://theitvibe.com/project/ihose/api/getAssemblyName";
appUrl_parturl = "https://theitvibe.com/project/ihose/api/getPartType";
  res:any;

assemblyList:any;
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
 //pressure:any='';
 mk_name:any ='';
part_no:any ='';
tab_val:any='bare';
endfittab_val:any='endfitA';
 count: any = 0;
   cart_data:any =[];
  userCart:any;
  cartTotal:any;
  cartcount:any=0;
  data_list_standard:any;
  data_list_size:any;
  data_list_productnm:any;
  pressureList:any;
partList:any;
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
     this.listing_standard();
     this.listing_size();
     this.listing_productname();
     this.listing_part();
      
   }
  ngOnInit() {
  	      this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.id=params['id'];
   // console.log(this.id);
  this.storePage('assembly-hose/4');
   this.listing_assembly();
   
  }
});
  }
  tab_click(val){
    this.tab_val=val;
  }
  onChangeHandler(val) {
   
    this.endfittab_val=val;
    //console.log($event);
  }
  storePage(page){
  this.storage.set("goTo", page);
     
  }
  listing_assembly(){
   var data ={
    "id": this.id,
   
  }
           
   this.http.post(this.appUrl_part, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.assemblyList =this.res;
   //this.loading.hide();
     
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
   // console.log(err);
    
  });
    
  }

  gotoProduct(){
    this.storage.set("goTo", 'assembly-hose/4');
this.navCtrl.navigateForward('product?assembly_name='+this.assembly_name+'&part_type='+this.part_type+'&standard='+this.standard+'&size='+this.size+'&name='+this.productName+'&pressure='+this.pressure+'&description='+this.description+'&maker='+this.mk_name+'&part_no='+this.part_no);
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
   listing_standard(){
   var data ={
    "id": this.id,
   
  }
           
   this.http.post(this.appUrl_standard, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.data_list_standard =this.res;
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
  listing_size(){
   var data ={
    "id": this.id,
   
  }
           
   this.http.post(this.appUrl_size, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.data_list_size =this.res;
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

 
  getPressure(id){
  //console.log(id);
  var data ={
    "id": id,
   
  }
           
   this.http.post(this.appUrl_pressure, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.pressureList =this.res;
   //this.loading.hide();
     
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
   // console.log(err);
    
  });
}
 listing_productname(){
   var data ={
    "id": 1,
   
  }
           
   this.http.post(this.appUrl_proname, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.data_list_productnm =this.res;
   //this.loading.hide();
     
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
   // console.log(err);
    
  });
    
  }
   listing_part(){
   var data ={
    "id": this.id,
   
  }
           
   this.http.post(this.appUrl_parturl, data)
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
    //console.log(err);
    
  });
    
  }

}
