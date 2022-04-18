import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {
appUrl = host+"getProduct";
img_url=host+'uploads/product/';
	res:any;
	userDetails: any;
	editid: any;
 item_qty:any;
  usa_user: any;
  menu_list:any;
  cart_data:any =[];
  userCart:any;
  abc:any;
  cartTotal:any;
  cartTotalAmount:any=0;
  cartcount:any=0;
  count: any = 0;
  public cart = [];
public cartdata = [];
standard:any='';
  size:any='';
  name:any='';
  pressure:any='';
  part_type:any='';
  description:any='';
  assembly_name:any='';
   productName:any ='';
   mk_name:any ='';
part_no:any ='';
 constructor(public http: Http,
   public navCtrl: NavController,
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public toastController: ToastController,
   private location: Location
   ) { 
  this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        //console.log(val);
    }
        });
  }

  ngOnInit() {
  }
ionViewWillEnter(){
  	// this.storage.remove("userCart");
  	
       this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        //this.cart_data = val;
        //console.log(val);

      }
        });
this.getCartItemCount();
  }
 async getCartItemCount() {
   const loading = await this.loadingController.create({
    message: ''
  });
  await loading.present();
    //let count=0;
    this.cartdata=[];
    this.cartTotalAmount=0;
    this.count=0;
    this.storage.get("userCart").then(val=>{
      if(val){
       for (let p of this.userCart) {
            
            if (p.quantity >0) {
              this.count += 1;
              this.cartTotalAmount +=p.hp_price*p.quantity;
              this.cartdata.push(p);
            }
          }
          this.cart_data =this.cartdata;
this.cartTotal=this.count;
this.cartcount = this.count;
this.menu_list =this.cartdata;
//console.log(this.cartdata);
loading.dismiss();
      }else{
this.cartTotal=this.count;
this.menu_list =this.cartdata;
loading.dismiss();
      }
        });

  }




 decrementQty(index:number,hp_id,menulist){

/*. if item passed then item.qty. */
  if(this.menu_list[index].quantity-1 <=0){
    this.menu_list[index].quantity = 0;
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
    //this.menu_list[index].quantity -= 1;
    for (let p of this.cart_data) {
            
            if (p.hp_id == menulist.hp_id) {
              p.quantity=parseInt(p.quantity) - 1;
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
  if(this.menu_list[index].quantity+1 > 1){
     //this.menu_list[index].quantity += 1;
     for (let p of this.cart_data) {
            
            if (p.hp_id == menulist.hp_id) {
              p.quantity=parseInt(p.quantity) + 1;
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
  removeQty(index:number,hp_id,menulist){

this.menu_list[index].quantity = 0;
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
  back(){
  
  		//this.location.back();
      this.storage.set("goTo", 'cart-page');
this.navCtrl.navigateForward('product?assembly_name='+this.assembly_name+'&part_type='+this.part_type+'&standard='+this.standard+'&size='+this.size+'&name='+this.productName+'&pressure='+this.pressure+'&description='+this.description+'&maker='+this.mk_name+'&part_no='+this.part_no);
}
}
