import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutDetailComponent } from './Components/donut-detail/donut-detail.component';
import { DonutsComponent } from './Components/donuts/donuts.component';
import { FamousPeopleComponent } from './Components/famous-people/famous-people.component';

const routes: Routes = [
  {path: "Donuts", component: DonutsComponent},
  {path: "Donuts/:id", component:DonutDetailComponent},
  {path: "Devs", component:FamousPeopleComponent},
  {path:"", redirectTo:"/Donuts", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
