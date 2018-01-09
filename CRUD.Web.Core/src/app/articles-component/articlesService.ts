import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../authors-component/authorModel';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const READ_ACTION = 'GetAll';
const CREATE_ACTION = 'Create';
const UPDATE_ACTION = 'Update';
const DELETE_ACTION = 'Delete';

const baseUrl = 'http://' + location.host + '/';
const controller = 'Articles/';

@Injectable()
export class ArticlesService extends BehaviorSubject<any[]> {
    constructor(private http: HttpClient) {
        super([]);
      }
    
      private data: any[] = [];

      public readAuthors(): Observable<Author[]>{
        return this.http.get<Author[]>(baseUrl + 'api/Authors/' + READ_ACTION);
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
          if (action == 'GetAll') {
          var url = baseUrl + 'api/' + controller + READ_ACTION;
          return this.http
            .get(url)
            .map(res => <any[]>res);
        }
    
        if (action == 'Create') {
          var url = baseUrl + 'api/' + controller + CREATE_ACTION;
          return this.http
            .post(url, data)
            .map(res => <any[]>res);
        }
    
        if (action == 'Update') {
          var url = baseUrl + 'api/' + controller + UPDATE_ACTION;
          return this.http
            .post(url, data)
            .map(res => <any[]>res);
        }
    
        if (action == 'Delete') {
          var url = baseUrl + 'api/' + controller + DELETE_ACTION;
          var id = data.Id;
          return this.http
            .post(url, data)
            .map(res => <any[]>res);
        }
      }
}

