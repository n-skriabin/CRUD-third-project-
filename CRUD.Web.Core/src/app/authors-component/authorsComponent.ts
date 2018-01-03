import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Author } from '../authors-component/authorModel';
import { AuthorsService } from '../authors-component/authorsService';
import { GridModule } from '@progress/kendo-angular-grid/dist/es/grid.module';

@Component({
    selector: 'app-authors',
    templateUrl: './authorsView.html',
})

export class AuthorsComponent implements OnInit {
  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;

  private editService: AuthorsService;
  private editedRowIndex: number;

  constructor( @Inject(AuthorsService) editServiceFactory: any, private titleService: Title) {
    this.editService = editServiceFactory();
  }

  public ngOnInit(): void {
    this.view = this.editService.map(data => process(data, this.gridState));
    this.titleService.setTitle('Authors Page');
      this.editService.read();
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
