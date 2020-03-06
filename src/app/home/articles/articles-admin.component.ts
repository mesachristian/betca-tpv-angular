import {Component} from '@angular/core';
import {Article} from '../shared/article.model';
import {MatDialog} from '@angular/material';
import {ArticlesCreationDialogComponent} from './articles-creation-dialog.component';
import {EMPTY, from, Observable, of, range, throwError, timer} from 'rxjs';
import {delay, take} from 'rxjs/operators';
import {ArticlesMocksService} from './articles-mocks.service';
import {ArticlesDetailDialogComponent} from './articles-detail-dialog.component';
import {ArticleService} from '../shared/article.service';

@Component({
  templateUrl: 'articles-admin.component.html'
})

export class ArticlesAdminComponent {
  article: Article;
  title = 'Article Management';
  columns = ['code', 'description', 'retailPrice', 'stock'];
  data: Article[];
  isEdit: boolean;

  constructor(private dialog: MatDialog, private articlesMocksService: ArticlesMocksService, private articleService: ArticleService) {
    this.article = {description: null, provider: null, stock: null, retailPrice: null, discontinued: null, reference: null, code: null};
    // this.data = null;
  }

  search() {
    // TODO
    this.articleService.readAll().subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    // TODO
  }

  create() {
    this.isEdit = false;
    this.dialog.open(ArticlesCreationDialogComponent,
      {
        data: {
          isEdit: this.isEdit
        }
      }
    );
  }

  read(article: Article) {
    // TODO
    this.dialog.open(ArticlesDetailDialogComponent,
      {data: {
          code: article.code
        }}
    );
  }

  update(article: Article) {
    this.isEdit = true;
    this.dialog.open(ArticlesCreationDialogComponent,
      {data: {
        code: article.code,
        isEdit: this.isEdit
      }}
    );
  }

  delete(article: Article) {
    // TODO
  }
}
