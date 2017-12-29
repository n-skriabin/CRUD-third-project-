import { NgModule } from '@angular/core';
import { AuthorsComponent } from '../../authors-component/authorsComponent';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: 'load-AuthorsTable', component: AuthorsComponent },

];

@NgModule({
  imports:
    [RouterModule.forChild(routes), CommonModule],
  declarations:
    [AuthorsComponent]
})

export class AuthorsModule {}
