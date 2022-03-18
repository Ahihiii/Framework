import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product = [
    {
      name: "Ahihii",
      price: 0,
      desc: "Ahihii"
    }
  ]

  newProduct = {
    name: '',
    price: 0,
    desc: ''
  }

  onSubmit(product :any){

    product.push(this.newProduct);

    console.log(this.newProduct);

    this.newProduct = {
      name: '',
      price: 0,
      desc: ''
    }
  }

}
