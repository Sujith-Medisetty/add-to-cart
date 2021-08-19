import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList:any;
  isLoading: boolean = false;
  entry:number=0;
  constructor(private api:ApiService, private service:CartService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(data=>{
      this.productList=data
      this.isLoading=true

      this.productList.forEach((data:any) => {
        Object.assign(data,{quantity:1,total:data.price});
      });
    })
  }

  addtocart(product:any){
    this.service.addToCart(product);
  }

  // increQuantity(product:any){
  //   this.service.increQuantity(product);
  // }

  openDialog(product:any){
    let dialogref=this.dialog.open(ProductDialogComponent,{data:{data:product},disableClose:true});
    
    dialogref.afterClosed().subscribe(result => {
      if(result==undefined){
        result=true;
      }
      console.log(` Dialog result : ${result}`);
    })
  }

}
