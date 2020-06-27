import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[];
  size:number=10;
  currentPage:number=0;
  totalPages:number;
  pages:number[];
  i:number;
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.OngetProducts(this.currentPage)
  }

  OngetProducts(i){
    this.currentPage=i;
    this.productService.getRessource("products",10,this.currentPage).subscribe(
      (products)=>{
        this.totalPages=products["page"].totalPages;
        this.pages = new Array(this.totalPages);
        this.currentPage=products["page"].number;
        this.products=products["_embedded"].products;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  OnNavigateToNewProduct(){
    this.router.navigateByUrl("/new-product");
  }
}
