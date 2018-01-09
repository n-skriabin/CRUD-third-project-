import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Author} from './authorModel';

const READ_ACTION = 'GetAll';
const CREATE_ACTION = 'Create';
const UPDATE_ACTION = 'Update';
const DELETE_ACTION = 'Delete';

const baseUrl = 'http://' + location.host + '/';
const controller = 'Authors/';

@Injectable()
export class AuthorsService extends BehaviorSubject<any[]> {
  constructor(private http: HttpClient) {
    super([]);
  }

  private data: any[] = [];
  private dataAuthors: any[] = [];

  public readAuthors(): any[] {
    this.fetch(READ_ACTION)
      .do(dataAuthors => {
        this.dataAuthors = dataAuthors;
      })
      .subscribe(dataAuthors => {
        super.next(dataAuthors);
      });
      return this.dataAuthors;
  }

  public read() {
    if (this.data.length) {
      return super.next(this.data);
    }

    this.fetch(READ_ACTION)
      .do(data => {
        this.data = data;
      })
      .subscribe(data => {
        super.next(data);
      });
  }

  public save(data: any, isNew?: boolean) {
    const action = isNew ? CREATE_ACTION : UPDATE_ACTION;

    this.reset();

    this.fetch(action, data)
      .subscribe(() => this.read(), () => this.read());
  }

  public remove(data: any) {
    this.reset();

    this.fetch(DELETE_ACTION, data)
      .subscribe(() => this.read(), () => this.read());
  }

  public resetItem(dataItem: any) {
    if (!dataItem) { return; }

    const originalDataItem = this.data.find(item => item.Id === dataItem.Id);

    Object.assign(originalDataItem, dataItem);

    super.next(this.data);
  }

  private reset() {
    this.data = [];
  }

  private fetch(action: string = '', data?: any): Observable<any[]> {
      if (action == READ_ACTION) {
      var url = baseUrl + 'api/' + controller + READ_ACTION;
      return this.http
        .get(url)
        .map(res => <any[]>res);
    }

    if (action == CREATE_ACTION) {
      var url = baseUrl + 'api/' + controller + CREATE_ACTION;
      return this.http
        .post(url, data)
        .map(res => <any[]>res);
    }

    if (action == UPDATE_ACTION) {
      var url = baseUrl + 'api/' + controller + UPDATE_ACTION;
      return this.http
        .post(url, data)
        .map(res => <any[]>res);
    }

    if (action == DELETE_ACTION) {
      var url = baseUrl + 'api/' + controller + DELETE_ACTION;
      var id = data.Id;
      return this.http
        .post(url, data)
        .map(res => <any[]>res);
    }
  }
}
