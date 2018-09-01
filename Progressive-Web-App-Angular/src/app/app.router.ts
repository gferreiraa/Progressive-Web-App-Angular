import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  //home
  {
    path: '',
    component: HomePageComponent
  },
  //products
  {
    path: 'products',
    component: ProductsPageComponent
  },
  //products description
  {
    path: 'products/:slug/:id',
    component: ProductsPageComponent
  },
  //error 404
  {
    path: '**', component: ErrorPageComponent
  }

]

export const RoutingModule = RouterModule.forRoot(routes);
