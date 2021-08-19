import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public itemcount:number=0;

  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      
      let temp:number=0;
      data.map((a:any)=>{
        temp=temp+parseInt(a.quantity);
      })
      this.itemcount=temp;

    });
  }

}
