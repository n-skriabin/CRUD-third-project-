import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid/dist/es/grid.module';
import { DropDownsModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports:
        [
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