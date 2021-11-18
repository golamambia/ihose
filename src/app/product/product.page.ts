import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
   image_path=image_path;
  appUrl_product = "https://theitvibe.com/project/ihose/api/getProduct";
  img_url='https://theitvibe.com/project/ihose/uploads/product/';
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
  hp_subcat:any='';
  sub:any;
   constructor(public http: Http,
   public navCtrl: NavController,
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public route: ActivatedRoute,
   public toastController: ToastController
   ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
  if (params) {
    //let queryParams = params;
    
        if(params.name){
      this.name=params.name;
    }
    if(params.standard){
      this.standard=params.standard;
    }
    if(params.size){
      this.size=params.size;
    }
    
    if(params.pressure){
      this.pressure=params.pressure;
    }
    
    if(params.part_type){
      this.part_type=params.part_type;
    }
    
    if(params.description){
      this.description=params.description;
    }
    
    if(params.assembly_name){
      this.assembly_name=params.assembly_name;
    }
    
    if(params.maker){
      this.mk_name =params.maker;
    }
    
    if(params.part_no){
      this.part_no=params.part_no;
    }
     if(params.model_no){
      this.model_no=params.model_no;
    }
    if(params.hp_subcat){
      this.hp_subcat=params.hp_subcat;
    }
    if(params.text_search){
      this.search_key=params.text_search;
    }
    //console.log(params);
  }
});
  }
   storePage(page){
  this.storage.set("goTo", page);
     
  }
back(){
  	this.storage.get("goTo").then(val=>{
      if(val){
        this.page = val;
        this.navCtrl.navigateForward(''+this.page);
    }else{
    	this.navCtrl.navigateForward('/home');
    }
        });
  
      
       //this.location.back();
  }
    doRefresh(event) {
setTimeout(() => {
      
     //this.listing_menu();
     var headers = new Headers();
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
    "hp_subcat":this.hp_subcat
        
  }
     this.http.post(this.appUrl_product,dataPar)
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res);
     if(this.res && this.res.menu_list){
// loading.dismiss();
event.target.complete();
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
    event.target.complete();
    }
  }, (err) => {
    //console.log(err);
    // loading.dismiss();
    this.loader_val = false;
    event.target.complete();
  });
      
     
    }, 1500);
}



   loadData(event){
    //console.log(event);
    this.getScrollData(true, event); 
    
  }

  getScrollData(isFirstLoad, event) {
    setTimeout(()=>{ 
      this.dataMenu = [];
      this.limit = this.limit + 9;
      for (let i = 0; i < this.limit; i++) {
          if(this.menu_list[i]){
            this.dataMenu.push(this.menu_list[i]);
          }
       }
       this.pageNo++;
       

      if (isFirstLoad)
        event.target.complete();
    }, 1000);
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
    "hp_subcat":this.hp_subcat
        
  }
  
   this.http.post(this.appUrl_product,dataPar)
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res);
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

    ionViewWillEnter(){
    // this.storage.remove("userCart");
     this.listing();
       this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        this.cart_data = val;
        //console.log(val);

      }
        });
this.getCartItemCount();
  }
async addToCart(index:number,hp_id,menulist){
  const toast = await this.toastController.create({
message: 'Added',
duration: 1000,
animated :true,
//color:'success',
position:'middle',
cssClass: 'my-toast-class',
});
  let added = false;
  // var data ={
  //   "id": menu_id,
  //    "name":menu_name,
  //    "price":menu_price,
  //    "quantity":1,
  //    "image":menu_image
  // }
  this.storage.get("userCart").then(val=>{
     this.abc =[];
    let added = false;
      if(val){
        this.cart_data = val;
        
          for (let p of this.cart_data) {
            
            if (p.hp_id == menulist.hp_id) {
              this.dataMenu[index].quantity += 1;
              //this.menu_list[index].quantity += 1;
              p.quantity =parseInt(p.quantity) + 1;
              added = true;
              //this.cart_data.push(menulist);
              this.storage.set("userCart", this.cart_data).then(val=>{ this.getCartItemCount();});
              //this.getCartItemCount();
               toast.present();
                
              break;
            }
          }
          if (!added) {
           
            menulist.quantity = 1;
           this.cart_data.push(menulist);
           
             this.storage.set("userCart", this.cart_data).then(val=>{ this.getCartItemCount();});
            
            //this.getCartItemCount();
            toast.present();
           }
          //else{
          //   this.getCartItemCount();

          //   this.storage.set("userCart", this.cart_data);
          // }

      }else{
            menulist.quantity = 1;
           this.cart_data.push(menulist);
            //this.getCartItemCount();
                        this.storage.set("userCart", this.cart_data).then(val=>{ this.getCartItemCount();});
           toast.present();
      }
     });
      
       
}
  

 decrementQty(index:number,hp_id,menulist){

/*. if item passed then item.qty. */
  if(this.dataMenu[index].quantity-1 <=0){
    this.dataMenu[index].quantity = 0;
    //this.menu_list[index].quantity = 0;
    for (let p of this.cart_data) {
            
            if (p.hp_id == menulist.hp_id) {
              p.quantity=0;
              //console.log(this.cart_data);
              this.storage.set("userCart", this.cart_data);
              this.getCartItemCount();
              break;
            }
          }
  }
  else{
    this.dataMenu[index].quantity -= 1;
    //this.menu_list[index].quantity -= 1;
    for (let p of this.cart_data) {
            
            if (p.hp_id == menulist.hp_id) {
              p.quantity=parseInt(this.dataMenu[index].quantity);
              //console.log(this.cart_data);
              this.storage.set("userCart", this.cart_data);
              this.getCartItemCount();
              break;
            }
          }
    //console.log('item_2-> ' + index +  '  '+this.menu_list[index].quantity);
  }
  }


 incrementQty(index:number,hp_id,menulist){
/*. if item passed then item.qty. */
  if(this.dataMenu[index].quantity > 0){
     this.dataMenu[index].quantity += 1;
     //this.menu_list[index].quantity += 1;
     for (let p of this.cart_data) {
            
            if (p.hp_id == menulist.hp_id) {
              p.quantity=parseInt(this.dataMenu[index].quantity);
              //console.log(this.cart_data);
              this.storage.set("userCart", this.cart_data);
              this.getCartItemCount();
              break;
            }
          }
  }
  // else{
   
  //   this.menu_list[index].quantity = 1;
    
    
  // }
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
