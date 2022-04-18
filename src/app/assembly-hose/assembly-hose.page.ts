import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-assembly-hose',
  templateUrl: './assembly-hose.page.html',
  styleUrls: ['./assembly-hose.page.scss'],
})
export class AssemblyHosePage implements OnInit {
  userData: any;
userDetails: any;
  appUrl_standard = host+"getStandard";
  appUrl_size = host+"getSize";
appUrl_proname = host+"getProductName";
appUrl_pressure = host+"getPressure";
appUrl_part = host+"getAssemblyName";
appUrl_parturl = host+"getPartType";
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
  part_type2:any='';
  part_type3:any='';
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
 data_list_size_ptype:any;
 data_list_size_ptype2:any;
 data_list_size_ptype3:any;
 data_list_size_ptype4:any;
 data_list_size_ptype5:any;
 data_list_size_ptype6:any;
 data_list_size_ptype7:any;
 data_list_size_ptype8:any;

  data_list_productnm:any;
  pressureList:any;
partList:any;
hose_length:any;
  hose_lengthtype:any='Hose Length';
endfitsize:any='';
endfitsize2:any='';
endfitsize3:any='';
endbpart_type:any='';
endbpart_type2:any='';
endbpart_type3:any='';
adapterpart_type:any='';
adapterpart_type2:any='';
endbsize:any='';
endbsize2:any='';
endbsize3:any='';
angeldegree:any='';
adapterradio:any='yes';
adaptersize:any='';
adaptersize2:any='';
adapterangel:any='';
addon_type:any='';
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
     this.listing_standard();
     this.listing_size();
     this.listing_productname();
     this.listing_part();
     this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        
     
