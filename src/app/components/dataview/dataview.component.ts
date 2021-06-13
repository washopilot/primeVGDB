import { Component, OnInit } from '@angular/core';
import { APIResponse, Result } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css'],
})
export class DataviewComponent implements OnInit {
  games: Result[] = [];
  totalRecords: number = 0;
  loading: boolean = true;
  first: number = 0;
  rows: number = 0;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  loadData(event: LazyLoadEvent) {
    this.first = event.first || 0;
    this.rows = event.rows || 1;
    this.getList(this.first / this.rows + 1, this.rows);
  }

  getList(page?: number, page_size?: number) {
    this.loading = true;
    this.httpService.getGameData(page, page_size).subscribe(
      (gameList: APIResponse) => {
        this.games = gameList.results;
        this.totalRecords = gameList.count;
        this.loading = false;
        console.log(this.games);
        console.log(gameList);
        console.log(this.first, this.rows, this.totalRecords);
      },
      (error) => console.log(error)
    );
  }
}
