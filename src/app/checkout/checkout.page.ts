import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
//declare module '*';
//declare var RazorpayCheckout:any;
//declare module '*';
//declare var Razorpay: any;
import { Platform } from '@ionic/angular';
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
declare var RazorpayCheckout: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})

export class CheckoutPage implements OnInit {

	appUrl = host+"getAddress";
	bookUrl = host+"place_order";

	res:any;
	userDetails: any;
	editid: any;
  usa_address: any;
  usa_doorno: any;
  usa_landmark: any;
  address_list:any;
  item_qty:any;
  usa_user: any;
  menu_list:any;
  cart_data:any =[];
  userCart:any;
  abc:any;
  cartTotal:any;
  cartTotalAmount:any=0;
  cartcount:any;
  count: any = 0;
  public cart = [];
public cartdata = [];
select_delivery_address:any;
paymentmode:any;
currentSelected: Number = null;
pickup_delivery:any;
 public datap: any = {
    paytyp: ''
  };
public dtime: any = {
    paytyp: 'soon'
  };
  uba_delivery_date:any;
  uba_delivery_date2:any;
  uba_delivery_time:any;
  uba_delivery_time2:any;
  voucher_amt:any=0;
  use_voucher:any='';
  use_voucher_check:any=0;
   webService:any;
   zone:any;
   //platform:any;
   user:any;
   phone:any;
   email:any;
   name:any;
   redirect_url:any;
constructor(public http: Http, public navCtrl: NavController,
 public storage: Storage,public loadingController: LoadingController,
 public alertController: AlertController,
 public toastController: ToastController,
 private platform: Platform

 ) { 
  this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
         this.name = val.name;
          this.email = val.email;
           this.phone = val.phone;
            this.user = val.user_id;
        //console.log(val);
    }
        });
  }
  
  ngOnInit() {
  }
onChangeHandler($event) {
    this.datap.paytyp = $event.target.value;
    this.paymentmode=$event.target.value;
    //console.log(this.paymentmode);
  }
