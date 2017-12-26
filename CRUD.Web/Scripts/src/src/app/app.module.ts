import { AppComponent }   from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, RouterModule } from '@angular/router';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { panelbarRouting, appRoutingProviders } from './app-routing.module';
import { HomeComponent } from '../app/home-component/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { AuthorsService } from '../app/authors-component/author-edit.service';
import { AuthorsComponent } from './authors-component/authors-component';
import { ProductsComponent } from '../app/articles-component/articlesComponent';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ArticlesService } from '../app/articles-component/articlesService';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorsComponent,
    ProductsComponent],

    imports:      [
      BrowserModule,
      BrowserAnimationsModule,
      LayoutModule,
      RouterModule,
      panelbarRouting,

      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      GridModule,
      PopupModule,
      DropDownsModule,
      HttpClientModule
    ],
    
    providers:    [
      appRoutingProviders,
      { provide: APP_BASE_HREF, useValue : window.location.pathname },
      {
        deps: [HttpClient],
        provide: AuthorsService,
        useFactory: (jsonp: HttpClient) => () => new AuthorsService(jsonp)
      },
      {
        deps: [HttpClient],
        provide: ArticlesService,
        useFactory: (jsonp: HttpClient) => () => new ArticlesService(jsonp)
      }
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
