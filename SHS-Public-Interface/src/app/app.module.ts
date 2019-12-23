import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicInterfaceComponent } from './public-interface/public-interface.component';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './home/home.component';
import { AddPropertyComponent } from './Seller/add-property/add-property.component';
import { AllPropertyComponent } from './Seller/all-property/all-property.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PublicInterfaceComponent,
    HeaderComponent,
    HomeComponent,
    AddPropertyComponent,
    AllPropertyComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
