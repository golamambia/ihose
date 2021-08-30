import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
	appUrl="https://theitvibe.com/project/ihose/api/getProductDesc";
 img_url='https://theitvibe.com/project/ihose/uploads/product/';
  res:any;
 page:any;
 id:any;
 product_info:any;
  private sub: any;
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
  user:any;
   phone:any;
   email:any;
   name:any;
  constructor(public http: Http,
  public navCtrl: NavController,
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public route: ActivatedRoute,
   public toastController: ToastController
   ) { this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
         this.name = val.name;
          this.email = val.email;
           this.phone = val.phone;
            this.user = val.user_id;
        //console.log(val);
    }
        });}

  ngOnInit() {
  	          this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.id=params['id'];
   //console.log(this.id);
 
   //this.getProduct();
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
    ionViewWillEnter(){
    // this.storage.remove("userCart");
    
       this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        this.cart_data = val;
       // console.log(val);


      }
        });
        this.getProduct();
this.getCartItemCount();
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
 async getProduct(){
 	const loading = await this.loadingController.create({
    message: ''
  });
  	var data ={
    "id": this.id,
   
  }
       
   this.http.post(this.appUrl, data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

  this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        this.cart_data = val;
      for (let p of this.cart_data) {
            
            if (p.hp_id == this.res[0].hp_id) {
              this.res[0].quantity =p.quantity;
                     
              //break;
            }
          }

      }
        });
  
          // console.log(this.cart_data);     
          this.product_info =this.res[0];
 this.dataMenu =this.product_info;
   loading.dismiss();
     
    }else{
    alert("Server error");
    loading.dismiss();
    
    }
  }, (err) => {
   loading.dismiss();
    console.log(err);
    
  });
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
              this.dataMenu.quantity += 1;
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
  if(this.dataMenu.quantity-1 <=0){
    this.dataMenu.quantity = 0;
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
    this.dataMenu.quantity -= 1;
    //this.menu_list[index].quantity -= 1;
    for (let p of this.cart_data) {
            
            if (p.hp_id == menulist.hp_id) {
              p.quantity=parseInt(this.dataMenu.quantity);
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
//console.log(menulist);
  if(this.dataMenu.quantity > 0){
    //console.log('lol');
     this.dataMenu.quantity += 1;
     //this.menu_list[index].quantity += 1;
     for (let p of this.cart_data) {
            
            if (p.hp_id == menulist.hp_id) {
              p.quantity=parseInt(this.dataMenu.quantity);
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

}
