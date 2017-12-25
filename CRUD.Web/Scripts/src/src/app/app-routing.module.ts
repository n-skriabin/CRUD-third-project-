import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from "../app/home-component/home.component";
import { AuthorsComponent } from "../app/authors-component/authors-component";
import { ProductsComponent } from "../app/articles-component/products.component";

export const PanelbarRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Authors table', component: AuthorsComponent },
    { path: 'Articles table', component: ProductsComponent }
];

export const appRoutingProviders: any[] = [
];

export const panelbarRouting: ModuleWithProviders = RouterModule.forRoot(PanelbarRoutes);
