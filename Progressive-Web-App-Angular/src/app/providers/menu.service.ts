import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  opened: boolean = false;
  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      route: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Produtos',
      route: '/products'
    }
  ]
  constructor() { }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  //   $("section.outer").click(function(){
  //     $("section.outer").removeClass('animated slideInLeft').addClass('animated slideInRight');
  // });

  }

  fix() {
    if (document.body.scrollTop > 65) {
      $('section.outer').addClass('margin-fix');
    } else {
      $('section.outer').removeClass('margin-fix');
    }
  }
}
