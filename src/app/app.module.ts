import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsComponent } from './Components/donuts/donuts.component';
import { DonutDetailComponent } from './Components/donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './Components/famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './Components/famous-person-detail/famous-person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent,
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
