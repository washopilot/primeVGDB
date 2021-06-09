import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css'],
})
export class DataviewComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getGameList().subscribe(
      ({ results }) => {
        results.forEach((element: any) => {
          console.log(element.name);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
