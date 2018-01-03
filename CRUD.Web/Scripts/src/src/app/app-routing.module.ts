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
    { path: 'Authors', component: AuthorsComponent },
    { path: 'Articles', component: ArticlesComponent },
    { path: 'Books', component: BooksComponent  },
    { path: 'Journals', component: JournalsComponent },
    { path: 'Publishers', component: PublishersComponent }
];

export const appRoutingProviders: any[] = [];

export const panelbarRouting: ModuleWithProviders = RouterModule.forRoot(PanelbarRoutes);
