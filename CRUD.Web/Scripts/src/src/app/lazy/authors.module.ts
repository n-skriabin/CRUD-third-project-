import { NgModule } from '@angular/core';
import { AuthorsComponent } from '../authors-component/authorsComponent';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid/dist/es/grid.module';

const routes: Routes = [
  { path: 'load-AuthorsTable', component: AuthorsComponent }
];

@NgModule({
  imports:
    [RouterModule.forChild(routes), CommonModule, GridModule],
  declarations:
    [AuthorsComponent]
})

export class AuthorsModule {
}
