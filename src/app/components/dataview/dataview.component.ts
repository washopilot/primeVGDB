import { Component, OnInit } from '@angular/core';
import { APIResponse, Result } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css'],
})
export class DataviewComponent implements OnInit {
  games: Result[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getGameList().subscribe(
      (gameList: APIResponse) => {
        this.games = gameList.results;
        console.log(this.games);
      },
      (error) => console.log(error)
    );
  }
}
