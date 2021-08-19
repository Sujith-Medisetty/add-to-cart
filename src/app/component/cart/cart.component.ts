import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartproducts:any=[];
  public totalprice:number=0;
  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      this.cartproducts=data;
      this.totalprice=this.service.grandTotalPrice();
    });
  }

  deleteitem(product:any){
    this.service.removeCartItem(product);
  }

  deleteAll(){
    this.service.removeAllCart();
  }

}
