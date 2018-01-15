import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid/dist/es/grid.module';
import { ArticlesComponent } from './articles-component/articlesComponent';
import { DropDownsModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsComponent } from './authors-component/authorsComponent';
import { BooksComponent } from './books-component/booksComponent';
import { JournalsComponent } from './journals-component/journalsComponent';
import { PublishersComponent } from './publishers-component/publishersComponent';

const routes: Routes = [
  { path: 'load-AuthorsTable', component: AuthorsComponent },
  { path: 'load-ArticlesTable', component: ArticlesComponent },
  { path: 'load-BooksTable', component: BooksComponent },
  { path: 'load-JournalsTable', component: JournalsComponent },
  { path: 'load-PublishersTable', component: PublishersComponent }
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
    [
          AuthorsComponent,
          ArticlesComponent,
          BooksComponent,
          JournalsComponent,
          PublishersComponent
    ]
  })

export class LibraryModule {}