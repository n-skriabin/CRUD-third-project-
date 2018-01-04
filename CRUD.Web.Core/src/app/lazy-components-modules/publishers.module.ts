import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid/dist/es/grid.module';
import { PublishersComponent } from '../publishers-component/publishersComponent';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropDownsModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';

const routes: Routes = [
  { path: 'load-PublishersTable', component: PublishersComponent }
];

@NgModule({
  imports:
    [RouterModule.forChild(routes), CommonModule, GridModule, DropDownsModule, DropDownListModule, ReactiveFormsModule, FormsModule],
  declarations:
    [PublishersComponent]
})

export class PublishersModule {
}