  //console.log(this.userDetails);

      }
    });
      
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
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.size=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
  portChange2(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.endfitsize=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
  portChange3(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.endfitsize2=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
  portChange4(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.endfitsize3=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
  portChange5(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.endbsize=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
  portChange6(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.endbsize2=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
  portChange7(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.endbsize3=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
  portChange8(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.adaptersize=event.value.size_id;
    //console.log('port:', event.value.size_id);
  } portChange9(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.adaptersize2=event.value.size_id;
    //console.log('port:', event.value.size_id);
  }
    gotoProductserch(){
  //console.log(this.text_search);
this.storage.set("goTo", 'box-hose/1');
this.navCtrl.navigateForward('product?text_search='+this.text_search);
}
  tab_click(val){
    if(val=='endfit'){
      if(!this.standard){
         this.alertController.create({
      
     message: 'Please select standard',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }
else if(!this.size){
         this.alertController.create({
      
     message: 'Please select size',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else if(!this.productName){
         this.alertController.create({
      
     message: 'Please select product',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else if(!this.pressure){
         this.alertController.create({
      
     message: 'Please select pressure',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else if(this.hose_lengthtype=='Hose Length' && !this.hose_length){
         this.alertController.create({
      
     message: 'Please enter hose length',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }


      else{
         this.tab_val=val;
      }
      
      //console.log(this.hose_lengthtype);
     // this.tab_val=val;
    }else if(val=='addon' && this.adapterradio=='yes'){
     // alert(val);
       if(!this.adapterpart_type){
         this.alertController.create({
      
     message: 'Please select part type',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else if(!this.adaptersize){
         this.alertController.create({
      
     message: 'Please select size',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }

      else{
         this.tab_val=val;
      }

   }else if(val=='addon' && this.adapterradio=='no'){
     this.tab_val=val;
     this.adapterpart_type='';
     this.adapterpart_type2='';
     this.adaptersize='';
     this.adaptersize2='';
   }

    // else{
    //    this.tab_val=val;
    // }
   
  }
  onChangeHandler(val) {
   if(val=='endfitB'){
      if(!this.part_type){
         this.alertController.create({
      
     message: 'Please select part type',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else if(!this.endfitsize){
         this.alertController.create({
      
     message: 'Please select size',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      
      }else{
        this.endfittab_val=val;
      }

   }else if(val=='endfitAngel'){
      if(!this.endbpart_type){
         this.alertController.create({
      
     message: 'Please select part type',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else if(!this.endbsize){
         this.alertController.create({
      
     message: 'Please select size',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      
      }else{
        this.endfittab_val=val;
      }

   }
   else if(val=='endfitAdapter'){
      if(!this.angeldegree){
         this.alertController.create({
      
     message: 'Please select degree',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else{
        this.endfittab_val=val;
      }

   } 
   else{
        this.endfittab_val=val;
      }
    //console.log($event);
  }
  async send_query(val){
    const loading = await this.loadingController.create({
    message: ''
  });
    if(val=='addon_type'){
      
await loading.present();
          var data ={
    "standard": this.standard,
    "size": this.size,
    "productName": this.productName,
    "pressure": this.pressure,
    "hose_lengthtype": this.hose_lengthtype,
    "hose_length": this.hose_length,
    "endfitsize": this.endfitsize,
    "endfitsize2": this.endfitsize2,
    "endfitsize3": this.endfitsize3,
    "part_type": this.part_type,
    "part_type2": this.part_type2,
    "part_type3": this.part_type3,
    "endbpart_type": this.endbpart_type,
    "endbpart_type2": this.endbpart_type2,
    "endbpart_type3": this.endbpart_type3,
    "endbsize": this.endbsize,
    "endbsize2": this.endbsize2,
    "endbsize3": this.endbsize3,
    "angeldegree": this.angeldegree,
    "adapterradio": this.adapterradio,
    "adaptersize": this.adaptersize,
    "adaptersize2": this.adaptersize2,
    "adapterangel": this.adapterangel,
    "adapterpart_type": this.adapterpart_type,
    "adapterpart_type2": this.adapterpart_type2,
    "addon_type": this.addon_type,
    "user_id":this.userDetails.user_id

   
  }
           
   this.http.post(host+'queryMailsend', data)
  .subscribe(res => {
    
    this.res = res.json();
    console.log(this.res);
    if(this.res.response){
    loading.dismiss();

  this.alertController.create({
      
     message: 'Thank you, Your query has been send',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    this.navCtrl.navigateForward('/home');
     this.standard='';
     this.size='';
    this.productName='';
     this.pressure='';
    this.hose_lengthtype='';
     this.hose_length='';
    this.endfitsize='';
    this.endfitsize2='';
    this.endfitsize3='';
   this.part_type='';
   this.part_type2='';
   this.part_type3='';
   this.endbpart_type='';
   this.endbpart_type2='';
   this.endbpart_type3='';
     this.endbsize='';
     this.endbsize2='';
     this.endbsize3='';
   this.angeldegree='';
     this.adapterradio='';
     this.adapterpart_type='';
     this.adapterpart_type2='';
     this.adaptersize='';
     this.adaptersize2='';
     this.adapterangel='';
     this.addon_type='';
    }else{
       loading.dismiss();
  this.alertController.create({
      
     message: 'Something went wrong try again',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    
    }
  }, (err) => {
    //this.loading.hide();
   // console.log(err);
    
  });
       //this.navCtrl.navigateForward('product');
      
    }
  //   else{
  //   this.navCtrl.navigateForward('product');
  // }
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
listing_size_ptype(id,no:number){
   var data ={
    "part_type": id,
   
  }
  //console.log(id);
           
   this.http.post(host+'getSize2', data)
  .subscribe(res => {
    
    this.res = res.json();
   // console.log(this.res);
     if(this.res){
if(no==2){
this.data_list_size_ptype2 =this.res;
}else if(no==3){
  this.data_list_size_ptype3=this.res;
}else if(no==4){
  this.data_list_size_ptype4=this.res;
}else if(no==5){
  this.data_list_size_ptype5=this.res;
}else if(no==6){
  this.data_list_size_ptype6=this.res;
}else if(no==7){
  this.data_list_size_ptype7=this.res;
}else if(no==8){
  this.data_list_size_ptype8=this.res;
}else{
  this.data_list_size_ptype=this.res;

 }
   //this.loading.hide();
     
    }else{
     if(no==2){
this.data_list_size_ptype2 =[];
}else if(no==3){
  this.data_list_size_ptype3=[];
}else if(no==4){
  this.data_list_size_ptype4=[];
}else if(no==5){
  this.data_list_size_ptype5=[];
}else if(no==6){
  this.data_list_size_ptype6=[];
}else if(no==7){
  this.data_list_size_ptype7=[];
}else if(no==8){
  this.data_list_size_ptype8=[];
}else{
  this.data_list_size_ptype=[];

    //alert("Server error");
    //this.loading.hide();
    
    }
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
