import { Injectable } from '@angular/core';

const products = require('./products.json');
let BaseURL = window.location.href;
BaseURL =  BaseURL.substring(0, BaseURL.length-1);

import * as _ from 'lodash';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  list(){
    return new Promise((resolve, reject) => {

      products.map((product, i) => {
        //titulo no-formato-de-slug
        products[i].titleSlug = _.kebabCase(product.name);
        //a rota deste post
        products[i].router = '/products/' + products[i].titleSlug + '/' + products[i].id;
        //a URL deste post
        products[i].url = BaseURL + products[i].router;
      });
      resolve(products); //Resolve a lista de posts

    })
  }

  search(keyword: string) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let items: any[];
        if (products.length) {
          items = _.filter(products, (p) => {
            return p.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
          });
        }
        resolve(items);
      });
    })
  }

  scrollTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  }





}
