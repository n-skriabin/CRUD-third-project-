import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid/dist/es/grid.module';
import { DropDownsModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'load-Home', component: HomeComponent },
    { path: 'Authors', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Articles', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Books', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Journals', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Publishers', loadChildren: '../library/library.module#LibraryModule' }
];

@NgModule({
    imports:
        [
            /* HomeRoutingModule, */
            RouterModule.forChild(routes),
            CommonModule,
            GridModule,
            DropDownsModule,
            DropDownListModule,
            ReactiveFormsModule,
            FormsModule
        ],
    declarations:
        [HomeComponent]
})

export class HomeModule { }