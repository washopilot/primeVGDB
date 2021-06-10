import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataviewComponent } from './components/dataview/dataview.component';

@NgModule({
  declarations: [AppComponent, DataviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataViewModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
