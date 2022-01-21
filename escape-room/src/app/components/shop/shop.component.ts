import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductData } from 'src/app/models/product-data';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productData: ProductData = {} as ProductData;

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  bgActive(){
    const container = document.getElementById('tab1');
    const bgButton = document.getElementById('bgButton');
    container?.classList.remove('tab2');
    container?.classList.remove('tab3');
    bgButton?.addEventListener('click', () => {container?.classList.remove('tab2'); container?.classList.remove('tab3');});
  }

  mActive(){
    const container = document.getElementById('tab2');
    const mButton = document.getElementById('bgButton');
    container?.classList.remove('tab1');
    container?.classList.remove('tab3');
    mButton?.addEventListener('click', () => {container?.classList.remove('tab1'); container?.classList.remove('tab3');});
  }

  vActive(){
    const container = document.getElementById('tab3');
    const vButton = document.getElementById('bgButton');
    container?.classList.remove('tab2');
    container?.classList.remove('tab1');
    vButton?.addEventListener('click', () => {container?.classList.remove('tab2'); container?.classList.remove('tab1');});
  }

  showCart(){
    this.router.navigateByUrl('/cart');
    // this.productData.name = this.
  }
}