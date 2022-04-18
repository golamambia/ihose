import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-box-hose',
  templateUrl: './box-hose.page.html',
  styleUrls: ['./box-hose.page.scss'],
})
export class BoxHosePage implements OnInit {
appUrl_standard = host+"getStandard";
appUrl_size = host+"getSize";
appUrl_proname = host+"getProductName";
appUrl_pressure = host+"getPressure";

res:any;
data_list_standard:any;
data_list_size:any;
data_list_productnm:any;
pressureList:any;
data_list_maker:any;
id:any;
pro_id:any;
 private sub: any;
standard:any='';
size:any='';
 productName:any ='';
 pressure:any='';
  part_type:any='';
  description:any='';
  assembly_name:any='';
  mk_name:any ='';
part_no:any ='';
 count: any = 0;
   cart_data:any =[];
  userCart:any;
  cartTotal:any;
  cartcount:any=0;
text_search:any='';
 ports: Port[];
  port: Port;
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
     this.listing_maker();
     
   }
  ngOnInit() {
          this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.id=params['id'];
   // console.log(this.id);
   this.listing_standard();
   this.listing_size();
   this.listing_productname();
  }
});
  }
   portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.size=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
storePage(page){
  this.storage.set("goTo", page);
     
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
    console.log(err);
    
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
   setTimeout(()=>{
       this.ports=this.res;
   },300);
    
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
    console.log(err);
    
  });
    
  }
 listing_maker(){
   var data ={
    "id": this.id,
   "mktype":'bare',
  }
           
   this.http.post(host+'getMaker', data)
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
    //console.log(err);
    
  });
    
  }
  listing_productname(){
   var data ={
    "id": this.id,
   
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
    console.log(err);
    
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
    console.log(err);
    
  });
}
gotoProductserch(){
  //console.log(this.text_search);
this.storage.set("goTo", 'box-hose/1');
this.navCtrl.navigateForward('product?text_search='+this.text_search);
}
gotoProduct(){
  this.storage.set("goTo", 'box-hose/1');
this.navCtrl.navigateForward('product?assembly_name='+this.assembly_name+'&part_type='+this.part_type+
  '&standard='+this.standard+'&size='+this.size+'&name='+this.productName+'&pressure='+this.pressure+
  '&description='+this.description+'&maker='+this.mk_name+'&part_no='+this.part_no+'&hp_subcat='+this.id);
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
