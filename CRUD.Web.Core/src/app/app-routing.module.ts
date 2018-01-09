import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from "../app/home-component/home.component";
import { AuthorsComponent } from "../app/authors-component/authorsComponent";
import { ArticlesComponent } from "../app/articles-component/articlesComponent";
import { BooksComponent } from "./books-component/booksComponent";
import { JournalsComponent } from './journals-component/journalsComponent';
import { PublishersComponent } from './publishers-component/publishersComponent';

export const PanelbarRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Authors', loadChildren: './authors-component/authors.module#AuthorsModule' },
    { path: 'Articles', loadChildren: './articles-component/articles.module#ArticlesModule' },
    { path: 'Books', loadChildren: './books-component/books.module#BooksModule' },
    { path: 'Journals', loadChildren: './journals-component/journals.module#JournalsModule' },
    { path: 'Publishers', loadChildren: './publishers-component/publishers.module#PublishersModule' }
];

export const appRoutingProviders: any[] = [];

export const panelbarRouting: ModuleWithProviders = RouterModule.forRoot(PanelbarRoutes);
