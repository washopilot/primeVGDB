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
    this.httpService.getAll().subscribe(
      (result: any) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
