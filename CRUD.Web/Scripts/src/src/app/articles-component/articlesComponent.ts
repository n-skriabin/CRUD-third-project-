import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { ArticlesService } from './articlesService';
import { AuthorsService } from '../authors-component/authorsService';

import { Author } from '../authors-component/authorModel';
import { Article } from './articleModel';

const formGroup = dataItem => new FormGroup({
  'Id': new FormControl(dataItem.Id),
        'Name': new FormControl(dataItem.Name, Validators.required),
        'Year': new FormControl(dataItem.Year, Validators.required),
        'AuthorId': new FormControl(dataItem.AuthorId, Validators.required),
});

@Component({
    selector: 'app-articles',
    templateUrl: './articlesView.html' 
})
export class ArticlesComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public authors: Author[] = [];
    public authorsId: string;
    public formGroup: FormGroup;
    public selectedItem: string;
    public gridState: State = {
      sort: [],
      skip: 0,
      take: 10
    };
  
    private editServiceArticle: ArticlesService;
    private editServiceAuthor: AuthorsService;
    private editedRowIndex: number;

    public author(id: string): Author {
      return this.authors.find(x => x.Id === id);
  }
  
    constructor( @Inject(ArticlesService) editServiceFactoryArticle: any, @Inject(AuthorsService) editServiceFactoryAuthor: any, private titleService: Title) {
      this.editServiceArticle = editServiceFactoryArticle();
      this.editServiceAuthor = editServiceFactoryAuthor();
    }
  
    public ngOnInit(): void {
      this.view = this.editServiceArticle.map(data => process(data, this.gridState));
      this.editServiceArticle.readAuthors().subscribe((data: Author[]) => {this.authors = data; console.log(this.authors);});
      this.titleService.setTitle('Articles Page');
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
