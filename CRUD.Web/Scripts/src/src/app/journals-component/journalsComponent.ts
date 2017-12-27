import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { forEach } from '@angular/router/src/utils/collection';
import { JournalsService } from './journalsService';
import { ArticlesService } from '../articles-component/articlesService';
import { Article } from '../articles-component/articleModel';
import { Journal } from '../journals-component/journalModel'

const formGroup = dataItem => new FormGroup({
        'Id': new FormControl(dataItem.Id),
        'Name': new FormControl(dataItem.Name, Validators.required),
        'Date': new FormControl(dataItem.Date, Validators.required),
        'ArticleIds': new FormControl(dataItem.ArticleIds, Validators.required),
});

@Component({
  selector: 'app-journals',
  templateUrl: './journalsView.html',
})
export class JournalsComponent implements OnInit {
  public selectedItems: Article[] = [];
  private editServiceArticle: ArticlesService;
  private editServiceJournal: JournalsService;
  public articlesForDefaultValue: Article[] = [];
  public articles: Article[] = [];
  articleNames: string = '';

  authorsString: string;

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;
  private editedRowIndex: number;

  constructor(@Inject(ArticlesService) editServiceFactoryArticle: any, @Inject(JournalsService) editServiceFactoryJournal: any, private titleService: Title) {
    this.editServiceArticle = editServiceFactoryArticle();
    this.editServiceJournal = editServiceFactoryJournal();
  }

  ngOnInit() {
    this.editServiceJournal.readArticles().subscribe((data: Article[]) => {this.articles = data;});
    this.view = this.editServiceJournal.map(data => process(data, this.gridState));
    this.editServiceJournal.read();
    this.titleService.setTitle('Journals Page');
  }

  public articlesView(id: string[]=[]): string {  
    this.articleNames = " ";
    if(id[0] !== ""){
      for(let i = 0; i <= id.length-2; i++){
        if(this.articles.find(x => x.Id === id[i]) !== undefined)
        {
          this.articleNames += this.articles.find(x => x.Id === id[i]).Name + ', ';
        }
      }
      if(this.articles.find(x => x.Id === id[id.length-1]) !== undefined)
      {
        this.articleNames += this.articles.find(x => x.Id === id[id.length-1]).Name + '.';   
      }
   }
   return this.articleNames;
  }

  public addHandler({ sender }) {
    this.closeEditor(sender);

    this.selectedItems = undefined; 
    this.formGroup = new FormGroup({
      'Id': new FormControl(),
      'Name': new FormControl('', Validators.required),
      'Date': new FormControl('', Validators.required),
      'ArticleIds': new FormControl(Validators.required),
    });

    sender.addRow(this.formGroup);
  }

  public selectFromArticles(articleIds: string []): Article[]{
    for(let i = 0; i < articleIds.length; i++){
      this.articlesForDefaultValue[i] = this.articles.find(item => item.Id === articleIds[i]);
    }
    return this.articlesForDefaultValue;
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    
    this.selectedItems = this.selectFromArticles(dataItem.ArticleIds);
    this.formGroup = new FormGroup({
      'Id': new FormControl(dataItem.Id),
      'Name': new FormControl(dataItem.Name, Validators.required),
      'Date': new FormControl(dataItem.Date, Validators.required),
      'ArticleIds': new FormControl(dataItem.ArticleIds, Validators.required),
    });
    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const journal: Journal = formGroup.value;
    console.log('journal object:');
    console.log(journal);
    journal.ArticleIds = [];
    for(let i = 0;i < this.selectedItems.length; i++){
      journal.ArticleIds[i] = this.selectedItems[i].Id;
    }
    this.selectedItems = undefined;
    this.editServiceJournal.save(journal, isNew);

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    
    this.editServiceJournal.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
