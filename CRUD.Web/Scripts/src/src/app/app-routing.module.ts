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
    { path: 'Authors table', component: AuthorsComponent },
    { path: 'Articles table', component: ArticlesComponent },
    { path: 'Books table', component: BooksComponent },
    { path: 'Journals table', component: JournalsComponent},
    { path: 'Publishers table', component: PublishersComponent}
];

export const appRoutingProviders: any[] = [];

export const panelbarRouting: ModuleWithProviders = RouterModule.forRoot(PanelbarRoutes);
