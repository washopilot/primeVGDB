import { Component, OnInit } from '@angular/core';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css'],
})
export class DataviewComponent implements OnInit {
  games: Array<Game> = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getGameList().subscribe(
      (gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(this.games);
        console.log(gameList);
      },
      (error) => console.log(error)
    );
  }
}
