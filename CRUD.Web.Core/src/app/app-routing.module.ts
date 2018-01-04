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
    { path: 'Authors', loadChildren: './lazy-components-modules/authors.module#AuthorsModule' },
    { path: 'Articles', loadChildren: './lazy-components-modules/articles.module#ArticlesModule' },
    { path: 'Books', loadChildren: './lazy-components-modules/books.module#BooksModule' },
    { path: 'Journals', loadChildren: './lazy-components-modules/journals.module#JournalsModule' },
    { path: 'Publishers', loadChildren: './lazy-components-modules/publishers.module#PublishersModule' }
];

export const appRoutingProviders: any[] = [];

export const panelbarRouting: ModuleWithProviders = RouterModule.forRoot(PanelbarRoutes);
