import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { CanActivate,PreloadAllModules, RouterModule, Routes,Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
/***** gaurd */

@Injectable({ providedIn: 'root' })
export class CheckLogged implements CanActivate {
   userDetails: any;
 get_started:any;
  constructor(private navCtrl: NavController,private router:Router,
    public storage: Storage) {
    this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
      }
    })
  }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //check user is logged in
    this.storage.get("get_started").then(val=>{
      if(val){

        this.get_started=val;
       if(this.userDetails){
          this.router.navigate(['/home']);
       //this.navCtrl.navigateForward('/home');
      }else{
       // this.navCtrl.navigateForward('/login');
        this.router.navigate(['/login']);
      }
       return false;
      }
    })
     return true; 
  }
}

const routes: Routes = [
// { 
//   path: '', redirectTo: 'home', pathMatch: 'full',
//   canActivate: [CheckLogged] 
// },
 {
    path: '',
    canActivate: [CheckLogged] ,
   loadChildren: () => import('./getstarted-page/getstarted-page.module').then( m => m.GetstartedPagePageModule)
  
  },
 
  {
    path: 'home',

    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'hose-page/:id',
    loadChildren: () => import('./hose-page/hose-page.module').then( m => m.HosePagePageModule)
  },
  {
    path: 'box-hose/:id',
    loadChildren: () => import('./box-hose/box-hose.module').then( m => m.BoxHosePageModule)
  },
  {
    path: 'endfitting-hose/:id',
    loadChildren: () => import('./endfitting-hose/endfitting-hose.module').then( m => m.EndfittingHosePageModule)
  },
  {
    path: 'assembly-hose/:id',
    loadChildren: () => import('./assembly-hose/assembly-hose.module').then( m => m.AssemblyHosePageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./cart-page/cart-page.module').then( m => m.CartPagePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'checkout-addressadd',
    loadChildren: () => import('./checkout-addressadd/checkout-addressadd.module').then( m => m.CheckoutAddressaddPageModule)
  },
  {
    path: 'checkout-addressedit',
    loadChildren: () => import('./checkout-addressedit/checkout-addressedit.module').then( m => m.CheckoutAddresseditPageModule)
  },
  {
    path: 'checkout-online',
    loadChildren: () => import('./checkout-online/checkout-online.module').then( m => m.CheckoutOnlinePageModule)
  },
  {
    path: 'order-success',
    loadChildren: () => import('./order-success/order-success.module').then( m => m.OrderSuccessPageModule)
  },
  {
    path: 'order-failed',
    loadChildren: () => import('./order-failed/order-failed.module').then( m => m.OrderFailedPageModule)
  },
  {
    path: 'address-add',
    loadChildren: () => import('./address-add/address-add.module').then( m => m.AddressAddPageModule)
  },
  {
    path: 'address-list',
    loadChildren: () => import('./address-list/address-list.module').then( m => m.AddressListPageModule)
  },
  {
    path: 'address-update',
    loadChildren: () => import('./address-update/address-update.module').then( m => m.AddressUpdatePageModule)
  },
  {
    path: 'order-list',
    loadChildren: () => import('./order-list/order-list.module').then( m => m.OrderListPageModule)
  },
  {
    path: 'automotive/:id',
    loadChildren: () => import('./automotive/automotive.module').then( m => m.AutomotivePageModule)
  },
  {
    path: 'earth-moving/:id',
    loadChildren: () => import('./earth-moving/earth-moving.module').then( m => m.EarthMovingPageModule)
  },
  {
    path: 'direct-buy/:id',
    loadChildren: () => import('./direct-buy/direct-buy.module').then( m => m.DirectBuyPageModule)
  },
  {
    path: 'getstarted-page',
    loadChildren: () => import('./getstarted-page/getstarted-page.module').then( m => m.GetstartedPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
