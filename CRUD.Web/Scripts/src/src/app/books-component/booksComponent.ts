import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Book } from './bookModel';
import { BooksService } from './booksService';
import { AuthorsService } from '../authors-component/authorsService';
import { Author } from '../authors-component/authorModel';
import { forEach } from '@angular/router/src/utils/collection';

const formGroup = dataItem => new FormGroup({
  'Id': new FormControl(dataItem.Id),
        'Name': new FormControl(dataItem.Name, Validators.required),
        'Year': new FormControl(dataItem.Year, Validators.required),
        'AuthorIds': new FormControl(dataItem.AuthorIds, Validators.required),
});

@Component({
  selector: 'app-books',
  templateUrl: './booksView.html',
})
export class BooksComponent implements OnInit {

  public selectedItems: Author[] = [];
  private editServiceAuthor: AuthorsService;
  private editServiceBook: BooksService;
  public authorsForDefaultValue: Author[]=[];
  public authors: Author[] = [];
  authorAbbreviateds: string = '';

  authorsString: string;

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;
  private editedRowIndex: number;

  constructor(@Inject(AuthorsService) editServiceFactoryAuthor: any, @Inject(BooksService) editServiceFactoryBook: any, private titleService: Title) {
    this.editServiceAuthor = editServiceFactoryAuthor();
    this.editServiceBook = editServiceFactoryBook();
  }

  ngOnInit() {
    this.editServiceBook.readAuthors().subscribe((data: Author[]) => {this.authors = data;});
    this.view = this.editServiceBook.map(data => process(data, this.gridState));
    this.editServiceBook.read();
    this.titleService.setTitle('Books Page');
  }

  public authorsView(id: string[]=[]): string {  
    this.authorAbbreviateds = " ";
    if(id[0] !== ""){
      for(let i = 0; i <= id.length-2; i++){
        if(this.authors.find(x => x.Id === id[i]) !== undefined)
        {
          this.authorAbbreviateds += this.authors.find(x => x.Id === id[i]).Abbreviated + ', ';
        }
      }
      if(this.authors.find(x => x.Id === id[id.length-1]) !== undefined)
      {
        this.authorAbbreviateds += this.authors.find(x => x.Id === id[id.length-1]).Abbreviated + '.';   
      }
   }
   return this.authorAbbreviateds;
  }

  public addHandler({ sender }) {
    this.closeEditor(sender);

    this.selectedItems = undefined; 
    this.formGroup = new FormGroup({
      'Id': new FormControl(),
      'Name': new FormControl('', Validators.required),
      'Year': new FormControl('', Validators.required),
      'AuthorIds': new FormControl(Validators.required),
    });

    sender.addRow(this.formGroup);
  }

  public selectFromAuthors(authorIds: string []): Author[]{
    for(let i = 0; i < authorIds.length; i++){
      this.authorsForDefaultValue[i] = this.authors.find(item => item.Id === authorIds[i]);
    }
    return this.authorsForDefaultValue;
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    
    this.selectedItems = this.selectFromAuthors(dataItem.AuthorIds);
    this.formGroup = new FormGroup({
      'Id': new FormControl(dataItem.Id),
      'Name': new FormControl(dataItem.Name, Validators.required),
      'Year': new FormControl(dataItem.Year, Validators.required),
      'AuthorIds': new FormControl(dataItem.AuthorIds, Validators.required),
    });
    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const book: Book = formGroup.value;
    console.log(this.selectedItems);
    book.AuthorIds = [];
    for(let i = 0;i < this.selectedItems.length; i++){
      book.AuthorIds[i] = this.selectedItems[i].Id;
    }
    this.selectedItems = undefined;
    this.editServiceBook.save(book, isNew);

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    
    this.editServiceBook.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
