import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, RouterModule } from '@angular/router';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule } from '@angular/forms';
import { panelbarRouting, appRoutingProviders, PanelbarRoutes } from './app-routing.module';
import { HomeComponent } from '../app/home-component/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { AuthorsService } from './library/authors-component/authorsService';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ArticlesService } from '../app/library/articles-component/articlesService';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BooksService } from './library/books-component/booksService';
import { JournalsService } from './library/journals-component/journalsService';
import { PublishersService } from './library/publishers-component/publishersService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule,
    panelbarRouting,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GridModule,
    PopupModule,
    DropDownsModule,
    HttpClientModule
  ],

  providers: [
    appRoutingProviders,
    { provide: APP_BASE_HREF, useValue: window.location.pathname },
    {
      deps: [HttpClient],
      provide: AuthorsService,
      useFactory: (jsonp: HttpClient) => () => new AuthorsService(jsonp)
    },
    {
      deps: [HttpClient],
      provide: ArticlesService,
      useFactory: (jsonp: HttpClient) => () => new ArticlesService(jsonp)
    },
    {
      deps: [HttpClient],
      provide: BooksService,
      useFactory: (jsonp: HttpClient) => () => new BooksService(jsonp)
    },
    {
      deps: [HttpClient],
      provide: JournalsService,
      useFactory: (jsonp: HttpClient) => () => new JournalsService(jsonp)
    },
    {
      deps: [HttpClient],
      provide: PublishersService,
      useFactory: (jsonp: HttpClient) => () => new PublishersService(jsonp)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
