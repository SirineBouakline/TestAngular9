import { Component, OnInit } from '@angular/core';
import {Product} from '../Models/Product';
import {CalculService} from '../services/calcul.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  productlist: Product[];
  n: number;
  priceMax: number;
  hideForm: boolean;
  constructor( private calcul: CalculService) { }

  ngOnInit(): void {
    this.title = 'E-commerce';
    this.hideForm = true;
    this.productlist = [
      {id: 1, title: 'T-shirt 1', price: 29, quantity: 10, like: 0},
      {id: 2, title: 'T-shirt 2', price: 30, quantity: 0, like: 0},
      {id: 3, title: 'T-shirt 3', price: 100, quantity: 20, like: 0},
    ];
  }

  incrementLike(product: Product){
    let i = this.productlist.indexOf(product);
    this.productlist[i].like++;
  }
  pushProduct(p: Product){
    this.productlist.push(p);
    this.hideForm = true;
  }
  showForm(){
    this.hideForm = false;
  }
  getStat()
  {
    this.n = this.calcul.getStat(this.productlist, 'quantity', 0);
  }

}
