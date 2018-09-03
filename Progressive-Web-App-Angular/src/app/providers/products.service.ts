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
}
