import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from "@angular/common";

export const PanelbarRoutes: Routes = [
    { path: '', loadChildren: './home.module#HomeModule' },
    { path: 'Home', loadChildren: './home.module#HomeModule' },
    { path: 'Authors', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Articles', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Books', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Journals', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Publishers', loadChildren: '../library/library.module#LibraryModule' }
];

@NgModule({
    imports: [RouterModule.forChild(PanelbarRoutes)],
    exports: [RouterModule],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

export class HomeRoutingModule{} 