onChangeHandler2($event) {
    this.dtime.paytyp = $event.target.value;
   this.pickup_delivery=$event.target.value;
    //console.log(this.paymentmode);
  }
  onChangeHandler3($event) {
   
    //console.log(this.use_voucher);
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
this.listing();
  }
  getCartItemCount() {

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
      }else{
this.cartTotal=this.count;
this.menu_list =this.cartdata;
      }
        });

  }
  ionViewDidEnter(){
  //  this.storage.clear();
    this.listing();
  
    
  }
  listing(){
  	this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        var data ={
				"userId": this.userDetails.user_id,
				
	}
         var headers = new Headers();
  //console.log(this.userDetails.user_id);
   this.http.post(this.appUrl+'/'+this.userDetails.user_id,{data:''})
	.subscribe(res => {
		this.res = res.json();
		//console.log(this.res);
    //this.voucher_amt=this.res.voucher_amount;
		 if(this.res){

		this.address_list =this.res;
		
		}else{
		//alert("Server error");
		//loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		//loading.dismiss();
	});
    }
        });
  }
  selectDeliveryAddress(idx){

  	this.currentSelected = idx;
  }
  async book_order(){
    //console.log(this.voucher_amt);
  	const loading = await this.loadingController.create({
    message: 'Processing...'
  });
const alert = await this.alertController.create({
     message: 'Something is wrong',
      buttons: ['OK']
    });
const addrsalert = await this.alertController.create({
     message: 'Please select address',
      buttons: ['OK']
    });
const useralert = await this.alertController.create({
     message: 'Please login',
      buttons: ['OK']
    });
const paymodealert = await this.alertController.create({
     message: 'Please select payment type',
      buttons: ['OK']
    });
const deldatealert = await this.alertController.create({
     message: 'Please select delivery date',
      buttons: ['OK']
    });
const timealert = await this.alertController.create({
     message: 'Please select delivery time',
      buttons: ['OK']
    });
if(this.pickup_delivery=='later'){
this.uba_delivery_date=this.uba_delivery_date2;
this.uba_delivery_time=this.uba_delivery_time2;
  }else{
    this.uba_delivery_date='';
    this.uba_delivery_time='';
  }
var headers = new Headers();
if(this.currentSelected == null){
		 
		loading.dismiss();
		addrsalert.present();
	}else if(this.userDetails == '' || this.userDetails == null){
	loading.dismiss();
	useralert.present();
		
	}else if(this.paymentmode == '' || this.paymentmode == null){
//console.log(2);

   loading.dismiss();
  paymodealert.present();

}else{
    await loading.present();
if(this.paymentmode == 'online'){
//this.navCtrl.navigateForward('checkout-online?address='+this.currentSelected);
var data ={
    "cartTotalAmount": this.cartTotalAmount,
    "userid": this.userDetails.user_id,
    "name": this.userDetails.user.name,
    "order_method":'delivery',
    "paymod":this.paymentmode,
    "deliver_address":this.currentSelected,
    "phone":this.userDetails.user.phone,
    //"pickup_delivery":this.dtime.paytyp,
    //"uba_delivery_date":this.uba_delivery_date,
    //"uba_delivery_time":this.uba_delivery_time,
    //"use_voucher":this.use_voucher,
    "cart_data":this.cart_data,
    
  }
this.http.post(host+"place_order_check", data)
  .subscribe(res => {
    loading.dismiss();
    this.res = res.json();
   //console.log(res.json());
   if(this.res.status == true){
     this.test_pay(this.res.data);
   }
  }, (err) => {
    console.log(err);
    loading.dismiss();
  });

}else{
	
	var data ={
		"cartTotalAmount": this.cartTotalAmount,
		"userid": this.userDetails.user_id,
		"name": this.userDetails.user.name,
		"order_method":'delivery',
		"paymod":this.paymentmode,
		"deliver_address":this.currentSelected,
		"phone":this.userDetails.user.phone,
		//"pickup_delivery":this.dtime.paytyp,
    //"uba_delivery_date":this.uba_delivery_date,
    //"uba_delivery_time":this.uba_delivery_time,
    //"use_voucher":this.use_voucher,
		"cart_data":this.cart_data,
		
	}
this.http.post(this.bookUrl, data)
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
		if(this.res.status == 0){
		loading.dismiss();
		this.navCtrl.navigateForward('order-failed');
		
		}else if(this.res.status == 1){
      this.storage.remove("userCart");
				this.currentSelected=null;
        this.use_voucher='';
		this.navCtrl.navigateForward('order-success');
		loading.dismiss();
		}else{
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		loading.dismiss();
	});
}

}
  }
 async online_pay(res){
    const loading = await this.loadingController.create({
    message: 'Processing...'
  });
    this.http.post(this.bookUrl, res)
  .subscribe(res => {
    //console.log(res.json());
    this.res = res.json();
    if(this.res.status == 0){
    loading.dismiss();
    this.navCtrl.navigateForward('order-failed');
    
    }else if(this.res.status == 1){
      this.storage.remove("userCart");
        this.currentSelected=null;
        this.use_voucher='';
    this.navCtrl.navigateForward('order-success');
    loading.dismiss();
    }else{
    //alert("Server error");
    loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    loading.dismiss();
  });
  }
  gotoAddAddress(){
    this.navCtrl.navigateForward('address-add');
  }
  edit(id){
	
		this.navCtrl.navigateForward('/address-update?edit='+id);
		
	}
  back(){
  	this.navCtrl.navigateForward('cart-page');
  }
faild_page(){
    this.navCtrl.navigateForward('order-failed');
  }
  callPaymentMethod() {
  var options = {
    description: 'Credits towards consultation',
     image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_Z2LSUDpWE6L9Yg',
    amount: 10* 100,
    name: 'test',
     "callback_url": 'https://www.google.com',
    "handler": function (response){
      console.log(response);
            alert(response.razorpay_payment_id);


    },
    prefill: {
      email: 'wtm.golam@gmail.com',
      contact: '7003832809',
      name: 'Test'
    },
    theme: {
      color: '#eb9929'
    },
    // modal: {
    //   ondismiss: function() {
    //     console.log('dismissed')
    //   }
    // }
};

var successCallback = (payment_id) => { // <- Here!
  console.log(payment_id);
  alert('payment_id: ' + payment_id);
  // this.navCtrl.push("ThankyouPage",{
  //         status: this.status
  //     });
};

var cancelCallback = (error) => { // <- Here!
  alert(error.description + ' (Error ' + error.code + ')');
};


// this.platform.ready().then(() => {
//       Razorpay.open(options, successCallback, cancelCallback);
//     })
//Razorpay.open(options, successCallback, cancelCallback);
  // var callApi = function(payment_id, amount) {
  //   let data = {
  //     'payment_id' : payment_id,
  //     'amount' : amount
  //   };
  //   console.log(data);
  //   // api to capture the payment
  //   this.webService.callPost('paymentCapture',data).then((response) => {
  //     console.log("Response is",response);
  //   }).catch((error) => {
  //     console.log(error);
  //    })
  // };
}
 test_pay(resData){

 const options = {
    description: 'iHose Payment',
     image: 'assets/images/razor_logo.png',
    currency: 'INR',
    key: 'rzp_test_4KWlZWdIZK78CN',
    amount: resData.amount,
    name: this.userDetails.user.name,
    order_id: resData.id
  }

  var successCallback = function (success) {
    //alert('payment_id: ' + success.razorpay_payment_id)
    //this.navCtrl.navigateForward('order-success');
    var orderId = success.razorpay_order_id;
    var signature = success.razorpay_signature;
    var data ={
    "cartTotalAmount": this.cartTotalAmount,
          "userid": this.user,
    "name": this.name,
    "order_method":'delivery',
    "paymod":this.paymentmode,
    "deliver_address":this.currentSelected,
    "phone":this.phone,
    "uba_transaction":success.razorpay_payment_id,
    "uba_payStatus":'success',
    //"uba_delivery_time":this.uba_delivery_time,
    //"use_voucher":this.use_voucher,
    "cart_data":this.cart_data,
    "razorpay_order_id":success.razorpay_order_id,
    "razorpay_signature":success.razorpay_signature,
    
  }
  callApi(data);
 //this.redirect_url = '/order-failed';
 //location.href ='/order-failed';
//this.online_paynw(data);


  }
  var cancelCallback = function (error) {
    //alert(error.description + ' (Error ' + error.code + ')')
    //this.navCtrl.navigateForward('order-failed');
  callFaild();
  }
  RazorpayCheckout.on('payment.success', successCallback);
  RazorpayCheckout.on('payment.cancel', cancelCallback);
  RazorpayCheckout.open(options);
  var callApi = (payment_data) => {
 this.navCtrl.navigateForward('order-success');
       }
 var callFaild = () => {
 
this.navCtrl.navigateForward('order-failed');
       }
     //"callback_url": 'https://www.google.com',
//     "handler": function (response){
//       if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
//         this.redirect_url = '/order-failed';
   
//     //this.navCtrl.navigateForward('order-failed');
//       } else {
//         this.redirect_url = '/order-success';
//         //this.navCtrl.navigateForward('order-success');
//              // location.href = this.redirect_url;   
//         var data ={
//           "cartTotalAmount": this.cartTotalAmount,
//           "userid": this.user,
//     "name": this.name,
//     "order_method":'delivery',
//     "paymod":this.paymentmode,
//     "deliver_address":this.currentSelected,
//     "phone":this.phone,
//     "uba_transaction":response.razorpay_payment_id,
//     "uba_payStatus":'success',
//     //"uba_delivery_time":this.uba_delivery_time,
//     //"use_voucher":this.use_voucher,
//     "cart_data":this.cart_data,
    
//   }
// //console.log(data);
// //callApi(1, options.amount);
// //  var callApi = (data) => {
// // console.log(data);
// //  }
// }

//     },
//     prefill: {
//       email: this.userDetails.user.email,
//       contact: this.userDetails.user.phone,
//       name: this.userDetails.user.name
//     },
//     theme: {
//       color: '#eb9929'
//     },
//     modal: {
//       ondismiss: function() {
//         console.log('dismissed')
//       }
//     }
// };

// const successCallback = paymentId => { // <- Here!
//   console.log(121);
//   console.log(paymentId)
//  // alert('payment_id: ' + payment_id);
  
// };

// const cancelCallback = error => { // <- Here!
//   console.log(error);
//   // alert(error.description + ' (Error ' + error.code + ')');
// };


// Razorpay.open(options, successCallback, cancelCallback);
// // Razorpay.on('payment.success', successCallback);
// // Razorpay.on('payment.cancel', cancelCallback);
// // Razorpay.open(options);


 }
async online_paynw(res){
    const loading = await this.loadingController.create({
    message: 'Processing...'
  });
    this.http.post(this.bookUrl, res)
  .subscribe(res => {
    //console.log(res.json());
    this.res = res.json();
    if(this.res.status == 0){
    loading.dismiss();
    this.navCtrl.navigateForward('order-failed');
    
    }else if(this.res.status == 1){
      this.storage.remove("userCart");
        this.currentSelected=null;
        this.use_voucher='';
    this.navCtrl.navigateForward('order-success');
    loading.dismiss();
    }else{
    //alert("Server error");
    loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    loading.dismiss();
  });
  }
}
