import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent implements OnInit {
  constructor(private _productsS: ProductsService) {}
  products!: any[];
  ngOnInit(): void {
    this._productsS.getProducts().subscribe((data) => {
      this.products = data.products;
      console.log(this.products);
      console.log(data.products);
    });
  }
}
