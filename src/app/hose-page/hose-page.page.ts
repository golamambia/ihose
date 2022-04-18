import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-hose-page',
  templateUrl: './hose-page.page.html',
  styleUrls: ['./hose-page.page.scss'],
})
export class HosePagePage implements OnInit {
  appUrl =host+"getSubHose";

res:any;
data_list:any;
id:any;
 private sub: any;
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
   this.listing();
  }
});
  }
storePage(page){
  this.storage.set("goTo", page);
     
  }

  async listing(){
    const loading = await this.loadingController.create({
    message: ''
  });
   var data ={
    "id": this.id,
   
  }
       await loading.present();    
   this.http.post(this.appUrl, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
loading.dismiss();
 this.data_list =this.res;
   //this.loading.hide();
     
    }else{
    alert("Server error");
    //this.loading.hide();
    loading.dismiss();
    }
  }, (err) => {
    loading.dismiss();
    console.log(err);
    
  });
    
  }

  goTo(id){
//console.log(id);
if(id==1){
  this.navCtrl.navigateForward('/box-hose/'+id);
}else if(id==3){
 this.navCtrl.navigateForward('/endfitting-hose/'+id);
}else if(id==4){
   this.navCtrl.navigateForward('/assembly-hose/'+id);
}

}
}
