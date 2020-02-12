import { Component, OnInit } from '@angular/core';
import { Product } from '../productEntities/product.entities';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  selectedCriteria:number =0;
  NewForm: boolean= false;
crt1={id:1,criteria:'crt1'};
crt2={id:2,criteria:'crt2'};
crt3={id:3,criteria:'crt3'};

	constructor(
		private productService: ProductService
	) { }
  openAddNewForm(){
    this.NewForm = true;
  }
  onClickSubmit(data){
    console.log("data", data);
    this.products= this.productService.addNewProduct(data);
    this.NewForm = false;
  }
	ngOnInit() {
		this.products = this.productService.findAll();
	}
  onChangeCriteria(event){
    this.products  = this.productService.findByCriteria(this.selectedCriteria);
  }
}
