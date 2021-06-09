import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-endfitting-hose',
  templateUrl: './endfitting-hose.page.html',
  styleUrls: ['./endfitting-hose.page.scss'],
})
export class EndfittingHosePage implements OnInit {
appUrl_size = "https://theitvibe.com/project/ihose/api/getSize";
appUrl_part = "https://theitvibe.com/project/ihose/api/getPartType";
appUrl_description = "https://theitvibe.com/project/ihose/api/getDescription";

  res:any;

data_list_size:any;

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
   //this.listing_standard();
   this.listing_size();
   this.listing_part();
    this.storePage('endfitting-hose/3');
    this.getDescription();
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
  gotoProduct(){
    this.storage.set("goTo", 'endfitting-hose/3');
this.navCtrl.navigateForward('product?assembly_name='+this.assembly_name+'&part_type='+this.part_type+'&standard='+this.standard+'&size='+this.size+'&name='+this.productName+'&pressure='+this.pressure+'&description='+this.description+'&maker='+this.mk_name+'&part_no='+this.part_no);
}

getDescription(){
  //console.log(this.id);
  var data ={
  	"id": this.id,
    "hp_size": this.size,
    "hp_parttype": this.part_type,
   
  }
           
   this.http.post(this.appUrl_description, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.desceList =this.res;
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

}
