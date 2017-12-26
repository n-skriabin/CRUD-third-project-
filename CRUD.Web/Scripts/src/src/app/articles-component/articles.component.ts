import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { ArticlesService } from './articles.service';
import { AuthorsService } from '../authors-component/author-edit.service';

import { Author } from '../authors-component/author-model';
import { Article } from './article-model';

const formGroup = dataItem => new FormGroup({
  'Id': new FormControl(dataItem.Id),
        'Name': new FormControl(dataItem.Name, Validators.required),
        'Year': new FormControl(dataItem.Year, Validators.required),
        'AuthorId': new FormControl(dataItem.AuthorId, Validators.required),
});

/* import { categories } from './categories'; */

@Component({
    selector: 'articles-table',
    templateUrl: './articles.component.html' 
})
export class ProductsComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public authors: Author[] = [];
    public authorsId: string;
    public formGroup: FormGroup;
    public selectedItem: string;
    public selectedAuthorId: string;
    public gridState: State = {
      sort: [],
      skip: 0,
      take: 10
    };
  
    private editServiceArticle: ArticlesService;
    private editServiceAuthor: AuthorsService;
    private editedRowIndex: number;

    public author(id: string): Author {
      this.selectedAuthorId = id;
      /* console.log('выбранный автор - ' + id); */
      return this.authors.find(x => x.Id === id);
  }
  
    constructor( @Inject(ArticlesService) editServiceFactoryArticle: any, @Inject(AuthorsService) editServiceFactoryAuthor: any) {
      this.editServiceArticle = editServiceFactoryArticle();
      this.editServiceAuthor = editServiceFactoryAuthor();
    }
  
    public ngOnInit(): void {
      this.view = this.editServiceArticle.map(data => process(data, this.gridState));
      this.editServiceArticle.readAuthors().subscribe((data: Author[]) => {this.authors = data; console.log(this.authors);});
      this.editServiceArticle.read();
    }
  
    public addHandler({ sender }) {
      this.closeEditor(sender);
  
      this.formGroup = new FormGroup({
        'Id': new FormControl(),
        'Name': new FormControl('', Validators.required),
        'Year': new FormControl('', Validators.required),
        'AuthorId': new FormControl(Validators.required),
      });

      console.log('form group');
      console.log(this.formGroup);
  
      sender.addRow(this.formGroup);
    }
  
    public editHandler({ sender, rowIndex, dataItem }) {
      this.closeEditor(sender);
  
      this.formGroup = new FormGroup({
        'Id': new FormControl(dataItem.Id),
        'Name': new FormControl(dataItem.Name, Validators.required),
        'Year': new FormControl(dataItem.Year, Validators.required),
        'AuthorId': new FormControl(dataItem.AuthorId),
      });
  
      this.editedRowIndex = rowIndex;
  
      sender.editRow(rowIndex, this.formGroup);
    }
  
    public cancelHandler({ sender, rowIndex }) {
      this.closeEditor(sender, rowIndex);
    }

    public saveHandler({ sender, rowIndex, formGroup, isNew }) {
      const article: Article = formGroup.value;
      /* article.AuthorId = this.selectedAuthorId; */
      console.log('article - ');
      console.log(article);
      this.editServiceArticle.save(article, isNew);
  
      sender.closeRow(rowIndex);
    }
  
    public removeHandler({ dataItem }) {
      this.editServiceArticle.remove(dataItem);
    }
  
    private closeEditor(grid, rowIndex = this.editedRowIndex) {
      grid.closeRow(rowIndex);
      this.editedRowIndex = undefined;
      this.formGroup = undefined;
    }
}
