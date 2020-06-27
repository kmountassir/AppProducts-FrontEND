import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  product:Product=new Product(null,"",0.0);
  mode:boolean;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.mode=false;
  }

  OnaddProduct(data){
    this.productService.addRessource("products",data).subscribe(
      (product)=>{
        this.mode=true;
      }
    ); 
   
  }

}
