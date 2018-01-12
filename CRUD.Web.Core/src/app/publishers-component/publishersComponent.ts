import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { forEach } from '@angular/router/src/utils/collection';
import { PublishersService } from './publishersService';
import { ArticlesService } from '../articles-component/articlesService';
import { Journal } from '../journals-component/journalModel'
import { Book } from '../books-component/bookModel';
import { Publisher } from './publisherModel';

const formGroup = dataItem => new FormGroup({
        'Id': new FormControl(dataItem.Id),
        'Name': new FormControl(dataItem.Name, Validators.required),
        'BookIds': new FormControl(dataItem.BookIds, Validators.required),
        'JournalIds': new FormControl(dataItem.JournalIds, Validators.required),
});

@Component({
  selector: 'app-publishers',
  templateUrl: './publishersView.html',
})
export class PublishersComponent implements OnInit {
  public selectedBooksItems: Book[] = [];
  public selectedJournalsItems: Journal[] = [];

  private editServicePublisher: PublishersService;

  public booksForDefaultValue: Book[] = [];
  public journalsForDefaultValue: Journal[] = [];
  public books: Book[] = [];
  public journals: Journal[] = [];
  bookNames: string = '';
  journalNames: string = '';

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;
  private editedRowIndex: number;

  constructor(@Inject(PublishersService) editServiceFactoryPublisher: any, private titleService: Title) {
    this.editServicePublisher = editServiceFactoryPublisher();
  }

  ngOnInit() {
    this.titleService.setTitle('Publishers Page');
    this.editServicePublisher.readBooks().subscribe((data: Book[]) => {this.books = data;});
    this.editServicePublisher.readJournals().subscribe((data: Journal[]) => {this.journals = data;});
    this.view = this.editServicePublisher.map(data => process(data, this.gridState));
    this.editServicePublisher.read();
  }

  public booksView(books: Book[]=[]): string {  
    this.bookNames = " ";
    for(var i = 0;i < books.length-1; i++){
      this.bookNames += books[i].Name + ", ";
    }
    this.bookNames += books[books.length].Name + ".";
    return this.bookNames;
  }

  public journalsView(journals: Journal[]=[]): string {  
    this.journalNames = " ";
    for(var i = 0;i < journals.length-1; i++){
      this.journalNames += journals[i].Name + ", ";
    }
    this.journalNames += journals[journals.length].Name + ".";
    return this.journalNames;
  }

  public addHandler({ sender }) {
    this.closeEditor(sender);

    this.selectedBooksItems = undefined; 
    this.selectedJournalsItems = undefined; 
    this.formGroup = new FormGroup({
      'Id': new FormControl(),
      'Name': new FormControl('', Validators.required),
      'BookIds': new FormControl(Validators.required),
      'JournalIds': new FormControl(Validators.required),
    });

    sender.addRow(this.formGroup);
  }

  public selectFromBooks(bookIds: string []): Book[]{
    if(bookIds !== undefined){
      for(let i = 0; i < bookIds.length; i++){
        this.booksForDefaultValue[i] = this.books.find(item => item.Id === bookIds[i]);
      }
    }
    return this.booksForDefaultValue;
  }

  public selectFromJournals(journalIds: string []): Journal[]{
    if(journalIds !== undefined){
      for(let i = 0; i < journalIds.length; i++){
        this.journalsForDefaultValue[i] = this.journals.find(item => item.Id === journalIds[i]);
      }
    }
    return this.journalsForDefaultValue;
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    
    this.selectedBooksItems = this.selectFromBooks(dataItem.BookIds);
    this.selectedJournalsItems = this.selectFromJournals(dataItem.JournalIds);
    
    this.formGroup = new FormGroup({
      'Id': new FormControl(dataItem.Id),
      'Name': new FormControl(dataItem.Name, Validators.required),
      'BookIds': new FormControl(dataItem.BookIds, Validators.required),
      'JournalIds': new FormControl(dataItem.JournalIds, Validators.required),
    });
    
    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const publisher: Publisher = formGroup.value;
    publisher.BookIds = [];
    publisher.JournalIds = [];
    if(this.selectedBooksItems !== undefined){
      for(let i = 0;i < this.selectedBooksItems.length; i++){
        publisher.BookIds[i] = this.selectedBooksItems[i].Id;
      }
    }

    if(this.selectedJournalsItems !== undefined){
      for(let i = 0;i < this.selectedJournalsItems.length; i++){
        publisher.JournalIds[i] = this.selectedJournalsItems[i].Id;
      }
    }
    
    if(publisher.BookIds.length !== 0 && publisher.JournalIds.length !== 0)
    {
      this.selectedBooksItems = undefined; 
      this.selectedJournalsItems = undefined;
      this.editServicePublisher.save(publisher, isNew);
      sender.closeRow(rowIndex);
    }
    else
    {
      alert("Select at least one book and least one journal!");
    }
  }

  public removeHandler({ dataItem }) {
    
    this.editServicePublisher.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
