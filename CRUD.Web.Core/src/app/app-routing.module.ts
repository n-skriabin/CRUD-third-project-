import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from "../app/home-component/home.component";
import { AuthorsComponent } from "../app/library/authors-component/authorsComponent";
import { ArticlesComponent } from "../app/library/articles-component/articlesComponent";
import { BooksComponent } from "./library/books-component/booksComponent";
import { JournalsComponent } from './library/journals-component/journalsComponent';
import { PublishersComponent } from './library/publishers-component/publishersComponent';

export const PanelbarRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Authors', loadChildren: './library/library.module#LibraryModule' },
    { path: 'Articles', loadChildren: './library/library.module#LibraryModule' },
    { path: 'Books', loadChildren: './library/library.module#LibraryModule' },
    { path: 'Journals', loadChildren: './library/library.module#LibraryModule' },
    { path: 'Publishers', loadChildren: './library/library.module#LibraryModule' }
];

export const appRoutingProviders: any[] = [];

export const panelbarRouting: ModuleWithProviders = RouterModule.forRoot(PanelbarRoutes);
