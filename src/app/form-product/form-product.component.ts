import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../Models/Product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product: Product;
  @Output() eventSaveProduct = new EventEmitter<Product>() ;
  constructor() { }

  ngOnInit(): void {
    this.product = new Product();
  }
  save(){
    this.product.like = 0;
    this.eventSaveProduct.emit(this.product);

  }

}
