import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Author } from '../authors-component/authorModel';
import { BooksService } from './booksService';

@Component({
  selector: 'app-books',
  templateUrl: './booksView.html',
})
export class BooksComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;

  private editService: BooksService;
  private editedRowIndex: number;

  constructor( @Inject(BooksService) editServiceFactory: any, private titleService: Title) {
    this.editService = editServiceFactory();
   }

  ngOnInit() {
    this.view = this.editService.map(data => process(data, this.gridState));
    this.editService.read();
    this.titleService.setTitle('Books Page');
  }

  public addHandler({ sender }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      'Id': new FormControl(),
      'FirstName': new FormControl('', Validators.required),
      'LastName': new FormControl('', Validators.required),
      'Patronymic': new FormControl(),
    });

    sender.addRow(this.formGroup);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      'Id': new FormControl(dataItem.Id),
      'FirstName': new FormControl(dataItem.FirstName, Validators.required),
      'LastName': new FormControl(dataItem.LastName, Validators.required),
      'Patronymic': new FormControl(dataItem.Patronymic),
    });

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const author: Author = formGroup.value;

    this.editService.save(author, isNew);

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    this.editService.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
