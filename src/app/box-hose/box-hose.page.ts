import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-hose',
  templateUrl: './box-hose.page.html',
  styleUrls: ['./box-hose.page.scss'],
})
export class BoxHosePage implements OnInit {
appUrl_standard = "https://theitvibe.com/project/ihose/api/getStandard";
appUrl_size = "https://theitvibe.com/project/ihose/api/getSize";
appUrl_proname = "https://theitvibe.com/project/ihose/api/getProductName";
appUrl_pressure = "https://theitvibe.com/project/ihose/api/getPressure";

res:any;
data_list_standard:any;
data_list_size:any;
data_list_productnm:any;
pressureList:any;
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
 constructor(public http: Http,
  public navCtrl: NavController,
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public route: ActivatedRoute,
   ) { }

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
     
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
    console.log(err);
    
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

gotoProduct(){
  this.storage.set("goTo", 'box-hose/1');
this.navCtrl.navigateForward('product?assembly_name='+this.assembly_name+'&part_type='+this.part_type+'&standard='+this.standard+'&size='+this.size+'&name='+this.productName+'&pressure='+this.pressure+'&description='+this.description+'&maker='+this.mk_name+'&part_no='+this.part_no);
}

}
