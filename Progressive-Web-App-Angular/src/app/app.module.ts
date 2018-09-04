import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//modulos
import { RoutingModule } from './app.router';

//Providers
import { MenuService } from './providers/menu.service';
import { ProductsService } from './providers/products.service';
import { StorageService } from './providers/storage.service';
import { CartService } from './providers/cart.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CartbarComponent } from './components/cartbar/cartbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    SearchbarComponent,
    CartbarComponent,
    FooterComponent,
    ProductCardComponent,
    ProductListComponent,
    BannerComponent,
    HomePageComponent,
    ProductsPageComponent,
    ErrorPageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule

  ],
  providers: [MenuService, ProductsService, StorageService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
