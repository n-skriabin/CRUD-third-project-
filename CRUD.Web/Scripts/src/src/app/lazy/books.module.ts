import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid/dist/es/grid.module';
import { BooksComponent } from '../books-component/booksComponent';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropDownsModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';

const routes: Routes = [
  { path: 'load-BooksTable', component: BooksComponent }
];

@NgModule({
  imports:
    [RouterModule.forChild(routes), CommonModule, GridModule, DropDownsModule, DropDownListModule, ReactiveFormsModule, FormsModule],
  declarations:
    [BooksComponent]
})

export class BooksModule {
}