import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { MapComponent } from './map/map.component';
import { MedianValuesComponent } from './median-values/median-values.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SortPipe,
    MapComponent,
    MedianValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
