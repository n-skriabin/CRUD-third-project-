import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Article } from '../articles-component/articleModel';
import { Publisher } from './publisherModel';
import { Book } from '../books-component/bookModel';
import { Journal } from '../journals-component/journalModel';

const READ_ACTION = 'GetAll';
const CREATE_ACTION = 'Create';
const UPDATE_ACTION = 'Update';
const DELETE_ACTION = 'Delete';

const baseUrl = 'http://' + location.host + '/';
const controller = 'Publishers/';

@Injectable()
export class PublishersService extends BehaviorSubject<any[]> {
  constructor(private http: HttpClient) {
    super([]);
  }

  private data: any[] = [];

  public readBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(baseUrl + 'api/Books/' + READ_ACTION);
  }

  public readJournals(): Observable<Journal[]>{
    return this.http.get<Journal[]>(baseUrl + 'api/Journals/' + READ_ACTION);
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
      var url = baseUrl + '/api/' + controller + CREATE_ACTION;
      return this.http
        .post(url, data)
        .map(res => <any[]>res);
    }

    if (action == UPDATE_ACTION) {
      var url = baseUrl + '/api/' + controller + UPDATE_ACTION;
      return this.http
        .post(url, data)
        .map(res => <any[]>res);
    }

    if (action == DELETE_ACTION) {
      var url = baseUrl + '/api/' + controller + DELETE_ACTION;
      var id = data.Id;
      return this.http
        .post(url, data)
        .map(res => <any[]>res);
    }
  }
}
