import {NgModule} from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from "../app/home-component/home.component";
import { AuthorsComponent } from "../app/library/authors-component/authorsComponent";
import { ArticlesComponent } from "../app/library/articles-component/articlesComponent";
import { BooksComponent } from "./library/books-component/booksComponent";
import { JournalsComponent } from './library/journals-component/journalsComponent';
import { PublishersComponent } from './library/publishers-component/publishersComponent';
import { APP_BASE_HREF } from "@angular/common";

export const PanelbarRoutes: Routes = [
    { path: '', loadChildren: './home-component/home.module#HomeModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(PanelbarRoutes)],
    exports: [RouterModule],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

export class AppRoutingModule{}
