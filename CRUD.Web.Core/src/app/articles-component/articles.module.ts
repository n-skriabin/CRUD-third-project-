import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid/dist/es/grid.module';
import { ArticlesComponent } from '../articles-component/articlesComponent';
import { DropDownsModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'load-ArticlesTable', component: ArticlesComponent }
];

@NgModule({
  imports:
    [RouterModule.forChild(routes), CommonModule, GridModule, DropDownsModule, DropDownListModule, ReactiveFormsModule, FormsModule],
  declarations:
    [ArticlesComponent]
})

export class ArticlesModule {
}